'use strict';

var cov_24bualzbou = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TextInputs.example.js',
      hash = '8b6742a554c00c4abcbb38200f525db2e2288f25',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TextInputs.example.js',
    statementMap: {
      '0': {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 71,
          column: 1
        }
      },
      '1': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 70,
          column: 8
        }
      },
      '2': {
        start: {
          line: 73,
          column: 16
        },
        end: {
          line: 75,
          column: 2
        }
      },
      '3': {
        start: {
          line: 76,
          column: 16
        },
        end: {
          line: 79,
          column: 2
        }
      },
      '4': {
        start: {
          line: 80,
          column: 27
        },
        end: {
          line: 85,
          column: 1
        }
      },
      '5': {
        start: {
          line: 87,
          column: 30
        },
        end: {
          line: 110,
          column: 1
        }
      },
      '6': {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 109,
          column: 10
        }
      },
      '7': {
        start: {
          line: 112,
          column: 33
        },
        end: {
          line: 125,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 25
          },
          end: {
            line: 19,
            column: 26
          }
        },
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 70,
            column: 8
          }
        },
        line: 20
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 87,
            column: 30
          },
          end: {
            line: 87,
            column: 31
          }
        },
        loc: {
          start: {
            line: 88,
            column: 2
          },
          end: {
            line: 109,
            column: 10
          }
        },
        line: 88
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
exports.TextInputExamples = undefined;

var _atom = require('atom');

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _AtomInput;

function _load_AtomInput() {
  return _AtomInput = require('./AtomInput');
}

var _AtomTextEditor;

function _load_AtomTextEditor() {
  return _AtomTextEditor = require('./AtomTextEditor');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_24bualzbou.s[0]++; /**
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

const AtomInputExample = () => {
  cov_24bualzbou.f[0]++;
  cov_24bualzbou.s[1]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
        disabled: false,
        initialValue: 'atom input',
        placeholderText: 'placeholder text'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
        disabled: true,
        initialValue: 'disabled atom input',
        placeholderText: 'placeholder text'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
        initialValue: 'xs atom input',
        placeholderText: 'placeholder text',
        size: 'xs'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
        initialValue: 'sm atom input',
        placeholderText: 'placeholder text',
        size: 'sm'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
        initialValue: 'lg atom input',
        placeholderText: 'placeholder text',
        size: 'lg'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
        initialValue: 'unstyled atom input',
        placeholderText: 'placeholder text',
        unstyled: true
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_AtomInput || _load_AtomInput()).AtomInput, {
        initialValue: 'atom input with custom width',
        placeholderText: 'placeholder text',
        width: 200
      })
    )
  );
};

const buffer1 = (cov_24bualzbou.s[2]++, new _atom.TextBuffer({
  text: '/**\n * Hi!\n */\n\n// I am a TextBuffer.\nconst a = 42;'
}));
const buffer2 = (cov_24bualzbou.s[3]++, new _atom.TextBuffer({
  text: '/**\n * Hi!\n */\n\n// I am a read-only, gutter-less TextBuffer.\nconst a = 42;'
}));
const editorWrapperStyle = (cov_24bualzbou.s[4]++, {
  display: 'flex',
  flexGrow: 1,
  height: '12em',
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.3)'
});

cov_24bualzbou.s[5]++;
const AtomTextEditorExample = () => {
  cov_24bualzbou.f[1]++;
  cov_24bualzbou.s[6]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      'div',
      { style: editorWrapperStyle },
      _react.createElement((_AtomTextEditor || _load_AtomTextEditor()).AtomTextEditor, {
        gutterHidden: false,
        readOnly: false,
        syncTextContents: false,
        autoGrow: false,
        path: 'aJavaScriptFile.js',
        textBuffer: buffer1
      })
    ),
    _react.createElement(
      'div',
      { style: Object.assign({}, editorWrapperStyle, { marginTop: '2em' }) },
      _react.createElement((_AtomTextEditor || _load_AtomTextEditor()).AtomTextEditor, {
        gutterHidden: true,
        readOnly: true,
        syncTextContents: false,
        autoGrow: false,
        path: 'aJavaScriptFile.js',
        textBuffer: buffer2
      })
    )
  );
};

const TextInputExamples = exports.TextInputExamples = (cov_24bualzbou.s[7]++, {
  sectionName: 'Text Inputs',
  description: '',
  examples: [{
    title: 'AtomInput',
    component: AtomInputExample
  }, {
    title: 'AtomTextEditor',
    component: AtomTextEditorExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRleHRJbnB1dHMuZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJBdG9tSW5wdXRFeGFtcGxlIiwiYnVmZmVyMSIsInRleHQiLCJidWZmZXIyIiwiZWRpdG9yV3JhcHBlclN0eWxlIiwiZGlzcGxheSIsImZsZXhHcm93IiwiaGVpZ2h0IiwiYm94U2hhZG93IiwiQXRvbVRleHRFZGl0b3JFeGFtcGxlIiwibWFyZ2luVG9wIiwiVGV4dElucHV0RXhhbXBsZXMiLCJzZWN0aW9uTmFtZSIsImRlc2NyaXB0aW9uIiwiZXhhbXBsZXMiLCJ0aXRsZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7O0FBQ0E7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7dUJBaEJBOzs7Ozs7Ozs7Ozs7QUFrQkEsTUFBTUEsbUJBQW1CLE1BQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0Usa0JBQVUsS0FEWjtBQUVFLHNCQUFhLFlBRmY7QUFHRSx5QkFBZ0I7QUFIbEI7QUFERixLQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0U7QUFDRSxrQkFBVSxJQURaO0FBRUUsc0JBQWEscUJBRmY7QUFHRSx5QkFBZ0I7QUFIbEI7QUFERixLQVJGO0FBZUU7QUFBQTtBQUFBO0FBQ0U7QUFDRSxzQkFBYSxlQURmO0FBRUUseUJBQWdCLGtCQUZsQjtBQUdFLGNBQUs7QUFIUDtBQURGLEtBZkY7QUFzQkU7QUFBQTtBQUFBO0FBQ0U7QUFDRSxzQkFBYSxlQURmO0FBRUUseUJBQWdCLGtCQUZsQjtBQUdFLGNBQUs7QUFIUDtBQURGLEtBdEJGO0FBNkJFO0FBQUE7QUFBQTtBQUNFO0FBQ0Usc0JBQWEsZUFEZjtBQUVFLHlCQUFnQixrQkFGbEI7QUFHRSxjQUFLO0FBSFA7QUFERixLQTdCRjtBQW9DRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHNCQUFhLHFCQURmO0FBRUUseUJBQWdCLGtCQUZsQjtBQUdFLGtCQUFVO0FBSFo7QUFERixLQXBDRjtBQTJDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLHNCQUFhLDhCQURmO0FBRUUseUJBQWdCLGtCQUZsQjtBQUdFLGVBQU87QUFIVDtBQURGO0FBM0NGO0FBa0RNLENBbkRSOztBQXNEQSxNQUFNQyxrQ0FBVSxxQkFBZTtBQUM3QkMsUUFBTTtBQUR1QixDQUFmLENBQVYsQ0FBTjtBQUdBLE1BQU1DLGtDQUFVLHFCQUFlO0FBQzdCRCxRQUNFO0FBRjJCLENBQWYsQ0FBVixDQUFOO0FBSUEsTUFBTUUsNkNBQXFCO0FBQ3pCQyxXQUFTLE1BRGdCO0FBRXpCQyxZQUFVLENBRmU7QUFHekJDLFVBQVEsTUFIaUI7QUFJekJDLGFBQVc7QUFKYyxDQUFyQixDQUFOOzs7QUFPQSxNQUFNQyx3QkFBd0IsTUFDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssT0FBT0wsa0JBQVo7QUFDRTtBQUNFLHNCQUFjLEtBRGhCO0FBRUUsa0JBQVUsS0FGWjtBQUdFLDBCQUFrQixLQUhwQjtBQUlFLGtCQUFVLEtBSlo7QUFLRSxjQUFLLG9CQUxQO0FBTUUsb0JBQVlIO0FBTmQ7QUFERixLQURGO0FBV0U7QUFBQTtBQUFBLFFBQUsseUJBQVdHLGtCQUFYLElBQStCTSxXQUFXLEtBQTFDLEdBQUw7QUFDRTtBQUNFLHNCQUFjLElBRGhCO0FBRUUsa0JBQVUsSUFGWjtBQUdFLDBCQUFrQixLQUhwQjtBQUlFLGtCQUFVLEtBSlo7QUFLRSxjQUFLLG9CQUxQO0FBTUUsb0JBQVlQO0FBTmQ7QUFERjtBQVhGO0FBcUJRLENBdEJWOztBQXlCTyxNQUFNUSx3RUFBb0I7QUFDL0JDLGVBQWEsYUFEa0I7QUFFL0JDLGVBQWEsRUFGa0I7QUFHL0JDLFlBQVUsQ0FDUjtBQUNFQyxXQUFPLFdBRFQ7QUFFRUMsZUFBV2hCO0FBRmIsR0FEUSxFQUtSO0FBQ0VlLFdBQU8sZ0JBRFQ7QUFFRUMsZUFBV1A7QUFGYixHQUxRO0FBSHFCLENBQXBCLENBQU4iLCJmaWxlIjoiVGV4dElucHV0cy5leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IHtUZXh0QnVmZmVyfSBmcm9tICdhdG9tJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4vQmxvY2snO1xuaW1wb3J0IHtBdG9tSW5wdXR9IGZyb20gJy4vQXRvbUlucHV0JztcbmltcG9ydCB7QXRvbVRleHRFZGl0b3J9IGZyb20gJy4vQXRvbVRleHRFZGl0b3InO1xuXG5jb25zdCBBdG9tSW5wdXRFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPEF0b21JbnB1dFxuICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgIGluaXRpYWxWYWx1ZT1cImF0b20gaW5wdXRcIlxuICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJwbGFjZWhvbGRlciB0ZXh0XCJcbiAgICAgIC8+XG4gICAgPC9CbG9jaz5cbiAgICA8QmxvY2s+XG4gICAgICA8QXRvbUlucHV0XG4gICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICBpbml0aWFsVmFsdWU9XCJkaXNhYmxlZCBhdG9tIGlucHV0XCJcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAvPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPEF0b21JbnB1dFxuICAgICAgICBpbml0aWFsVmFsdWU9XCJ4cyBhdG9tIGlucHV0XCJcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAvPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPEF0b21JbnB1dFxuICAgICAgICBpbml0aWFsVmFsdWU9XCJzbSBhdG9tIGlucHV0XCJcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAvPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPEF0b21JbnB1dFxuICAgICAgICBpbml0aWFsVmFsdWU9XCJsZyBhdG9tIGlucHV0XCJcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAvPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPEF0b21JbnB1dFxuICAgICAgICBpbml0aWFsVmFsdWU9XCJ1bnN0eWxlZCBhdG9tIGlucHV0XCJcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGxhY2Vob2xkZXIgdGV4dFwiXG4gICAgICAgIHVuc3R5bGVkPXt0cnVlfVxuICAgICAgLz5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxBdG9tSW5wdXRcbiAgICAgICAgaW5pdGlhbFZhbHVlPVwiYXRvbSBpbnB1dCB3aXRoIGN1c3RvbSB3aWR0aFwiXG4gICAgICAgIHBsYWNlaG9sZGVyVGV4dD1cInBsYWNlaG9sZGVyIHRleHRcIlxuICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgLz5cbiAgICA8L0Jsb2NrPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IGJ1ZmZlcjEgPSBuZXcgVGV4dEJ1ZmZlcih7XG4gIHRleHQ6ICcvKipcXG4gKiBIaSFcXG4gKi9cXG5cXG4vLyBJIGFtIGEgVGV4dEJ1ZmZlci5cXG5jb25zdCBhID0gNDI7Jyxcbn0pO1xuY29uc3QgYnVmZmVyMiA9IG5ldyBUZXh0QnVmZmVyKHtcbiAgdGV4dDpcbiAgICAnLyoqXFxuICogSGkhXFxuICovXFxuXFxuLy8gSSBhbSBhIHJlYWQtb25seSwgZ3V0dGVyLWxlc3MgVGV4dEJ1ZmZlci5cXG5jb25zdCBhID0gNDI7Jyxcbn0pO1xuY29uc3QgZWRpdG9yV3JhcHBlclN0eWxlID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhHcm93OiAxLFxuICBoZWlnaHQ6ICcxMmVtJyxcbiAgYm94U2hhZG93OiAnMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMyknLFxufTtcblxuY29uc3QgQXRvbVRleHRFZGl0b3JFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxCbG9jaz5cbiAgICA8ZGl2IHN0eWxlPXtlZGl0b3JXcmFwcGVyU3R5bGV9PlxuICAgICAgPEF0b21UZXh0RWRpdG9yXG4gICAgICAgIGd1dHRlckhpZGRlbj17ZmFsc2V9XG4gICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgc3luY1RleHRDb250ZW50cz17ZmFsc2V9XG4gICAgICAgIGF1dG9Hcm93PXtmYWxzZX1cbiAgICAgICAgcGF0aD1cImFKYXZhU2NyaXB0RmlsZS5qc1wiXG4gICAgICAgIHRleHRCdWZmZXI9e2J1ZmZlcjF9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgc3R5bGU9e3suLi5lZGl0b3JXcmFwcGVyU3R5bGUsIG1hcmdpblRvcDogJzJlbSd9fT5cbiAgICAgIDxBdG9tVGV4dEVkaXRvclxuICAgICAgICBndXR0ZXJIaWRkZW49e3RydWV9XG4gICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICBzeW5jVGV4dENvbnRlbnRzPXtmYWxzZX1cbiAgICAgICAgYXV0b0dyb3c9e2ZhbHNlfVxuICAgICAgICBwYXRoPVwiYUphdmFTY3JpcHRGaWxlLmpzXCJcbiAgICAgICAgdGV4dEJ1ZmZlcj17YnVmZmVyMn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvQmxvY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgVGV4dElucHV0RXhhbXBsZXMgPSB7XG4gIHNlY3Rpb25OYW1lOiAnVGV4dCBJbnB1dHMnLFxuICBkZXNjcmlwdGlvbjogJycsXG4gIGV4YW1wbGVzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdBdG9tSW5wdXQnLFxuICAgICAgY29tcG9uZW50OiBBdG9tSW5wdXRFeGFtcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBdG9tVGV4dEVkaXRvcicsXG4gICAgICBjb21wb25lbnQ6IEF0b21UZXh0RWRpdG9yRXhhbXBsZSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==