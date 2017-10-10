"use strict";

var cov_8h86vebpe = function () {
  var path = "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ToolbarCenter.js",
      hash = "829f4f500b7ae3393feaaa830c6b9d4d161197d6",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ToolbarCenter.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 29
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 29
          },
          end: {
            line: 19,
            column: 30
          }
        },
        loc: {
          start: {
            line: 19,
            column: 47
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 19
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
exports.ToolbarCenter = undefined;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_8h86vebpe.s[0]++; /**
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

const ToolbarCenter = exports.ToolbarCenter = props => {
  cov_8h86vebpe.f[0]++;
  cov_8h86vebpe.s[1]++;

  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    _react.createElement(
      "div",
      { className: "nuclide-ui-toolbar__center" },
      props.children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2xiYXJDZW50ZXIuanMiXSwibmFtZXMiOlsiVG9vbGJhckNlbnRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7c0JBWkE7Ozs7Ozs7Ozs7OztBQWtCTyxNQUFNQSx3Q0FBaUJDLEtBQUQsSUFBa0I7QUFBQTtBQUFBOztBQUM3QztBQUNFO0FBQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSw0QkFBZjtBQUE2Q0EsWUFBTUM7QUFBbkQ7QUFGRjtBQUlELENBTE0iLCJmaWxlIjoiVG9vbGJhckNlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBtaXhlZCxcbn07XG5cbmV4cG9ydCBjb25zdCBUb29sYmFyQ2VudGVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vICRGbG93Rml4TWUoPj0wLjUzLjApIEZsb3cgc3VwcHJlc3NcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm51Y2xpZGUtdWktdG9vbGJhcl9fY2VudGVyXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICApO1xufTtcbiJdfQ==