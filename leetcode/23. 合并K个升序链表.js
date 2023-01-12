/**
 * 合并K个链表，要求得到升序的一个总链表。直接将链表的值全部存到一个数组中，再利用数组的sort方法来升序排列，然后将值放到一个新链表中即可。
 * @param {*} lists 
 * @returns 
 */
var mergeKLists = function (lists) {
	// 储存节点
	let arr = [];

	for (let i = 0; i < lists.length; i++) {
		while (lists[i]) {
			arr[arr.length] = lists[i].val;
			lists[i] = lists[i].next;
		}
	}

	arr.sort((a, b) => a - b);

  if(arr.length === 0) return null

  let res = new ListNode();
  let control = res;
  for(let i = 0; i < arr.length; i++) {
    control.next = new ListNode()
    control.next.val = arr[i]
    control = control.next
  }

  return res.next
};


