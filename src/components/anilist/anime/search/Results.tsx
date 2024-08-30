import { SearchResults, SearchResult } from "../../../../types/anime/anilist"

import Result from "./Result"

export default function Results({
	searchResults,
}: {
	searchResults: SearchResults
}) {
	return (
		<div className="main-grid">
			{searchResults.results.map((result: SearchResult, index: number) => (
				<Result key={`${result.id}-${index}`} result={result} />
			))}
		</div>
	)
}
