// Four Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.  The funcion should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular OverconstrainedError.  If no four numbers sum up to the target sum, the function should return an empty array.

// Using four loops to calculate the sums of all possible quadruplets in the array would generate an algorithm that runs in Option(n^4) time, where n is the length of the input array.

// You can calculate the sums of every pair of numers in the array in O(n^2) time using just two for loops.  Then, assuming that you've stored all of these sums in a hash table, you can fairly easily find which two sums can be paired to add up to the target sum: the number summing up to these two sums constitute candidates for valid quadruplets; you just have to make sure that no number was used to generate both of the two sums.

// Average: O(n^2) time | O(n^2) space
// Worst: O(n^3) time | O(n^2) space
function fourNumberSum(array, targetSum) {
  const allPairSums = {};
  const quadruplets = [];
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;
      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];
      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]];
      } else {
        allPairSums[currentSum.push([array[k], array[i]])];
      }
    }
  }
  return quadruplets;
}
