// Two Number Sum

// Write a function that takes in a non - empty array of distinct integerse and an integer representing a target sum.

// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order.

// If no two numbers sum up to the target sum, the function should return an empty array.

// Assume that there will be at most one pair of numbers summing up to the target sum.

// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum].sort((a, b) => a - b);
      }
    }
  }
  return [];
}

// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num].sort((a, b) => a - b);
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
