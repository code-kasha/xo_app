import { PopularResults, PopularResult } from "../../../types/anime/gogoanime"

import Result from "./Result"

export default function Results({ results }: { results: PopularResults }) {
	return (
		<div className="main-grid">
			{results.results.map((result: PopularResult, index: number) => (
				<Result key={`${result.id}-${index}`} result={result} />
			))}
		</div>
	)
}
