export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export function preOrder(node: Node | null) {
  if (node == null) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

export function inOrder(node: Node | null) {
  if (node == null) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

export function postOrder(node: Node | null) {
  if (node == null) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}
