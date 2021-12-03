/*
 * @Author: Latte
 * @Date: 2021-12-01 11:06:58
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-03 09:39:54
 * @FilePath: \algorithm\手写promise.js
 */
class Promise {
	static PENDING = "pending";
	static FULFILLED = "fulfilled";
	static REJECTED = "rejected";

	constructor(func) {
		this.status = Promise.PENDING;
		this.result = null;
		this.resolveCallbacks = [];
		this.rejectCallbacks = [];

		try {
			func(this.resolve.bind(this), this.reject.bind(this));
		} catch (error) {
			this.reject(error);
		}
	}
	resolve(result) {
		setTimeout(() => {
			if (this.status === Promise.PENDING) {
				this.status = Promise.FULFILLED;
				this.result = result;
				this.resolveCallbacks.forEach((callback) => {
					callback(result);
				});
			}
		});
	}
	reject(result) {
		setTimeout(() => {
			if (this.status === Promise.PENDING) {
				this.status = Promise.REJECTED;
				this.result = result;
				this.rejectCallbacks.forEach((callback) => {
					callback(result);
				});
			}
		});
	}
	then(onFULFILLED, onREJECTED) {
		onFULFILLED = typeof onFULFILLED === "function" ? onFULFILLED : () => {};
		onREJECTED = typeof onREJECTED === "function" ? onREJECTED : () => {};
		if (this.status === Promise.PENDING) {
			this.resolveCallbacks.push(onFULFILLED);
			this.rejectCallbacks.push(onREJECTED);
		}
		if (this.status === Promise.FULFILLED) {
			setTimeout(() => {
				onFULFILLED(this.result);
			});
		}
		if (this.status === Promise.REJECTED) {
			setTimeout(() => {
				onREJECTED(this.result);
			});
		}
	}
}

console.log("第一步");
let commitment = new Promise((resolve, reject) => {
	console.log("第二步");
	resolve("这次一定");
});
console.log("第三步");
console.log(commitment);
commitment.then(() => {
	console.log(commitment);
});
