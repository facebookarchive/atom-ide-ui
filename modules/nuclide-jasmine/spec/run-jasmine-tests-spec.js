'use strict';var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));var _waitsForPromise;











function _load_waitsForPromise() {return _waitsForPromise = _interopRequireDefault(require('../lib/waitsForPromise'));}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function testFlowtypedFunction(arg) {
  return arg;
} /**
   * Copyright (c) 2017-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *  strict-local
   * @format
   */describe('Jasmine transpile test suite', () => {it('test transpiler worked as exepcted', () => {const promise = Promise.resolve('test');expect(typeof promise).toEqual('object');expect(testFlowtypedFunction(1)).toEqual(1);});});describe('Jasmine environment', () => {
  it('sets the correct NODE_ENV', () => {
    expect(process.env.NODE_ENV).toEqual('test');
  });
});

describe('Jasmine waitsForPromise test suite', () => {
  beforeEach(() => jasmine.useRealClock());

  it('test waitsForPromise worked as expected on a resolved promise', () => {
    (0, (_waitsForPromise || _load_waitsForPromise()).default)((0, _asyncToGenerator.default)(function* () {
      const promise = Promise.resolve('test');
      const result = yield promise;
      expect(result).toEqual('test');
    }));
  });

  it('test waitsForPromise worked as expected on a rejected promise', () => {
    (0, (_waitsForPromise || _load_waitsForPromise()).default)({ shouldReject: true }, () =>
    Promise.reject(new Error('test')));

  });

  it('test waitsForPromise worked as expected on a customized timeout', () => {
    // This is more than default timeout of 5 seconds.
    (0, (_waitsForPromise || _load_waitsForPromise()).default)({ shouldReject: false, timeout: 7 * 1000 }, () => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 6 * 1000);
      });
    });
  });
});