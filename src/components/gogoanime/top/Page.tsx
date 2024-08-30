import { TopResults } from "../../../types/anime/gogoanime"

import Paginator from "./Paginator"
import Results from "./Results"

export default function Page({
	results,
	back,
	next,
}: {
	results: TopResults
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
