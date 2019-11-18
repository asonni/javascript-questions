// Reverse Linked List

// Write a function that takes in the head of a Singly Linked List (assume that the list has at leaset 1 Node; in other words, the head will never be a null value).  The function should reverse the list and return its new head.  Note that every node in the Singly Linked List has a "value" property storings its value as well as a "next" property pointing to the next node in the list or None(null) if it is the tail of the list.

// O(n) time | O(1) space - where n is the number of nodes in the Linked List
function reverseLinkedList(head) {
  let p1 = null,
    p2 = head;
  while (p2 !== null) {
    const p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  return p1;
}
