// Largest Range

// Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of numbers contained in that array.  The first number in the output array should be the first number in the range while the second number should be the last number in the range.

// A range of numbers is defined as a set of numbers that come right after each other in the set of real integers.  For instanceof, the output aray [2,6] represents the range [2,3,4,5,6] which is a range of length 5.  Note that numbers do not need to be ordered or adjacent in the array in order to form a range.  Assume that there will only be one largest range.

// Iterate through the input array once, storing every unique number in a hash table and mapping every number to a falsy value.  This hash table will not only provide fast access of the numbers in the input array, but it will also allow you to keep track of 'visited' and 'unvisited' numbers, so as not to unnecessarily repeat work.  Iterate through the array once more, this time stopping at every number to check if the number is marked as 'visited' in the hash table.  If it is, skip it; if it isn't, start expanding outwards from that number with a left number and a right number, continuously checking if those left and right numbers are in the hash table (and thus in the input array) and marking them as "visited" in the hash table if they are.  This should allow you to quickly find the largest range in which the current number is contained, all the while setting you up not to perform unnecessary work later.

// O(n) time | O(n) space
function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};
  for (const num of array) {
    nums[num] = true;
  }
  for (const num of array) {
    if (!nums[num]) continue;
    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}
