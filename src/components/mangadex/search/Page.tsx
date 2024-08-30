import { Results as SearchResults } from "../../../types/manga/mangadex"

import Results from "./Results"

export default function Page({ results }: { results: SearchResults }) {
	return (
		<div className="space-y-3 my-3">
			<Results results={results} />
		</div>
	)
}
