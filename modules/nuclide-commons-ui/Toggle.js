'use strict';

var cov_2rbo30chrd = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Toggle.js',
      hash = 'f43ae8128bdf3145bceb733e2ca1cbe0be3b2934',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Toggle.js',
    statementMap: {
      '0': {
        start: {
          line: 43,
          column: 22
        },
        end: {
          line: 43,
          column: 69
        }
      },
      '1': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 46
        }
      },
      '2': {
        start: {
          line: 48,
          column: 59
        },
        end: {
          line: 48,
          column: 69
        }
      },
      '3': {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 52,
          column: 7
        }
      },
      '4': {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 68,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 42,
            column: 14
          },
          end: {
            line: 42,
            column: 15
          }
        },
        loc: {
          start: {
            line: 42,
            column: 43
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 42
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        loc: {
          start: {
            line: 47,
            column: 23
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 47
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 52,
            column: 7
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 50,
            column: 21
          },
          end: {
            line: 50,
            column: 25
          }
        }, {
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 51,
            column: 70
          }
        }],
        line: 50
      },
      '1': {
        loc: {
          start: {
            line: 58,
            column: 17
          },
          end: {
            line: 58,
            column: 62
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 58,
            column: 17
          },
          end: {
            line: 58,
            column: 24
          }
        }, {
          start: {
            line: 58,
            column: 28
          },
          end: {
            line: 58,
            column: 62
          }
        }],
        line: 58
      }
    },
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
exports.Toggle = undefined;

var _react = _interopRequireWildcard(require('react'));

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _ignoreTextSelectionEvents;

function _load_ignoreTextSelectionEvents() {
  return _ignoreTextSelectionEvents = _interopRequireDefault(require('./ignoreTextSelectionEvents'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * A toggle component with an input toggle and a label. We restrict the label to a string
 * to ensure this component is pure.
 */
class Toggle extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._onChange = event => {
      cov_2rbo30chrd.f[0]++;

      const isToggled = (cov_2rbo30chrd.s[0]++, event.target.checked);
      cov_2rbo30chrd.s[1]++;
      this.props.onChange.call(null, isToggled);
    }, _temp;
  }

  render() {
    cov_2rbo30chrd.f[1]++;

    const { className, disabled, label, onClick, toggled } = (cov_2rbo30chrd.s[2]++, this.props);
    const text = (cov_2rbo30chrd.s[3]++, label === '' ? (cov_2rbo30chrd.b[0][0]++, null) : (cov_2rbo30chrd.b[0][1]++, _react.createElement(
      'span',
      { className: 'nuclide-ui-toggle-label-text' },
      ' ',
      label
    )));
    cov_2rbo30chrd.s[4]++;
    return _react.createElement(
      'label',
      {
        className: (0, (_classnames || _load_classnames()).default)(className, 'nuclide-ui-toggle-label', {
          'nuclide-ui-toggle-disabled': disabled
        }),
        onClick: (cov_2rbo30chrd.b[1][0]++, onClick) && (cov_2rbo30chrd.b[1][1]++, (0, (_ignoreTextSelectionEvents || _load_ignoreTextSelectionEvents()).default)(onClick)) },
      _react.createElement('input', {
        checked: toggled,
        className: 'input-toggle',
        disabled: disabled,
        onChange: this._onChange,
        type: 'checkbox'
      }),
      text
    );
  }
}
exports.Toggle = Toggle; /**
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

Toggle.defaultProps = {
  disabled: false,
  onClick(event) {}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJUb2dnbGUiLCJDb21wb25lbnQiLCJfb25DaGFuZ2UiLCJldmVudCIsImlzVG9nZ2xlZCIsInRhcmdldCIsImNoZWNrZWQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiY2FsbCIsInJlbmRlciIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJvbkNsaWNrIiwidG9nZ2xlZCIsInRleHQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUVBO0FBQUE7QUFBQTs7Ozs7O0FBZ0JBOzs7O0FBSU8sTUFBTUEsTUFBTixTQUFxQixPQUFNQyxTQUEzQixDQUE0QztBQUFBO0FBQUE7O0FBQUEsd0NBTWpEQyxTQU5pRCxHQU1wQ0MsS0FBRCxJQUE2QjtBQUFBOztBQUN2QyxZQUFNQyxvQ0FBY0QsTUFBTUUsTUFBUixDQUF3Q0MsT0FBcEQsQ0FBTjtBQUR1QztBQUV2QyxXQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLEVBQStCTCxTQUEvQjtBQUNELEtBVGdEO0FBQUE7O0FBV2pETSxXQUFxQjtBQUFBOztBQUNuQixVQUFNLEVBQUNDLFNBQUQsRUFBWUMsUUFBWixFQUFzQkMsS0FBdEIsRUFBNkJDLE9BQTdCLEVBQXNDQyxPQUF0Qyw2QkFBaUQsS0FBS1IsS0FBdEQsQ0FBTjtBQUNBLFVBQU1TLCtCQUNKSCxVQUFVLEVBQVYsOEJBQWUsSUFBZiwrQkFDRTtBQUFBO0FBQUEsUUFBTSxXQUFVLDhCQUFoQjtBQUFBO0FBQWlEQTtBQUFqRCxLQURGLENBREksQ0FBTjtBQUZtQjtBQU1uQixXQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFXLGlEQUFXRixTQUFYLEVBQXNCLHlCQUF0QixFQUFpRDtBQUMxRCx3Q0FBOEJDO0FBRDRCLFNBQWpELENBRGI7QUFJRSxpQkFBUyxrRUFBVywrRUFBMEJFLE9BQTFCLENBQVgsQ0FKWDtBQUtFO0FBQ0UsaUJBQVNDLE9BRFg7QUFFRSxtQkFBVSxjQUZaO0FBR0Usa0JBQVVILFFBSFo7QUFJRSxrQkFBVSxLQUFLVixTQUpqQjtBQUtFLGNBQUs7QUFMUCxRQUxGO0FBWUdjO0FBWkgsS0FERjtBQWdCRDtBQWpDZ0Q7UUFBdENoQixNLEdBQUFBLE0sRUFuQ2I7Ozs7Ozs7Ozs7OztBQW1DYUEsTSxDQUNKaUIsWSxHQUE2QjtBQUNsQ0wsWUFBVSxLQUR3QjtBQUVsQ0UsVUFBUVgsS0FBUixFQUFlLENBQUU7QUFGaUIsQyIsImZpbGUiOiJUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGlnbm9yZVRleHRTZWxlY3Rpb25FdmVudHMgZnJvbSAnLi9pZ25vcmVUZXh0U2VsZWN0aW9uRXZlbnRzJztcblxudHlwZSBEZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBib29sZWFuLFxuICBvbkNsaWNrOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PD4pID0+IG1peGVkLFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICB0b2dnbGVkOiBib29sZWFuLFxuICBkaXNhYmxlZDogYm9vbGVhbixcbiAgbGFiZWw6ID9zdHJpbmcsXG4gIG9uQ2hhbmdlOiAoaXNUb2dnbGVkOiBib29sZWFuKSA9PiBtaXhlZCxcbiAgb25DbGljazogKGV2ZW50OiBTeW50aGV0aWNFdmVudDw+KSA9PiBtaXhlZCxcbn07XG5cbi8qKlxuICogQSB0b2dnbGUgY29tcG9uZW50IHdpdGggYW4gaW5wdXQgdG9nZ2xlIGFuZCBhIGxhYmVsLiBXZSByZXN0cmljdCB0aGUgbGFiZWwgdG8gYSBzdHJpbmdcbiAqIHRvIGVuc3VyZSB0aGlzIGNvbXBvbmVudCBpcyBwdXJlLlxuICovXG5leHBvcnQgY2xhc3MgVG9nZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IERlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgb25DbGljayhldmVudCkge30sXG4gIH07XG5cbiAgX29uQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgaXNUb2dnbGVkID0gKChldmVudC50YXJnZXQ6IGFueSk6IEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQ7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZS5jYWxsKG51bGwsIGlzVG9nZ2xlZCk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0Lk5vZGUge1xuICAgIGNvbnN0IHtjbGFzc05hbWUsIGRpc2FibGVkLCBsYWJlbCwgb25DbGljaywgdG9nZ2xlZH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRleHQgPVxuICAgICAgbGFiZWwgPT09ICcnID8gbnVsbCA6IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVjbGlkZS11aS10b2dnbGUtbGFiZWwtdGV4dFwiPiB7bGFiZWx9PC9zcGFuPlxuICAgICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc05hbWUsICdudWNsaWRlLXVpLXRvZ2dsZS1sYWJlbCcsIHtcbiAgICAgICAgICAnbnVjbGlkZS11aS10b2dnbGUtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2sgJiYgaWdub3JlVGV4dFNlbGVjdGlvbkV2ZW50cyhvbkNsaWNrKX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNoZWNrZWQ9e3RvZ2dsZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtdG9nZ2xlXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG59XG4iXX0=