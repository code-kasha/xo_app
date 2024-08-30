import Title from "../../core/Title"
import Image from "../../core/Image"
import { Link } from "react-router-dom"

import { Details as GogoDetails } from "../../../types/anime/gogoanime"

export default function Details({ title, details }: { title: string; details: GogoDetails }) {
	return (
		<div className="space-y-2">
			{title && <Title title={title} />}
			{details.image && (title || details.id) && (
				<div className="flex space-y-2">
					<Image src={details.image} alt={title ? title : details.id} className="w-[300px] mx-auto p-4 object-cover" />
				</div>
			)}
			{details.description && (
				<div className="w-4/5 mx-auto">
					<p className="text-justify p-4">{details.description}</p>
				</div>
			)}

			<div className="flex flex-col items-center">
				{details.otherName && <p>Other Name: {details.otherName}</p>}
				{details.genres && (
					<p className="flex space-x-5 justify-center w-full">
						{details.genres.map((genre) => (
							<p>{genre}</p>
						))}
					</p>
				)}

				{details.episodes && details.episodes[0]?.id && <Link to={`/gogoanime/watch/${details.episodes[0].id}`}>Watch</Link>}
			</div>
		</div>
	)
}
