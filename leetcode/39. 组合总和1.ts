// [2,3,6,7]
//

function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  const res = [];
  const path = [];

  function backtrack(remain: number, index: number) {
    if (remain === 0) {
      res.push([...path]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > remain) break;

      path.push(candidates[i]);
      // 允许重复使用 i，所以下一层仍从 i 开始
      backtrack(remain - candidates[i], i);
      path.pop();
    }
  }

  backtrack(target, 0);

  return res;
}
