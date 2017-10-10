'use strict';

var cov_1kt1c32kbg = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Toolbar.example.js',
      hash = '4e2a67467b1732aa476607b1f0af4d20fcca97da',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Toolbar.example.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 27
        },
        end: {
          line: 38,
          column: 1
        }
      },
      '1': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 37,
          column: 8
        }
      },
      '2': {
        start: {
          line: 40,
          column: 29
        },
        end: {
          line: 48,
          column: 1
        }
      },
      '3': {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 47,
          column: 10
        }
      },
      '4': {
        start: {
          line: 50,
          column: 28
        },
        end: {
          line: 58,
          column: 1
        }
      },
      '5': {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 57,
          column: 10
        }
      },
      '6': {
        start: {
          line: 60,
          column: 31
        },
        end: {
          line: 74,
          column: 1
        }
      },
      '7': {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 73,
          column: 10
        }
      },
      '8': {
        start: {
          line: 76,
          column: 31
        },
        end: {
          line: 97,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 37,
            column: 8
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 30
          }
        },
        loc: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 47,
            column: 10
          }
        },
        line: 41
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 50,
            column: 28
          },
          end: {
            line: 50,
            column: 29
          }
        },
        loc: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 57,
            column: 10
          }
        },
        line: 51
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 60,
            column: 31
          },
          end: {
            line: 60,
            column: 32
          }
        },
        loc: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 73,
            column: 10
          }
        },
        line: 61
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
      '3': 0
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
exports.ToolbarExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _Toolbar;

function _load_Toolbar() {
  return _Toolbar = require('./Toolbar');
}

var _ToolbarCenter;

function _load_ToolbarCenter() {
  return _ToolbarCenter = require('./ToolbarCenter');
}

var _ToolbarLeft;

function _load_ToolbarLeft() {
  return _ToolbarLeft = require('./ToolbarLeft');
}

var _ToolbarRight;

function _load_ToolbarRight() {
  return _ToolbarRight = require('./ToolbarRight');
}

var _Button;

function _load_Button() {
  return _Button = require('./Button');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_1kt1c32kbg.s[0]++; /**
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

const ToolbarExampleLeft = () => {
  cov_1kt1c32kbg.f[0]++;
  cov_1kt1c32kbg.s[1]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Toolbar || _load_Toolbar()).Toolbar,
        { location: 'top' },
        _react.createElement(
          (_ToolbarLeft || _load_ToolbarLeft()).ToolbarLeft,
          null,
          _react.createElement(
            'div',
            null,
            'a toolbar can have multiple children,'
          ),
          _react.createElement(
            (_Button || _load_Button()).Button,
            null,
            'such as this button.'
          )
        )
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        'div',
        null,
        'Be sure to use ',
        '<ToolbarLeft/>, <ToolbarLeft/>, and <ToolbarLeft/>',
        ' as children.'
      )
    )
  );
};

cov_1kt1c32kbg.s[2]++;
const ToolbarExampleCenter = () => {
  cov_1kt1c32kbg.f[1]++;
  cov_1kt1c32kbg.s[3]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      (_Toolbar || _load_Toolbar()).Toolbar,
      { location: 'top' },
      _react.createElement(
        (_ToolbarCenter || _load_ToolbarCenter()).ToolbarCenter,
        null,
        _react.createElement(
          'div',
          null,
          'Example of ',
          '<ToolbarCenter />',
          '.'
        )
      )
    )
  );
};

cov_1kt1c32kbg.s[4]++;
const ToolbarExampleRight = () => {
  cov_1kt1c32kbg.f[2]++;
  cov_1kt1c32kbg.s[5]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      (_Toolbar || _load_Toolbar()).Toolbar,
      { location: 'top' },
      _react.createElement(
        (_ToolbarRight || _load_ToolbarRight()).ToolbarRight,
        null,
        _react.createElement(
          'div',
          null,
          'Example of ',
          '<ToolbarRight />'
        )
      )
    )
  );
};

cov_1kt1c32kbg.s[6]++;
const ToolbarExampleMultiple = () => {
  cov_1kt1c32kbg.f[3]++;
  cov_1kt1c32kbg.s[7]++;
  return _react.createElement(
    (_Block || _load_Block()).Block,
    null,
    _react.createElement(
      (_Toolbar || _load_Toolbar()).Toolbar,
      { location: 'top' },
      _react.createElement(
        (_ToolbarLeft || _load_ToolbarLeft()).ToolbarLeft,
        null,
        _react.createElement(
          'div',
          null,
          'You can combine'
        )
      ),
      _react.createElement(
        (_ToolbarCenter || _load_ToolbarCenter()).ToolbarCenter,
        null,
        _react.createElement(
          'div',
          null,
          'the various kinds'
        )
      ),
      _react.createElement(
        (_ToolbarRight || _load_ToolbarRight()).ToolbarRight,
        null,
        _react.createElement(
          'div',
          null,
          'of aligners.'
        )
      )
    )
  );
};

const ToolbarExamples = exports.ToolbarExamples = (cov_1kt1c32kbg.s[8]++, {
  sectionName: 'Toolbar',
  description: '',
  examples: [{
    title: 'Left Toolbar',
    component: ToolbarExampleLeft
  }, {
    title: 'Center Toolbar',
    component: ToolbarExampleCenter
  }, {
    title: 'Right Toolbar',
    component: ToolbarExampleRight
  }, {
    title: 'Combining Toolbar aligners',
    component: ToolbarExampleMultiple
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2xiYXIuZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJUb29sYmFyRXhhbXBsZUxlZnQiLCJUb29sYmFyRXhhbXBsZUNlbnRlciIsIlRvb2xiYXJFeGFtcGxlUmlnaHQiLCJUb29sYmFyRXhhbXBsZU11bHRpcGxlIiwiVG9vbGJhckV4YW1wbGVzIiwic2VjdGlvbk5hbWUiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGVzIiwidGl0bGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7Ozt1QkFsQkE7Ozs7Ozs7Ozs7OztBQW9CQSxNQUFNQSxxQkFBcUIsTUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQVMsVUFBUyxLQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQURGO0FBREYsS0FERjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ2tCLDREQURsQjtBQUFBO0FBQUE7QUFERjtBQVRGO0FBZU0sQ0FoQlI7OztBQW1CQSxNQUFNQyx1QkFBdUIsTUFDM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQVMsVUFBUyxLQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWlCLDZCQUFqQjtBQUFBO0FBQUE7QUFERjtBQURGO0FBREY7QUFNUSxDQVBWOzs7QUFVQSxNQUFNQyxzQkFBc0IsTUFDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQVMsVUFBUyxLQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWlCO0FBQWpCO0FBREY7QUFERjtBQURGO0FBTVEsQ0FQVjs7O0FBVUEsTUFBTUMseUJBQXlCLE1BQzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFTLFVBQVMsS0FBbEI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBUEY7QUFERjtBQVlRLENBYlY7O0FBZ0JPLE1BQU1DLG9FQUFrQjtBQUM3QkMsZUFBYSxTQURnQjtBQUU3QkMsZUFBYSxFQUZnQjtBQUc3QkMsWUFBVSxDQUNSO0FBQ0VDLFdBQU8sY0FEVDtBQUVFQyxlQUFXVDtBQUZiLEdBRFEsRUFLUjtBQUNFUSxXQUFPLGdCQURUO0FBRUVDLGVBQVdSO0FBRmIsR0FMUSxFQVNSO0FBQ0VPLFdBQU8sZUFEVDtBQUVFQyxlQUFXUDtBQUZiLEdBVFEsRUFhUjtBQUNFTSxXQUFPLDRCQURUO0FBRUVDLGVBQVdOO0FBRmIsR0FiUTtBQUhtQixDQUFsQixDQUFOIiwiZmlsZSI6IlRvb2xiYXIuZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4vQmxvY2snO1xuaW1wb3J0IHtUb29sYmFyfSBmcm9tICcuL1Rvb2xiYXInO1xuaW1wb3J0IHtUb29sYmFyQ2VudGVyfSBmcm9tICcuL1Rvb2xiYXJDZW50ZXInO1xuaW1wb3J0IHtUb29sYmFyTGVmdH0gZnJvbSAnLi9Ub29sYmFyTGVmdCc7XG5pbXBvcnQge1Rvb2xiYXJSaWdodH0gZnJvbSAnLi9Ub29sYmFyUmlnaHQnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vQnV0dG9uJztcblxuY29uc3QgVG9vbGJhckV4YW1wbGVMZWZ0ID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPFRvb2xiYXIgbG9jYXRpb249XCJ0b3BcIj5cbiAgICAgICAgPFRvb2xiYXJMZWZ0PlxuICAgICAgICAgIDxkaXY+YSB0b29sYmFyIGNhbiBoYXZlIG11bHRpcGxlIGNoaWxkcmVuLDwvZGl2PlxuICAgICAgICAgIDxCdXR0b24+c3VjaCBhcyB0aGlzIGJ1dHRvbi48L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sYmFyTGVmdD5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxkaXY+XG4gICAgICAgIEJlIHN1cmUgdG8gdXNlIHsnPFRvb2xiYXJMZWZ0Lz4sIDxUb29sYmFyTGVmdC8+LCBhbmQgPFRvb2xiYXJMZWZ0Lz4nfSBhc1xuICAgICAgICBjaGlsZHJlbi5cbiAgICAgIDwvZGl2PlxuICAgIDwvQmxvY2s+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVG9vbGJhckV4YW1wbGVDZW50ZXIgPSAoKTogUmVhY3QuRWxlbWVudDxhbnk+ID0+IChcbiAgPEJsb2NrPlxuICAgIDxUb29sYmFyIGxvY2F0aW9uPVwidG9wXCI+XG4gICAgICA8VG9vbGJhckNlbnRlcj5cbiAgICAgICAgPGRpdj5FeGFtcGxlIG9mIHsnPFRvb2xiYXJDZW50ZXIgLz4nfS48L2Rpdj5cbiAgICAgIDwvVG9vbGJhckNlbnRlcj5cbiAgICA8L1Rvb2xiYXI+XG4gIDwvQmxvY2s+XG4pO1xuXG5jb25zdCBUb29sYmFyRXhhbXBsZVJpZ2h0ID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxCbG9jaz5cbiAgICA8VG9vbGJhciBsb2NhdGlvbj1cInRvcFwiPlxuICAgICAgPFRvb2xiYXJSaWdodD5cbiAgICAgICAgPGRpdj5FeGFtcGxlIG9mIHsnPFRvb2xiYXJSaWdodCAvPid9PC9kaXY+XG4gICAgICA8L1Rvb2xiYXJSaWdodD5cbiAgICA8L1Rvb2xiYXI+XG4gIDwvQmxvY2s+XG4pO1xuXG5jb25zdCBUb29sYmFyRXhhbXBsZU11bHRpcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxCbG9jaz5cbiAgICA8VG9vbGJhciBsb2NhdGlvbj1cInRvcFwiPlxuICAgICAgPFRvb2xiYXJMZWZ0PlxuICAgICAgICA8ZGl2PllvdSBjYW4gY29tYmluZTwvZGl2PlxuICAgICAgPC9Ub29sYmFyTGVmdD5cbiAgICAgIDxUb29sYmFyQ2VudGVyPlxuICAgICAgICA8ZGl2PnRoZSB2YXJpb3VzIGtpbmRzPC9kaXY+XG4gICAgICA8L1Rvb2xiYXJDZW50ZXI+XG4gICAgICA8VG9vbGJhclJpZ2h0PlxuICAgICAgICA8ZGl2Pm9mIGFsaWduZXJzLjwvZGl2PlxuICAgICAgPC9Ub29sYmFyUmlnaHQ+XG4gICAgPC9Ub29sYmFyPlxuICA8L0Jsb2NrPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRvb2xiYXJFeGFtcGxlcyA9IHtcbiAgc2VjdGlvbk5hbWU6ICdUb29sYmFyJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBleGFtcGxlczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnTGVmdCBUb29sYmFyJyxcbiAgICAgIGNvbXBvbmVudDogVG9vbGJhckV4YW1wbGVMZWZ0LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDZW50ZXIgVG9vbGJhcicsXG4gICAgICBjb21wb25lbnQ6IFRvb2xiYXJFeGFtcGxlQ2VudGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdSaWdodCBUb29sYmFyJyxcbiAgICAgIGNvbXBvbmVudDogVG9vbGJhckV4YW1wbGVSaWdodCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ29tYmluaW5nIFRvb2xiYXIgYWxpZ25lcnMnLFxuICAgICAgY29tcG9uZW50OiBUb29sYmFyRXhhbXBsZU11bHRpcGxlLFxuICAgIH0sXG4gIF0sXG59O1xuIl19