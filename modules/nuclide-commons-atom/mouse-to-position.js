'use strict';

var cov_28holdinqk = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/mouse-to-position.js',
      hash = 'e6796fb24827ca92cab3bb17b1c5265a1ac6abfa',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/mouse-to-position.js',
    statementMap: {
      '0': {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 19,
          column: 64
        }
      },
      '1': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 29
        }
      },
      '2': {
        start: {
          line: 21,
          column: 15
        },
        end: {
          line: 21,
          column: 42
        }
      },
      '3': {
        start: {
          line: 22,
          column: 20
        },
        end: {
          line: 22,
          column: 34
        }
      },
      '4': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 31
        }
      },
      '5': {
        start: {
          line: 25,
          column: 25
        },
        end: {
          line: 25,
          column: 69
        }
      },
      '6': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 65
        }
      }
    },
    fnMap: {
      '0': {
        name: 'bufferPositionForMouseEvent',
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 43
          }
        },
        loc: {
          start: {
            line: 18,
            column: 14
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 33
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 17,
            column: 29
          },
          end: {
            line: 17,
            column: 33
          }
        }],
        line: 17
      },
      '1': {
        loc: {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 19,
            column: 64
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 19,
            column: 24
          }
        }, {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 64
          }
        }],
        line: 19
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
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
exports.bufferPositionForMouseEvent = bufferPositionForMouseEvent;
function bufferPositionForMouseEvent(event, editor = (cov_28holdinqk.b[0][0]++, null)) {
  cov_28holdinqk.f[0]++;

  const _editor = (cov_28holdinqk.s[0]++, (cov_28holdinqk.b[1][0]++, editor) || (cov_28holdinqk.b[1][1]++, atom.workspace.getActiveTextEditor()));
  cov_28holdinqk.s[1]++;

  if (!(_editor != null)) {
    throw new Error('Invariant violation: "_editor != null"');
  }

  const view = (cov_28holdinqk.s[2]++, atom.views.getView(_editor));
  const component = (cov_28holdinqk.s[3]++, view.component);
  cov_28holdinqk.s[4]++;

  if (!(component != null)) {
    throw new Error('Invariant violation: "component != null"');
  }
  // Beware, screenPositionForMouseEvent is not a public api and may change in future versions.


  const screenPosition = (cov_28holdinqk.s[5]++, component.screenPositionForMouseEvent(event));
  cov_28holdinqk.s[6]++;
  return _editor.bufferPositionForScreenPosition(screenPosition);
} /**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdXNlLXRvLXBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbImJ1ZmZlclBvc2l0aW9uRm9yTW91c2VFdmVudCIsImV2ZW50IiwiZWRpdG9yIiwiX2VkaXRvciIsImF0b20iLCJ3b3Jrc3BhY2UiLCJnZXRBY3RpdmVUZXh0RWRpdG9yIiwidmlldyIsInZpZXdzIiwiZ2V0VmlldyIsImNvbXBvbmVudCIsInNjcmVlblBvc2l0aW9uIiwic2NyZWVuUG9zaXRpb25Gb3JNb3VzZUV2ZW50IiwiYnVmZmVyUG9zaXRpb25Gb3JTY3JlZW5Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFjZ0JBLDJCLEdBQUFBLDJCO0FBQVQsU0FBU0EsMkJBQVQsQ0FDTEMsS0FESyxFQUVMQyxvQ0FBMkIsSUFBM0IsQ0FGSyxFQUdPO0FBQUE7O0FBQ1osUUFBTUMsa0NBQVUsaUVBQVVDLEtBQUtDLFNBQUwsQ0FBZUMsbUJBQWYsRUFBVixDQUFWLENBQU47QUFEWTs7QUFBQSxRQUVGSCxXQUFXLElBRlQ7QUFBQTtBQUFBOztBQUdaLFFBQU1JLCtCQUFPSCxLQUFLSSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJOLE9BQW5CLENBQVAsQ0FBTjtBQUNBLFFBQU1PLG9DQUFZSCxLQUFLRyxTQUFqQixDQUFOO0FBSlk7O0FBQUEsUUFLRkEsYUFBYSxJQUxYO0FBQUE7QUFBQTtBQU1aOzs7QUFDQSxRQUFNQyx5Q0FBaUJELFVBQVVFLDJCQUFWLENBQXNDWCxLQUF0QyxDQUFqQixDQUFOO0FBUFk7QUFRWixTQUFPRSxRQUFRVSwrQkFBUixDQUF3Q0YsY0FBeEMsQ0FBUDtBQUNELEMsQ0ExQkQiLCJmaWxlIjoibW91c2UtdG8tcG9zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2Fzc2VydCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXJQb3NpdGlvbkZvck1vdXNlRXZlbnQoXG4gIGV2ZW50OiBNb3VzZUV2ZW50LFxuICBlZGl0b3I6ID9hdG9tJFRleHRFZGl0b3IgPSBudWxsLFxuKTogYXRvbSRQb2ludCB7XG4gIGNvbnN0IF9lZGl0b3IgPSBlZGl0b3IgfHwgYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpO1xuICBpbnZhcmlhbnQoX2VkaXRvciAhPSBudWxsKTtcbiAgY29uc3QgdmlldyA9IGF0b20udmlld3MuZ2V0VmlldyhfZWRpdG9yKTtcbiAgY29uc3QgY29tcG9uZW50ID0gdmlldy5jb21wb25lbnQ7XG4gIGludmFyaWFudChjb21wb25lbnQgIT0gbnVsbCk7XG4gIC8vIEJld2FyZSwgc2NyZWVuUG9zaXRpb25Gb3JNb3VzZUV2ZW50IGlzIG5vdCBhIHB1YmxpYyBhcGkgYW5kIG1heSBjaGFuZ2UgaW4gZnV0dXJlIHZlcnNpb25zLlxuICBjb25zdCBzY3JlZW5Qb3NpdGlvbiA9IGNvbXBvbmVudC5zY3JlZW5Qb3NpdGlvbkZvck1vdXNlRXZlbnQoZXZlbnQpO1xuICByZXR1cm4gX2VkaXRvci5idWZmZXJQb3NpdGlvbkZvclNjcmVlblBvc2l0aW9uKHNjcmVlblBvc2l0aW9uKTtcbn1cbiJdfQ==