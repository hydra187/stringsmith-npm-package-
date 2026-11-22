'use strict';

const { assertString } = require('./internal/validate');

/**
 * Trims surrounding whitespace and collapses consecutive internal whitespace characters into a single space.
 *
 * WHY:
 * User-entered text often contains accidental double-spaces, tabs, and newlines.
 * Normalizing whitespace ensures clean formatting and predictable storage.
 *
 * @param {string} text - Input text
 * @returns {string} Sanitized text with single spaces
 */
function removeExtraSpaces(text) {
  assertString(text, 'removeExtraSpaces');

  return text.trim().replace(/\s+/g, ' ');
}

module.exports = removeExtraSpaces;
