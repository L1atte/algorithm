// Promise.any：可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和AggregateError类型的实例。只要其中的一个 promise 成功，就返回那个已经成功的 promise 。
function any(promises) {
	if (promises.length === 0) {
		return Promise.reject(
			new AggregateError("No Promise in Promise.any was resolved")
		);
	}

	let result = [],
		num = 0;

	return new Promise((resolve, reject) => {
		const check = () => {
			if (num === result.length) {
				reject(new AggregateError("No Promise in Promise.any was resolved"));
			}
		};

		promises.forEach((item, index) => {
			Promise.resolve(item).then(
				(res) => {
					resolve(res);
				},
				(err) => {
					result[index] = err;
					num++;
					check();
				}
			);
		});
	});
}
