'use strict';

var cov_1kksg02xuu = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/DiagnosticsTraceItem.js',
      hash = 'b2db1be88efb109c9e887c6c2a85f77d85a587d9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/DiagnosticsTraceItem.js',
    statementMap: {
      '0': {
        start: {
          line: 24,
          column: 36
        },
        end: {
          line: 55,
          column: 1
        }
      },
      '1': {
        start: {
          line: 25,
          column: 32
        },
        end: {
          line: 25,
          column: 37
        }
      },
      '2': {
        start: {
          line: 26,
          column: 16
        },
        end: {
          line: 26,
          column: 20
        }
      },
      '3': {
        start: {
          line: 28,
          column: 15
        },
        end: {
          line: 28,
          column: 29
        }
      },
      '4': {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 48,
          column: 3
        }
      },
      '5': {
        start: {
          line: 31,
          column: 29
        },
        end: {
          line: 31,
          column: 62
        }
      },
      '6': {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 32,
          column: 32
        }
      },
      '7': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      '8': {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 51
        }
      },
      '9': {
        start: {
          line: 36,
          column: 20
        },
        end: {
          line: 39,
          column: 5
        }
      },
      '10': {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 30
        }
      },
      '11': {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 79
        }
      },
      '12': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 47,
          column: 6
        }
      },
      '13': {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 54,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 24,
            column: 36
          },
          end: {
            line: 24,
            column: 37
          }
        },
        loc: {
          start: {
            line: 24,
            column: 74
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 24
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 36,
            column: 20
          },
          end: {
            line: 36,
            column: 21
          }
        },
        loc: {
          start: {
            line: 36,
            column: 54
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 36
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        }, {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        }],
        line: 30
      },
      '1': {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        }],
        line: 33
      },
      '2': {
        loc: {
          start: {
            line: 38,
            column: 34
          },
          end: {
            line: 38,
            column: 73
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 38,
            column: 48
          },
          end: {
            line: 38,
            column: 69
          }
        }, {
          start: {
            line: 38,
            column: 72
          },
          end: {
            line: 38,
            column: 73
          }
        }],
        line: 38
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
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0
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
exports.DiagnosticsTraceItem = undefined;

var _react = _interopRequireWildcard(require('react'));

var _DiagnosticsMessageText;

function _load_DiagnosticsMessageText() {
  return _DiagnosticsMessageText = require('./DiagnosticsMessageText');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// TODO move LESS styles to nuclide-ui
cov_1kksg02xuu.s[0]++; /**
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

const DiagnosticsTraceItem = exports.DiagnosticsTraceItem = props => {
  cov_1kksg02xuu.f[0]++;

  const { trace, goToLocation } = (cov_1kksg02xuu.s[1]++, props);
  let locSpan = (cov_1kksg02xuu.s[2]++, null);
  // Local variable so that the type refinement holds in the onClick handler.
  const path = (cov_1kksg02xuu.s[3]++, trace.filePath);
  // flowlint-next-line sketchy-null-string:off
  cov_1kksg02xuu.s[4]++;
  if (path) {
    cov_1kksg02xuu.b[0][0]++;

    const [, relativePath] = (cov_1kksg02xuu.s[5]++, atom.project.relativizePath(path));
    let locString = (cov_1kksg02xuu.s[6]++, relativePath);
    cov_1kksg02xuu.s[7]++;
    if (trace.range) {
      cov_1kksg02xuu.b[1][0]++;
      cov_1kksg02xuu.s[8]++;

      locString += `:${trace.range.start.row + 1}`;
    } else {
      cov_1kksg02xuu.b[1][1]++;
    }
    cov_1kksg02xuu.s[9]++;
    const onClick = event => {
      cov_1kksg02xuu.f[1]++;
      cov_1kksg02xuu.s[10]++;

      event.stopPropagation();
      cov_1kksg02xuu.s[11]++;
      goToLocation(path, Math.max(trace.range ? (cov_1kksg02xuu.b[2][0]++, trace.range.start.row) : (cov_1kksg02xuu.b[2][1]++, 0), 0));
    };
    cov_1kksg02xuu.s[12]++;
    locSpan = _react.createElement(
      'span',
      null,
      ':',
      ' ',
      _react.createElement(
        'a',
        { href: '#', onClick: onClick },
        locString
      )
    );
  } else {
    cov_1kksg02xuu.b[0][1]++;
  }
  cov_1kksg02xuu.s[13]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement((_DiagnosticsMessageText || _load_DiagnosticsMessageText()).DiagnosticsMessageText, { message: trace }),
    locSpan
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpYWdub3N0aWNzVHJhY2VJdGVtLmpzIl0sIm5hbWVzIjpbIkRpYWdub3N0aWNzVHJhY2VJdGVtIiwicHJvcHMiLCJ0cmFjZSIsImdvVG9Mb2NhdGlvbiIsImxvY1NwYW4iLCJwYXRoIiwiZmlsZVBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJhdG9tIiwicHJvamVjdCIsInJlbGF0aXZpemVQYXRoIiwibG9jU3RyaW5nIiwicmFuZ2UiLCJzdGFydCIsInJvdyIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIk1hdGgiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFPQTt1QkF0QkE7Ozs7Ozs7Ozs7OztBQXVCTyxNQUFNQSxzREFBd0JDLEtBQUQsSUFBc0M7QUFBQTs7QUFDeEUsUUFBTSxFQUFDQyxLQUFELEVBQVFDLFlBQVIsNkJBQXdCRixLQUF4QixDQUFOO0FBQ0EsTUFBSUcsa0NBQVUsSUFBVixDQUFKO0FBQ0E7QUFDQSxRQUFNQywrQkFBT0gsTUFBTUksUUFBYixDQUFOO0FBQ0E7QUFMd0U7QUFNeEUsTUFBSUQsSUFBSixFQUFVO0FBQUE7O0FBQ1IsVUFBTSxHQUFHRSxZQUFILDRCQUFtQkMsS0FBS0MsT0FBTCxDQUFhQyxjQUFiLENBQTRCTCxJQUE1QixDQUFuQixDQUFOO0FBQ0EsUUFBSU0sb0NBQVlKLFlBQVosQ0FBSjtBQUZRO0FBR1IsUUFBSUwsTUFBTVUsS0FBVixFQUFpQjtBQUFBO0FBQUE7O0FBQ2ZELG1CQUFjLElBQUdULE1BQU1VLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsR0FBbEIsR0FBd0IsQ0FBRSxFQUEzQztBQUNELEtBRkQ7QUFBQTtBQUFBO0FBSFE7QUFNUixVQUFNQyxVQUFXQyxLQUFELElBQWtDO0FBQUE7QUFBQTs7QUFDaERBLFlBQU1DLGVBQU47QUFEZ0Q7QUFFaERkLG1CQUFhRSxJQUFiLEVBQW1CYSxLQUFLQyxHQUFMLENBQVNqQixNQUFNVSxLQUFOLDhCQUFjVixNQUFNVSxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLEdBQWhDLCtCQUFzQyxDQUF0QyxDQUFULEVBQWtELENBQWxELENBQW5CO0FBQ0QsS0FIRDtBQU5RO0FBVVJWLGNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDSSxTQURKO0FBRUU7QUFBQTtBQUFBLFVBQUcsTUFBSyxHQUFSLEVBQVksU0FBU1csT0FBckI7QUFDR0o7QUFESDtBQUZGLEtBREY7QUFRRCxHQWxCRDtBQUFBO0FBQUE7QUFOd0U7QUF5QnhFLFNBQ0U7QUFBQTtBQUFBO0FBQ0UsK0dBQXdCLFNBQVNULEtBQWpDLEdBREY7QUFFR0U7QUFGSCxHQURGO0FBTUQsQ0EvQk0iLCJmaWxlIjoiRGlhZ25vc3RpY3NUcmFjZUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7RGlhZ25vc3RpY1RyYWNlfSBmcm9tICcuLi8uLi8uLi9hdG9tLWlkZS1kaWFnbm9zdGljcy9saWIvdHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RpYWdub3N0aWNzTWVzc2FnZVRleHR9IGZyb20gJy4vRGlhZ25vc3RpY3NNZXNzYWdlVGV4dCc7XG5cbnR5cGUgRGlhZ25vc3RpY3NUcmFjZUl0ZW1Qcm9wcyA9IHtcbiAgdHJhY2U6IERpYWdub3N0aWNUcmFjZSxcbiAgZ29Ub0xvY2F0aW9uOiAocGF0aDogc3RyaW5nLCBsaW5lOiBudW1iZXIpID0+IG1peGVkLFxufTtcblxuLy8gVE9ETyBtb3ZlIExFU1Mgc3R5bGVzIHRvIG51Y2xpZGUtdWlcbmV4cG9ydCBjb25zdCBEaWFnbm9zdGljc1RyYWNlSXRlbSA9IChwcm9wczogRGlhZ25vc3RpY3NUcmFjZUl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB7dHJhY2UsIGdvVG9Mb2NhdGlvbn0gPSBwcm9wcztcbiAgbGV0IGxvY1NwYW4gPSBudWxsO1xuICAvLyBMb2NhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB0eXBlIHJlZmluZW1lbnQgaG9sZHMgaW4gdGhlIG9uQ2xpY2sgaGFuZGxlci5cbiAgY29uc3QgcGF0aCA9IHRyYWNlLmZpbGVQYXRoO1xuICAvLyBmbG93bGludC1uZXh0LWxpbmUgc2tldGNoeS1udWxsLXN0cmluZzpvZmZcbiAgaWYgKHBhdGgpIHtcbiAgICBjb25zdCBbLCByZWxhdGl2ZVBhdGhdID0gYXRvbS5wcm9qZWN0LnJlbGF0aXZpemVQYXRoKHBhdGgpO1xuICAgIGxldCBsb2NTdHJpbmcgPSByZWxhdGl2ZVBhdGg7XG4gICAgaWYgKHRyYWNlLnJhbmdlKSB7XG4gICAgICBsb2NTdHJpbmcgKz0gYDoke3RyYWNlLnJhbmdlLnN0YXJ0LnJvdyArIDF9YDtcbiAgICB9XG4gICAgY29uc3Qgb25DbGljayA9IChldmVudDogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGdvVG9Mb2NhdGlvbihwYXRoLCBNYXRoLm1heCh0cmFjZS5yYW5nZSA/IHRyYWNlLnJhbmdlLnN0YXJ0LnJvdyA6IDAsIDApKTtcbiAgICB9O1xuICAgIGxvY1NwYW4gPSAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgOnsnICd9XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAge2xvY1N0cmluZ31cbiAgICAgICAgPC9hPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERpYWdub3N0aWNzTWVzc2FnZVRleHQgbWVzc2FnZT17dHJhY2V9IC8+XG4gICAgICB7bG9jU3Bhbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=