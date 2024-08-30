import { Details as MangaDetails } from "../../../types/manga/mangasee123"

import { Link } from "react-router-dom"

export default function Details({ details, title }: { details: MangaDetails; title: string }) {
	const chapters = details.chapters.reverse()
	const length = chapters.length - 1

	return (
		<>
			{!details.id ? (
				<p>No details found</p>
			) : (
				<>
					<div className="w-11/12 mx-auto space-y-2 md:space-y-4">
						{title && <p className="text-center font-semibold text-2xl p-2 pt-4 md:pt-6">{title}</p>}

						<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 p-2">
							<div className="mx-auto rounded-lg my-auto">
								<img
									src={details.image}
									alt={title}
									className="max-h-[320px] max-w-[300px] w-full h-full border-2 border-slate-600 shadow-lg shadow-gray-800 rounded-lg"
								/>
							</div>

							<div className="p-4 w-11/12 md:w-3/5 mx-auto">
								<p className="text-justify max-h-[320px] overflow-auto p-4" dangerouslySetInnerHTML={{ __html: details.description }} />
							</div>
						</div>
					</div>

					{details.chapters && details.chapters[0]?.id && <Link to={`/mangasee123/read/${chapters[length].id}`}>Read</Link>}
				</>
			)}
		</>
	)
}
