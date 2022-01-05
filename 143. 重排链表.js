/*
 * @Author: Latte
 * @Date: 2022-01-04 08:50:56
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-04 10:07:34
 * @FilePath: \algorithm\143. 重排链表.js
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/**
 * 1.将链表线性存入数组
 * 2.取头节点
 * 3.遍历数组，偶数栈顶弹出，奇数队列出队
 */
var reorderList = function (head) {
	const arr = [];

	while (head) {
		const temp = head.next;
		head.next = null;
		arr.push(head);
		head = temp;
	}

	let cur = arr.shift(),
		count = 0;

	while (arr.length) {
		cur.next = count % 2 === 0 ? arr.pop() : arr.shift();
		count++;
		cur = cur.next;
	}
};
