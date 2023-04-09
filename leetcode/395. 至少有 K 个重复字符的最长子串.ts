// 1. store the count of char
// 2. get the max length of store

// 1、使用map管理字母出现次数
// 2、使用split去掉不满足条件字母

function longestSubstring(s: string, k: number): number {
	let code = new Map();
	for (let w of s) {
		code.set(w, code.has(w) ? code.get(w) + 1 : 1);
	}
	let split = "";
	for (let v of code) {
		if (v[1] < k) {
			split = v[0];
			break;
		}
	}

	if (!split) return s.length;

	let maxLen = 0;
	const other = s.split(split);
	for (const w of other) {
		if (w) {
			let len = longestSubstring(w, k);
			maxLen = Math.max(maxLen, len);
		}
	}
	return maxLen;
}
