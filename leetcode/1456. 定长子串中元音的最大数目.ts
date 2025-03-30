// "abciiidef"
// 3

function maxVowels(s: string, k: number): number {
  const vowel: string = 'aeiou';
  let res: number = 0;
  let count: number = 0;

  for (let i = 0; i < s.length; i++) {
    // 进入窗口
    if (vowel.includes(s[i])) {
      count++;
    }

    if (i < k - 1) continue;

    // 更新答案
    res = Math.max(res, count);
    // 离开窗口
    let out = s[i - k + 1];
    if (vowel.includes(out)) {
      count--;
    }
  }

  return res;
}
