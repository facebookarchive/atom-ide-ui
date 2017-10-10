"use strict";

var cov_2kl002697f = function () {
  var path = "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ToolbarLeft.js",
      hash = "778933fa50367e1053dbadc7f77e9db5022657dd",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ToolbarLeft.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 27
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
            column: 27
          },
          end: {
            line: 19,
            column: 28
          }
        },
        loc: {
          start: {
            line: 19,
            column: 45
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
exports.ToolbarLeft = undefined;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_2kl002697f.s[0]++; /**
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

const ToolbarLeft = exports.ToolbarLeft = props => {
  cov_2kl002697f.f[0]++;
  cov_2kl002697f.s[1]++;

  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    _react.createElement(
      "div",
      { className: "nuclide-ui-toolbar__left" },
      props.children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2xiYXJMZWZ0LmpzIl0sIm5hbWVzIjpbIlRvb2xiYXJMZWZ0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozt1QkFaQTs7Ozs7Ozs7Ozs7O0FBa0JPLE1BQU1BLG9DQUFlQyxLQUFELElBQWtCO0FBQUE7QUFBQTs7QUFDM0M7QUFDRTtBQUNBO0FBQUE7QUFBQSxRQUFLLFdBQVUsMEJBQWY7QUFBMkNBLFlBQU1DO0FBQWpEO0FBRkY7QUFJRCxDQUxNIiwiZmlsZSI6IlRvb2xiYXJMZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IG1peGVkLFxufTtcblxuZXhwb3J0IGNvbnN0IFRvb2xiYXJMZWZ0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vICRGbG93Rml4TWUoPj0wLjUzLjApIEZsb3cgc3VwcHJlc3NcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm51Y2xpZGUtdWktdG9vbGJhcl9fbGVmdFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn07XG4iXX0=