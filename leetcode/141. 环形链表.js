// map解法
let hasCycleWithMap = (head) => {
	let map = new Map();

	while (head) {
		if (map.has(head)) return true;

		map.set(head, true);
		head = head.next;
	}

	return false;
};

// 快慢指针
let hasCycleWithFastSlow = (head) => {
	let fast = head,
		slow = head;

	while (fast) {
		if (fast.next == null) return false;
		slow = slow.next;
		fast = fast.next.next;
		if (fast == slow) return true;
	}
};
