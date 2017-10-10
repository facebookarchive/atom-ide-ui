'use strict';

var cov_2ub67y8pe = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/performanceNow.js',
      hash = '0447bb65feefe054afb9ddfa9357de8a56c168fc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/performanceNow.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 18
        },
        end: {
          line: 26,
          column: 35
        }
      },
      '1': {
        start: {
          line: 28,
          column: 37
        },
        end: {
          line: 28,
          column: 53
        }
      },
      '2': {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 52
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 18
          },
          end: {
            line: 26,
            column: 35
          }
        },
        line: 26
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        loc: {
          start: {
            line: 27,
            column: 18
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 27
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 35
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        }],
        line: 25
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

/* global performance */

/**
 * Polyfill for performance.now that works both on Atom (chrome) and node.
 * It returns a monotonically increasing timer in milliseconds.
 *
 * Usage:
 *   const now = performanceNow();
 *   // ... code you want to benchmark ...
 *   const timeItTookInMilliseconds = performanceNow() - now;
 */

exports.default = typeof performance !== 'undefined' ? (cov_2ub67y8pe.b[0][0]++, () => {
  cov_2ub67y8pe.f[0]++;
  cov_2ub67y8pe.s[0]++;
  return performance.now();
}) : (cov_2ub67y8pe.b[0][1]++, () => {
  cov_2ub67y8pe.f[1]++;

  const [seconds, nanoseconds] = (cov_2ub67y8pe.s[1]++, process.hrtime());
  cov_2ub67y8pe.s[2]++;
  return seconds * 1000 + nanoseconds / 1000000;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm1hbmNlTm93LmpzIl0sIm5hbWVzIjpbInBlcmZvcm1hbmNlIiwibm93Iiwic2Vjb25kcyIsIm5hbm9zZWNvbmRzIiwicHJvY2VzcyIsImhydGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQVlBOztBQUVBOzs7Ozs7Ozs7O2tCQVVnQixPQUFPQSxXQUFQLEtBQXVCLFdBQXZCLDZCQUNaLE1BQWM7QUFBQTtBQUFBO0FBQUEscUJBQVlDLEdBQVo7QUFBaUIsQ0FEbkIsOEJBRVosTUFBYztBQUFBOztBQUNaLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxXQUFWLDJCQUF5QkMsUUFBUUMsTUFBUixFQUF6QixDQUFOO0FBRFk7QUFFWixTQUFPSCxVQUFVLElBQVYsR0FBaUJDLGNBQWMsT0FBdEM7QUFDRCxDQUxXLEMiLCJmaWxlIjoicGVyZm9ybWFuY2VOb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG4vKiBnbG9iYWwgcGVyZm9ybWFuY2UgKi9cblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgcGVyZm9ybWFuY2Uubm93IHRoYXQgd29ya3MgYm90aCBvbiBBdG9tIChjaHJvbWUpIGFuZCBub2RlLlxuICogSXQgcmV0dXJucyBhIG1vbm90b25pY2FsbHkgaW5jcmVhc2luZyB0aW1lciBpbiBtaWxsaXNlY29uZHMuXG4gKlxuICogVXNhZ2U6XG4gKiAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlTm93KCk7XG4gKiAgIC8vIC4uLiBjb2RlIHlvdSB3YW50IHRvIGJlbmNobWFyayAuLi5cbiAqICAgY29uc3QgdGltZUl0VG9va0luTWlsbGlzZWNvbmRzID0gcGVyZm9ybWFuY2VOb3coKSAtIG5vdztcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuICA/ICgpOiBudW1iZXIgPT4gcGVyZm9ybWFuY2Uubm93KClcbiAgOiAoKTogbnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IFtzZWNvbmRzLCBuYW5vc2Vjb25kc10gPSBwcm9jZXNzLmhydGltZSgpO1xuICAgICAgcmV0dXJuIHNlY29uZHMgKiAxMDAwICsgbmFub3NlY29uZHMgLyAxMDAwMDAwO1xuICAgIH0pO1xuIl19