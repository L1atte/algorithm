/*
 * @Author: Latte
 * @Date: 2022-02-22 08:44:47
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-23 12:08:55
 * @FilePath: \algorithm\22. 括号生成.js
 */
var generateParenthesis = function (n) {
	const res = [];

	// lRemain 是左括号剩余的数量，rRemain 是右括号剩余的数量，str 是当前构建的字符串
	const dfs = (lRemain, rRemain, str) => {
		if (str.length === 2 * n) {
			res.push(str);
			return;
		}
    // 只要左括号有剩，我们就可以选它，然后继续做选择（递归）
		if (lRemain > 0) {
			dfs(lRemain - 1, rRemain, str + "(");
		}
    // 只有右括号比左括号剩的多，才能选右括号，然后继续递归
		if (lRemain < rRemain) {
			dfs(lRemain, rRemain - 1, str + ")");
		}
	};

	dfs(n, n, "");
	return res;
};
