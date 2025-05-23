export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

// To calculate the max sum path, we can use a similar approach.
// We can keep track of the maximum sum found so far and return the maximum sum path for each node.
// The max sum path is the maximum sum of the values of the nodes in the path from the root to any leaf node.
// The max sum path can be found by calculating the maximum sum path for the left and right subtrees for each node and keeping track of the maximum sum found so far.
export function maxSumPath(node: Node | null, maxSum: number) {
  if (!node) {
    return 0;
  }

  const leftHeight = maxSumPath(node.left, maxSum) as number;
  const rightHeight = maxSumPath(node.right, maxSum) as number;

  const sumPath = leftHeight + rightHeight + node.value;
  maxSum = Math.max(maxSum, sumPath);

  return node.value + Math.max(leftHeight, rightHeight);
}
