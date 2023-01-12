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
