import { RecentResults as SearchResults } from "../../../types/movies/flixhq"

import Results from "./Results"

export default function Page({ results }: { results: SearchResults }) {
	return (
		<div className="space-y-3 my-3">
			<Results results={results} />
		</div>
	)
}
