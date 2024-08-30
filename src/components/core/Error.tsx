export default function Error({ error }: { error: Error | null }) {
	const message: string = error ? error.toString() : ""

	return <p className="bg-red-200 p-3 text-center">{message}</p>
}
