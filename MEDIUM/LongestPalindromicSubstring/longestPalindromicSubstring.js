// Longest Palindromic Substring

// Write a function that given a string returns its longest palindromic substring.  A palindrome is defined as a string that is written the same forward and backward.  Assume that there will only be one longest palindromic substring.

// Try generating all possible substrings of the input string and checking for their palindromicity.  Recognize that a palindrome is a string that is symmetrical with respect to its ClientRect, which can either be a character (in the case of odd-length palindromes) or an empty string (in the case of even-length palindromes).  Thus, you can check the palindromicity of a string by simply expanding from its center and making sure that characters on both sides are indeed mirrored.  Traverse the input string, and at each index apply the same logic as AbortSignalEventMap.

// O(n^3) time | O(1) space
function longestPalindromicSubstring(string) {
  let longest = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}

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

// O(n^2) time | O(1) space
function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}
