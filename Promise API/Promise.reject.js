// 和 Promise.resolve() 类似，Promise.reject() 会实例化一个 rejected 状态的 Promise。但与 Promise.resolve() 不同的是，如果给 Promise.reject() 传递一个 Promise 对象，则这个对象会成为新 Promise 的值。

Promise.reject = function(reason) {
  return new Promise((resolve, reject) =>{
    reject(reason)
  })
}

// 与 Promise.resolve() 不同的是，如果给 Promise.reject() 传递一个 Promise 对象，则这个对象会成为新 Promise 的值
let p = new Promise((resolve,reject) => reject(3));
console.log(p === Promise.reject(p)); // false