function maxArea(height: number[]): number {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start !== end) {
    const area = (end - start) * Math.min(height[end], height[start]);
    max = Math.max(max, area);
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  return max;
}
