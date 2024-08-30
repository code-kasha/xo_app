interface Preview {
	intro: string
	full: string
}

const defaultPreview: Preview = {
	intro: "",
	full: "",
}

interface Article {
	title: string
	id: string
	uploadedAt: string
	topics: string[]
	preview: Preview
	thumbnail: string
	thumbnailHash: string
	url: string
}

const defaultArticle: Article = {
	title: "",
	id: "",
	uploadedAt: "",
	topics: [],
	preview: defaultPreview,
	thumbnail: "",
	thumbnailHash: "",
	url: "",
}

interface Feed {
	[x: string]: any
	articles: Article[]
}

const defaultFeed: Feed = {
	articles: [],
}

interface Details {
	id: string
	title: string
	uploadedAt: string
	intro: string
	description: string
	thumbnail: string
	thumbnailHash: string
	url: string
}

const defaultDetails: Details = {
	id: "",
	title: "",
	uploadedAt: "",
	intro: "",
	description: "",
	thumbnail: "",
	thumbnailHash: "",
	url: "",
}

export type { Preview, Article, Feed, Details }
export { defaultPreview, defaultArticle, defaultFeed, defaultDetails }
