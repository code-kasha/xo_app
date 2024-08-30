interface Result {
	id: string
	title: string
	url: string
	image: string
	seasons: number
	type: string
}

const defaultResult: Result = {
	id: "",
	title: "",
	url: "",
	image: "",
	seasons: 0,
	type: "",
}

interface Results {
	currentPage: number
	hasNextPage: boolean
	results: Result[]
}

const defaultResults: Results = {
	currentPage: 1,
	hasNextPage: false,
	results: [defaultResult],
}

interface RecentResult {
	id: string
	title: string
	url: string
	image: string
	season: string
	latestEpisode: string
	type: string
}

const defaultRecentResult: RecentResult = {
	id: "",
	title: "",
	url: "",
	image: "",
	season: "",
	latestEpisode: "",
	type: "",
}

interface RecentResults {
	[x: string]: any
	results: RecentResult[]
}

const defaultRecentResults: RecentResults = {
	results: [defaultRecentResult],
}

interface TrendingResult {
	id: string
	title: string
	url: string
	image: string
	releaseDate: string
	duration: string
	type: string
}

const defaultTrendingResult: TrendingResult = {
	id: "",
	title: "",
	url: "",
	image: "",
	releaseDate: "",
	duration: "",
	type: "",
}

interface TrendingResults {
	[x: string]: any
	results: TrendingResult[]
}

const defaultTrendingResults: TrendingResults = {
	results: [defaultTrendingResult],
}

interface Recommendation {
	id: string
	title: string
	image: string
	duration: string
	type: string
}

const defaultRecommendation: Recommendation = {
	id: "",
	title: "",
	image: "",
	duration: "",
	type: "",
}

interface Episode {
	id: string
	title: string
	number: number
	season: number
	url: string
}

const defaultEpisode: Episode = {
	id: "",
	title: "",
	number: 0,
	season: 0,
	url: "",
}

interface Details {
	id: string
	title: string
	url: string
	cover: string
	image: string
	description: string
	type: string
	releaseDate: string
	genres: string[]
	casts: string[]
	tags: string[]
	production: string
	country: string
	duration: string
	rating: number
	recommendations: Recommendation[]
	episodes: Episode[]
}

const defaultDetails: Details = {
	id: "",
	title: "",
	url: "",
	cover: "",
	image: "",
	description: "",
	type: "",
	releaseDate: "",
	genres: [],
	casts: [],
	tags: [],
	production: "",
	country: "",
	duration: "",
	rating: 0,
	recommendations: [defaultRecommendation],
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

interface Subtitle {
	url: string
	lang: string
}

const defaultSubtitle: Subtitle = {
	url: "",
	lang: "",
}

interface EpisodeLinks {
	headers: { Referer: string }
	sources: Source[]
	subtitles: Subtitle[]
}

const defaultEpisodeLinks: EpisodeLinks = {
	headers: { Referer: "" },
	sources: [defaultSource],
	subtitles: [defaultSubtitle],
}

export type {
	Result,
	Results,
	RecentResult,
	RecentResults,
	TrendingResult,
	TrendingResults,
	Recommendation,
	Episode,
	Details,
	Source,
	Subtitle,
	EpisodeLinks,
}
export {
	defaultResult,
	defaultResults,
	defaultRecentResult,
	defaultRecentResults,
	defaultTrendingResult,
	defaultTrendingResults,
	defaultRecommendation,
	defaultEpisode,
	defaultDetails,
	defaultSource,
	defaultSubtitle,
	defaultEpisodeLinks,
}
