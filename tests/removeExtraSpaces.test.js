'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const removeExtraSpaces = require('../src/removeExtraSpaces');

test('removeExtraSpaces - collapses multiple spaces into one', () => {
  assert.equal(removeExtraSpaces('hello    world'), 'hello world');
  assert.equal(removeExtraSpaces('a   b   c   d'), 'a b c d');
});

test('removeExtraSpaces - trims leading and trailing spaces', () => {
  assert.equal(removeExtraSpaces('   hello world   '), 'hello world');
});

test('removeExtraSpaces - collapses tabs and newlines', () => {
  assert.equal(removeExtraSpaces('hello\n\t  world\r\ntest'), 'hello world test');
});

test('removeExtraSpaces - handles empty or space-only strings', () => {
  assert.equal(removeExtraSpaces(''), '');
  assert.equal(removeExtraSpaces('     '), '');
  assert.equal(removeExtraSpaces('\n\t  '), '');
});

test('removeExtraSpaces - throws TypeError on non-string inputs', () => {
  assert.throws(
    () => removeExtraSpaces(null),
    { name: 'TypeError', message: 'removeExtraSpaces() expects a string but received null' }
  );
  assert.throws(
    () => removeExtraSpaces(100),
    { name: 'TypeError', message: 'removeExtraSpaces() expects a string but received number' }
  );
});
