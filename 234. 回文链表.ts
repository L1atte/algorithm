class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
function isPalindrome(head: ListNode | null): boolean {
	if (!head) return false

	const vals: Array<number> = []
	while (head) {
		vals.push(head.val)
		head = head.next
	}

	let start = 0,
		end = vals.length - 1

	while (start < end) {
		if (vals[start] !== vals[end]) return false

		start++
		end--
	}

	return true
}
