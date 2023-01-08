let reserveList = function (head, tail) {
	let prev = null
	let cur = head
	while (prev !== tail) {
		const nex = cur.next
		cur.next = prev
		prev = cur
		cur = nex
	}

	return [tail, head]
}

let reverseKGroup = function (head, k) {
	const hair = new ListNode()
	hair.next = head
	let pre = hair

	while (head) {
		let tail = pre
		// 查看剩余部分长度是否大于等于 k
		for (let i = 0; i < k; ++i) {
			tail = tail.next
			if (!tail) {
				return hair.next
			}
		}
		const nex = tail.next
		;[head, tail] = reserveList(head, tail)
		// 把子链表重新接回原链表
		pre.next = head
		tail.next = nex
		pre = tail
		head = tail.next
	}
	return hair.next
}

