import { SearchResults } from "../../../../types/anime/anilist"

import { Previous, Next } from "../../../../icons/icons"

export default function Paginator({
	searchResults,
	back,
	next,
}: {
	searchResults: SearchResults
	back: () => void
	next: () => void
}) {
	return (
		<div className="p-3 flex justify-around">
			{searchResults.currentPage > 1 && (
				<button onClick={back}>
					<Previous />
				</button>
			)}
			Page: {searchResults.currentPage}
			{searchResults.hasNextPage && (
				<button onClick={next}>
					<Next />
				</button>
			)}
		</div>
	)
}
