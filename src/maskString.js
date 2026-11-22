'use strict';

const { assertString } = require('./internal/validate');

/**
 * Masks a portion of sensitive text (e.g., credit card numbers, emails, phone numbers)
 * while leaving a designated number of characters visible.
 *
 * WHY:
 * Displaying sensitive customer identifiers without exposing private data
 * is a fundamental security and privacy requirement (PCI DSS, GDPR).
 *
 * JAVASCRIPT GOTCHA:
 * In JavaScript, `text.slice(-0)` evaluates to `text.slice(0)`, returning the full string!
 * We explicitly guard against `visible === 0` to prevent unintended leakage.
 *
 * @param {string} text - Input text
 * @param {Object} [options={}] - Configuration options
 * @param {number} [options.visible=4] - Number of characters to leave visible
 * @param {string} [options.maskChar='*'] - Character used for masking
 * @param {'end'|'start'} [options.from='end'] - Which side of the string leaves characters visible
 * @returns {string} Masked string
 */
function maskString(text, options = {}) {
  assertString(text, 'maskString');

  const visible = typeof options.visible === 'number' && options.visible >= 0
    ? Math.floor(options.visible)
    : 4;

  const maskChar = typeof options.maskChar === 'string' && options.maskChar.length > 0
    ? options.maskChar
    : '*';

  const from = options.from === 'start' ? 'start' : 'end';

  // If the string is already shorter than or equal to visible count, nothing to mask
  if (text.length <= visible) {
    return text;
  }

  // If 0 characters should be visible, mask the entire string
  if (visible === 0) {
    return maskChar.repeat(text.length);
  }

  const maskCount = text.length - visible;
  const mask = maskChar.repeat(maskCount);

  if (from === 'start') {
    const visiblePart = text.slice(0, visible);
    return visiblePart + mask;
  }

  // Default: from === 'end'
  const visiblePart = text.slice(-visible);
  return mask + visiblePart;
}

module.exports = maskString;
