/*
 * @Author: Latte
 * @Date: 2022-02-09 09:06:08
 * @LAstEditors: Latte
 * @LastEditTime: 2022-02-09 10:53:45
 * @FilePath: \algorithm\31. 下一个排列.js
 */

/**
 * 思路：
 * 1.从数字的低位到高位，即对数字从右向左遍历，寻找一个数，它大于它的右邻数，标记为 flag
 * 2.重新对数字从右向左遍历，找出第一个大于 flag 的数字，标记为 target，将 flag 和 target 交换
 * 3.令交换后 target 后的数尽量小。
 * 比如，对于 [1,5,2,4,3,2]，我们通过上面的步骤交换 2 和 3 之后，得到数字 1 5 3 4 2 2，则我们需要将 3 以后的数字 422 尽可能小，让它成为 224
 */
var nextPermutation = function(nums) {
  let len = nums.length - 1
  // 向左移动，寻找第一个小与右邻居的数的索引
  while(i>=0 && nums[i] < nums[i-1]) {
    i--
  }
  // 如果 i > 0，表明存在一个数大于它的右邻居
  if(i>0) {
    
  }
};