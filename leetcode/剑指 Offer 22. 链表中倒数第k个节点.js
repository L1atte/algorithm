// 利用数组保存节点，然后按照题目所求输出对应数组元素即可
var getKthFromEnd = function (head, k) {
	// 储存节点
	const nodeList = [];
	let count = 0;

	while (head) {
		nodeList[count] = head;
		head = head.next;
		count++;
	}
	return nodeList[nodeList.length - k];
};
