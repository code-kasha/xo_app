import { useState, useEffect } from "react"

import axios from "axios"

import {
	useParams,
	useSearchParams,
	URLSearchParamsInit,
} from "react-router-dom"

import useSession from "../../hooks/useSession"

import {
	defaultPopularResults,
	PopularResults,
} from "../../types/anime/gogoanime"

import { baseGogoanime } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/gogoanime/popular/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function Popular() {
	const query: string = useParams().query ?? ""

	const [popularResults, setPopularResults] = useSession<PopularResults>(
		"popularGogo",
		defaultPopularResults
	)

	const [params, setParams]: [
		URLSearchParams,
		(
			nextInit: URLSearchParamsInit,
			navigateOptions?: { replace?: boolean; state?: any }
		) => void
	] = useSearchParams()

	const length: boolean = popularResults.results
		? popularResults.results.length > 1
		: false

	const page: number = parseInt(params.get("page") || "1", 10)

	const currentPage: number = Number(popularResults.currentPage) || 1

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const url: string = `${baseGogoanime}/popular?page=${page}`

		if (!length || page !== currentPage) {
			setLoading(true)
			axios
				.get(url)
				.then((response) => {
					const data: PopularResults = response.data
					setPopularResults(data)
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
		document.title = `Popular Anime | Gogoanime`
	})

	function back() {
		params.set("page", String(Number(popularResults.currentPage) - 1))
		setParams(params)
	}

	function next() {
		params.set("page", String(Number(popularResults.currentPage) + 1))
		setParams(params)
	}

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Popular Anime`} />
			<Page results={popularResults} back={back} next={next} />
		</>
	)
}
