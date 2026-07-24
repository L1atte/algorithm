function findDisappearedNumbers(nums: number[]): number[] {
  const map = new Map();
  const res: number[] = [];

  for (const num of nums) {
    map.set(num, true);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) res.push(i);
  }

  return res;
}