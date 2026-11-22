'use strict';

const { assertString } = require('./internal/validate');
const { splitWords } = require('./internal/words');

/**
 * Converts a string to snake_case ("hello_world").
 *
 * WHY:
 * Database columns, Python identifiers, and file naming conventions frequently use snake_case.
 *
 * @param {string} text - Input text
 * @returns {string} snake_case string
 */
function snakeCase(text) {
  assertString(text, 'snakeCase');

  const words = splitWords(text);
  if (words.length === 0) {
    return '';
  }

  return words.map((word) => word.toLowerCase()).join('_');
}

module.exports = snakeCase;
