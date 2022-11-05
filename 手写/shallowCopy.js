function shallowCopy(obj) {
  // 如果不是对象，直接返回
  if (typeof obj !== 'object' || obj === null) return obj;

  // 初始化对象
  let newObj = Array.isArray(obj) ? [] : {};

  // 遍历obj，一一插入新对象
  for (let key in obj) {
    obj.hasOwnProperty(key) && (newObj[key] = obj[key]);
  }

  return newObj;
}

const obj = {
	a: { b: 1 },
}
// 通过浅拷贝生成新的对象
const newObj = shallowCopy(obj)
console.log(newObj) // {a: {b: 1}}

newObj.a.b = 2
console.log(newObj) // {a: {b: 2}}
console.log(obj) // {a: {b: 2}}
