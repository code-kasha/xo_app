import { Season, Episode, Links, defaultLinks, defaultDetails } from "../../types/movies/tmdb"

import { useEffect, useState } from "react"
import { useParams, useSearchParams, URLSearchParamsInit } from "react-router-dom"
import axios from "axios"

import { baseTMDB } from "../../utils/helpers"

import useSession from "../../hooks/useSession"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"
import Title from "../../components/core/Title"

import Player from "../../components/tmdb/watch/Player"

export default function Watch() {
	const { id = "" } = useParams<{ id: string }>()
	const [params]: [URLSearchParams, (nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean; state?: any }) => void] =
		useSearchParams()

	const eid: string = params?.get("id")?.toString() ?? ""

	const details = useSession("details", defaultDetails)[0]
	const [links, setLinks] = useSession<Links>("links", defaultLinks)
	const [nowPlaying, setNowPlaying] = useSession<string>("nowPlaying", "")

	const [source, setSource] = useState<string>()

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const seasons: Season[] = details.seasons
	const episodes: Episode[] = seasons.flatMap((season) => season.episodes)

	function changeSource(src: string) {
		const selectedSource = links.sources.find((source) => source.quality === src)
		if (selectedSource) {
			setSource(selectedSource.url)
		}
	}

	useEffect(() => {
		const defaultSource = links.sources.find((source) => source.quality === "auto")
		const source = links.sources.find((source) => source.quality === defaultSource?.quality)
		if (source) {
			setSource(source.url)
		}
	}, [links])

	useEffect(() => {
		const url: string = `${baseTMDB}/watch/${id}?id=${details.id}`
		if (!nowPlaying || nowPlaying.toString() !== eid.toString() || links.sources.length < 1) {
			setLoading(true)

			axios
				.get(url)
				.then((response) => {
					const data: Links = response.data
					setLinks(data)
					setNowPlaying(eid ?? "")
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
			<Player source={source} links={links} changeSource={changeSource} />

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 max-h-[400px] scrollbar overflow-y-auto scrollbar-none p-3 bg-gray-50 rounded-xl">
				{episodes &&
					episodes.map((episode, index) => (
						<div key={`${episode.id}-${index}`}>
							<p className={`truncate px-2 py-1 ${episode.id === id && "bg-green-200"}`}>
								<a href={`/tmdb/watch/${episode.id}?id=${nowPlaying}`}>
									{index}. {episode.title}
								</a>
							</p>
						</div>
					))}
			</div>
		</div>
	)
}
