'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const camelCase = require('../src/camelCase');
const snakeCase = require('../src/snakeCase');
const kebabCase = require('../src/kebabCase');

const inputs = [
  'hello_world',
  'Hello World',
  'helloWorld',
  'hello-world',
  'HELLO_WORLD',
  '  hello   world  '
];

test('camelCase - converts all common formats to camelCase', () => {
  for (const input of inputs) {
    assert.equal(camelCase(input), 'helloWorld', `Failed on input: "${input}"`);
  }
  assert.equal(camelCase('getHTTPResponse'), 'getHttpResponse');
  assert.equal(camelCase(''), '');
});

test('snakeCase - converts all common formats to snake_case', () => {
  for (const input of inputs) {
    assert.equal(snakeCase(input), 'hello_world', `Failed on input: "${input}"`);
  }
  assert.equal(snakeCase('getHTTPResponse'), 'get_http_response');
  assert.equal(snakeCase(''), '');
});

test('kebabCase - converts all common formats to kebab-case', () => {
  for (const input of inputs) {
    assert.equal(kebabCase(input), 'hello-world', `Failed on input: "${input}"`);
  }
  assert.equal(kebabCase('getHTTPResponse'), 'get-http-response');
  assert.equal(kebabCase(''), '');
});

test('case converters - throw TypeError on non-string inputs', () => {
  assert.throws(() => camelCase(123), { name: 'TypeError', message: 'camelCase() expects a string but received number' });
  assert.throws(() => snakeCase(null), { name: 'TypeError', message: 'snakeCase() expects a string but received null' });
  assert.throws(() => kebabCase({}), { name: 'TypeError', message: 'kebabCase() expects a string but received object' });
});
