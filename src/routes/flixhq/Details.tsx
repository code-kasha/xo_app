import { Details as MovieDetails, defaultDetails } from "../../types/movies/flixhq"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import { baseFlixhq } from "../../utils/helpers"

import useSession from "../../hooks/useSession"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

import FlixHQDetails from "../../components/flixhq/details/Details"

export default function Details() {
	const { encId } = useParams<{ encId: string }>()
	const id: string = encId ? decodeURIComponent(encId) : ""

	const [details, setDetails] = useSession<MovieDetails>("details", defaultDetails)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const title = details.title

	useEffect(() => {
		const url: string = `${baseFlixhq}/info?id=${id}`
		if (!details.id || details.id !== id) {
			setLoading(true)

			axios
				.get(url)
				.then((response) => {
					const data: MovieDetails = response.data
					setDetails(data)
					sessionStorage.removeItem("links")
				})
				.catch((error) => {
					setError(error.toString())
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [id])

	useEffect(() => {})

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return <FlixHQDetails details={details} title={title} />
}
