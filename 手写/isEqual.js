function isObject(obj) {
	return typeof obj === "object" && obj !== null;
}

function isEqual(obj1, obj2) {
	// obj1 或者 obj2 是值类型
	if (!isObject(obj1) || !isObject(obj2)) {
		return obj1 === obj2;
	}
	// obj1 与 obj2 全等
	if (obj1 === obj2) {
		return true;
	}

	// 两个都是对象或数组，而且不像等
	// 先出去 obj1 和 obj2 的 keys，比较个数
	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);
	if (obj1Keys.length !== obj2Keys.length) {
		return false;
	}

	// 以 obj1 为基准，和 obj2 依次递归比较
	for (let key in obj1) {
		// 比较当前 key 的 value
		const res = isEqual(obj1[key], obj2[key]);
		if (!res) {
			return false;
		}
	}

	// 全相对
	return true;
}
