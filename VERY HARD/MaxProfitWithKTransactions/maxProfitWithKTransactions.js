// Max Profit with K Transactions
//
// You are given an array of integers representing the prices of a single stock on various days.

// You are also given an integer k which represents the number of transactions you are allowed to make.One transaction consists of buying the stock on a given day and selling it on another, later day.

// Write a function that returns the maximum profit you can make buying and selling the stock, given k transactions

// You can only hold 1 share of the stock at a time; in other words you cannot buy more than 1 share of the stock on any given day, and you cannot buy a share of the stock if you are still holding another share

// O(nk) time | O(nk) space
function maxProfitWithKTransactions(prices, k) {
  if (!prices.length) return 0;
  const profits = [];
  for (let t = 0; t < k + 1; t++) {
    const row = new Array(prices.length).fill(0);
    profits.push(row);
  }
  for (let t = 1; t < k + 1; t++) {
    let maxThusFar = -Infinity;
    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]);
      profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d]);
    }
  }
  return profits[k][prices.length - 1];
}

// O(nk) time | O(n) space
function maxProfitWithKTransactions(prices, k) {
  if (!prices.length) return 0;
  const evenProfits = new Array(prices.length).fill(0);
  const oddProfits = new Array(prices.length).fill(0);
  for (let t = 1; t < k + 1; t++) {
    let maxThusFar = -Infinity;
    let currentProfits, previousProfits;
    if (t % 2 === 1) {
      currentProfits = oddProfits;
      previousProfits = evenProfits;
    } else {
      currentProfits = evenProfits;
      previousProfits = oddProfits;
    }
    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, previousProfits[d - 1] - prices[d - 1]);
      currentProfits[d] = Math.max(
        currentProfits[d - 1],
        maxThusFar + prices[d]
      );
    }
  }
  return k % 2 === 0
    ? evenProfits[prices.length - 1]
    : oddProfits[prices.length - 1];
}
