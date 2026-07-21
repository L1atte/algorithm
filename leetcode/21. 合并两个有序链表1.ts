function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let result = new ListNode(),
    cur: ListNode | null = result,
    p1: ListNode | null = list1,
    p2: ListNode | null = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      cur.next = p2;
      p2 = p2.next;
    } else {
      cur.next = p1;
      p1 = p1.next;
    }
    cur = cur.next;
  }

  cur.next = p1 === null ? p2 : p1;
  return result.next;
}
