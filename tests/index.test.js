'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const stringsmith = require('../src/index');

test('stringsmith - exports all 12 functions correctly', () => {
  const expectedFunctions = [
    'slugify',
    'capitalize',
    'titleCase',
    'truncate',
    'isPalindrome',
    'camelCase',
    'snakeCase',
    'kebabCase',
    'countWords',
    'reverse',
    'removeExtraSpaces',
    'maskString'
  ];

  for (const fn of expectedFunctions) {
    assert.equal(typeof stringsmith[fn], 'function', `Expected stringsmith.${fn} to be a function`);
  }
});

test('stringsmith - functions work as expected via main export', () => {
  assert.equal(stringsmith.slugify('Hello World!'), 'hello-world');
  assert.equal(stringsmith.capitalize('hello'), 'Hello');
  assert.equal(stringsmith.titleCase('learning and growing'), 'Learning and Growing');
  assert.equal(stringsmith.truncate('Hello, world!', 8), 'Hello...');
  assert.equal(stringsmith.isPalindrome('racecar'), true);
  assert.equal(stringsmith.camelCase('hello_world'), 'helloWorld');
  assert.equal(stringsmith.snakeCase('helloWorld'), 'hello_world');
  assert.equal(stringsmith.kebabCase('helloWorld'), 'hello-world');
  assert.equal(stringsmith.countWords('two words'), 2);
  assert.equal(stringsmith.reverse('hello'), 'olleh');
  assert.equal(stringsmith.removeExtraSpaces(' a   b '), 'a b');
  assert.equal(stringsmith.maskString('12345678', { visible: 4 }), '****5678');
});
