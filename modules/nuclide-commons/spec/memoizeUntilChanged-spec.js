'use strict';

var _memoizeUntilChanged;

function _load_memoizeUntilChanged() {
  return _memoizeUntilChanged = _interopRequireDefault(require('../memoizeUntilChanged'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sum = (a, b) => a + b; /**
                              * Copyright (c) 2017-present, Facebook, Inc.
                              * All rights reserved.
                              *
                              * This source code is licensed under the BSD-style license found in the
                              * LICENSE file in the root directory of this source tree. An additional grant
                              * of patent rights can be found in the PATENTS file in the same directory.
                              *
                              * 
                              * @format
                              */

describe('memoizeUntilChanged', () => {
  it('memoizes', () => {
    const spy = jasmine.createSpy().andCallFake(sum);
    const f = (0, (_memoizeUntilChanged || _load_memoizeUntilChanged()).default)(spy);
    f(1, 2);
    const result = f(1, 2);
    expect(result).toBe(3);
    expect(spy.callCount).toBe(1);
  });

  it('resets when args change', () => {
    const spy = jasmine.createSpy().andCallFake(sum);
    const f = (0, (_memoizeUntilChanged || _load_memoizeUntilChanged()).default)(spy);
    f(1, 2);
    const result = f(1, 3);
    expect(result).toBe(4);
    expect(spy.callCount).toBe(2);
  });

  it('preserves context', () => {
    let that;
    const obj = {};
    const f = (0, (_memoizeUntilChanged || _load_memoizeUntilChanged()).default)(function f() {
      that = this;
    });
    f.call(obj);
    expect(that).toBe(obj);
  });
});