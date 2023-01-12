class Promise {
	static PENDING = "pending";
	static RESOLVED = "resolved";
	static REJECTED = "rejected";

	constructor(executor) {
		this.state = Promise.PENDING;
		this.value = undefined;
		this.reason = undefined;
		this.onResolvedCallbacks = [];
		this.onRejectedCallbacks = [];

		let resolve = (value) => {
			if (this.state === Promise.PENDING) {
				this.state = Promise.RESOLVED;
				this.value = value;
				this.onResolvedCallbacks.forEach((callback) => callback());
			}
		};

		let reject = (reason) => {
			if (this.state === Promise.PENDING) {
				this.state = Promise.REJECTED;
				this.reason = reason;
				this.onRejectedCallbacks.forEach((callback) => callback());
			}
		};

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		// 解决 onFulfilled，onRejected 没有传值的问题
		onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
		// 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
		onRejected =
			typeof onRejected === "function"
				? onRejected
				: (err) => {
						throw err;
				  };

		// 每次调用 then 都返回一个新的 promise
		let promise2 = new Promise((resolve, reject) => {
			if (this.state === Promise.RESOLVED) {
				//Promise/A+ 2.2.4 --- setTimeout
				setTimeout(() => {
					try {
						let x = onFulfilled(this.value);
						// x可能是一个promise
						resolvePromise(promise2, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				}, 0);
			}

			if (this.state === Promise.REJECTED) {
				//Promise/A+ 2.2.3
				setTimeout(() => {
					try {
						let x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				}, 0);
			}

			if (this.state === Promise.PENDING) {
				this.onResolvedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onFulfilled(this.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				});

				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				});
			}
		});

		return promise2;
	}
}

const resolvePromise = (promise2, x, resolve, reject) => {
	// 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
	if (promise2 === x) {
		return reject(
			new TypeError("Chaining cycle detected for promise #<Promise>")
		);
	}
	// Promise/A+ 2.3.3.3.3 只能调用一次	
	let called = false;
	if ((typeof x === "object" && x !== null) || typeof x === "function") {
		try {
			// Promise/A+ 2.3.3.1
			let then = x.then;
			if (typeof then === "function") {
				// Promise/A+ 2.3.3.3
				// 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty
				then.call(
					x,
					(y) => {
						if (called) return;
						called = true;
						// Promise/A+ 2.3.3.3.1
						// 递归解析的过程（因为可能 promise 中还有 promise）
						resolvePromise(promise2, y, resolve, reject);
					},
					(r) => {
						// 只要失败就失败 Promise/A+ 2.3.3.3.2
						if (called) return;
						called = true;
						reject(r);
					}
				);
			} else {
				// Promise/A+ 2.3.3.4
				// 如果 then 不是函数，以 x 为参数解决 promise2
				resolve(x);
			}
		} catch (error) {
			// Promise/A+ 2.3.3.2
			if (called) return;
			called = true;
			reject(error);
		}
	} else {
		// Promise/A+ 2.3.4
		// 如果 x 不为对象或者函数，以 x 为参数解决 promise2
		resolve(x);
	}
};

module.exports = Promise;
