'use strict';

var cov_y88nyjubg = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ButtonGroup.js',
      hash = '6f35bf3d5c19121dd2352b929f208e2e08526620',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ButtonGroup.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 32
        },
        end: {
          line: 30,
          column: 2
        }
      },
      '1': {
        start: {
          line: 32,
          column: 34
        },
        end: {
          line: 36,
          column: 2
        }
      },
      '2': {
        start: {
          line: 41,
          column: 27
        },
        end: {
          line: 52,
          column: 1
        }
      },
      '3': {
        start: {
          line: 42,
          column: 38
        },
        end: {
          line: 42,
          column: 43
        }
      },
      '4': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 61
        }
      },
      '5': {
        start: {
          line: 45,
          column: 23
        },
        end: {
          line: 47,
          column: 4
        }
      },
      '6': {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 51,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 41,
            column: 27
          },
          end: {
            line: 41,
            column: 28
          }
        },
        loc: {
          start: {
            line: 41,
            column: 45
          },
          end: {
            line: 52,
            column: 1
          }
        },
        line: 41
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 44,
            column: 61
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 44,
            column: 19
          },
          end: {
            line: 44,
            column: 21
          }
        }, {
          start: {
            line: 44,
            column: 24
          },
          end: {
            line: 44,
            column: 61
          }
        }],
        line: 44
      },
      '1': {
        loc: {
          start: {
            line: 44,
            column: 24
          },
          end: {
            line: 44,
            column: 61
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 44,
            column: 24
          },
          end: {
            line: 44,
            column: 55
          }
        }, {
          start: {
            line: 44,
            column: 59
          },
          end: {
            line: 44,
            column: 61
          }
        }],
        line: 44
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
      '0': [0, 0],
      '1': [0, 0]
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
exports.ButtonGroup = exports.ButtonGroupSizes = undefined;

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const ButtonGroupSizes = exports.ButtonGroupSizes = (cov_y88nyjubg.s[0]++, Object.freeze({
  EXTRA_SMALL: 'EXTRA_SMALL',
  SMALL: 'SMALL',
  LARGE: 'LARGE'
}));

const ButtonGroupSizeClassnames = (cov_y88nyjubg.s[1]++, Object.freeze({
  EXTRA_SMALL: 'btn-group-xs',
  SMALL: 'btn-group-sm',
  LARGE: 'btn-group-lg'
}));

/**
 * Visually groups Buttons passed in as children.
 */
cov_y88nyjubg.s[2]++;
const ButtonGroup = exports.ButtonGroup = props => {
  cov_y88nyjubg.f[0]++;

  const { size, children, className } = (cov_y88nyjubg.s[3]++, props);
  const sizeClassName = (cov_y88nyjubg.s[4]++, size == null ? (cov_y88nyjubg.b[0][0]++, '') : (cov_y88nyjubg.b[0][1]++, (cov_y88nyjubg.b[1][0]++, ButtonGroupSizeClassnames[size]) || (cov_y88nyjubg.b[1][1]++, '')));
  const newClassName = (cov_y88nyjubg.s[5]++, (0, (_classnames || _load_classnames()).default)(className, 'btn-group', 'nuclide-btn-group', {
    [sizeClassName]: size != null
  }));
  cov_y88nyjubg.s[6]++;
  return (
    // $FlowFixMe(>=0.53.0) Flow suppress
    _react.createElement(
      'div',
      { className: newClassName },
      children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbkdyb3VwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwU2l6ZXMiLCJPYmplY3QiLCJmcmVlemUiLCJFWFRSQV9TTUFMTCIsIlNNQUxMIiwiTEFSR0UiLCJCdXR0b25Hcm91cFNpemVDbGFzc25hbWVzIiwiQnV0dG9uR3JvdXAiLCJwcm9wcyIsInNpemUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInNpemVDbGFzc05hbWUiLCJuZXdDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTs7QUFDQTs7Ozs7O0FBYkE7Ozs7Ozs7Ozs7OztBQXlCTyxNQUFNQSxxRUFBbUJDLE9BQU9DLE1BQVAsQ0FBYztBQUM1Q0MsZUFBYSxhQUQrQjtBQUU1Q0MsU0FBTyxPQUZxQztBQUc1Q0MsU0FBTztBQUhxQyxDQUFkLENBQW5CLENBQU47O0FBTVAsTUFBTUMsbURBQTRCTCxPQUFPQyxNQUFQLENBQWM7QUFDOUNDLGVBQWEsY0FEaUM7QUFFOUNDLFNBQU8sY0FGdUM7QUFHOUNDLFNBQU87QUFIdUMsQ0FBZCxDQUE1QixDQUFOOztBQU1BOzs7O0FBR08sTUFBTUUsb0NBQWVDLEtBQUQsSUFBa0I7QUFBQTs7QUFDM0MsUUFBTSxFQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBaUJDLFNBQWpCLDRCQUE4QkgsS0FBOUIsQ0FBTjtBQUNBLFFBQU1JLHVDQUNKSCxRQUFRLElBQVIsNkJBQWUsRUFBZiw4QkFBb0Isb0RBQTBCQSxJQUExQixnQ0FBbUMsRUFBbkMsQ0FBcEIsQ0FESSxDQUFOO0FBRUEsUUFBTUksc0NBQWUsaURBQVdGLFNBQVgsRUFBc0IsV0FBdEIsRUFBbUMsbUJBQW5DLEVBQXdEO0FBQzNFLEtBQUNDLGFBQUQsR0FBaUJILFFBQVE7QUFEa0QsR0FBeEQsQ0FBZixDQUFOO0FBSjJDO0FBTzNDO0FBQ0U7QUFDQTtBQUFBO0FBQUEsUUFBSyxXQUFXSSxZQUFoQjtBQUErQkg7QUFBL0I7QUFGRjtBQUlELENBWE0iLCJmaWxlIjoiQnV0dG9uR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBCdXR0b25Hcm91cFNpemUgPSAnRVhUUkFfU01BTEwnIHwgJ1NNQUxMJyB8ICdMQVJHRSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIC8qKiBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9ucyB3aXRoaW4gdGhlIGdyb3VwLiBPdmVycmlkZXMgYW55IGBzaXplYCBwcm9wcyBvbiBjaGlsZCBidXR0b25zLiAqL1xuICBzaXplPzogQnV0dG9uR3JvdXBTaXplLFxuICAvKiogVGhlIGNvbnRlbnRzIG9mIHRoZSBCdXR0b25Hcm91cDsgR2VuZXJhbGx5LCBhbiBpbnN0YW5jZSBvZiBgQnV0dG9uYC4gKi9cbiAgY2hpbGRyZW4/OiBtaXhlZCxcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxufTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwU2l6ZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgRVhUUkFfU01BTEw6ICdFWFRSQV9TTUFMTCcsXG4gIFNNQUxMOiAnU01BTEwnLFxuICBMQVJHRTogJ0xBUkdFJyxcbn0pO1xuXG5jb25zdCBCdXR0b25Hcm91cFNpemVDbGFzc25hbWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEVYVFJBX1NNQUxMOiAnYnRuLWdyb3VwLXhzJyxcbiAgU01BTEw6ICdidG4tZ3JvdXAtc20nLFxuICBMQVJHRTogJ2J0bi1ncm91cC1sZycsXG59KTtcblxuLyoqXG4gKiBWaXN1YWxseSBncm91cHMgQnV0dG9ucyBwYXNzZWQgaW4gYXMgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3Qge3NpemUsIGNoaWxkcmVuLCBjbGFzc05hbWV9ID0gcHJvcHM7XG4gIGNvbnN0IHNpemVDbGFzc05hbWUgPVxuICAgIHNpemUgPT0gbnVsbCA/ICcnIDogQnV0dG9uR3JvdXBTaXplQ2xhc3NuYW1lc1tzaXplXSB8fCAnJztcbiAgY29uc3QgbmV3Q2xhc3NOYW1lID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdidG4tZ3JvdXAnLCAnbnVjbGlkZS1idG4tZ3JvdXAnLCB7XG4gICAgW3NpemVDbGFzc05hbWVdOiBzaXplICE9IG51bGwsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIC8vICRGbG93Rml4TWUoPj0wLjUzLjApIEZsb3cgc3VwcHJlc3NcbiAgICA8ZGl2IGNsYXNzTmFtZT17bmV3Q2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICk7XG59O1xuIl19