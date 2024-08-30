interface Title {
	romaji: string
	english: string
	native: string
	userPreferred: string
}

const defaultTitle: Title = {
	romaji: "",
	english: "",
	native: "",
	userPreferred: "",
}

interface Date {
	year: null | number | string
	month: null | number | string
	day: null | number | string
}

const defaultDate: Date = {
	year: null,
	month: null,
	day: null,
}

interface Chapter {
	id: string
	title: string
	releaseDate: string
}

const defaultChapter: Chapter = {
	id: "",
	title: "",
	releaseDate: "",
}

interface Recommendation {
	id: number
	malId: number
	title: Title
	status: string
	chapters: Chapter[]
	image: string
	imageHash: string
	cover: string
	coverHash: string
	rating: number
	type: string
}

const defaultRecommendation: Recommendation = {
	id: 0,
	malId: 0,
	title: defaultTitle,
	status: "",
	chapters: [defaultChapter],
	image: "",
	imageHash: "",
	cover: "",
	coverHash: "",
	rating: 0,
	type: "",
}

interface Relation {
	id: number
	relationType: string
	malId: number
	title: Title
	status: string
	chapters: Chapter[]
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
	chapters: [defaultChapter],
	image: "",
	imageHash: "",
	color: "",
	type: "",
	cover: "",
	coverHash: "",
	rating: 0,
}

interface Character {
	id: number | string
	role: string
	name: Title
	image: string
	imageHash: string
}

const defaultCharacter: Character = {
	id: "",
	role: "",
	name: defaultTitle,
	image: "",
	imageHash: "",
}

interface Details {
	id: string
	title: Title
	malId: number
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
	rating: number
	genres: string[]
	season: string | null
	studios: string[]
	type: string
	recommendations: Recommendation[]
	characters: Character[]
	relations: Relation[]
	chapters: Chapter[]
}

const defaultDetails: Details = {
	id: "",
	title: defaultTitle,
	malId: 0,
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
	rating: 0,
	genres: [],
	season: null,
	studios: [],
	type: "",
	recommendations: [defaultRecommendation],
	characters: [defaultCharacter],
	relations: [defaultRelation],
	chapters: [defaultChapter],
}

interface Result {
	id: string
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
	totalChapters: number
	volumes: number
	type: string
	releaseDate: null | number | string
}

const defaultResult: Result = {
	id: "",
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
	totalChapters: 0,
	volumes: 0,
	type: "",
	releaseDate: null,
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

interface ImageLink {
	page: number
	img: string
	headerForImage: { Referer: string }
}

const defaultLink: ImageLink = {
	page: 0,
	img: "",
	headerForImage: { Referer: "" },
}

export type {
	Title,
	Date,
	Chapter,
	Recommendation,
	Relation,
	Character,
	Details,
	Result,
	Results,
	ImageLink,
}
export {
	defaultTitle,
	defaultDate,
	defaultChapter,
	defaultRecommendation,
	defaultRelation,
	defaultCharacter,
	defaultDetails,
	defaultResult,
	defaultResults,
	defaultLink,
}
