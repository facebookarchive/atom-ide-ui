'use strict';

var cov_ib2zozbuf = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TabbableContainer.js',
      hash = '620cff1bf834889a3fc9e0292e15ffd67b78466c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/TabbableContainer.js',
    statementMap: {
      '0': {
        start: {
          line: 28,
          column: 36
        },
        end: {
          line: 28,
          column: 54
        }
      },
      '1': {
        start: {
          line: 39,
          column: 21
        },
        end: {
          line: 39,
          column: 35
        }
      },
      '2': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 32
        }
      },
      '3': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 50,
          column: 5
        }
      },
      '4': {
        start: {
          line: 45,
          column: 31
        },
        end: {
          line: 45,
          column: 49
        }
      },
      '5': {
        start: {
          line: 46,
          column: 35
        },
        end: {
          line: 46,
          column: 54
        }
      },
      '6': {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 49,
          column: 7
        }
      },
      '7': {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 37
        }
      },
      '8': {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 61,
          column: 6
        }
      },
      '9': {
        start: {
          line: 58,
          column: 22
        },
        end: {
          line: 58,
          column: 43
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 22
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 38
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        loc: {
          start: {
            line: 53,
            column: 23
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 53
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 58,
            column: 13
          },
          end: {
            line: 58,
            column: 14
          }
        },
        loc: {
          start: {
            line: 58,
            column: 22
          },
          end: {
            line: 58,
            column: 43
          }
        },
        line: 58
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        }, {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        }],
        line: 44
      },
      '1': {
        loc: {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        }, {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        }],
        line: 47
      }
    },
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
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
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
exports._TABBABLE_CLASS_NAME = undefined;

var _react = _interopRequireDefault(require('react'));

var _tabbable;

function _load_tabbable() {
  return _tabbable = _interopRequireDefault(require('tabbable'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: This constant must be kept in sync with the keybinding in
//       ../nuclide-tab-focus/keymaps/nuclide-tab-focus.json
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

const _TABBABLE_CLASS_NAME = exports._TABBABLE_CLASS_NAME = (cov_ib2zozbuf.s[0]++, 'nuclide-tabbable');

class TabbableContainer extends _react.default.Component {

  componentDidMount() {
    cov_ib2zozbuf.f[0]++;

    const rootNode = (cov_ib2zozbuf.s[1]++, this._rootNode);
    cov_ib2zozbuf.s[2]++;

    if (!(rootNode != null)) {
      throw new Error('Invariant violation: "rootNode != null"');
    }

    // If focus has been deliberately set inside the container, don't try
    // to override it


    cov_ib2zozbuf.s[3]++;
    if (!rootNode.contains(document.activeElement)) {
      cov_ib2zozbuf.b[0][0]++;

      const tabbableElements = (cov_ib2zozbuf.s[4]++, (0, (_tabbable || _load_tabbable()).default)(rootNode));
      const firstTabbableElement = (cov_ib2zozbuf.s[5]++, tabbableElements[0]);
      cov_ib2zozbuf.s[6]++;
      if (firstTabbableElement != null) {
        cov_ib2zozbuf.b[1][0]++;
        cov_ib2zozbuf.s[7]++;

        firstTabbableElement.focus();
      } else {
        cov_ib2zozbuf.b[1][1]++;
      }
    } else {
      cov_ib2zozbuf.b[0][1]++;
    }
  }

  render() {
    cov_ib2zozbuf.f[1]++;
    cov_ib2zozbuf.s[8]++;

    return _react.default.createElement(
      'div',
      {
        className: _TABBABLE_CLASS_NAME,
        'data-contained': this.props.contained,
        ref: node => {
          cov_ib2zozbuf.f[2]++;
          cov_ib2zozbuf.s[9]++;
          return this._rootNode = node;
        } },
      this.props.children
    );
  }
}
exports.default = TabbableContainer;
TabbableContainer.defaultProps = {
  contained: false,
  autoFocus: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYmJhYmxlQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIl9UQUJCQUJMRV9DTEFTU19OQU1FIiwiVGFiYmFibGVDb250YWluZXIiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInJvb3ROb2RlIiwiX3Jvb3ROb2RlIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJ0YWJiYWJsZUVsZW1lbnRzIiwiZmlyc3RUYWJiYWJsZUVsZW1lbnQiLCJmb2N1cyIsInJlbmRlciIsInByb3BzIiwiY29udGFpbmVkIiwibm9kZSIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwiYXV0b0ZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUVBO0FBQUE7QUFBQTs7OztBQVdBO0FBQ0E7QUExQkE7Ozs7Ozs7Ozs7OztBQTJCTyxNQUFNQSw2RUFBdUIsa0JBQXZCLENBQU47O0FBRVEsTUFBTUMsaUJBQU4sU0FBZ0MsZUFBTUMsU0FBdEMsQ0FBdUQ7O0FBUXBFQyxzQkFBb0I7QUFBQTs7QUFDbEIsVUFBTUMsa0NBQVcsS0FBS0MsU0FBaEIsQ0FBTjtBQURrQjs7QUFBQSxVQUVSRCxZQUFZLElBRko7QUFBQTtBQUFBOztBQUlsQjtBQUNBOzs7QUFMa0I7QUFNbEIsUUFBSSxDQUFDQSxTQUFTRSxRQUFULENBQWtCQyxTQUFTQyxhQUEzQixDQUFMLEVBQWdEO0FBQUE7O0FBQzlDLFlBQU1DLDBDQUFtQiw2Q0FBU0wsUUFBVCxDQUFuQixDQUFOO0FBQ0EsWUFBTU0sOENBQXVCRCxpQkFBaUIsQ0FBakIsQ0FBdkIsQ0FBTjtBQUY4QztBQUc5QyxVQUFJQyx3QkFBd0IsSUFBNUIsRUFBa0M7QUFBQTtBQUFBOztBQUNoQ0EsNkJBQXFCQyxLQUFyQjtBQUNELE9BRkQ7QUFBQTtBQUFBO0FBR0QsS0FORDtBQUFBO0FBQUE7QUFPRDs7QUFFREMsV0FBcUI7QUFBQTtBQUFBOztBQUNuQixXQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFXWixvQkFEYjtBQUVFLDBCQUFnQixLQUFLYSxLQUFMLENBQVdDLFNBRjdCO0FBR0UsYUFBS0MsUUFBUztBQUFBO0FBQUE7QUFBQSxzQkFBS1YsU0FBTCxHQUFpQlUsSUFBakI7QUFBcUIsU0FIckM7QUFJRyxXQUFLRixLQUFMLENBQVdHO0FBSmQsS0FERjtBQVFEO0FBaENtRTtrQkFBakRmLGlCO0FBQUFBLGlCLENBR1pnQixZLEdBQTZCO0FBQ2xDSCxhQUFXLEtBRHVCO0FBRWxDSSxhQUFXO0FBRnVCLEMiLCJmaWxlIjoiVGFiYmFibGVDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHRhYmJhYmxlIGZyb20gJ3RhYmJhYmxlJztcblxudHlwZSBEZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lZDogYm9vbGVhbixcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QkRWxlbWVudDxhbnk+LFxuICBjb250YWluZWQ6IGJvb2xlYW4sXG59O1xuXG4vLyBOT1RFOiBUaGlzIGNvbnN0YW50IG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGtleWJpbmRpbmcgaW5cbi8vICAgICAgIC4uL251Y2xpZGUtdGFiLWZvY3VzL2tleW1hcHMvbnVjbGlkZS10YWItZm9jdXMuanNvblxuZXhwb3J0IGNvbnN0IF9UQUJCQUJMRV9DTEFTU19OQU1FID0gJ251Y2xpZGUtdGFiYmFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJiYWJsZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBfcm9vdE5vZGU6ID9IVE1MRGl2RWxlbWVudDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBEZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGFpbmVkOiBmYWxzZSxcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHJvb3ROb2RlID0gdGhpcy5fcm9vdE5vZGU7XG4gICAgaW52YXJpYW50KHJvb3ROb2RlICE9IG51bGwpO1xuXG4gICAgLy8gSWYgZm9jdXMgaGFzIGJlZW4gZGVsaWJlcmF0ZWx5IHNldCBpbnNpZGUgdGhlIGNvbnRhaW5lciwgZG9uJ3QgdHJ5XG4gICAgLy8gdG8gb3ZlcnJpZGUgaXRcbiAgICBpZiAoIXJvb3ROb2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBjb25zdCB0YWJiYWJsZUVsZW1lbnRzID0gdGFiYmFibGUocm9vdE5vZGUpO1xuICAgICAgY29uc3QgZmlyc3RUYWJiYWJsZUVsZW1lbnQgPSB0YWJiYWJsZUVsZW1lbnRzWzBdO1xuICAgICAgaWYgKGZpcnN0VGFiYmFibGVFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgZmlyc3RUYWJiYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogUmVhY3QkTm9kZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtfVEFCQkFCTEVfQ0xBU1NfTkFNRX1cbiAgICAgICAgZGF0YS1jb250YWluZWQ9e3RoaXMucHJvcHMuY29udGFpbmVkfVxuICAgICAgICByZWY9e25vZGUgPT4gKHRoaXMuX3Jvb3ROb2RlID0gbm9kZSl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==