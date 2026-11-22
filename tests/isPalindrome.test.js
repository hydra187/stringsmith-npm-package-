'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const isPalindrome = require('../src/isPalindrome');

test('isPalindrome - identifies standard palindromes', () => {
  assert.equal(isPalindrome('racecar'), true);
  assert.equal(isPalindrome('level'), true);
  assert.equal(isPalindrome('noon'), true);
});

test('isPalindrome - ignores case, punctuation, and spaces', () => {
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
  assert.equal(isPalindrome('Was it a car or a cat I saw?'), true);
  assert.equal(isPalindrome('No "x" in Nixon'), true);
});

test('isPalindrome - identifies non-palindromes', () => {
  assert.equal(isPalindrome('hello world'), false);
  assert.equal(isPalindrome('javascript'), false);
});

test('isPalindrome - handles empty strings and single characters', () => {
  assert.equal(isPalindrome(''), true);
  assert.equal(isPalindrome('a'), true);
  assert.equal(isPalindrome('!!!'), true);
});

test('isPalindrome - throws TypeError on non-string inputs', () => {
  assert.throws(
    () => isPalindrome(12321),
    { name: 'TypeError', message: 'isPalindrome() expects a string but received number' }
  );
  assert.throws(
    () => isPalindrome(null),
    { name: 'TypeError', message: 'isPalindrome() expects a string but received null' }
  );
});
