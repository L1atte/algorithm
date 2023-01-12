function longestCommonPrefix(strs: string[]): string {
  let result: string = ""

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      const target: string = strs[0][i]
      if (strs[j][i] === target && j === strs.length - 1) result += target
      else if (strs[j][i] !== target) return result
    }
  }
  return result
}
