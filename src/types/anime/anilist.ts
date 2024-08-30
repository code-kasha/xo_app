interface Artwork {
	img: string
	type: string
	provideId: string
}

const defaultArtwork: Artwork = {
	img: "",
	type: "",
	provideId: "",
}

interface Date {
	year: number
	month: number
	day: number
}

const defaultDate: Date = {
	year: 0,
	month: 0,
	day: 0,
}

interface Episode {
	id: string
	title: string
	description: string | null
	number: 1
	image: string
	imageHash: string
	airDate: null | number | string
}

const defaultEpisode: Episode = {
	id: "",
	title: "",
	description: "",
	number: 1,
	image: "",
	imageHash: "",
	airDate: null,
}

interface Mapping {
	id: string
	providerId: string
	similarity: number
	providerType: string
}

const defaultMapping: Mapping = {
	id: "",
	providerId: "",
	similarity: 0,
	providerType: "",
}

interface Name {
	first: string
	last: string
	full: string
	native: string
	userPreffered: string
}

const defaultName: Name = {
	first: "",
	last: "",
	full: "",
	native: "",
	userPreffered: "",
}

interface Title {
	romaji: string
	english: string
	native: string
	userPreffered: string
}

const defaultTitle: Title = {
	romaji: "",
	english: "",
	native: "",
	userPreffered: "",
}

interface Recommendation {
	id: number
	relationType: string
	malId: number
	title: Title
	status: string
	episodes: number
	image: string
	imageHash: string
	color: string
	type: string
	cover: string
	coverHash: string
	rating: number
}

const defaultRecommendation: Recommendation = {
	id: 0,
	relationType: "",
	malId: 0,
	title: defaultTitle,
	status: "",
	episodes: 0,
	image: "",
	imageHash: "",
	color: "",
	type: "",
	cover: "",
	coverHash: "",
	rating: 0,
}

interface VoiceActor {
	id: number
	language: string
	name: Name
	image: string
	imageHash: string
}

const defaultVoiceActor: VoiceActor = {
	id: 0,
	language: "",
	name: defaultName,
	image: "",
	imageHash: "",
}

interface Character {
	id: number
	role: string
	name: Name
	image: string
	imageHash: string
	voiceActors: VoiceActor[]
}

const defaultCharacter: Character = {
	id: 0,
	role: "",
	name: defaultName,
	image: "",
	imageHash: "",
	voiceActors: [defaultVoiceActor],
}

interface Relation {
	id: number
	relationType: string
	malId: number
	title: Title
	status: string
	episodes: number
	image: string
	imageHash: string
	color: string
	type: string
	cover: string
	coverHash: string
	rating: number
}

const defaultRelation: Relation = {
	id: 0,
	relationType: "",
	malId: 0,
	title: defaultTitle,
	status: "",
	episodes: 0,
	image: "",
	imageHash: "",
	color: "",
	type: "",
	cover: "",
	coverHash: "",
	rating: 0,
}

interface Details {
	id: number | string
	title: Title
	malId: number | string
	synonyms: string[]
	isLicensed: boolean
	isAdult: boolean
	countryOfOrigin: string
	image: string
	imageHash: string
	popularity: number
	color: string
	cover: string
	coverHash: string
	description: string
	status: string
	releaseDate: number
	startDate: Date
	endDate: Date
	totalEpisodes: number
	currentEpisode: number
	rating: number
	duration: number
	genres: string[]
	season: string
	studios: string[]
	subOrDub: string
	type: string
	recommendations: Recommendation[]
	characters: Character[]
	relations: Relation[]
	mappings: Mapping[]
	artwork: Artwork[]
	episodes?: Episode[]
}

const defaultDetails: Details = {
	id: "",
	title: defaultTitle,
	malId: 0,
	synonyms: [],
	isLicensed: false,
	isAdult: false,
	countryOfOrigin: "",
	image: "",
	imageHash: "",
	popularity: 0,
	color: "",
	cover: "",
	coverHash: "",
	description: "",
	status: "",
	releaseDate: 0,
	startDate: defaultDate,
	endDate: defaultDate,
	totalEpisodes: 0,
	currentEpisode: 0,
	rating: 0,
	duration: 0,
	genres: [],
	season: "",
	studios: [],
	subOrDub: "",
	type: "",
	recommendations: [defaultRecommendation],
	characters: [defaultCharacter],
	relations: [defaultRelation],
	mappings: [defaultMapping],
	artwork: [defaultArtwork],
	episodes: [defaultEpisode],
}

interface SearchResult {
	id: number | string
	malId: number
	title: Title
	status: string
	image: string
	imageHash: string
	cover: string
	coverHash: string
	popularity: number
	description: string
	rating: number
	genres: string[]
	color: string
	totalEpisodes: number
	currentEpisodeCount: number
	type: string
	releaseDate: number
}

const defaultSearchResult: SearchResult = {
	id: 0,
	malId: 0,
	title: defaultTitle,
	status: "",
	image: "",
	imageHash: "",
	cover: "",
	coverHash: "",
	popularity: 0,
	description: "",
	rating: 0,
	genres: [],
	color: "",
	totalEpisodes: 0,
	currentEpisodeCount: 0,
	type: "",
	releaseDate: 0,
}

interface SearchResults {
	currentPage: number
	hasNextPage: boolean
	results: SearchResult[]
}

const defaultSearchResults: SearchResults = {
	currentPage: 0,
	hasNextPage: false,
	results: [defaultSearchResult],
}

interface Trailer {
	id: string
	site: string
	thumbnail: string
	thumbnailHash: string
}

const defaultTrailer: Trailer = {
	id: "",
	site: "",
	thumbnail: "",
	thumbnailHash: "",
}

interface PopularResult {
	id: number | string
	malId: number | string
	title: Title
	image: string
	imageHash: string
	trailer: Trailer
	description: string
	status: string
	cover: string
	coverHash: string
	rating: string
	releaseDate: string
	color: string
	genres: string[]
	totalEpisodes: number
	duration: number
	type: string
}

const defaultPopularResult: PopularResult = {
	id: 0,
	malId: 0,
	title: defaultTitle,
	image: "",
	imageHash: "",
	trailer: defaultTrailer,
	description: "",
	status: "",
	cover: "",
	coverHash: "",
	rating: "",
	releaseDate: "",
	color: "",
	genres: [],
	totalEpisodes: 0,
	duration: 0,
	type: "",
}

interface PopularResults {
	currentPage: number
	hasNextPage: boolean
	results: PopularResult[]
}

const defaultPopularResults: PopularResults = {
	currentPage: 0,
	hasNextPage: false,
	results: [defaultPopularResult],
}

interface TrendingResult {
	id: number | string
	malId: number | string
	title: Title
	image: string
	imageHash: string
	trailer: Trailer
	description: string
	status: string
	cover: string
	coverHash: string
	rating: number
	releaseDate: number
	color: string
	genres: string[]
	totalEpisodes: number
	duration: number
	type: string
}

const defaultTrendingResult: TrendingResult = {
	id: 0,
	malId: 0,
	title: defaultTitle,
	image: "",
	imageHash: "",
	trailer: defaultTrailer,
	description: "",
	status: "",
	cover: "",
	coverHash: "",
	rating: 0,
	releaseDate: 0,
	color: "",
	genres: [],
	totalEpisodes: 0,
	duration: 0,
	type: "",
}

interface TrendingResults {
	currentPage: number
	hasNextPage: boolean
	results: TrendingResult[]
}

const defaultTrendingResults: TrendingResults = {
	currentPage: 0,
	hasNextPage: false,
	results: [defaultTrendingResult],
}

interface RecentResult {
	id: string
	title: Title
	image: string
	imageHash: string
	episodeId: string
	episodeTitle: string
	episodeNumber: number
	type: string
}

const defaultRecentResult: RecentResult = {
	id: "",
	title: defaultTitle,
	image: "",
	imageHash: "",
	episodeId: "",
	episodeTitle: "",
	episodeNumber: 0,
	type: "",
}

interface RecentResults {
	currentPage: number
	hasNextPage: boolean
	results: RecentResult[]
}

const defaultRecentResults: RecentResults = {
	currentPage: 0,
	hasNextPage: false,
	results: [defaultRecentResult],
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

interface Links {
	headers: { Referer: string }
	sources: Source[]
	download: string
}

const defaultLinks: Links = {
	headers: { Referer: "" },
	sources: [defaultSource],
	download: "",
}

export type {
	Episode,
	Name,
	Title,
	Recommendation,
	VoiceActor,
	Character,
	Relation,
	Details,
	SearchResult,
	SearchResults,
	PopularResult,
	PopularResults,
	TrendingResult,
	TrendingResults,
	RecentResult,
	RecentResults,
	Source,
	Links,
}

export {
	defaultEpisode,
	defaultName,
	defaultTitle,
	defaultRecommendation,
	defaultVoiceActor,
	defaultCharacter,
	defaultRelation,
	defaultDetails,
	defaultSearchResult,
	defaultSearchResults,
	defaultPopularResult,
	defaultPopularResults,
	defaultTrendingResult,
	defaultTrendingResults,
	defaultRecentResult,
	defaultRecentResults,
	defaultSource,
	defaultLinks,
}
