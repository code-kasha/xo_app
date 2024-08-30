import { Route, Routes } from "react-router-dom"

import NotFound from "../../components/core/NotFound"

import Search from "./Search"
import Shows from "./Shows"
import Movies from "./Movies"
import TrendingMovies from "./TrendingMovies"
import TrendingShows from "./TrendingShows"
import Details from "./Details"
import Watch from "./Watch"

export default function FlixHQ() {
	return (
		<Routes>
			<Route index element={<NotFound />} />
			<Route path="/:query" element={<Search />} />
			<Route path="/recent-shows" element={<Shows />} />
			<Route path="/recent-movies" element={<Movies />} />
			<Route path="/trending-movies" element={<TrendingMovies />} />
			<Route path="/trending-shows" element={<TrendingShows />} />
			<Route path="/details/" element={<NotFound />} />
			<Route path="/details/:encId" element={<Details />} />
			<Route path="/watch/" element={<Watch />} />
			{/*<Route path="/watch/:id" element={<Watch />} />*/}
		</Routes>
	)
}
