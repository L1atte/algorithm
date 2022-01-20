/*
 * @Author: Latte
 * @Date: 2022-01-21 01:53:35
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-21 01:57:02
 * @FilePath: \algorithm\手写\throttle.js
 */
/**
 * 节流
 */
function throttle(fn, delay = 100) {
	let timer = null;

	return function () {
		if (timer) {
			return;
		}

		timer = setTimeout(() => {
			fn.apply(this, arguments);
			timer = null;
		}, delay);
	};
}
