export class Node {
  left: Node;
  right: Node;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export function preOrder(node: Node) {
  if (node == null) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

export function inOrder(node: Node) {
  if (node == null) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

export function postOrder(node: Node) {
  if (node == null) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}
