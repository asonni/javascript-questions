// Subarray Sort

// Write a function that takes in an array of integers of length at least 2.  The function should return an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted.  If the input array is already sorted the function should return [-1,-1].

// Realize that even a single out-of-order number in the input array can call for a large subarray to have to be sorted.  This is because, depending on how out-of-place the number is, it might need to be moved very far away from its original position in order to be in its sorted position.  Find the smallest and largest numbers that are out of order in the input array.  You should be able to do this in a single pass through the array.  Once you've found the smallest and largest out-of-order numbers, find their final sorted positions in the array.  This should give you the extremities of the smallest subaray that needs to be sorted.

// O(n) time | O(1) space
function subarraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }
  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
    subarrayLeftIdx++;
  }
  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarayRightIdx]) {
    subarrayRightIdx--;
  }
  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}
