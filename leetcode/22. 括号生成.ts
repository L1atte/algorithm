// 回溯
// (((
// ((()))

// 2, 2, ""
// 1, 2, "("


function generateParenthesis(n: number): string[] {
	const res: string[] = [];

	function dfs(lRemain: number, rRemain: number, str: string) {
		if (str.length === 2 * n) {
			res.push(str);
			return;
		}

		// 只要左括号有剩，我们就可以选它，然后继续做选择（递归）
		if (lRemain > 0) {
      debugger
			dfs(lRemain - 1, rRemain, str + "(");
		}
		// 只有右括号比左括号剩的多，才能选右括号，然后继续递归
		if (lRemain < rRemain) {
      debugger
			dfs(lRemain, rRemain - 1, str + ")");
		}
	}

	dfs(n, n, "");
	return res;
}
generateParenthesis(2)
