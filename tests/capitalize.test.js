'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const capitalize = require('../src/capitalize');

test('capitalize - uppercases first letter, leaves rest unchanged', () => {
  assert.equal(capitalize('hello'), 'Hello');
  assert.equal(capitalize('hello world'), 'Hello world');
  assert.equal(capitalize('iPhone'), 'IPhone');
  assert.equal(capitalize('NASA'), 'NASA');
});

test('capitalize - handles single characters and empty strings', () => {
  assert.equal(capitalize('a'), 'A');
  assert.equal(capitalize('Z'), 'Z');
  assert.equal(capitalize(''), '');
});

test('capitalize - handles non-alphabetic first characters', () => {
  assert.equal(capitalize('123hello'), '123hello');
  assert.equal(capitalize('!warning'), '!warning');
});

test('capitalize - throws TypeError on non-string inputs', () => {
  assert.throws(
    () => capitalize(null),
    { name: 'TypeError', message: 'capitalize() expects a string but received null' }
  );
  assert.throws(
    () => capitalize(undefined),
    { name: 'TypeError', message: 'capitalize() expects a string but received undefined' }
  );
  assert.throws(
    () => capitalize({}),
    { name: 'TypeError', message: 'capitalize() expects a string but received object' }
  );
});
