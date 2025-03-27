// ["eat","tea","tan","ate","nat","bat"]

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, Array<string>>();

  for (const str of strs) {
    // 得到一个排序好的字符串
    const s = [...str].sort().join('');

    // 如果哈希表中存在这个模板，那就就将原始字符串 push 进去
    if (map.has(s)) {
      map.get(s)?.push(str);
    }
    // 如果不存在，就让这个模板作为键， 数组作为值存入哈希表。
    else {
      map.set(s, [str]);
    }
  }

  return Array.from(map.values());
}
