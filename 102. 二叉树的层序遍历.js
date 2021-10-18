/*
 * @Author: Latte
 * @Date: 2021-10-18 08:31:29
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-18 09:37:59
 * @FilePath: \algorithm\102. 二叉树的层序遍历.js
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [],
    queue = [];

  queue.push(root)
  if (root === null) return res

  while(queue.length !== 0) {
    let len = queue.length
    let curLevel = [] // 记录当前层级
    for(let i = 0; i < len; i++) {
      let node = queue.shift // 弹出队列的第一个元素,实现队列先进先出的结构
      curLevel.push(node.val)
      
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }

    // 把当前层级存入结果
    res.push(curLevel)
  }
};
