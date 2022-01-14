/*
 * @Author: Latte
 * @Date: 2022-01-13 08:56:28
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-13 10:01:35
 * @FilePath: \algorithm\82. 删除排序链表中的重复元素 II.js
 */
var deleteDuplicates = function (head) {
	let dummy = new ListNode(0, head),
		cur = dummy.next,
		prev = dummy;

	while (cur) {
		if (cur.next && cur.next.val === cur.val) {
			tmp = cur.val;
			while (cur && tmp === cur.val) cur = cur.next;
		} else {
			prev.next = cur;
			prev = cur;
			cur = cur.next;
		}
		prev.next = cur;
	}

	return dummy.next;
};
