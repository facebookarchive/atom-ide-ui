'use strict';

var cov_27pqsru7e0 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-busy-signal/lib/BusySignalSingleton.js',
      hash = '5cc52a25130c9d5c44951e45f9f527237e4e1d97',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-busy-signal/lib/BusySignalSingleton.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 38
        }
      },
      '1': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 56
        }
      },
      '2': {
        start: {
          line: 41,
          column: 23
        },
        end: {
          line: 41,
          column: 54
        }
      },
      '3': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 46,
          column: 5
        }
      },
      '4': {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 23
        }
      },
      '5': {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 27
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 42
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 12
          },
          end: {
            line: 23,
            column: 14
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
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
            column: 70
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 40,
            column: 16
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 40
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 26,
            column: 41
          },
          end: {
            line: 26,
            column: 54
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 26,
            column: 41
          },
          end: {
            line: 26,
            column: 48
          }
        }, {
          start: {
            line: 26,
            column: 52
          },
          end: {
            line: 26,
            column: 54
          }
        }],
        line: 26
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
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

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

class BusySignalSingleton {

  constructor(messageStore) {
    cov_27pqsru7e0.f[0]++;
    cov_27pqsru7e0.s[0]++;

    this._messageStore = messageStore;
  }

  dispose() {
    cov_27pqsru7e0.f[1]++;
  }

  reportBusy(title, options) {
    cov_27pqsru7e0.f[2]++;
    cov_27pqsru7e0.s[1]++;

    return this._messageStore.add(title, (cov_27pqsru7e0.b[0][0]++, options) || (cov_27pqsru7e0.b[0][1]++, {}));
  }

  /**
   * Publishes a 'busy' message with the given string. Marks it as done when the
   * promise returned by the given function is resolved or rejected.
   *
   * Used to indicate that some work is ongoing while the given asynchronous
   * function executes.
   */
  reportBusyWhile(title, f, options) {
    var _this = this;

    return (0, _asyncToGenerator.default)(function* () {
      cov_27pqsru7e0.f[3]++;

      const busySignal = (cov_27pqsru7e0.s[2]++, _this.reportBusy(title, options));
      cov_27pqsru7e0.s[3]++;
      try {
        cov_27pqsru7e0.s[4]++;

        return yield f();
      } finally {
        cov_27pqsru7e0.s[5]++;

        busySignal.dispose();
      }
    })();
  }
}
exports.default = BusySignalSingleton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1c3lTaWduYWxTaW5nbGV0b24uanMiXSwibmFtZXMiOlsiQnVzeVNpZ25hbFNpbmdsZXRvbiIsImNvbnN0cnVjdG9yIiwibWVzc2FnZVN0b3JlIiwiX21lc3NhZ2VTdG9yZSIsImRpc3Bvc2UiLCJyZXBvcnRCdXN5IiwidGl0bGUiLCJvcHRpb25zIiwiYWRkIiwicmVwb3J0QnVzeVdoaWxlIiwiZiIsImJ1c3lTaWduYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBZWUsTUFBTUEsbUJBQU4sQ0FBMEI7O0FBR3ZDQyxjQUFZQyxZQUFaLEVBQXdDO0FBQUE7QUFBQTs7QUFDdEMsU0FBS0MsYUFBTCxHQUFxQkQsWUFBckI7QUFDRDs7QUFFREUsWUFBVTtBQUFBO0FBQUU7O0FBRVpDLGFBQVdDLEtBQVgsRUFBMEJDLE9BQTFCLEVBQW9FO0FBQUE7QUFBQTs7QUFDbEUsV0FBTyxLQUFLSixhQUFMLENBQW1CSyxHQUFuQixDQUF1QkYsS0FBdkIsRUFBOEIsa0VBQVcsRUFBWCxDQUE5QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPTUcsaUJBQU4sQ0FDRUgsS0FERixFQUVFSSxDQUZGLEVBR0VILE9BSEYsRUFJYztBQUFBOztBQUFBO0FBQUE7O0FBQ1osWUFBTUkscUNBQWEsTUFBS04sVUFBTCxDQUFnQkMsS0FBaEIsRUFBdUJDLE9BQXZCLENBQWIsQ0FBTjtBQURZO0FBRVosVUFBSTtBQUFBOztBQUNGLGVBQU8sTUFBTUcsR0FBYjtBQUNELE9BRkQsU0FFVTtBQUFBOztBQUNSQyxtQkFBV1AsT0FBWDtBQUNEO0FBTlc7QUFPYjtBQS9Cc0M7a0JBQXBCSixtQiIsImZpbGUiOiJCdXN5U2lnbmFsU2luZ2xldG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IHR5cGUge0J1c3lTaWduYWxPcHRpb25zLCBCdXN5TWVzc2FnZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7TWVzc2FnZVN0b3JlfSBmcm9tICcuL01lc3NhZ2VTdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1c3lTaWduYWxTaW5nbGV0b24ge1xuICBfbWVzc2FnZVN0b3JlOiBNZXNzYWdlU3RvcmU7XG5cbiAgY29uc3RydWN0b3IobWVzc2FnZVN0b3JlOiBNZXNzYWdlU3RvcmUpIHtcbiAgICB0aGlzLl9tZXNzYWdlU3RvcmUgPSBtZXNzYWdlU3RvcmU7XG4gIH1cblxuICBkaXNwb3NlKCkge31cblxuICByZXBvcnRCdXN5KHRpdGxlOiBzdHJpbmcsIG9wdGlvbnM/OiBCdXN5U2lnbmFsT3B0aW9ucyk6IEJ1c3lNZXNzYWdlIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZVN0b3JlLmFkZCh0aXRsZSwgb3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogUHVibGlzaGVzIGEgJ2J1c3knIG1lc3NhZ2Ugd2l0aCB0aGUgZ2l2ZW4gc3RyaW5nLiBNYXJrcyBpdCBhcyBkb25lIHdoZW4gdGhlXG4gICAqIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGlzIHJlc29sdmVkIG9yIHJlamVjdGVkLlxuICAgKlxuICAgKiBVc2VkIHRvIGluZGljYXRlIHRoYXQgc29tZSB3b3JrIGlzIG9uZ29pbmcgd2hpbGUgdGhlIGdpdmVuIGFzeW5jaHJvbm91c1xuICAgKiBmdW5jdGlvbiBleGVjdXRlcy5cbiAgICovXG4gIGFzeW5jIHJlcG9ydEJ1c3lXaGlsZTxUPihcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGY6ICgpID0+IFByb21pc2U8VD4sXG4gICAgb3B0aW9ucz86IEJ1c3lTaWduYWxPcHRpb25zLFxuICApOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBidXN5U2lnbmFsID0gdGhpcy5yZXBvcnRCdXN5KHRpdGxlLCBvcHRpb25zKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGYoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYnVzeVNpZ25hbC5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=