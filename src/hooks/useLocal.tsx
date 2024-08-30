import { useState, useEffect } from "react"

function getValue<T>(key: string, initialValue: T): T {
	const storedValue = localStorage.getItem(key)
	if (storedValue) {
		try {
			return JSON.parse(storedValue) as T
		} catch (e) {
			return storedValue as string | number as T
		}
	}
	return initialValue
}

function setValue<T>(key: string, value: T): void {
	if (typeof value === "string") {
		localStorage.setItem(key, value)
	} else {
		localStorage.setItem(key, JSON.stringify(value))
	}
}

export default function useLocal<T>(
	key: string,
	initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [data, setData] = useState<T>(() => getValue(key, initialValue))

	useEffect(() => {
		setValue(key, data)
	}, [data, key])

	return [data, setData]
}
