'use strict';

var cov_dt5tg2hmt = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TabbableContainer.example.js',
      hash = '551915597409abb071c7f9bb7480b268f8bbd95a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TabbableContainer.example.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 15
        },
        end: {
          line: 20,
          column: 48
        }
      },
      '1': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 17
        }
      },
      '2': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 6
        }
      },
      '3': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      '4': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 87,
          column: 6
        }
      },
      '5': {
        start: {
          line: 91,
          column: 42
        },
        end: {
          line: 95,
          column: 1
        }
      },
      '6': {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 94,
          column: 22
        }
      },
      '7': {
        start: {
          line: 97,
          column: 44
        },
        end: {
          line: 101,
          column: 1
        }
      },
      '8': {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 100,
          column: 22
        }
      },
      '9': {
        start: {
          line: 103,
          column: 41
        },
        end: {
          line: 117,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 23
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 30,
            column: 21
          },
          end: {
            line: 30,
            column: 22
          }
        },
        loc: {
          start: {
            line: 30,
            column: 54
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 30
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 23
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 36
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 91,
            column: 42
          },
          end: {
            line: 91,
            column: 43
          }
        },
        loc: {
          start: {
            line: 92,
            column: 2
          },
          end: {
            line: 94,
            column: 22
          }
        },
        line: 92
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 97,
            column: 44
          },
          end: {
            line: 97,
            column: 45
          }
        },
        loc: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 100,
            column: 22
          }
        },
        line: 98
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
      '8': 0,
      '9': 0
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
exports.TabbableContainerExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _AtomInput;

function _load_AtomInput() {
  return _AtomInput = require('./AtomInput');
}

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _Button;

function _load_Button() {
  return _Button = require('./Button');
}

var _RadioGroup;

function _load_RadioGroup() {
  return _RadioGroup = _interopRequireDefault(require('./RadioGroup'));
}

var _TabbableContainer;

function _load_TabbableContainer() {
  return _TabbableContainer = _interopRequireDefault(require('./TabbableContainer'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

const labels = (cov_dt5tg2hmt.s[0]++, ['radio 1', 'radio 2', 'radio 3']);

class FormExample extends _react.Component {
  constructor(props) {
    cov_dt5tg2hmt.f[0]++;
    cov_dt5tg2hmt.s[1]++;

    super(props);

    this.onSelectedChange = selectedIndex => {
      cov_dt5tg2hmt.f[1]++;
      cov_dt5tg2hmt.s[3]++;

      this.setState({
        selectedIndex
      });
    };

    cov_dt5tg2hmt.s[2]++;
    this.state = {
      selectedIndex: 0
    };
  }

  render() {
    cov_dt5tg2hmt.f[2]++;
    cov_dt5tg2hmt.s[4]++;

    return _react.createElement(
      'div',
      null,
      _react.createElement(
        (_Block || _load_Block()).Block,
        null,
        _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
          disabled: false,
          initialValue: 'input field 1',
          placeholderText: 'placeholder text'
        })
      ),
      _react.createElement(
        (_Block || _load_Block()).Block,
        null,
        _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
          disabled: false,
          initialValue: 'input field 2',
          placeholderText: 'placeholder text'
        })
      ),
      _react.createElement(
        (_Block || _load_Block()).Block,
        null,
        _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
          disabled: false,
          initialValue: 'input field 3',
          placeholderText: 'placeholder text'
        })
      ),
      _react.createElement(
        (_Block || _load_Block()).Block,
        null,
        _react.createElement((_RadioGroup || _load_RadioGroup()).default, {
          selectedIndex: this.state.selectedIndex,
          optionLabels: labels,
          onSelectedChange: this.onSelectedChange
        })
      ),
      _react.createElement(
        (_Block || _load_Block()).Block,
        null,
        _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
          disabled: false,
          initialValue: 'input field 4',
          placeholderText: 'placeholder text'
        })
      ),
      _react.createElement(
        (_Block || _load_Block()).Block,
        null,
        _react.createElement(
          (_Button || _load_Button()).Button,
          { className: 'inline-block', size: 'SMALL' },
          'button 1'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { className: 'inline-block', size: 'SMALL' },
          'button 2'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { className: 'inline-block', size: 'SMALL' },
          'button 3'
        )
      )
    );
  }
}

cov_dt5tg2hmt.s[5]++;
const ContainedTabbableContainerExample = () => {
  cov_dt5tg2hmt.f[3]++;
  cov_dt5tg2hmt.s[6]++;
  return _react.createElement(
    (_TabbableContainer || _load_TabbableContainer()).default,
    { contained: true },
    _react.createElement(FormExample, null)
  );
};

cov_dt5tg2hmt.s[7]++;
const UncontainedTabbableContainerExample = () => {
  cov_dt5tg2hmt.f[4]++;
  cov_dt5tg2hmt.s[8]++;
  return _react.createElement(
    (_TabbableContainer || _load_TabbableContainer()).default,
    { contained: false },
    _react.createElement(FormExample, null)
  );
};

const TabbableContainerExamples = exports.TabbableContainerExamples = (cov_dt5tg2hmt.s[9]++, {
  sectionName: 'TabbableContainer',
  description: 'Allows tabbing and shift-tabbing to change the focus of the inputs.',
  examples: [{
    title: 'Contained (focus will be contained in this section)',
    component: ContainedTabbableContainerExample
  }, {
    title: 'Uncontained',
    component: UncontainedTabbableContainerExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYmJhYmxlQ29udGFpbmVyLmV4YW1wbGUuanMiXSwibmFtZXMiOlsibGFiZWxzIiwiRm9ybUV4YW1wbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwib25TZWxlY3RlZENoYW5nZSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTdGF0ZSIsInN0YXRlIiwicmVuZGVyIiwiQ29udGFpbmVkVGFiYmFibGVDb250YWluZXJFeGFtcGxlIiwiVW5jb250YWluZWRUYWJiYWJsZUNvbnRhaW5lckV4YW1wbGUiLCJUYWJiYWJsZUNvbnRhaW5lckV4YW1wbGVzIiwic2VjdGlvbk5hbWUiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGVzIiwidGl0bGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7Ozs7O0FBakJBOzs7Ozs7Ozs7Ozs7QUFtQkEsTUFBTUEsZ0NBQVMsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixDQUFULENBQU47O0FBRUEsTUFBTUMsV0FBTixTQUEwQixPQUFNQyxTQUFoQyxDQUF3RTtBQUN0RUMsY0FBWUMsS0FBWixFQUF3QjtBQUFBO0FBQUE7O0FBQ3RCLFVBQU1BLEtBQU47O0FBRHNCLFNBT3hCQyxnQkFQd0IsR0FPSkMsYUFBRCxJQUFpQztBQUFBO0FBQUE7O0FBQ2xELFdBQUtDLFFBQUwsQ0FBYztBQUNaRDtBQURZLE9BQWQ7QUFHRCxLQVh1Qjs7QUFBQTtBQUV0QixTQUFLRSxLQUFMLEdBQWE7QUFDWEYscUJBQWU7QUFESixLQUFiO0FBR0Q7O0FBUURHLFdBQXFCO0FBQUE7QUFBQTs7QUFDbkIsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLG9CQUFVLEtBRFo7QUFFRSx3QkFBYSxlQUZmO0FBR0UsMkJBQWdCO0FBSGxCO0FBREYsT0FERjtBQVFFO0FBQUE7QUFBQTtBQUNFO0FBQ0Usb0JBQVUsS0FEWjtBQUVFLHdCQUFhLGVBRmY7QUFHRSwyQkFBZ0I7QUFIbEI7QUFERixPQVJGO0FBZUU7QUFBQTtBQUFBO0FBQ0U7QUFDRSxvQkFBVSxLQURaO0FBRUUsd0JBQWEsZUFGZjtBQUdFLDJCQUFnQjtBQUhsQjtBQURGLE9BZkY7QUFzQkU7QUFBQTtBQUFBO0FBRUU7QUFDRSx5QkFBZSxLQUFLRCxLQUFMLENBQVdGLGFBRDVCO0FBRUUsd0JBQWNOLE1BRmhCO0FBR0UsNEJBQWtCLEtBQUtLO0FBSHpCO0FBRkYsT0F0QkY7QUE4QkU7QUFBQTtBQUFBO0FBQ0U7QUFDRSxvQkFBVSxLQURaO0FBRUUsd0JBQWEsZUFGZjtBQUdFLDJCQUFnQjtBQUhsQjtBQURGLE9BOUJGO0FBcUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxPQUF0QztBQUFBO0FBQUEsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxPQUF0QztBQUFBO0FBQUEsU0FKRjtBQU9FO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxPQUF0QztBQUFBO0FBQUE7QUFQRjtBQXJDRixLQURGO0FBbUREO0FBbEVxRTs7O0FBcUV4RSxNQUFNSyxvQ0FBb0MsTUFDeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQW1CLFdBQVcsSUFBOUI7QUFDRSx5QkFBQyxXQUFEO0FBREY7QUFFb0IsQ0FIdEI7OztBQU1BLE1BQU1DLHNDQUFzQyxNQUMxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbUIsV0FBVyxLQUE5QjtBQUNFLHlCQUFDLFdBQUQ7QUFERjtBQUVvQixDQUh0Qjs7QUFNTyxNQUFNQyx1RkFBNEI7QUFDdkNDLGVBQWEsbUJBRDBCO0FBRXZDQyxlQUNFLHFFQUhxQztBQUl2Q0MsWUFBVSxDQUNSO0FBQ0VDLFdBQU8scURBRFQ7QUFFRUMsZUFBV1A7QUFGYixHQURRLEVBS1I7QUFDRU0sV0FBTyxhQURUO0FBRUVDLGVBQVdOO0FBRmIsR0FMUTtBQUo2QixDQUE1QixDQUFOIiwiZmlsZSI6IlRhYmJhYmxlQ29udGFpbmVyLmV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0F0b21JbnB1dH0gZnJvbSAnLi9BdG9tSW5wdXQnO1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi9CbG9jayc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnLi9SYWRpb0dyb3VwJztcbmltcG9ydCBUYWJiYWJsZUNvbnRhaW5lciBmcm9tICcuL1RhYmJhYmxlQ29udGFpbmVyJztcblxuY29uc3QgbGFiZWxzID0gWydyYWRpbyAxJywgJ3JhZGlvIDInLCAncmFkaW8gMyddO1xuXG5jbGFzcyBGb3JtRXhhbXBsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIHtzZWxlY3RlZEluZGV4OiBudW1iZXJ9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWRDaGFuZ2UgPSAoc2VsZWN0ZWRJbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEluZGV4LFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5Ob2RlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxBdG9tSW5wdXRcbiAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cImlucHV0IGZpZWxkIDFcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxBdG9tSW5wdXRcbiAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cImlucHV0IGZpZWxkIDJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxBdG9tSW5wdXRcbiAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cImlucHV0IGZpZWxkIDNcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIHsvKiAkRmxvd0ZpeE1lKD49MC41My4wKSBGbG93IHN1cHByZXNzICovfVxuICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4PXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXh9XG4gICAgICAgICAgICBvcHRpb25MYWJlbHM9e2xhYmVsc31cbiAgICAgICAgICAgIG9uU2VsZWN0ZWRDaGFuZ2U9e3RoaXMub25TZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPEF0b21JbnB1dFxuICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiaW5wdXQgZmllbGQgNFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJwbGFjZWhvbGRlciB0ZXh0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiBzaXplPVwiU01BTExcIj5cbiAgICAgICAgICAgIGJ1dHRvbiAxXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiBzaXplPVwiU01BTExcIj5cbiAgICAgICAgICAgIGJ1dHRvbiAyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiBzaXplPVwiU01BTExcIj5cbiAgICAgICAgICAgIGJ1dHRvbiAzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IENvbnRhaW5lZFRhYmJhYmxlQ29udGFpbmVyRXhhbXBsZSA9ICgpOiBSZWFjdC5FbGVtZW50PGFueT4gPT4gKFxuICA8VGFiYmFibGVDb250YWluZXIgY29udGFpbmVkPXt0cnVlfT5cbiAgICA8Rm9ybUV4YW1wbGUgLz5cbiAgPC9UYWJiYWJsZUNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFVuY29udGFpbmVkVGFiYmFibGVDb250YWluZXJFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxUYWJiYWJsZUNvbnRhaW5lciBjb250YWluZWQ9e2ZhbHNlfT5cbiAgICA8Rm9ybUV4YW1wbGUgLz5cbiAgPC9UYWJiYWJsZUNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBjb25zdCBUYWJiYWJsZUNvbnRhaW5lckV4YW1wbGVzID0ge1xuICBzZWN0aW9uTmFtZTogJ1RhYmJhYmxlQ29udGFpbmVyJyxcbiAgZGVzY3JpcHRpb246XG4gICAgJ0FsbG93cyB0YWJiaW5nIGFuZCBzaGlmdC10YWJiaW5nIHRvIGNoYW5nZSB0aGUgZm9jdXMgb2YgdGhlIGlucHV0cy4nLFxuICBleGFtcGxlczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQ29udGFpbmVkIChmb2N1cyB3aWxsIGJlIGNvbnRhaW5lZCBpbiB0aGlzIHNlY3Rpb24pJyxcbiAgICAgIGNvbXBvbmVudDogQ29udGFpbmVkVGFiYmFibGVDb250YWluZXJFeGFtcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdVbmNvbnRhaW5lZCcsXG4gICAgICBjb21wb25lbnQ6IFVuY29udGFpbmVkVGFiYmFibGVDb250YWluZXJFeGFtcGxlLFxuICAgIH0sXG4gIF0sXG59O1xuIl19