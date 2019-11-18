// Min Heap Construction

// Implement a Min Heap class.  The class should support insertion, removal (of the minimum/root value), peeking (of the minimum/root value), as well as sifting a value up and down the heap and building the heap from an input Array.  The heap should be represented in the form of an Array.

// For the buildheap(), remove() and insert() methods of the heap, you will need to use the siftDown() and siftUp() methods.  These two methods should essentially allow you to take any node in the heap and move it either down or up in the heap until it's in its final, appropriate position.  This can be done by comparing the node in question to its child nodes in the case of siftDown() or to its parent node in the case of siftUp().

// In an array-based Heap, you can easily access a node's children nodes and parent nodes by using the nodes' indices.  If a node is located at index innerWidth, then its children nodes are located at indices 2 * i + 1 and 2 * i + 2, and its arent node is located at index Math.floor((i - 1 / 2)).

// To implement the buildHeap() method, you can either sift every node in the input array down to its finally, correct position, or you can sift every node in the input array up to its final, correct position.

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // O(n) time | O(1) space
  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  // O(log(n)) time | O(1) space
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== (-1) ** heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoidx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  // O(log(n)) time | O(1) space
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }

  // O(log(n)) time | O(1) space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  // O(log(n)) time | O(1) space
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
