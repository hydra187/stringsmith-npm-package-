'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const titleCase = require('../src/titleCase');

test('titleCase - capitalizes standard titles with minor words kept lower', () => {
  assert.equal(titleCase('the journey of the code'), 'The Journey of the Code');
  assert.equal(titleCase('a guide to clean functions'), 'A Guide to Clean Functions');
  assert.equal(titleCase('learning and growing'), 'Learning and Growing');
});

test('titleCase - always capitalizes the first word even if minor', () => {
  assert.equal(titleCase('in the quiet morning'), 'In the Quiet Morning');
  assert.equal(titleCase('out of the blue'), 'Out of the Blue');
});

test('titleCase - handles single words and empty strings', () => {
  assert.equal(titleCase(''), '');
  assert.equal(titleCase('   '), '   ');
  assert.equal(titleCase('hello'), 'Hello');
});

test('titleCase - throws TypeError on non-string inputs', () => {
  assert.throws(
    () => titleCase(42),
    { name: 'TypeError', message: 'titleCase() expects a string but received number' }
  );
  assert.throws(
    () => titleCase(false),
    { name: 'TypeError', message: 'titleCase() expects a string but received boolean' }
  );
});
