function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let p1: ListNode | null = head,
    p2: ListNode | null = head;

  while (p1 && p2) {
    p1 = p1.next;
    p2 = p2.next?.next ?? null;
    if (p1 === p2) return true;
  }
  return false;
}
