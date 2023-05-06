function countBits(n: number): number[] {
	let res = [];

	if (n === 0) return [0];

	while (n) {
		let binary = Number(n).toString(2),
			sum = 0;

		for (let item of binary) {
			sum += +item;
		}

		res.unshift(sum);
		n--;
	}

	res.unshift(0);

	return res;
}
