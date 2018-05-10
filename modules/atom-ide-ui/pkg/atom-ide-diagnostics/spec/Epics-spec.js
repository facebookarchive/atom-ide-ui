'use strict';var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));













var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');var _reduxObservable;
function _load_reduxObservable() {return _reduxObservable = require('../../../../nuclide-commons/redux-observable');}var _Actions;
function _load_Actions() {return _Actions = _interopRequireWildcard(require('../lib/redux/Actions'));}var _Epics;
function _load_Epics() {return _Epics = require('../lib/redux/Epics');}var _createStore;
function _load_createStore() {return _createStore = _interopRequireDefault(require('../lib/redux/createStore'));}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the BSD-style license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @format
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */describe('Epics', () => {describe('fetchCodeActions', () => {const fakeMessageRangeTracker = null;const fakeEditor = null;const TEST_ACTION = { apply() {return (0, _asyncToGenerator.default)(function* () {})();}, dispose() {}, getTitle: () => Promise.resolve('test') };
    const TEST_DIAGNOSTIC = {};
    const fakeMessages = [TEST_DIAGNOSTIC, {}];

    it('fetches code actions for a set of diagnostics', () => {
      const store = (0, (_createStore || _load_createStore()).default)(fakeMessageRangeTracker);
      store.dispatch(
      (_Actions || _load_Actions()).setCodeActionFetcher({
        getCodeActionForDiagnostic(editor, message) {return (0, _asyncToGenerator.default)(function* () {
            if (message === TEST_DIAGNOSTIC) {
              return [TEST_ACTION];
            }
            return [];})();
        } }));



      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        expect((
        yield (0, (_Epics || _load_Epics()).fetchCodeActions)(
        new (_reduxObservable || _load_reduxObservable()).ActionsObservable(
        _rxjsBundlesRxMinJs.Observable.of((_Actions || _load_Actions()).fetchCodeActions(fakeEditor, fakeMessages))),

        store).

        toArray().
        toPromise())).
        toEqual([
        (_Actions || _load_Actions()).setCodeActions(
        new Map([
        [fakeMessages[0], new Map([['test', TEST_ACTION]])],
        [fakeMessages[1], new Map()]]))]);



      }));
    });
  });
});