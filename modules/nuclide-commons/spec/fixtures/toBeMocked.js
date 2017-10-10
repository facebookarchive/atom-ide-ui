"use strict";

var cov_1a3tc2z9mj = function () {
  var path = "/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/fixtures/toBeMocked.js",
      hash = "eebd04fbef910cbf935b9077f5d57dbac3537613",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/fixtures/toBeMocked.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "importedFunction",
        decl: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 32
          }
        },
        loc: {
          start: {
            line: 13,
            column: 48
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
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
exports.importedFunction = importedFunction;
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

function importedFunction(arg) {
  cov_1a3tc2z9mj.f[0]++;
  cov_1a3tc2z9mj.s[0]++;

  return 0;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvQmVNb2NrZWQuanMiXSwibmFtZXMiOlsiaW1wb3J0ZWRGdW5jdGlvbiIsImFyZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVlnQkEsZ0IsR0FBQUEsZ0I7QUFaaEI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLGdCQUFULENBQTBCQyxHQUExQixFQUF5QztBQUFBO0FBQUE7O0FBQzlDLFNBQU8sQ0FBUDtBQUNEIiwiZmlsZSI6InRvQmVNb2NrZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0ZWRGdW5jdGlvbihhcmc6IGFueSk6IGFueSB7XG4gIHJldHVybiAwO1xufVxuIl19