'use strict';

var cov_2n0r1u5u1c = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Highlight.example.js',
      hash = '04a252167c296960fdb304c9100a2653421ceb25',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Highlight.example.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 25
        },
        end: {
          line: 35,
          column: 1
        }
      },
      '1': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 34,
          column: 8
        }
      },
      '2': {
        start: {
          line: 37,
          column: 33
        },
        end: {
          line: 47,
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
            column: 25
          },
          end: {
            line: 17,
            column: 26
          }
        },
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 34,
            column: 8
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
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
exports.HighlightExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _Highlight;

function _load_Highlight() {
  return _Highlight = require('./Highlight');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_2n0r1u5u1c.s[0]++; /**
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

const HighlightExample = () => {
  cov_2n0r1u5u1c.f[0]++;
  cov_2n0r1u5u1c.s[1]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Highlight || _load_Highlight()).Highlight,
        null,
        'Default'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Highlight || _load_Highlight()).Highlight,
        { color: (_Highlight || _load_Highlight()).HighlightColors.info },
        'Info'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Highlight || _load_Highlight()).Highlight,
        { color: (_Highlight || _load_Highlight()).HighlightColors.success },
        'Success'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Highlight || _load_Highlight()).Highlight,
        { color: (_Highlight || _load_Highlight()).HighlightColors.warning },
        'Warning'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Highlight || _load_Highlight()).Highlight,
        { color: (_Highlight || _load_Highlight()).HighlightColors.error },
        'Error'
      )
    )
  );
};

const HighlightExamples = exports.HighlightExamples = (cov_2n0r1u5u1c.s[2]++, {
  sectionName: 'Highlight',
  description: 'Highlights are useful for calling out inline content, such as tags.',
  examples: [{
    title: 'Highlights',
    component: HighlightExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhpZ2hsaWdodC5leGFtcGxlLmpzIl0sIm5hbWVzIjpbIkhpZ2hsaWdodEV4YW1wbGUiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJlcnJvciIsIkhpZ2hsaWdodEV4YW1wbGVzIiwic2VjdGlvbk5hbWUiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGVzIiwidGl0bGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7Ozt1QkFkQTs7Ozs7Ozs7Ozs7O0FBZ0JBLE1BQU1BLG1CQUFtQixNQUN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFXLE9BQU8sa0RBQWdCQyxJQUFsQztBQUFBO0FBQUE7QUFERixLQUpGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQVcsT0FBTyxrREFBZ0JDLE9BQWxDO0FBQUE7QUFBQTtBQURGLEtBUEY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBVyxPQUFPLGtEQUFnQkMsT0FBbEM7QUFBQTtBQUFBO0FBREYsS0FWRjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFXLE9BQU8sa0RBQWdCQyxLQUFsQztBQUFBO0FBQUE7QUFERjtBQWJGO0FBZ0JNLENBakJSOztBQW9CTyxNQUFNQyx3RUFBb0I7QUFDL0JDLGVBQWEsV0FEa0I7QUFFL0JDLGVBQ0UscUVBSDZCO0FBSS9CQyxZQUFVLENBQ1I7QUFDRUMsV0FBTyxZQURUO0FBRUVDLGVBQVdWO0FBRmIsR0FEUTtBQUpxQixDQUFwQixDQUFOIiwiZmlsZSI6IkhpZ2hsaWdodC5leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi9CbG9jayc7XG5pbXBvcnQge0hpZ2hsaWdodCwgSGlnaGxpZ2h0Q29sb3JzfSBmcm9tICcuL0hpZ2hsaWdodCc7XG5cbmNvbnN0IEhpZ2hsaWdodEV4YW1wbGUgPSAoKTogUmVhY3QuRWxlbWVudDxhbnk+ID0+IChcbiAgPGRpdj5cbiAgICA8QmxvY2s+XG4gICAgICA8SGlnaGxpZ2h0PkRlZmF1bHQ8L0hpZ2hsaWdodD5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxIaWdobGlnaHQgY29sb3I9e0hpZ2hsaWdodENvbG9ycy5pbmZvfT5JbmZvPC9IaWdobGlnaHQ+XG4gICAgPC9CbG9jaz5cbiAgICA8QmxvY2s+XG4gICAgICA8SGlnaGxpZ2h0IGNvbG9yPXtIaWdobGlnaHRDb2xvcnMuc3VjY2Vzc30+U3VjY2VzczwvSGlnaGxpZ2h0PlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPEhpZ2hsaWdodCBjb2xvcj17SGlnaGxpZ2h0Q29sb3JzLndhcm5pbmd9Pldhcm5pbmc8L0hpZ2hsaWdodD5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxIaWdobGlnaHQgY29sb3I9e0hpZ2hsaWdodENvbG9ycy5lcnJvcn0+RXJyb3I8L0hpZ2hsaWdodD5cbiAgICA8L0Jsb2NrPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHRFeGFtcGxlcyA9IHtcbiAgc2VjdGlvbk5hbWU6ICdIaWdobGlnaHQnLFxuICBkZXNjcmlwdGlvbjpcbiAgICAnSGlnaGxpZ2h0cyBhcmUgdXNlZnVsIGZvciBjYWxsaW5nIG91dCBpbmxpbmUgY29udGVudCwgc3VjaCBhcyB0YWdzLicsXG4gIGV4YW1wbGVzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdIaWdobGlnaHRzJyxcbiAgICAgIGNvbXBvbmVudDogSGlnaGxpZ2h0RXhhbXBsZSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==