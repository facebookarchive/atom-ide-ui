'use strict';

var cov_15j2z2x3f0 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Highlight.js',
      hash = '6feb937696186d911a815ada9c3e5f7e673e88fb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Highlight.js',
    statementMap: {
      '0': {
        start: {
          line: 29,
          column: 31
        },
        end: {
          line: 35,
          column: 2
        }
      },
      '1': {
        start: {
          line: 37,
          column: 33
        },
        end: {
          line: 43,
          column: 2
        }
      },
      '2': {
        start: {
          line: 45,
          column: 25
        },
        end: {
          line: 55,
          column: 1
        }
      },
      '3': {
        start: {
          line: 46,
          column: 58
        },
        end: {
          line: 46,
          column: 63
        }
      },
      '4': {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 63
        }
      },
      '5': {
        start: {
          line: 49,
          column: 23
        },
        end: {
          line: 49,
          column: 60
        }
      },
      '6': {
        start: {
          line: 50,
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
            line: 45,
            column: 25
          },
          end: {
            line: 45,
            column: 26
          }
        },
        loc: {
          start: {
            line: 45,
            column: 43
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 45
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 48,
            column: 29
          },
          end: {
            line: 48,
            column: 62
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 48,
            column: 45
          },
          end: {
            line: 48,
            column: 54
          }
        }, {
          start: {
            line: 48,
            column: 57
          },
          end: {
            line: 48,
            column: 62
          }
        }],
        line: 48
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
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
exports.Highlight = exports.HighlightColors = undefined;

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

const HighlightColors = exports.HighlightColors = (cov_15j2z2x3f0.s[0]++, Object.freeze({
  default: 'default',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error'
}));

const HighlightColorClassNames = (cov_15j2z2x3f0.s[1]++, Object.freeze({
  default: 'highlight',
  info: 'highlight-info',
  success: 'highlight-success',
  warning: 'highlight-warning',
  error: 'highlight-error'
}));

cov_15j2z2x3f0.s[2]++;
const Highlight = props => {
  cov_15j2z2x3f0.f[0]++;

  const _ref = (cov_15j2z2x3f0.s[3]++, props),
        { className, color, children } = _ref,
        remainingProps = _objectWithoutProperties(_ref, ['className', 'color', 'children']);
  const colorClassName = (cov_15j2z2x3f0.s[4]++, HighlightColorClassNames[color == null ? (cov_15j2z2x3f0.b[0][0]++, 'default') : (cov_15j2z2x3f0.b[0][1]++, color)]);
  const newClassName = (cov_15j2z2x3f0.s[5]++, (0, (_classnames || _load_classnames()).default)(colorClassName, className));
  cov_15j2z2x3f0.s[6]++;
  return _react.createElement(
    'span',
    Object.assign({ className: newClassName }, remainingProps),
    children
  );
};
exports.Highlight = Highlight;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhpZ2hsaWdodC5qcyJdLCJuYW1lcyI6WyJIaWdobGlnaHRDb2xvcnMiLCJPYmplY3QiLCJmcmVlemUiLCJkZWZhdWx0IiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZXJyb3IiLCJIaWdobGlnaHRDb2xvckNsYXNzTmFtZXMiLCJIaWdobGlnaHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvbG9yIiwiY2hpbGRyZW4iLCJyZW1haW5pbmdQcm9wcyIsImNvbG9yQ2xhc3NOYW1lIiwibmV3Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTs7QUFDQTs7Ozs7OzZOQWJBOzs7Ozs7Ozs7Ozs7QUE0Qk8sTUFBTUEsb0VBQWtCQyxPQUFPQyxNQUFQLENBQWM7QUFDM0NDLFdBQVMsU0FEa0M7QUFFM0NDLFFBQU0sTUFGcUM7QUFHM0NDLFdBQVMsU0FIa0M7QUFJM0NDLFdBQVMsU0FKa0M7QUFLM0NDLFNBQU87QUFMb0MsQ0FBZCxDQUFsQixDQUFOOztBQVFQLE1BQU1DLG1EQUEyQlAsT0FBT0MsTUFBUCxDQUFjO0FBQzdDQyxXQUFTLFdBRG9DO0FBRTdDQyxRQUFNLGdCQUZ1QztBQUc3Q0MsV0FBUyxtQkFIb0M7QUFJN0NDLFdBQVMsbUJBSm9DO0FBSzdDQyxTQUFPO0FBTHNDLENBQWQsQ0FBM0IsQ0FBTjs7O0FBUU8sTUFBTUUsWUFBYUMsS0FBRCxJQUFrQjtBQUFBOztBQUN6Qyx1Q0FBd0RBLEtBQXhEO0FBQUEsUUFBTSxFQUFDQyxTQUFELEVBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQU47QUFBQSxRQUFzQ0MsY0FBdEM7QUFDQSxRQUFNQyx5Q0FDSlAseUJBQXlCSSxTQUFTLElBQVQsOEJBQWdCLFNBQWhCLCtCQUE0QkEsS0FBNUIsQ0FBekIsQ0FESSxDQUFOO0FBRUEsUUFBTUksdUNBQWUsaURBQVdELGNBQVgsRUFBMkJKLFNBQTNCLENBQWYsQ0FBTjtBQUp5QztBQUt6QyxTQUNFO0FBQUE7QUFBQSxvQkFBTSxXQUFXSyxZQUFqQixJQUFtQ0YsY0FBbkM7QUFDR0Q7QUFESCxHQURGO0FBS0QsQ0FWTSIsImZpbGUiOiJIaWdobGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgSGlnaGxpZ2h0Q29sb3IgPVxuICB8ICdkZWZhdWx0J1xuICB8ICdpbmZvJ1xuICB8ICdzdWNjZXNzJ1xuICB8ICd3YXJuaW5nJ1xuICB8ICdlcnJvcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgY29sb3I/OiBIaWdobGlnaHRDb2xvcixcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0Q29sb3JzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGRlZmF1bHQ6ICdkZWZhdWx0JyxcbiAgaW5mbzogJ2luZm8nLFxuICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgZXJyb3I6ICdlcnJvcicsXG59KTtcblxuY29uc3QgSGlnaGxpZ2h0Q29sb3JDbGFzc05hbWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGRlZmF1bHQ6ICdoaWdobGlnaHQnLFxuICBpbmZvOiAnaGlnaGxpZ2h0LWluZm8nLFxuICBzdWNjZXNzOiAnaGlnaGxpZ2h0LXN1Y2Nlc3MnLFxuICB3YXJuaW5nOiAnaGlnaGxpZ2h0LXdhcm5pbmcnLFxuICBlcnJvcjogJ2hpZ2hsaWdodC1lcnJvcicsXG59KTtcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3Qge2NsYXNzTmFtZSwgY29sb3IsIGNoaWxkcmVuLCAuLi5yZW1haW5pbmdQcm9wc30gPSBwcm9wcztcbiAgY29uc3QgY29sb3JDbGFzc05hbWUgPVxuICAgIEhpZ2hsaWdodENvbG9yQ2xhc3NOYW1lc1tjb2xvciA9PSBudWxsID8gJ2RlZmF1bHQnIDogY29sb3JdO1xuICBjb25zdCBuZXdDbGFzc05hbWUgPSBjbGFzc25hbWVzKGNvbG9yQ2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17bmV3Q2xhc3NOYW1lfSB7Li4ucmVtYWluaW5nUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG4iXX0=