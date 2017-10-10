'use strict';

var cov_ccruvyife = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/RegExpFilter.example.js',
      hash = '3cd9effed1f3e7efb93a646ba92fd5c2ad727f99',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/RegExpFilter.example.js',
    statementMap: {
      '0': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 12
        }
      },
      '1': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 32,
          column: 6
        }
      },
      '2': {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 42,
          column: 6
        }
      },
      '3': {
        start: {
          line: 46,
          column: 22
        },
        end: {
          line: 46,
          column: 68
        }
      },
      '4': {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 40
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 16
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 26
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 23
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 35
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 45,
            column: 18
          },
          end: {
            line: 45,
            column: 19
          }
        },
        loc: {
          start: {
            line: 45,
            column: 56
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 45
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
      '1': 0,
      '2': 0
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

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _RegExpFilter;

function _load_RegExpFilter() {
  return _RegExpFilter = _interopRequireDefault(require('./RegExpFilter'));
}

var _RegExpFilter2;

function _load_RegExpFilter2() {
  return _RegExpFilter2 = require('./RegExpFilter');
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

class Example extends _react.Component {
  constructor() {
    cov_ccruvyife.f[0]++;
    cov_ccruvyife.s[0]++;

    super();

    this._handleChange = change => {
      cov_ccruvyife.f[2]++;

      const { invalid } = (cov_ccruvyife.s[3]++, (0, (_RegExpFilter2 || _load_RegExpFilter2()).getFilterPattern)(change.text, change.isRegExp));
      cov_ccruvyife.s[4]++;
      this.setState(Object.assign({}, change, { invalid }));
    };

    cov_ccruvyife.s[1]++;
    this.state = {
      text: '',
      isRegExp: false,
      invalid: false
    };
  }

  render() {
    cov_ccruvyife.f[1]++;
    cov_ccruvyife.s[2]++;

    return _react.createElement(
      'div',
      null,
      _react.createElement(
        (_Block || _load_Block()).Block,
        null,
        _react.createElement((_RegExpFilter || _load_RegExpFilter()).default, { value: this.state, onChange: this._handleChange })
      )
    );
  }

}

exports.default = {
  sectionName: 'RegExp Filter',
  description: 'An input for filtering that allows the use of regular expressions.',
  examples: [{
    title: 'RegExpFilter',
    component: Example
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlZ0V4cEZpbHRlci5leGFtcGxlLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9oYW5kbGVDaGFuZ2UiLCJjaGFuZ2UiLCJpbnZhbGlkIiwidGV4dCIsImlzUmVnRXhwIiwic2V0U3RhdGUiLCJzdGF0ZSIsInJlbmRlciIsInNlY3Rpb25OYW1lIiwiZGVzY3JpcHRpb24iLCJleGFtcGxlcyIsInRpdGxlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBaEJBOzs7Ozs7Ozs7Ozs7QUF3QkEsTUFBTUEsT0FBTixTQUFzQixPQUFNQyxTQUE1QixDQUFpRDtBQUMvQ0MsZ0JBQWM7QUFBQTtBQUFBOztBQUNaOztBQURZLFNBbUJkQyxhQW5CYyxHQW1CR0MsTUFBRCxJQUFzQztBQUFBOztBQUNwRCxZQUFNLEVBQUNDLE9BQUQsNEJBQVksZ0VBQWlCRCxPQUFPRSxJQUF4QixFQUE4QkYsT0FBT0csUUFBckMsQ0FBWixDQUFOO0FBRG9EO0FBRXBELFdBQUtDLFFBQUwsbUJBQWtCSixNQUFsQixJQUEwQkMsT0FBMUI7QUFDRCxLQXRCYTs7QUFBQTtBQUVaLFNBQUtJLEtBQUwsR0FBYTtBQUNYSCxZQUFNLEVBREs7QUFFWEMsZ0JBQVUsS0FGQztBQUdYRixlQUFTO0FBSEUsS0FBYjtBQUtEOztBQUVESyxXQUFxQjtBQUFBO0FBQUE7O0FBQ25CLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0ZBQWMsT0FBTyxLQUFLRCxLQUExQixFQUFpQyxVQUFVLEtBQUtOLGFBQWhEO0FBREY7QUFERixLQURGO0FBT0Q7O0FBbEI4Qzs7a0JBMEJsQztBQUNiUSxlQUFhLGVBREE7QUFFYkMsZUFDRSxvRUFIVztBQUliQyxZQUFVLENBQ1I7QUFDRUMsV0FBTyxjQURUO0FBRUVDLGVBQVdmO0FBRmIsR0FEUTtBQUpHLEMiLCJmaWxlIjoiUmVnRXhwRmlsdGVyLmV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7UmVnRXhwRmlsdGVyQ2hhbmdlfSBmcm9tICcuL1JlZ0V4cEZpbHRlcic7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4vQmxvY2snO1xuaW1wb3J0IFJlZ0V4cEZpbHRlciwge2dldEZpbHRlclBhdHRlcm59IGZyb20gJy4vUmVnRXhwRmlsdGVyJztcblxudHlwZSBTdGF0ZSA9IHtcbiAgdGV4dDogc3RyaW5nLFxuICBpc1JlZ0V4cDogYm9vbGVhbixcbiAgaW52YWxpZDogYm9vbGVhbixcbn07XG5cbmNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgaXNSZWdFeHA6IGZhbHNlLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdC5Ob2RlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxSZWdFeHBGaWx0ZXIgdmFsdWU9e3RoaXMuc3RhdGV9IG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX2hhbmRsZUNoYW5nZSA9IChjaGFuZ2U6IFJlZ0V4cEZpbHRlckNoYW5nZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHtpbnZhbGlkfSA9IGdldEZpbHRlclBhdHRlcm4oY2hhbmdlLnRleHQsIGNoYW5nZS5pc1JlZ0V4cCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Li4uY2hhbmdlLCBpbnZhbGlkfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2VjdGlvbk5hbWU6ICdSZWdFeHAgRmlsdGVyJyxcbiAgZGVzY3JpcHRpb246XG4gICAgJ0FuIGlucHV0IGZvciBmaWx0ZXJpbmcgdGhhdCBhbGxvd3MgdGhlIHVzZSBvZiByZWd1bGFyIGV4cHJlc3Npb25zLicsXG4gIGV4YW1wbGVzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWdFeHBGaWx0ZXInLFxuICAgICAgY29tcG9uZW50OiBFeGFtcGxlLFxuICAgIH0sXG4gIF0sXG59O1xuIl19