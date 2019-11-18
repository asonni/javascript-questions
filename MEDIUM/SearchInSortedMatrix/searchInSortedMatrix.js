// Search in Sorted Matrix

// You are given a two-dimensional array (matrix) of distinct integers where each row is sorted and each column is also sorted.  The matrix does not necessarily have the same height and width.  You are also given a target number, and you must write a function that returns an array of the row and column indices of the target number if it is contained in the matrix and [-,1-1] if it is not contained in the matrix.

// Pick any number in the matrix and compare it to the target number.  If the number is bigger than the target number, what does this tell you about all the other numbers row and this columns number.  Try starting at the top right corner of the matrix, comparing the number there to the target number, and using whatever you gathered to figure out what number to compare next if the top right number isn't equal to the target number.

// O(n + m) time | O(1) space
function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
}
