import { useState, useEffect } from "react"

import axios from "axios"

import useSession from "../../hooks/useSession"

import { defaultRecentResults, RecentResults } from "../../types/movies/flixhq"

import { baseFlixhq } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/flixhq/recent/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function Movies() {
	const [recentMovies, setRecentMovies] = useSession<RecentResults>("recentMovies", defaultRecentResults)

	const length: boolean = recentMovies ? recentMovies.length > 1 : false

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<Error | null>(null)

	const status = sessionStorage.getItem("recentMovies") ? true : false

	useEffect(() => {
		if (status === false || length === false) {
			const url: string = `${baseFlixhq}/recent?type=movies`
			if (true) {
				setLoading(true)
				axios
					.get(url)
					.then((response) => {
						const data: RecentResults = response.data
						setRecentMovies(data)
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
		document.title = `Recent Movies | Flix HQ`
	})

	if (loading) return <Spinner />
	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Recent Movies`} />
			{recentMovies && status && length && <Page results={recentMovies} />}
		</>
	)
}
