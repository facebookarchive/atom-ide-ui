'use strict';

var cov_cuhgl44tl = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/FilterButton.js',
      hash = '647952252ea086aec6c9a8865cdefb521e82f06a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/lib/ui/FilterButton.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 28
        },
        end: {
          line: 26,
          column: 33
        }
      },
      '1': {
        start: {
          line: 27,
          column: 22
        },
        end: {
          line: 27,
          column: 54
        }
      },
      '2': {
        start: {
          line: 28,
          column: 16
        },
        end: {
          line: 28,
          column: 78
        }
      },
      '3': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 37,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'FilterButton',
        decl: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 36
          }
        },
        loc: {
          start: {
            line: 25,
            column: 63
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 25
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 28,
            column: 78
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 28,
            column: 33
          },
          end: {
            line: 28,
            column: 54
          }
        }, {
          start: {
            line: 28,
            column: 57
          },
          end: {
            line: 28,
            column: 78
          }
        }],
        line: 28
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
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
exports.default = FilterButton;

var _Button;

function _load_Button() {
  return _Button = require('nuclide-commons-ui/Button');
}

var _react = _interopRequireWildcard(require('react'));

var _GroupUtils;

function _load_GroupUtils() {
  return _GroupUtils = _interopRequireWildcard(require('../GroupUtils'));
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

function FilterButton(props) {
  cov_cuhgl44tl.f[0]++;

  const { selected, group } = (cov_cuhgl44tl.s[0]++, props);
  const displayName = (cov_cuhgl44tl.s[1]++, (_GroupUtils || _load_GroupUtils()).getDisplayName(group));
  const title = (cov_cuhgl44tl.s[2]++, props.selected ? (cov_cuhgl44tl.b[0][0]++, `Hide ${displayName}`) : (cov_cuhgl44tl.b[0][1]++, `Show ${displayName}`));
  cov_cuhgl44tl.s[3]++;
  return _react.createElement((_Button || _load_Button()).Button, {
    icon: (_GroupUtils || _load_GroupUtils()).getIcon(group),
    size: (_Button || _load_Button()).ButtonSizes.SMALL,
    selected: selected,
    onClick: props.onClick,
    tooltip: { title }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZpbHRlckJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJCdXR0b24iLCJwcm9wcyIsInNlbGVjdGVkIiwiZ3JvdXAiLCJkaXNwbGF5TmFtZSIsImdldERpc3BsYXlOYW1lIiwidGl0bGUiLCJnZXRJY29uIiwiU01BTEwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXdCd0JBLFk7Ozs7QUFWeEI7QUFBQTtBQUFBOztBQUNBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBaEJBOzs7Ozs7Ozs7Ozs7QUF3QmUsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBZ0Q7QUFBQTs7QUFDN0QsUUFBTSxFQUFDQyxRQUFELEVBQVdDLEtBQVgsNEJBQW9CRixLQUFwQixDQUFOO0FBQ0EsUUFBTUcscUNBQWMsb0NBQVdDLGNBQVgsQ0FBMEJGLEtBQTFCLENBQWQsQ0FBTjtBQUNBLFFBQU1HLCtCQUFRTCxNQUFNQyxRQUFOLDZCQUFrQixRQUFPRSxXQUFZLEVBQXJDLDhCQUEwQyxRQUFPQSxXQUFZLEVBQTdELENBQVIsQ0FBTjtBQUg2RDtBQUk3RCxTQUNFO0FBQ0UsVUFBTSxvQ0FBV0csT0FBWCxDQUFtQkosS0FBbkIsQ0FEUjtBQUVFLFVBQU0sd0NBQVlLLEtBRnBCO0FBR0UsY0FBVU4sUUFIWjtBQUlFLGFBQVNELE1BQU1RLE9BSmpCO0FBS0UsYUFBUyxFQUFDSCxLQUFEO0FBTFgsSUFERjtBQVNEIiwiZmlsZSI6IkZpbHRlckJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCB0eXBlIHtEaWFnbm9zdGljR3JvdXB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHtCdXR0b24sIEJ1dHRvblNpemVzfSBmcm9tICdudWNsaWRlLWNvbW1vbnMtdWkvQnV0dG9uJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIEdyb3VwVXRpbHMgZnJvbSAnLi4vR3JvdXBVdGlscyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBncm91cDogRGlhZ25vc3RpY0dyb3VwLFxuICBzZWxlY3RlZDogYm9vbGVhbixcbiAgb25DbGljazogKCkgPT4gbWl4ZWQsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyQnV0dG9uKHByb3BzOiBQcm9wcyk6IFJlYWN0Lk5vZGUge1xuICBjb25zdCB7c2VsZWN0ZWQsIGdyb3VwfSA9IHByb3BzO1xuICBjb25zdCBkaXNwbGF5TmFtZSA9IEdyb3VwVXRpbHMuZ2V0RGlzcGxheU5hbWUoZ3JvdXApO1xuICBjb25zdCB0aXRsZSA9IHByb3BzLnNlbGVjdGVkID8gYEhpZGUgJHtkaXNwbGF5TmFtZX1gIDogYFNob3cgJHtkaXNwbGF5TmFtZX1gO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGljb249e0dyb3VwVXRpbHMuZ2V0SWNvbihncm91cCl9XG4gICAgICBzaXplPXtCdXR0b25TaXplcy5TTUFMTH1cbiAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICB0b29sdGlwPXt7dGl0bGV9fVxuICAgIC8+XG4gICk7XG59XG4iXX0=