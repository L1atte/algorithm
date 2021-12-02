/*
 * @Author: Latte
 * @Date: 2021-12-03 00:18:55
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-03 01:41:41
 * @FilePath: \algorithm\simple promise\promise.js
 */
class Promise {
	static PENDING = "pending";
	static RESOLVE = "resolve";
	static REJECT = "reject";

	constructor(executor) {
		this.state = Promise.PENDING;
		this.value = undefined;
		this.reason = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];

		const resolve = (value) => {
			if (this.state === Promise.PENDING) {
				this.state = Promise.FULFILLED;
				this.value = value;
				this.onFulfilledCallbacks.forEach((onFulfilled) => onFulfilled(value));
			}
		};

		const reject = (reason) => {
			if (this.state === Promise.PENDING) {
				this.state = Promise.REJECT;
				this.reason = reason;
				this.onRejectedCallbacks.forEach((onRejected) => onRejected(reason));
			}
		};

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		// 解决 onFufilled，onRejected 没有传值的问题
		onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
		// 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
		onRejected =
			typeof onRejected === "function"
				? onRejected
				: (err) => {
						throw err;
				  };

		let promise2 = new Promise((resolve, reject) => {
			if (this.state === Promise.RESOLVE) {
				setTimeout(() => {
					try {
						let x = onFulfilled(this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (error) {
						reject(error);
					}
				}, 0);
			}
			if (this.state === Promise.REJECT) {
				try {
					let x = onRejected(this.reason);
					resolvePromise(promise2, x, resolve, reject);
				} catch (error) {
					reject(error);
				}
			}
			if (this.state === Promise.PENDING) {
				this.onFulfilledCallbacks.push(onFulfilled(this.value));

				this.onRejectedCallbacks.push(onFulfilled(this.reason));
			}
		});

		return promise2;
	}
}
function resolvePromise(promise, x, resolve, reject) {
	if (promise === x) {
		reject(new TypeError("Chaining cycle detected for promise"));
	} else if (typeof x === "function" || (typeof x === "object" && x !== null)) {
		let called = false;
		try {
			const then = x.then;
			if (typeof then === "function") {
				then.call(
					x,
					(y) => {
						if (called) return;
						called = true;
						resolvePromise(promise, y, resolve, reject);
					},
					(r) => {
						if (called) return;
						called = true;
						reject(r);
					}
				);
			} else {
				resolve(x);
			}
		} catch (error) {
			if (called) return;
			called = true;
			reject(error);
		}
	} else {
		resolve(x);
	}
}

module.exports = Promise;
