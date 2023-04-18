function detect(str: string): boolean {
	const reverseStr = str.split("").reverse().join("");

	return str === reverseStr ? true : false;
}

// a              a         a
// a    a(pass),  a.
// a.
function countSubstrings(s: string): number {
	let count: number = 0;

	if (s.length === 0) return count;

	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			const flag = detect(s.slice(i, j + 1));
			count = flag ? count + 1 : count;
		}
	}

	return count;
}
