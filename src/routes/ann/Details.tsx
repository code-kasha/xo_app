import { Details as Article, defaultDetails as defaultArticle } from "../../types/news/ann"

import { useEffect, useState } from "react"
import axios from "axios"

import { baseNews } from "../../utils/helpers"

import useSession from "../../hooks/useSession"

import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"

import ArticleDetails from "../../components/news/Article"
import { useSearchParams } from "react-router-dom"

export default function Details() {
	const [params] = useSearchParams()

	const id: string = params.get("id") || ""

	const [article, setArticle] = useSession<Article>("newsArticle", defaultArticle)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const hasArticle = article.id === id

	useEffect(() => {
		if (hasArticle === false) {
			setLoading(true)
			const url: string = `${baseNews}/info?id=${id}`
			axios
				.get(url)
				.then((response) => {
					const data: Article = response.data
					setArticle(data)
				})
				.catch((error) => {
					setError(error.toString())
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [hasArticle])

	if (loading) return <Spinner />
	if (error) return <Error error={error} />

	return <ArticleDetails article={article} />
}
