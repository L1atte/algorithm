// 2 100 1 5 2 3

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  }

  return profit;
}
