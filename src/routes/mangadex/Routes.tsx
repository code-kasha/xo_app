import { Route, Routes } from "react-router-dom"

import NotFound from "../../components/core/NotFound"

import Search from "./Search"
import Details from "./Details"
import Read from "./Read"

export default function Mangadex() {
	return (
		<Routes>
			<Route index element={<NotFound />} />
			<Route path="/:query" element={<Search />} />
			<Route path="/details/" element={<NotFound />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/read/" element={<NotFound />} />
			<Route path="/read/:id" element={<Read />} />
		</Routes>
	)
}
