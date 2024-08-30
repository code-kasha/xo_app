import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
	const [query, setQuery] = useState("")
	const [searchStatus, setSearchStatus] = useState(false)
	const [type, setType] = useState("anilist")
	const [dropdownGogo, setDropwdownGogo] = useState(false)
	const [dropdownAnilist, setDropdownAnilist] = useState(false)
	const [dropdownFlixhq, setDropdownFlixhq] = useState(false)
	const [dropdownTmdb, setDropdownTmdb] = useState(false)
	const [hamburgerStatus, setHamburgerStatus] = useState(false)

	const navigator = useNavigate()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		sessionStorage.removeItem("results")
		sessionStorage.removeItem("details")
		navigator(`/${type}/${encodeURIComponent(query)}`)
	}

	const toggleDropdown = (dropdownOpen: boolean, setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
		setDropdownOpen(!dropdownOpen)
	}

	const toggleSearchBar = () => {
		setSearchStatus(!searchStatus)
	}

	const toggleHamburgerMenu = () => {
		setHamburgerStatus(!hamburgerStatus)
	}

	return (
		<nav className="flex flex-col items-center md:flex-row md:justify-between p-2 bg-gray-300 mx-auto w-full">
			{/* Title */}
			<div className="flex justify-between w-full md:w-2/12 p-2">
				{/* Main Logo */}
				<Link to="/" className="text-lg font-bold text-gray-800">
					XO Anime
				</Link>

				{/*  Buttons */}
				<div className="md:hidden flex space-x-2">
					<button className="p-0.5" onClick={toggleSearchBar}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M9 3.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>

					<button className="md:hidden p-0.5" onClick={toggleHamburgerMenu}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d={hamburgerStatus ? "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" : "M4 6h16M4 12h16M4 18h16"}
							/>
						</svg>
					</button>
				</div>
			</div>

			{/*  Search Bar */}
			<form onSubmit={handleSubmit}>
				<div className={`flex w-11/12 sm:w-full items-center space-x-2 p-1 md:p-0  ${searchStatus ? "block" : "hidden"} md:flex`}>
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="p-1 rounded-xl w-10/12 text-center"
						placeholder="Search..."
					/>

					<select
						className="p-1 rounded-xl w-1/2 text-center"
						value={type}
						onChange={(event) => {
							setType(event.target.value)
						}}
					>
						<option value="anilist">Anilist</option>
						<option value="anilist-manga">Anilist - Manga</option>
						<option value="flixhq">Flix HQ</option>
						<option value="gogoanime">Gogoanime</option>
						<option value="mangadex">Mangadex</option>
						<option value="mangasee123">Mangasee</option>
						<option value="tmdb">TMDB</option>
					</select>

					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</button>
				</div>
			</form>
			{/* Navbar Links */}
			<div
				className={`flex flex-col xxs:flex-row justify-center xxs:justify-between space-y-3 items-center xxs:space-y-0 p-2 w-11/12 sm:w-3/4 md:w-auto ${
					hamburgerStatus ? "" : "hidden md:flex md:space-x-12"
				}`}
			>
				{/* Anilist */}
				<div className="relative md:hidden lg:block">
					<button
						onClick={() => toggleDropdown(dropdownAnilist, setDropdownAnilist)}
						className="p-2 md:p-1 bg-gray-200 rounded w-[260px] xxs:w-20 text-center"
					>
						Anilist
					</button>
					{dropdownAnilist && (
						<div className="absolute bg-white shadow-md rounded mt-2 w-[240px] xxs:w-28  left-1/2 transform -translate-x-1/2 text-center z-40">
							<Link to="/anilist/popular" className="block px-4 py-2">
								Popular
							</Link>
							<Link to="/anilist/recent" className="block px-4 py-2">
								Recent
							</Link>
							<Link to="/anilist/trending" className="block px-4 py-2">
								Trending
							</Link>
						</div>
					)}
				</div>
				{/* Gogoanime */}
				<div className="relative">
					<button
						onClick={() => toggleDropdown(dropdownGogo, setDropwdownGogo)}
						className="p-2 md:p-1 bg-gray-200 rounded w-[260px] xxs:w-20 text-center"
					>
						Gogo
					</button>
					{dropdownGogo && (
						<div className="absolute bg-white shadow-md rounded mt-2 w-[240px] xxs:w-32 left-1/2 transform -translate-x-1/2 text-center z-30">
							<Link to="/gogoanime/popular" className="block px-4 py-2">
								Popular
							</Link>
							<Link to="/gogoanime/recent" className="block px-4 py-2">
								Recent
							</Link>
							<Link to="/gogoanime/top" className="block px-4 py-2">
								Top Airing
							</Link>
						</div>
					)}
				</div>
				{/* FlixHq */}
				<div className="relative">
					<button
						onClick={() => toggleDropdown(dropdownFlixhq, setDropdownFlixhq)}
						className="p-2 md:p-1 bg-gray-200 rounded w-[260px]  xxs:w-20 text-center"
					>
						FlixHQ
					</button>
					{dropdownFlixhq && (
						<div className="absolute bg-white shadow-md rounded mt-2 w-[240px] xxs:w-28  left-1/2 transform -translate-x-1/2 text-center z-20">
							<Link to="/flixhq/recent-shows" className="block px-4 py-2">
								Shows
							</Link>
							<Link to="/flixhq/recent-movies" className="block px-4 py-2">
								Movies
							</Link>
							<Link to="/flixhq/trending-movies" className="block px-4 py-2">
								Trending Movies
							</Link>
							<Link to="/flixhq/trending-shows" className="block px-4 py-2">
								Trending
							</Link>
						</div>
					)}
				</div>
				{/* TMDB */}
				<div className="relative md:hidden xl:block">
					<button
						onClick={() => toggleDropdown(dropdownTmdb, setDropdownTmdb)}
						className="p-2 md:p-1 bg-gray-200 rounded w-[260px] xxs:w-20 text-center"
					>
						TMDB
					</button>
					{dropdownTmdb && (
						<div className="absolute bg-white shadow-md rounded mt-2 w-[240px] xxs:w-28  left-1/2 transform -translate-x-1/2 text-center z-10">
							<Link to="/tmdb/trending" className="block px-4 py-2">
								Trending
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
