'use strict';

const { assertString } = require('./internal/validate');

/**
 * Correctly reverses a string while preserving multi-byte characters, emoji,
 * and complex grapheme clusters.
 *
 * WHY:
 * Naive reversing with `.split('').reverse().join('')` breaks 16-bit surrogate pairs
 * (turning '😀' into corrupted question marks) and separates combining accent marks
 * from their base characters. Using `Intl.Segmenter` (supported natively in modern Node.js)
 * inspects user-perceived characters (graphemes) and keeps them intact.
 *
 * @param {string} text - Input text
 * @returns {string} Accurately reversed string
 */
function reverse(text) {
  assertString(text, 'reverse');

  if (text.length <= 1) {
    return text;
  }

  // Intl.Segmenter respects full grapheme clusters (surrogate pairs, combining accents, compound emoji)
  if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    const graphemes = Array.from(segmenter.segment(text), (entry) => entry.segment);
    return graphemes.reverse().join('');
  }

  // Fallback for surrogate pairs if Intl.Segmenter is absent
  return Array.from(text).reverse().join('');
}

module.exports = reverse;
