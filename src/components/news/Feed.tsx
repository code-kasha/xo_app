import { Feed, Article } from "../../types/news/ann"
import { Link } from "react-router-dom"

export default function NewsFeed({ articles }: { articles: Feed }) {
	return (
		<div className="border grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
			{articles.map((article: Article) => (
				<div key={article.id} className="flex flex-col items-center mx-auto space-y-2">
					<p className="p-2 text-center font-semibold h-[100px] items-center flex">{article.title}</p>
					<div className="flex flex-col space-y-2">
						<img src={article.thumbnail} alt="" className="w-[200px] md:w-[288px] h-[120px] md:h-[162px] object-cover" />
						<p className="text-center p-1">{article.uploadedAt}</p>
						<Link className="p-2 rounded border text-center" to={`/ann/details?id=${encodeURIComponent(article.id)}`}>
							Details
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}
