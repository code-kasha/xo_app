import { Details as AnimeDetails, defaultDetails } from "../../types/anime/gogoanime"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import { baseGogoanime } from "../../utils/helpers"

import useSession from "../../hooks/useSession"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

import GogoDetails from "../../components/gogoanime/details/Details"

export default function Details() {
	const { id } = useParams<{ id: string }>()

	const [details, setDetails] = useSession<AnimeDetails>("details", defaultDetails)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const title = details.title

	useEffect(() => {
		const url: string = `${baseGogoanime}/info/${id}`
		if (!details.id || details.id !== id) {
			setLoading(true)

			axios
				.get(url)
				.then((response) => {
					const data: AnimeDetails = response.data
					setDetails(data)
				})
				.catch((error) => {
					setError(error.toString())
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [id])

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return <GogoDetails title={title} details={details} />
}
