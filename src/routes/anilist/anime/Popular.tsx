import {
	PopularResults,
	defaultPopularResults,
} from "../../../types/anime/anilist"

import { useState, useEffect } from "react"
import { useSearchParams, URLSearchParamsInit } from "react-router-dom"

import axios from "axios"

import useSession from "../../../hooks/useSession"

import { baseAnilist } from "../../../utils/helpers"

import Title from "../../../components/core/Title"
import Page from "../../../components/anilist/anime/popular/Page"

import Spinner from "../../../components/core/Spinner"
import Error from "../../../components/core/Error"

export default function Popular() {
	const [params, setParams]: [
		URLSearchParams,
		(
			nextInit: URLSearchParamsInit,
			navigateOptions?: { replace?: boolean; state?: any }
		) => void
	] = useSearchParams()

	const [popularResults, setPopularResults] = useSession<PopularResults>(
		"popularAnime",
		defaultPopularResults
	)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const page: number = parseInt(params.get("page") || "1", 10)

	const currentPage: number = Number(popularResults.currentPage) || 1

	const length: boolean = popularResults.results
		? popularResults.results.length > 1
		: false

	useEffect(() => {
		const url: string = `${baseAnilist}/popular?page=${page}`

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
	}, [page])

	useEffect(() => {
		document.title = `Popular Anime | Anilist`
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
			<Title title="Popular Anime" />
			<Page results={popularResults} back={back} next={next} />
		</>
	)
}
