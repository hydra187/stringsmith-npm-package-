'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const maskString = require('../src/maskString');

test('maskString - masks from the end leaving last 4 visible by default', () => {
  assert.equal(maskString('1234567812345678'), '************5678');
  assert.equal(maskString('9876543210'), '******3210');
});

test('maskString - supports custom visible character count', () => {
  assert.equal(maskString('12345678', { visible: 2 }), '******78');
  assert.equal(maskString('12345678', { visible: 6 }), '**345678');
});

test('maskString - supports custom mask character', () => {
  assert.equal(maskString('secret-password', { visible: 4, maskChar: '#' }), '###########word');
  assert.equal(maskString('12345678', { visible: 4, maskChar: '•' }), '••••5678');
});

test('maskString - supports masking from the start', () => {
  assert.equal(maskString('1234567812345678', { visible: 4, from: 'start' }), '1234************');
});

test('maskString - returns original string if length is less than or equal to visible', () => {
  assert.equal(maskString('123', { visible: 4 }), '123');
  assert.equal(maskString('1234', { visible: 4 }), '1234');
});

test('maskString - masks entire string when visible is 0', () => {
  assert.equal(maskString('secret', { visible: 0 }), '******');
});

test('maskString - throws TypeError on non-string inputs', () => {
  assert.throws(
    () => maskString(12345678),
    { name: 'TypeError', message: 'maskString() expects a string but received number' }
  );
  assert.throws(
    () => maskString(undefined),
    { name: 'TypeError', message: 'maskString() expects a string but received undefined' }
  );
});
