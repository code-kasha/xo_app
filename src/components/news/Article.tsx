import { Details as defaultArticle } from "../../types/news/ann"
import Title from "../../components/core/Title"

export default function Article({ article }: { article: defaultArticle }) {
	function visitArticle(url: string): void {
		window.open(url, "_blank")
	}

	return (
		<>
			<Title title={`${article.title}`} />
			<div className="space-y-4">
				<img src={article.thumbnail} alt={article.id} className="mx-auto h-auto w-auto p-2" />

				<div className="text-justify p-6">
					<p className="text-center text-2xl p-2">{article.intro}</p>
					<p className="text-center text-xl p-2">{article.uploadedAt}</p>
				</div>

				<button
					onClick={() => {
						visitArticle(article.url)
					}}
					className="mx-auto flex p-2 px-4 border border-gray-800 hover:border-gray-200 rounded-md bg-gray-200 hover:bg-gray-800 hover:text-white"
				>
					Visit
				</button>

				<div className="text-justify text-wrap space-y-0">
					<p className="p-4">{article.description}</p>
				</div>
			</div>
		</>
	)
}
