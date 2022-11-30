var multiply = function (num1, num2) {
	const length1 = num1.length,
		length2 = num2.length
	const res = new Array(length1 + length2).fill(0)

	for (let p1 = length1 - 1; p1 >= 0; p1--) {
		const n1 = ~~num1[p1]
		for (let p2 = length2 - 1; p2 >= 0; p2--) {
			const n2 = ~~num2[p2]
			const multi = n1 * n2
			const sum = res[p1 + p2 + 1] + multi

			res[p1 + p2 + 1] = sum % 10
			res[p1 + p2] += Math.floor(sum / 10)
		}
	}

	while (res[0] === 0) {
		res.shift()
	}

	return res.length ? res.join("") : "0"
}
