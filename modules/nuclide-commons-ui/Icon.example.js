'use strict';

var cov_1p8nvvhw7n = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Icon.example.js',
      hash = '4ae531a5b619156442791a338ff5dcfbe0a29c23',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Icon.example.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 25,
          column: 1
        }
      },
      '1': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 24,
          column: 8
        }
      },
      '2': {
        start: {
          line: 27,
          column: 28
        },
        end: {
          line: 41,
          column: 1
        }
      },
      '3': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 40,
          column: 8
        }
      },
      '4': {
        start: {
          line: 43,
          column: 28
        },
        end: {
          line: 56,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 17,
            column: 20
          },
          end: {
            line: 17,
            column: 21
          }
        },
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 24,
            column: 8
          }
        },
        line: 18
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 27,
            column: 29
          }
        },
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 40,
            column: 8
          }
        },
        line: 28
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
      '1': 0
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
exports.IconExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _Icon;

function _load_Icon() {
  return _Icon = require('./Icon');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_1p8nvvhw7n.s[0]++; /**
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

const IconExample = () => {
  cov_1p8nvvhw7n.f[0]++;
  cov_1p8nvvhw7n.s[1]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_Icon || _load_Icon()).Icon, { icon: 'gift' }),
      _react.createElement((_Icon || _load_Icon()).Icon, { icon: 'heart' }),
      _react.createElement((_Icon || _load_Icon()).Icon, { icon: 'info' })
    )
  );
};

cov_1p8nvvhw7n.s[2]++;
const IconWithTextExample = () => {
  cov_1p8nvvhw7n.f[1]++;
  cov_1p8nvvhw7n.s[3]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        'div',
        null,
        _react.createElement(
          (_Icon || _load_Icon()).Icon,
          { icon: 'gift' },
          'gift'
        )
      ),
      _react.createElement(
        'div',
        null,
        _react.createElement(
          (_Icon || _load_Icon()).Icon,
          { icon: 'heart' },
          'heart'
        )
      ),
      _react.createElement(
        'div',
        null,
        _react.createElement(
          (_Icon || _load_Icon()).Icon,
          { icon: 'info' },
          'info'
        )
      )
    )
  );
};

const IconExamples = exports.IconExamples = (cov_1p8nvvhw7n.s[4]++, {
  sectionName: 'Icons',
  description: 'Octicons with optional text.',
  examples: [{
    title: 'Icons',
    component: IconExample
  }, {
    title: 'You can pass optional text as children.',
    component: IconWithTextExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb24uZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJJY29uRXhhbXBsZSIsIkljb25XaXRoVGV4dEV4YW1wbGUiLCJJY29uRXhhbXBsZXMiLCJzZWN0aW9uTmFtZSIsImRlc2NyaXB0aW9uIiwiZXhhbXBsZXMiLCJ0aXRsZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7dUJBZEE7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFNQSxjQUFjLE1BQ2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLDJEQUFNLE1BQUssTUFBWCxHQURGO0FBRUUsMkRBQU0sTUFBSyxPQUFYLEdBRkY7QUFHRSwyREFBTSxNQUFLLE1BQVg7QUFIRjtBQURGO0FBTU0sQ0FQUjs7O0FBVUEsTUFBTUMsc0JBQXNCLE1BQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLE1BQUssTUFBWDtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sTUFBSyxPQUFYO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxNQUFLLE1BQVg7QUFBQTtBQUFBO0FBREY7QUFQRjtBQURGO0FBWU0sQ0FiUjs7QUFnQk8sTUFBTUMsOERBQWU7QUFDMUJDLGVBQWEsT0FEYTtBQUUxQkMsZUFBYSw4QkFGYTtBQUcxQkMsWUFBVSxDQUNSO0FBQ0VDLFdBQU8sT0FEVDtBQUVFQyxlQUFXUDtBQUZiLEdBRFEsRUFLUjtBQUNFTSxXQUFPLHlDQURUO0FBRUVDLGVBQVdOO0FBRmIsR0FMUTtBQUhnQixDQUFmLENBQU4iLCJmaWxlIjoiSWNvbi5leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi9CbG9jayc7XG5pbXBvcnQge0ljb259IGZyb20gJy4vSWNvbic7XG5cbmNvbnN0IEljb25FeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPEljb24gaWNvbj1cImdpZnRcIiAvPlxuICAgICAgPEljb24gaWNvbj1cImhlYXJ0XCIgLz5cbiAgICAgIDxJY29uIGljb249XCJpbmZvXCIgLz5cbiAgICA8L0Jsb2NrPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEljb25XaXRoVGV4dEV4YW1wbGUgPSAoKTogUmVhY3QuRWxlbWVudDxhbnk+ID0+IChcbiAgPGRpdj5cbiAgICA8QmxvY2s+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SWNvbiBpY29uPVwiZ2lmdFwiPmdpZnQ8L0ljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxJY29uIGljb249XCJoZWFydFwiPmhlYXJ0PC9JY29uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SWNvbiBpY29uPVwiaW5mb1wiPmluZm88L0ljb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Jsb2NrPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBJY29uRXhhbXBsZXMgPSB7XG4gIHNlY3Rpb25OYW1lOiAnSWNvbnMnLFxuICBkZXNjcmlwdGlvbjogJ09jdGljb25zIHdpdGggb3B0aW9uYWwgdGV4dC4nLFxuICBleGFtcGxlczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnSWNvbnMnLFxuICAgICAgY29tcG9uZW50OiBJY29uRXhhbXBsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnWW91IGNhbiBwYXNzIG9wdGlvbmFsIHRleHQgYXMgY2hpbGRyZW4uJyxcbiAgICAgIGNvbXBvbmVudDogSWNvbldpdGhUZXh0RXhhbXBsZSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==