'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _ConfigCache;

function _load_ConfigCache() {
  return _ConfigCache = require('../ConfigCache');
}

var _nuclideUri;

function _load_nuclideUri() {
  return _nuclideUri = _interopRequireDefault(require('../nuclideUri'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
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

const CONFIG_FILE_NAME = '.test_nuclide_config_file';
const CONFIG_FILE_NAME_2 = '.test_nuclide_config_file_2';

describe('ConfigCache', () => {
  const noConfigFolder = (_nuclideUri || _load_nuclideUri()).default.join(__dirname, 'fixtures');
  const rootFolder = (_nuclideUri || _load_nuclideUri()).default.join(__dirname, 'fixtures/ConfigCache');
  const rootFile = (_nuclideUri || _load_nuclideUri()).default.join(__dirname, 'fixtures/ConfigCache/file');
  const nestedFolder = (_nuclideUri || _load_nuclideUri()).default.join(__dirname, 'fixtures/ConfigCache/testFolder');
  const nestedFolder2 = (_nuclideUri || _load_nuclideUri()).default.join(__dirname, 'fixtures/ConfigCache/testFolder2');
  const nestedFile = (_nuclideUri || _load_nuclideUri()).default.join(__dirname, 'fixtures/ConfigCache/testFolder/file');

  it('finds the right config dir', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const cache = new (_ConfigCache || _load_ConfigCache()).ConfigCache([CONFIG_FILE_NAME]);

      expect((yield cache.getConfigDir(noConfigFolder))).toBe(null);
      expect((yield cache.getConfigDir(rootFolder))).toBe(rootFolder);
      expect((yield cache.getConfigDir(rootFile))).toBe(rootFolder);
      expect((yield cache.getConfigDir(nestedFolder))).toBe(rootFolder);
      expect((yield cache.getConfigDir(nestedFile))).toBe(rootFolder);
    }));
  });

  it('prefers closer matches with multiple config files', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const cache = new (_ConfigCache || _load_ConfigCache()).ConfigCache([CONFIG_FILE_NAME, CONFIG_FILE_NAME_2]);

      expect((yield cache.getConfigDir(rootFolder))).toBe(rootFolder);
      expect((yield cache.getConfigDir(nestedFolder2))).toBe(nestedFolder2);
    }));
  });
});