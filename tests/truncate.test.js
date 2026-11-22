'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const truncate = require('../src/truncate');

test('truncate - truncates string and appends suffix without exceeding length', () => {
  const result = truncate('Hello, world!', 8);
  assert.equal(result, 'Hello...');
  assert.equal(result.length, 8);
});

test('truncate - returns original string if length is sufficient', () => {
  assert.equal(truncate('Hello', 10), 'Hello');
  assert.equal(truncate('Hello', 5), 'Hello');
});

test('truncate - supports custom suffix', () => {
  // Total length 10. Suffix length 7 (" [more]"). Available content: 3 ("Hel").
  const result = truncate('Hello, world!', 10, { suffix: ' [more]' });
  assert.equal(result, 'Hel [more]');
  assert.equal(result.length, 10);
});

test('truncate - with wordBoundary avoids cutting words in half', () => {
  const result = truncate('The quick brown fox jumps', 17, { wordBoundary: true });
  assert.equal(result, 'The quick...');
  assert(result.length <= 17);
});

test('truncate - respects edge cases where length is smaller than suffix', () => {
  assert.equal(truncate('Hello', 2, { suffix: '...' }), '..');
  assert.equal(truncate('Hello', 0), '');
});

test('truncate - throws TypeError on non-string text or invalid length', () => {
  assert.throws(
    () => truncate(123, 5),
    { name: 'TypeError', message: 'truncate() expects a string but received number' }
  );
  assert.throws(
    () => truncate('test', -1),
    { name: 'TypeError', message: 'truncate() expects length to be a non-negative number' }
  );
});
