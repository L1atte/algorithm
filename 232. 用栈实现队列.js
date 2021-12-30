/*
 * @Author: Latte
 * @Date: 2021-12-29 08:42:34
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-29 08:42:35
 * @FilePath: \algorithm\232. 用栈实现队列.js
 */
var MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
  this.stack2.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.stack1.shift()

  return this.stack2.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack1[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if(this.stack1.length === 0 && this.stack2.length === 0) {
    return true
  } else {
    return false
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */