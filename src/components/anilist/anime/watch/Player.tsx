import { Details, Links } from "../../../../types/anime/anilist"

import { useState } from "react"

import React from "react"
import Player from "react-player"

interface CustomPlayerProps {
	source: string | undefined
	links: Links
	details: Details
	id: string | undefined
	changeSource: (src: string) => void
}

const CustomPlayer: React.FC<CustomPlayerProps> = ({ source, links, id, details, changeSource }) => {
	const [selectedQuality, setSelectedQuality] = useState<string>("")

	const handleQualityChange = (quality: string) => {
		setSelectedQuality(quality)
		changeSource(quality)
	}

	return (
		<div className="w-full md:w-11/12 lg:w-10/12 p-3 items-center mx-auto flex flex-col space-y-4">
			<Player
				controls
				url={source}
				type={"application/x-mpegURL"}
				config={{
					file: {
						attributes: {
							crossOrigin: "anonymous",
						},
					},
				}}
				className="react-player"
				style={{ border: "2px solid black", borderRadius: "10px" }}
				width="80%"
				height="auto"
			/>

			<div className="flex justify-center space-x-4 p-2 w-1/2 mx-auto">
				{links.sources.map((source, index) => (
					<div key={index} className={`${source.quality === "default" && "hidden"} ${source.quality === "backup" && "hidden"}`}>
						<button
							className={`p-2 border rounded-lg bg-gray-200 hover:bg-gray-400 w-20 ${
								selectedQuality === source.quality && "bg-yellow-200"
							}`}
							onClick={() => handleQualityChange(source.quality)}
						>
							{source.quality}
						</button>
					</div>
				))}
			</div>
			<p className="text-center">Episodes</p>
			<div className="space-y-4 w-full">
				<div className="grid sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-3 max-h-[400px] scrollbar overflow-y-auto scrollbar-none p-3 bg-gray-50 rounded-xl">
					{details.episodes?.map((episode, index) => (
						<a
							href={`/anilist/watch/${episode.id}`}
							key={index}
							className={`flex w-1/2  mx-auto justify-between border rounded-md bg-green-200 hover:bg-green-400 items-center ${
								episode.id === id && "bg-yellow-200"
							}`}
							title={`Episode ${episode.number}`}
						>
							<p className="text-center mx-auto p-1 rounded-md">{`${episode.number}`}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default CustomPlayer
