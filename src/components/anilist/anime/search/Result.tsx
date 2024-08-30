import { SearchResult } from "../../../../types/anime/anilist"

import Image from "../../../core/Image"

import { Link } from "react-router-dom"

export default function Result({ result }: { result: SearchResult }) {
	const id: number | string = result.id ?? (typeof result.id === "number" ? 1 : "")

	const title: string = result.title.english ?? result.title.romaji ?? result.title.native

	return (
		<div key={id} className="space-y-2 pb-3">
			<div className="">
				<Image src={result.image} alt={title} />
			</div>
			<div className="text-center w-9/12 mx-auto">
				<p className={`truncate pb-2 p-1 font-sans font-bold`} title={title}>
					{title}
				</p>
				<button className="item-btn">
					<Link to={`/anilist/details/${id}`}>Details</Link>
				</button>
			</div>
		</div>
	)
}
