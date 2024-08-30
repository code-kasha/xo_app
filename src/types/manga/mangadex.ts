interface AltTitle {
	[languageCode: string]: string
}

const defaultAltTitle: AltTitle = {
	en: "",
}

interface Result {
	id: string
	title: string
	altTitles: AltTitle
	description: []
	status: string
	releaseDate: number
	contentRating: string
	lastVolume: string
	lastChapter: string
	image: string
}

const defaultResult: Result = {
	id: "",
	title: "",
	altTitles: defaultAltTitle,
	description: [],
	status: "",
	releaseDate: 0,
	contentRating: "",
	lastVolume: "",
	lastChapter: "",
	image: "",
}

interface Results {
	currentPage: number
	results: Result[]
}

const defaultResults: Results = {
	currentPage: 0,
	results: [defaultResult],
}

interface Description {
	[languageCode: string]: string
}

const defaultDescription: Description = {
	en: "",
}

interface Chapter {
	id: string
	title: string
	chapterNumber: string
	volumeNumber: string
	pages: number
}

const defaultChapter: Chapter = {
	id: "",
	title: "",
	chapterNumber: "",
	volumeNumber: "",
	pages: 0,
}

interface Details {
	id: string
	title: string
	altTitles: AltTitle[]
	description: Description[]
	headerForImage: { Referer: string }
	genres: string[]
	themes: string[]
	status: string
	releaseDate: number
	chapters: Chapter[]
	image: string
}

const defaultDetails: Details = {
	id: "",
	title: "",
	altTitles: [defaultAltTitle],
	description: [defaultDescription],
	headerForImage: { Referer: "" },
	genres: [],
	themes: [],
	status: "",
	releaseDate: 0,
	chapters: [defaultChapter],
	image: "",
}

interface Page {
	img: string
	page: number
}

const defaultPage: Page = {
	img: "",
	page: 0,
}

interface Pages {
	page: Page[]
}

const defaultPages: Pages = {
	page: [defaultPage],
}

export type { AltTitle, Result, Results, Description, Chapter, Details, Page, Pages }

export { defaultAltTitle, defaultResult, defaultResults, defaultDescription, defaultChapter, defaultDetails, defaultPage, defaultPages }
