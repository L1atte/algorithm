/*
 * @Author: Latte
 * @Date: 2021-09-27 08:27:46
 * @LAstEditors: Latte
 * @LastEditTime: 2021-09-27 09:55:11
 * @FilePath: \algorithm\146. LRU缓存机制.js
 */
/**
 * 解题步骤
 * get
 *   元素存在
 *     delete, set
 *   元素不存在
 *     return -1
 * put
 *   元素存在
 *     delete, set
 *   元素不存在
 *     容量超载
 *       delete map头部元素, set
 *     不超载
 *       set  
 */

let LRUCache = class {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }

  get(key) {
    let cache = this.cache
    if(cache.has(key)) {
      let temp = cache.get(key)
      cache.delete(key)
      cache.set(key, temp)
      return temp
    }
    return -1
  }

  put(key, value) {
    let cache = this.cache
    if(cache.has(key)) {
      // 元素存在
      cache.delete(key)
    } else if(cache.size >= this.capacity) {
      // 元素不存在且超载
      cache.delete(cache.keys().next().value)
    }
    cache.set(key, value)
  }
}

