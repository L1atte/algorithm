/*
 * @Author: Latte
 * @Date: 2021-12-01 11:06:58
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-01 11:32:31
 * @FilePath: \algorithm\手写promise.js
 */
class Commitment {
	static PENDING = "pending";
	static FULFILLED = "fulfilled";
	static REJECTED = "rejected";

	constructor(func) {
		this.status = Commitment.PENDING;
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
			if (this.status === Commitment.PENDING) {
				this.status = Commitment.FULFILLED;
				this.result = result;
				this.resolveCallbacks.forEach((callback) => {
					callback(result);
				});
			}
		});
	}
	reject(result) {
		setTimeout(() => {
			if (this.status === Commitment.PENDING) {
				this.status = Commitment.REJECTED;
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
		if (this.status === Commitment.PENDING) {
			this.resolveCallbacks.push(onFULFILLED);
			this.rejectCallbacks.push(onREJECTED);
		}
		if (this.status === Commitment.FULFILLED) {
			setTimeout(() => {
				onFULFILLED(this.result);
			});
		}
		if (this.status === Commitment.REJECTED) {
			setTimeout(() => {
				onREJECTED(this.result);
			});
		}
	}
}

console.log("第一步");
let commitment = new Commitment((resolve, reject) => {
	console.log("第二步");
	resolve("这次一定");
});
console.log("第三步");
console.log(commitment);
commitment.then(() => {
	console.log(commitment);
});
