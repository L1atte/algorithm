let isValid = function (s) {
	let left = ["(", "[", "{"];
	let right = [")", "]", "}"];
	let map = new Map([
		["(", ")"],
		["[", "]"],
		["{", "}"],
	]);
	let len = s.length;

	// 存储字符串
	let saveStr = [];

	for (let i = 0; i < len; i++) {
		if (left.includes(s[i])) {
			// 当前字符串为左括号类型
			saveStr.push(s[i]);
		}
		if (right.includes(s[i])) {
			// 当前字符串为右括号类型
			let temp = saveStr.pop();
			if (map.get(temp) !== s[i]) return false;
		}
	}
	if (saveStr.length !== 0) return false;
	return true;
};
