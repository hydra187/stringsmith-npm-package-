'use strict';

/**
 * Splits arbitrary formatted text into an array of clean, individual word tokens.
 * Handles camelCase, PascalCase, kebab-case, snake_case, spaces, and punctuation.
 *
 * WHY:
 * Sharing a single battle-tested word tokenizer across camelCase, kebabCase, and snakeCase
 * avoids duplication (DRY principle) and guarantees consistent behavior across all case converters.
 *
 * How it works:
 * 1. Insert space between lowercase/digit and uppercase: 'helloWorld' -> 'hello World'
 * 2. Insert space between acronyms and capitalized words: 'HTTPResponse' -> 'HTTP Response'
 * 3. Replace non-alphanumeric characters (like dashes, underscores, punctuation) with spaces.
 * 4. Trim surrounding spaces and split on one or more whitespace characters.
 *
 * @param {string} text - Validated string input
 * @returns {string[]} Array of word tokens
 */
function splitWords(text) {
  if (!text) {
    return [];
  }

  const spaced = text
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1 $2')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim();

  if (!spaced) {
    return [];
  }

  return spaced.split(/\s+/);
}

module.exports = {
  splitWords
};
