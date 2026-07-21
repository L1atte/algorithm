function isValid(s: string): boolean {
  const map: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack: string[] = [];
  for (const ch of s) {
    if (map[ch]) {
      // push the expected closer
      stack.push(map[ch]);
    } else {
      // current char should match the last expected closer
      if (stack.pop() !== ch) return false;
    }
  }

  return stack.length === 0;
}
