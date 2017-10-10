"use strict";

var cov_8ngo2sj7f = function () {
  var path = "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Block.js",
      hash = "c9a9aa6c3584931e71f9d4ddde6a370a7b4d1412",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Block.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 21
          },
          end: {
            line: 20,
            column: 22
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 47
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
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
exports.Block = undefined;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** A Block. */
cov_8ngo2sj7f.s[0]++; /**
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

const Block = exports.Block = props => {
  cov_8ngo2sj7f.f[0]++;
  cov_8ngo2sj7f.s[1]++;
  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    _react.createElement(
      "div",
      { className: "block" },
      props.children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJsb2NrLmpzIl0sIm5hbWVzIjpbIkJsb2NrIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQU1BO3NCQWxCQTs7Ozs7Ozs7Ozs7O0FBbUJPLE1BQU1BLHdCQUFTQyxLQUFELElBRW5CO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FBQUEsUUFBSyxXQUFVLE9BQWY7QUFBd0JBLFlBQU1DO0FBQTlCO0FBQUE7QUFBNkMsQ0FGeEMiLCJmaWxlIjoiQmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogbWl4ZWQsXG59O1xuXG4vKiogQSBCbG9jay4gKi9cbmV4cG9ydCBjb25zdCBCbG9jayA9IChwcm9wczogUHJvcHMpID0+IChcbiAgLy8gJEZsb3dGaXhNZSg+PTAuNTMuMCkgRmxvdyBzdXBwcmVzc1xuICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuKTtcbiJdfQ==