/*
 * @Author: Latte
 * @Date: 2021-12-03 14:26:23
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-03 14:39:11
 * @FilePath: \algorithm\Promise API\Promise.race.js
 */
function race(promises) {
	if (!promises.length) {
		throw Error("Promise.race need length");
	}

	return new Promise((resolve, reject) => {
		promises.forEach((item) => {
			Promise.resolve(item).then(
				(res) => {
					resolve(res);
				},
				(err) => {
					reject(err);
				}
			);
		});
	});
}
