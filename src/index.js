'use strict';

/**
 * stringsmith - Small, dependable string helpers. Zero dependencies.
 */

const slugify = require('./slugify');
const capitalize = require('./capitalize');
const titleCase = require('./titleCase');
const truncate = require('./truncate');
const isPalindrome = require('./isPalindrome');
const camelCase = require('./camelCase');
const snakeCase = require('./snakeCase');
const kebabCase = require('./kebabCase');
const countWords = require('./countWords');
const reverse = require('./reverse');
const removeExtraSpaces = require('./removeExtraSpaces');
const maskString = require('./maskString');

module.exports = {
  slugify,
  capitalize,
  titleCase,
  truncate,
  isPalindrome,
  camelCase,
  snakeCase,
  kebabCase,
  countWords,
  reverse,
  removeExtraSpaces,
  maskString
};
