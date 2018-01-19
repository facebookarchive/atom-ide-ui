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

/**
 * This check needs to happen before the transpiler hook is loaded -
 * otherwise, this will conflict with Nuclide's transpiler hook :(
 */
if (
  !atom.packages.isPackageDisabled('nuclide') &&
  atom.packages.getAvailablePackageNames().includes('nuclide')
) {
  const displayNuclideWarning = require('./display-nuclide-warning');
  displayNuclideWarning();
} else {
  /**
   * Load the transpiler's require hook in development mode.
   * This also puts modules/ into the module resolution path.
   */
  const {__DEV__} = require('./modules/nuclide-node-transpiler/lib/env');
  if (__DEV__) {
    require('./modules/nuclide-node-transpiler');
  }

  module.exports = require('./index');
}
