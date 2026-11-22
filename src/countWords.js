'use strict';

const { assertString } = require('./internal/validate');

/**
 * Counts the number of words in a string, ignoring leading, trailing, and duplicate whitespace.
 *
 * WHY:
 * Naive splitting (`text.split(' ')`) counts empty strings as words when there are
 * consecutive spaces. Trimming and splitting on regex `\s+` guarantees an accurate word count.
 *
 * @param {string} text - Input text
 * @returns {number} Number of words
 */
function countWords(text) {
  assertString(text, 'countWords');

  const trimmed = text.trim();
  if (trimmed.length === 0) {
    return 0;
  }

  return trimmed.split(/\s+/).length;
}

module.exports = countWords;
