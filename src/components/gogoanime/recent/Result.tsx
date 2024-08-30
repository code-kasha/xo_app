import { RecentResult } from "../../../types/anime/gogoanime"

import Image from "../../core/Image"

import { Link } from "react-router-dom"

export default function Result({ result }: { result: RecentResult }) {
	const id: number | string = result.id ?? (typeof result.id === "number" ? 1 : "")

	const title: string = result.title

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
					<Link to={`/gogoanime/details/${id}`}>Details</Link>
				</button>
			</div>
		</div>
	)
}
