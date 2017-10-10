'use strict';

var cov_1x7avmtv56 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/index.js',
      hash = 'c6cd4fda81e363516f52fa79be523e81e367c7b1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/index.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 21,
          column: 47
        }
      },
      '1': {
        start: {
          line: 22,
          column: 25
        },
        end: {
          line: 27,
          column: 1
        }
      },
      '2': {
        start: {
          line: 25,
          column: 20
        },
        end: {
          line: 25,
          column: 66
        }
      },
      '3': {
        start: {
          line: 26,
          column: 17
        },
        end: {
          line: 26,
          column: 73
        }
      },
      '4': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 34
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 12
          },
          end: {
            line: 25,
            column: 13
          }
        },
        loc: {
          start: {
            line: 25,
            column: 20
          },
          end: {
            line: 25,
            column: 66
          }
        },
        line: 25
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 26,
            column: 9
          },
          end: {
            line: 26,
            column: 10
          }
        },
        loc: {
          start: {
            line: 26,
            column: 17
          },
          end: {
            line: 26,
            column: 73
          }
        },
        line: 26
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

var _atom = require('atom');

var _fs = _interopRequireDefault(require('fs'));

var _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styleDir = (cov_1x7avmtv56.s[0]++, _path.default.join(__dirname, 'styles'));
// eslint-disable-next-line rulesdir/prefer-nuclide-uri
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

// Requiring this module will load all stylesheets in styles/.
// The exported value can be disposed to remove the stylesheets.

const styleDisposables = (cov_1x7avmtv56.s[1]++, new _atom.CompositeDisposable(..._fs.default.readdirSync(styleDir).filter(file => {
  cov_1x7avmtv56.f[0]++;
  cov_1x7avmtv56.s[2]++;
  return ['.less', '.css'].includes(_path.default.extname(file));
}).map(file => {
  cov_1x7avmtv56.f[1]++;
  cov_1x7avmtv56.s[3]++;
  return atom.themes.requireStylesheet(_path.default.join(styleDir, file));
})));

cov_1x7avmtv56.s[4]++;
module.exports = styleDisposables; // eslint-disable-line rulesdir/no-commonjs
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlRGlyIiwiam9pbiIsIl9fZGlybmFtZSIsInN0eWxlRGlzcG9zYWJsZXMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmNsdWRlcyIsImV4dG5hbWUiLCJtYXAiLCJ0aGVtZXMiLCJyZXF1aXJlU3R5bGVzaGVldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1BLG1DQUFXLGNBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixRQUFyQixDQUFYLENBQU47QUFIQTtBQWpCQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTs7QUFRQSxNQUFNQywyQ0FBbUIsOEJBQ3ZCLEdBQUcsWUFDQUMsV0FEQSxDQUNZSixRQURaLEVBRUFLLE1BRkEsQ0FFT0MsUUFBUTtBQUFBO0FBQUE7QUFBQSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCQyxRQUFsQixDQUEyQixjQUFLQyxPQUFMLENBQWFGLElBQWIsQ0FBM0I7QUFBOEMsQ0FGN0QsRUFHQUcsR0FIQSxDQUdJSCxRQUFRO0FBQUE7QUFBQTtBQUFBLGNBQUtJLE1BQUwsQ0FBWUMsaUJBQVosQ0FBOEIsY0FBS1YsSUFBTCxDQUFVRCxRQUFWLEVBQW9CTSxJQUFwQixDQUE5QjtBQUF3RCxDQUhwRSxDQURvQixDQUFuQixDQUFOOzs7QUFPQU0sT0FBT0MsT0FBUCxHQUFpQlYsZ0JBQWpCLEMsQ0FBbUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG4vLyBSZXF1aXJpbmcgdGhpcyBtb2R1bGUgd2lsbCBsb2FkIGFsbCBzdHlsZXNoZWV0cyBpbiBzdHlsZXMvLlxuLy8gVGhlIGV4cG9ydGVkIHZhbHVlIGNhbiBiZSBkaXNwb3NlZCB0byByZW1vdmUgdGhlIHN0eWxlc2hlZXRzLlxuXG5pbXBvcnQge0NvbXBvc2l0ZURpc3Bvc2FibGV9IGZyb20gJ2F0b20nO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBydWxlc2Rpci9wcmVmZXItbnVjbGlkZS11cmlcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBzdHlsZURpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdzdHlsZXMnKTtcbmNvbnN0IHN0eWxlRGlzcG9zYWJsZXMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZShcbiAgLi4uZnNcbiAgICAucmVhZGRpclN5bmMoc3R5bGVEaXIpXG4gICAgLmZpbHRlcihmaWxlID0+IFsnLmxlc3MnLCAnLmNzcyddLmluY2x1ZGVzKHBhdGguZXh0bmFtZShmaWxlKSkpXG4gICAgLm1hcChmaWxlID0+IGF0b20udGhlbWVzLnJlcXVpcmVTdHlsZXNoZWV0KHBhdGguam9pbihzdHlsZURpciwgZmlsZSkpKSxcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVEaXNwb3NhYmxlczsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBydWxlc2Rpci9uby1jb21tb25qc1xuIl19