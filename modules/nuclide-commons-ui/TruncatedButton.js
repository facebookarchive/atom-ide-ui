'use strict';

var cov_15w58ky7qa = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TruncatedButton.js',
      hash = '0b25318afe0666a7c2564d6080bd9d6a81413793',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TruncatedButton.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 51
        },
        end: {
          line: 26,
          column: 61
        }
      },
      '1': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 38,
          column: 6
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
            column: 23
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 25
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 36,
            column: 9
          },
          end: {
            line: 36,
            column: 26
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 36,
            column: 9
          },
          end: {
            line: 36,
            column: 17
          }
        }, {
          start: {
            line: 36,
            column: 21
          },
          end: {
            line: 36,
            column: 26
          }
        }],
        line: 36
      }
    },
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0
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

var _Button;

function _load_Button() {
  return _Button = require('./Button');
}

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

class TruncatedButton extends _react.Component {
  render() {
    cov_15w58ky7qa.f[0]++;

    const _ref = (cov_15w58ky7qa.s[0]++, this.props),
          { children, className, label } = _ref,
          props = _objectWithoutProperties(_ref, ['children', 'className', 'label']);
    cov_15w58ky7qa.s[1]++;
    return _react.createElement(
      (_Button || _load_Button()).Button,
      Object.assign({
        className: (0, (_classnames || _load_classnames()).default)('btn-block', 'nuclide-ui-truncated-button', className),
        title: label
      }, props),
      (cov_15w58ky7qa.b[0][0]++, children) || (cov_15w58ky7qa.b[0][1]++, label)
    );
  }
}
exports.default = TruncatedButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRydW5jYXRlZEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJUcnVuY2F0ZWRCdXR0b24iLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7QUFDQTs7Ozs7OzZOQWRBOzs7Ozs7Ozs7Ozs7QUF1QmUsTUFBTUEsZUFBTixTQUE4QixPQUFNQyxTQUFwQyxDQUFxRDtBQUNsRUMsV0FBcUI7QUFBQTs7QUFDbkIseUNBQStDLEtBQUtDLEtBQXBEO0FBQUEsVUFBTSxFQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBc0JDLEtBQXRCLEVBQU47QUFBQSxVQUFzQ0gsS0FBdEM7QUFEbUI7QUFFbkIsV0FDRTtBQUFBO0FBQUE7QUFDRSxtQkFBVyxpREFDVCxXQURTLEVBRVQsNkJBRlMsRUFHVEUsU0FIUyxDQURiO0FBTUUsZUFBT0M7QUFOVCxTQU9NSCxLQVBOO0FBUUcseUVBQVlHLEtBQVo7QUFSSCxLQURGO0FBWUQ7QUFmaUU7a0JBQS9DTixlIiwiZmlsZSI6IlRydW5jYXRlZEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAvLyAkRmxvd0ZpeE1lKD49MC41My4wKSBGbG93IHN1cHByZXNzXG4gIGNoaWxkcmVuPzogUmVhY3QuQ2hpbGRyZW4sXG4gIGxhYmVsPzogc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bmNhdGVkQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdC5Ob2RlIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgbGFiZWwsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICdidG4tYmxvY2snLFxuICAgICAgICAgICdudWNsaWRlLXVpLXRydW5jYXRlZC1idXR0b24nLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW4gfHwgbGFiZWx9XG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG59XG4iXX0=