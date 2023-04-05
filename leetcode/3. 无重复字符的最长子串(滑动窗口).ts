// start, end = 0
// cur not in str, end++
// cur in str, start = str.indexOf(cur) + 1, end++
// index++
// return max

function lengthOfLongestSubstring1(s: string): number {
	if (s.length === 0) return 0;

	let start: number = 0;
	let end: number = 0;
	let max: number = 1;

	for (let i = 1; i < s.length; i++) {
		const str = s.slice(start, end + 1);
		const current = s[i];

		if (str.includes(current)) {
			start = start + str.indexOf(current) + 1;
		}
		end++;

		max = Math.max(max, end - start + 1);
	}

	return max;
}
