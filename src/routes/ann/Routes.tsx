import { Routes, Route } from "react-router-dom"

import NotFound from "../../components/core/NotFound"

import Feed from "./Feed"
import Details from "./Details"

export default function ANN() {
	return (
		<Routes>
			<Route index element={<NotFound />} />
			<Route path="/feed" element={<Feed />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	)
}
