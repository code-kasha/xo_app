import { Route, Routes } from "react-router-dom"

import Search from "./Search"
import Popular from "./Popular"
import Trending from "./Trending"
import Recent from "./Recent"

import Details from "./Details"
import Watch from "./Watch"

import NotFound from "../../../components/core/NotFound"

export default function AnilistAnime() {
	return (
		<Routes>
			<Route index element={<NotFound />} />
			<Route path="/:query" element={<Search />} />
			<Route path="/popular" element={<Popular />} />
			<Route path="/trending" element={<Trending />} />
			<Route path="/recent" element={<Recent />} />
			<Route path="/details" element={<NotFound />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/watch" element={<NotFound />} />
			<Route path="/watch/:id" element={<Watch />} />
		</Routes>
	)
}
