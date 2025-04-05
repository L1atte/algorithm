function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let count = 0,
    res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];

    if (i < k - 1) continue;

    if (res / k >= threshold) count++;
    res = res - arr[i - k + 1];
  }

  return count;
}
