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
  rulesdir/no-commonjs: 0,
  */
/* eslint-disable no-console */

/**
 * Inline imports makes it hard for us to gather initial coverage data.
 * This manually goes through all transpiled files to gather that data.
 */

const invariant = require('assert');
const fs = require('fs');
const libInstrument = require('istanbul-lib-instrument');
const pathRules = require('../modules/nuclide-node-transpiler/lib/path-rules');
const NodeTranspiler = require('../modules/nuclide-node-transpiler/lib/NodeTranspiler');
const path = require('path');

const {COVERAGE_DIR} = process.env;
invariant(COVERAGE_DIR, 'Expected COVERAGE_DIR to be set');

const nodeTranspiler = new NodeTranspiler();
const jsFiles = pathRules.getIncludedFiles();

console.log(`Getting initial coverage for ${jsFiles.length} files...`);

const result = {};
jsFiles.forEach(file => {
  const src = fs.readFileSync(file);
  if (NodeTranspiler.shouldCompile(src)) {
    const code = nodeTranspiler.transformWithCache(src, file);
    const coverage = libInstrument.readInitialCoverage(code);
    if (coverage != null && coverage.coverageData != null) {
      result[file] = coverage.coverageData;
    }
  }
});

fs.writeFileSync(
  path.join(COVERAGE_DIR, 'initial.json'),
  JSON.stringify(result)
);
