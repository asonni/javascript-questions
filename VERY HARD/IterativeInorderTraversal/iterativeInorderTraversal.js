// Iterative In-order Traversal
//
// Write a function that takes in a Binary Tree and traverses it using the in -order traversal technique without recursion.

// As the tree is being traversed, a callback function passed in as an argument to the main function should be called on each node.

// Each binary tree node has a value stored in a property called value, a parent node in a property called parent and two children nodes stored in properties called left and right, respectively.

// Children nodes can either be binary tree nodes themselves or none(null) values

// O(n) time | O(1) space
function iterativeInOrderTraversal(tree, callback) {
  let previousNode = null;
  let currentNode = tree;
  while (currentNode !== null) {
    let nextNode;
    if (previousNode === null || previousNode === currentNode.parent) {
      if (currentNode.left !== null) {
        nextNode = currentNode.left;
      } else {
        callback(currentNode);
        nextNode =
          currentNode.right !== null ? currentNode.right : currentNode.parent;
      }
    } else if (previousNode === currentNode.left) {
      callback(currentNode);
      nextNode =
        currentNode.right !== null ? currentNode.right : currentNode.parent;
    } else {
      nextNode = currentNode.parent;
    }
    previousNode = currentNode;
    currentNode = nextNode;
  }
}
