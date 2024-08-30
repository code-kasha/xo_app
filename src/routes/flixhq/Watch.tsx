import { EpisodeLinks, defaultEpisodeLinks, defaultDetails, Episode } from "../../types/movies/flixhq"
import { useEffect, useState } from "react"
import { useSearchParams, URLSearchParamsInit } from "react-router-dom"
import axios from "axios"
import { baseFlixhq } from "../../utils/helpers"
import useSession from "../../hooks/useSession"
import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"
import Title from "../../components/core/Title"
import Player from "../../components/flixhq/watch/Player"

export default function Watch() {
	const [params]: [URLSearchParams, (nextInit: URLSearchParamsInit, navigateOptions?: { replace?: boolean; state?: any }) => void] =
		useSearchParams()

	const id: string = params?.get("id")?.toString() ?? ""
	const eid: string = params?.get("eId")?.toString() ?? ""

	const details = useSession("details", defaultDetails)[0]
	const [links, setLinks] = useSession<EpisodeLinks>("links", defaultEpisodeLinks)
	const [nowPlaying, setNowPlaying] = useSession<string>("nowPlaying", "")

	const [source, setSource] = useState<string>()

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

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
		const url: string = `${baseFlixhq}/watch?episodeId=${eid}&mediaId=${id}`

		if (nowPlaying.toString() !== eid || details.id !== id) {
			setLoading(true)
			axios
				.get(url)
				.then((response) => {
					const data: EpisodeLinks = response.data
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

	const groupEpisodesBySeason = (episodes: Episode[]) => {
		return episodes.reduce((acc, episode: Episode) => {
			const season = episode.season || "Unknown Season"
			if (!acc[season]) {
				acc[season] = []
			}
			acc[season].push(episode)
			return acc
		}, {} as { [key: string]: Episode[] })
	}

	const groupedEpisodes = groupEpisodesBySeason(details.episodes)

	if (loading) return <Spinner />

	if (error) return <Error error={error} />

	return (
		<div className="flex flex-col space-y-4">
			<Title title={`Watch ${details.title}`} />
			<Player source={source} links={links} groupedEpisodes={groupedEpisodes} id={id} eid={eid} changeSource={changeSource} />
		</div>
	)
}
