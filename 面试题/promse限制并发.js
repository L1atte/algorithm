/*
 * @Author: Latte
 * @Date: 2022-01-06 15:38:05
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-06 15:38:06
 * @FilePath: \undefinedc:\Users\SIUI\Desktop\algorithm\promse限制并发.js
 */
class Scheduler {
	constructor(max) {
		this.queue = [];
		this.maxCount = max;
		this.runCount = 0;
	}
	add(promiseCreator) {
		this.queue.push(promiseCreator);
	}
	// 启动函数
	taskStart() {
		for (let i = 0; i < this.maxCount; i++) {
			this.request();
		}
	}
	// 执行函数
	request() {
		if (this.queue.length && this.runCount < this.maxCount) {
			this.runCount++;
			const task = this.queue.shift();
			task().finally(() => {
				this.runCount--;
				this.request();
			});
		}
	}
}

const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

const scheduler = new Scheduler(1);

const addTask = (time, order) => {
	scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);

scheduler.taskStart();
