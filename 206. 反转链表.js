/*
 * @Author: Latte
 * @Date: 2021-09-26 08:34:08
 * @LAstEditors: Latte
 * @LastEditTime: 2021-09-26 12:09:26
 * @FilePath: \algorithm\206. 反转链表.js
 */

let arr = [1, 2, 3, 4, 5];

const reverseList = function (head) {
	if (head === null) return head;
	let [prev, curr] = [null, head];
	while (curr) {
		[curr.next, prev, curr] = [prev, curr, curr.next];
	}
	return prev;
};

let result = reverseList(arr);
console.log(result);
