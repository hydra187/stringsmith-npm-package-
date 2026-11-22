'use strict';

const { assertString } = require('./internal/validate');
const { splitWords } = require('./internal/words');

/**
 * Converts a string to kebab-case ("hello-world").
 *
 * WHY:
 * CSS class names, HTML attributes, and REST endpoint routes commonly use kebab-case.
 *
 * @param {string} text - Input text
 * @returns {string} kebab-case string
 */
function kebabCase(text) {
  assertString(text, 'kebabCase');

  const words = splitWords(text);
  if (words.length === 0) {
    return '';
  }

  return words.map((word) => word.toLowerCase()).join('-');
}

module.exports = kebabCase;
