import { SearchResults, defaultSearchResults } from "../../../types/anime/anilist"

import { useState, useEffect } from "react"

import { useParams, useSearchParams, URLSearchParamsInit } from "react-router-dom"

import axios from "axios"

import useSession from "../../../hooks/useSession"

import { baseAnilist } from "../../../utils/helpers"

import Title from "../../../components/core/Title"
import Page from "../../../components/anilist/anime/search/Page"
import Spinner from "../../../components/core/Spinner"
import Error from "../../../components/core/Error"

export default function Search() {
	const query: string = useParams().query ?? ""

	const [params, setParams]: [
		URLSearchParams,
		(nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean; state?: any }) => void
	] = useSearchParams()

	const page: number = parseInt(params.get("page") || "1", 10)

	const [searchQuery, setSearchQuery] = useSession<string>("query", "")
	const [searchResults, setSearchResults] = useSession<SearchResults>("results", defaultSearchResults)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const currentPage: number = Number(searchResults.currentPage) || 1
	const length: boolean = searchResults.results ? searchResults.results.length > 1 : false

	useEffect(() => {
		const url: string = `${baseAnilist}/${query}?page=${page}`

		if (!length || searchQuery !== query || page !== currentPage) {
			setLoading(true)
			axios
				.get(url)
				.then((response) => {
					const data: SearchResults = response.data
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
		document.title = `Anilist | ${query}`
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
			<Title title={`Search Results: ${query}`} />
			<Page results={searchResults} back={back} next={next} />
		</>
	)
}
