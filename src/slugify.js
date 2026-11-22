'use strict';

const { assertString } = require('./internal/validate');

/**
 * Converts a string into a clean, URL-safe slug.
 *
 * WHY:
 * URLs should be human-readable, safe for browsers, and free from special characters.
 * Unicode normalization (`NFD`) decomposes accented characters (like 'è' into 'e' + accent mark),
 * allowing us to strip the accent marks cleanly with a regular expression.
 *
 * @param {string} text - Input text
 * @param {Object} [options={}] - Configuration options
 * @param {string} [options.separator='-'] - Separator between words
 * @param {boolean} [options.lowercase=true] - Whether to convert to lowercase
 * @returns {string} URL slug
 */
function slugify(text, options = {}) {
  assertString(text, 'slugify');

  const separator = typeof options.separator === 'string' ? options.separator : '-';
  const lowercase = options.lowercase !== false;

  // 1. Decompose accented characters: 'é' -> 'e' + combining acute accent
  let result = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (lowercase) {
    result = result.toLowerCase();
  }

  // 2. Replace non-alphanumeric characters with spaces
  result = result.replace(/[^a-zA-Z0-9]+/g, ' ').trim();

  if (!result) {
    return '';
  }

  // 3. Split into words and join with the custom separator
  return result.split(/\s+/).join(separator);
}

module.exports = slugify;
