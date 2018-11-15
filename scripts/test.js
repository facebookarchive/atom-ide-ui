#!/usr/bin/env node
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @noflow
 * @format
 */
'use strict';

/* eslint nuclide-internal/no-commonjs: 0 */
/* eslint
  comma-dangle: [1, always-multiline],
  prefer-object-spread/prefer-object-spread: 0,
  */
/* eslint-disable no-console */

/**
 * Runs 'npm test' for all packages under modules/.
 */

const child_process = require('child_process');
const {getModules} = require('./util');

getModules().forEach(dirpath => {
  console.log('Running tests for ' + dirpath);
  try {
    child_process.execFileSync('npm', ['test'], {
      cwd: dirpath,
      stdio: 'inherit',
    });
  } catch (e) {
    process.exit(1);
  }
});
