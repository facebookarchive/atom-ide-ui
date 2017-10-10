'use strict';

var cov_nq4q225dk = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Checkbox.example.js',
      hash = '0d343d5f4e88710c7ed074a6e7a4a8d56523ff22',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Checkbox.example.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 13
        },
        end: {
          line: 17,
          column: 21
        }
      },
      '1': {
        start: {
          line: 19,
          column: 24
        },
        end: {
          line: 65,
          column: 1
        }
      },
      '2': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 64,
          column: 8
        }
      },
      '3': {
        start: {
          line: 67,
          column: 32
        },
        end: {
          line: 76,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 17,
            column: 13
          },
          end: {
            line: 17,
            column: 14
          }
        },
        loc: {
          start: {
            line: 17,
            column: 19
          },
          end: {
            line: 17,
            column: 21
          }
        },
        line: 17
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 19,
            column: 25
          }
        },
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 64,
            column: 8
          }
        },
        line: 20
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
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
exports.CheckboxExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _Checkbox;

function _load_Checkbox() {
  return _Checkbox = require('./Checkbox');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_nq4q225dk.s[0]++; /**
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

const NOOP = () => {
  cov_nq4q225dk.f[0]++;
};

cov_nq4q225dk.s[1]++;
const CheckboxExample = () => {
  cov_nq4q225dk.f[1]++;
  cov_nq4q225dk.s[2]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_Checkbox || _load_Checkbox()).Checkbox, {
        checked: false,
        onClick: NOOP,
        onChange: NOOP,
        label: 'A Checkbox.'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_Checkbox || _load_Checkbox()).Checkbox, {
        onClick: NOOP,
        onChange: NOOP,
        checked: true,
        label: 'A checked Checkbox.'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_Checkbox || _load_Checkbox()).Checkbox, {
        onClick: NOOP,
        onChange: NOOP,
        disabled: true,
        checked: false,
        label: 'A disabled Checkbox.'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_Checkbox || _load_Checkbox()).Checkbox, {
        onClick: NOOP,
        onChange: NOOP,
        checked: true,
        disabled: true,
        label: 'A disabled, checked Checkbox.'
      })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_Checkbox || _load_Checkbox()).Checkbox, {
        onClick: NOOP,
        onChange: NOOP,
        indeterminate: true,
        checked: false,
        label: 'An indeterminate Checkbox.'
      })
    )
  );
};

const CheckboxExamples = exports.CheckboxExamples = (cov_nq4q225dk.s[3]++, {
  sectionName: 'Checkbox',
  description: '',
  examples: [{
    title: '',
    component: CheckboxExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrYm94LmV4YW1wbGUuanMiXSwibmFtZXMiOlsiTk9PUCIsIkNoZWNrYm94RXhhbXBsZSIsIkNoZWNrYm94RXhhbXBsZXMiLCJzZWN0aW9uTmFtZSIsImRlc2NyaXB0aW9uIiwiZXhhbXBsZXMiLCJ0aXRsZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O3NCQWRBOzs7Ozs7Ozs7Ozs7QUFnQkEsTUFBTUEsT0FBTyxNQUFNO0FBQUE7QUFBRSxDQUFyQjs7O0FBRUEsTUFBTUMsa0JBQWtCLE1BQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsaUJBQVMsS0FEWDtBQUVFLGlCQUFTRCxJQUZYO0FBR0Usa0JBQVVBLElBSFo7QUFJRSxlQUFNO0FBSlI7QUFERixLQURGO0FBU0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxpQkFBU0EsSUFEWDtBQUVFLGtCQUFVQSxJQUZaO0FBR0UsaUJBQVMsSUFIWDtBQUlFLGVBQU07QUFKUjtBQURGLEtBVEY7QUFpQkU7QUFBQTtBQUFBO0FBQ0U7QUFDRSxpQkFBU0EsSUFEWDtBQUVFLGtCQUFVQSxJQUZaO0FBR0Usa0JBQVUsSUFIWjtBQUlFLGlCQUFTLEtBSlg7QUFLRSxlQUFNO0FBTFI7QUFERixLQWpCRjtBQTBCRTtBQUFBO0FBQUE7QUFDRTtBQUNFLGlCQUFTQSxJQURYO0FBRUUsa0JBQVVBLElBRlo7QUFHRSxpQkFBUyxJQUhYO0FBSUUsa0JBQVUsSUFKWjtBQUtFLGVBQU07QUFMUjtBQURGLEtBMUJGO0FBbUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsaUJBQVNBLElBRFg7QUFFRSxrQkFBVUEsSUFGWjtBQUdFLHVCQUFlLElBSGpCO0FBSUUsaUJBQVMsS0FKWDtBQUtFLGVBQU07QUFMUjtBQURGO0FBbkNGO0FBNENNLENBN0NSOztBQWdETyxNQUFNRSxxRUFBbUI7QUFDOUJDLGVBQWEsVUFEaUI7QUFFOUJDLGVBQWEsRUFGaUI7QUFHOUJDLFlBQVUsQ0FDUjtBQUNFQyxXQUFPLEVBRFQ7QUFFRUMsZUFBV047QUFGYixHQURRO0FBSG9CLENBQW5CLENBQU4iLCJmaWxlIjoiQ2hlY2tib3guZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4vQmxvY2snO1xuaW1wb3J0IHtDaGVja2JveH0gZnJvbSAnLi9DaGVja2JveCc7XG5cbmNvbnN0IE5PT1AgPSAoKSA9PiB7fTtcblxuY29uc3QgQ2hlY2tib3hFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPENoZWNrYm94XG4gICAgICAgIGNoZWNrZWQ9e2ZhbHNlfVxuICAgICAgICBvbkNsaWNrPXtOT09QfVxuICAgICAgICBvbkNoYW5nZT17Tk9PUH1cbiAgICAgICAgbGFiZWw9XCJBIENoZWNrYm94LlwiXG4gICAgICAvPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPENoZWNrYm94XG4gICAgICAgIG9uQ2xpY2s9e05PT1B9XG4gICAgICAgIG9uQ2hhbmdlPXtOT09QfVxuICAgICAgICBjaGVja2VkPXt0cnVlfVxuICAgICAgICBsYWJlbD1cIkEgY2hlY2tlZCBDaGVja2JveC5cIlxuICAgICAgLz5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxDaGVja2JveFxuICAgICAgICBvbkNsaWNrPXtOT09QfVxuICAgICAgICBvbkNoYW5nZT17Tk9PUH1cbiAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgIGNoZWNrZWQ9e2ZhbHNlfVxuICAgICAgICBsYWJlbD1cIkEgZGlzYWJsZWQgQ2hlY2tib3guXCJcbiAgICAgIC8+XG4gICAgPC9CbG9jaz5cbiAgICA8QmxvY2s+XG4gICAgICA8Q2hlY2tib3hcbiAgICAgICAgb25DbGljaz17Tk9PUH1cbiAgICAgICAgb25DaGFuZ2U9e05PT1B9XG4gICAgICAgIGNoZWNrZWQ9e3RydWV9XG4gICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICBsYWJlbD1cIkEgZGlzYWJsZWQsIGNoZWNrZWQgQ2hlY2tib3guXCJcbiAgICAgIC8+XG4gICAgPC9CbG9jaz5cbiAgICA8QmxvY2s+XG4gICAgICA8Q2hlY2tib3hcbiAgICAgICAgb25DbGljaz17Tk9PUH1cbiAgICAgICAgb25DaGFuZ2U9e05PT1B9XG4gICAgICAgIGluZGV0ZXJtaW5hdGU9e3RydWV9XG4gICAgICAgIGNoZWNrZWQ9e2ZhbHNlfVxuICAgICAgICBsYWJlbD1cIkFuIGluZGV0ZXJtaW5hdGUgQ2hlY2tib3guXCJcbiAgICAgIC8+XG4gICAgPC9CbG9jaz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tib3hFeGFtcGxlcyA9IHtcbiAgc2VjdGlvbk5hbWU6ICdDaGVja2JveCcsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgZXhhbXBsZXM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb21wb25lbnQ6IENoZWNrYm94RXhhbXBsZSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==