// 某节点的最大直径 = max（左子树深度 + 右子树深度， 左子树直径， 右子树直径）
// 最大直径 = max（节点直径， 左右子树直径）

function diameterOfBinaryTree(root: TreeNode | null): number {
  const res = getTreeInfo(root);

  return res.diameter;
}

function getTreeInfo(root: TreeNode | null): { depth: number; diameter: number } {
  if (!root) {
    return {
      depth: 0,
      diameter: 0,
    };
  }

  const left = getTreeInfo(root.left);
  const right = getTreeInfo(root.right);

  const maxDiameter = Math.max(left.depth + right.depth, left.diameter, right.diameter);
  const maxDepth = Math.max(left.depth, right.depth) + 1;

  return {
    diameter: maxDiameter,
    depth: maxDepth,
  };
}
