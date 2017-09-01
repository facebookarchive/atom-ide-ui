/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @noflow
 */
'use strict';

/* eslint
  comma-dangle: [1, always-multiline],
  prefer-object-spread/prefer-object-spread: 0,
  rulesdir/no-commonjs: 0,
  */

const fs = require('fs');
const path = require('path');
const MODULES_PATH = path.join(__dirname, '..', 'modules');

function getModules() {
  return fs.readdirSync(MODULES_PATH)
    .map(dirname => {
      const dirpath = path.join(MODULES_PATH, dirname);
      if (
        fs.statSync(dirpath).isDirectory() &&
        fs.existsSync(path.join(dirpath, 'package.json'))
      ) {
        return dirpath;
      }
    })
    .filter(Boolean);
}

module.exports = {
  getModules,
};
