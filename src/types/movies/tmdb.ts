interface Result {
	id: string
	title: string
	image: string
	type: string
	rating: number
	releaseDate: string
}

const defaultResult: Result = {
	id: "",
	title: "",
	image: "",
	type: "",
	rating: 0,
	releaseDate: "",
}

interface Results {
	currentPage: number
	hasNextPage: boolean
	results: Result[]
}

const defaultResults: Results = {
	currentPage: 0,
	hasNextPage: false,
	results: [defaultResult],
}

interface Translation {
	title: string
	description: string
	language: string
}

const defaultTranslation: Translation = {
	title: "",
	description: "",
	language: "",
}

interface Logo {
	url: string
	aspectRatio: number
	width: number
}

const defailtLogo: Logo = {
	url: "",
	aspectRatio: 0,
	width: 0,
}

interface Episode {
	[x: string]: any
	id: string
	title: string
	episode: number
	season: number
	releaseDate: string
	description: string
	url: string
	img: {
		mobile: string
		hd: string
	}
}

const defaultEpisode: Episode = {
	id: "",
	title: "",
	episode: 0,
	season: 0,
	releaseDate: "",
	description: "",
	url: "",
	img: {
		mobile: "",
		hd: "",
	},
}

interface Season {
	season: number
	image: {
		mobile: string
		hd: string
	}
	episodes: Episode
	isReleased: boolean
}

const defaultSeason: Season = {
	season: 0,
	image: {
		mobile: "",
		hd: "",
	},
	episodes: defaultEpisode,
	isReleased: false,
}

interface Details {
	id: string
	title: string
	translations: Translation[]
	image: string
	cover: string
	logos: Logo[]
	type: string
	rating: number
	releaseDate: string
	description: string
	genres: string[]
	totalEpisodes: number
	totalSeasons: number
	director: string[]
	writers: string[]
	actors: string[]
	trailer: {
		id: string
		site: string
		url: string
	}
	mappings: {
		imdb: string
		tmdb: string
	}
	similar: Result[]
	recommendations: Result[]
	seasons: Season[]
}

const defaultDetails: Details = {
	id: "",
	title: "",
	translations: [defaultTranslation],
	image: "",
	cover: "",
	logos: [defailtLogo],
	type: "",
	rating: 0,
	releaseDate: "",
	description: "",
	genres: [],
	totalEpisodes: 0,
	totalSeasons: 0,
	director: [],
	writers: [],
	actors: [],
	trailer: {
		id: "",
		site: "",
		url: "",
	},
	mappings: {
		imdb: "",
		tmdb: "",
	},
	similar: [defaultResult],
	recommendations: [defaultResult],
	seasons: [defaultSeason],
}

interface Source {
	url: string
	quality: string
	isM3U8: boolean
}

const defaultSource: Source = {
	url: "",
	quality: "",
	isM3U8: false,
}

interface Subtitle {
	url: string
	lang: string
}

const defaultSubtitle: Subtitle = {
	url: "",
	lang: "",
}

interface Links {
	headers: { Referer: string }
	sources: Source[]
	subtitles: Subtitle[]
}

const defaultLinks: Links = {
	headers: { Referer: "" },
	sources: [defaultSource],
	subtitles: [defaultSubtitle],
}

export type { Result, Results, Translation, Logo, Episode, Season, Details, Source, Subtitle, Links }

export {
	defaultResult,
	defaultResults,
	defaultTranslation,
	defailtLogo,
	defaultEpisode,
	defaultSeason,
	defaultDetails,
	defaultSource,
	defaultSubtitle,
	defaultLinks,
}
