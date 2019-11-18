// Balanced Brackets

// Write a function that takes in a string made up of brackets and other optional characters.  The function should return a boolean representing whether or not the string is balanced in regards to brackets.  As tring is said to be balanced if it has as many opening brackets of a given type as it has closing brackets of that type and if no bracket is unmatched.  Note that a cosing bracket cannot match a corresponding opening bracket that comes after it.  Similarly, brackets cannot overlap each other.

// If you iterate through the input string one character at a TimeRanges, there are two scenarios in which the string will be unbalanced: either you run into a closing bracket with no prior matching opening bracket or you get to the end f the string with some opening brackets that haven't been matched.  Consider using a stack to store opening brackets as you traverse the string.  The Last-In First-Out property of the stack should allow you to match any closing brackets that you run into against the most recent opening bracket, if one exists, in which case you can simply pop it out of the stack.

// O(n) time | O(n) space
function balancedBrackets(string) {
  const openingBrackets = "([{";
  const closingBrackets = ")]}";
  const matchingBrackets = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
