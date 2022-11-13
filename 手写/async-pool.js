/**
 *
 * @param {*} limit 并发限制数
 * @param {*} arr 并发任务数组
 * @param {*} fn 异步任务的构造函数
 */
const asyncPool = async (limit, arr, fn) => {
	const res = [] // 存储所有的 promise 实例
	const executing = [] // 存储正在执行的 promise 实例

	for (let item of arr) {
		// 调用构造函数 fn 实例化 promises，注意这里实例过程放在微任务里面
		const p = Promise.resolve().then(() => {
			fn(item, arr)
		})

		// 将异步任务 p 存入 res，由于 p 的实例化在微任务里，所以这里存储的 p 状态是 pending
		res.push(p)

		// 当并发任务数大于 limit 时，进行并发控制
		if (arr.length >= limit) {
			// 监听 promise 状态，达到完成状态后移除当前任务
			const e = p.finally(() => {
				executing.splice(executing.indexOf(e), 1)
			})
			// 将添加监听器的异步任务存入 executing，注意此时 e 状态为pending
			executing.push(e)

			/**
			 * 当 executing.length 大于 limit 时，调用 Promise.race() 执行
			 * Promise.race 的作用: 假如 poolLimit 是 2, executing 的任务有任意一个被解决,
			 * Promise.race 就是 fulfilled 状态, 之后进入第 3 次 for 循环
			 */
			if (executing.length >= limit) {
				await Promise.race(executing)
			}
		}
	}

	// 最后按序返回结果
	return Promise.all(res)
}