export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export function maxHeight(node: Node | null) {
  if (!node) {
    return 0;
  }

  const leftHeight = maxHeight(node.left) as number;
  const rightHeight = maxHeight(node.right) as number;

  // For dimaeter, we can also calculate the diameter at this node
  // const diameter = leftHeight + rightHeight + 1;

  return 1 + Math.max(leftHeight, rightHeight);
}

// THis approach is also used to find the diameter of a binary tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in the tree.
// The diameter can be found by calculating the height of the left and right subtrees for each node and keeping track of the maximum diameter found so far.
