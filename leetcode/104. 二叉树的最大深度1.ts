function maxDepth(root: TreeNode | null): number {
  const stack: [TreeNode, number][] = [];
  let max = 0;
  if (!root) return 0;
  stack.push([root, 1]);

  while (stack.length) {
    const [node, depth] = stack.pop()!;
    max = Math.max(max, depth);
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }

  return max;
}
