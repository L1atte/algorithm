function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const length = getLength(head)
  const target = length - n;
  const dummy: ListNode = new ListNode(0, head);
  let cur: ListNode | null = dummy;

  for (let i = 0; i <= target; i++) {
    if (cur && cur.next) {
      if (i === target) {
        cur.next = cur.next.next;
      }
      cur = cur.next;
    }
  }

  return dummy.next;
};

function getLength(head: ListNode | null): number {
  if (!head) return 0

  let length: number = 0
  let p: ListNode | null = head

  while (p) {
    p = p.next
    length++
  }
  return length
}