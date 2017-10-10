'use strict';

var cov_264k5rfa9c = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/DiagnosticsPopup.js',
      hash = '47e32650f21d5acb35efeb831fb11c6827f3dcf6',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/DiagnosticsPopup.js',
    statementMap: {
      '0': {
        start: {
          line: 36,
          column: 20
        },
        end: {
          line: 45,
          column: 3
        }
      },
      '1': {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 63
        }
      },
      '2': {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 60,
          column: 4
        }
      },
      '3': {
        start: {
          line: 64,
          column: 32
        },
        end: {
          line: 73,
          column: 1
        }
      },
      '4': {
        start: {
          line: 65,
          column: 74
        },
        end: {
          line: 65,
          column: 79
        }
      },
      '5': {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 72,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'renderMessage',
        decl: {
          start: {
            line: 29,
            column: 9
          },
          end: {
            line: 29,
            column: 22
          }
        },
        loc: {
          start: {
            line: 35,
            column: 22
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 35
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 64,
            column: 32
          },
          end: {
            line: 64,
            column: 33
          }
        },
        loc: {
          start: {
            line: 64,
            column: 66
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 64
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 63
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 25
          }
        }, {
          start: {
            line: 47,
            column: 29
          },
          end: {
            line: 47,
            column: 63
          }
        }],
        line: 47
      },
      '1': {
        loc: {
          start: {
            line: 55,
            column: 9
          },
          end: {
            line: 57,
            column: 16
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 56,
            column: 10
          },
          end: {
            line: 56,
            column: 62
          }
        }, {
          start: {
            line: 57,
            column: 12
          },
          end: {
            line: 57,
            column: 16
          }
        }],
        line: 55
      },
      '2': {
        loc: {
          start: {
            line: 55,
            column: 9
          },
          end: {
            line: 55,
            column: 40
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 55,
            column: 9
          },
          end: {
            line: 55,
            column: 20
          }
        }, {
          start: {
            line: 55,
            column: 24
          },
          end: {
            line: 55,
            column: 40
          }
        }],
        line: 55
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
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
exports.DiagnosticsPopup = undefined;

var _react = _interopRequireWildcard(require('react'));

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _DiagnosticsMessage;

function _load_DiagnosticsMessage() {
  return _DiagnosticsMessage = require('./DiagnosticsMessage');
}

var _DiagnosticsCodeActions;

function _load_DiagnosticsCodeActions() {
  return _DiagnosticsCodeActions = _interopRequireDefault(require('./DiagnosticsCodeActions'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

function renderMessage(fixer, goToLocation, codeActionsForMessage, message, index) {
  cov_264k5rfa9c.f[0]++;

  const className = (cov_264k5rfa9c.s[0]++, (0, (_classnames || _load_classnames()).default)(
  // native-key-bindings and tabIndex=-1 are both needed to allow copying the text in the popup.
  'native-key-bindings', 'diagnostics-popup-diagnostic', {
    'diagnostics-popup-error': message.type === 'Error',
    'diagnostics-popup-warning': message.type === 'Warning',
    'diagnostics-popup-info': message.type === 'Info'
  }));
  const codeActions = (cov_264k5rfa9c.s[1]++, (cov_264k5rfa9c.b[0][0]++, codeActionsForMessage) && (cov_264k5rfa9c.b[0][1]++, codeActionsForMessage.get(message)));
  cov_264k5rfa9c.s[2]++;
  return _react.createElement(
    'div',
    { className: className, key: index, tabIndex: -1 },
    _react.createElement(
      (_DiagnosticsMessage || _load_DiagnosticsMessage()).DiagnosticsMessage,
      {
        fixer: fixer,
        goToLocation: goToLocation,
        message: message },
      (cov_264k5rfa9c.b[2][0]++, codeActions) && (cov_264k5rfa9c.b[2][1]++, codeActions.size) ? (cov_264k5rfa9c.b[1][0]++, _react.createElement((_DiagnosticsCodeActions || _load_DiagnosticsCodeActions()).default, { codeActions: codeActions })) : (cov_264k5rfa9c.b[1][1]++, null)
    )
  );
}

// TODO move LESS styles to nuclide-ui
cov_264k5rfa9c.s[3]++;
const DiagnosticsPopup = props => {
  cov_264k5rfa9c.f[1]++;

  const _ref = (cov_264k5rfa9c.s[4]++, props),
        { fixer, goToLocation, codeActionsForMessage, messages } = _ref,
        rest = _objectWithoutProperties(_ref, ['fixer', 'goToLocation', 'codeActionsForMessage', 'messages']);
  cov_264k5rfa9c.s[5]++;
  return _react.createElement(
    'div',
    Object.assign({ className: 'diagnostics-popup' }, rest),
    messages.map(renderMessage.bind(null, fixer, goToLocation, codeActionsForMessage))
  );
};
exports.DiagnosticsPopup = DiagnosticsPopup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpYWdub3N0aWNzUG9wdXAuanMiXSwibmFtZXMiOlsicmVuZGVyTWVzc2FnZSIsImZpeGVyIiwiZ29Ub0xvY2F0aW9uIiwiY29kZUFjdGlvbnNGb3JNZXNzYWdlIiwibWVzc2FnZSIsImluZGV4IiwiY2xhc3NOYW1lIiwidHlwZSIsImNvZGVBY3Rpb25zIiwiZ2V0Iiwic2l6ZSIsIkRpYWdub3N0aWNzUG9wdXAiLCJwcm9wcyIsIm1lc3NhZ2VzIiwicmVzdCIsIm1hcCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs2TkFuQkE7Ozs7Ozs7Ozs7OztBQTRCQSxTQUFTQSxhQUFULENBQ0VDLEtBREYsRUFFRUMsWUFGRixFQUdFQyxxQkFIRixFQUlFQyxPQUpGLEVBS0VDLEtBTEYsRUFNc0I7QUFBQTs7QUFDcEIsUUFBTUMsb0NBQVk7QUFDaEI7QUFDQSx1QkFGZ0IsRUFHaEIsOEJBSGdCLEVBSWhCO0FBQ0UsK0JBQTJCRixRQUFRRyxJQUFSLEtBQWlCLE9BRDlDO0FBRUUsaUNBQTZCSCxRQUFRRyxJQUFSLEtBQWlCLFNBRmhEO0FBR0UsOEJBQTBCSCxRQUFRRyxJQUFSLEtBQWlCO0FBSDdDLEdBSmdCLENBQVosQ0FBTjtBQVVBLFFBQU1DLHNDQUNKLGdGQUF5Qkwsc0JBQXNCTSxHQUF0QixDQUEwQkwsT0FBMUIsQ0FBekIsQ0FESSxDQUFOO0FBWG9CO0FBYXBCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBV0UsU0FBaEIsRUFBMkIsS0FBS0QsS0FBaEMsRUFBdUMsVUFBVSxDQUFDLENBQWxEO0FBRUU7QUFBQTtBQUFBO0FBQ0UsZUFBT0osS0FEVDtBQUVFLHNCQUFjQyxZQUZoQjtBQUdFLGlCQUFTRSxPQUhYO0FBSUcsNEVBQWVJLFlBQVlFLElBQTNCLCtCQUNDLDRGQUF3QixhQUFhRixXQUFyQyxHQURELCtCQUVHLElBRkg7QUFKSDtBQUZGLEdBREY7QUFhRDs7QUFFRDs7QUFDTyxNQUFNRyxtQkFBb0JDLEtBQUQsSUFBa0M7QUFBQTs7QUFDaEUsdUNBQXdFQSxLQUF4RTtBQUFBLFFBQU0sRUFBQ1gsS0FBRCxFQUFRQyxZQUFSLEVBQXNCQyxxQkFBdEIsRUFBNkNVLFFBQTdDLEVBQU47QUFBQSxRQUFnRUMsSUFBaEU7QUFEZ0U7QUFFaEUsU0FDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxtQkFBZixJQUF1Q0EsSUFBdkM7QUFDR0QsYUFBU0UsR0FBVCxDQUNDZixjQUFjZ0IsSUFBZCxDQUFtQixJQUFuQixFQUF5QmYsS0FBekIsRUFBZ0NDLFlBQWhDLEVBQThDQyxxQkFBOUMsQ0FERDtBQURILEdBREY7QUFPRCxDQVRNIiwiZmlsZSI6IkRpYWdub3N0aWNzUG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7TnVjbGlkZVVyaX0gZnJvbSAnbnVjbGlkZS1jb21tb25zL251Y2xpZGVVcmknO1xuaW1wb3J0IHR5cGUge0ZpbGVEaWFnbm9zdGljTWVzc2FnZX0gZnJvbSAnLi4vLi4vLi4vYXRvbS1pZGUtZGlhZ25vc3RpY3MvbGliL3R5cGVzJztcbmltcG9ydCB0eXBlIHtDb2RlQWN0aW9ufSBmcm9tICcuLi8uLi8uLi9hdG9tLWlkZS1jb2RlLWFjdGlvbnMvbGliL3R5cGVzJztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0RpYWdub3N0aWNzTWVzc2FnZX0gZnJvbSAnLi9EaWFnbm9zdGljc01lc3NhZ2UnO1xuaW1wb3J0IERpYWdub3N0aWNzQ29kZUFjdGlvbnMgZnJvbSAnLi9EaWFnbm9zdGljc0NvZGVBY3Rpb25zJztcblxudHlwZSBEaWFnbm9zdGljc1BvcHVwUHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiBBcnJheTxGaWxlRGlhZ25vc3RpY01lc3NhZ2U+LFxuICBnb1RvTG9jYXRpb246IChmaWxlUGF0aDogTnVjbGlkZVVyaSwgbGluZTogbnVtYmVyKSA9PiBtaXhlZCxcbiAgZml4ZXI6IChtZXNzYWdlOiBGaWxlRGlhZ25vc3RpY01lc3NhZ2UpID0+IHZvaWQsXG4gIGNvZGVBY3Rpb25zRm9yTWVzc2FnZT86IE1hcDxGaWxlRGlhZ25vc3RpY01lc3NhZ2UsIE1hcDxzdHJpbmcsIENvZGVBY3Rpb24+Pixcbn07XG5cbmZ1bmN0aW9uIHJlbmRlck1lc3NhZ2UoXG4gIGZpeGVyOiAobWVzc2FnZTogRmlsZURpYWdub3N0aWNNZXNzYWdlKSA9PiB2b2lkLFxuICBnb1RvTG9jYXRpb246IChmaWxlUGF0aDogTnVjbGlkZVVyaSwgbGluZTogbnVtYmVyKSA9PiBtaXhlZCxcbiAgY29kZUFjdGlvbnNGb3JNZXNzYWdlOiA/TWFwPEZpbGVEaWFnbm9zdGljTWVzc2FnZSwgTWFwPHN0cmluZywgQ29kZUFjdGlvbj4+LFxuICBtZXNzYWdlOiBGaWxlRGlhZ25vc3RpY01lc3NhZ2UsXG4gIGluZGV4OiBudW1iZXIsXG4pOiBSZWFjdC5FbGVtZW50PGFueT4ge1xuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgIC8vIG5hdGl2ZS1rZXktYmluZGluZ3MgYW5kIHRhYkluZGV4PS0xIGFyZSBib3RoIG5lZWRlZCB0byBhbGxvdyBjb3B5aW5nIHRoZSB0ZXh0IGluIHRoZSBwb3B1cC5cbiAgICAnbmF0aXZlLWtleS1iaW5kaW5ncycsXG4gICAgJ2RpYWdub3N0aWNzLXBvcHVwLWRpYWdub3N0aWMnLFxuICAgIHtcbiAgICAgICdkaWFnbm9zdGljcy1wb3B1cC1lcnJvcic6IG1lc3NhZ2UudHlwZSA9PT0gJ0Vycm9yJyxcbiAgICAgICdkaWFnbm9zdGljcy1wb3B1cC13YXJuaW5nJzogbWVzc2FnZS50eXBlID09PSAnV2FybmluZycsXG4gICAgICAnZGlhZ25vc3RpY3MtcG9wdXAtaW5mbyc6IG1lc3NhZ2UudHlwZSA9PT0gJ0luZm8nLFxuICAgIH0sXG4gICk7XG4gIGNvbnN0IGNvZGVBY3Rpb25zID1cbiAgICBjb2RlQWN0aW9uc0Zvck1lc3NhZ2UgJiYgY29kZUFjdGlvbnNGb3JNZXNzYWdlLmdldChtZXNzYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fSB0YWJJbmRleD17LTF9PlxuICAgICAgey8qICRGbG93Rml4TWUoPj0wLjUzLjApIEZsb3cgc3VwcHJlc3MgKi99XG4gICAgICA8RGlhZ25vc3RpY3NNZXNzYWdlXG4gICAgICAgIGZpeGVyPXtmaXhlcn1cbiAgICAgICAgZ29Ub0xvY2F0aW9uPXtnb1RvTG9jYXRpb259XG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9PlxuICAgICAgICB7Y29kZUFjdGlvbnMgJiYgY29kZUFjdGlvbnMuc2l6ZSA/IChcbiAgICAgICAgICA8RGlhZ25vc3RpY3NDb2RlQWN0aW9ucyBjb2RlQWN0aW9ucz17Y29kZUFjdGlvbnN9IC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9EaWFnbm9zdGljc01lc3NhZ2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFRPRE8gbW92ZSBMRVNTIHN0eWxlcyB0byBudWNsaWRlLXVpXG5leHBvcnQgY29uc3QgRGlhZ25vc3RpY3NQb3B1cCA9IChwcm9wczogRGlhZ25vc3RpY3NQb3B1cFByb3BzKSA9PiB7XG4gIGNvbnN0IHtmaXhlciwgZ29Ub0xvY2F0aW9uLCBjb2RlQWN0aW9uc0Zvck1lc3NhZ2UsIG1lc3NhZ2VzLCAuLi5yZXN0fSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhZ25vc3RpY3MtcG9wdXBcIiB7Li4ucmVzdH0+XG4gICAgICB7bWVzc2FnZXMubWFwKFxuICAgICAgICByZW5kZXJNZXNzYWdlLmJpbmQobnVsbCwgZml4ZXIsIGdvVG9Mb2NhdGlvbiwgY29kZUFjdGlvbnNGb3JNZXNzYWdlKSxcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19