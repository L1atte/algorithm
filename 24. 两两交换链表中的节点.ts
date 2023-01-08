// virtual > 1 > 2 > 3 > 4 > 5

// 1 > 2  >> 2 > 1

// virtual   2 > 1   3 > 4 > 5

// virtual > 2 > 1
// virtual > 2 > 1 > 3 > 4 > 5

// virtual > 2 > 1 > 3 > 4 > 5
// virtual > 2 > 1 > 4 > 3 > 5
// end

function swapPairs(head: ListNode | null): ListNode | null {
	const dummy: ListNode = new ListNode(0, head)
	let pre = dummy

	while (head) {
		let tail: ListNode | null = pre

		for (let i = 0; i < 2; i++) {
			tail = tail?.next ?? null
			if (!tail) return dummy.next
		}

		const nex = tail.next
		;[head, tail] = reverse(head, tail)

		pre.next = head
		tail.next = nex
		pre = tail
		head = tail.next
	}

	return dummy.next
}

function reverse(head: ListNode, tail: ListNode): [ListNode, ListNode] {
	let pre: ListNode | null = null
	let cur: ListNode = head

	while (pre !== tail) {
		const nex = cur.next!
		cur.next = pre
		pre = cur
		cur = nex
	}

	return [tail, head]
}
