'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const countWords = require('../src/countWords');

test('countWords - accurately counts words in normal text', () => {
  assert.equal(countWords('hello world'), 2);
  assert.equal(countWords('The quick brown fox jumps over the lazy dog'), 9);
});

test('countWords - ignores extra leading, trailing, and duplicate whitespace', () => {
  assert.equal(countWords('   hello    world   '), 2);
  assert.equal(countWords('\n\thello\nworld\r\n'), 2);
});

test('countWords - returns 0 for empty or whitespace-only strings', () => {
  assert.equal(countWords(''), 0);
  assert.equal(countWords('   '), 0);
  assert.equal(countWords('\t\n'), 0);
});

test('countWords - throws TypeError on non-string inputs', () => {
  assert.throws(
    () => countWords(undefined),
    { name: 'TypeError', message: 'countWords() expects a string but received undefined' }
  );
  assert.throws(
    () => countWords(['word']),
    { name: 'TypeError', message: 'countWords() expects a string but received array' }
  );
});
