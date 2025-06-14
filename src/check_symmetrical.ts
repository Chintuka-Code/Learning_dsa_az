export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

/**
 * 
    * Two trees are symmetrical if they are mirror images of each other.
    *


 * @param rRoot 
 * @returns 
 */
function checkSymmetrical(lRoot: Node | null, rRoot: Node | null) {
  if (!lRoot && !rRoot) return true;
  if (!lRoot || !rRoot) return false;

  if (lRoot.value !== rRoot.value) {
    return false;
  }
  checkSymmetrical(lRoot.left, rRoot.right);
  checkSymmetrical(lRoot.right, rRoot.left);

  return true;
}
