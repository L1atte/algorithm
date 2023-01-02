// 1 1 2 3 3
function deleteDuplicates(head: ListNode | null): ListNode | null {
	let dummy: ListNode = new ListNode(0)
	dummy.next = head
	let cur = head
	let pre = dummy

	while (cur) {
		while (cur.next && cur.val === cur.next.val) {
			if (cur.next.next) cur.next = cur.next.next
			else cur.next = null
		}
		cur = cur.next
	}
	return dummy.next
}
