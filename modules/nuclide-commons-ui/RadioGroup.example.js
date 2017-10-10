'use strict';

var cov_2eggxu1qwa = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/RadioGroup.example.js',
      hash = '1265af3ee850478c7fe3eda5577d256c4036bca5',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/RadioGroup.example.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 65
        }
      },
      '1': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 17
        }
      },
      '2': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 24,
          column: 6
        }
      },
      '3': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 7
        }
      },
      '4': {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 43,
          column: 6
        }
      },
      '5': {
        start: {
          line: 47,
          column: 34
        },
        end: {
          line: 56,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 26
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 20
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 27,
            column: 22
          }
        },
        loc: {
          start: {
            line: 27,
            column: 54
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 27
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 23
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 33
      }
    },
    branchMap: {},
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
exports.RadioGroupExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _RadioGroup;

function _load_RadioGroup() {
  return _RadioGroup = _interopRequireDefault(require('./RadioGroup'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const labels = (cov_2eggxu1qwa.s[0]++, ['choose', 'from', 'one of', 'several', 'options']); /**
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

class RadioGroupExample extends _react.Component {
  constructor(props) {
    cov_2eggxu1qwa.f[0]++;
    cov_2eggxu1qwa.s[1]++;

    super(props);

    this.onSelectedChange = selectedIndex => {
      cov_2eggxu1qwa.f[1]++;
      cov_2eggxu1qwa.s[3]++;

      this.setState({
        selectedIndex
      });
    };

    cov_2eggxu1qwa.s[2]++;
    this.state = {
      selectedIndex: 0
    };
  }

  render() {
    cov_2eggxu1qwa.f[2]++;
    cov_2eggxu1qwa.s[4]++;

    return _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement((_RadioGroup || _load_RadioGroup()).default, {
        selectedIndex: this.state.selectedIndex,
        optionLabels: labels,
        onSelectedChange: this.onSelectedChange
      })
    );
  }
}

const RadioGroupExamples = exports.RadioGroupExamples = (cov_2eggxu1qwa.s[5]++, {
  sectionName: 'RadioGroup',
  description: '',
  examples: [{
    title: '',
    component: RadioGroupExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvR3JvdXAuZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJsYWJlbHMiLCJSYWRpb0dyb3VwRXhhbXBsZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJvblNlbGVjdGVkQ2hhbmdlIiwic2VsZWN0ZWRJbmRleCIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXIiLCJSYWRpb0dyb3VwRXhhbXBsZXMiLCJzZWN0aW9uTmFtZSIsImRlc2NyaXB0aW9uIiwiZXhhbXBsZXMiLCJ0aXRsZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7OztBQUVBLE1BQU1BLGlDQUFTLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsUUFBbkIsRUFBNkIsU0FBN0IsRUFBd0MsU0FBeEMsQ0FBVCxDQUFOLEMsQ0FoQkE7Ozs7Ozs7Ozs7OztBQWtCQSxNQUFNQyxpQkFBTixTQUFnQyxPQUFNQyxTQUF0QyxDQUE4RTtBQUM1RUMsY0FBWUMsS0FBWixFQUF3QjtBQUFBO0FBQUE7O0FBQ3RCLFVBQU1BLEtBQU47O0FBRHNCLFNBT3hCQyxnQkFQd0IsR0FPSkMsYUFBRCxJQUFpQztBQUFBO0FBQUE7O0FBQ2xELFdBQUtDLFFBQUwsQ0FBYztBQUNaRDtBQURZLE9BQWQ7QUFHRCxLQVh1Qjs7QUFBQTtBQUV0QixTQUFLRSxLQUFMLEdBQWE7QUFDWEYscUJBQWU7QUFESixLQUFiO0FBR0Q7O0FBUURHLFdBQXFCO0FBQUE7QUFBQTs7QUFDbkIsV0FDRTtBQUFBO0FBQUE7QUFFRTtBQUNFLHVCQUFlLEtBQUtELEtBQUwsQ0FBV0YsYUFENUI7QUFFRSxzQkFBY04sTUFGaEI7QUFHRSwwQkFBa0IsS0FBS0s7QUFIekI7QUFGRixLQURGO0FBVUQ7QUF6QjJFOztBQTRCdkUsTUFBTUssMEVBQXFCO0FBQ2hDQyxlQUFhLFlBRG1CO0FBRWhDQyxlQUFhLEVBRm1CO0FBR2hDQyxZQUFVLENBQ1I7QUFDRUMsV0FBTyxFQURUO0FBRUVDLGVBQVdkO0FBRmIsR0FEUTtBQUhzQixDQUFyQixDQUFOIiwiZmlsZSI6IlJhZGlvR3JvdXAuZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4vQmxvY2snO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnLi9SYWRpb0dyb3VwJztcblxuY29uc3QgbGFiZWxzID0gWydjaG9vc2UnLCAnZnJvbScsICdvbmUgb2YnLCAnc2V2ZXJhbCcsICdvcHRpb25zJ107XG5cbmNsYXNzIFJhZGlvR3JvdXBFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwge3NlbGVjdGVkSW5kZXg6IG51bWJlcn0+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICB9O1xuICB9XG5cbiAgb25TZWxlY3RlZENoYW5nZSA9IChzZWxlY3RlZEluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkSW5kZXgsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0Lk5vZGUge1xuICAgIHJldHVybiAoXG4gICAgICA8QmxvY2s+XG4gICAgICAgIHsvKiAkRmxvd0ZpeE1lKD49MC41My4wKSBGbG93IHN1cHByZXNzICovfVxuICAgICAgICA8UmFkaW9Hcm91cFxuICAgICAgICAgIHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleH1cbiAgICAgICAgICBvcHRpb25MYWJlbHM9e2xhYmVsc31cbiAgICAgICAgICBvblNlbGVjdGVkQ2hhbmdlPXt0aGlzLm9uU2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0Jsb2NrPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJhZGlvR3JvdXBFeGFtcGxlcyA9IHtcbiAgc2VjdGlvbk5hbWU6ICdSYWRpb0dyb3VwJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBleGFtcGxlczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbXBvbmVudDogUmFkaW9Hcm91cEV4YW1wbGUsXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=