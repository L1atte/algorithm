/*
 * @Author: Latte
 * @Date: 2022-01-11 08:35:18
 * @LAstEditors: Latte
 * @LastEditTime: 2022-01-11 09:43:57
 * @FilePath: \algorithm\19. 删除链表的倒数第 N 个结点.js
 */

/**
 * 两次遍历
 * 1.第一次遍历链表获取链表长度，从而确定被删除节点的位置
 * 2.第二次遍历链表，达到被删节点的位置，利用浅拷贝的性质把节点删去
 * 3.注意，如果删除的是头节点，那么会导致删除节点并没有改变链表的内容，需要做特殊判断，直接删去头节点
 */
var removeNthFromEnd = function (head, n) {
	let dummy = head;
	let length = 0;

	// 获取链表长度
	while (dummy) {
		dummy = dummy.next;
		length++;
	}

	// 如果删除的是头节点，需要特殊处理，直接把头节点从链表摘出去
	if (length === n) {
		head = head.next;
	}

	const target = length - n;
	dummy = head;

	for (let i = 0; i <= target - 1; i++) {
		if (i === target - 1) {
			// 删除节点
			dummy.next = dummy.next.next;
		}
		dummy = dummy.next;
	}

	return head;
};
