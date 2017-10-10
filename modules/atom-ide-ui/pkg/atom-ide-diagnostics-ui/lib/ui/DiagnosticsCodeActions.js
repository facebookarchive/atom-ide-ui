'use strict';

var cov_2e5s86g8e3 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/DiagnosticsCodeActions.js',
      hash = '28b4c59e18528fc7228f9cd4eb206edfc8638192',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/DiagnosticsCodeActions.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 25
        },
        end: {
          line: 20,
          column: 26
        }
      },
      '1': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 46,
          column: 4
        }
      },
      '2': {
        start: {
          line: 31,
          column: 10
        },
        end: {
          line: 43,
          column: 12
        }
      },
      '3': {
        start: {
          line: 38,
          column: 18
        },
        end: {
          line: 38,
          column: 68
        }
      },
      '4': {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 53,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: 'DiagnosticsCodeActions',
        decl: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 22,
            column: 46
          }
        },
        loc: {
          start: {
            line: 24,
            column: 23
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 24
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 30,
            column: 13
          },
          end: {
            line: 30,
            column: 14
          }
        },
        loc: {
          start: {
            line: 30,
            column: 41
          },
          end: {
            line: 44,
            column: 9
          }
        },
        line: 30
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 36,
            column: 25
          },
          end: {
            line: 36,
            column: 26
          }
        },
        loc: {
          start: {
            line: 36,
            column: 31
          },
          end: {
            line: 39,
            column: 17
          }
        },
        line: 36
      },
      '3': {
        name: 'handleCodeActionFailure',
        decl: {
          start: {
            line: 49,
            column: 9
          },
          end: {
            line: 49,
            column: 32
          }
        },
        loc: {
          start: {
            line: 49,
            column: 48
          },
          end: {
            line: 54,
            column: 1
          }
        },
        line: 49
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 51,
            column: 17
          },
          end: {
            line: 51,
            column: 43
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 51,
            column: 25
          },
          end: {
            line: 51,
            column: 38
          }
        }, {
          start: {
            line: 51,
            column: 41
          },
          end: {
            line: 51,
            column: 43
          }
        }],
        line: 51
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
      '1': 0,
      '2': 0,
      '3': 0
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
exports.default = DiagnosticsCodeActions;

var _react = _interopRequireWildcard(require('react'));

var _Button;

function _load_Button() {
  return _Button = require('nuclide-commons-ui/Button');
}

var _ButtonGroup;

function _load_ButtonGroup() {
  return _ButtonGroup = require('nuclide-commons-ui/ButtonGroup');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Maximum number of CodeActions to show for a given Diagnostic.
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

const MAX_CODE_ACTIONS = (cov_2e5s86g8e3.s[0]++, 4);

function DiagnosticsCodeActions(props) {
  cov_2e5s86g8e3.f[0]++;
  cov_2e5s86g8e3.s[1]++;

  return _react.createElement(
    'div',
    { className: 'diagnostics-code-actions' },
    Array.from(props.codeActions.entries()).splice(0, MAX_CODE_ACTIONS)
    // TODO: (seansegal) T21130259 Display a "more" indicator when there are many CodeActions.
    .map(([title, codeAction], i) => {
      cov_2e5s86g8e3.f[1]++;
      cov_2e5s86g8e3.s[2]++;

      return _react.createElement(
        (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
        { key: i },
        _react.createElement(
          (_Button || _load_Button()).Button,
          {
            className: 'diagnostics-code-action-button',
            size: 'EXTRA_SMALL',
            onClick: () => {
              cov_2e5s86g8e3.f[2]++;
              cov_2e5s86g8e3.s[3]++;

              // TODO: (seansegal) T21130332 Display CodeAction status indicators
              codeAction.apply().catch(handleCodeActionFailure);
            } },
          _react.createElement(
            'span',
            { className: 'inline-block' },
            title
          )
        )
      );
    })
  );
}

function handleCodeActionFailure(error) {
  cov_2e5s86g8e3.f[3]++;
  cov_2e5s86g8e3.s[4]++;

  atom.notifications.addWarning('Code action could not be applied', {
    description: error ? (cov_2e5s86g8e3.b[0][0]++, error.message) : (cov_2e5s86g8e3.b[0][1]++, ''),
    dismissable: true
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpYWdub3N0aWNzQ29kZUFjdGlvbnMuanMiXSwibmFtZXMiOlsiRGlhZ25vc3RpY3NDb2RlQWN0aW9ucyIsIk1BWF9DT0RFX0FDVElPTlMiLCJwcm9wcyIsIkFycmF5IiwiZnJvbSIsImNvZGVBY3Rpb25zIiwiZW50cmllcyIsInNwbGljZSIsIm1hcCIsInRpdGxlIiwiY29kZUFjdGlvbiIsImkiLCJhcHBseSIsImNhdGNoIiwiaGFuZGxlQ29kZUFjdGlvbkZhaWx1cmUiLCJlcnJvciIsImF0b20iLCJub3RpZmljYXRpb25zIiwiYWRkV2FybmluZyIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsImRpc21pc3NhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBcUJ3QkEsc0I7O0FBUHhCOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBRUE7QUFsQkE7Ozs7Ozs7Ozs7OztBQW1CQSxNQUFNQywyQ0FBbUIsQ0FBbkIsQ0FBTjs7QUFFZSxTQUFTRCxzQkFBVCxDQUFnQ0UsS0FBaEMsRUFFUTtBQUFBO0FBQUE7O0FBQ3JCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSwwQkFBZjtBQUNHQyxVQUFNQyxJQUFOLENBQVdGLE1BQU1HLFdBQU4sQ0FBa0JDLE9BQWxCLEVBQVgsRUFDRUMsTUFERixDQUNTLENBRFQsRUFDWU4sZ0JBRFo7QUFFQztBQUZELEtBR0VPLEdBSEYsQ0FHTSxDQUFDLENBQUNDLEtBQUQsRUFBUUMsVUFBUixDQUFELEVBQXNCQyxDQUF0QixLQUE0QjtBQUFBO0FBQUE7O0FBQy9CLGFBQ0U7QUFBQTtBQUFBLFVBQWEsS0FBS0EsQ0FBbEI7QUFDRTtBQUFBO0FBQUE7QUFDRSx1QkFBVSxnQ0FEWjtBQUVFLGtCQUFLLGFBRlA7QUFHRSxxQkFBUyxNQUFNO0FBQUE7QUFBQTs7QUFDYjtBQUNBRCx5QkFBV0UsS0FBWCxHQUFtQkMsS0FBbkIsQ0FBeUJDLHVCQUF6QjtBQUNELGFBTkg7QUFPRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGNBQWhCO0FBQWdDTDtBQUFoQztBQVBGO0FBREYsT0FERjtBQWFELEtBakJGO0FBREgsR0FERjtBQXNCRDs7QUFFRCxTQUFTSyx1QkFBVCxDQUFpQ0MsS0FBakMsRUFBZ0Q7QUFBQTtBQUFBOztBQUM5Q0MsT0FBS0MsYUFBTCxDQUFtQkMsVUFBbkIsQ0FBOEIsa0NBQTlCLEVBQWtFO0FBQ2hFQyxpQkFBYUosbUNBQVFBLE1BQU1LLE9BQWQsK0JBQXdCLEVBQXhCLENBRG1EO0FBRWhFQyxpQkFBYTtBQUZtRCxHQUFsRTtBQUlEIiwiZmlsZSI6IkRpYWdub3N0aWNzQ29kZUFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7Q29kZUFjdGlvbn0gZnJvbSAnLi4vLi4vLi4vYXRvbS1pZGUtY29kZS1hY3Rpb25zL2xpYi90eXBlcyc7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdudWNsaWRlLWNvbW1vbnMtdWkvQnV0dG9uJztcbmltcG9ydCB7QnV0dG9uR3JvdXB9IGZyb20gJ251Y2xpZGUtY29tbW9ucy11aS9CdXR0b25Hcm91cCc7XG5cbi8vIE1heGltdW0gbnVtYmVyIG9mIENvZGVBY3Rpb25zIHRvIHNob3cgZm9yIGEgZ2l2ZW4gRGlhZ25vc3RpYy5cbmNvbnN0IE1BWF9DT0RFX0FDVElPTlMgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWFnbm9zdGljc0NvZGVBY3Rpb25zKHByb3BzOiB7XG4gIGNvZGVBY3Rpb25zOiBNYXA8c3RyaW5nLCBDb2RlQWN0aW9uPixcbn0pOiBSZWFjdC5FbGVtZW50PGFueT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhZ25vc3RpY3MtY29kZS1hY3Rpb25zXCI+XG4gICAgICB7QXJyYXkuZnJvbShwcm9wcy5jb2RlQWN0aW9ucy5lbnRyaWVzKCkpXG4gICAgICAgIC5zcGxpY2UoMCwgTUFYX0NPREVfQUNUSU9OUylcbiAgICAgICAgLy8gVE9ETzogKHNlYW5zZWdhbCkgVDIxMTMwMjU5IERpc3BsYXkgYSBcIm1vcmVcIiBpbmRpY2F0b3Igd2hlbiB0aGVyZSBhcmUgbWFueSBDb2RlQWN0aW9ucy5cbiAgICAgICAgLm1hcCgoW3RpdGxlLCBjb2RlQWN0aW9uXSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAga2V5PXtpfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWdub3N0aWNzLWNvZGUtYWN0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cIkVYVFJBX1NNQUxMXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBUT0RPOiAoc2VhbnNlZ2FsKSBUMjExMzAzMzIgRGlzcGxheSBDb2RlQWN0aW9uIHN0YXR1cyBpbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICBjb2RlQWN0aW9uLmFwcGx5KCkuY2F0Y2goaGFuZGxlQ29kZUFjdGlvbkZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29kZUFjdGlvbkZhaWx1cmUoZXJyb3I6ID9FcnJvcikge1xuICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkV2FybmluZygnQ29kZSBhY3Rpb24gY291bGQgbm90IGJlIGFwcGxpZWQnLCB7XG4gICAgZGVzY3JpcHRpb246IGVycm9yID8gZXJyb3IubWVzc2FnZSA6ICcnLFxuICAgIGRpc21pc3NhYmxlOiB0cnVlLFxuICB9KTtcbn1cbiJdfQ==