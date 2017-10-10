'use strict';

var cov_l1cp7c6a2 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/Model-spec.js',
      hash = '43dee2f842ae90d1e6af8f2c13fb8ff69c287a66',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/Model-spec.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 43,
          column: 3
        }
      },
      '1': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 20,
          column: 5
        }
      },
      '2': {
        start: {
          line: 17,
          column: 18
        },
        end: {
          line: 17,
          column: 52
        }
      },
      '3': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 31
        }
      },
      '4': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 38
        }
      },
      '5': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 26,
          column: 5
        }
      },
      '6': {
        start: {
          line: 23,
          column: 18
        },
        end: {
          line: 23,
          column: 52
        }
      },
      '7': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 31
        }
      },
      '8': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 41
        }
      },
      '9': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 42,
          column: 5
        }
      },
      '10': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 41,
          column: 7
        }
      },
      '11': {
        start: {
          line: 30,
          column: 20
        },
        end: {
          line: 30,
          column: 54
        }
      },
      '12': {
        start: {
          line: 31,
          column: 21
        },
        end: {
          line: 35,
          column: 20
        }
      },
      '13': {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 33
        }
      },
      '14': {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 40,
          column: 9
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 15,
            column: 18
          },
          end: {
            line: 15,
            column: 19
          }
        },
        loc: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 15
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 16,
            column: 48
          },
          end: {
            line: 16,
            column: 49
          }
        },
        loc: {
          start: {
            line: 16,
            column: 54
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 16
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 22,
            column: 65
          },
          end: {
            line: 22,
            column: 66
          }
        },
        loc: {
          start: {
            line: 22,
            column: 71
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 22
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 28,
            column: 42
          },
          end: {
            line: 28,
            column: 43
          }
        },
        loc: {
          start: {
            line: 28,
            column: 48
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 28
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 29,
            column: 21
          }
        },
        loc: {
          start: {
            line: 29,
            column: 32
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 29
      }
    },
    branchMap: {},
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
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _Model;

function _load_Model() {
  return _Model = _interopRequireDefault(require('../Model'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_l1cp7c6a2.s[0]++; /**
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

describe('Model', () => {
  cov_l1cp7c6a2.f[0]++;
  cov_l1cp7c6a2.s[1]++;

  it('setStates state when setState is called', () => {
    cov_l1cp7c6a2.f[1]++;

    const model = (cov_l1cp7c6a2.s[2]++, new (_Model || _load_Model()).default({ count: 0, other: true }));
    cov_l1cp7c6a2.s[3]++;
    model.setState({ count: 5 });
    cov_l1cp7c6a2.s[4]++;
    expect(model.state.count).toBe(5);
  });

  cov_l1cp7c6a2.s[5]++;
  it('only changes the provided values when setState is called', () => {
    cov_l1cp7c6a2.f[2]++;

    const model = (cov_l1cp7c6a2.s[6]++, new (_Model || _load_Model()).default({ count: 0, other: true }));
    cov_l1cp7c6a2.s[7]++;
    model.setState({ count: 5 });
    cov_l1cp7c6a2.s[8]++;
    expect(model.state.other).toBe(true);
  });

  cov_l1cp7c6a2.s[9]++;
  it('can be converted to an observable', () => {
    cov_l1cp7c6a2.f[3]++;
    cov_l1cp7c6a2.s[10]++;

    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      cov_l1cp7c6a2.f[4]++;

      const model = (cov_l1cp7c6a2.s[11]++, new (_Model || _load_Model()).default({ count: 0, other: true }));
      const states = (cov_l1cp7c6a2.s[12]++, model.toObservable().take(2).toArray().toPromise());
      cov_l1cp7c6a2.s[13]++;
      model.setState({ count: 5 });
      cov_l1cp7c6a2.s[14]++;
      expect((yield states)).toEqual([{ count: 0, other: true }, { count: 5, other: true }]);
    }));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGVsLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsIm1vZGVsIiwiY291bnQiLCJvdGhlciIsInNldFN0YXRlIiwiZXhwZWN0Iiwic3RhdGUiLCJ0b0JlIiwid2FpdHNGb3JQcm9taXNlIiwic3RhdGVzIiwidG9PYnNlcnZhYmxlIiwidGFrZSIsInRvQXJyYXkiLCJ0b1Byb21pc2UiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUFBOzs7O3NCQVpBOzs7Ozs7Ozs7Ozs7QUFjQUEsU0FBUyxPQUFULEVBQWtCLE1BQU07QUFBQTtBQUFBOztBQUN0QkMsS0FBRyx5Q0FBSCxFQUE4QyxNQUFNO0FBQUE7O0FBQ2xELFVBQU1DLCtCQUFRLHNDQUFVLEVBQUNDLE9BQU8sQ0FBUixFQUFXQyxPQUFPLElBQWxCLEVBQVYsQ0FBUixDQUFOO0FBRGtEO0FBRWxERixVQUFNRyxRQUFOLENBQWUsRUFBQ0YsT0FBTyxDQUFSLEVBQWY7QUFGa0Q7QUFHbERHLFdBQU9KLE1BQU1LLEtBQU4sQ0FBWUosS0FBbkIsRUFBMEJLLElBQTFCLENBQStCLENBQS9CO0FBQ0QsR0FKRDs7QUFEc0I7QUFPdEJQLEtBQUcsMERBQUgsRUFBK0QsTUFBTTtBQUFBOztBQUNuRSxVQUFNQywrQkFBUSxzQ0FBVSxFQUFDQyxPQUFPLENBQVIsRUFBV0MsT0FBTyxJQUFsQixFQUFWLENBQVIsQ0FBTjtBQURtRTtBQUVuRUYsVUFBTUcsUUFBTixDQUFlLEVBQUNGLE9BQU8sQ0FBUixFQUFmO0FBRm1FO0FBR25FRyxXQUFPSixNQUFNSyxLQUFOLENBQVlILEtBQW5CLEVBQTBCSSxJQUExQixDQUErQixJQUEvQjtBQUNELEdBSkQ7O0FBUHNCO0FBYXRCUCxLQUFHLG1DQUFILEVBQXdDLE1BQU07QUFBQTtBQUFBOztBQUM1Q1EsbURBQWdCLGFBQVk7QUFBQTs7QUFDMUIsWUFBTVAsZ0NBQVEsc0NBQVUsRUFBQ0MsT0FBTyxDQUFSLEVBQVdDLE9BQU8sSUFBbEIsRUFBVixDQUFSLENBQU47QUFDQSxZQUFNTSxpQ0FBU1IsTUFDWlMsWUFEWSxHQUVaQyxJQUZZLENBRVAsQ0FGTyxFQUdaQyxPQUhZLEdBSVpDLFNBSlksRUFBVCxDQUFOO0FBRjBCO0FBTzFCWixZQUFNRyxRQUFOLENBQWUsRUFBQ0YsT0FBTyxDQUFSLEVBQWY7QUFQMEI7QUFRMUJHLGNBQU8sTUFBTUksTUFBYixHQUFxQkssT0FBckIsQ0FBNkIsQ0FDM0IsRUFBQ1osT0FBTyxDQUFSLEVBQVdDLE9BQU8sSUFBbEIsRUFEMkIsRUFFM0IsRUFBQ0QsT0FBTyxDQUFSLEVBQVdDLE9BQU8sSUFBbEIsRUFGMkIsQ0FBN0I7QUFJRCxLQVpEO0FBYUQsR0FkRDtBQWVELENBNUJEIiwiZmlsZSI6Ik1vZGVsLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vTW9kZWwnO1xuXG5kZXNjcmliZSgnTW9kZWwnLCAoKSA9PiB7XG4gIGl0KCdzZXRTdGF0ZXMgc3RhdGUgd2hlbiBzZXRTdGF0ZSBpcyBjYWxsZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoe2NvdW50OiAwLCBvdGhlcjogdHJ1ZX0pO1xuICAgIG1vZGVsLnNldFN0YXRlKHtjb3VudDogNX0pO1xuICAgIGV4cGVjdChtb2RlbC5zdGF0ZS5jb3VudCkudG9CZSg1KTtcbiAgfSk7XG5cbiAgaXQoJ29ubHkgY2hhbmdlcyB0aGUgcHJvdmlkZWQgdmFsdWVzIHdoZW4gc2V0U3RhdGUgaXMgY2FsbGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKHtjb3VudDogMCwgb3RoZXI6IHRydWV9KTtcbiAgICBtb2RlbC5zZXRTdGF0ZSh7Y291bnQ6IDV9KTtcbiAgICBleHBlY3QobW9kZWwuc3RhdGUub3RoZXIpLnRvQmUodHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KCdjYW4gYmUgY29udmVydGVkIHRvIGFuIG9ic2VydmFibGUnLCAoKSA9PiB7XG4gICAgd2FpdHNGb3JQcm9taXNlKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKHtjb3VudDogMCwgb3RoZXI6IHRydWV9KTtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IG1vZGVsXG4gICAgICAgIC50b09ic2VydmFibGUoKVxuICAgICAgICAudGFrZSgyKVxuICAgICAgICAudG9BcnJheSgpXG4gICAgICAgIC50b1Byb21pc2UoKTtcbiAgICAgIG1vZGVsLnNldFN0YXRlKHtjb3VudDogNX0pO1xuICAgICAgZXhwZWN0KGF3YWl0IHN0YXRlcykudG9FcXVhbChbXG4gICAgICAgIHtjb3VudDogMCwgb3RoZXI6IHRydWV9LFxuICAgICAgICB7Y291bnQ6IDUsIG90aGVyOiB0cnVlfSxcbiAgICAgIF0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19