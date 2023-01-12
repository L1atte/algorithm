var rand10 = function () {
	let r1 = rand7()
	while (r1 > 6) {
		r1 = rand7()
	}

	let r2 = rand7()
	while (r2 > 5) {
		r2 = rand7()
	}

	return r1 % 2 === 0 ? r2 : r2 + 5
}
