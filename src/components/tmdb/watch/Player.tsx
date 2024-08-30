import { Links } from "../../../types/movies/tmdb"

import React, { useState } from "react"
import Player from "react-player"

interface CustomPlayerProps {
	source: string | undefined
	links: Links

	changeSource: (src: string) => void
}

const CustomPlayer: React.FC<CustomPlayerProps> = ({ source, links, changeSource }) => {
	const [selectedQuality, setSelectedQuality] = useState<string>("")

	const handleQualityChange = (quality: string) => {
		setSelectedQuality(quality)
		changeSource(quality)
	}

	return (
		<div className="w-full md:w-11/12 lg:w-10/12 p-3 items-center mx-auto flex flex-col space-y-4">
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
		</div>
	)
}

export default CustomPlayer
