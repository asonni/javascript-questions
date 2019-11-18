// Max Sum Increasing Subsequence

// Given an non-empty array of integers, write a function that returns an array of length 2.  The first element in the output array should be an intger value representing the greatest sum that can be generated from a strictly-increasing subsequence in the array.  The second element should be an array of the numbers in that subsequence.  A subsequence is defined as a set of numbers that are not necessarily adjacent but that are in the same order as they appear in the array.  Assume that there will only be one increasing subsequence with the greatest sum.

// O(n^2) time | O(n) space
function maxSumIncreasingSubsequence(array) {
  const sequences = new Array(array.length);
  const sums = array.map(num => num);
  let maxSumIdx = 0;
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    for (let j = 0; j < i; j++) {
      const otherNum = array[j];
      if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
        sums[i] = sums[j] + currentNum;
        sequences[i] = j;
      }
    }
    if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
  }
  return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
}
