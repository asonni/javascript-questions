// Breadth First Search

// Given a node class that has a name and an array of optional children nodes.

// When put together, nodes form a simple tree - like structure.

// Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth - first search approach(specifically navigating the tree from left to right) stores all of the Nodes' names in the input array, and returns it.

// The Breadth First Search algorithm works by traversing a graph level by level.

// In other words, before traversing any Node's children Nodes, its sibling nods must be traversed.

// How can yuo simply and effectively keep track of Nodes' children Nodes as you traverse them, all the while retaining the order you must traverse them ?

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v + e) time | O(v) space
  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}
