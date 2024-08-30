import { Episode, EpisodeLinks } from "../../../types/movies/flixhq"

import { useState } from "react"

import React from "react"
import Player from "react-player"

interface CustomPlayerProps {
	source: string | undefined
	links: EpisodeLinks
	groupedEpisodes: { [key: string]: Episode[] }
	id: string
	eid: string
	changeSource: (src: string) => void
}

const CustomPlayer: React.FC<CustomPlayerProps> = ({ source, links, groupedEpisodes, id, eid, changeSource }) => {
	const [selectedQuality, setSelectedQuality] = useState<string>("")
	const currentEpisode = Object.keys(groupedEpisodes).map((episodeKey) =>
		groupedEpisodes[episodeKey].find((episode) => episode.id === eid)
	)[0]
	const handleQualityChange = (quality: string) => {
		setSelectedQuality(quality)
		changeSource(quality)
	}

	return (
		<div className="w-full md:w-11/12 lg:w-10/12 p-3 items-center mx-auto flex flex-col space-y-4">
			{currentEpisode && <p className="text-xl font-semibold p-3">{currentEpisode.title.replace(/^Eps \d+:\s*/, "")}</p>}

			{source && (
				<Player
					controls
					url={source}
					type={"application/x-mpegURL"}
					config={{
						file: {
							attributes: {
								crossOrigin: "anonymous",
							},
							tracks: links.subtitles.map((subtitle) => ({
								kind: "subtitles",
								src: subtitle.url,
								srcLang: subtitle.lang,
								label: subtitle.lang,
								default: subtitle.lang === "en",
							})),
						},
					}}
					className="react-player"
					style={{ border: "2px solid black", borderRadius: "10px" }}
					width="80%"
					height="auto"
				/>
			)}
			<div className="flex justify-center space-x-4 p-2 w-1/2 mx-auto">
				{links.sources.map((source, index) => (
					<div
						key={index}
						className={`${
							(source.quality === "auto" && "hidden") ||
							(source.quality === "default" && "hidden") ||
							(source.quality === "bakcup" && "hidden")
						}`}
					>
						<button
							className={`p-2 border rounded-lg bg-gray-200 hover:bg-gray-400 w-20 ${
								selectedQuality === source.quality && "bg-yellow-200"
							}`}
							onClick={() => handleQualityChange(source.quality)}
						>
							{source.quality}p
						</button>
					</div>
				))}
			</div>

			<div className="space-y-4 w-full">
				{Object.keys(groupedEpisodes).map((season) => (
					<div key={season} className="space-y-3">
						{season != "Unknown Season" && <h3 className="text-center font-semibold">Season {season}</h3>}
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 max-h-[400px] scrollbar overflow-y-auto scrollbar-none p-3 bg-gray-50 rounded-xl">
							{groupedEpisodes[season].map((episode, index) => (
								<a
									href={`/flixhq/watch?eId=${episode.id}&id=${id}`}
									key={index}
									className={`flex w-10/12 mx-auto justify-between border rounded-md bg-green-200 hover:bg-green-400 items-center ${
										episode.id === eid && "bg-yellow-200"
									}`}
									title={episode.title}
								>
									<p className="text-center ml-3 w-1/12">{episode.number}.</p>
									<p className="flex-1 text-left p-2 truncate">{episode.title.replace(/^Eps \d+:\s*/, "")}</p>
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CustomPlayer
