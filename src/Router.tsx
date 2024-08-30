import { Route, Routes } from "react-router-dom"

import Index from "./routes/Index"

import Anilist from "./routes/anilist/anime/Routes"
import AnilistManga from "./routes/anilist/manga/Routes"
import Ann from "./routes/ann/Routes"
import Flixhq from "./routes/flixhq/Routes"
import Gogoanime from "./routes/gogoanime/Routes"
import Mangadex from "./routes/mangadex/Routes"
import Mangasee123 from "./routes/mangasee123/Routes"
import TMDB from "./routes/tmdb/Routes"

export default function Router() {
	return (
		<Routes>
			<Route index element={<Index />} />
			<Route path="/anilist/*" element={<Anilist />} />
			<Route path="/anilist-manga/*" element={<AnilistManga />} />
			<Route path="/gogoanime/*" element={<Gogoanime />} />
			<Route path="/flixhq/*" element={<Flixhq />} />
			<Route path="/mangasee123/*" element={<Mangasee123 />} />
			<Route path="/ann/*" element={<Ann />} />
			<Route path="/mangadex/*" element={<Mangadex />} />
			<Route path="/tmdb/*" element={<TMDB />} />
		</Routes>
	)
}
