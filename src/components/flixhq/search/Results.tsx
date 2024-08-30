import {
	Results as SearchResults,
	Result as SearchResult,
} from "../../../types/movies/flixhq"

import Result from "./Result"

export default function Results({ results }: { results: SearchResults }) {
	return (
		<div className="main-grid">
			{results.results.map((result: SearchResult, index: number) => (
				<Result key={`${result.id}-${index}`} result={result} />
			))}
		</div>
	)
}
