// review
// const p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(1000);
// 	}, 1000);
// });

// p.then((value) => {
// 	console.log(value);
// });

// 1.Promise 是一个构造函数（ES6 中使用类）
// 2.new Promise 时传入一个执行函数，并且执行函数是立即执行的
// 3.执行函数接收两个参数 resolve 函数 和 reject 函数，并且均能够接收参数
// 4.Promise 的实例上有一个 then 方法， then 方法接收两个参数

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function resolvePromise(promise, x) {}

class Promise {
	static PENDING = "pending";
	static FULFILLED = "fulfilled";
	static REJECTED = "rejected";

	constructor(executor) {
		this.state = Promise.PENDING;
		this.value = undefined;
		this.reason = undefined;
		this.onResolvedCallbacks = [];
		this.onRejectedCallbacks = [];

		const resolve = (value) => {
			if (this.state === Promise.PENDING) {
				this.state = Promise.FULFILLED;
				this.value = value;
				this.onResolvedCallbacks.forEach((callback) => {
					callback();
				});
			}
		};

		const reject = (reason) => {
			if (this.state === Promise.PENDING) {
				this.state = Promise.REJECTED;
				this.reason = reason;
				this.onRejectedCallbacks.forEach((callback) => {
					callback();
				});
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
		// onFulfilled =
		// 	typeof onFulfilled === "function"
		// 		? onFulfilled
		// 		: (v) => {
		// 				console.log("1", v);
		// 				return v;
		// 		  };
		// // 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
		onFulfilled = function (value) {
			console.log("object1", value);
		};
		onRejected = typeof onRejected === "function" ? onRejected : (v) => v;

		if (this.state === FULFILLED) {
			console.log("jjj");
			// 执行函数为同步且执行了 resolve
			typeof onFulfilled === "function" && onFulfilled("hhh");
		} else if (this.state === REJECTED) {
			// 执行函数为同步且执行了 reject
			typeof onRejected === "function" && onRejected(this.reason);
		} else {
			// // 执行函数为异步
			// typeof onFulfilled === "function" &&
			// 	(this.onFulfilledCallback = onFulfilled);
			// typeof onRejected === "function" &&
			// 	(this.onRejectedCallback = onRejected);
		}

		// const promise2 = new Promise((resolve, reject) => {
		// 	// Resolve
		// 	if (this.state === Promise.FULFILLED) {
		// 		//Promise/A+ 2.2.4 --- setTimeout
		// 		setTimeout(() => {
		// 			try {
		// 				let x = onFulfilled(this.value);
		// 				// x可能是一个proimise
		// 				resolvePromise(promise2, x, resolve, reject);
		// 			} catch (error) {
		// 				reject(error);
		// 			}
		// 		}, 0);
		// 	}
		// 	// Reject
		// 	if (this.state === Promise.REJECTED) {
		// 		setTimeout(() => {
		// 			try {
		// 				let x = onRejected(this.reason);
		// 				resolvePromise(promise2, resolve, reject);
		// 			} catch (error) {
		// 				reject(error);
		// 			}
		// 		});
		// 	}
		// 	// Pending
		// 	if (this.state === Promise.PENDING) {
		// 		this.onResolvedCallbacks.push((value) => {
		// 			console.log("vvv", value);
		// 			setTimeout(() => {
		// 				try {
		// 					let x = onFulfilled(this.value);
		// 					// mise
		// 					resolvePromise(promise2, x, resolve, reject);
		// 				} catch (error) {
		// 					reject(error);
		// 				}
		// 			});
		// 		});
		// 		this.onRejectedCallbacks.push(() => {
		// 			setTimeout(() => {
		// 				try {
		// 					let x = onRejected(this.reason);
		// 					resolvePromise(promise2, resolve, reject);
		// 				} catch (error) {
		// 					reject(error);
		// 				}
		// 			});
		// 		});
		// 	}
		// });

		// return promise2;
	}
}

const p = new Promise((resolve) => resolve(1));
p.then();
console.log("object");
