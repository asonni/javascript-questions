// Number of Ways to Make Change

// Given an array of positive integers representing coin denominations and a single non negative integer representing a target amount of money, implement a function that returns the number of ways to make change for that target amount using the given coin denominations.

// An unlimited amount of coins is at your disposal

// O(nd) time | O(n) space
function numberOfWaysToMakeChange(n, denominations) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let denomination of denominations) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denomination];
      }
    }
  }
  return ways[n];
}
