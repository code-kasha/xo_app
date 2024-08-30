import { Feed, defaultFeed } from "../../types/news/ann"

import { useEffect, useState } from "react"
import axios from "axios"

import { baseNews } from "../../utils/helpers"

import useLocal from "../../hooks/useLocal"

import NewsArticles from "../../components/news/Feed"
import Spinner from "../../components/core/Spinner"
import Error from "../../components/core/Error"
import Title from "../../components/core/Title"

export default function NewsFeed() {
	const [articles, setArticles] = useLocal<Feed>("newsFeed", defaultFeed)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const hasArticles = articles.length > 1

	useEffect(() => {
		if (hasArticles === false) {
			setLoading(true)
			const url: string = `${baseNews}/recent-feeds`
			axios
				.get(url)
				.then((response) => {
					const data: Feed = response.data
					setArticles(data)
				})
				.catch((error) => {
					setError(error.toString())
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [hasArticles])

	if (loading) return <Spinner />
	if (error) return <Error error={error} />

	return (
		<div className="space-y-3">
			<Title title="News Feed" />

			{hasArticles && <NewsArticles articles={articles} />}
		</div>
	)
}
