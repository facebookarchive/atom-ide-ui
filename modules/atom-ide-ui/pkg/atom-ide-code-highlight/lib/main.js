'use strict';

var cov_22h2bu8su6 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-code-highlight/lib/main.js',
      hash = '6a663b695de1feec142a2a0d0a4c59736167a99e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-code-highlight/lib/main.js',
    statementMap: {
      '0': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 60
        }
      },
      '1': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 41
        }
      },
      '2': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 60
        }
      },
      '3': {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 42
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 21
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 12
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 60
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
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

var _createPackage;

function _load_createPackage() {
  return _createPackage = _interopRequireDefault(require('nuclide-commons-atom/createPackage'));
}

var _CodeHighlightManager;

function _load_CodeHighlightManager() {
  return _CodeHighlightManager = _interopRequireDefault(require('./CodeHighlightManager'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Activation {

  constructor() {
    cov_22h2bu8su6.f[0]++;
    cov_22h2bu8su6.s[0]++;

    this._codeHighlightManager = new (_CodeHighlightManager || _load_CodeHighlightManager()).default();
  }

  dispose() {
    cov_22h2bu8su6.f[1]++;
    cov_22h2bu8su6.s[1]++;

    this._codeHighlightManager.dispose();
  }

  addProvider(provider) {
    cov_22h2bu8su6.f[2]++;
    cov_22h2bu8su6.s[2]++;

    return this._codeHighlightManager.addProvider(provider);
  }
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

cov_22h2bu8su6.s[3]++;


(0, (_createPackage || _load_createPackage()).default)(module.exports, Activation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbnN0cnVjdG9yIiwiX2NvZGVIaWdobGlnaHRNYW5hZ2VyIiwiZGlzcG9zZSIsImFkZFByb3ZpZGVyIiwicHJvdmlkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUVBLE1BQU1BLFVBQU4sQ0FBaUI7O0FBR2ZDLGdCQUFjO0FBQUE7QUFBQTs7QUFDWixTQUFLQyxxQkFBTCxHQUE2QixxRUFBN0I7QUFDRDs7QUFFREMsWUFBVTtBQUFBO0FBQUE7O0FBQ1IsU0FBS0QscUJBQUwsQ0FBMkJDLE9BQTNCO0FBQ0Q7O0FBRURDLGNBQVlDLFFBQVosRUFBMEQ7QUFBQTtBQUFBOztBQUN4RCxXQUFPLEtBQUtILHFCQUFMLENBQTJCRSxXQUEzQixDQUF1Q0MsUUFBdkMsQ0FBUDtBQUNEO0FBYmMsQyxDQWpCakI7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSx1REFBY0MsT0FBT0MsT0FBckIsRUFBOEJQLFVBQTlCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7Q29kZUhpZ2hsaWdodFByb3ZpZGVyfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IGNyZWF0ZVBhY2thZ2UgZnJvbSAnbnVjbGlkZS1jb21tb25zLWF0b20vY3JlYXRlUGFja2FnZSc7XG5pbXBvcnQgQ29kZUhpZ2hsaWdodE1hbmFnZXIgZnJvbSAnLi9Db2RlSGlnaGxpZ2h0TWFuYWdlcic7XG5cbmNsYXNzIEFjdGl2YXRpb24ge1xuICBfY29kZUhpZ2hsaWdodE1hbmFnZXI6IENvZGVIaWdobGlnaHRNYW5hZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NvZGVIaWdobGlnaHRNYW5hZ2VyID0gbmV3IENvZGVIaWdobGlnaHRNYW5hZ2VyKCk7XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2NvZGVIaWdobGlnaHRNYW5hZ2VyLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGFkZFByb3ZpZGVyKHByb3ZpZGVyOiBDb2RlSGlnaGxpZ2h0UHJvdmlkZXIpOiBJRGlzcG9zYWJsZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVIaWdobGlnaHRNYW5hZ2VyLmFkZFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgfVxufVxuXG5jcmVhdGVQYWNrYWdlKG1vZHVsZS5leHBvcnRzLCBBY3RpdmF0aW9uKTtcbiJdfQ==