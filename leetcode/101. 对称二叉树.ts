function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;

  return iteration(root.left, root.right);
}

function iteration(lp: TreeNode | null, rp: TreeNode | null): boolean {
  if (!lp || !rp) {
    return !rp && !lp ? true : false;
  } else if (lp.val !== rp.val) return false;
  return iteration(lp.left, rp.right) && iteration(lp.right, rp.left);
}
