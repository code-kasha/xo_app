import { Route, Routes } from "react-router-dom"

import NotFound from "../../components/core/NotFound"

import Search from "./Search"
import Details from "./Details"
import Recent from "./Recent"
import Popular from "./Popular"
import Top from "./Top"
import Watch from "./Watch"

export default function Gogoanime() {
	return (
		<Routes>
			<Route index element={<NotFound />} />
			<Route path="/:query" element={<Search />} />
			<Route path="/details/" element={<NotFound />} />
			<Route path="/popular" element={<Popular />} />
			<Route path="/recent" element={<Recent />} />
			<Route path="/top" element={<Top />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/watch/" element={<NotFound />} />
			<Route path="/watch/:id" element={<Watch />} />
		</Routes>
	)
}
