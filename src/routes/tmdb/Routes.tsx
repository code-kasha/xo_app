import { Route, Routes } from "react-router-dom"

import NotFound from "../../components/core/NotFound"

import Details from "./Details"
import Search from "./Search"
import Trending from "./Trending"
import Watch from "./Watch"

export default function TMDB() {
	return (
		<Routes>
			<Route index element={<NotFound />} />
			<Route path="/:query" element={<Search />} />
			<Route path="/trending" element={<Trending />} />
			<Route path="/details/" element={<NotFound />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/watch/" element={<NotFound />} />
			<Route path="/watch/:id" element={<Watch />} />
		</Routes>
	)
}
