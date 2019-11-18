// Shifted Binary Search

// Write a function that takes in a sorted array of integers as well as a target integer.  The caveat is that the numbers in the array have been shifted by some amount; in other words, they have been moved to the left or the right by one or more positions.  For example, [1,2,3,4] might become [3,4,1,2].  The function should use a variation of the Binary Search algorithm to find if the target number is contained in the array and should return its index if it is, otherwise -1.

// O(log(n)) time | O(log(n)) space
function shiftedBinarySearch(array, target) {
  return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
}

function shiftedBinarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];
  const leftNum = array[left];
  const rightNum = array[right];
  if (target === potentialMatch) {
    return middle;
  } else if (leftNum <= potentialMatch) {
    if (target < potentialMatch && target >= leftNum) {
      return shiftedBinarySearchHelper(array, target, left, middle - 1);
    } else {
      return shiftedBinarySearchHelper(array, target, middle + 1, right);
    }
  } else {
    if (target > potentialMatch && target <= rightNum) {
      return shiftedBinarySearchHelper(array, target, middle + 1, right);
    } else {
      return shiftedBinarySearchHelper(array, target, left, middle - 1);
    }
  }
}
