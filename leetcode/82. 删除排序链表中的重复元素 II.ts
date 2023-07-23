// pre cur next
// cur.val === next.val

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev: ListNode | null = dummy;
  let cur: ListNode | null | undefined = dummy.next;

  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      const temp = cur.val;
      while (cur && cur.val === temp) cur = cur.next;
    } else {
      prev.next = cur;
      prev = cur;
      cur = cur.next;
    }
    prev.next = cur;
  }
  return dummy.next;
}
