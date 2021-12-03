/*
 * @Author: Latte
 * @Date: 2021-12-03 13:49:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-03 14:11:18
 * @FilePath: \algorithm\Promise API\Promise.allSettled.js
 */
function allSettled(promises) {
	if (promises.length === 0) {
		return Promise.resolve([]);
	}

	let result = [],
		sum = 0;

	return new Promise((resolve, reject) => {
		const check = () => {
			if (num === promises.length) {
				resolve(result);
			}
		};

		promises.forEach((item, index) => {
			Promise.resolve(item).then(
				(res) => {
					result[index] = { status: "fulfilled", value: res };
					num++;
					check();
				},
				(err) => {
					result[index] = { status: "rejected", reason: err };
					num++;
					check();
				}
			);
		});
	});
}
