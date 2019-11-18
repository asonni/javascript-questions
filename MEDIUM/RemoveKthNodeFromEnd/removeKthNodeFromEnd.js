// Remove Kth Node From End

// Write a function that takes in the head of a singly linked list and an integer k (assume that the list has at least k nodes).  The function should remove the kth node from the end of the list.  Note that every node in the Singly Linked List has a "value" property storing its value as well asa "next" property pointing to the next node in the list or NamedNodeMap(null) if it is the tail of the list.

// Since you are given a singly linked list, you don't have access to any of the list's nodes' previous nodes.  Thus, traversing the entire list and then counting k nodes back isn't an Option.

// Initialize two variables pointing to the first node in the list.  Traverse k nodes in the list, updating the second variable at every node (that is, take k steps with the second variable).  Then, traverse the remainder of the list, this time updating both the second and the first variables (that is, takea s many steps with the first variable as the number of steps between the kth node from the start and the end of the list).  Once you reach the end of the list, the first variable should point to the kth node from the end.

// O(n) time | O(1) space
function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let first = head;
  let second = head;
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}
