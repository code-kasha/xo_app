import { useState, useEffect } from "react"

import axios from "axios"

import useSession from "../../hooks/useSession"

import { defaultTrendingResults, TrendingResults } from "../../types/movies/flixhq"

import { baseFlixhq } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/flixhq/trending/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function TrendingShows() {
	const [trendingShows, setTrendingShows] = useSession<TrendingResults>("trendingShows", defaultTrendingResults)

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<Error | null>(null)

	const status = sessionStorage.getItem("trendingShows") ? true : false

	useEffect(() => {
		if (status === false || !trendingShows.length) {
			const url: string = `${baseFlixhq}/trending?type=tv`
			if (true) {
				setLoading(true)
				axios
					.get(url)
					.then((response) => {
						const data: TrendingResults = response.data
						setTrendingShows(data)
					})
					.catch((error) => {
						setError(error)
					})
					.finally(() => {
						setLoading(false)
					})
			}
		}
	}, [])

	useEffect(() => {
		document.title = `Trending Shows | Flix HQ`
	})

	if (loading) return <Spinner />
	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Trending Shows`} />
			{trendingShows && status && <Page results={trendingShows} />}
		</>
	)
}
