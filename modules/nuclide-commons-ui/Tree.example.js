'use strict';

var cov_2e7r6ldwg9 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Tree.example.js',
      hash = '5303603c492d5d9d38e2407913575e11e81bc955',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Tree.example.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 25
        },
        end: {
          line: 41,
          column: 1
        }
      },
      '1': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 40,
          column: 8
        }
      },
      '2': {
        start: {
          line: 43,
          column: 34
        },
        end: {
          line: 76,
          column: 1
        }
      },
      '3': {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 75,
          column: 10
        }
      },
      '4': {
        start: {
          line: 78,
          column: 28
        },
        end: {
          line: 91,
          column: 1
        }
      },
      '5': {
        start: {
          line: 94,
          column: 2
        },
        end: {
          line: 94,
          column: 42
        }
      },
      '6': {
        start: {
          line: 97,
          column: 2
        },
        end: {
          line: 97,
          column: 43
        }
      },
      '7': {
        start: {
          line: 100,
          column: 2
        },
        end: {
          line: 100,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 26
          }
        },
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 40,
            column: 8
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 43,
            column: 34
          },
          end: {
            line: 43,
            column: 35
          }
        },
        loc: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 75,
            column: 10
          }
        },
        line: 44
      },
      '2': {
        name: 'handleSelect',
        decl: {
          start: {
            line: 93,
            column: 9
          },
          end: {
            line: 93,
            column: 21
          }
        },
        loc: {
          start: {
            line: 93,
            column: 24
          },
          end: {
            line: 95,
            column: 1
          }
        },
        line: 93
      },
      '3': {
        name: 'handleConfirm',
        decl: {
          start: {
            line: 96,
            column: 9
          },
          end: {
            line: 96,
            column: 22
          }
        },
        loc: {
          start: {
            line: 96,
            column: 25
          },
          end: {
            line: 98,
            column: 1
          }
        },
        line: 96
      },
      '4': {
        name: 'handleTripleClick',
        decl: {
          start: {
            line: 99,
            column: 9
          },
          end: {
            line: 99,
            column: 26
          }
        },
        loc: {
          start: {
            line: 99,
            column: 29
          },
          end: {
            line: 101,
            column: 1
          }
        },
        line: 99
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
      '7': 0
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
exports.TreeExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _Icon;

function _load_Icon() {
  return _Icon = require('./Icon');
}

var _Tree;

function _load_Tree() {
  return _Tree = require('./Tree');
}

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

cov_2e7r6ldwg9.s[0]++;


const BasicTreeExample = () => {
  cov_2e7r6ldwg9.f[0]++;
  cov_2e7r6ldwg9.s[1]++;
  return _react.createElement(
    'div',
    null,
    'Trees',
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Tree || _load_Tree()).TreeList,
        null,
        _react.createElement(
          (_Tree || _load_Tree()).TreeItem,
          null,
          'TreeItem 1'
        ),
        _react.createElement(
          (_Tree || _load_Tree()).TreeItem,
          null,
          'TreeItem 2'
        ),
        _react.createElement(
          (_Tree || _load_Tree()).NestedTreeItem,
          {
            title: _react.createElement(
              'span',
              null,
              'NestedTreeItem 1 -- click me!'
            ),
            onSelect: handleSelect,
            onConfirm: handleConfirm,
            onTripleClick: handleTripleClick,
            selected: true },
          _react.createElement(
            (_Tree || _load_Tree()).TreeItem,
            null,
            'TreeItem 3'
          ),
          _react.createElement(
            (_Tree || _load_Tree()).TreeItem,
            null,
            'TreeItem 4'
          )
        ),
        _react.createElement((_Tree || _load_Tree()).NestedTreeItem, {
          title: _react.createElement(
            'span',
            null,
            'NestedTreeItem 2'
          ),
          collapsed: true
        })
      )
    )
  );
};

cov_2e7r6ldwg9.s[2]++;
const AtomStyleguideTreeExample = () => {
  cov_2e7r6ldwg9.f[1]++;
  cov_2e7r6ldwg9.s[3]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      (_Tree || _load_Tree()).TreeList,
      { showArrows: true },
      _react.createElement(
        (_Tree || _load_Tree()).NestedTreeItem,
        { title: _react.createElement(
            (_Icon || _load_Icon()).Icon,
            { icon: 'file-directory' },
            'A Directory'
          ) },
        _react.createElement(
          (_Tree || _load_Tree()).NestedTreeItem,
          {
            collapsed: false,
            title: _react.createElement(
              (_Icon || _load_Icon()).Icon,
              { icon: 'file-directory' },
              'Nested Directory'
            ) },
          _react.createElement(
            (_Tree || _load_Tree()).TreeItem,
            null,
            _react.createElement(
              (_Icon || _load_Icon()).Icon,
              { icon: 'file-text' },
              'File one'
            )
          )
        ),
        _react.createElement(
          (_Tree || _load_Tree()).NestedTreeItem,
          {
            collapsed: true,
            title: _react.createElement(
              (_Icon || _load_Icon()).Icon,
              { icon: 'file-directory' },
              'Collapsed Nested Directory'
            ) },
          _react.createElement(
            (_Tree || _load_Tree()).TreeItem,
            null,
            _react.createElement(
              (_Icon || _load_Icon()).Icon,
              { icon: 'file-text' },
              'File one'
            )
          )
        ),
        _react.createElement(
          (_Tree || _load_Tree()).TreeItem,
          null,
          _react.createElement(
            (_Icon || _load_Icon()).Icon,
            { icon: 'file-text' },
            'File one'
          )
        ),
        _react.createElement(
          (_Tree || _load_Tree()).TreeItem,
          { selected: true },
          _react.createElement(
            (_Icon || _load_Icon()).Icon,
            { icon: 'file-text' },
            'File three .selected!'
          )
        )
      ),
      _react.createElement(
        (_Tree || _load_Tree()).TreeItem,
        null,
        _react.createElement(
          (_Icon || _load_Icon()).Icon,
          { icon: 'file-text' },
          '.icon-file-text'
        )
      ),
      _react.createElement(
        (_Tree || _load_Tree()).TreeItem,
        null,
        _react.createElement(
          (_Icon || _load_Icon()).Icon,
          { icon: 'file-symlink-file' },
          '.icon-file-symlink-file'
        )
      )
    )
  );
};

const TreeExamples = exports.TreeExamples = (cov_2e7r6ldwg9.s[4]++, {
  sectionName: 'Trees',
  description: 'Expandable, hierarchical lists.',
  examples: [{
    title: 'Basic Tree',
    component: BasicTreeExample
  }, {
    title: 'Reproducing the Atom style guide example:',
    component: AtomStyleguideTreeExample
  }]
});

function handleSelect() {
  cov_2e7r6ldwg9.f[2]++;
  cov_2e7r6ldwg9.s[5]++;

  atom.notifications.addInfo('selected!');
}
function handleConfirm() {
  cov_2e7r6ldwg9.f[3]++;
  cov_2e7r6ldwg9.s[6]++;

  atom.notifications.addInfo('confirmed!');
}
function handleTripleClick() {
  cov_2e7r6ldwg9.f[4]++;
  cov_2e7r6ldwg9.s[7]++;

  atom.notifications.addInfo('triple clicked!');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJCYXNpY1RyZWVFeGFtcGxlIiwiaGFuZGxlU2VsZWN0IiwiaGFuZGxlQ29uZmlybSIsImhhbmRsZVRyaXBsZUNsaWNrIiwiQXRvbVN0eWxlZ3VpZGVUcmVlRXhhbXBsZSIsIlRyZWVFeGFtcGxlcyIsInNlY3Rpb25OYW1lIiwiZGVzY3JpcHRpb24iLCJleGFtcGxlcyIsInRpdGxlIiwiY29tcG9uZW50IiwiYXRvbSIsIm5vdGlmaWNhdGlvbnMiLCJhZGRJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQWZBOzs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTUEsbUJBQW1CLE1BQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0UsbUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURUO0FBRUUsc0JBQVVDLFlBRlo7QUFHRSx1QkFBV0MsYUFIYjtBQUlFLDJCQUFlQyxpQkFKakI7QUFLRSxzQkFBVSxJQUxaO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLFNBSEY7QUFZRTtBQUNFLGlCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVDtBQUVFLHFCQUFXO0FBRmI7QUFaRjtBQURGO0FBRkY7QUFxQk0sQ0F0QlI7OztBQXlCQSxNQUFNQyw0QkFBNEIsTUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQVUsWUFBWSxJQUF0QjtBQUNFO0FBQUE7QUFBQSxVQUFnQixPQUFPO0FBQUE7QUFBQSxjQUFNLE1BQUssZ0JBQVg7QUFBQTtBQUFBLFdBQXZCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsdUJBQVcsS0FEYjtBQUVFLG1CQUFPO0FBQUE7QUFBQSxnQkFBTSxNQUFLLGdCQUFYO0FBQUE7QUFBQSxhQUZUO0FBR0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLE1BQUssV0FBWDtBQUFBO0FBQUE7QUFERjtBQUhGLFNBREY7QUFRRTtBQUFBO0FBQUE7QUFDRSx1QkFBVyxJQURiO0FBRUUsbUJBQU87QUFBQTtBQUFBLGdCQUFNLE1BQUssZ0JBQVg7QUFBQTtBQUFBLGFBRlQ7QUFHRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxXQUFYO0FBQUE7QUFBQTtBQURGO0FBSEYsU0FSRjtBQWVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLE1BQUssV0FBWDtBQUFBO0FBQUE7QUFERixTQWZGO0FBa0JFO0FBQUE7QUFBQSxZQUFVLFVBQVUsSUFBcEI7QUFDRTtBQUFBO0FBQUEsY0FBTSxNQUFLLFdBQVg7QUFBQTtBQUFBO0FBREY7QUFsQkYsT0FERjtBQXVCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxNQUFLLFdBQVg7QUFBQTtBQUFBO0FBREYsT0F2QkY7QUEwQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sTUFBSyxtQkFBWDtBQUFBO0FBQUE7QUFERjtBQTFCRjtBQURGO0FBK0JRLENBaENWOztBQW1DTyxNQUFNQyw4REFBZTtBQUMxQkMsZUFBYSxPQURhO0FBRTFCQyxlQUFhLGlDQUZhO0FBRzFCQyxZQUFVLENBQ1I7QUFDRUMsV0FBTyxZQURUO0FBRUVDLGVBQVdWO0FBRmIsR0FEUSxFQUtSO0FBQ0VTLFdBQU8sMkNBRFQ7QUFFRUMsZUFBV047QUFGYixHQUxRO0FBSGdCLENBQWYsQ0FBTjs7QUFlUCxTQUFTSCxZQUFULEdBQXdCO0FBQUE7QUFBQTs7QUFDdEJVLE9BQUtDLGFBQUwsQ0FBbUJDLE9BQW5CLENBQTJCLFdBQTNCO0FBQ0Q7QUFDRCxTQUFTWCxhQUFULEdBQXlCO0FBQUE7QUFBQTs7QUFDdkJTLE9BQUtDLGFBQUwsQ0FBbUJDLE9BQW5CLENBQTJCLFlBQTNCO0FBQ0Q7QUFDRCxTQUFTVixpQkFBVCxHQUE2QjtBQUFBO0FBQUE7O0FBQzNCUSxPQUFLQyxhQUFMLENBQW1CQyxPQUFuQixDQUEyQixpQkFBM0I7QUFDRCIsImZpbGUiOiJUcmVlLmV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuL0Jsb2NrJztcbmltcG9ydCB7SWNvbn0gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7VHJlZUxpc3QsIFRyZWVJdGVtLCBOZXN0ZWRUcmVlSXRlbX0gZnJvbSAnLi9UcmVlJztcblxuY29uc3QgQmFzaWNUcmVlRXhhbXBsZSA9ICgpOiBSZWFjdC5FbGVtZW50PGFueT4gPT4gKFxuICA8ZGl2PlxuICAgIFRyZWVzXG4gICAgPEJsb2NrPlxuICAgICAgPFRyZWVMaXN0PlxuICAgICAgICA8VHJlZUl0ZW0+VHJlZUl0ZW0gMTwvVHJlZUl0ZW0+XG4gICAgICAgIDxUcmVlSXRlbT5UcmVlSXRlbSAyPC9UcmVlSXRlbT5cbiAgICAgICAgPE5lc3RlZFRyZWVJdGVtXG4gICAgICAgICAgdGl0bGU9ezxzcGFuPk5lc3RlZFRyZWVJdGVtIDEgLS0gY2xpY2sgbWUhPC9zcGFuPn1cbiAgICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxuICAgICAgICAgIG9uQ29uZmlybT17aGFuZGxlQ29uZmlybX1cbiAgICAgICAgICBvblRyaXBsZUNsaWNrPXtoYW5kbGVUcmlwbGVDbGlja31cbiAgICAgICAgICBzZWxlY3RlZD17dHJ1ZX0+XG4gICAgICAgICAgPFRyZWVJdGVtPlRyZWVJdGVtIDM8L1RyZWVJdGVtPlxuICAgICAgICAgIDxUcmVlSXRlbT5UcmVlSXRlbSA0PC9UcmVlSXRlbT5cbiAgICAgICAgPC9OZXN0ZWRUcmVlSXRlbT5cbiAgICAgICAgPE5lc3RlZFRyZWVJdGVtXG4gICAgICAgICAgdGl0bGU9ezxzcGFuPk5lc3RlZFRyZWVJdGVtIDI8L3NwYW4+fVxuICAgICAgICAgIGNvbGxhcHNlZD17dHJ1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvVHJlZUxpc3Q+XG4gICAgPC9CbG9jaz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBBdG9tU3R5bGVndWlkZVRyZWVFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxCbG9jaz5cbiAgICA8VHJlZUxpc3Qgc2hvd0Fycm93cz17dHJ1ZX0+XG4gICAgICA8TmVzdGVkVHJlZUl0ZW0gdGl0bGU9ezxJY29uIGljb249XCJmaWxlLWRpcmVjdG9yeVwiPkEgRGlyZWN0b3J5PC9JY29uPn0+XG4gICAgICAgIDxOZXN0ZWRUcmVlSXRlbVxuICAgICAgICAgIGNvbGxhcHNlZD17ZmFsc2V9XG4gICAgICAgICAgdGl0bGU9ezxJY29uIGljb249XCJmaWxlLWRpcmVjdG9yeVwiPk5lc3RlZCBEaXJlY3Rvcnk8L0ljb24+fT5cbiAgICAgICAgICA8VHJlZUl0ZW0+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiZmlsZS10ZXh0XCI+RmlsZSBvbmU8L0ljb24+XG4gICAgICAgICAgPC9UcmVlSXRlbT5cbiAgICAgICAgPC9OZXN0ZWRUcmVlSXRlbT5cbiAgICAgICAgPE5lc3RlZFRyZWVJdGVtXG4gICAgICAgICAgY29sbGFwc2VkPXt0cnVlfVxuICAgICAgICAgIHRpdGxlPXs8SWNvbiBpY29uPVwiZmlsZS1kaXJlY3RvcnlcIj5Db2xsYXBzZWQgTmVzdGVkIERpcmVjdG9yeTwvSWNvbj59PlxuICAgICAgICAgIDxUcmVlSXRlbT5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJmaWxlLXRleHRcIj5GaWxlIG9uZTwvSWNvbj5cbiAgICAgICAgICA8L1RyZWVJdGVtPlxuICAgICAgICA8L05lc3RlZFRyZWVJdGVtPlxuICAgICAgICA8VHJlZUl0ZW0+XG4gICAgICAgICAgPEljb24gaWNvbj1cImZpbGUtdGV4dFwiPkZpbGUgb25lPC9JY29uPlxuICAgICAgICA8L1RyZWVJdGVtPlxuICAgICAgICA8VHJlZUl0ZW0gc2VsZWN0ZWQ9e3RydWV9PlxuICAgICAgICAgIDxJY29uIGljb249XCJmaWxlLXRleHRcIj5GaWxlIHRocmVlIC5zZWxlY3RlZCE8L0ljb24+XG4gICAgICAgIDwvVHJlZUl0ZW0+XG4gICAgICA8L05lc3RlZFRyZWVJdGVtPlxuICAgICAgPFRyZWVJdGVtPlxuICAgICAgICA8SWNvbiBpY29uPVwiZmlsZS10ZXh0XCI+Lmljb24tZmlsZS10ZXh0PC9JY29uPlxuICAgICAgPC9UcmVlSXRlbT5cbiAgICAgIDxUcmVlSXRlbT5cbiAgICAgICAgPEljb24gaWNvbj1cImZpbGUtc3ltbGluay1maWxlXCI+Lmljb24tZmlsZS1zeW1saW5rLWZpbGU8L0ljb24+XG4gICAgICA8L1RyZWVJdGVtPlxuICAgIDwvVHJlZUxpc3Q+XG4gIDwvQmxvY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgVHJlZUV4YW1wbGVzID0ge1xuICBzZWN0aW9uTmFtZTogJ1RyZWVzJyxcbiAgZGVzY3JpcHRpb246ICdFeHBhbmRhYmxlLCBoaWVyYXJjaGljYWwgbGlzdHMuJyxcbiAgZXhhbXBsZXM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0Jhc2ljIFRyZWUnLFxuICAgICAgY29tcG9uZW50OiBCYXNpY1RyZWVFeGFtcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZXByb2R1Y2luZyB0aGUgQXRvbSBzdHlsZSBndWlkZSBleGFtcGxlOicsXG4gICAgICBjb21wb25lbnQ6IEF0b21TdHlsZWd1aWRlVHJlZUV4YW1wbGUsXG4gICAgfSxcbiAgXSxcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZVNlbGVjdCgpIHtcbiAgYXRvbS5ub3RpZmljYXRpb25zLmFkZEluZm8oJ3NlbGVjdGVkIScpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ29uZmlybSgpIHtcbiAgYXRvbS5ub3RpZmljYXRpb25zLmFkZEluZm8oJ2NvbmZpcm1lZCEnKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVRyaXBsZUNsaWNrKCkge1xuICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkSW5mbygndHJpcGxlIGNsaWNrZWQhJyk7XG59XG4iXX0=