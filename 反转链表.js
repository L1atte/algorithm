/*
 * @Author: Latte
 * @Date: 2021-09-24 22:43:48
 * @LAstEditors: Latte
 * @LastEditTime: 2021-09-24 22:43:48
 * @FilePath: \undefinedc:\Users\Latte\Desktop\笔记\反转链表.js
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
