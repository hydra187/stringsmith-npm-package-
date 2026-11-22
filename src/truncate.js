'use strict';

const { assertString } = require('./internal/validate');

/**
 * Truncates a string to a specified maximum length, appending a suffix.
 * The total length of the returned string will never exceed `length`.
 *
 * WHY:
 * In UI design and database storage, strict length limits prevent overflow.
 * Word boundary truncation prevents awkward cuts like "The unexpect...".
 *
 * @param {string} text - Input text
 * @param {number} length - Maximum total length of the resulting string
 * @param {Object} [options={}] - Configuration options
 * @param {string} [options.suffix='...'] - Ellipsis or suffix string
 * @param {boolean} [options.wordBoundary=false] - When true, avoids breaking in the middle of words
 * @returns {string} Truncated string
 */
function truncate(text, length, options = {}) {
  assertString(text, 'truncate');

  if (typeof length !== 'number' || Number.isNaN(length) || length < 0) {
    throw new TypeError(`truncate() expects length to be a non-negative number`);
  }

  // Already fits within the target length
  if (text.length <= length) {
    return text;
  }

  const suffix = typeof options.suffix === 'string' ? options.suffix : '...';
  const wordBoundary = Boolean(options.wordBoundary);

  // If the total allowed length is smaller than the suffix itself,
  // return only as much of the suffix as will fit to respect the strict limit.
  if (length <= suffix.length) {
    return suffix.slice(0, length);
  }

  const targetLength = length - suffix.length;
  let cut = text.slice(0, targetLength);

  if (wordBoundary) {
    // Check if we are slicing right at a whitespace boundary
    const nextChar = text.charAt(targetLength);
    const isAtBoundary = /\s/.test(nextChar) || /\s$/.test(cut);

    if (!isAtBoundary) {
      const lastSpaceIndex = cut.lastIndexOf(' ');
      // If there is an earlier space, trim back to that word boundary
      if (lastSpaceIndex !== -1) {
        cut = cut.slice(0, lastSpaceIndex);
      }
    }
  }

  return cut.trimEnd() + suffix;
}

module.exports = truncate;
