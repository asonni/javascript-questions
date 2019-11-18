// Palindrome Check

// Write a function that takes in a non-empty string and that returns a boolean representing whether or not the string is a palindrome.

// A palindrome is defined as a string that is written the same forward and backward.

// O(n^2) time | O(n) space
function isPalindrome(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}

// O(n) time | O(n) space
function isPalindrome(string) {
  const reversedChars = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join("");
}

// O(n) time | O(n) space
function isPalindrome(string, i = 0) {
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}

// O(n) time | O(1) space
function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
