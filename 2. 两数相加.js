/*
 * @Author: Latte
 * @Date: 2022-01-17 09:01:04
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-17 09:57:59
 * @FilePath: \algorithm\2. 两数相加.js
 */
var addTwoNumbers = function (l1, l2) {
	let p1 = l1;
	let p2 = l2;
	// 虚拟节点
	let dummy = new ListNode(-1),
		cur = dummy;
	// 进位
	let carry = 0;

	while (p1 != null || p2 != null || carry > 0) {
		// 先加上上次的进位
		let val = carry;
		if (p1 != null) {
			val += p1.val;
			p1 = p1.next;
		}
		if (p2 != null) {
			val += p2.val;
			p2 = p2.next;
		}
		// 处理进位情况
		carry = Math.floor(val / 10);
		val = val % 10;
		// 构建新节点
		cur.next = new ListNode(val);
		cur = cur.next;
	}
	// 返回结果链表的头结点（去除虚拟头结点）
	return dummy.next;
};
