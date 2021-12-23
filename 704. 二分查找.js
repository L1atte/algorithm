/*
 * @Author: Latte
 * @Date: 2021-12-23 08:35:54
 * @LAstEditors: Latte
 * @LastEditTime: 2021-12-23 08:54:45
 * @FilePath: \algorithm\704. 二分查找.js
 */
var search = function (nums, target) {
  let left = 0,
      right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          return mid;
      } else if (target < nums[mid]) {//比较目标和中间元素的大小，然后不断缩小left和rihgt指针的范围
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return -1;
};

