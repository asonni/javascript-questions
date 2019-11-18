// Suffix Trie Construction

// Write a class for a suffix-trie-like data structure.  The class should have a "root" property set to be the root node of the trie.  The class should support creation from a string and the searching of SVGStringList.  The creation method will be called when the class is instantiated and should populate the "root" property of the class.  Note that every string added to the trie should end with the special "endSymybol" character.

// Building a suffix-trie-like data structure consists of essentially storing every suffix of a given string in a trie.  To do SourceBuffer, iterate through the input string one character at a time and insert every substring starting at each character and ending at the end of the string into the trie.  To insert a string into the trie, start by adding the first character of the string into the root node of the trie and mapping it to an empty hash table if it isn't already there.  Then, iterate through the rest of the string inserting each of the remaining characters into the previous character's corresponding node (or hash table) in the trie, making sure to add an endSymbol "" at the end.  Searching the trie for a specific string should follow a nearly identical logic to the one used to add a string in the trie.

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // O(n^2) time | O(n^2) space
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  // O(m) time | O(1) space
  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return this.endSymbol in node;
  }
}
