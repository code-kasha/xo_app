import { useState, useEffect } from "react"

import axios from "axios"

import useSession from "../../hooks/useSession"

import { defaultResults, Results } from "../../types/movies/tmdb"

import { baseTMDB } from "../../utils/helpers"

import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"
import Title from "../../components/core/Title"
import Page from "../../components/tmdb/trending/Page"
export default function Trending() {
	const [trendingShows, setTrendingShows] = useSession<Results>("trendingTMDB", defaultResults)

	const [params, setParams]: [
		URLSearchParams,
		(nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean; state?: any }) => void
	] = useSearchParams()

	const page: number = parseInt(params.get("page") || "1", 10)

	const currentPage: number = Number(trendingShows.currentPage) || 1

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<Error | null>(null)

	const status = sessionStorage.getItem("trendingTMDB") ? true : false

	const length: boolean = trendingShows.results ? trendingShows.results.length > 1 : false

	useEffect(() => {
		if (status === false || !length || page !== currentPage) {
			const url: string = `${baseTMDB}/trending?page=${page}`
			setLoading(true)
			axios
				.get(url)
				.then((response) => {
					const data: Results = response.data
					setTrendingShows(data)
				})
				.catch((error) => {
					setError(error)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [page])

	useEffect(() => {
		document.title = `Trending | Flix HQ`
	})

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	function back() {
		params.set("page", String(Number(trendingShows.currentPage) - 1))
		setParams(params)
	}

	function next() {
		params.set("page", String(Number(trendingShows.currentPage) + 1))
		setParams(params)
	}
	return (
		<>
			<Title title={"Trending"} />
			<Page results={trendingShows} back={back} next={next} />
		</>
	)
}
