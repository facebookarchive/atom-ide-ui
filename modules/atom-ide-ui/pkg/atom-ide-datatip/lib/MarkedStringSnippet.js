'use strict';

var cov_1kxig0ihfe = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/MarkedStringSnippet.js',
      hash = 'e153acb1e8b9664700f260da7039aa822c301a52',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/MarkedStringSnippet.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 18,
          column: 22
        }
      },
      '1': {
        start: {
          line: 35,
          column: 20
        },
        end: {
          line: 35,
          column: 30
        }
      },
      '2': {
        start: {
          line: 36,
          column: 27
        },
        end: {
          line: 36,
          column: 78
        }
      },
      '3': {
        start: {
          line: 37,
          column: 19
        },
        end: {
          line: 39,
          column: 5
        }
      },
      '4': {
        start: {
          line: 41,
          column: 20
        },
        end: {
          line: 41,
          column: 30
        }
      },
      '5': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 45,
          column: 5
        }
      },
      '6': {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 44,
          column: 76
        }
      },
      '7': {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 63,
          column: 6
        }
      },
      '8': {
        start: {
          line: 50,
          column: 10
        },
        end: {
          line: 50,
          column: 62
        }
      },
      '9': {
        start: {
          line: 51,
          column: 10
        },
        end: {
          line: 51,
          column: 30
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 23
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 34
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 49,
            column: 17
          },
          end: {
            line: 49,
            column: 18
          }
        },
        loc: {
          start: {
            line: 49,
            column: 42
          },
          end: {
            line: 52,
            column: 9
          }
        },
        line: 49
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 36,
            column: 27
          },
          end: {
            line: 36,
            column: 78
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 36,
            column: 27
          },
          end: {
            line: 36,
            column: 52
          }
        }, {
          start: {
            line: 36,
            column: 56
          },
          end: {
            line: 36,
            column: 78
          }
        }],
        line: 36
      },
      '1': {
        loc: {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 66
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 38,
            column: 23
          },
          end: {
            line: 38,
            column: 58
          }
        }, {
          start: {
            line: 38,
            column: 61
          },
          end: {
            line: 38,
            column: 66
          }
        }],
        line: 38
      },
      '2': {
        loc: {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }, {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        }],
        line: 42
      },
      '3': {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 75
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 64
          }
        }, {
          start: {
            line: 44,
            column: 68
          },
          end: {
            line: 44,
            column: 75
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
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0]
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

var _atom = require('atom');

var _react = _interopRequireWildcard(require('react'));

var _AtomTextEditor;

function _load_AtomTextEditor() {
  return _AtomTextEditor = require('nuclide-commons-ui/AtomTextEditor');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Complex types can end up being super long. Truncate them.
const MAX_LENGTH = (cov_1kxig0ihfe.s[0]++, 100); /**
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

class MarkedStringSnippet extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      isExpanded: false
    }, _temp;
  }

  render() {
    cov_1kxig0ihfe.f[0]++;

    const { value } = (cov_1kxig0ihfe.s[1]++, this.props);
    const shouldTruncate = (cov_1kxig0ihfe.s[2]++, (cov_1kxig0ihfe.b[0][0]++, value.length > MAX_LENGTH) && (cov_1kxig0ihfe.b[0][1]++, !this.state.isExpanded));
    const buffer = (cov_1kxig0ihfe.s[3]++, new _atom.TextBuffer(shouldTruncate ? (cov_1kxig0ihfe.b[1][0]++, value.substr(0, MAX_LENGTH) + '...') : (cov_1kxig0ihfe.b[1][1]++, value)));
    // Improve the display of Hack snippets.
    let { grammar } = (cov_1kxig0ihfe.s[4]++, this.props);
    cov_1kxig0ihfe.s[5]++;
    if (grammar.scopeName === 'text.html.hack') {
      cov_1kxig0ihfe.b[2][0]++;
      cov_1kxig0ihfe.s[6]++;

      grammar = (cov_1kxig0ihfe.b[3][0]++, atom.grammars.grammarForScopeName('source.hackfragment')) || (cov_1kxig0ihfe.b[3][1]++, grammar);
    } else {
      cov_1kxig0ihfe.b[2][1]++;
    }
    cov_1kxig0ihfe.s[7]++;
    return _react.createElement(
      'div',
      {
        className: 'datatip-marked-text-editor-container',
        onClick: e => {
          cov_1kxig0ihfe.f[1]++;
          cov_1kxig0ihfe.s[8]++;

          this.setState({ isExpanded: !this.state.isExpanded });
          cov_1kxig0ihfe.s[9]++;
          e.stopPropagation();
        } },
      _react.createElement((_AtomTextEditor || _load_AtomTextEditor()).AtomTextEditor, {
        className: 'datatip-marked-text-editor',
        gutterHidden: true,
        readOnly: true,
        syncTextContents: false,
        autoGrow: true,
        grammar: grammar,
        textBuffer: buffer
      })
    );
  }
}
exports.default = MarkedStringSnippet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1hcmtlZFN0cmluZ1NuaXBwZXQuanMiXSwibmFtZXMiOlsiTUFYX0xFTkdUSCIsIk1hcmtlZFN0cmluZ1NuaXBwZXQiLCJDb21wb25lbnQiLCJzdGF0ZSIsImlzRXhwYW5kZWQiLCJyZW5kZXIiLCJ2YWx1ZSIsInByb3BzIiwic2hvdWxkVHJ1bmNhdGUiLCJsZW5ndGgiLCJidWZmZXIiLCJzdWJzdHIiLCJncmFtbWFyIiwic2NvcGVOYW1lIiwiZ3JhbW1hcnMiLCJncmFtbWFyRm9yU2NvcGVOYW1lIiwiZSIsInNldFN0YXRlIiwic3RvcFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7QUFDQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUVBO0FBQ0EsTUFBTUEscUNBQWEsR0FBYixDQUFOLEMsQ0FqQkE7Ozs7Ozs7Ozs7OztBQTRCZSxNQUFNQyxtQkFBTixTQUFrQyxPQUFNQyxTQUF4QyxDQUFnRTtBQUFBO0FBQUE7O0FBQUEsd0NBQzdFQyxLQUQ2RSxHQUNyRTtBQUNOQyxrQkFBWTtBQUROLEtBRHFFO0FBQUE7O0FBSzdFQyxXQUFxQjtBQUFBOztBQUNuQixVQUFNLEVBQUNDLEtBQUQsNkJBQVUsS0FBS0MsS0FBZixDQUFOO0FBQ0EsVUFBTUMseUNBQWlCLGlDQUFNQyxNQUFOLEdBQWVULFVBQWYsZ0NBQTZCLENBQUMsS0FBS0csS0FBTCxDQUFXQyxVQUF6QyxDQUFqQixDQUFOO0FBQ0EsVUFBTU0saUNBQVMscUJBQ2JGLDRDQUFpQkYsTUFBTUssTUFBTixDQUFhLENBQWIsRUFBZ0JYLFVBQWhCLElBQThCLEtBQS9DLCtCQUF1RE0sS0FBdkQsQ0FEYSxDQUFULENBQU47QUFHQTtBQUNBLFFBQUksRUFBQ00sT0FBRCw2QkFBWSxLQUFLTCxLQUFqQixDQUFKO0FBUG1CO0FBUW5CLFFBQUlLLFFBQVFDLFNBQVIsS0FBc0IsZ0JBQTFCLEVBQTRDO0FBQUE7QUFBQTs7QUFDMUNELGdCQUNFLGdDQUFLRSxRQUFMLENBQWNDLG1CQUFkLENBQWtDLHFCQUFsQyxpQ0FBNERILE9BQTVELENBREY7QUFFRCxLQUhEO0FBQUE7QUFBQTtBQVJtQjtBQVluQixXQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFVLHNDQURaO0FBRUUsaUJBQVVJLENBQUQsSUFBeUI7QUFBQTtBQUFBOztBQUNoQyxlQUFLQyxRQUFMLENBQWMsRUFBQ2IsWUFBWSxDQUFDLEtBQUtELEtBQUwsQ0FBV0MsVUFBekIsRUFBZDtBQURnQztBQUVoQ1ksWUFBRUUsZUFBRjtBQUNELFNBTEg7QUFNRTtBQUNFLG1CQUFVLDRCQURaO0FBRUUsc0JBQWMsSUFGaEI7QUFHRSxrQkFBVSxJQUhaO0FBSUUsMEJBQWtCLEtBSnBCO0FBS0Usa0JBQVUsSUFMWjtBQU1FLGlCQUFTTixPQU5YO0FBT0Usb0JBQVlGO0FBUGQ7QUFORixLQURGO0FBa0JEO0FBbkM0RTtrQkFBMURULG1CIiwiZmlsZSI6Ik1hcmtlZFN0cmluZ1NuaXBwZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQge1RleHRCdWZmZXJ9IGZyb20gJ2F0b20nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBdG9tVGV4dEVkaXRvcn0gZnJvbSAnbnVjbGlkZS1jb21tb25zLXVpL0F0b21UZXh0RWRpdG9yJztcblxuLy8gQ29tcGxleCB0eXBlcyBjYW4gZW5kIHVwIGJlaW5nIHN1cGVyIGxvbmcuIFRydW5jYXRlIHRoZW0uXG5jb25zdCBNQVhfTEVOR1RIID0gMTAwO1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nLFxuICBncmFtbWFyOiBhdG9tJEdyYW1tYXIsXG59O1xuXG50eXBlIFN0YXRlID0ge1xuICBpc0V4cGFuZGVkOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2VkU3RyaW5nU25pcHBldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0Lk5vZGUge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNob3VsZFRydW5jYXRlID0gdmFsdWUubGVuZ3RoID4gTUFYX0xFTkdUSCAmJiAhdGhpcy5zdGF0ZS5pc0V4cGFuZGVkO1xuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBUZXh0QnVmZmVyKFxuICAgICAgc2hvdWxkVHJ1bmNhdGUgPyB2YWx1ZS5zdWJzdHIoMCwgTUFYX0xFTkdUSCkgKyAnLi4uJyA6IHZhbHVlLFxuICAgICk7XG4gICAgLy8gSW1wcm92ZSB0aGUgZGlzcGxheSBvZiBIYWNrIHNuaXBwZXRzLlxuICAgIGxldCB7Z3JhbW1hcn0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChncmFtbWFyLnNjb3BlTmFtZSA9PT0gJ3RleHQuaHRtbC5oYWNrJykge1xuICAgICAgZ3JhbW1hciA9XG4gICAgICAgIGF0b20uZ3JhbW1hcnMuZ3JhbW1hckZvclNjb3BlTmFtZSgnc291cmNlLmhhY2tmcmFnbWVudCcpIHx8IGdyYW1tYXI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImRhdGF0aXAtbWFya2VkLXRleHQtZWRpdG9yLWNvbnRhaW5lclwiXG4gICAgICAgIG9uQ2xpY2s9eyhlOiBTeW50aGV0aWNFdmVudDw+KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFeHBhbmRlZDogIXRoaXMuc3RhdGUuaXNFeHBhbmRlZH0pO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH19PlxuICAgICAgICA8QXRvbVRleHRFZGl0b3JcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXRhdGlwLW1hcmtlZC10ZXh0LWVkaXRvclwiXG4gICAgICAgICAgZ3V0dGVySGlkZGVuPXt0cnVlfVxuICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgIHN5bmNUZXh0Q29udGVudHM9e2ZhbHNlfVxuICAgICAgICAgIGF1dG9Hcm93PXt0cnVlfVxuICAgICAgICAgIGdyYW1tYXI9e2dyYW1tYXJ9XG4gICAgICAgICAgdGV4dEJ1ZmZlcj17YnVmZmVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19