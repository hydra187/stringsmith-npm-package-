'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const slugify = require('../src/slugify');

test('slugify - converts standard phrases to slugs', () => {
  assert.equal(slugify('Hello World!'), 'hello-world');
  assert.equal(slugify('A Simple Test Case'), 'a-simple-test-case');
});

test('slugify - handles accents using Unicode normalization', () => {
  assert.equal(slugify('Crème Brûlée'), 'creme-brulee');
  assert.equal(slugify('Café au Lait'), 'cafe-au-lait');
  assert.equal(slugify('Zürich and München'), 'zurich-and-munchen');
});

test('slugify - handles multiple symbols and spaces', () => {
  assert.equal(slugify('  Hello...   World ???  '), 'hello-world');
  assert.equal(slugify('special & characters #123!'), 'special-characters-123');
});

test('slugify - supports custom separator and lowercase option', () => {
  assert.equal(slugify('Hello World', { separator: '_' }), 'hello_world');
  assert.equal(slugify('Hello World', { separator: '/' }), 'hello/world');
  assert.equal(slugify('Hello World', { lowercase: false }), 'Hello-World');
});

test('slugify - handles empty strings and symbol-only strings', () => {
  assert.equal(slugify(''), '');
  assert.equal(slugify('   '), '');
  assert.equal(slugify('!@#$%^&*()'), '');
});

test('slugify - throws TypeError for non-string inputs', () => {
  assert.throws(
    () => slugify(123),
    { name: 'TypeError', message: 'slugify() expects a string but received number' }
  );
  assert.throws(
    () => slugify(null),
    { name: 'TypeError', message: 'slugify() expects a string but received null' }
  );
  assert.throws(
    () => slugify(['test']),
    { name: 'TypeError', message: 'slugify() expects a string but received array' }
  );
});
