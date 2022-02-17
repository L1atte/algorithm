/*
 * @Author: Latte
 * @Date: 2022-02-17 00:21:48
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-17 00:43:20
 * @FilePath: \algorithm\93. 复原 IP 地址.js
 */
const restoreIpAddresses = (s) => {
	const res = [];
	// 复原从 start 开始的子串
	const dfs = (subRes, start) => {
		// 片段满四段，并且耗尽所有字符，符合条件，存入结果
		if (subRef.length === 4 && start === s.length) {
			res.push(subRes.join("."));
			return;
		}
		// 片段满四段，但是字符没有耗尽，不用往下选了
		if (subRes.length === 4 && start < s.length) {
			return;
		}

		// 枚举出选择，三种切割长度
		for (let len = 1; len <= 3; len++) {
			if (start + len - 1 >= s.length) return; // 加上要切的长度就越界，不能切这个长度
			if (len !== 1 && s[start] === "0") return; // 不能切出'0x'、'0xx'

			const str = s.substring(start, start + len); // 当前选择切出的片段
			if (len === 3 && parseInt(str) > 255) return; // 不能超过 255

			subRes.push(str); // 作出选择，将片段加入subRes
			dfs(subRes, start + len); // 基于当前选择，继续选择，注意更新指针
			subRes.pop(); // 上面一句的递归分支结束，撤销最后的选择，进入下一轮迭代，考察下一个切割长度
		}
	};

	dfs([], 0); // dfs 入口
	return res;
};
