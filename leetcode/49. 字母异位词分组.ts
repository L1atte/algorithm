// ["eat","tea","tan","ate","nat","bat"]

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, Array<string>>();

  for (const str of strs) {
    const s = [...str].sort().join('');

    if (map.has(s)) {
      map.get(s)?.push(str);
    } else {
      map.set(s, [str]);
    }
  }

  return Array.from(map.values());
}
