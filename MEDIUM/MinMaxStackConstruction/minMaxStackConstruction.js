// Min Max Stack Construction

// Write a Min Max Stack class.  The class should support pushing and popping values on and off the stack, peeking at values at the top of the stack and getting both the minimum and maximum values in the stack.  All class methods, when considered independently, should run in constant time and with constant space.

// You should be able to push values on, pop values off and peek at values on top of the stack at any time and in constant time, using constant space.  You should be abe to get the minimum and maximum values in the stack at any time and in constant time, using constant space.  Since the minimum and maximum values in the stack can change with every push and pop, you will likely need to keep track of all the mins and maxes at every value in the stack.

class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  // O(1) time | O(1) space
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1) time | O(1) space
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  // O(1) time | O(1) space
  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.min(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  // O(1) time | O(1) space
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  // O(1) time | O(1) space
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
