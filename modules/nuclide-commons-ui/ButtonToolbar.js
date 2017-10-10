'use strict';

var cov_2o5m9nblqw = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ButtonToolbar.js',
      hash = 'b9c3457fe3999a74b3e51245b1a94b00d291357a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ButtonToolbar.js',
    statementMap: {
      '0': {
        start: {
          line: 24,
          column: 29
        },
        end: {
          line: 30,
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
          column: 2
        },
        end: {
          line: 29,
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
            column: 29
          },
          end: {
            line: 24,
            column: 30
          }
        },
        loc: {
          start: {
            line: 24,
            column: 47
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 24
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
exports.ButtonToolbar = undefined;

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Visually groups Buttons passed in as children.
 */
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

cov_2o5m9nblqw.s[0]++;
const ButtonToolbar = exports.ButtonToolbar = props => {
  cov_2o5m9nblqw.f[0]++;

  const { children, className } = (cov_2o5m9nblqw.s[1]++, props);
  cov_2o5m9nblqw.s[2]++;
  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    _react.createElement(
      'div',
      { className: (0, (_classnames || _load_classnames()).default)('btn-toolbar', className) },
      children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvblRvb2xiYXIuanMiXSwibmFtZXMiOlsiQnV0dG9uVG9vbGJhciIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTs7QUFDQTs7Ozs7O0FBT0E7OztBQXBCQTs7Ozs7Ozs7Ozs7OztBQXVCTyxNQUFNQSx3Q0FBaUJDLEtBQUQsSUFBa0I7QUFBQTs7QUFDN0MsUUFBTSxFQUFDQyxRQUFELEVBQVdDLFNBQVgsNkJBQXdCRixLQUF4QixDQUFOO0FBRDZDO0FBRTdDO0FBQ0U7QUFDQTtBQUFBO0FBQUEsUUFBSyxXQUFXLGlEQUFXLGFBQVgsRUFBMEJFLFNBQTFCLENBQWhCO0FBQXVERDtBQUF2RDtBQUZGO0FBSUQsQ0FOTSIsImZpbGUiOiJCdXR0b25Ub29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBtaXhlZCxcbn07XG5cbi8qKlxuICogVmlzdWFsbHkgZ3JvdXBzIEJ1dHRvbnMgcGFzc2VkIGluIGFzIGNoaWxkcmVuLlxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uVG9vbGJhciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3Qge2NoaWxkcmVuLCBjbGFzc05hbWV9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgLy8gJEZsb3dGaXhNZSg+PTAuNTMuMCkgRmxvdyBzdXBwcmVzc1xuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdidG4tdG9vbGJhcicsIGNsYXNzTmFtZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn07XG4iXX0=