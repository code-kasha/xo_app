import { useState, useEffect } from "react"

import axios from "axios"

import { useParams } from "react-router-dom"

import useSession from "../../hooks/useSession"

import { defaultResults, Results } from "../../types/manga/mangadex"

import { baseMangadex } from "../../utils/helpers"

import Title from "../../components/core/Title"
import Page from "../../components/mangadex/search/Page"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

export default function Search() {
	const query: string = useParams().query ?? ""

	const [searchQuery, setSearchQuery] = useSession<string>("query", "")
	const [searchResults, setSearchResults] = useSession<Results>(
		"results",
		defaultResults
	)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const length: boolean = searchResults.results
		? searchResults.results.length > 1
		: false

	useEffect(() => {
		const url: string = `${baseMangadex}/${query}`

		if (!length || searchQuery !== query) {
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
	}, [query])

	useEffect(() => {
		document.title = `Search - ${query} | Mangasee`
	})

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return (
		<>
			<Title title={`Search - ${query}`} />
			<Page results={searchResults} />
		</>
	)
}
