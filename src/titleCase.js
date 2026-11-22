'use strict';

const { assertString } = require('./internal/validate');

// Common English articles, conjunctions, and prepositions that stay lowercase in titles
const MINOR_WORDS = new Set([
  'a', 'an', 'the',
  'and', 'but', 'or', 'nor', 'for', 'yet', 'so',
  'as', 'at', 'by', 'in', 'into', 'near', 'of', 'off', 'on', 'onto', 'to', 'up', 'with'
]);

/**
 * Converts a string into title case according to standard editorial guidelines.
 * Minor words (articles, short conjunctions/prepositions) stay lowercase
 * unless they are the first word in the sentence.
 *
 * WHY:
 * Naive title-casing capitalizes every word ("The Art Of Simple Code"), which looks
 * unnatural in English publications. Tracking word positions and minor words produces
 * clean, publication-quality headlines.
 *
 * @param {string} text - Input text
 * @returns {string} Title-cased text
 */
function titleCase(text) {
  assertString(text, 'titleCase');

  if (!text.trim()) {
    return text;
  }

  // Split on whitespace while preserving word positions
  const words = text.split(/\s+/);

  const formattedWords = words.map((word, index) => {
    if (!word) {
      return '';
    }

    const lower = word.toLowerCase();

    // The first word is always capitalized; minor words stay lowercase otherwise
    if (index !== 0 && MINOR_WORDS.has(lower)) {
      return lower;
    }

    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });

  return formattedWords.join(' ');
}

module.exports = titleCase;
