/*
 * @Author: Latte
 * @Date: 2021-12-30 08:44:53
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-30 09:18:05
 * @FilePath: \algorithm\199. 二叉树的右视图.js
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/**
 * 二叉树的右视图：可以理解从当遍历二叉树的每一个层级上，只取当前层级最右的一个节点，直到遍历结束
 */
 var rightSideView = function(root) {
  let res = [],
    queue = [];

  if(root === null) return res

  queue.push(root)
  while(queue.length !== 0) {
    let length = queue.length

    for(let i = 0; i < length; i++) {
      let node = queue.shift()
      
      // 当 i === length - 1 的时候表明到了层级的最后一个节点
      if(i === length - 1) {
        res.push(node.val)
      }

      node.left && queue.push(node.left);
			node.right && queue.push(node.right);
    }
  }
  return res
};