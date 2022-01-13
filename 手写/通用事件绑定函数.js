function bindEvent(elem, type, selector, fn) {
	// 交换参数 selector 和 fn
	if (fn == null) {
		fn = selector;
		selector = null;
	}

	elem.addEventListener(type, event => {
		const target = elem.target
		if(selector) {
			// 代理绑定

			// 匹配选择器
			if(target.matches(selector)) {
				fn.call(target,event)
			}
		} else {
			// 普通绑定
			fn.call(target.event)
		}
	})
}
