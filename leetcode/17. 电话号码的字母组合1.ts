// 257
// abc jkl pqrs
// a b c

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const res: string[] = [];

  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  function backtrack(curStr: string, index: number) {
    if (index === digits.length) {
      res.push(curStr);
      return;
    }

    const letters = map[digits[index]];

    for (const ch of letters) {
      backtrack(curStr + ch, index + 1);
    }
  }

  backtrack('', 0);
  return res;
}
