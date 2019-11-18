// Validate Binary Search Tree

// You are given a binary tree data structure consisting of nodes with integet values stored as value and two children nodes stored in properties called left and right.

// Children can either be binary tree nodes themselves or the null value.

// Write a function that returns a boolean representing whether or not the Binary Tree is a valid BST.

// A node is said to be a BST node if and only if it satisfies the BST property.

// Its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None values.

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  const rightIsValid = validateBstHelper(tree.right, tree.value, maxValue);
  return leftIsValid && rightIsValid;
}
