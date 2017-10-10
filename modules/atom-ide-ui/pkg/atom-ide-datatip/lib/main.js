'use strict';

var cov_1rse2ijgdk = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/main.js',
      hash = '6e20896522ecf551a9170b27244bcda762c99803',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/main.js',
    statementMap: {
      '0': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 48
        }
      },
      '1': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 32
        }
      },
      '2': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 35
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
            column: 42
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
            column: 12
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

var _DatatipManager;

function _load_DatatipManager() {
  return _DatatipManager = require('./DatatipManager');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Activation {

  constructor() {
    cov_1rse2ijgdk.f[0]++;
    cov_1rse2ijgdk.s[0]++;

    this._datatipManager = new (_DatatipManager || _load_DatatipManager()).DatatipManager();
  }

  provideDatatipService() {
    cov_1rse2ijgdk.f[1]++;
    cov_1rse2ijgdk.s[1]++;

    return this._datatipManager;
  }

  dispose() {
    cov_1rse2ijgdk.f[2]++;
    cov_1rse2ijgdk.s[2]++;

    this._datatipManager.dispose();
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

cov_1rse2ijgdk.s[3]++;


(0, (_createPackage || _load_createPackage()).default)(module.exports, Activation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbnN0cnVjdG9yIiwiX2RhdGF0aXBNYW5hZ2VyIiwicHJvdmlkZURhdGF0aXBTZXJ2aWNlIiwiZGlzcG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBRUEsTUFBTUEsVUFBTixDQUFpQjs7QUFHZkMsZ0JBQWM7QUFBQTtBQUFBOztBQUNaLFNBQUtDLGVBQUwsR0FBdUIsZ0VBQXZCO0FBQ0Q7O0FBRURDLDBCQUF3QztBQUFBO0FBQUE7O0FBQ3RDLFdBQU8sS0FBS0QsZUFBWjtBQUNEOztBQUVERSxZQUFVO0FBQUE7QUFBQTs7QUFDUixTQUFLRixlQUFMLENBQXFCRSxPQUFyQjtBQUNEO0FBYmMsQyxDQWpCakI7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSx1REFBY0MsT0FBT0MsT0FBckIsRUFBOEJOLFVBQTlCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7RGF0YXRpcFNlcnZpY2V9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgY3JlYXRlUGFja2FnZSBmcm9tICdudWNsaWRlLWNvbW1vbnMtYXRvbS9jcmVhdGVQYWNrYWdlJztcbmltcG9ydCB7RGF0YXRpcE1hbmFnZXJ9IGZyb20gJy4vRGF0YXRpcE1hbmFnZXInO1xuXG5jbGFzcyBBY3RpdmF0aW9uIHtcbiAgX2RhdGF0aXBNYW5hZ2VyOiBEYXRhdGlwTWFuYWdlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9kYXRhdGlwTWFuYWdlciA9IG5ldyBEYXRhdGlwTWFuYWdlcigpO1xuICB9XG5cbiAgcHJvdmlkZURhdGF0aXBTZXJ2aWNlKCk6IERhdGF0aXBTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YXRpcE1hbmFnZXI7XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2RhdGF0aXBNYW5hZ2VyLmRpc3Bvc2UoKTtcbiAgfVxufVxuXG5jcmVhdGVQYWNrYWdlKG1vZHVsZS5leHBvcnRzLCBBY3RpdmF0aW9uKTtcbiJdfQ==