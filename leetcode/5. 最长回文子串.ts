// 关于点对称，点可以是索引，也可以是空值
// i: i-1 === i+1...
// i === i+1, i-1 === i+2...

function longestPalindrome(s: string): string {
	let result: string = "";
	function expand(left: number, right: number) {
		while (s[left] === s[right] && left >= 0 && right < s.length) {
			left--;
			right++;
		}
		let len = right - left - 1;
		if (len > result.length) {
			// slice也要去[left+1, right-1]这个区间
			result = s.slice(left + 1, right);
		}
	}

	for (let i = 0; i < s.length; i++) {
		// 回文子串长度是奇数
		expand(i, i);
		// 回文子串长度是偶数
		expand(i, i + 1);
	}
	return result;
}
