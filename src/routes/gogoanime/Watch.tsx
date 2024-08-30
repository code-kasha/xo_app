import { EpisodeLinks, defaultEpisodeLinks, defaultDetails } from "../../types/anime/gogoanime"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import { baseGogoanime } from "../../utils/helpers"

import useSession from "../../hooks/useSession"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"
import Title from "../../components/core/Title"

import GogoPlayer from "../../components/gogoanime/watch/Player"

export default function Watch() {
	const { id } = useParams<{ id: string }>()

	const details = useSession("details", defaultDetails)[0]

	const [links, setLinks] = useSession<EpisodeLinks>("links", defaultEpisodeLinks)
	const [nowPlaying, setNowPlaying] = useSession<string>("nowPlaying", "")

	const [source, setSource] = useState<string>("")

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	function changeSource(src: string) {
		const selectedSource = links.sources.find((source) => source.quality === src)
		if (selectedSource) {
			setSource(selectedSource.url)
		}
	}

	useEffect(() => {
		const defaultSource = links.sources.find((source) => source.quality === "default")
		const source = links.sources.find((source) => source.quality === defaultSource?.quality)
		if (source) {
			setSource(source.url)
		}
	}, [links])

	useEffect(() => {
		const url: string = `${baseGogoanime}/watch/${id}`
		if (nowPlaying.toString() !== id?.toString()) {
			setLoading(true)

			axios
				.get(url)
				.then((response) => {
					const data: EpisodeLinks = response.data
					setLinks(data)
					setNowPlaying(id ?? "")
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

	return (
		<div className="flex flex-col space-y-4">
			<Title title={`Watch ${details.title}`} />
			<GogoPlayer source={source} links={links} id={id} details={details} changeSource={changeSource} />
		</div>
	)
}
