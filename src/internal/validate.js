'use strict';

/**
 * Validates that an argument is a string.
 * If not, throws a standardized, helpful TypeError.
 * 
 * WHY:
 * Fail-fast input validation prevents unpredictable bugs further down the pipeline
 * and provides clear feedback to developers when an incorrect data type is supplied.
 *
 * @param {unknown} value - The input value to check
 * @param {string} fnName - The name of the calling function for descriptive error messages
 * @throws {TypeError} If value is not a primitive string
 */
function assertString(value, fnName) {
  if (typeof value !== 'string') {
    let receivedType = typeof value;
    if (value === null) {
      receivedType = 'null';
    } else if (Array.isArray(value)) {
      receivedType = 'array';
    }
    throw new TypeError(`${fnName}() expects a string but received ${receivedType}`);
  }
}

module.exports = {
  assertString
};
