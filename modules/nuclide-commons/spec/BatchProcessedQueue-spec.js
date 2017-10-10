'use strict';

var cov_bozmzzz7f = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/BatchProcessedQueue-spec.js',
      hash = 'b6ee1cd02c89724cfc63069b529387cfd6ac5ebf',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/BatchProcessedQueue-spec.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 36,
          column: 3
        }
      },
      '1': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 35,
          column: 5
        }
      },
      '2': {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 17,
          column: 48
        }
      },
      '3': {
        start: {
          line: 18,
          column: 18
        },
        end: {
          line: 18,
          column: 56
        }
      },
      '4': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 17
        }
      },
      '5': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 17
        }
      },
      '6': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 17
        }
      },
      '7': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 17
        }
      },
      '8': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 17
        }
      },
      '9': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 43
        }
      },
      '10': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 23
        }
      },
      '11': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 43
        }
      },
      '12': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 20
        }
      },
      '13': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 58
        }
      },
      '14': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 18
        }
      },
      '15': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 24
        }
      },
      '16': {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 47
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 15,
            column: 44
          },
          end: {
            line: 15,
            column: 45
          }
        },
        loc: {
          start: {
            line: 15,
            column: 50
          },
          end: {
            line: 36,
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
            column: 26
          },
          end: {
            line: 16,
            column: 27
          }
        },
        loc: {
          start: {
            line: 16,
            column: 32
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 16
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
      '14': 0,
      '15': 0,
      '16': 0
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

var _BatchProcessedQueue;

function _load_BatchProcessedQueue() {
  return _BatchProcessedQueue = _interopRequireDefault(require('../BatchProcessedQueue'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_bozmzzz7f.s[0]++; /**
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

describe('analytics - BatchProcessedQueue', () => {
  cov_bozmzzz7f.f[0]++;
  cov_bozmzzz7f.s[1]++;

  it('regular operation', () => {
    cov_bozmzzz7f.f[1]++;

    const handler = (cov_bozmzzz7f.s[2]++, jasmine.createSpy('handler'));
    const queue = (cov_bozmzzz7f.s[3]++, new (_BatchProcessedQueue || _load_BatchProcessedQueue()).default(5000, handler));

    cov_bozmzzz7f.s[4]++;
    queue.add(1);
    cov_bozmzzz7f.s[5]++;
    queue.add(2);
    cov_bozmzzz7f.s[6]++;
    queue.add(3);
    cov_bozmzzz7f.s[7]++;
    queue.add(4);
    cov_bozmzzz7f.s[8]++;
    queue.add(5);
    cov_bozmzzz7f.s[9]++;
    expect(handler).not.toHaveBeenCalled();

    cov_bozmzzz7f.s[10]++;
    advanceClock(4999);
    cov_bozmzzz7f.s[11]++;
    expect(handler).not.toHaveBeenCalled();
    cov_bozmzzz7f.s[12]++;
    advanceClock(1);
    cov_bozmzzz7f.s[13]++;
    expect(handler).toHaveBeenCalledWith([1, 2, 3, 4, 5]);

    cov_bozmzzz7f.s[14]++;
    queue.add(42);
    cov_bozmzzz7f.s[15]++;
    advanceClock(10000);
    cov_bozmzzz7f.s[16]++;
    expect(handler).toHaveBeenCalledWith([42]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhdGNoUHJvY2Vzc2VkUXVldWUtc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiaGFuZGxlciIsImphc21pbmUiLCJjcmVhdGVTcHkiLCJxdWV1ZSIsImFkZCIsImV4cGVjdCIsIm5vdCIsInRvSGF2ZUJlZW5DYWxsZWQiLCJhZHZhbmNlQ2xvY2siLCJ0b0hhdmVCZWVuQ2FsbGVkV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUFBOzs7O3NCQVpBOzs7Ozs7Ozs7Ozs7QUFjQUEsU0FBUyxpQ0FBVCxFQUE0QyxNQUFNO0FBQUE7QUFBQTs7QUFDaERDLEtBQUcsbUJBQUgsRUFBd0IsTUFBTTtBQUFBOztBQUM1QixVQUFNQyxpQ0FBVUMsUUFBUUMsU0FBUixDQUFrQixTQUFsQixDQUFWLENBQU47QUFDQSxVQUFNQywrQkFBUSxrRUFBd0IsSUFBeEIsRUFBOEJILE9BQTlCLENBQVIsQ0FBTjs7QUFGNEI7QUFJNUJHLFVBQU1DLEdBQU4sQ0FBVSxDQUFWO0FBSjRCO0FBSzVCRCxVQUFNQyxHQUFOLENBQVUsQ0FBVjtBQUw0QjtBQU01QkQsVUFBTUMsR0FBTixDQUFVLENBQVY7QUFONEI7QUFPNUJELFVBQU1DLEdBQU4sQ0FBVSxDQUFWO0FBUDRCO0FBUTVCRCxVQUFNQyxHQUFOLENBQVUsQ0FBVjtBQVI0QjtBQVM1QkMsV0FBT0wsT0FBUCxFQUFnQk0sR0FBaEIsQ0FBb0JDLGdCQUFwQjs7QUFUNEI7QUFXNUJDLGlCQUFhLElBQWI7QUFYNEI7QUFZNUJILFdBQU9MLE9BQVAsRUFBZ0JNLEdBQWhCLENBQW9CQyxnQkFBcEI7QUFaNEI7QUFhNUJDLGlCQUFhLENBQWI7QUFiNEI7QUFjNUJILFdBQU9MLE9BQVAsRUFBZ0JTLG9CQUFoQixDQUFxQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQXJDOztBQWQ0QjtBQWdCNUJOLFVBQU1DLEdBQU4sQ0FBVSxFQUFWO0FBaEI0QjtBQWlCNUJJLGlCQUFhLEtBQWI7QUFqQjRCO0FBa0I1QkgsV0FBT0wsT0FBUCxFQUFnQlMsb0JBQWhCLENBQXFDLENBQUMsRUFBRCxDQUFyQztBQUNELEdBbkJEO0FBb0JELENBckJEIiwiZmlsZSI6IkJhdGNoUHJvY2Vzc2VkUXVldWUtc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCBCYXRjaFByb2Nlc3NlZFF1ZXVlIGZyb20gJy4uL0JhdGNoUHJvY2Vzc2VkUXVldWUnO1xuXG5kZXNjcmliZSgnYW5hbHl0aWNzIC0gQmF0Y2hQcm9jZXNzZWRRdWV1ZScsICgpID0+IHtcbiAgaXQoJ3JlZ3VsYXIgb3BlcmF0aW9uJywgKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBqYXNtaW5lLmNyZWF0ZVNweSgnaGFuZGxlcicpO1xuICAgIGNvbnN0IHF1ZXVlID0gbmV3IEJhdGNoUHJvY2Vzc2VkUXVldWUoNTAwMCwgaGFuZGxlcik7XG5cbiAgICBxdWV1ZS5hZGQoMSk7XG4gICAgcXVldWUuYWRkKDIpO1xuICAgIHF1ZXVlLmFkZCgzKTtcbiAgICBxdWV1ZS5hZGQoNCk7XG4gICAgcXVldWUuYWRkKDUpO1xuICAgIGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuXG4gICAgYWR2YW5jZUNsb2NrKDQ5OTkpO1xuICAgIGV4cGVjdChoYW5kbGVyKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIGFkdmFuY2VDbG9jaygxKTtcbiAgICBleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZFdpdGgoWzEsIDIsIDMsIDQsIDVdKTtcblxuICAgIHF1ZXVlLmFkZCg0Mik7XG4gICAgYWR2YW5jZUNsb2NrKDEwMDAwKTtcbiAgICBleHBlY3QoaGFuZGxlcikudG9IYXZlQmVlbkNhbGxlZFdpdGgoWzQyXSk7XG4gIH0pO1xufSk7XG4iXX0=