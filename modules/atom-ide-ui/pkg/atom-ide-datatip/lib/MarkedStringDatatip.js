'use strict';

var cov_wb5z9teut = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/MarkedStringDatatip.js',
      hash = 'a6e9d7743ee0688689d9ce6ad9fa3889e5d3285c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/MarkedStringDatatip.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 21
        },
        end: {
          line: 40,
          column: 6
        }
      },
      '1': {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 39,
          column: 7
        }
      },
      '2': {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 36,
          column: 10
        }
      },
      '3': {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 58
        }
      },
      '4': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 60
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 23
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 25
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 26,
            column: 50
          },
          end: {
            line: 26,
            column: 51
          }
        },
        loc: {
          start: {
            line: 26,
            column: 64
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 26
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 27,
            column: 6
          },
          end: {
            line: 39,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 27,
            column: 6
          },
          end: {
            line: 39,
            column: 7
          }
        }, {
          start: {
            line: 27,
            column: 6
          },
          end: {
            line: 39,
            column: 7
          }
        }],
        line: 27
      }
    },
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

var _marked;

function _load_marked() {
  return _marked = _interopRequireDefault(require('marked'));
}

var _react = _interopRequireWildcard(require('react'));

var _MarkedStringSnippet;

function _load_MarkedStringSnippet() {
  return _MarkedStringSnippet = _interopRequireDefault(require('./MarkedStringSnippet'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

class MarkedStringDatatip extends _react.PureComponent {
  render() {
    cov_wb5z9teut.f[0]++;

    const elements = (cov_wb5z9teut.s[0]++, this.props.markedStrings.map((chunk, i) => {
      cov_wb5z9teut.f[1]++;
      cov_wb5z9teut.s[1]++;

      if (chunk.type === 'markdown') {
        cov_wb5z9teut.b[0][0]++;
        cov_wb5z9teut.s[2]++;

        return _react.createElement('div', {
          className: 'datatip-marked-container',
          dangerouslySetInnerHTML: {
            __html: (0, (_marked || _load_marked()).default)(chunk.value, { sanitize: true })
          },
          key: i
        });
      } else {
        cov_wb5z9teut.b[0][1]++;
        cov_wb5z9teut.s[3]++;

        return _react.createElement((_MarkedStringSnippet || _load_MarkedStringSnippet()).default, Object.assign({ key: i }, chunk));
      }
    }));

    cov_wb5z9teut.s[4]++;
    return _react.createElement(
      'div',
      { className: 'datatip-marked' },
      elements
    );
  }
}
exports.default = MarkedStringDatatip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1hcmtlZFN0cmluZ0RhdGF0aXAuanMiXSwibmFtZXMiOlsiTWFya2VkU3RyaW5nRGF0YXRpcCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJlbGVtZW50cyIsInByb3BzIiwibWFya2VkU3RyaW5ncyIsIm1hcCIsImNodW5rIiwiaSIsInR5cGUiLCJfX2h0bWwiLCJ2YWx1ZSIsInNhbml0aXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUFBOztBQUNBOzs7O0FBRUE7QUFBQTtBQUFBOzs7Ozs7QUFqQkE7Ozs7Ozs7Ozs7OztBQXVCZSxNQUFNQSxtQkFBTixTQUFrQyxPQUFNQyxhQUF4QyxDQUE2RDtBQUMxRUMsV0FBcUI7QUFBQTs7QUFDbkIsVUFBTUMsa0NBQVcsS0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCQyxHQUF6QixDQUE2QixDQUFDQyxLQUFELEVBQVFDLENBQVIsS0FBYztBQUFBO0FBQUE7O0FBQzFELFVBQUlELE1BQU1FLElBQU4sS0FBZSxVQUFuQixFQUErQjtBQUFBO0FBQUE7O0FBQzdCLGVBQ0U7QUFDRSxxQkFBVSwwQkFEWjtBQUVFLG1DQUF5QjtBQUN2QkMsb0JBQVEseUNBQU9ILE1BQU1JLEtBQWIsRUFBb0IsRUFBQ0MsVUFBVSxJQUFYLEVBQXBCO0FBRGUsV0FGM0I7QUFLRSxlQUFLSjtBQUxQLFVBREY7QUFTRCxPQVZELE1BVU87QUFBQTtBQUFBOztBQUNMLGVBQU8sb0dBQXFCLEtBQUtBLENBQTFCLElBQWlDRCxLQUFqQyxFQUFQO0FBQ0Q7QUFDRixLQWRnQixDQUFYLENBQU47O0FBRG1CO0FBaUJuQixXQUFPO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0JBQWY7QUFBaUNKO0FBQWpDLEtBQVA7QUFDRDtBQW5CeUU7a0JBQXZESCxtQiIsImZpbGUiOiJNYXJrZWRTdHJpbmdEYXRhdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IHR5cGUge01hcmtlZFN0cmluZ30gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1hcmtlZFN0cmluZ1NuaXBwZXQgZnJvbSAnLi9NYXJrZWRTdHJpbmdTbmlwcGV0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgbWFya2VkU3RyaW5nczogQXJyYXk8TWFya2VkU3RyaW5nPixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlZFN0cmluZ0RhdGF0aXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdC5Ob2RlIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMucHJvcHMubWFya2VkU3RyaW5ncy5tYXAoKGNodW5rLCBpKSA9PiB7XG4gICAgICBpZiAoY2h1bmsudHlwZSA9PT0gJ21hcmtkb3duJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGF0aXAtbWFya2VkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IG1hcmtlZChjaHVuay52YWx1ZSwge3Nhbml0aXplOiB0cnVlfSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPE1hcmtlZFN0cmluZ1NuaXBwZXQga2V5PXtpfSB7Li4uY2h1bmt9IC8+O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0YXRpcC1tYXJrZWRcIj57ZWxlbWVudHN9PC9kaXY+O1xuICB9XG59XG4iXX0=