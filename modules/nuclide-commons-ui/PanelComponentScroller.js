'use strict';

var cov_9cesrvnzn = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/PanelComponentScroller.js',
      hash = 'ca7f1148f8125310a4d457ad369c79d6c6d1b015',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/PanelComponentScroller.js',
    statementMap: {
      '0': {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 77
        }
      },
      '1': {
        start: {
          line: 28,
          column: 22
        },
        end: {
          line: 31,
          column: 6
        }
      },
      '2': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 42,
          column: 6
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
            line: 27,
            column: 77
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 27,
            column: 37
          },
          end: {
            line: 27,
            column: 41
          }
        }, {
          start: {
            line: 27,
            column: 44
          },
          end: {
            line: 27,
            column: 77
          }
        }],
        line: 27
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0
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
exports.PanelComponentScroller = undefined;

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _react = _interopRequireWildcard(require('react'));

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

class PanelComponentScroller extends _react.Component {
  render() {
    cov_9cesrvnzn.f[0]++;

    const style = (cov_9cesrvnzn.s[0]++, this.props.overflowX == null ? (cov_9cesrvnzn.b[0][0]++, null) : (cov_9cesrvnzn.b[0][1]++, { overflowX: this.props.overflowX }));
    const className = (cov_9cesrvnzn.s[1]++, (0, (_classnames || _load_classnames()).default)('nuclide-ui-panel-component-scroller', {
      'nuclide-ui-panel-component-scroller--column': this.props.flexDirection === 'column'
    }));

    cov_9cesrvnzn.s[2]++;
    return (
      // $FlowFixMe(>=0.53.0) Flow suppress
      _react.createElement(
        'div',
        {
          className: className,
          style: style,
          onScroll: this.props.onScroll,
          onFocus: this.props.onFocus },
        this.props.children
      )
    );
  }
}
exports.PanelComponentScroller = PanelComponentScroller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVsQ29tcG9uZW50U2Nyb2xsZXIuanMiXSwibmFtZXMiOlsiUGFuZWxDb21wb25lbnRTY3JvbGxlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInN0eWxlIiwicHJvcHMiLCJvdmVyZmxvd1giLCJjbGFzc05hbWUiLCJmbGV4RGlyZWN0aW9uIiwib25TY3JvbGwiLCJvbkZvY3VzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTs7QUFDQTs7Ozs7O0FBYkE7Ozs7Ozs7Ozs7OztBQXVCTyxNQUFNQSxzQkFBTixTQUFxQyxPQUFNQyxTQUEzQyxDQUE0RDtBQUNqRUMsV0FBcUI7QUFBQTs7QUFDbkIsVUFBTUMsK0JBQ0osS0FBS0MsS0FBTCxDQUFXQyxTQUFYLElBQXdCLElBQXhCLDZCQUErQixJQUEvQiw4QkFBc0MsRUFBQ0EsV0FBVyxLQUFLRCxLQUFMLENBQVdDLFNBQXZCLEVBQXRDLENBREksQ0FBTjtBQUVBLFVBQU1DLG1DQUFZLGlEQUFXLHFDQUFYLEVBQWtEO0FBQ2xFLHFEQUNFLEtBQUtGLEtBQUwsQ0FBV0csYUFBWCxLQUE2QjtBQUZtQyxLQUFsRCxDQUFaLENBQU47O0FBSG1CO0FBUW5CO0FBQ0U7QUFDQTtBQUFBO0FBQUE7QUFDRSxxQkFBV0QsU0FEYjtBQUVFLGlCQUFPSCxLQUZUO0FBR0Usb0JBQVUsS0FBS0MsS0FBTCxDQUFXSSxRQUh2QjtBQUlFLG1CQUFTLEtBQUtKLEtBQUwsQ0FBV0ssT0FKdEI7QUFLRyxhQUFLTCxLQUFMLENBQVdNO0FBTGQ7QUFGRjtBQVVEO0FBbkJnRTtRQUF0RFYsc0IsR0FBQUEsc0IiLCJmaWxlIjoiUGFuZWxDb21wb25lbnRTY3JvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IG1peGVkLFxuICBmbGV4RGlyZWN0aW9uPzogJ2NvbHVtbicsXG4gIG92ZXJmbG93WD86IHN0cmluZyxcbiAgb25TY3JvbGw/OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkLFxuICBvbkZvY3VzPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudDw+KSA9PiB2b2lkLFxufTtcblxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50U2Nyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Lk5vZGUge1xuICAgIGNvbnN0IHN0eWxlID1cbiAgICAgIHRoaXMucHJvcHMub3ZlcmZsb3dYID09IG51bGwgPyBudWxsIDoge292ZXJmbG93WDogdGhpcy5wcm9wcy5vdmVyZmxvd1h9O1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoJ251Y2xpZGUtdWktcGFuZWwtY29tcG9uZW50LXNjcm9sbGVyJywge1xuICAgICAgJ251Y2xpZGUtdWktcGFuZWwtY29tcG9uZW50LXNjcm9sbGVyLS1jb2x1bW4nOlxuICAgICAgICB0aGlzLnByb3BzLmZsZXhEaXJlY3Rpb24gPT09ICdjb2x1bW4nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vICRGbG93Rml4TWUoPj0wLjUzLjApIEZsb3cgc3VwcHJlc3NcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMucHJvcHMub25TY3JvbGx9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMucHJvcHMub25Gb2N1c30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19