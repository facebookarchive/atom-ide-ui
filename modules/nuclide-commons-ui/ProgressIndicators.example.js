'use strict';

var cov_2emrzhvoil = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ProgressIndicators.example.js',
      hash = 'c088dbf1bb657abe4ddb5a869c39919b42014a38',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ProgressIndicators.example.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 27
        },
        end: {
          line: 33,
          column: 1
        }
      },
      '1': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 32,
          column: 8
        }
      },
      '2': {
        start: {
          line: 35,
          column: 30
        },
        end: {
          line: 50,
          column: 1
        }
      },
      '3': {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 49,
          column: 8
        }
      },
      '4': {
        start: {
          line: 52,
          column: 41
        },
        end: {
          line: 66,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 28
          }
        },
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 32,
            column: 8
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 35,
            column: 30
          },
          end: {
            line: 35,
            column: 31
          }
        },
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 49,
            column: 8
          }
        },
        line: 36
      }
    },
    branchMap: {},
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
exports.ProgressIndicatorExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _ProgressBar;

function _load_ProgressBar() {
  return _ProgressBar = require('./ProgressBar');
}

var _LoadingSpinner;

function _load_LoadingSpinner() {
  return _LoadingSpinner = require('./LoadingSpinner');
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

cov_2emrzhvoil.s[0]++;


const ProgressBarExample = () => {
  cov_2emrzhvoil.f[0]++;
  cov_2emrzhvoil.s[1]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_ProgressBar || _load_ProgressBar()).ProgressBar, null)
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_ProgressBar || _load_ProgressBar()).ProgressBar, { max: 100, value: 0 })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_ProgressBar || _load_ProgressBar()).ProgressBar, { max: 100, value: 50 })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_ProgressBar || _load_ProgressBar()).ProgressBar, { max: 100, value: 100 })
    )
  );
};

cov_2emrzhvoil.s[2]++;
const LoadingSpinnerExample = () => {
  cov_2emrzhvoil.f[1]++;
  cov_2emrzhvoil.s[3]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_LoadingSpinner || _load_LoadingSpinner()).LoadingSpinner, { size: 'EXTRA_SMALL' })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_LoadingSpinner || _load_LoadingSpinner()).LoadingSpinner, { size: 'SMALL' })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_LoadingSpinner || _load_LoadingSpinner()).LoadingSpinner, { size: 'MEDIUM' })
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_LoadingSpinner || _load_LoadingSpinner()).LoadingSpinner, { size: 'LARGE' })
    )
  );
};

const ProgressIndicatorExamples = exports.ProgressIndicatorExamples = (cov_2emrzhvoil.s[4]++, {
  sectionName: 'Progress Indicators',
  description: 'Show that work is being performed. Consider using one of these for any work > 1s.',
  examples: [{
    title: 'ProgressBar',
    component: ProgressBarExample
  }, {
    title: 'LoadingSpinner',
    component: LoadingSpinnerExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzSW5kaWNhdG9ycy5leGFtcGxlLmpzIl0sIm5hbWVzIjpbIlByb2dyZXNzQmFyRXhhbXBsZSIsIkxvYWRpbmdTcGlubmVyRXhhbXBsZSIsIlByb2dyZXNzSW5kaWNhdG9yRXhhbXBsZXMiLCJzZWN0aW9uTmFtZSIsImRlc2NyaXB0aW9uIiwiZXhhbXBsZXMiLCJ0aXRsZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFmQTs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU1BLHFCQUFxQixNQUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSxnRkFBYSxLQUFLLEdBQWxCLEVBQXVCLE9BQU8sQ0FBOUI7QUFERixLQUpGO0FBT0U7QUFBQTtBQUFBO0FBQ0UsZ0ZBQWEsS0FBSyxHQUFsQixFQUF1QixPQUFPLEVBQTlCO0FBREYsS0FQRjtBQVVFO0FBQUE7QUFBQTtBQUNFLGdGQUFhLEtBQUssR0FBbEIsRUFBdUIsT0FBTyxHQUE5QjtBQURGO0FBVkY7QUFhTSxDQWRSOzs7QUFpQkEsTUFBTUMsd0JBQXdCLE1BQzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlGQUFnQixNQUFLLGFBQXJCO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFLHlGQUFnQixNQUFLLE9BQXJCO0FBREYsS0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFLHlGQUFnQixNQUFLLFFBQXJCO0FBREYsS0FQRjtBQVVFO0FBQUE7QUFBQTtBQUNFLHlGQUFnQixNQUFLLE9BQXJCO0FBREY7QUFWRjtBQWFNLENBZFI7O0FBaUJPLE1BQU1DLHdGQUE0QjtBQUN2Q0MsZUFBYSxxQkFEMEI7QUFFdkNDLGVBQ0UsbUZBSHFDO0FBSXZDQyxZQUFVLENBQ1I7QUFDRUMsV0FBTyxhQURUO0FBRUVDLGVBQVdQO0FBRmIsR0FEUSxFQUtSO0FBQ0VNLFdBQU8sZ0JBRFQ7QUFFRUMsZUFBV047QUFGYixHQUxRO0FBSjZCLENBQTVCLENBQU4iLCJmaWxlIjoiUHJvZ3Jlc3NJbmRpY2F0b3JzLmV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuL0Jsb2NrJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJ9IGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHtMb2FkaW5nU3Bpbm5lcn0gZnJvbSAnLi9Mb2FkaW5nU3Bpbm5lcic7XG5cbmNvbnN0IFByb2dyZXNzQmFyRXhhbXBsZSA9ICgpOiBSZWFjdC5FbGVtZW50PGFueT4gPT4gKFxuICA8ZGl2PlxuICAgIDxCbG9jaz5cbiAgICAgIDxQcm9ncmVzc0JhciAvPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPFByb2dyZXNzQmFyIG1heD17MTAwfSB2YWx1ZT17MH0gLz5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxQcm9ncmVzc0JhciBtYXg9ezEwMH0gdmFsdWU9ezUwfSAvPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPFByb2dyZXNzQmFyIG1heD17MTAwfSB2YWx1ZT17MTAwfSAvPlxuICAgIDwvQmxvY2s+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTG9hZGluZ1NwaW5uZXJFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPExvYWRpbmdTcGlubmVyIHNpemU9XCJFWFRSQV9TTUFMTFwiIC8+XG4gICAgPC9CbG9jaz5cbiAgICA8QmxvY2s+XG4gICAgICA8TG9hZGluZ1NwaW5uZXIgc2l6ZT1cIlNNQUxMXCIgLz5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxMb2FkaW5nU3Bpbm5lciBzaXplPVwiTUVESVVNXCIgLz5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxMb2FkaW5nU3Bpbm5lciBzaXplPVwiTEFSR0VcIiAvPlxuICAgIDwvQmxvY2s+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzSW5kaWNhdG9yRXhhbXBsZXMgPSB7XG4gIHNlY3Rpb25OYW1lOiAnUHJvZ3Jlc3MgSW5kaWNhdG9ycycsXG4gIGRlc2NyaXB0aW9uOlxuICAgICdTaG93IHRoYXQgd29yayBpcyBiZWluZyBwZXJmb3JtZWQuIENvbnNpZGVyIHVzaW5nIG9uZSBvZiB0aGVzZSBmb3IgYW55IHdvcmsgPiAxcy4nLFxuICBleGFtcGxlczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnUHJvZ3Jlc3NCYXInLFxuICAgICAgY29tcG9uZW50OiBQcm9ncmVzc0JhckV4YW1wbGUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0xvYWRpbmdTcGlubmVyJyxcbiAgICAgIGNvbXBvbmVudDogTG9hZGluZ1NwaW5uZXJFeGFtcGxlLFxuICAgIH0sXG4gIF0sXG59O1xuIl19