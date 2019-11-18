// Invert Binary Tree

// Write a function that takes in a Binary Tree and inverts it.In other words, the function should swap every left node in the tree for its corresponding(mirrored) right node.

// Each Binary Tree node has a vaule stored in a property called value and two children nodes stored in properties called left and right, respectively.

// Children nodes can either be Binary Tree nodes themselves or the none value.

// O(n) time | O(n) space
function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    swapLeftAndRight(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

// O(n) time | O(d) space
function invertBinaryTree(tree) {
  if (tree === null) return;
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}
