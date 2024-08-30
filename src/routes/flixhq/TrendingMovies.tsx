import { useState, useEffect } from "react"

import axios from "axios"

import useSession from "../../hooks/useSession"

import { defaultTrendingResults, TrendingResults } from "../../types/movies/flixhq"

import { baseFlixhq } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/flixhq/trending/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function TrendingMovies() {
	const [trendingMovies, setTrendingMovies] = useSession<TrendingResults>("trendingMovies", defaultTrendingResults)

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<Error | null>(null)

	const status = sessionStorage.getItem("trendingMovies") ? true : false

	useEffect(() => {
		if (status === false || !trendingMovies.length) {
			const url: string = `${baseFlixhq}/trending`
			if (true) {
				setLoading(true)
				axios
					.get(url)
					.then((response) => {
						const data: TrendingResults = response.data
						setTrendingMovies(data)
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
		document.title = `Trending Movies | Flix HQ`
	})

	if (loading) return <Spinner />
	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Trending Movies`} />
			{trendingMovies && status && <Page results={trendingMovies} />}
		</>
	)
}
