// p1, p2
// min(p1, p2) => i++
// min(p1, p2) ...

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let dummy: ListNode = new ListNode();
	let cur = dummy;

	if (!l1) return l2;
	if (!l2) return l1;

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			cur.next = l1;
			l1 = l1.next;
		} else {
			cur.next = l2;
			l2 = l2.next;
		}
		cur = cur.next;
	}

	cur.next = l1 === null ? l2 : l1;
	return dummy.next;
}
