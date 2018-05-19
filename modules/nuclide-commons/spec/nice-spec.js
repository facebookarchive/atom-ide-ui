'use strict';

var _testHelpers;

function _load_testHelpers() {
  return _testHelpers = require('../test-helpers');
}

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

describe('nice', () => {
  let niceSafeSpawn = null;

  let whichSpy = null;
  let spawnSpy = null;
  let shouldFindNiceCommand = null;
  let shouldFindIoniceCommand = null;
  // All we need here is a unique value to make sure that `nice` returns whatever `safeSpawn`
  // returns
  const fakeSafeSpawnReturn = {};

  beforeEach(() => {
    shouldFindNiceCommand = true;
    shouldFindIoniceCommand = true;
    whichSpy = spyOn(require('../which'), 'default').andCallFake(async command => {
      if (shouldFindNiceCommand && command === 'nice' || shouldFindIoniceCommand && command === 'ionice') {
        return command;
      } else {
        return null;
      }
    });
    spawnSpy = spyOn(require('../process'), 'spawn').andReturn(_rxjsBundlesRxMinJs.Observable.of(fakeSafeSpawnReturn));
    ({ niceSafeSpawn } = (0, (_testHelpers || _load_testHelpers()).uncachedRequire)(require, '../nice'));
  });

  it('should spawn `nice` and return whatever spawn returns', () => {
    waitsForPromise(async () => {
      const execOptions = {};
      const result = await niceSafeSpawn('echo', ['hi'], execOptions);
      expect(spawnSpy).toHaveBeenCalledWith('ionice', ['-n', '7', 'nice', 'echo', 'hi'], execOptions);
      expect(result).toBe(fakeSafeSpawnReturn);
    });
  });

  it('should spawn the command normally if nice and ionice cannot be found', () => {
    waitsForPromise(async () => {
      shouldFindNiceCommand = false;
      shouldFindIoniceCommand = false;
      const execOptions = {};
      const result = await niceSafeSpawn('echo', ['hi'], execOptions);
      expect(spawnSpy).toHaveBeenCalledWith('echo', ['hi'], execOptions);
      expect(result).toBe(fakeSafeSpawnReturn);
    });
  });

  it('should spawn with only nice if ionice cannot be found', () => {
    waitsForPromise(async () => {
      shouldFindIoniceCommand = false;
      const execOptions = {};
      const result = await niceSafeSpawn('echo', ['hi'], execOptions);
      expect(spawnSpy).toHaveBeenCalledWith('nice', ['echo', 'hi'], execOptions);
      expect(result).toBe(fakeSafeSpawnReturn);
    });
  });

  it('should spawn with only ionice if nice cannot be found', () => {
    waitsForPromise(async () => {
      // I don't know when we would have ionice but not nice, but we may as well support this case.
      shouldFindNiceCommand = false;
      const execOptions = {};
      const result = await niceSafeSpawn('echo', ['hi'], execOptions);
      expect(spawnSpy).toHaveBeenCalledWith('ionice', ['-n', '7', 'echo', 'hi'], execOptions);
      expect(result).toBe(fakeSafeSpawnReturn);
    });
  });

  it('should call which only once per command and cache the result', () => {
    waitsForPromise(async () => {
      await niceSafeSpawn('echo', []);
      await niceSafeSpawn('echo', []);
      expect(whichSpy).toHaveBeenCalledWith('nice');
      expect(whichSpy).toHaveBeenCalledWith('ionice');
      expect(whichSpy.callCount).toBe(2);
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