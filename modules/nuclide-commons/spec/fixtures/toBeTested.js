'use strict';

var cov_1w3lsm64aa = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/fixtures/toBeTested.js',
      hash = 'f65eed96f2632bb6e51eaa815b8adef1885ad19d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/fixtures/toBeTested.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 30
        }
      }
    },
    fnMap: {
      '0': {
        name: 'functionToTest',
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 30
          }
        },
        loc: {
          start: {
            line: 15,
            column: 38
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functionToTest = functionToTest;

var _toBeMocked;

function _load_toBeMocked() {
  return _toBeMocked = require('./toBeMocked');
}

function functionToTest() {
  cov_1w3lsm64aa.f[0]++;
  cov_1w3lsm64aa.s[0]++;

  return (0, (_toBeMocked || _load_toBeMocked()).importedFunction)(42);
} /**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvQmVUZXN0ZWQuanMiXSwibmFtZXMiOlsiZnVuY3Rpb25Ub1Rlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFjZ0JBLGMsR0FBQUEsYzs7OztBQUZoQjtBQUFBO0FBQUE7O0FBRU8sU0FBU0EsY0FBVCxHQUErQjtBQUFBO0FBQUE7O0FBQ3BDLFNBQU8sMERBQWlCLEVBQWpCLENBQVA7QUFDRCxDLENBaEJEIiwiZmlsZSI6InRvQmVUZXN0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQge2ltcG9ydGVkRnVuY3Rpb259IGZyb20gJy4vdG9CZU1vY2tlZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdW5jdGlvblRvVGVzdCgpOiBhbnkge1xuICByZXR1cm4gaW1wb3J0ZWRGdW5jdGlvbig0Mik7XG59XG4iXX0=