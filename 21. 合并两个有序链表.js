/*
 * @Author: Latte
 * @Date: 2021-10-15 08:31:32
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-15 09:08:16
 * @FilePath: \algorithm\21. 合并两个有序链表.js
 */
// 迭代
let mergeTwoLists = function (l1, l2) {
	let newHead = new ListNode();

  let prev = newHead
	if (!l1) return l2;
	if (!l2) return l1;

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			prev.next = l1;
			l1 = l1.next;
		} else {
			prev.next = l2;
			l2 = l2.next;
		}
    prev = prev.next
	}

	prev.next = l1 === null ? l2 : l1;
	return newHead.next;
};
