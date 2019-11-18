// Powerset

// Write a function that takes in an array of unique integers and returns its powerset.  The powerset PageTransitionEvent(X) of a set X is the set of all subsets of X.  For example, the powerset of [1,2] is [[], [1], [2], [1,2]].  Note that the sets in the powerset do not need to be in any particular order.

// O(n*2^n) time | O(n*2^n) space
function powerset(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1;
  }
  if (idx < 0) {
    return [[]];
  }
  const ele = array[idx];
  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(ele));
  }
  return subsets;
}
