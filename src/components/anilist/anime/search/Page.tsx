import { SearchResults } from "../../../../types/anime/anilist"

import Paginator from "./Paginator"
import Results from "./Results"

export default function Page({
	results,
	back,
	next,
}: {
	results: SearchResults
	back: () => void
	next: () => void
}) {
	return (
		<div className="space-y-3 my-3">
			<Paginator searchResults={results} back={back} next={next} />

			<Results searchResults={results} />
		</div>
	)
}
