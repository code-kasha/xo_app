import {
	TrendingResults,
	TrendingResult,
} from "../../../../types/anime/anilist"

import Result from "./Result"

export default function Results({ results }: { results: TrendingResults }) {
	return (
		<div className="main-grid">
			{results.results.map((result: TrendingResult, index: number) => (
				<Result key={`${result.id}-${index}`} result={result} />
			))}
		</div>
	)
}
