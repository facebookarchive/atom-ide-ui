'use strict';

var cov_mlnf3vsb7 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/UnstyledButton.js',
      hash = '51db22def433decee3c68fe2ed862354a47ac371',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/UnstyledButton.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 35
        }
      },
      '1': {
        start: {
          line: 29,
          column: 43
        },
        end: {
          line: 29,
          column: 60
        }
      },
      '2': {
        start: {
          line: 32,
          column: 34
        },
        end: {
          line: 32,
          column: 44
        }
      },
      '3': {
        start: {
          line: 33,
          column: 20
        },
        end: {
          line: 33,
          column: 71
        }
      },
      '4': {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 72
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
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
            column: 16
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 13
          }
        },
        loc: {
          start: {
            line: 29,
            column: 43
          },
          end: {
            line: 29,
            column: 60
          }
        },
        line: 29
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 31
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 31
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

var _react = _interopRequireDefault(require('react'));

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _nullthrows;

function _load_nullthrows() {
  return _nullthrows = _interopRequireDefault(require('nullthrows'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
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

class UnstyledButton extends _react.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._setRef = node => {
      cov_mlnf3vsb7.f[1]++;
      cov_mlnf3vsb7.s[1]++;
      return this._node = node;
    }, _temp;
  }

  focus() {
    cov_mlnf3vsb7.f[0]++;
    cov_mlnf3vsb7.s[0]++;

    (0, (_nullthrows || _load_nullthrows()).default)(this._node).focus();
  }

  render() {
    cov_mlnf3vsb7.f[2]++;

    const _ref = (cov_mlnf3vsb7.s[2]++, this.props),
          { className } = _ref,
          props = _objectWithoutProperties(_ref, ['className']);
    const classes = (cov_mlnf3vsb7.s[3]++, (0, (_classnames || _load_classnames()).default)('nuclide-ui-unstyled-button', className));
    // eslint-disable-next-line rulesdir/use-nuclide-ui-components
    cov_mlnf3vsb7.s[4]++;
    return _react.default.createElement('button', Object.assign({ className: classes, ref: this._setRef }, props));
  }
}
exports.default = UnstyledButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVuc3R5bGVkQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlVuc3R5bGVkQnV0dG9uIiwiQ29tcG9uZW50IiwiX3NldFJlZiIsIm5vZGUiLCJfbm9kZSIsImZvY3VzIiwicmVuZGVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7Ozs2TkFkQTs7Ozs7Ozs7Ozs7O0FBb0JlLE1BQU1BLGNBQU4sU0FBNkIsZUFBTUMsU0FBbkMsQ0FBb0Q7QUFBQTtBQUFBOztBQUFBLHdDQVFqRUMsT0FSaUUsR0FRdERDLElBQUQsSUFBK0I7QUFBQTtBQUFBO0FBQUEsa0JBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUFpQixLQVJPO0FBQUE7O0FBSWpFRSxVQUFjO0FBQUE7QUFBQTs7QUFDWixxREFBVyxLQUFLRCxLQUFoQixFQUF1QkMsS0FBdkI7QUFDRDs7QUFJREMsV0FBNkI7QUFBQTs7QUFDM0Isd0NBQThCLEtBQUtDLEtBQW5DO0FBQUEsVUFBTSxFQUFDQyxTQUFELEVBQU47QUFBQSxVQUFxQkQsS0FBckI7QUFDQSxVQUFNRSxpQ0FBVSxpREFBVyw0QkFBWCxFQUF5Q0QsU0FBekMsQ0FBVixDQUFOO0FBQ0E7QUFIMkI7QUFJM0IsV0FBTyx1REFBUSxXQUFXQyxPQUFuQixFQUE0QixLQUFLLEtBQUtQLE9BQXRDLElBQW1ESyxLQUFuRCxFQUFQO0FBQ0Q7QUFmZ0U7a0JBQTlDUCxjIiwiZmlsZSI6IlVuc3R5bGVkQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG51bGx0aHJvd3MgZnJvbSAnbnVsbHRocm93cyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuc3R5bGVkQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHByb3BzOiBQcm9wcztcbiAgX25vZGU6ID9IVE1MQnV0dG9uRWxlbWVudDtcblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBudWxsdGhyb3dzKHRoaXMuX25vZGUpLmZvY3VzKCk7XG4gIH1cblxuICBfc2V0UmVmID0gKG5vZGU6ID9IVE1MQnV0dG9uRWxlbWVudCkgPT4gKHRoaXMuX25vZGUgPSBub2RlKTtcblxuICByZW5kZXIoKTogUmVhY3QkRWxlbWVudDxhbnk+IHtcbiAgICBjb25zdCB7Y2xhc3NOYW1lLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKCdudWNsaWRlLXVpLXVuc3R5bGVkLWJ1dHRvbicsIGNsYXNzTmFtZSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJ1bGVzZGlyL3VzZS1udWNsaWRlLXVpLWNvbXBvbmVudHNcbiAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXN9IHJlZj17dGhpcy5fc2V0UmVmfSB7Li4ucHJvcHN9IC8+O1xuICB9XG59XG4iXX0=