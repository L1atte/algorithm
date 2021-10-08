/*
 * @Author: Latte
 * @Date: 2021-09-29 08:48:21
 * @LAstEditors: Latte
 * @LastEditTime: 2021-09-30 11:15:32
 * @FilePath: \algorithm\25. K 个一组翻转链表.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reserveList = function (head, tail) {
	let prev = new ListNode()
  let curr = head

	while (prev !== tail) {
		[curr, prev, curr.next] = [curr.next, curr, prev];
	}
	return [tail,head];
};


let reverseKGroup = function (head, k) {
  const hair = new ListNode();
  hair.next = head;
  let pre = hair;

  while (head) {
      let tail = pre;
      // 查看剩余部分长度是否大于等于 k
      for (let i = 0; i < k; ++i) {
          tail = tail.next;
          if (!tail) {
              return hair.next;
          }
      }
      const nex = tail.next;
      [head, tail] = myReverse(head, tail);
      // 把子链表重新接回原链表
      pre.next = head;
      tail.next = nex;
      pre = tail;
      head = tail.next;
  }
  return hair.next;
};

