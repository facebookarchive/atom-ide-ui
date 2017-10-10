'use strict';

var cov_19pp4bxy2d = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/reduxLoggerMiddleware.js',
      hash = '397ac1d868d3e5221d73a8c620ca07b27fc263cc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/reduxLoggerMiddleware.js',
    statementMap: {
      '0': {
        start: {
          line: 42,
          column: 23
        },
        end: {
          line: 42,
          column: 79
        }
      },
      '1': {
        start: {
          line: 44,
          column: 23
        },
        end: {
          line: 45,
          column: 14
        }
      },
      '2': {
        start: {
          line: 44,
          column: 41
        },
        end: {
          line: 45,
          column: 14
        }
      },
      '3': {
        start: {
          line: 44,
          column: 61
        },
        end: {
          line: 45,
          column: 14
        }
      },
      '4': {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 14
        }
      },
      '5': {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 53,
          column: 3
        }
      },
      '6': {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 26
        }
      },
      '7': {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 55,
          column: 36
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 44,
            column: 23
          },
          end: {
            line: 44,
            column: 24
          }
        },
        loc: {
          start: {
            line: 44,
            column: 41
          },
          end: {
            line: 45,
            column: 14
          }
        },
        line: 44
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 44,
            column: 41
          },
          end: {
            line: 44,
            column: 42
          }
        },
        loc: {
          start: {
            line: 44,
            column: 61
          },
          end: {
            line: 45,
            column: 14
          }
        },
        line: 44
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 44,
            column: 61
          },
          end: {
            line: 44,
            column: 62
          }
        },
        loc: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 14
          }
        },
        line: 45
      },
      '3': {
        name: 'createLoggerMiddleware',
        decl: {
          start: {
            line: 47,
            column: 24
          },
          end: {
            line: 47,
            column: 46
          }
        },
        loc: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 56,
            column: 1
          }
        },
        line: 50
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        }, {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        }],
        line: 51
      }
    },
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
exports.default = createLoggerMiddleware;

var _reduxLogger;

function _load_reduxLogger() {
  return _reduxLogger = require('redux-logger');
}

var _featureConfig;

function _load_featureConfig() {
  return _featureConfig = _interopRequireDefault(require('./feature-config'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
To turn on debug console logging for the feature you are debugging, add to your config.cson:

"*":
  "nuclide":
    "redux-debug-loggers": [
      "<YOUR_APP_NAME>"
    ]
*/

// More options can be found here if you wish to enable them:
// https://github.com/evgenyrodionov/redux-logger#options
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

const enabledLoggers = (cov_19pp4bxy2d.s[0]++, (_featureConfig || _load_featureConfig()).default.getWithDefaults('redux-debug-loggers', []));

cov_19pp4bxy2d.s[1]++;
const noopMiddleware = store => {
  cov_19pp4bxy2d.f[0]++;
  cov_19pp4bxy2d.s[2]++;
  return next => {
    cov_19pp4bxy2d.f[1]++;
    cov_19pp4bxy2d.s[3]++;
    return action => {
      cov_19pp4bxy2d.f[2]++;
      cov_19pp4bxy2d.s[4]++;
      return next(action);
    };
  };
};

function createLoggerMiddleware(appName, loggerConfig) {
  cov_19pp4bxy2d.f[3]++;
  cov_19pp4bxy2d.s[5]++;

  if (!enabledLoggers.includes(appName)) {
    cov_19pp4bxy2d.b[0][0]++;
    cov_19pp4bxy2d.s[6]++;

    return noopMiddleware;
  } else {
    cov_19pp4bxy2d.b[0][1]++;
  }

  cov_19pp4bxy2d.s[7]++;
  return (0, (_reduxLogger || _load_reduxLogger()).createLogger)(loggerConfig);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4TG9nZ2VyTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVMb2dnZXJNaWRkbGV3YXJlIiwiZW5hYmxlZExvZ2dlcnMiLCJnZXRXaXRoRGVmYXVsdHMiLCJub29wTWlkZGxld2FyZSIsInN0b3JlIiwibmV4dCIsImFjdGlvbiIsImFwcE5hbWUiLCJsb2dnZXJDb25maWciLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQThDd0JBLHNCOzs7O0FBbEN4QjtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBcENBOzs7Ozs7Ozs7Ozs7QUF5Q0EsTUFBTUMseUNBQWlCLGtEQUFjQyxlQUFkLENBQThCLHFCQUE5QixFQUFxRCxFQUFyRCxDQUFqQixDQUFOOzs7QUFFQSxNQUFNQyxpQkFBa0JDLEtBQUQsSUFBa0I7QUFBQTtBQUFBO0FBQUEsU0FBQ0MsSUFBRCxJQUFvQjtBQUFBO0FBQUE7QUFBQSxXQUFDQyxNQUFELElBQzNEO0FBQUE7QUFBQTtBQUFBLGtCQUFLQSxNQUFMO0FBQVksS0FEK0M7QUFDL0MsR0FEMkI7QUFDM0IsQ0FEZDs7QUFHZSxTQUFTTixzQkFBVCxDQUNiTyxPQURhLEVBRWJDLFlBRmEsRUFHYjtBQUFBO0FBQUE7O0FBQ0EsTUFBSSxDQUFDUCxlQUFlUSxRQUFmLENBQXdCRixPQUF4QixDQUFMLEVBQXVDO0FBQUE7QUFBQTs7QUFDckMsV0FBT0osY0FBUDtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQURBO0FBS0EsU0FBTyx3REFBYUssWUFBYixDQUFQO0FBQ0QiLCJmaWxlIjoicmVkdXhMb2dnZXJNaWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IHtjcmVhdGVMb2dnZXJ9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5pbXBvcnQgZmVhdHVyZUNvbmZpZyBmcm9tICcuL2ZlYXR1cmUtY29uZmlnJztcblxuLypcblRvIHR1cm4gb24gZGVidWcgY29uc29sZSBsb2dnaW5nIGZvciB0aGUgZmVhdHVyZSB5b3UgYXJlIGRlYnVnZ2luZywgYWRkIHRvIHlvdXIgY29uZmlnLmNzb246XG5cblwiKlwiOlxuICBcIm51Y2xpZGVcIjpcbiAgICBcInJlZHV4LWRlYnVnLWxvZ2dlcnNcIjogW1xuICAgICAgXCI8WU9VUl9BUFBfTkFNRT5cIlxuICAgIF1cbiovXG5cbnR5cGUgU3RvcmUgPSB7XG4gIGdldFN0YXRlOiAoKSA9PiBtaXhlZCxcbn07XG5cbnR5cGUgQWN0aW9uID0ge1xuICB0eXBlOiBzdHJpbmcsXG59O1xuXG50eXBlIERpc3BhdGNoID0gQWN0aW9uID0+IEFjdGlvbjtcblxuLy8gTW9yZSBvcHRpb25zIGNhbiBiZSBmb3VuZCBoZXJlIGlmIHlvdSB3aXNoIHRvIGVuYWJsZSB0aGVtOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2V2Z2VueXJvZGlvbm92L3JlZHV4LWxvZ2dlciNvcHRpb25zXG50eXBlIExvZ2dlckNvbmZpZyA9IHtcbiAgZGlmZjogYm9vbGVhbixcbn07XG5cbmNvbnN0IGVuYWJsZWRMb2dnZXJzID0gZmVhdHVyZUNvbmZpZy5nZXRXaXRoRGVmYXVsdHMoJ3JlZHV4LWRlYnVnLWxvZ2dlcnMnLCBbXSk7XG5cbmNvbnN0IG5vb3BNaWRkbGV3YXJlID0gKHN0b3JlOiBTdG9yZSkgPT4gKG5leHQ6IERpc3BhdGNoKSA9PiAoYWN0aW9uOiBBY3Rpb24pID0+XG4gIG5leHQoYWN0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTG9nZ2VyTWlkZGxld2FyZShcbiAgYXBwTmFtZTogc3RyaW5nLFxuICBsb2dnZXJDb25maWc6ID9Mb2dnZXJDb25maWcsXG4pIHtcbiAgaWYgKCFlbmFibGVkTG9nZ2Vycy5pbmNsdWRlcyhhcHBOYW1lKSkge1xuICAgIHJldHVybiBub29wTWlkZGxld2FyZTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVMb2dnZXIobG9nZ2VyQ29uZmlnKTtcbn1cbiJdfQ==