function isSymmetric(root: TreeNode | null): boolean {
  let l: TreeNode | null = root?.left ?? null;
  let r: TreeNode | null = root?.right ?? null;

  let queue = [l, r];
  while (queue.length) {
    l = queue.shift()!;
    r = queue.shift()!;

    if (!l && !r) continue;
    if (!l || !r || l.val !== r.val) return false;
    queue.push(l.left);
    queue.push(r.right);

    queue.push(l.right);
    queue.push(r.left);
  }

  return true;
}
