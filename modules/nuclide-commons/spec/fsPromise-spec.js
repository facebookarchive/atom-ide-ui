'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _nuclideUri;

function _load_nuclideUri() {
  return _nuclideUri = _interopRequireDefault(require('../nuclideUri'));
}

var _fsPromise;

function _load_fsPromise() {
  return _fsPromise = _interopRequireDefault(require('../fsPromise'));
}

var _testHelpers;

function _load_testHelpers() {
  return _testHelpers = require('../test-helpers');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fsPromise test suite', () => {
  describe('findNearestFile()', () => {
    let dirPath = null;

    beforeEach(() => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        dirPath = yield (0, (_testHelpers || _load_testHelpers()).generateFixture)('nearest_test', new Map([['.some_file', 'just some file'], ['nested_dir/.another_file', 'just another file']]));
      }));
    });

    it('find the file if given the exact directory', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const foundPath = yield (_fsPromise || _load_fsPromise()).default.findNearestFile('.some_file', dirPath);
        expect(foundPath).toBe(dirPath);
      }));
    });

    it('find the file if given a nested directory', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const foundPath = yield (_fsPromise || _load_fsPromise()).default.findNearestFile('.some_file', (_nuclideUri || _load_nuclideUri()).default.join(dirPath, 'nested_dir'));
        expect(foundPath).toBe(dirPath);
      }));
    });

    it('does not find the file if not existing', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const foundPath = yield (_fsPromise || _load_fsPromise()).default.findNearestFile('non-existent.txt', (_nuclideUri || _load_nuclideUri()).default.join(dirPath, 'nested_dir'));
        expect(foundPath).toBe(null);
      }));
    });
  });

  describe('findFurthestFile()', () => {
    let dirPath = null;

    beforeEach(() => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        dirPath = yield (0, (_testHelpers || _load_testHelpers()).generateFixture)('furthest_test', new Map([['0/.some_file', 'just a file'], ['0/1/.some_file', 'just b file'],
        // Skip one file to test consecutive vs non-consecutive.
        // ['0/1/2', 'just c file'],
        ['0/1/2/3/.some_file', 'just d file'], ['0/1/2/3/4/.some_file', 'just f file']]));
      }));
    });

    it('find the file if given the exact directory', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const expectedPath = (_nuclideUri || _load_nuclideUri()).default.join(dirPath, '0');
        const foundPath = yield (_fsPromise || _load_fsPromise()).default.findFurthestFile('.some_file', expectedPath);
        expect(foundPath).toBe(expectedPath);
      }));
    });

    it('finds the furthest file if given a nested directory', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const expectedPath = (_nuclideUri || _load_nuclideUri()).default.join(dirPath, '0');
        const startPath = (_nuclideUri || _load_nuclideUri()).default.join(dirPath, '0/1/2/3/4');
        const foundPath = yield (_fsPromise || _load_fsPromise()).default.findFurthestFile('.some_file', startPath);
        expect(foundPath).toBe(expectedPath);
      }));
    });

    it('terminates search as soon as file is not found if given the stopOnMissing flag', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const expectedPath = (_nuclideUri || _load_nuclideUri()).default.join(dirPath, '0/1/2/3');
        const startPath = (_nuclideUri || _load_nuclideUri()).default.join(dirPath, '0/1/2/3/4');
        const foundPath = yield (_fsPromise || _load_fsPromise()).default.findFurthestFile('.some_file', startPath, true /* stopOnMissing */
        );
        expect(foundPath).toBe(expectedPath);
      }));
    });

    it('does not find the file if not existing', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const startPath = (_nuclideUri || _load_nuclideUri()).default.join(dirPath, '0/1/2/3/4');
        const foundPath = yield (_fsPromise || _load_fsPromise()).default.findFurthestFile('non-existent.txt', startPath);
        expect(foundPath).toBe(null);
      }));
    });
  });

  describe('getCommonAncestorDirectory', () => {
    it('gets the parent directory', () => {
      expect((_fsPromise || _load_fsPromise()).default.getCommonAncestorDirectory(['/foo/bar.txt', '/foo/baz/lol.txt'])).toBe('/foo');
      expect((_fsPromise || _load_fsPromise()).default.getCommonAncestorDirectory(['/foo/bar/abc/def/abc.txt', '/foo/bar/lol.txt'])).toBe('/foo/bar');
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