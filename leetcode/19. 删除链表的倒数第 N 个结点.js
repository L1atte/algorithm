/**
 * 两次遍历
 * 1.第一次遍历链表获取链表长度，从而确定被删除节点的位置
 * 2.第二次遍历链表，达到被删节点的位置，利用浅拷贝的性质把节点删去
 * 3.利用哨兵节点，优化代码，可以不用考虑被删除节点为头节点的情况
 */
var removeNthFromEnd = function (head, n) {
	let temp = head;
	let length = 0;
	while (temp) {
		temp = temp.next;
		length++;
	}

	const target = length - n;
	let dummy = new ListNode(0, head),
		cur = dummy;

	for (let i = 0; i <= target; i++) {
		if (i === target) {
			cur.next = cur.next.next;
		}
		cur = cur.next;
	}

	return dummy.next;
};

/**
 * 快慢指针
 *
 */
var removeNthFromEnd = function (head, n) {
	let ret = new ListNode(0, head),
		slow = (fast = ret);

	// fast 指针走 n 步
	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}

	if (!fast) return ret.next;

	while (fast.next) {
		// 让 fast 指针走到链表终点（ fast.next 为null），此时 slow 指针来到被删除节点的前节点
		fast = fast.next;
		slow = slow.next;
	}

	slow.next = slow.next.next;
	return ret.next;
};
