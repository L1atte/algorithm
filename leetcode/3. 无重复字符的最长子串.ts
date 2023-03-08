// a ab abc bca cab abc cb b
// 不存在，直接存入
// 存在，找到所在的 index， （index + 1, length) + item

function lengthOfLongestSubstring(s: string): number {
	// Map<item, index>
	let map: Map<string, number> = new Map();
	let max: number = 0;
	let len: number = s.length;

	for (let i = 0, j = 0; j < len; j++) {
		if (map.has(s[j]) && map.get(s[j])! >= i) {
			i = map.get(s[j])! + 1;
		}
		map.set(s[j], j);
		max = Math.max(max, j - i + 1);
	}
	return max;
}
