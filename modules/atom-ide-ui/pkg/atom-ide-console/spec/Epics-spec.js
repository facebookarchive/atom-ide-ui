'use strict';var _reduxObservable;













function _load_reduxObservable() {return _reduxObservable = require('nuclide-commons/redux-observable');}var _Actions;
function _load_Actions() {return _Actions = _interopRequireWildcard(require('../lib/redux/Actions'));}var _Epics;
function _load_Epics() {return _Epics = _interopRequireWildcard(require('../lib/redux/Epics'));}

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

describe('Epics', () => {
  describe('registerOutputProviderEpic', () => {
    it('observes the status', () => {
      const mockStore = {
        dispatch: () => {},
        getState: () => ({}) };

      let setStatus;
      const provider = {
        id: 'test',
        messages: _rxjsBundlesRxMinJs.Observable.never(),
        observeStatus: cb => {
          setStatus = cb;
        },
        start: () => {},
        stop: () => {} };

      const actions = new (_reduxObservable || _load_reduxObservable()).ActionsObservable(
      _rxjsBundlesRxMinJs.Observable.of((_Actions || _load_Actions()).registerOutputProvider(provider)));

      let results = [];
      (_Epics || _load_Epics()).registerRecordProviderEpic(actions, mockStore).subscribe(
      results.push.bind(results));if (!(

      setStatus != null)) {throw new Error('Invariant violation: "setStatus != null"');}
      setStatus('running');
      setStatus('stopped');
      setStatus('running');
      results = results.filter(action => action.type === (_Actions || _load_Actions()).UPDATE_STATUS);
      expect(results.length).toBe(3);
      expect(
      results.map(action => {if (!(
        action.type === (_Actions || _load_Actions()).UPDATE_STATUS)) {throw new Error('Invariant violation: "action.type === Actions.UPDATE_STATUS"');}
        return action.payload.status;
      })).
      toEqual(['running', 'stopped', 'running']);
    });
  });
}); /**
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