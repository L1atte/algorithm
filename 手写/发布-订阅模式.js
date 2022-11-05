class Event {
	constructor() {
		this.events = {}
	}

	on(key, fn) {
		if (this.events.hasOwnProperty(key)) {
			this.events[key].push(fn)
		} else {
			this.events[key] = [fn]
		}
	}

	emit(key, params) {
		if (this.events.hasOwnProperty(key)) {
			this.events[key].forEach((fn) => {
				fn(params)
			})
		} else {
			return new Error()
		}
	}

	off(key, fn) {
		if (this.events.hasOwnProperty(key)) {
			this.events = this.events[key].filter((f) => f !== fn)
		}
	}

	once(name, fn) {
		const self = this
		// 新建一个函数，执行完 fn 后自动触发 off
		const newFn = function (...args) {
			fn.call(self, ...args)
			self.off(name, newFn)
		}

		// 绑定
		self.on(name, newFn)
	}
}
