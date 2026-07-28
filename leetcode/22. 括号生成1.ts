// open === close && open === n ，res.push(path)
// open > close path + ')' close + 1
// open < n path + '(' open + 1

function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  function backtrack(path: string, open: number, close: number) {
    if (open === close && open === n) {
      res.push(path);
      return;
    }

    if (open < n) {
      backtrack(path + '(', open + 1, close);
    }

    if (open > close) {
      backtrack(path + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);
  return res;
}
