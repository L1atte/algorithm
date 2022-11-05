function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  let args = [...arguments];
  // 取出构造函数
  let constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  let context = Object.create(constructor.prototype);
  // 执行构造函数
  let result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
let actor = _new(Person, '张三', 28);