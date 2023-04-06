// loop
// set map <string, count>

function findRepeatedDnaSequences(s: string): string[] {
	const LENGTH: number = 10;
	if (s.length < LENGTH) return [];

	const set: Set<string> = new Set();
	const resultSet: Set<string> = new Set();

	for (let i = LENGTH; i < s.length + 1; i++) {
		const str = s.slice(i - LENGTH, i);
		if (set.has(str)) {
			resultSet.add(str);
		} else {
			set.add(str);
		}
	}

	return [...resultSet];
}

// map 解法
// loop
// set map <string, count>

function findRepeatedDnaSequences1(s: string): string[] {
	const LENGTH: number = 10;
	if (s.length < LENGTH) return [];

	const map: Map<string, number> = new Map();
	const set: Set<string> = new Set();

	for (let i = LENGTH; i < s.length + 1; i++) {
		const str = s.slice(i - LENGTH, i);
		console.log(str);
		if (map.has(str)) {
			let value = map.get(str);
			map.set(str, value!++);
			set.add(str);
		} else {
			map.set(str, 1);
		}
	}

	return [...set];
}
