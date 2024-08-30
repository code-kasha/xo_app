import { useState, useEffect } from "react"

import axios from "axios"

import { useParams, useSearchParams, URLSearchParamsInit } from "react-router-dom"

import useSession from "../../hooks/useSession"

import { defaultResults, Results } from "../../types/movies/flixhq"

import { baseFlixhq } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/flixhq/search/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function Search() {
	const query: string = useParams().query ?? ""

	const [params, setParams]: [
		URLSearchParams,
		(nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean; state?: any }) => void
	] = useSearchParams()

	const [searchQuery, setSearchQuery] = useSession<string>("query", "")
	const [searchResults, setSearchResults] = useSession<Results>("results", defaultResults)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const page: number = parseInt(params.get("page") || "1", 10)

	const currentPage: number = Number(searchResults.currentPage) || 1

	const length: boolean = searchResults.results ? searchResults.results.length > 1 : false

	useEffect(() => {
		const url: string = `${baseFlixhq}/${query}?page=${page}`

		if (!length || searchQuery !== query || page !== currentPage) {
			setLoading(true)
			axios
				.get(url)
				.then((response) => {
					const data: Results = response.data
					setSearchResults(data)
					setSearchQuery(query)
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
		document.title = `Search - ${query} | Flix HQ`
	})

	function back() {
		params.set("page", String(Number(searchResults.currentPage) - 1))
		setParams(params)
	}

	function next() {
		params.set("page", String(Number(searchResults.currentPage) + 1))
		setParams(params)
	}

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Search - ${query}`} />
			<Page results={searchResults} back={back} next={next} />
		</>
	)
}
