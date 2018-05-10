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
 */
'use strict';

/* eslint
  comma-dangle: [1, always-multiline],
  prefer-object-spread/prefer-object-spread: 0,
  nuclide-internal/no-commonjs: 0,
  */
/* eslint-disable no-console */

/**
 * Normally, 'yarn workspaces' takes care of including the deps in modules/.
 * However, since APM uses 'npm install', we can't rely on this behavior.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const pkgJson = require('../package.json');
const {getModules} = require('./util');

const modulePaths = getModules();
const moduleNames = new Set(modulePaths.map(p => path.basename(p)));

function addDependencies(pkgDeps, moduleDeps, assertMatching = true) {
  Object.keys(moduleDeps).forEach(dep => {
    // Internal dependencies should be ignored.
    if (moduleNames.has(dep)) {
      return;
    }
    const currentDep = pkgDeps[dep];
    const moduleDep = moduleDeps[dep];
    if (assertMatching) {
      assert(
        currentDep == null || currentDep === moduleDep,
        `Mismatched dependency ${dep}: ${currentDep} vs ${moduleDep}`
      );
    }
    pkgDeps[dep] = moduleDep;
  });
}

function sortObject(obj) {
  const newObject = {};
  Object.keys(obj).sort().forEach(key => {
    newObject[key] = obj[key];
  });
  return newObject;
}

// Pull in dependencies from modules.
modulePaths.forEach(dirpath => {
  const modulePkg = require(path.join(dirpath, 'package.json'));
  addDependencies(pkgJson.dependencies, modulePkg.dependencies || {});
});
pkgJson.dependencies = sortObject(pkgJson.dependencies);

fs.writeFileSync(
  require.resolve('../package.json'),
  JSON.stringify(pkgJson, null, 2) + '\n'
);
