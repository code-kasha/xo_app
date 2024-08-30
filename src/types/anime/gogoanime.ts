interface SearchResult {
	id: string
	title: string
	url: string
	image: string
	releaseDate: string
	subOrDub: string
	released: string
	genres: string[]
	episodeId: string
	episodeNumber: string
}

const defaultSearchResult: SearchResult = {
	id: "",
	title: "",
	url: "",
	image: "",
	releaseDate: "",
	subOrDub: "",
	released: "",
	genres: [],
	episodeId: "",
	episodeNumber: "",
}

interface SearchResults {
	currentPage: number
	hasNextPage: boolean
	results: SearchResult[]
}

const defaultSearchResults: SearchResults = {
	currentPage: 1,
	hasNextPage: false,
	results: [defaultSearchResult],
}

interface PopularResult {
	id: string
	title: string
	releaseDate: string
	image: string
	url: string
}

const defaultPopularResult: PopularResult = {
	id: "",
	title: "",
	releaseDate: "",
	image: "",
	url: "",
}

interface PopularResults {
	currentPage: number
	hasNextPage: boolean
	results: PopularResult[]
}

const defaultPopularResults: PopularResults = {
	currentPage: 1,
	hasNextPage: false,
	results: [defaultPopularResult],
}

interface RecentResult {
	id: string
	episodeId: string
	episodeNumber: number
	title: string
	image: string
	url: string
}

const defaultRecentResult: RecentResult = {
	id: "",
	episodeId: "",
	episodeNumber: 0,
	title: "",
	image: "",
	url: "",
}

interface RecentResults {
	currentPage: number
	hasNextPage: boolean
	results: RecentResult[]
}

const defaultRecentResults: RecentResults = {
	currentPage: 1,
	hasNextPage: false,
	results: [defaultRecentResult],
}

interface TopResult {
	id: string
	title: string
	image: string
	url: string
	genres: string[]
	episodeId: string
	episodeNumber: number
}

const defaultTopResult: TopResult = {
	id: "",
	title: "",
	image: "",
	url: "",
	genres: [],
	episodeId: "",
	episodeNumber: 0,
}

interface TopResults {
	currentPage: number
	hasNextPage: boolean
	results: TopResult[]
}

const defaultTopResults: TopResults = {
	currentPage: 1,
	hasNextPage: false,
	results: [defaultTopResult],
}

interface Episode {
	id: string
	number: number
	url: string
}

const defaultEpisode: Episode = {
	id: "",
	number: 0,
	url: "",
}

interface Details {
	id: string
	title: string
	url: string
	genres: string[]
	totalEpisodes: number
	image: string
	releaseDate: string
	description: string
	subOrDub: string
	type: string
	status: string
	otherName: string
	episodes: Episode[]
}

const defaultDetails: Details = {
	id: "",
	title: "",
	url: "",
	genres: [],
	totalEpisodes: 0,
	image: "",
	releaseDate: "",
	description: "",
	subOrDub: "",
	type: "",
	status: "",
	otherName: "",
	episodes: [defaultEpisode],
}

interface Source {
	url: string
	isM3U8: boolean
	quality: string
}

const defaultSource: Source = {
	url: "",
	isM3U8: false,
	quality: "",
}

interface EpisodeLinks {
	headers: { Referer: string }
	sources: Source[]
	download: string
}

const defaultEpisodeLinks: EpisodeLinks = {
	headers: { Referer: "" },
	sources: [defaultSource],
	download: "",
}

export type {
	SearchResult,
	SearchResults,
	PopularResult,
	PopularResults,
	RecentResult,
	RecentResults,
	TopResult,
	TopResults,
	Episode,
	Details,
	EpisodeLinks,
}

export {
	defaultSearchResult,
	defaultSearchResults,
	defaultPopularResult,
	defaultPopularResults,
	defaultRecentResult,
	defaultRecentResults,
	defaultTopResult,
	defaultTopResults,
	defaultEpisode,
	defaultDetails,
	defaultEpisodeLinks,
}
