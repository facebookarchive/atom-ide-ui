'use strict';

var cov_2o44dfunjq = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Toolbar.js',
      hash = '124aff52629b8a481b9657983c4ceef65f47c65f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Toolbar.js',
    statementMap: {
      '0': {
        start: {
          line: 23,
          column: 23
        },
        end: {
          line: 37,
          column: 1
        }
      },
      '1': {
        start: {
          line: 24,
          column: 20
        },
        end: {
          line: 31,
          column: 3
        }
      },
      '2': {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 36,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 23,
            column: 23
          },
          end: {
            line: 23,
            column: 24
          }
        },
        loc: {
          start: {
            line: 23,
            column: 41
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 23
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
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
exports.Toolbar = undefined;

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _react = _interopRequireWildcard(require('react'));

var _string;

function _load_string() {
  return _string = require('nuclide-commons/string');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_2o44dfunjq.s[0]++; /**
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

const Toolbar = exports.Toolbar = props => {
  cov_2o44dfunjq.f[0]++;

  const className = (cov_2o44dfunjq.s[1]++, (0, (_classnames || _load_classnames()).default)('nuclide-ui-toolbar', {
    [`nuclide-ui-toolbar--${(0, (_string || _load_string()).maybeToString)(props.location)}`]: props.location != null
  }, props.className));

  cov_2o44dfunjq.s[2]++;
  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    _react.createElement(
      'div',
      { className: className },
      props.children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2xiYXIuanMiXSwibmFtZXMiOlsiVG9vbGJhciIsInByb3BzIiwiY2xhc3NOYW1lIiwibG9jYXRpb24iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUFBOztBQUNBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7dUJBZEE7Ozs7Ozs7Ozs7OztBQXNCTyxNQUFNQSw0QkFBV0MsS0FBRCxJQUFrQjtBQUFBOztBQUN2QyxRQUFNQyxvQ0FBWSxpREFDaEIsb0JBRGdCLEVBRWhCO0FBQ0UsS0FBRSx1QkFBc0IsK0NBQWNELE1BQU1FLFFBQXBCLENBQThCLEVBQXRELEdBQ0VGLE1BQU1FLFFBQU4sSUFBa0I7QUFGdEIsR0FGZ0IsRUFNaEJGLE1BQU1DLFNBTlUsQ0FBWixDQUFOOztBQUR1QztBQVV2QztBQUNFO0FBQ0E7QUFBQTtBQUFBLFFBQUssV0FBV0EsU0FBaEI7QUFBNEJELFlBQU1HO0FBQWxDO0FBRkY7QUFJRCxDQWRNIiwiZmlsZSI6IlRvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7bWF5YmVUb1N0cmluZ30gZnJvbSAnbnVjbGlkZS1jb21tb25zL3N0cmluZyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogbWl4ZWQsXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgbG9jYXRpb24/OiAndG9wJyB8ICdib3R0b20nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRvb2xiYXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgJ251Y2xpZGUtdWktdG9vbGJhcicsXG4gICAge1xuICAgICAgW2BudWNsaWRlLXVpLXRvb2xiYXItLSR7bWF5YmVUb1N0cmluZyhwcm9wcy5sb2NhdGlvbil9YF06XG4gICAgICAgIHByb3BzLmxvY2F0aW9uICE9IG51bGwsXG4gICAgfSxcbiAgICBwcm9wcy5jbGFzc05hbWUsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyAkRmxvd0ZpeE1lKD49MC41My4wKSBGbG93IHN1cHByZXNzXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICApO1xufTtcbiJdfQ==