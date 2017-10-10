'use strict';

var cov_2i1tvqv9x = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/which.js',
      hash = 'e011e206e2d8df18596135ec27e6b9fbbb726dcc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/which.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 31,
          column: 3
        }
      },
      '1': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 16
        }
      },
      '2': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 70
        }
      },
      '3': {
        start: {
          line: 35,
          column: 20
        },
        end: {
          line: 35,
          column: 48
        }
      },
      '4': {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 36,
          column: 52
        }
      },
      '5': {
        start: {
          line: 37,
          column: 21
        },
        end: {
          line: 37,
          column: 68
        }
      },
      '6': {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      },
      '7': {
        start: {
          line: 39,
          column: 19
        },
        end: {
          line: 39,
          column: 75
        }
      },
      '8': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 35
        }
      },
      '9': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 16
        }
      }
    },
    fnMap: {
      '0': {
        name: 'sanitizePathForWindows',
        decl: {
          start: {
            line: 25,
            column: 9
          },
          end: {
            line: 25,
            column: 31
          }
        },
        loc: {
          start: {
            line: 25,
            column: 54
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 25
      },
      '1': {
        name: 'which',
        decl: {
          start: {
            line: 34,
            column: 31
          },
          end: {
            line: 34,
            column: 36
          }
        },
        loc: {
          start: {
            line: 34,
            column: 69
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 34
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        }, {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        }],
        line: 26
      },
      '1': {
        loc: {
          start: {
            line: 36,
            column: 23
          },
          end: {
            line: 36,
            column: 52
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 36,
            column: 35
          },
          end: {
            line: 36,
            column: 42
          }
        }, {
          start: {
            line: 36,
            column: 45
          },
          end: {
            line: 36,
            column: 52
          }
        }],
        line: 36
      },
      '2': {
        loc: {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 68
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 37,
            column: 33
          },
          end: {
            line: 37,
            column: 61
          }
        }, {
          start: {
            line: 37,
            column: 64
          },
          end: {
            line: 37,
            column: 68
          }
        }],
        line: 37
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
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
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

var _os = _interopRequireDefault(require('os'));

var _nuclideUri;

function _load_nuclideUri() {
  return _nuclideUri = _interopRequireDefault(require('./nuclideUri'));
}

var _process;

function _load_process() {
  return _process = require('./process');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Provides a cross-platform way to check whether a binary is available.
 *
 * We ran into problems with the npm `which` package (the nature of which I unfortunately don't
 * remember) so we can use this for now.
 */

function sanitizePathForWindows(path) {
  cov_2i1tvqv9x.f[0]++;
  cov_2i1tvqv9x.s[0]++;

  if ((_nuclideUri || _load_nuclideUri()).default.basename(path) === path) {
    cov_2i1tvqv9x.b[0][0]++;
    cov_2i1tvqv9x.s[1]++;

    // simple binary in $PATH like `flow`
    return path;
  } else {
    cov_2i1tvqv9x.b[0][1]++;
    cov_2i1tvqv9x.s[2]++;

    return `${(_nuclideUri || _load_nuclideUri()).default.dirname(path)}:${(_nuclideUri || _load_nuclideUri()).default.basename(path)}`;
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

exports.default = (() => {
  var _ref = (0, _asyncToGenerator.default)(function* (path) {
    cov_2i1tvqv9x.f[1]++;

    const isWindows = (cov_2i1tvqv9x.s[3]++, process.platform === 'win32');
    const whichCommand = (cov_2i1tvqv9x.s[4]++, isWindows ? (cov_2i1tvqv9x.b[1][0]++, 'where') : (cov_2i1tvqv9x.b[1][1]++, 'which'));
    const searchPath = (cov_2i1tvqv9x.s[5]++, isWindows ? (cov_2i1tvqv9x.b[2][0]++, sanitizePathForWindows(path)) : (cov_2i1tvqv9x.b[2][1]++, path));
    cov_2i1tvqv9x.s[6]++;
    try {
      const result = (cov_2i1tvqv9x.s[7]++, yield (0, (_process || _load_process()).runCommand)(whichCommand, [searchPath]).toPromise());
      cov_2i1tvqv9x.s[8]++;
      return result.split(_os.default.EOL)[0];
    } catch (e) {
      cov_2i1tvqv9x.s[9]++;

      return null;
    }
  });

  function which(_x) {
    return _ref.apply(this, arguments);
  }

  return which;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoaWNoLmpzIl0sIm5hbWVzIjpbInNhbml0aXplUGF0aEZvcldpbmRvd3MiLCJwYXRoIiwiYmFzZW5hbWUiLCJkaXJuYW1lIiwiaXNXaW5kb3dzIiwicHJvY2VzcyIsInBsYXRmb3JtIiwid2hpY2hDb21tYW5kIiwic2VhcmNoUGF0aCIsInJlc3VsdCIsInRvUHJvbWlzZSIsInNwbGl0IiwiRU9MIiwiZSIsIndoaWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7QUFFQTs7Ozs7OztBQU9BLFNBQVNBLHNCQUFULENBQWdDQyxJQUFoQyxFQUFzRDtBQUFBO0FBQUE7O0FBQ3BELE1BQUksNENBQVdDLFFBQVgsQ0FBb0JELElBQXBCLE1BQThCQSxJQUFsQyxFQUF3QztBQUFBO0FBQUE7O0FBQ3RDO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBSEQsTUFHTztBQUFBO0FBQUE7O0FBQ0wsV0FBUSxHQUFFLDRDQUFXRSxPQUFYLENBQW1CRixJQUFuQixDQUF5QixJQUFHLDRDQUFXQyxRQUFYLENBQW9CRCxJQUFwQixDQUEwQixFQUFoRTtBQUNEO0FBQ0YsQyxDQS9CRDs7Ozs7Ozs7Ozs7Ozs0Q0FpQ2dCLFdBQXFCQSxJQUFyQixFQUFxRDtBQUFBOztBQUNuRSxVQUFNRyxtQ0FBWUMsUUFBUUMsUUFBUixLQUFxQixPQUFqQyxDQUFOO0FBQ0EsVUFBTUMsc0NBQWVILHNDQUFZLE9BQVosOEJBQXNCLE9BQXRCLENBQWYsQ0FBTjtBQUNBLFVBQU1JLG9DQUFhSixzQ0FBWUosdUJBQXVCQyxJQUF2QixDQUFaLDhCQUEyQ0EsSUFBM0MsQ0FBYixDQUFOO0FBSG1FO0FBSW5FLFFBQUk7QUFDRixZQUFNUSxnQ0FBUyxNQUFNLDhDQUFXRixZQUFYLEVBQXlCLENBQUNDLFVBQUQsQ0FBekIsRUFBdUNFLFNBQXZDLEVBQWYsQ0FBTjtBQURFO0FBRUYsYUFBT0QsT0FBT0UsS0FBUCxDQUFhLFlBQUdDLEdBQWhCLEVBQXFCLENBQXJCLENBQVA7QUFDRCxLQUhELENBR0UsT0FBT0MsQ0FBUCxFQUFVO0FBQUE7O0FBQ1YsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHOztXQVY4QkMsSzs7OztTQUFBQSxLIiwiZmlsZSI6IndoaWNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCBudWNsaWRlVXJpIGZyb20gJy4vbnVjbGlkZVVyaSc7XG5cbmltcG9ydCB7cnVuQ29tbWFuZH0gZnJvbSAnLi9wcm9jZXNzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhIGNyb3NzLXBsYXRmb3JtIHdheSB0byBjaGVjayB3aGV0aGVyIGEgYmluYXJ5IGlzIGF2YWlsYWJsZS5cbiAqXG4gKiBXZSByYW4gaW50byBwcm9ibGVtcyB3aXRoIHRoZSBucG0gYHdoaWNoYCBwYWNrYWdlICh0aGUgbmF0dXJlIG9mIHdoaWNoIEkgdW5mb3J0dW5hdGVseSBkb24ndFxuICogcmVtZW1iZXIpIHNvIHdlIGNhbiB1c2UgdGhpcyBmb3Igbm93LlxuICovXG5cbmZ1bmN0aW9uIHNhbml0aXplUGF0aEZvcldpbmRvd3MocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKG51Y2xpZGVVcmkuYmFzZW5hbWUocGF0aCkgPT09IHBhdGgpIHtcbiAgICAvLyBzaW1wbGUgYmluYXJ5IGluICRQQVRIIGxpa2UgYGZsb3dgXG4gICAgcmV0dXJuIHBhdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke251Y2xpZGVVcmkuZGlybmFtZShwYXRoKX06JHtudWNsaWRlVXJpLmJhc2VuYW1lKHBhdGgpfWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFzeW5jIGZ1bmN0aW9uIHdoaWNoKHBhdGg6IHN0cmluZyk6IFByb21pc2U8P3N0cmluZz4ge1xuICBjb25zdCBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuICBjb25zdCB3aGljaENvbW1hbmQgPSBpc1dpbmRvd3MgPyAnd2hlcmUnIDogJ3doaWNoJztcbiAgY29uc3Qgc2VhcmNoUGF0aCA9IGlzV2luZG93cyA/IHNhbml0aXplUGF0aEZvcldpbmRvd3MocGF0aCkgOiBwYXRoO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJ1bkNvbW1hbmQod2hpY2hDb21tYW5kLCBbc2VhcmNoUGF0aF0pLnRvUHJvbWlzZSgpO1xuICAgIHJldHVybiByZXN1bHQuc3BsaXQob3MuRU9MKVswXTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcbiJdfQ==