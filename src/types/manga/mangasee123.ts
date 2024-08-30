interface Result {
	id: string
	title: string
	altTitles: string[]
	image: string
	headerForImage: { Referer: string }
}

const defaultResult: Result = {
	id: "",
	title: "",
	altTitles: [],
	image: "",
	headerForImage: { Referer: "" },
}

interface Results {
	results: Result[]
}

const defaultResults: Results = {
	results: [defaultResult],
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

interface Details {
	id: string
	title: string
	altTitles: string[]
	genres: string[]
	image: string
	headerForImage: { Referer: string }
	description: string
	chapters: Chapter[]
}

const defaultDetails: Details = {
	id: "",
	title: "",
	altTitles: [],
	genres: [],
	image: "",
	headerForImage: { Referer: "" },
	description: "",
	chapters: [defaultChapter],
}

interface Page {
	page: number
	img: string
	headerForImage: { Referer: string }
}

const defaultPage: Page = {
	img: "",
	page: 0,
	headerForImage: { Referer: "" },
}

interface Pages {
	page: Page[]
}

const defaultPages: Pages = {
	page: [defaultPage],
}

export type { Result, Results, Chapter, Details, Page, Pages }

export {
	defaultResult,
	defaultResults,
	defaultChapter,
	defaultDetails,
	defaultPage,
	defaultPages,
}
