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
		onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
		// 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
		onRejected = typeof onRejected === "function" ? onRejected : (v) => v;
		if (this.state === Promise.FULFILLED) {
			setTimeout(() => {
				onFulfilled(this.value);
			});
		}
		if (this.state === Promise.REJECTED) {
			setTimeout(() => {
				onRejected(this.reason);
			});
		}
		if (this.state === Promise.PENDING) {
			this.onResolvedCallbacks.push(() => {
				setTimeout(() => {
					onFulfilled(this.value);
				});
			});
			this.onRejectedCallbacks.push(() => {
				setTimeout(() => {
					onRejected(this.reason);
				});
			});
		}
	}
}

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolve");
	}, 1000);
});

p2.then((value) => {
	console.log("1", value);
});

p2.then((value) => {
	console.log("2", value);
});

p2.then((value) => {
	console.log("3", value);
});
