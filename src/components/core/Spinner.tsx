export default function Spinner() {
	return (
		<div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur">
			<div role="status">
				<svg
					aria-hidden="true"
					className="inline w-8 h-8 text-gray-900 animate-spin dark:text-gray-600 fill-blue-600"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M50 0a50 50 0 1 0 50 50A50.06 50.06 0 0 0 50 0zm0 90a40 40 0 1 1 40-40 40.05 40.05 0 0 1-40 40z"
						fill="currentColor"
					/>
					<path
						d="M93.967 39.042a1.5 1.5 0 0 0-1.932-1.932A48.108 48.108 0 0 0 50 4a48.108 48.108 0 0 0-42.035 33.11 1.5 1.5 0 0 0 1.932 1.932A45.108 45.108 0 0 1 50 7a45.108 45.108 0 0 1 43.967 32.042z"
						fill="currentFill"
					/>
				</svg>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	)
}
