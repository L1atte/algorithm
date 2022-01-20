/*
 * @Author: Latte
 * @Date: 2022-01-21 01:29:53
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-21 01:32:31
 * @FilePath: \algorithm\手写\debounce.js
 */
/**
 * 防抖
 */
function debounce(fn, delay = 500) {
	let timer = null;

	return function () {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			fn.apply(this, arguments);
			timer = null;
		}, delay);
	};
}
