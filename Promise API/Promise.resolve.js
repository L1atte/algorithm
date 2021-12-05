/*
 * @Author: Latte
 * @Date: 2021-12-05 22:57:27
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-05 23:11:50
 * @FilePath: \algorithm\Promise API\Promise.resolve.js
 */
// Promise.resolve(value) 可以将任何值转成值为 value 状态是 fulfilled 的 Promise，但如果传入的值本身是 Promise 则会原样返回它。
Promise.resolve = function(value) {
  // 传入的值是 Promise
  if(value instanceof Promise) {
    return value
  }

  return new Promise(resolve => resolve(value))
}

// 如果传入的值本身是Promise则会原样返回他
let p = new Promise((resolve) => resolve(3));
console.log(p === Promise.resolve(p));