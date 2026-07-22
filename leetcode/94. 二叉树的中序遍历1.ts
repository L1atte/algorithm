// [left, root, right]
// 1 23, 4 5 6  ,
function inorderTraversal(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const result: number[] = [];
  let cur = root;

  if (cur === null) return [];

  while (cur && stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop() ?? null;
    if (!cur) break;
    result.push(cur.val);
    cur = cur.right;
  }
  return result;
}
