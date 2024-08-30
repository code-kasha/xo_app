import { SearchResults } from "../../../types/anime/gogoanime"

import { Previous, Next } from "../../../icons/icons"

export default function Paginator({
	results,
	back,
	next,
}: {
	results: SearchResults
	back: () => void
	next: () => void
}) {
	return (
		<div className="p-3 flex justify-around">
			{results.currentPage > 1 && (
				<button onClick={back}>
					<Previous />
				</button>
			)}
			Page: {results.currentPage}
			{results.hasNextPage && (
				<button onClick={next}>
					<Next />
				</button>
			)}
		</div>
	)
}
