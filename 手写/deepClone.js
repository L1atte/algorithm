/**
 *
 * @param obj
 */
function deepClone(obj = {}) {
	if (typeof obj !== "object" || obj === null || obj === undefined) {
		// obj 不是对象或数组，直接返回
		return obj;
	}

	// 初始返回结果
	let result;
	if (obj instanceof Array) {
		result = [];
	} else {
		result = {};
	}

	for (let key in obj) {
		// 保证 key 不是原型的属性
		if (obj.hasOwnProperty(key)) {
			// 递归，因为 obj 里的属性需要进行深拷贝
			result[key] = deepClone(obj[key]);
		}
	}

	// 返回结果
	return result;
}

// 测试
let obj1 = {
	a: "1",
	b: {
		c: "2",
		d: {
			e: "3",
		},
	},
};

let obj2 = deepClone(obj1);
console.log(obj2);
obj2.b.d.e = "e";
console.log(obj1.b.d.e);
