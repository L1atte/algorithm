/**
 * 遍历链表，通过Map储存链表。
 * 如果存在环形结构，则Map.has(curNode)返回true
 * 如果不存在，遍历结束后返回null
 * @param {*} head 
 * @returns 
 */
var detectCycle = function (head) {
	if (head === null) return null;

	const map = new Map();
	let cur = head;
	let index = 0;

	while (cur !== null) {
    if(map.has(cur)) {
      return cur
    }

		map.set(cur, index);
    cur = cur.next
    index++
	}
  return null
};
