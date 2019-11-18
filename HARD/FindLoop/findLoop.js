// Find Loop

// Write a function that takes in the head of a singly linked list that contains a loop (in other words, the list's tail node points to some node in the list instead of the None(null) value).  The function should return the node (the actual node - not just its vaule) from which the loop originates in constant space.  Note that every node in the Singly Linked List has a "value" property storing its value as well as a "next" property pointing to the next node in the list.

// O(n) time | O(1) space
function findLoop(head) {
  let first = head.next;
  let second = head.next.next;
  while (first !== second) {
    first = first.next;
    second = second.next.next;
  }
  first = head;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return first;
}
