import { useState, useEffect } from "react"

import axios from "axios"

import {
	useParams,
	useSearchParams,
	URLSearchParamsInit,
} from "react-router-dom"

import useSession from "../../hooks/useSession"

import {
	defaultRecentResults,
	RecentResults,
} from "../../types/anime/gogoanime"

import { baseGogoanime } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/gogoanime/recent/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function Recent() {
	const query: string = useParams().query ?? ""

	const [recentResults, setRecentResults] = useSession<RecentResults>(
		"recentGogo",
		defaultRecentResults
	)

	const [params, setParams]: [
		URLSearchParams,
		(
			nextInit: URLSearchParamsInit,
			navigateOptions?: { replace?: boolean; state?: any }
		) => void
	] = useSearchParams()

	const length: boolean = recentResults.results
		? recentResults.results.length > 1
		: false

	const page: number = parseInt(params.get("page") || "1", 10)

	const currentPage: number = Number(recentResults.currentPage) || 1

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const url: string = `${baseGogoanime}/recent-episodes?page=${page}`

		if (!length || page !== currentPage) {
			setLoading(true)
			axios
				.get(url)
				.then((response) => {
					const data: RecentResults = response.data
					setRecentResults(data)
				})
				.catch((error) => {
					setError(error)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [query, page])

	useEffect(() => {
		document.title = `Recent Anime | Gogoanime`
	})

	function back() {
		params.set("page", String(Number(recentResults.currentPage) - 1))
		setParams(params)
	}

	function next() {
		params.set("page", String(Number(recentResults.currentPage) + 1))
		setParams(params)
	}

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Recent Anime`} />
			<Page results={recentResults} back={back} next={next} />
		</>
	)
}
