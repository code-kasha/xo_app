import { Details as AnimeDetails, defaultDetails } from "../../types/movies/tmdb"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

import axios from "axios"

import { baseTMDB } from "../../utils/helpers"

import useSession from "../../hooks/useSession"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

import TMDBDetails from "../../components/tmdb/details/Details"

export default function Details() {
	const { id = "" } = useParams<{ id: string }>()

	const [params] = useSearchParams()

	const type = params.get("type")

	const [eid, setEid] = useSession("eid", "")
	const [details, setDetails] = useSession<AnimeDetails>("details", defaultDetails)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const title = details.title

	useEffect(() => {
		const url: string = `${baseTMDB}/info/${id}?type=${type}`
		if (!details.id.toString() || id.toString() !== eid.toString()) {
			setLoading(true)

			axios
				.get(url)
				.then((response) => {
					const data: AnimeDetails = response.data
					setDetails(data)
					setEid(id)
				})
				.catch((error) => {
					setError(error.toString())
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [id, type])

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return <TMDBDetails details={details} eid={details.id} title={title} />
}
