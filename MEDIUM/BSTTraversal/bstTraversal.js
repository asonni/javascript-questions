// Binary Search Tree Traversal

// You are given a binary tree data structure consisting of nodes with integet values stored as value and two children nodes stored in properties called left and right.Children can either be binary tree nodes themselves or the null value.

// A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children are either BST nodes themselves or null values.

// Write three functions that take in an empty array, traverse the BST, add its nodes values to the input array and return that array.

// The three functions should traverse the BST using the in -order traversal, pre - order traversal and post - order traversal techniques, respectively.

// O(n) time | O(n) space
function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

// O(n) time | O(n) space
function preOrderTraverse(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

// O(n) time | O(n) space
function postOrderTraverse(tree, array) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
