import { Details as MangaDetails, defaultDetails } from "../../types/manga/mangadex"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import { baseMangadex } from "../../utils/helpers"

import useSession from "../../hooks/useSession"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

import MangaDetailsShow from "../../components/mangadex/details/Details"

export default function Details() {
	const { id } = useParams<{ id: string }>()

	const [details, setDetails] = useSession<MangaDetails>("details", defaultDetails)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const title = details.title

	useEffect(() => {
		const url: string = `${baseMangadex}/info/${id}`
		if (!details.id || details.id !== id) {
			setLoading(true)

			axios
				.get(url)
				.then((response) => {
					const data: MangaDetails = response.data
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

	return <MangaDetailsShow details={details} title={title} />
}
