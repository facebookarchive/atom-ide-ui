'use strict';

var cov_2bemxfvcnc = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/analytics.js',
      hash = '897603373cd77884c49e1442d80ee6857883dffd',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/analytics.js',
    statementMap: {
      '0': {
        start: {
          line: 33,
          column: 20
        },
        end: {
          line: 52,
          column: 1
        }
      },
      '1': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 28
        }
      },
      '2': {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 29
        }
      },
      '3': {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 44
        }
      },
      '4': {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 23
        }
      },
      '5': {
        start: {
          line: 54,
          column: 14
        },
        end: {
          line: 54,
          column: 25
        }
      },
      '6': {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 63,
          column: 2
        }
      },
      '7': {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 31
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 30
          }
        },
        line: 18
      },
      '1': {
        name: '(anonymous_1)',
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
            column: 24
          },
          end: {
            line: 19,
            column: 26
          }
        },
        line: 19
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 14
          },
          end: {
            line: 20,
            column: 16
          }
        },
        line: 20
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 22
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 58
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
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

var _atom = require('atom');

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

class NullTimingTracker {
  constructor(name) {
    cov_2bemxfvcnc.f[0]++;
  }
  onError(error) {
    cov_2bemxfvcnc.f[1]++;
  }
  onSuccess() {
    cov_2bemxfvcnc.f[2]++;
  }
}

const NullService = (cov_2bemxfvcnc.s[0]++, {
  track(eventName, values) {},
  trackEvent(event) {},
  trackEvents(events) {
    cov_2bemxfvcnc.s[1]++;

    return new _atom.Disposable();
  },
  trackImmediate(eventName, values) {
    cov_2bemxfvcnc.s[2]++;

    return Promise.resolve();
  },
  startTracking(eventName) {
    cov_2bemxfvcnc.s[3]++;

    return new NullTimingTracker(eventName);
  },
  trackTiming(eventName, operation) {
    cov_2bemxfvcnc.s[4]++;

    return operation();
  },
  TimingTracker: NullTimingTracker
});

let service = (cov_2bemxfvcnc.s[5]++, NullService);
cov_2bemxfvcnc.s[6]++;
atom.packages.serviceHub.consume('nuclide-analytics', '0.0.0', analyticsService => {
  cov_2bemxfvcnc.f[3]++;
  cov_2bemxfvcnc.s[7]++;

  // es module export is a live binding, so modifying this updates the value
  // for the consumer
  service = analyticsService;
});

exports.default = service;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5dGljcy5qcyJdLCJuYW1lcyI6WyJOdWxsVGltaW5nVHJhY2tlciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm9uRXJyb3IiLCJlcnJvciIsIm9uU3VjY2VzcyIsIk51bGxTZXJ2aWNlIiwidHJhY2siLCJldmVudE5hbWUiLCJ2YWx1ZXMiLCJ0cmFja0V2ZW50IiwiZXZlbnQiLCJ0cmFja0V2ZW50cyIsImV2ZW50cyIsInRyYWNrSW1tZWRpYXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdGFydFRyYWNraW5nIiwidHJhY2tUaW1pbmciLCJvcGVyYXRpb24iLCJUaW1pbmdUcmFja2VyIiwic2VydmljZSIsImF0b20iLCJwYWNrYWdlcyIsInNlcnZpY2VIdWIiLCJjb25zdW1lIiwiYW5hbHl0aWNzU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBOztBQWRBOzs7Ozs7Ozs7Ozs7QUFnQkEsTUFBTUEsaUJBQU4sQ0FBd0I7QUFDdEJDLGNBQVlDLElBQVosRUFBMEI7QUFBQTtBQUFFO0FBQzVCQyxVQUFRQyxLQUFSLEVBQXNCO0FBQUE7QUFBRTtBQUN4QkMsY0FBWTtBQUFBO0FBQUU7QUFIUTs7QUFnQnhCLE1BQU1DLHNDQUFjO0FBQ2xCQyxRQUFNQyxTQUFOLEVBQXlCQyxNQUF6QixFQUFnRSxDQUFFLENBRGhEO0FBRWxCQyxhQUFXQyxLQUFYLEVBQXVDLENBQUUsQ0FGdkI7QUFHbEJDLGNBQVlDLE1BQVosRUFBNEQ7QUFBQTs7QUFDMUQsV0FBTyxzQkFBUDtBQUNELEdBTGlCO0FBTWxCQyxpQkFDRU4sU0FERixFQUVFQyxNQUZGLEVBR2tCO0FBQUE7O0FBQ2hCLFdBQU9NLFFBQVFDLE9BQVIsRUFBUDtBQUNELEdBWGlCO0FBWWxCQyxnQkFBY1QsU0FBZCxFQUFvRDtBQUFBOztBQUNsRCxXQUFPLElBQUlSLGlCQUFKLENBQXNCUSxTQUF0QixDQUFQO0FBQ0QsR0FkaUI7QUFlbEJVLGNBQWVWLFNBQWYsRUFBa0NXLFNBQWxDLEVBQXlEO0FBQUE7O0FBQ3ZELFdBQU9BLFdBQVA7QUFDRCxHQWpCaUI7QUFrQmxCQyxpQkFBZXBCO0FBbEJHLENBQWQsQ0FBTjs7QUFxQkEsSUFBSXFCLGtDQUFVZixXQUFWLENBQUo7O0FBQ0FnQixLQUFLQyxRQUFMLENBQWNDLFVBQWQsQ0FBeUJDLE9BQXpCLENBQ0UsbUJBREYsRUFFRSxPQUZGLEVBR0VDLG9CQUFvQjtBQUFBO0FBQUE7O0FBQ2xCO0FBQ0E7QUFDQUwsWUFBVUssZ0JBQVY7QUFDRCxDQVBIOztrQkFVZUwsTyIsImZpbGUiOiJhbmFseXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7RGlzcG9zYWJsZX0gZnJvbSAnYXRvbSc7XG5cbmNsYXNzIE51bGxUaW1pbmdUcmFja2VyIHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7fVxuICBvbkVycm9yKGVycm9yOiBFcnJvcikge31cbiAgb25TdWNjZXNzKCkge31cbn1cblxudHlwZSBUcmFja2luZ0V2ZW50ID0ge1xuICB0eXBlOiBzdHJpbmcsXG4gIGRhdGE/OiBPYmplY3QsXG59O1xuXG50eXBlIFRpbWluZ1RyYWNrZXJUeXBlID0ge1xuICBvbkVycm9yKGVycm9yOiBFcnJvcik6IHZvaWQsXG4gIG9uU3VjY2VzcygpOiB2b2lkLFxufTtcblxuY29uc3QgTnVsbFNlcnZpY2UgPSB7XG4gIHRyYWNrKGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZXM/OiB7W2tleTogc3RyaW5nXTogbWl4ZWR9KTogdm9pZCB7fSxcbiAgdHJhY2tFdmVudChldmVudDogVHJhY2tpbmdFdmVudCk6IHZvaWQge30sXG4gIHRyYWNrRXZlbnRzKGV2ZW50czogT2JzZXJ2YWJsZTxUcmFja2luZ0V2ZW50Pik6IElEaXNwb3NhYmxlIHtcbiAgICByZXR1cm4gbmV3IERpc3Bvc2FibGUoKTtcbiAgfSxcbiAgdHJhY2tJbW1lZGlhdGUoXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgdmFsdWVzPzoge1trZXk6IHN0cmluZ106IG1peGVkfSxcbiAgKTogUHJvbWlzZTxtaXhlZD4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbiAgc3RhcnRUcmFja2luZyhldmVudE5hbWU6IHN0cmluZyk6IFRpbWluZ1RyYWNrZXJUeXBlIHtcbiAgICByZXR1cm4gbmV3IE51bGxUaW1pbmdUcmFja2VyKGV2ZW50TmFtZSk7XG4gIH0sXG4gIHRyYWNrVGltaW5nPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBvcGVyYXRpb246ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gb3BlcmF0aW9uKCk7XG4gIH0sXG4gIFRpbWluZ1RyYWNrZXI6IE51bGxUaW1pbmdUcmFja2VyLFxufTtcblxubGV0IHNlcnZpY2UgPSBOdWxsU2VydmljZTtcbmF0b20ucGFja2FnZXMuc2VydmljZUh1Yi5jb25zdW1lKFxuICAnbnVjbGlkZS1hbmFseXRpY3MnLFxuICAnMC4wLjAnLFxuICBhbmFseXRpY3NTZXJ2aWNlID0+IHtcbiAgICAvLyBlcyBtb2R1bGUgZXhwb3J0IGlzIGEgbGl2ZSBiaW5kaW5nLCBzbyBtb2RpZnlpbmcgdGhpcyB1cGRhdGVzIHRoZSB2YWx1ZVxuICAgIC8vIGZvciB0aGUgY29uc3VtZXJcbiAgICBzZXJ2aWNlID0gYW5hbHl0aWNzU2VydmljZTtcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7XG4iXX0=