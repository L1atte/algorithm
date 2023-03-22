// stack
// 左括号： ... 
// 右括号： ...

function isValid(s: string): boolean {
  const leftFlag: Array<string> = ['(', '{', '[']
  const stack: Array<string> = []
  const map: Map<string, string> = new Map()
  map.set(']', '[')
  map.set(')', '(')
  map.set('}', '{')

  for (const char of s) {
    if (leftFlag.includes(char)) {
      stack.push(char)
    } else {
      const lastElement = stack.pop()
      if (lastElement !== map.get(char)) return false
    }
  }

  return stack.length === 0 ? true : false
};