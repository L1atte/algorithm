/*
 * @Author: Latte
 * @Date: 2021-09-29 08:48:21
 * @LAstEditors: Latte
 * @LastEditTime: 2022-10
 * @FilePath: \algorithm\25. K 个一组翻转链表.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const myReverse = (head, tail) => {
	let prev = null,
		cur = head

	while(prev !== tail) {
		const next = cur.next
		cur.next = prev
		cur = next
		prev = cur
	}

	return [tail, head]
}
var reverseKGroup = function (head, k) {
	const hair = new ListNode(0);
	hair.next = head;
	let pre = hair;

	while (head) {
		let tail = pre;
		// 查看剩余部分长度是否大于等于 k
		for (let i = 0; i < k; ++i) {
			tail = tail.next;
			if (!tail) {
				return hair.next;
			}
		}
		const nex = tail.next;
		[head, tail] = myReverse(head, tail);
		// 把子链表重新接回原链表, pre.next = head利用浅拷贝改变hair.next的指向
		pre.next = head;
		tail.next = nex;
		pre = tail;
		head = tail.next;
	}
	return hair.next;
};
