// Search For Range

// Write a function that takes in a sorted array of integers as well as a target integer.  The function should use a variation of the Binary Search algorithm to find a range of indices in between which the target number is contained in the array and should return this range in the form of an array.  The first number in the output array should represent the first index at which the target number is located while the second number should represent the last index at which the target number is located.  The function should return [-1,-1] if the number is not contained in the array.

// O(log(n)) time | O(log(n)) space
function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
  if (left > right) return;
  const mid = Math.floor((left + right) / 2);
  if (array[mid] < target) {
    alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft);
  } else if (array[mid] > target) {
    alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft);
  } else {
    if (goLeft) {
      if (mid === 0 || array[mid - 1] !== target) {
        finalRange[0] = mid;
      } else {
        alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft);
      }
    } else {
      if (mid === array.length - 1 || array[mid + 1] !== target) {
        finalRange[1] = mid;
      } else {
        alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft);
      }
    }
  }
}

// O(log(n)) time | O(1) space
function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
}
