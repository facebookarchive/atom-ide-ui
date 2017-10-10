'use strict';

var cov_8iit1n4k5 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/range-spec.js',
      hash = '5e5506461248ea3f1bbba2f2d68d28a04ad932c6',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/range-spec.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 33,
          column: 3
        }
      },
      '1': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 26,
          column: 5
        }
      },
      '2': {
        start: {
          line: 19,
          column: 19
        },
        end: {
          line: 19,
          column: 56
        }
      },
      '3': {
        start: {
          line: 20,
          column: 18
        },
        end: {
          line: 20,
          column: 79
        }
      },
      '4': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 33
        }
      },
      '5': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 29
        }
      },
      '6': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 43
        }
      },
      '7': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 45
        }
      },
      '8': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 60
        }
      },
      '9': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 32,
          column: 5
        }
      },
      '10': {
        start: {
          line: 29,
          column: 19
        },
        end: {
          line: 29,
          column: 56
        }
      },
      '11': {
        start: {
          line: 30,
          column: 18
        },
        end: {
          line: 30,
          column: 79
        }
      },
      '12': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 29
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 17,
            column: 37
          },
          end: {
            line: 17,
            column: 38
          }
        },
        loc: {
          start: {
            line: 17,
            column: 43
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 17
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 18,
            column: 35
          },
          end: {
            line: 18,
            column: 36
          }
        },
        loc: {
          start: {
            line: 18,
            column: 41
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 18
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 28,
            column: 37
          },
          end: {
            line: 28,
            column: 38
          }
        },
        loc: {
          start: {
            line: 28,
            column: 43
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 28
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
      '12': 0
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

var _simpleTextBuffer;

function _load_simpleTextBuffer() {
  return _simpleTextBuffer = _interopRequireDefault(require('simple-text-buffer'));
}

var _simpleTextBuffer2;

function _load_simpleTextBuffer2() {
  return _simpleTextBuffer2 = require('simple-text-buffer');
}

var _range;

function _load_range() {
  return _range = require('../range');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_8iit1n4k5.s[0]++; /**
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

describe('wordAtPositionFromBuffer', () => {
  cov_8iit1n4k5.f[0]++;
  cov_8iit1n4k5.s[1]++;

  it('matches a word in a buffer', () => {
    cov_8iit1n4k5.f[1]++;

    const buffer = (cov_8iit1n4k5.s[2]++, new (_simpleTextBuffer || _load_simpleTextBuffer()).default('word1 word2 word3\n'));
    const match = (cov_8iit1n4k5.s[3]++, (0, (_range || _load_range()).wordAtPositionFromBuffer)(buffer, { row: 0, column: 6 }, /\S+/g));
    cov_8iit1n4k5.s[4]++;
    expect(match).not.toBeNull();
    cov_8iit1n4k5.s[5]++;

    if (!(match != null)) {
      throw new Error('Invariant violation: "match != null"');
    }

    cov_8iit1n4k5.s[6]++;

    expect(match.wordMatch.length).toBe(1);
    cov_8iit1n4k5.s[7]++;
    expect(match.wordMatch[0]).toBe('word2');
    cov_8iit1n4k5.s[8]++;
    expect(match.range).toEqual(new (_simpleTextBuffer2 || _load_simpleTextBuffer2()).Range([0, 6], [0, 11]));
  });

  cov_8iit1n4k5.s[9]++;
  it('should not include endpoints', () => {
    cov_8iit1n4k5.f[2]++;

    const buffer = (cov_8iit1n4k5.s[10]++, new (_simpleTextBuffer || _load_simpleTextBuffer()).default('word1 word2 word3\n'));
    const match = (cov_8iit1n4k5.s[11]++, (0, (_range || _load_range()).wordAtPositionFromBuffer)(buffer, { row: 0, column: 5 }, /\S+/g));
    cov_8iit1n4k5.s[12]++;
    expect(match).toBeNull();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmdlLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImJ1ZmZlciIsIm1hdGNoIiwicm93IiwiY29sdW1uIiwiZXhwZWN0Iiwibm90IiwidG9CZU51bGwiLCJ3b3JkTWF0Y2giLCJsZW5ndGgiLCJ0b0JlIiwicmFuZ2UiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBO0FBQUE7QUFBQTs7OztBQUFBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztzQkFkQTs7Ozs7Ozs7Ozs7O0FBZ0JBQSxTQUFTLDBCQUFULEVBQXFDLE1BQU07QUFBQTtBQUFBOztBQUN6Q0MsS0FBRyw0QkFBSCxFQUFpQyxNQUFNO0FBQUE7O0FBQ3JDLFVBQU1DLGdDQUFTLDREQUFlLHFCQUFmLENBQVQsQ0FBTjtBQUNBLFVBQU1DLCtCQUFRLHdEQUF5QkQsTUFBekIsRUFBaUMsRUFBQ0UsS0FBSyxDQUFOLEVBQVNDLFFBQVEsQ0FBakIsRUFBakMsRUFBc0QsTUFBdEQsQ0FBUixDQUFOO0FBRnFDO0FBR3JDQyxXQUFPSCxLQUFQLEVBQWNJLEdBQWQsQ0FBa0JDLFFBQWxCO0FBSHFDOztBQUFBLFVBSTNCTCxTQUFTLElBSmtCO0FBQUE7QUFBQTs7QUFBQTs7QUFLckNHLFdBQU9ILE1BQU1NLFNBQU4sQ0FBZ0JDLE1BQXZCLEVBQStCQyxJQUEvQixDQUFvQyxDQUFwQztBQUxxQztBQU1yQ0wsV0FBT0gsTUFBTU0sU0FBTixDQUFnQixDQUFoQixDQUFQLEVBQTJCRSxJQUEzQixDQUFnQyxPQUFoQztBQU5xQztBQU9yQ0wsV0FBT0gsTUFBTVMsS0FBYixFQUFvQkMsT0FBcEIsQ0FBNEIsNERBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFWLEVBQWtCLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBbEIsQ0FBNUI7QUFDRCxHQVJEOztBQUR5QztBQVd6Q1osS0FBRyw4QkFBSCxFQUFtQyxNQUFNO0FBQUE7O0FBQ3ZDLFVBQU1DLGlDQUFTLDREQUFlLHFCQUFmLENBQVQsQ0FBTjtBQUNBLFVBQU1DLGdDQUFRLHdEQUF5QkQsTUFBekIsRUFBaUMsRUFBQ0UsS0FBSyxDQUFOLEVBQVNDLFFBQVEsQ0FBakIsRUFBakMsRUFBc0QsTUFBdEQsQ0FBUixDQUFOO0FBRnVDO0FBR3ZDQyxXQUFPSCxLQUFQLEVBQWNLLFFBQWQ7QUFDRCxHQUpEO0FBS0QsQ0FoQkQiLCJmaWxlIjoicmFuZ2Utc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCB7ZGVmYXVsdCBhcyBUZXh0QnVmZmVyLCBSYW5nZX0gZnJvbSAnc2ltcGxlLXRleHQtYnVmZmVyJztcbmltcG9ydCB7d29yZEF0UG9zaXRpb25Gcm9tQnVmZmVyfSBmcm9tICcuLi9yYW5nZSc7XG5cbmRlc2NyaWJlKCd3b3JkQXRQb3NpdGlvbkZyb21CdWZmZXInLCAoKSA9PiB7XG4gIGl0KCdtYXRjaGVzIGEgd29yZCBpbiBhIGJ1ZmZlcicsICgpID0+IHtcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgVGV4dEJ1ZmZlcignd29yZDEgd29yZDIgd29yZDNcXG4nKTtcbiAgICBjb25zdCBtYXRjaCA9IHdvcmRBdFBvc2l0aW9uRnJvbUJ1ZmZlcihidWZmZXIsIHtyb3c6IDAsIGNvbHVtbjogNn0sIC9cXFMrL2cpO1xuICAgIGV4cGVjdChtYXRjaCkubm90LnRvQmVOdWxsKCk7XG4gICAgaW52YXJpYW50KG1hdGNoICE9IG51bGwpO1xuICAgIGV4cGVjdChtYXRjaC53b3JkTWF0Y2gubGVuZ3RoKS50b0JlKDEpO1xuICAgIGV4cGVjdChtYXRjaC53b3JkTWF0Y2hbMF0pLnRvQmUoJ3dvcmQyJyk7XG4gICAgZXhwZWN0KG1hdGNoLnJhbmdlKS50b0VxdWFsKG5ldyBSYW5nZShbMCwgNl0sIFswLCAxMV0pKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgaW5jbHVkZSBlbmRwb2ludHMnLCAoKSA9PiB7XG4gICAgY29uc3QgYnVmZmVyID0gbmV3IFRleHRCdWZmZXIoJ3dvcmQxIHdvcmQyIHdvcmQzXFxuJyk7XG4gICAgY29uc3QgbWF0Y2ggPSB3b3JkQXRQb3NpdGlvbkZyb21CdWZmZXIoYnVmZmVyLCB7cm93OiAwLCBjb2x1bW46IDV9LCAvXFxTKy9nKTtcbiAgICBleHBlY3QobWF0Y2gpLnRvQmVOdWxsKCk7XG4gIH0pO1xufSk7XG4iXX0=