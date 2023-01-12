let arr = [1, 2, 3, 4, 5];

const reverseList = function (head) {
	if (head === null) return head;
	let [prev, curr] = [null, head];
	while (curr) {
		[curr.next, prev, curr] = [prev, curr, curr.next];
	}
	return prev;
};

let result = reverseList(arr);
console.log(result);
