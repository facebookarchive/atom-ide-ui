'use strict';

var cov_2ez5jyutz7 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Button.example.js',
      hash = 'ba4a3429149d4512b38b104dcf7b9074ae32ef35',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Button.example.js',
    statementMap: {
      '0': {
        start: {
          line: 19,
          column: 26
        },
        end: {
          line: 32,
          column: 1
        }
      },
      '1': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 31,
          column: 10
        }
      },
      '2': {
        start: {
          line: 34,
          column: 30
        },
        end: {
          line: 41,
          column: 1
        }
      },
      '3': {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 40,
          column: 10
        }
      },
      '4': {
        start: {
          line: 43,
          column: 27
        },
        end: {
          line: 75,
          column: 1
        }
      },
      '5': {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 74,
          column: 8
        }
      },
      '6': {
        start: {
          line: 77,
          column: 26
        },
        end: {
          line: 88,
          column: 1
        }
      },
      '7': {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 87,
          column: 10
        }
      },
      '8': {
        start: {
          line: 90,
          column: 27
        },
        end: {
          line: 121,
          column: 1
        }
      },
      '9': {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 120,
          column: 8
        }
      },
      '10': {
        start: {
          line: 123,
          column: 29
        },
        end: {
          line: 137,
          column: 1
        }
      },
      '11': {
        start: {
          line: 124,
          column: 2
        },
        end: {
          line: 136,
          column: 8
        }
      },
      '12': {
        start: {
          line: 139,
          column: 30
        },
        end: {
          line: 168,
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
            column: 26
          },
          end: {
            line: 19,
            column: 27
          }
        },
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 31,
            column: 10
          }
        },
        line: 20
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 34,
            column: 30
          },
          end: {
            line: 34,
            column: 31
          }
        },
        loc: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 40,
            column: 10
          }
        },
        line: 35
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 43,
            column: 27
          },
          end: {
            line: 43,
            column: 28
          }
        },
        loc: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 74,
            column: 8
          }
        },
        line: 44
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 77,
            column: 26
          },
          end: {
            line: 77,
            column: 27
          }
        },
        loc: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 87,
            column: 10
          }
        },
        line: 78
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 90,
            column: 27
          },
          end: {
            line: 90,
            column: 28
          }
        },
        loc: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 120,
            column: 8
          }
        },
        line: 91
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 123,
            column: 29
          },
          end: {
            line: 123,
            column: 30
          }
        },
        loc: {
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 136,
            column: 8
          }
        },
        line: 124
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
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
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
exports.ButtonExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Button;

function _load_Button() {
  return _Button = require('./Button');
}

var _ButtonGroup;

function _load_ButtonGroup() {
  return _ButtonGroup = require('./ButtonGroup');
}

var _ButtonToolbar;

function _load_ButtonToolbar() {
  return _ButtonToolbar = require('./ButtonToolbar');
}

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_2ez5jyutz7.s[0]++; /**
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

const ButtonSizeExample = () => {
  cov_2ez5jyutz7.f[0]++;
  cov_2ez5jyutz7.s[1]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      (_Button || _load_Button()).Button,
      { className: 'inline-block', size: 'EXTRA_SMALL' },
      'extra_small'
    ),
    _react.createElement(
      (_Button || _load_Button()).Button,
      { className: 'inline-block', size: 'SMALL' },
      'small'
    ),
    _react.createElement(
      (_Button || _load_Button()).Button,
      { className: 'inline-block' },
      'regular'
    ),
    _react.createElement(
      (_Button || _load_Button()).Button,
      { className: 'inline-block', size: 'LARGE' },
      'large'
    )
  );
};

cov_2ez5jyutz7.s[2]++;
const ButtonDisabledExample = () => {
  cov_2ez5jyutz7.f[1]++;
  cov_2ez5jyutz7.s[3]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      (_Button || _load_Button()).Button,
      { className: 'inline-block' },
      'enabled'
    ),
    _react.createElement(
      (_Button || _load_Button()).Button,
      { className: 'inline-block', disabled: true },
      'disabled'
    )
  );
};

cov_2ez5jyutz7.s[4]++;
const ButtonColorExample = () => {
  cov_2ez5jyutz7.f[2]++;
  cov_2ez5jyutz7.s[5]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
        null,
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'PRIMARY' },
          'primary'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'INFO' },
          'info'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'SUCCESS' },
          'success'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'WARNING' },
          'warning'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'ERROR' },
          'error'
        )
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        'p',
        null,
        'selected:'
      ),
      _react.createElement(
        (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
        null,
        _react.createElement(
          (_Button || _load_Button()).Button,
          { selected: true, buttonType: 'PRIMARY' },
          'primary'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { selected: true, buttonType: 'INFO' },
          'info'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { selected: true, buttonType: 'SUCCESS' },
          'success'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { selected: true, buttonType: 'WARNING' },
          'warning'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          { selected: true, buttonType: 'ERROR' },
          'error'
        )
      )
    )
  );
};

cov_2ez5jyutz7.s[6]++;
const ButtonIconExample = () => {
  cov_2ez5jyutz7.f[3]++;
  cov_2ez5jyutz7.s[7]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
      null,
      _react.createElement((_Button || _load_Button()).Button, { icon: 'gear' }),
      _react.createElement((_Button || _load_Button()).Button, { icon: 'cloud-download' }),
      _react.createElement((_Button || _load_Button()).Button, { icon: 'code' }),
      _react.createElement((_Button || _load_Button()).Button, { icon: 'check' }),
      _react.createElement((_Button || _load_Button()).Button, { icon: 'device-mobile' }),
      _react.createElement((_Button || _load_Button()).Button, { icon: 'alert' })
    )
  );
};

cov_2ez5jyutz7.s[8]++;
const ButtonGroupExample = () => {
  cov_2ez5jyutz7.f[4]++;
  cov_2ez5jyutz7.s[9]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
        { size: 'EXTRA_SMALL' },
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'SUCCESS' },
          'extra small'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'button'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'group'
        )
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
        { size: 'SMALL' },
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'SUCCESS' },
          'small'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'button'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'group'
        )
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
        null,
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'SUCCESS' },
          'regular'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'button'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'group'
        )
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
        { size: 'LARGE' },
        _react.createElement(
          (_Button || _load_Button()).Button,
          { buttonType: 'SUCCESS' },
          'large'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'button'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'group'
        )
      )
    )
  );
};

cov_2ez5jyutz7.s[10]++;
const ButtonToolbarExample = () => {
  cov_2ez5jyutz7.f[5]++;
  cov_2ez5jyutz7.s[11]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_ButtonToolbar || _load_ButtonToolbar()).ButtonToolbar,
        null,
        _react.createElement(
          (_ButtonGroup || _load_ButtonGroup()).ButtonGroup,
          null,
          _react.createElement(
            (_Button || _load_Button()).Button,
            null,
            'ButtonGroup'
          ),
          _react.createElement(
            (_Button || _load_Button()).Button,
            null,
            'in a'
          ),
          _react.createElement(
            (_Button || _load_Button()).Button,
            null,
            'toolbar'
          )
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'single buttons'
        ),
        _react.createElement(
          (_Button || _load_Button()).Button,
          null,
          'in toolbar'
        )
      )
    )
  );
};

const ButtonExamples = exports.ButtonExamples = (cov_2ez5jyutz7.s[12]++, {
  sectionName: 'Buttons',
  description: 'For clicking things.',
  examples: [{
    title: 'Button sizes',
    component: ButtonSizeExample
  }, {
    title: 'Disabled/enabled',
    component: ButtonDisabledExample
  }, {
    title: 'Button colors',
    component: ButtonColorExample
  }, {
    title: 'Buttons with icons',
    component: ButtonIconExample
  }, {
    title: 'Button Group',
    component: ButtonGroupExample
  }, {
    title: 'Button Toolbar',
    component: ButtonToolbarExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5leGFtcGxlLmpzIl0sIm5hbWVzIjpbIkJ1dHRvblNpemVFeGFtcGxlIiwiQnV0dG9uRGlzYWJsZWRFeGFtcGxlIiwiQnV0dG9uQ29sb3JFeGFtcGxlIiwiQnV0dG9uSWNvbkV4YW1wbGUiLCJCdXR0b25Hcm91cEV4YW1wbGUiLCJCdXR0b25Ub29sYmFyRXhhbXBsZSIsIkJ1dHRvbkV4YW1wbGVzIiwic2VjdGlvbk5hbWUiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGVzIiwidGl0bGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7dUJBaEJBOzs7Ozs7Ozs7Ozs7QUFrQkEsTUFBTUEsb0JBQW9CLE1BQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxhQUF0QztBQUFBO0FBQUEsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxPQUF0QztBQUFBO0FBQUEsS0FKRjtBQU9FO0FBQUE7QUFBQSxRQUFRLFdBQVUs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QUFBLFlBQVEsWUFBVyxTQUFuQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQURGO0FBdEJGO0FBNkJNLENBOUJSOzs7QUFpQ0EsTUFBTUMsdUJBQXVCLE1BQzNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixTQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBREY7QUFERjtBQVlNLENBYlI7O0FBZ0JPLE1BQU1DLG1FQUFpQjtBQUM1QkMsZUFBYSxTQURlO0FBRTVCQyxlQUFhLHNCQUZlO0FBRzVCQyxZQUFVLENBQ1I7QUFDRUMsV0FBTyxjQURUO0FBRUVDLGVBQVdYO0FBRmIsR0FEUSxFQUtSO0FBQ0VVLFdBQU8sa0JBRFQ7QUFFRUMsZUFBV1Y7QUFGYixHQUxRLEVBU1I7QUFDRVMsV0FBTyxlQURUO0FBRUVDLGVBQVdUO0FBRmIsR0FUUSxFQWFSO0FBQ0VRLFdBQU8sb0JBRFQ7QUFFRUMsZUFBV1I7QUFGYixHQWJRLEVBaUJSO0FBQ0VPLFdBQU8sY0FEVDtBQUVFQyxlQUFXUDtBQUZiLEdBakJRLEVBcUJSO0FBQ0VNLFdBQU8sZ0JBRFQ7QUFFRUMsZUFBV047QUFGYixHQXJCUTtBQUhrQixDQUFqQixDQUFOIiwiZmlsZSI6IkJ1dHRvbi5leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7QnV0dG9uR3JvdXB9IGZyb20gJy4vQnV0dG9uR3JvdXAnO1xuaW1wb3J0IHtCdXR0b25Ub29sYmFyfSBmcm9tICcuL0J1dHRvblRvb2xiYXInO1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi9CbG9jayc7XG5cbmNvbnN0IEJ1dHRvblNpemVFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxCbG9jaz5cbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIHNpemU9XCJFWFRSQV9TTUFMTFwiPlxuICAgICAgZXh0cmFfc21hbGxcbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIHNpemU9XCJTTUFMTFwiPlxuICAgICAgc21hbGxcbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPnJlZ3VsYXI8L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIHNpemU9XCJMQVJHRVwiPlxuICAgICAgbGFyZ2VcbiAgICA8L0J1dHRvbj5cbiAgPC9CbG9jaz5cbik7XG5cbmNvbnN0IEJ1dHRvbkRpc2FibGVkRXhhbXBsZSA9ICgpOiBSZWFjdC5FbGVtZW50PGFueT4gPT4gKFxuICA8QmxvY2s+XG4gICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5lbmFibGVkPC9CdXR0b24+XG4gICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiBkaXNhYmxlZD17dHJ1ZX0+XG4gICAgICBkaXNhYmxlZFxuICAgIDwvQnV0dG9uPlxuICA8L0Jsb2NrPlxuKTtcblxuY29uc3QgQnV0dG9uQ29sb3JFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblR5cGU9XCJQUklNQVJZXCI+cHJpbWFyeTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblR5cGU9XCJJTkZPXCI+aW5mbzwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblR5cGU9XCJTVUNDRVNTXCI+c3VjY2VzczwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblR5cGU9XCJXQVJOSU5HXCI+d2FybmluZzwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblR5cGU9XCJFUlJPUlwiPmVycm9yPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPHA+c2VsZWN0ZWQ6PC9wPlxuICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICA8QnV0dG9uIHNlbGVjdGVkPXt0cnVlfSBidXR0b25UeXBlPVwiUFJJTUFSWVwiPlxuICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gc2VsZWN0ZWQ9e3RydWV9IGJ1dHRvblR5cGU9XCJJTkZPXCI+XG4gICAgICAgICAgaW5mb1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzZWxlY3RlZD17dHJ1ZX0gYnV0dG9uVHlwZT1cIlNVQ0NFU1NcIj5cbiAgICAgICAgICBzdWNjZXNzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHNlbGVjdGVkPXt0cnVlfSBidXR0b25UeXBlPVwiV0FSTklOR1wiPlxuICAgICAgICAgIHdhcm5pbmdcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gc2VsZWN0ZWQ9e3RydWV9IGJ1dHRvblR5cGU9XCJFUlJPUlwiPlxuICAgICAgICAgIGVycm9yXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICA8L0Jsb2NrPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEJ1dHRvbkljb25FeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxCbG9jaz5cbiAgICA8QnV0dG9uR3JvdXA+XG4gICAgICA8QnV0dG9uIGljb249XCJnZWFyXCIgLz5cbiAgICAgIDxCdXR0b24gaWNvbj1cImNsb3VkLWRvd25sb2FkXCIgLz5cbiAgICAgIDxCdXR0b24gaWNvbj1cImNvZGVcIiAvPlxuICAgICAgPEJ1dHRvbiBpY29uPVwiY2hlY2tcIiAvPlxuICAgICAgPEJ1dHRvbiBpY29uPVwiZGV2aWNlLW1vYmlsZVwiIC8+XG4gICAgICA8QnV0dG9uIGljb249XCJhbGVydFwiIC8+XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgPC9CbG9jaz5cbik7XG5cbmNvbnN0IEJ1dHRvbkdyb3VwRXhhbXBsZSA9ICgpOiBSZWFjdC5FbGVtZW50PGFueT4gPT4gKFxuICA8ZGl2PlxuICAgIDxCbG9jaz5cbiAgICAgIDxCdXR0b25Hcm91cCBzaXplPVwiRVhUUkFfU01BTExcIj5cbiAgICAgICAgPEJ1dHRvbiBidXR0b25UeXBlPVwiU1VDQ0VTU1wiPmV4dHJhIHNtYWxsPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+YnV0dG9uPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24+Z3JvdXA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgPC9CbG9jaz5cbiAgICA8QmxvY2s+XG4gICAgICA8QnV0dG9uR3JvdXAgc2l6ZT1cIlNNQUxMXCI+XG4gICAgICAgIDxCdXR0b24gYnV0dG9uVHlwZT1cIlNVQ0NFU1NcIj5zbWFsbDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPmJ1dHRvbjwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPmdyb3VwPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblR5cGU9XCJTVUNDRVNTXCI+cmVndWxhcjwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPmJ1dHRvbjwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPmdyb3VwPC9CdXR0b24+XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJMQVJHRVwiPlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblR5cGU9XCJTVUNDRVNTXCI+bGFyZ2U8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5idXR0b248L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5ncm91cDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICA8L0Jsb2NrPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEJ1dHRvblRvb2xiYXJFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPEJ1dHRvblRvb2xiYXI+XG4gICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICA8QnV0dG9uPkJ1dHRvbkdyb3VwPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbj5pbiBhPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbj50b29sYmFyPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDxCdXR0b24+c2luZ2xlIGJ1dHRvbnM8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5pbiB0b29sYmFyPC9CdXR0b24+XG4gICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgPC9CbG9jaz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRXhhbXBsZXMgPSB7XG4gIHNlY3Rpb25OYW1lOiAnQnV0dG9ucycsXG4gIGRlc2NyaXB0aW9uOiAnRm9yIGNsaWNraW5nIHRoaW5ncy4nLFxuICBleGFtcGxlczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQnV0dG9uIHNpemVzJyxcbiAgICAgIGNvbXBvbmVudDogQnV0dG9uU2l6ZUV4YW1wbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0Rpc2FibGVkL2VuYWJsZWQnLFxuICAgICAgY29tcG9uZW50OiBCdXR0b25EaXNhYmxlZEV4YW1wbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0J1dHRvbiBjb2xvcnMnLFxuICAgICAgY29tcG9uZW50OiBCdXR0b25Db2xvckV4YW1wbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0J1dHRvbnMgd2l0aCBpY29ucycsXG4gICAgICBjb21wb25lbnQ6IEJ1dHRvbkljb25FeGFtcGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdCdXR0b24gR3JvdXAnLFxuICAgICAgY29tcG9uZW50OiBCdXR0b25Hcm91cEV4YW1wbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0J1dHRvbiBUb29sYmFyJyxcbiAgICAgIGNvbXBvbmVudDogQnV0dG9uVG9vbGJhckV4YW1wbGUsXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=