function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let pre: ListNode | null = null;
  let cur: ListNode | null = head;

  while (cur) {
    const next: ListNode | null = cur.next; // 先保存下一个节点
    cur.next = pre; // 反转当前节点指针
    pre = cur; // pre 向前移动
    cur = next;
  }

  return pre;
}
