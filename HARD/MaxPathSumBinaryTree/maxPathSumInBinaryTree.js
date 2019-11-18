// Max Path Sum in Binary Tree

// Write a function that takes in a Binary Tree and returns its max path sum.  A path is a collection of connected nodes where no node is connected to more than two other nodes; a path sum is the sum of the values of the nodes in a particular path.  Each binary tree node has a value stored in a property called "value" and two children nodes stored in properties called 'left' and 'right' respectively.  Children nodes can either be Binary Tree nodes themselves of the None(null) value.

// O(n) time | O(log(n)) space
function maxPathSum(tree) {
  const [_, maxSum] = [...findMaxSum(tree)];
  return maxSum;
}

function findMaxSum(tree) {
  if (tree === null) return [0, 0];

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

  const { value } = tree;
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  const maxSumAsRootNode = Math.max(
    leftMaxSumAsBranch + value + rightMaxSumAsBranch,
    maxSumAsBranch
  );
  const maxPathSum = Math.max(
    leftMaxPathSum,
    rightMaxPathSum,
    maxSumAsRootNode
  );

  return [maxSumAsBranch, maxPathSum];
}
