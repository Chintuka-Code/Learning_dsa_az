export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

function levelOrder(rootNode: Node | null): number[] {
  if (rootNode == null) return [];

  const queue: Node[] = [rootNode];
  const result: number[] = [];

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    result.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return result;
}

// Step 1: Get the height of the tree
export function getHeight(root: Node | null): number {
  if (!root) return 0;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

// Step 2: Collect nodes at a given level
function collectLevelNodes(root: Node, level: number, result: number[]) {
  if (!root) return;
  if (level === 1) {
    result.push(root.value);
  } else {
    collectLevelNodes(root.left as Node, level - 1, result);
    collectLevelNodes(root.right as Node, level - 1, result);
  }
}

// Main function
function levelOrderRecursive(root: Node | null): number[] {
  const height = getHeight(root);
  const result = [] as number[];
  for (let i = 1; i <= height; i++) {
    collectLevelNodes(root as Node, i, result);
  }
  return result;
}
