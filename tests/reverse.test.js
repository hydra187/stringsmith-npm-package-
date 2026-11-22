'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const reverse = require('../src/reverse');

test('reverse - reverses standard ASCII strings', () => {
  assert.equal(reverse('hello'), 'olleh');
  assert.equal(reverse('JavaScript'), 'tpircSavaJ');
  assert.equal(reverse('12345'), '54321');
});

test('reverse - handles empty and single character strings', () => {
  assert.equal(reverse(''), '');
  assert.equal(reverse('a'), 'a');
});

test('reverse - preserves emoji without breaking surrogate pairs', () => {
  assert.equal(reverse('hello 👋'), '👋 olleh');
  assert.equal(reverse('🍕🌮🍔'), '🍔🌮🍕');
});

test('reverse - preserves grapheme clusters (skin tones and accents)', () => {
  // 'cafe\u0301' has 4 grapheme clusters: 'c', 'a', 'f', 'e\u0301'
  // When properly reversed, 'e\u0301' stays together as the first grapheme: 'e\u0301fac'
  assert.equal(reverse('cafe\u0301'), 'e\u0301fac');

  // Thumbs up with medium-dark skin tone remains unified
  assert.equal(reverse('test 👍🏽'), '👍🏽 tset');
});

test('reverse - throws TypeError on non-string inputs', () => {
  assert.throws(
    () => reverse(9876),
    { name: 'TypeError', message: 'reverse() expects a string but received number' }
  );
  assert.throws(
    () => reverse({}),
    { name: 'TypeError', message: 'reverse() expects a string but received object' }
  );
});
