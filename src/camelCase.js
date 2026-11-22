'use strict';

const { assertString } = require('./internal/validate');
const { splitWords } = require('./internal/words');

/**
 * Converts a string to camelCase ("helloWorld").
 *
 * WHY:
 * JavaScript variable and object property naming standardizes on camelCase.
 *
 * @param {string} text - Input text
 * @returns {string} camelCase string
 */
function camelCase(text) {
  assertString(text, 'camelCase');

  const words = splitWords(text);
  if (words.length === 0) {
    return '';
  }

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index === 0) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

module.exports = camelCase;
