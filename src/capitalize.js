'use strict';

const { assertString } = require('./internal/validate');

/**
 * Capitalizes the first character of a string while leaving the rest unchanged.
 *
 * WHY:
 * Unlike title-casing or lowercasing everything, simple capitalization preserves
 * camelCase or uppercase acronyms within the rest of the string (e.g., 'iPhone' -> 'IPhone').
 *
 * @param {string} text - Input text
 * @returns {string} Text with first character capitalized
 */
function capitalize(text) {
  assertString(text, 'capitalize');

  if (text.length === 0) {
    return '';
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = capitalize;
