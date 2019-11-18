// Numbers in Pi

// Given a string representation of the first n digits of Pi and a list of your favorite numbers (all positive integers in string format), write a function that returns the smallest number of spaces that need to be added to the n digits of Pi such that all resulting numbers are found in the list of favorite numbers.

// O(n^3 + m) time | O(n + m) space - where n is the number of digits in Pi and m is the number of favorite numbers

function numbersInPi(pi, numbers) {
  const numbersTable = {};
  for (const number of numbers) {
    numbersTable[number] = true;
  }
  const minSpaces = getMinSpaces(pi, numbersTable, {}, 0);
  return minSpaces === Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi, numbersTable, cache, idx) {
  if (idx === pi.length) return -1;
  if (idx in cache) return cache[idx];
  let minSpaces = Infinity;
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1);
    if (prefix in numbersTable) {
      const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1);
      minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
    }
  }
  cache[idx] = minSpaces;
  return cache[idx];
}

// O(n^3 + m) time | O(n + m) space - where n is the number of digits in Pi and m is the number of favorite numbers
function numbersInPi(pi, numbers) {
  const numbersTable = {};
  for (const number of numbers) {
    numbersTable[number] = true;
  }
  const cache = {};
  for (let i = pi.length - 1; i >= 0; i--) {
    getMinSpaces(pi, numbersTable, cache, i);
  }
  return cache[0] === Infinity ? -1 : cache[0];
}

function getMinSpaces(pi, numbersTable, cache, idx) {
  if (idx === pi.length) return -1;
  if (idx in cache) return cache[idx];
  let minSpaces = Infinity;
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1);
    if (prefix in numbersTable) {
      const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1);
      minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
    }
  }
  cache[idx] = minSpaces;
  return cache[idx];
}
