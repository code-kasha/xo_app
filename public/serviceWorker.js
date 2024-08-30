const CACHE_NAME = "xo-assets"

async function fetchAndCacheAsset(asset) {
	const assetUrl = new URL(`${asset}`, self.location).toString()
	const cache = await caches.open(CACHE_NAME)
	const existingResponse = await cache.match(assetUrl)
	if (existingResponse) {
		return existingResponse
	}
	const response = await fetch(assetUrl)
	await cache.put(assetUrl, response)
	return response
}

self.addEventListener("activate", (event) => {
	event.waitUntil(
		Promise.all([
			caches.open(CACHE_NAME).then(async (cache) => {
				try {
					const response = await fetch("/manifest.json")
					if (response.ok) {
						const manifest = await response.json()
						const fetchAndCachePromises = manifest.assets.map(
							async (assetUrl) => {
								try {
									const existingResponse = await cache.match(assetUrl)
									if (existingResponse) {
										return existingResponse
									}
									const response = await fetch(assetUrl)
									if (response.ok) {
										await cache.put(assetUrl, response.clone())
									}
									return response
								} catch (error) {
									return null
								}
							}
						)
						await Promise.all(fetchAndCachePromises)
					} else {
					}
				} catch (error) {}
			}),

			caches.keys().then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cacheName) => {
						if (cacheName.startsWith(CACHE_NAME) && cacheName !== CACHE_NAME) {
							return caches.delete(cacheName)
						}
					})
				)
			}),
		])
	)
})
