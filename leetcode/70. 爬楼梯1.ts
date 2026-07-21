// dp = d(p-1) + d(p-2)
// d0 = 0, d1 = 1 d2 =2

function climbStairs(n: number): number {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return n;

  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
