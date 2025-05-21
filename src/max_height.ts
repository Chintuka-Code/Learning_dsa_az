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
  return 1 + Math.max(leftHeight, rightHeight);
}
