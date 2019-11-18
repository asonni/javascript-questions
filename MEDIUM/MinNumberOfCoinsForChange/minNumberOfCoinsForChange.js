// Min Number of Coins for Change

// Try building an array of the nminimum number of coins needed to make change for all amounts between 0 and n inclusive.

// Note that no coins are needed to make change for 0; in order to make change for 0, you do not need to use any coins.Build up the array one coin denomination at a time.

// Find the minimum number of coins needed to make change for all values between 0 and n with only oe denomination, the with two etc until you use all denominations.

// O(nd) time | O(n) space

function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
