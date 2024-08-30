import { TrendingResults } from "../../../../types/anime/anilist"

import Paginator from "./Paginator"
import Results from "./Results"

export default function Page({
	results,
	back,
	next,
}: {
	results: TrendingResults
	back: () => void
	next: () => void
}) {
	return (
		<div className="space-y-3 my-3">
			<Paginator results={results} back={back} next={next} />

			<Results results={results} />
		</div>
	)
}
