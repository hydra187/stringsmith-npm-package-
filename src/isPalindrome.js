'use strict';

const { assertString } = require('./internal/validate');

/**
 * Checks whether a string is a palindrome, ignoring casing, spaces, and punctuation.
 *
 * WHY:
 * True semantic palindromes (like "A man, a plan, a canal: Panama") rely on the sequence
 * of alphanumeric letters rather than formatting artifacts like spaces and commas.
 * Using Unicode property escapes (`\p{L}` for letters and `\p{N}` for numbers)
 * supports international alphabets beyond basic ASCII.
 *
 * @param {string} text - Input text
 * @returns {boolean} True if the normalized text reads the same forwards and backwards
 */
function isPalindrome(text) {
  assertString(text, 'isPalindrome');

  // Strip all non-alphanumeric characters and lowercase everything
  const cleaned = text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');

  if (cleaned.length <= 1) {
    return true;
  }

  // Two-pointer check from both ends towards the center (O(n) time, O(1) extra space)
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
