/**
 * 防抖
 * debounce 拿到参数的原理：debounce返回一个函数fn1，去取fn1的参数 args，然后调用原函数Fn的apply方法，即 fn.apply(this, args)
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
