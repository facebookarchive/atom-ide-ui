'use strict';

var cov_d32w3cwhc = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/hasCommand.js',
      hash = 'def0ff1b65ff2c22cd28ae9ccd7a1a1e10abd0a4',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/hasCommand.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 62
        }
      },
      '1': {
        start: {
          line: 16,
          column: 43
        },
        end: {
          line: 16,
          column: 47
        }
      },
      '2': {
        start: {
          line: 16,
          column: 55
        },
        end: {
          line: 16,
          column: 60
        }
      }
    },
    fnMap: {
      '0': {
        name: 'hasCommand',
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 26
          }
        },
        loc: {
          start: {
            line: 15,
            column: 62
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 16,
            column: 37
          },
          end: {
            line: 16,
            column: 38
          }
        },
        loc: {
          start: {
            line: 16,
            column: 43
          },
          end: {
            line: 16,
            column: 47
          }
        },
        line: 16
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 16,
            column: 49
          },
          end: {
            line: 16,
            column: 50
          }
        },
        loc: {
          start: {
            line: 16,
            column: 55
          },
          end: {
            line: 16,
            column: 60
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasCommand = hasCommand;

var _commandExists;

function _load_commandExists() {
  return _commandExists = _interopRequireDefault(require('command-exists'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasCommand(command) {
  cov_d32w3cwhc.f[0]++;
  cov_d32w3cwhc.s[0]++;

  return (0, (_commandExists || _load_commandExists()).default)(command).then(() => {
    cov_d32w3cwhc.f[1]++;
    cov_d32w3cwhc.s[1]++;
    return true;
  }, () => {
    cov_d32w3cwhc.f[2]++;
    cov_d32w3cwhc.s[2]++;
    return false;
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhc0NvbW1hbmQuanMiXSwibmFtZXMiOlsiaGFzQ29tbWFuZCIsImNvbW1hbmQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBY2dCQSxVLEdBQUFBLFU7Ozs7QUFGaEI7QUFBQTtBQUFBOzs7O0FBRU8sU0FBU0EsVUFBVCxDQUFvQkMsT0FBcEIsRUFBdUQ7QUFBQTtBQUFBOztBQUM1RCxTQUFPLHVEQUFjQSxPQUFkLEVBQXVCQyxJQUF2QixDQUE0QixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUksR0FBdEMsRUFBd0MsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFLLEdBQW5ELENBQVA7QUFDRCxDLENBaEJEIiwiZmlsZSI6Imhhc0NvbW1hbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgY29tbWFuZEV4aXN0cyBmcm9tICdjb21tYW5kLWV4aXN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb21tYW5kKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gY29tbWFuZEV4aXN0cyhjb21tYW5kKS50aGVuKCgpID0+IHRydWUsICgpID0+IGZhbHNlKTtcbn1cbiJdfQ==