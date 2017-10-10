'use strict';

var cov_xqgmhdimq = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/SettingsModal.js',
      hash = '4193cc47b7564e2c8ae05929a797c6a2d3a1d69c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/SettingsModal.js',
    statementMap: {
      '0': {
        start: {
          line: 28,
          column: 30
        },
        end: {
          line: 30,
          column: 3
        }
      },
      '1': {
        start: {
          line: 29,
          column: 14
        },
        end: {
          line: 29,
          column: 40
        }
      },
      '2': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      '3': {
        start: {
          line: 41,
          column: 29
        },
        end: {
          line: 41,
          column: 76
        }
      },
      '4': {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 54,
          column: 4
        }
      },
      '5': {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 64
        }
      }
    },
    fnMap: {
      '0': {
        name: 'SettingsModal',
        decl: {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 37
          }
        },
        loc: {
          start: {
            line: 27,
            column: 73
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 27
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 14
          },
          end: {
            line: 29,
            column: 40
          }
        },
        line: 29
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 41,
            column: 24
          },
          end: {
            line: 41,
            column: 25
          }
        },
        loc: {
          start: {
            line: 41,
            column: 29
          },
          end: {
            line: 41,
            column: 76
          }
        },
        line: 41
      },
      '3': {
        name: 'SettingsSection',
        decl: {
          start: {
            line: 46,
            column: 9
          },
          end: {
            line: 46,
            column: 24
          }
        },
        loc: {
          start: {
            line: 46,
            column: 75
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 46
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 50,
            column: 26
          },
          end: {
            line: 50,
            column: 27
          }
        },
        loc: {
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 51,
            column: 64
          }
        },
        line: 51
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 40,
            column: 7
          },
          end: {
            line: 40,
            column: 42
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 35
          }
        }, {
          start: {
            line: 40,
            column: 38
          },
          end: {
            line: 40,
            column: 42
          }
        }],
        line: 40
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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
exports.default = SettingsModal;

var _react = _interopRequireWildcard(require('react'));

var _BoundSettingsControl;

function _load_BoundSettingsControl() {
  return _BoundSettingsControl = _interopRequireDefault(require('nuclide-commons-ui/BoundSettingsControl'));
}

var _HR;

function _load_HR() {
  return _HR = require('nuclide-commons-ui/HR');
}

var _featureConfig;

function _load_featureConfig() {
  return _featureConfig = _interopRequireDefault(require('nuclide-commons-atom/feature-config'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function SettingsModal(props) {
  cov_xqgmhdimq.f[0]++;

  const hasProviderSettings = (cov_xqgmhdimq.s[0]++, props.config.some(config => {
    cov_xqgmhdimq.f[1]++;
    cov_xqgmhdimq.s[1]++;
    return config.settings.length > 0;
  }));
  cov_xqgmhdimq.s[2]++;
  return _react.createElement(
    'div',
    { className: 'nuclide-diagnostics-ui-settings-modal settings-view' },
    _react.createElement(
      'section',
      { className: 'settings-panel' },
      _react.createElement((_BoundSettingsControl || _load_BoundSettingsControl()).default, {
        keyPath: (_featureConfig || _load_featureConfig()).default.formatKeyPath('atom-ide-diagnostics-ui.showDirectoryColumn')
      })
    ),
    hasProviderSettings ? (cov_xqgmhdimq.b[0][0]++, _react.createElement((_HR || _load_HR()).HR, null)) : (cov_xqgmhdimq.b[0][1]++, null),
    props.config.map(p => {
      cov_xqgmhdimq.f[2]++;
      cov_xqgmhdimq.s[3]++;
      return _react.createElement(SettingsSection, Object.assign({ key: p.providerName }, p));
    })
  );
}

function SettingsSection(props) {
  cov_xqgmhdimq.f[3]++;
  cov_xqgmhdimq.s[4]++;

  return _react.createElement(
    'section',
    { className: 'settings-panel' },
    _react.createElement(
      'h1',
      { className: 'section-heading' },
      props.providerName
    ),
    props.settings.map(keyPath => {
      cov_xqgmhdimq.f[4]++;
      cov_xqgmhdimq.s[5]++;
      return _react.createElement((_BoundSettingsControl || _load_BoundSettingsControl()).default, { key: keyPath, keyPath: keyPath });
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNldHRpbmdzTW9kYWwuanMiXSwibmFtZXMiOlsiU2V0dGluZ3NNb2RhbCIsInByb3BzIiwiaGFzUHJvdmlkZXJTZXR0aW5ncyIsImNvbmZpZyIsInNvbWUiLCJzZXR0aW5ncyIsImxlbmd0aCIsImZvcm1hdEtleVBhdGgiLCJtYXAiLCJwIiwicHJvdmlkZXJOYW1lIiwiU2V0dGluZ3NTZWN0aW9uIiwia2V5UGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTBCd0JBLGE7O0FBZHhCOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7QUFmQTs7Ozs7Ozs7Ozs7O0FBMEJlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQTBEO0FBQUE7O0FBQ3ZFLFFBQU1DLDZDQUFzQkQsTUFBTUUsTUFBTixDQUFhQyxJQUFiLENBQzFCRCxVQUFVO0FBQUE7QUFBQTtBQUFBLGtCQUFPRSxRQUFQLENBQWdCQyxNQUFoQixHQUF5QixDQUF6QjtBQUEwQixHQURWLENBQXRCLENBQU47QUFEdUU7QUFJdkUsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHFEQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQVMsV0FBVSxnQkFBbkI7QUFDRTtBQUNFLGlCQUFTLGtEQUFjQyxhQUFkLENBQ1AsNkNBRE87QUFEWDtBQURGLEtBREY7QUFRR0wsb0RBQXNCLGtEQUF0Qiw4QkFBK0IsSUFBL0IsQ0FSSDtBQVNHRCxVQUFNRSxNQUFOLENBQWFLLEdBQWIsQ0FBaUJDLEtBQUs7QUFBQTtBQUFBO0FBQUEsa0NBQUMsZUFBRCxrQkFBaUIsS0FBS0EsRUFBRUMsWUFBeEIsSUFBMENELENBQTFDO0FBQStDLEtBQXJFO0FBVEgsR0FERjtBQWFEOztBQUVELFNBQVNFLGVBQVQsQ0FBeUJWLEtBQXpCLEVBQTJFO0FBQUE7QUFBQTs7QUFDekUsU0FDRTtBQUFBO0FBQUEsTUFBUyxXQUFVLGdCQUFuQjtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsaUJBQWQ7QUFBaUNBLFlBQU1TO0FBQXZDLEtBREY7QUFFR1QsVUFBTUksUUFBTixDQUFlRyxHQUFmLENBQW1CSSxXQUNsQjtBQUFBO0FBQUE7QUFBQSxxR0FBc0IsS0FBS0EsT0FBM0IsRUFBb0MsU0FBU0EsT0FBN0M7QUFBd0QsS0FEekQ7QUFGSCxHQURGO0FBUUQiLCJmaWxlIjoiU2V0dGluZ3NNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3VuZFNldHRpbmdzQ29udHJvbCBmcm9tICdudWNsaWRlLWNvbW1vbnMtdWkvQm91bmRTZXR0aW5nc0NvbnRyb2wnO1xuaW1wb3J0IHtIUn0gZnJvbSAnbnVjbGlkZS1jb21tb25zLXVpL0hSJztcbmltcG9ydCBmZWF0dXJlQ29uZmlnIGZyb20gJ251Y2xpZGUtY29tbW9ucy1hdG9tL2ZlYXR1cmUtY29uZmlnJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY29uZmlnOiBBcnJheTxTZXR0aW5nc1NlY3Rpb25Qcm9wcz4sXG59O1xuXG50eXBlIFNldHRpbmdzU2VjdGlvblByb3BzID0ge1xuICBwcm92aWRlck5hbWU6IHN0cmluZyxcbiAgc2V0dGluZ3M6IEFycmF5PHN0cmluZz4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nc01vZGFsKHByb3BzOiBQcm9wcyk6ID9SZWFjdC5FbGVtZW50PGFueT4ge1xuICBjb25zdCBoYXNQcm92aWRlclNldHRpbmdzID0gcHJvcHMuY29uZmlnLnNvbWUoXG4gICAgY29uZmlnID0+IGNvbmZpZy5zZXR0aW5ncy5sZW5ndGggPiAwLFxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibnVjbGlkZS1kaWFnbm9zdGljcy11aS1zZXR0aW5ncy1tb2RhbCBzZXR0aW5ncy12aWV3XCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZXR0aW5ncy1wYW5lbFwiPlxuICAgICAgICA8Qm91bmRTZXR0aW5nc0NvbnRyb2xcbiAgICAgICAgICBrZXlQYXRoPXtmZWF0dXJlQ29uZmlnLmZvcm1hdEtleVBhdGgoXG4gICAgICAgICAgICAnYXRvbS1pZGUtZGlhZ25vc3RpY3MtdWkuc2hvd0RpcmVjdG9yeUNvbHVtbicsXG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHtoYXNQcm92aWRlclNldHRpbmdzID8gPEhSIC8+IDogbnVsbH1cbiAgICAgIHtwcm9wcy5jb25maWcubWFwKHAgPT4gPFNldHRpbmdzU2VjdGlvbiBrZXk9e3AucHJvdmlkZXJOYW1lfSB7Li4ucH0gLz4pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTZXR0aW5nc1NlY3Rpb24ocHJvcHM6IFNldHRpbmdzU2VjdGlvblByb3BzKTogP1JlYWN0LkVsZW1lbnQ8YW55PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2V0dGluZ3MtcGFuZWxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj57cHJvcHMucHJvdmlkZXJOYW1lfTwvaDE+XG4gICAgICB7cHJvcHMuc2V0dGluZ3MubWFwKGtleVBhdGggPT4gKFxuICAgICAgICA8Qm91bmRTZXR0aW5nc0NvbnRyb2wga2V5PXtrZXlQYXRofSBrZXlQYXRoPXtrZXlQYXRofSAvPlxuICAgICAgKSl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl19