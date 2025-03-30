// [1,12,-5,-6,50,3]

function findMaxAverage(nums: number[], k: number): number {
  let res: number = -Infinity;
  let current: number = 0;

  for (let i = 0; i < nums.length; i++) {
    // 进入窗口
    current = current + nums[i];

    if (i < k - 1) {
      continue;
    }

    // 更新
    res = Math.max(res, current / k);

    // 离开窗口
    let out = nums[i - k + 1];
    current = current - out;
  }

  return res;
}
