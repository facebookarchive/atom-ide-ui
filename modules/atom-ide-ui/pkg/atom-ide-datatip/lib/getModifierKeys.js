'use strict';

var cov_1w78y644ma = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/getModifierKeys.js',
      hash = 'c6b0e7794e8d99e33562aab2aa97029bbaa364c4',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/getModifierKeys.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 28
        },
        end: {
          line: 21,
          column: 1
        }
      },
      '1': {
        start: {
          line: 24,
          column: 33
        },
        end: {
          line: 24,
          column: 42
        }
      },
      '2': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      '3': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 32
        }
      },
      '4': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      '5': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 33
        }
      },
      '6': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      '7': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 31
        }
      },
      '8': {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      '9': {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 32
        }
      },
      '10': {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 14
        }
      },
      '11': {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 36
        }
      }
    },
    fnMap: {
      '0': {
        name: 'getModifierKeysFromMouseEvent',
        decl: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 45
          }
        },
        loc: {
          start: {
            line: 23,
            column: 79
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 23
      },
      '1': {
        name: 'getModifierKeyFromKeyboardEvent',
        decl: {
          start: {
            line: 41,
            column: 16
          },
          end: {
            line: 41,
            column: 47
          }
        },
        loc: {
          start: {
            line: 43,
            column: 16
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 43
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 25
      },
      '1': {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }, {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }],
        line: 28
      },
      '2': {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        }, {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        }],
        line: 31
      },
      '3': {
        loc: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        }, {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        }],
        line: 34
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
      '9': 0,
      '10': 0,
      '11': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0]
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
exports.getModifierKeysFromMouseEvent = getModifierKeysFromMouseEvent;
exports.getModifierKeyFromKeyboardEvent = getModifierKeyFromKeyboardEvent;

var _types;

function _load_types() {
  return _types = require('./types');
}

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

const KEYNAME_TO_PROPERTY = (cov_1w78y644ma.s[0]++, {
  Meta: (_types || _load_types()).ModifierKeys.META,
  Shift: (_types || _load_types()).ModifierKeys.SHIFT,
  Alt: (_types || _load_types()).ModifierKeys.ALT,
  Control: (_types || _load_types()).ModifierKeys.CTRL
});

function getModifierKeysFromMouseEvent(e) {
  cov_1w78y644ma.f[0]++;

  const keys = (cov_1w78y644ma.s[1]++, new Set());
  cov_1w78y644ma.s[2]++;
  if (e.metaKey) {
    cov_1w78y644ma.b[0][0]++;
    cov_1w78y644ma.s[3]++;

    keys.add((_types || _load_types()).ModifierKeys.META);
  } else {
    cov_1w78y644ma.b[0][1]++;
  }
  cov_1w78y644ma.s[4]++;
  if (e.shiftKey) {
    cov_1w78y644ma.b[1][0]++;
    cov_1w78y644ma.s[5]++;

    keys.add((_types || _load_types()).ModifierKeys.SHIFT);
  } else {
    cov_1w78y644ma.b[1][1]++;
  }
  cov_1w78y644ma.s[6]++;
  if (e.altKey) {
    cov_1w78y644ma.b[2][0]++;
    cov_1w78y644ma.s[7]++;

    keys.add((_types || _load_types()).ModifierKeys.ALT);
  } else {
    cov_1w78y644ma.b[2][1]++;
  }
  cov_1w78y644ma.s[8]++;
  if (e.ctrlKey) {
    cov_1w78y644ma.b[3][0]++;
    cov_1w78y644ma.s[9]++;

    keys.add((_types || _load_types()).ModifierKeys.CTRL);
  } else {
    cov_1w78y644ma.b[3][1]++;
  }

  cov_1w78y644ma.s[10]++;
  return keys;
}

function getModifierKeyFromKeyboardEvent(e) {
  cov_1w78y644ma.f[1]++;
  cov_1w78y644ma.s[11]++;

  return KEYNAME_TO_PROPERTY[e.key];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldE1vZGlmaWVyS2V5cy5qcyJdLCJuYW1lcyI6WyJnZXRNb2RpZmllcktleXNGcm9tTW91c2VFdmVudCIsImdldE1vZGlmaWVyS2V5RnJvbUtleWJvYXJkRXZlbnQiLCJLRVlOQU1FX1RPX1BST1BFUlRZIiwiTWV0YSIsIk1FVEEiLCJTaGlmdCIsIlNISUZUIiwiQWx0IiwiQUxUIiwiQ29udHJvbCIsIkNUUkwiLCJlIiwia2V5cyIsIlNldCIsIm1ldGFLZXkiLCJhZGQiLCJzaGlmdEtleSIsImFsdEtleSIsImN0cmxLZXkiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXNCZ0JBLDZCLEdBQUFBLDZCO1FBa0JBQywrQixHQUFBQSwrQjs7OztBQTNCaEI7QUFBQTtBQUFBOztBQWJBOzs7Ozs7Ozs7Ozs7QUFlQSxNQUFNQyw4Q0FBc0I7QUFDMUJDLFFBQU0sdUNBQWFDLElBRE87QUFFMUJDLFNBQU8sdUNBQWFDLEtBRk07QUFHMUJDLE9BQUssdUNBQWFDLEdBSFE7QUFJMUJDLFdBQVMsdUNBQWFDO0FBSkksQ0FBdEIsQ0FBTjs7QUFPTyxTQUFTViw2QkFBVCxDQUF1Q1csQ0FBdkMsRUFBd0U7QUFBQTs7QUFDN0UsUUFBTUMsK0JBQXlCLElBQUlDLEdBQUosRUFBekIsQ0FBTjtBQUQ2RTtBQUU3RSxNQUFJRixFQUFFRyxPQUFOLEVBQWU7QUFBQTtBQUFBOztBQUNiRixTQUFLRyxHQUFMLENBQVMsdUNBQWFYLElBQXRCO0FBQ0QsR0FGRDtBQUFBO0FBQUE7QUFGNkU7QUFLN0UsTUFBSU8sRUFBRUssUUFBTixFQUFnQjtBQUFBO0FBQUE7O0FBQ2RKLFNBQUtHLEdBQUwsQ0FBUyx1Q0FBYVQsS0FBdEI7QUFDRCxHQUZEO0FBQUE7QUFBQTtBQUw2RTtBQVE3RSxNQUFJSyxFQUFFTSxNQUFOLEVBQWM7QUFBQTtBQUFBOztBQUNaTCxTQUFLRyxHQUFMLENBQVMsdUNBQWFQLEdBQXRCO0FBQ0QsR0FGRDtBQUFBO0FBQUE7QUFSNkU7QUFXN0UsTUFBSUcsRUFBRU8sT0FBTixFQUFlO0FBQUE7QUFBQTs7QUFDYk4sU0FBS0csR0FBTCxDQUFTLHVDQUFhTCxJQUF0QjtBQUNELEdBRkQ7QUFBQTtBQUFBOztBQVg2RTtBQWU3RSxTQUFPRSxJQUFQO0FBQ0Q7O0FBRU0sU0FBU1gsK0JBQVQsQ0FDTFUsQ0FESyxFQUVTO0FBQUE7QUFBQTs7QUFDZCxTQUFPVCxvQkFBb0JTLEVBQUVRLEdBQXRCLENBQVA7QUFDRCIsImZpbGUiOiJnZXRNb2RpZmllcktleXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7TW9kaWZpZXJLZXl9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtNb2RpZmllcktleXN9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBLRVlOQU1FX1RPX1BST1BFUlRZID0ge1xuICBNZXRhOiBNb2RpZmllcktleXMuTUVUQSxcbiAgU2hpZnQ6IE1vZGlmaWVyS2V5cy5TSElGVCxcbiAgQWx0OiBNb2RpZmllcktleXMuQUxULFxuICBDb250cm9sOiBNb2RpZmllcktleXMuQ1RSTCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RpZmllcktleXNGcm9tTW91c2VFdmVudChlOiBNb3VzZUV2ZW50KTogU2V0PE1vZGlmaWVyS2V5PiB7XG4gIGNvbnN0IGtleXM6IFNldDxNb2RpZmllcktleT4gPSBuZXcgU2V0KCk7XG4gIGlmIChlLm1ldGFLZXkpIHtcbiAgICBrZXlzLmFkZChNb2RpZmllcktleXMuTUVUQSk7XG4gIH1cbiAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICBrZXlzLmFkZChNb2RpZmllcktleXMuU0hJRlQpO1xuICB9XG4gIGlmIChlLmFsdEtleSkge1xuICAgIGtleXMuYWRkKE1vZGlmaWVyS2V5cy5BTFQpO1xuICB9XG4gIGlmIChlLmN0cmxLZXkpIHtcbiAgICBrZXlzLmFkZChNb2RpZmllcktleXMuQ1RSTCk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGlmaWVyS2V5RnJvbUtleWJvYXJkRXZlbnQoXG4gIGU6IEtleWJvYXJkRXZlbnQsXG4pOiA/TW9kaWZpZXJLZXkge1xuICByZXR1cm4gS0VZTkFNRV9UT19QUk9QRVJUWVtlLmtleV07XG59XG4iXX0=