function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	// 初始化哑结点 dmy
	let dmy = new ListNode(0);
	let curr = dmy;
	// 进位
	let carry = 0;

	while (carry || l1 || l2) {
		let val1 = l1?.val ?? 0;
		let val2 = l2?.val ?? 0;

		let sum = val1 + val2 + carry;
		sum >= 10 ? (carry = 1) : (carry = 0);

		curr.next = new ListNode(sum % 10);
		curr = curr.next;

		if (l1 !== null) l1 = l1.next;
		if (l2 !== null) l2 = l2.next;
	}

	return dmy.next;
}
