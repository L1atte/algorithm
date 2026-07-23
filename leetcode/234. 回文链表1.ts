function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;

  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < vals.length / 2; i++) {
    if (vals[i] !== vals[vals.length - i - 1]) return false;
  }
  return true;
}
