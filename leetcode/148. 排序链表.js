var sortList = function (head) {
	// 存储链表
	const arr = [];

	let cur = head;

	while (cur) {
		arr.push(cur.val);
		cur = cur.next;
	}

  if(arr.length === 0) return new ListNode().next

	arr.sort((a, b) => a - b);
	let newList = new ListNode();
	let dummy = new ListNode(0, newList);

	arr.forEach((item, index) => {
		newList.val = item;
		if (index + 1 <= arr.length - 1) {
			newList.next = new ListNode(0);
			newList = newList.next;
		}
	});

	return dummy.next;
};