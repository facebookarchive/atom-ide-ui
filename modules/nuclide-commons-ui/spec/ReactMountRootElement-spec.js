'use strict';

var cov_21qngji6ey = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/spec/ReactMountRootElement-spec.js',
      hash = 'c46893927bd2505deb8e4083b207699cef4409cc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/spec/ReactMountRootElement-spec.js',
    statementMap: {
      '0': {
        start: {
          line: 13,
          column: 19
        },
        end: {
          line: 13,
          column: 62
        }
      },
      '1': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 25,
          column: 3
        }
      },
      '2': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 24,
          column: 5
        }
      },
      '3': {
        start: {
          line: 17,
          column: 21
        },
        end: {
          line: 17,
          column: 48
        }
      },
      '4': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 37
        }
      },
      '5': {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 19,
          column: 48
        }
      },
      '6': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 36
        }
      },
      '7': {
        start: {
          line: 22,
          column: 27
        },
        end: {
          line: 22,
          column: 41
        }
      },
      '8': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 77
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 15,
            column: 34
          },
          end: {
            line: 15,
            column: 35
          }
        },
        loc: {
          start: {
            line: 15,
            column: 40
          },
          end: {
            line: 25,
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
            column: 34
          },
          end: {
            line: 16,
            column: 35
          }
        },
        loc: {
          start: {
            line: 16,
            column: 40
          },
          end: {
            line: 24,
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
      '8': 0
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

const modulePath = (cov_21qngji6ey.s[0]++, require.resolve('../ReactMountRootElement'));

cov_21qngji6ey.s[1]++;
describe('ReactMountRootElement', () => {
  cov_21qngji6ey.f[0]++;
  cov_21qngji6ey.s[2]++;

  it('works when required twice', () => {
    cov_21qngji6ey.f[1]++;

    const element1 = (cov_21qngji6ey.s[3]++, require(modulePath).default);
    cov_21qngji6ey.s[4]++;
    delete require.cache[modulePath];
    const element2 = (cov_21qngji6ey.s[5]++, require(modulePath).default);
    cov_21qngji6ey.s[6]++;
    expect(element1).toBe(element2);
    // Make sure this doesn't throw.
    const createdElement = (cov_21qngji6ey.s[7]++, new element2());
    cov_21qngji6ey.s[8]++;
    expect(createdElement.constructor.name).toBe('nuclide-react-mount-root');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWN0TW91bnRSb290RWxlbWVudC1zcGVjLmpzIl0sIm5hbWVzIjpbIm1vZHVsZVBhdGgiLCJyZXF1aXJlIiwicmVzb2x2ZSIsImRlc2NyaWJlIiwiaXQiLCJlbGVtZW50MSIsImRlZmF1bHQiLCJjYWNoZSIsImVsZW1lbnQyIiwiZXhwZWN0IiwidG9CZSIsImNyZWF0ZWRFbGVtZW50IiwiY29uc3RydWN0b3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUEsTUFBTUEscUNBQWFDLFFBQVFDLE9BQVIsQ0FBZ0IsMEJBQWhCLENBQWIsQ0FBTjs7O0FBRUFDLFNBQVMsdUJBQVQsRUFBa0MsTUFBTTtBQUFBO0FBQUE7O0FBQ3RDQyxLQUFHLDJCQUFILEVBQWdDLE1BQU07QUFBQTs7QUFDcEMsVUFBTUMsbUNBQVdKLFFBQVFELFVBQVIsRUFBb0JNLE9BQS9CLENBQU47QUFEb0M7QUFFcEMsV0FBT0wsUUFBUU0sS0FBUixDQUFjUCxVQUFkLENBQVA7QUFDQSxVQUFNUSxtQ0FBV1AsUUFBUUQsVUFBUixFQUFvQk0sT0FBL0IsQ0FBTjtBQUhvQztBQUlwQ0csV0FBT0osUUFBUCxFQUFpQkssSUFBakIsQ0FBc0JGLFFBQXRCO0FBQ0E7QUFDQSxVQUFNRyx5Q0FBaUIsSUFBSUgsUUFBSixFQUFqQixDQUFOO0FBTm9DO0FBT3BDQyxXQUFPRSxlQUFlQyxXQUFmLENBQTJCQyxJQUFsQyxFQUF3Q0gsSUFBeEMsQ0FBNkMsMEJBQTdDO0FBQ0QsR0FSRDtBQVNELENBVkQiLCJmaWxlIjoiUmVhY3RNb3VudFJvb3RFbGVtZW50LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5jb25zdCBtb2R1bGVQYXRoID0gcmVxdWlyZS5yZXNvbHZlKCcuLi9SZWFjdE1vdW50Um9vdEVsZW1lbnQnKTtcblxuZGVzY3JpYmUoJ1JlYWN0TW91bnRSb290RWxlbWVudCcsICgpID0+IHtcbiAgaXQoJ3dvcmtzIHdoZW4gcmVxdWlyZWQgdHdpY2UnLCAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudDEgPSByZXF1aXJlKG1vZHVsZVBhdGgpLmRlZmF1bHQ7XG4gICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbbW9kdWxlUGF0aF07XG4gICAgY29uc3QgZWxlbWVudDIgPSByZXF1aXJlKG1vZHVsZVBhdGgpLmRlZmF1bHQ7XG4gICAgZXhwZWN0KGVsZW1lbnQxKS50b0JlKGVsZW1lbnQyKTtcbiAgICAvLyBNYWtlIHN1cmUgdGhpcyBkb2Vzbid0IHRocm93LlxuICAgIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gbmV3IGVsZW1lbnQyKCk7XG4gICAgZXhwZWN0KGNyZWF0ZWRFbGVtZW50LmNvbnN0cnVjdG9yLm5hbWUpLnRvQmUoJ251Y2xpZGUtcmVhY3QtbW91bnQtcm9vdCcpO1xuICB9KTtcbn0pO1xuIl19