function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let end = start;
  let max = 0;

  for (; end < s.length; end++) {
    const str = s.slice(start, end);
    if (str.includes(s[end])) {
      const index = str.indexOf(s[end]);
      start = start + index + 1;
    }
    max = Math.max(max, end - start + 1);
  }

  return max;
}
