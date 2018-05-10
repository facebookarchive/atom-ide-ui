'use strict';var _getCurrentExecutorId;











function _load_getCurrentExecutorId() {return _getCurrentExecutorId = _interopRequireDefault(require('../lib/getCurrentExecutorId'));}var _immutable;
function _load_immutable() {return _immutable = _interopRequireWildcard(require('immutable'));}var _ReducersSpec;
function _load_ReducersSpec() {return _ReducersSpec = require('./Reducers-spec');}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const baseAppState = {
  createPasteFunction: null,
  currentExecutorId: 'a',
  maxMessageCount: Number.POSITIVE_INFINITY,
  executors: new Map([['a', (0, (_ReducersSpec || _load_ReducersSpec()).createDummyExecutor)('a')]]),
  providers: new Map(),
  providerStatuses: new Map(),
  records: (_immutable || _load_immutable()).List(),
  history: [] }; /**
                  * Copyright (c) 2017-present, Facebook, Inc.
                  * All rights reserved.
                  *
                  * This source code is licensed under the BSD-style license found in the
                  * LICENSE file in the root directory of this source tree. An additional grant
                  * of patent rights can be found in the PATENTS file in the same directory.
                  *
                  *  strict-local
                  * @format
                  */describe('getCurrentExecutorId', () => {it('gets the current executor', () => {expect((0, (_getCurrentExecutorId || _load_getCurrentExecutorId()).default)(baseAppState)).toBe('a');});it('returns an executor even if the current id is null', () => {const appState = Object.assign({}, baseAppState, {
      currentExecutorId: null });

    expect((0, (_getCurrentExecutorId || _load_getCurrentExecutorId()).default)(appState)).toBe('a');
  });
});