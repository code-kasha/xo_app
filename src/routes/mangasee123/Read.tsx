import { useParams } from "react-router-dom"

export default function Read() {
	const { id } = useParams<{ id: string }>()

	return <>Read - {id}</>
}
