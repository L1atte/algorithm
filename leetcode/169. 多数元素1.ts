function majorityElement(nums: number[]): number {
  const map: Map<number, number> = new Map();

  for (const num of nums) {
    const val = map.get(num) ?? 0;
    map.set(num, val + 1);
  }

  for (const [key, value] of map) {
    if (value > nums.length / 2) return key;
  }

  return 0;
}
