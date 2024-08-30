import { RecentResults, RecentResult } from "../../../types/anime/gogoanime"

import Result from "./Result"

export default function Results({ results }: { results: RecentResults }) {
	return (
		<div className="main-grid">
			{results.results.map((result: RecentResult, index: number) => (
				<Result key={`${result.id}-${index}`} result={result} />
			))}
		</div>
	)
}
