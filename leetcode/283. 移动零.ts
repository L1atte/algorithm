function moveZeroes(nums: number[]): void {
  const zeroArr: number[] = []

  nums.forEach((item, index) => {
    while (nums[index] === 0) {
      const temp = nums.splice(index, 1)
      zeroArr.push(...temp)
    }
  })

  nums.push(...zeroArr)
}