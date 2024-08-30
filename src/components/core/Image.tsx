import { SyntheticEvent } from "react"
import { ClassAttributes, ImgHTMLAttributes } from "react"
import { JSX } from "react/jsx-runtime"

export default function Image(params: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) {
	const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		const target = e.target as HTMLImageElement
		target.src = "/images/placeholder.jpg"
	}

	return (
		<img
			className="grid-img"
			src={params.src}
			onError={(e) => {
				handleError(e)
			}}
			{...params}
		/>
	)
}
