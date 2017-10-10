'use strict';

var cov_2fgtnyq09i = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/RadioGroup.js',
      hash = '519ed5e31668d2b2a6b48dcc6fc6733fa80f3506',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/RadioGroup.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 10
        },
        end: {
          line: 16,
          column: 11
        }
      },
      '1': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 17
        }
      },
      '2': {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 43,
          column: 6
        }
      },
      '3': {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 18
        }
      },
      '4': {
        start: {
          line: 53,
          column: 23
        },
        end: {
          line: 74,
          column: 6
        }
      },
      '5': {
        start: {
          line: 54,
          column: 17
        },
        end: {
          line: 54,
          column: 54
        }
      },
      '6': {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 73,
          column: 8
        }
      },
      '7': {
        start: {
          line: 64,
          column: 14
        },
        end: {
          line: 64,
          column: 34
        }
      },
      '8': {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 57
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 35,
            column: 22
          },
          end: {
            line: 35,
            column: 23
          }
        },
        loc: {
          start: {
            line: 35,
            column: 49
          },
          end: {
            line: 35,
            column: 51
          }
        },
        line: 35
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 28
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 39
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 23
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 46
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 53,
            column: 40
          },
          end: {
            line: 53,
            column: 41
          }
        },
        loc: {
          start: {
            line: 53,
            column: 61
          },
          end: {
            line: 74,
            column: 5
          }
        },
        line: 53
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 63,
            column: 22
          },
          end: {
            line: 63,
            column: 23
          }
        },
        loc: {
          start: {
            line: 63,
            column: 28
          },
          end: {
            line: 65,
            column: 13
          }
        },
        line: 63
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Globally unique ID used as the "name" attribute to group radio inputs.
let uid = (cov_2fgtnyq09i.s[0]++, 0); /**
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

/**
 * A managed radio group component. Accepts arbitrary React elements as labels.
 */
class RadioGroup extends _react.Component {

  constructor(props) {
    cov_2fgtnyq09i.f[1]++;
    cov_2fgtnyq09i.s[1]++;

    super(props);
    cov_2fgtnyq09i.s[2]++;
    this.state = {
      uid: uid++
    };
  }

  render() {
    cov_2fgtnyq09i.f[2]++;

    const {
      className,
      onSelectedChange,
      optionLabels,
      selectedIndex
    } = (cov_2fgtnyq09i.s[3]++, this.props);
    const checkboxes = (cov_2fgtnyq09i.s[4]++, optionLabels.map((labelContent, i) => {
      cov_2fgtnyq09i.f[3]++;

      const id = (cov_2fgtnyq09i.s[5]++, 'nuclide-radiogroup-' + uid + '-' + i);
      cov_2fgtnyq09i.s[6]++;
      return _react.createElement(
        'div',
        { key: i, className: 'nuclide-ui-radiogroup-div' },
        _react.createElement('input', {
          className: 'input-radio',
          type: 'radio',
          checked: i === selectedIndex,
          name: 'radiogroup-' + this.state.uid,
          id: id,
          onChange: () => {
            cov_2fgtnyq09i.f[4]++;
            cov_2fgtnyq09i.s[7]++;

            onSelectedChange(i);
          }
        }),
        _react.createElement(
          'label',
          {
            className: 'input-label nuclide-ui-radiogroup-label',
            htmlFor: id },
          labelContent
        )
      );
    }));
    cov_2fgtnyq09i.s[8]++;
    return _react.createElement(
      'div',
      { className: className },
      checkboxes
    );
  }
}
exports.default = RadioGroup;
RadioGroup.defaultProps = {
  optionLabels: [],
  onSelectedChange: selectedIndex => {
    cov_2fgtnyq09i.f[0]++;
  },
  selectedIndex: 0
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvR3JvdXAuanMiXSwibmFtZXMiOlsidWlkIiwiUmFkaW9Hcm91cCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJvcHRpb25MYWJlbHMiLCJzZWxlY3RlZEluZGV4IiwiY2hlY2tib3hlcyIsIm1hcCIsImxhYmVsQ29udGVudCIsImkiLCJpZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOzs7O0FBRUE7QUFDQSxJQUFJQSw4QkFBTSxDQUFOLENBQUosQyxDQWZBOzs7Ozs7Ozs7Ozs7QUE0QkE7OztBQUdlLE1BQU1DLFVBQU4sU0FBeUIsT0FBTUMsU0FBL0IsQ0FBdUQ7O0FBT3BFQyxjQUFZQyxLQUFaLEVBQTBCO0FBQUE7QUFBQTs7QUFDeEIsVUFBTUEsS0FBTjtBQUR3QjtBQUV4QixTQUFLQyxLQUFMLEdBQWE7QUFDWEwsV0FBS0E7QUFETSxLQUFiO0FBR0Q7O0FBRURNLFdBQXFCO0FBQUE7O0FBQ25CLFVBQU07QUFDSkMsZUFESTtBQUVKQyxzQkFGSTtBQUdKQyxrQkFISTtBQUlKQztBQUpJLGdDQUtGLEtBQUtOLEtBTEgsQ0FBTjtBQU1BLFVBQU1PLHFDQUFhRixhQUFhRyxHQUFiLENBQWlCLENBQUNDLFlBQUQsRUFBZUMsQ0FBZixLQUFxQjtBQUFBOztBQUN2RCxZQUFNQyw2QkFBSyx3QkFBd0JmLEdBQXhCLEdBQThCLEdBQTlCLEdBQW9DYyxDQUF6QyxDQUFOO0FBRHVEO0FBRXZELGFBQ0U7QUFBQTtBQUFBLFVBQUssS0FBS0EsQ0FBVixFQUFhLFdBQVUsMkJBQXZCO0FBQ0U7QUFDRSxxQkFBVSxhQURaO0FBRUUsZ0JBQUssT0FGUDtBQUdFLG1CQUFTQSxNQUFNSixhQUhqQjtBQUlFLGdCQUFNLGdCQUFnQixLQUFLTCxLQUFMLENBQVdMLEdBSm5DO0FBS0UsY0FBSWUsRUFMTjtBQU1FLG9CQUFVLE1BQU07QUFBQTtBQUFBOztBQUNkUCw2QkFBaUJNLENBQWpCO0FBQ0Q7QUFSSCxVQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0UsdUJBQVUseUNBRFo7QUFFRSxxQkFBU0MsRUFGWDtBQUdHRjtBQUhIO0FBWEYsT0FERjtBQW1CRCxLQXJCa0IsQ0FBYixDQUFOO0FBUG1CO0FBNkJuQixXQUFPO0FBQUE7QUFBQSxRQUFLLFdBQVdOLFNBQWhCO0FBQTRCSTtBQUE1QixLQUFQO0FBQ0Q7QUE1Q21FO2tCQUFqRFYsVTtBQUFBQSxVLENBQ1plLFksR0FBZTtBQUNwQlAsZ0JBQWMsRUFETTtBQUVwQkQsb0JBQW1CRSxhQUFELElBQTJCO0FBQUE7QUFBRSxHQUYzQjtBQUdwQkEsaUJBQWU7QUFISyxDIiwiZmlsZSI6IlJhZGlvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEdsb2JhbGx5IHVuaXF1ZSBJRCB1c2VkIGFzIHRoZSBcIm5hbWVcIiBhdHRyaWJ1dGUgdG8gZ3JvdXAgcmFkaW8gaW5wdXRzLlxubGV0IHVpZCA9IDA7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgb3B0aW9uTGFiZWxzOiBBcnJheTxSZWFjdC5FbGVtZW50PGFueT4+LFxuICBzZWxlY3RlZEluZGV4OiBudW1iZXIsXG4gIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJbmRleDogbnVtYmVyKTogdm9pZCxcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIHVpZDogbnVtYmVyLFxufTtcblxuLyoqXG4gKiBBIG1hbmFnZWQgcmFkaW8gZ3JvdXAgY29tcG9uZW50LiBBY2NlcHRzIGFyYml0cmFyeSBSZWFjdCBlbGVtZW50cyBhcyBsYWJlbHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uTGFiZWxzOiBbXSxcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiAoc2VsZWN0ZWRJbmRleDogbnVtYmVyKSA9PiB7fSxcbiAgICBzZWxlY3RlZEluZGV4OiAwLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdWlkOiB1aWQrKyxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Lk5vZGUge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgICBvcHRpb25MYWJlbHMsXG4gICAgICBzZWxlY3RlZEluZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBvcHRpb25MYWJlbHMubWFwKChsYWJlbENvbnRlbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gJ251Y2xpZGUtcmFkaW9ncm91cC0nICsgdWlkICsgJy0nICsgaTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJudWNsaWRlLXVpLXJhZGlvZ3JvdXAtZGl2XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1yYWRpb1wiXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2hlY2tlZD17aSA9PT0gc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICAgIG5hbWU9eydyYWRpb2dyb3VwLScgKyB0aGlzLnN0YXRlLnVpZH1cbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbCBudWNsaWRlLXVpLXJhZGlvZ3JvdXAtbGFiZWxcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9PlxuICAgICAgICAgICAge2xhYmVsQ29udGVudH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGVja2JveGVzfTwvZGl2PjtcbiAgfVxufVxuIl19