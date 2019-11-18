// Min Number of Jumps

// You are given a non-empty array of integers.  Each element represents the maximum number of steps you can take forward.  For example, if the element at index 1 is 3, you can go from index 1 to index 2,3, or 4.  Write a function that returns the minimum number of jumps needed to reach the final index.  Note that jumping from index i to index i + x always constitutes 1 jump, no matter how large x is.

// O(n^2) time | O(n) space
function minNumberOfJumps(array) {
  const jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
      }
    }
  }
  return jumps[jumps.length - 1];
}

// O(n) time | O(1) space
function minNumberOfJumps(array) {
  if (array.length === 1) return 0;
  let jumps = 0;
  let maxReach = array[0];
  let steps = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, i + array[i]);
    steps--;
    if (steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }
  return jumps + 1;
}
