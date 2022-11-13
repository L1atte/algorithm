/**
 * const a = {
 *  age: 18,
 *  loop: a
 * }
 * a.loop = a
 */

function isObject(obj) {
	return typeof obj === "object" && obj !== null
}

function isCycle(obj) {
	if (typeof obj !== "object" || obj === null) {
		return false
	}

	let flag
	let map = new Map()

	for (let key in obj) {
		map.set(key, obj[key])

		if (map.has(key) && map.get(key) === obj[key]) {
			return true
		}

		if (isObject(obj[key])) {
			isCycle(obj[key])
		}
	}

	return false
}

const a = {
	age: 18,
}
a.loop = a

console.log(isCycle(a))
