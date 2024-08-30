import { useState, useEffect } from "react"

import axios from "axios"

import useSession from "../../hooks/useSession"

import { defaultRecentResults, RecentResults } from "../../types/movies/flixhq"

import { baseFlixhq } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/flixhq/recent/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function Shows() {
	const [recentShows, setRecentShows] = useSession<RecentResults>("recentShows", defaultRecentResults)

	const length: boolean = recentShows ? recentShows.length > 1 : false

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<Error | null>(null)

	const status = sessionStorage.getItem("recentShows") ? true : false

	useEffect(() => {
		if (status === false || length === false) {
			const url: string = `${baseFlixhq}/recent?type=tv`
			if (true) {
				setLoading(true)
				axios
					.get(url)
					.then((response) => {
						const data: RecentResults = response.data
						setRecentShows(data)
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
		document.title = `Recent Shows | Flix HQ`
	})

	if (loading) return <Spinner />
	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Recent Shows`} />
			{recentShows && status && length && <Page results={recentShows} />}
		</>
	)
}
