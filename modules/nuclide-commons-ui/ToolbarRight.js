"use strict";

var cov_2ip53evzdt = function () {
  var path = "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ToolbarRight.js",
      hash = "0c861e2cc8da6e22d0cebdeb4991545230deb2cc",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ToolbarRight.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 28
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
            column: 28
          },
          end: {
            line: 19,
            column: 29
          }
        },
        loc: {
          start: {
            line: 19,
            column: 46
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
exports.ToolbarRight = undefined;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_2ip53evzdt.s[0]++; /**
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

const ToolbarRight = exports.ToolbarRight = props => {
  cov_2ip53evzdt.f[0]++;
  cov_2ip53evzdt.s[1]++;

  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    _react.createElement(
      "div",
      { className: "nuclide-ui-toolbar__right" },
      props.children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2xiYXJSaWdodC5qcyJdLCJuYW1lcyI6WyJUb29sYmFyUmlnaHQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOzs7O3VCQVpBOzs7Ozs7Ozs7Ozs7QUFrQk8sTUFBTUEsc0NBQWdCQyxLQUFELElBQWtCO0FBQUE7QUFBQTs7QUFDNUM7QUFDRTtBQUNBO0FBQUE7QUFBQSxRQUFLLFdBQVUsMkJBQWY7QUFBNENBLFlBQU1DO0FBQWxEO0FBRkY7QUFJRCxDQUxNIiwiZmlsZSI6IlRvb2xiYXJSaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBtaXhlZCxcbn07XG5cbmV4cG9ydCBjb25zdCBUb29sYmFyUmlnaHQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgLy8gJEZsb3dGaXhNZSg+PTAuNTMuMCkgRmxvdyBzdXBwcmVzc1xuICAgIDxkaXYgY2xhc3NOYW1lPVwibnVjbGlkZS11aS10b29sYmFyX19yaWdodFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn07XG4iXX0=