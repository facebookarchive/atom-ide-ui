'use strict';

var cov_1ks9mtvxbv = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-code-format/lib/config.js',
      hash = '35550e64f8b98cf862d62d9b1dfc35ac7d3b04da',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-code-format/lib/config.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 18,
          column: 8
        }
      },
      '1': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 53
        }
      },
      '2': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'getFormatOnSave',
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 31
          }
        },
        loc: {
          start: {
            line: 15,
            column: 43
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 15
      },
      '1': {
        name: 'getFormatOnType',
        decl: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 22,
            column: 31
          }
        },
        loc: {
          start: {
            line: 22,
            column: 43
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 19,
            column: 52
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 19,
            column: 32
          },
          end: {
            line: 19,
            column: 37
          }
        }, {
          start: {
            line: 19,
            column: 40
          },
          end: {
            line: 19,
            column: 52
          }
        }],
        line: 19
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0]
    },
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
exports.getFormatOnSave = getFormatOnSave;
exports.getFormatOnType = getFormatOnType;

var _featureConfig;

function _load_featureConfig() {
  return _featureConfig = _interopRequireDefault(require('nuclide-commons-atom/feature-config'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFormatOnSave() {
  cov_1ks9mtvxbv.f[0]++;

  const formatOnSave = (cov_1ks9mtvxbv.s[0]++, (_featureConfig || _load_featureConfig()).default.get('atom-ide-code-format.formatOnSave'));
  cov_1ks9mtvxbv.s[1]++;
  return formatOnSave == null ? (cov_1ks9mtvxbv.b[0][0]++, false) : (cov_1ks9mtvxbv.b[0][1]++, formatOnSave);
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

function getFormatOnType() {
  cov_1ks9mtvxbv.f[1]++;
  cov_1ks9mtvxbv.s[2]++;

  return (_featureConfig || _load_featureConfig()).default.getWithDefaults('atom-ide-code-format.formatOnType', false);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJnZXRGb3JtYXRPblNhdmUiLCJnZXRGb3JtYXRPblR5cGUiLCJmb3JtYXRPblNhdmUiLCJnZXQiLCJnZXRXaXRoRGVmYXVsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWNnQkEsZSxHQUFBQSxlO1FBT0FDLGUsR0FBQUEsZTs7OztBQVRoQjtBQUFBO0FBQUE7Ozs7QUFFTyxTQUFTRCxlQUFULEdBQW9DO0FBQUE7O0FBQ3pDLFFBQU1FLHVDQUFnQixrREFBY0MsR0FBZCxDQUNwQixtQ0FEb0IsQ0FBaEIsQ0FBTjtBQUR5QztBQUl6QyxTQUFPRCxnQkFBZ0IsSUFBaEIsOEJBQXVCLEtBQXZCLCtCQUErQkEsWUFBL0IsQ0FBUDtBQUNELEMsQ0FuQkQ7Ozs7Ozs7Ozs7OztBQXFCTyxTQUFTRCxlQUFULEdBQW9DO0FBQUE7QUFBQTs7QUFDekMsU0FBTyxrREFBY0csZUFBZCxDQUNMLG1DQURLLEVBRUwsS0FGSyxDQUFQO0FBSUQiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IGZlYXR1cmVDb25maWcgZnJvbSAnbnVjbGlkZS1jb21tb25zLWF0b20vZmVhdHVyZS1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0T25TYXZlKCk6IGJvb2xlYW4ge1xuICBjb25zdCBmb3JtYXRPblNhdmUgPSAoZmVhdHVyZUNvbmZpZy5nZXQoXG4gICAgJ2F0b20taWRlLWNvZGUtZm9ybWF0LmZvcm1hdE9uU2F2ZScsXG4gICk6IGFueSk7XG4gIHJldHVybiBmb3JtYXRPblNhdmUgPT0gbnVsbCA/IGZhbHNlIDogZm9ybWF0T25TYXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0T25UeXBlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZmVhdHVyZUNvbmZpZy5nZXRXaXRoRGVmYXVsdHMoXG4gICAgJ2F0b20taWRlLWNvZGUtZm9ybWF0LmZvcm1hdE9uVHlwZScsXG4gICAgZmFsc2UsXG4gICk7XG59XG4iXX0=