const Promise = require("../simple promise/promise");

function all(promises) {
	if (promises.length === 0) {
		return Promise.resolve([]);
	}

	let result = [],
		num = 0;

	return new Promise((resolve, reject) => {
		const check = () => {
			if (num === promises.length) {
				resolve(result);
			}
		};

		promises.forEach((item, index) => {
			Promise.resolve(item).then(
				(res) => {
					num++;
					result[index] = res;
					check();
				},
				(err) => {
					reject(err);
				}
			);
		});
	});
}
 