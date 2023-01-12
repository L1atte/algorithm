/**
 * 递归
 */
var inorderTraversal = function(root) {
  const res = []

  const inorder = (root) => {
    if(!root) return
    
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }

  inorder(root)
  return res
};

/**
 * 迭代
 * 递归函数我们也可以用迭代的方式实现，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其他都相同，具体实现可以看下面的代码。
 */
const inorderTraversal = function(root) {
  const res = []
  const stk = []

  while(root || stk.length) {
    while(root) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    res.push(root.val)
    root = root.right
  }

  return res
}