export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

// Two tree considered identical if they have the same traversal order.
export function identicalTree(nodeL: Node | null, nodeR: Node | null): boolean {
  if (!nodeL || !nodeR) return nodeL === nodeR;

  return (
    nodeL.value === nodeR.value &&
    identicalTree(nodeL.left, nodeR.left) &&
    identicalTree(nodeL.right, nodeR.right)
  );
}
