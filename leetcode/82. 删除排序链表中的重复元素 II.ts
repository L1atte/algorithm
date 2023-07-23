// pre cur next
// cur.val === next.val

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let cur: ListNode | null = dummy.next;

  while (cur && cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const temp = cur.next.val;
      while (cur.next && cur.next.val === temp) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
}
