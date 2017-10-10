'use strict';

var cov_2h58hi59dv = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ignoreTextSelectionEvents.js',
      hash = '061f5b5cb0befb39f9d23ef3d71f5bc223c5bfcb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ignoreTextSelectionEvents.js',
    statementMap: {
      '0': {
        start: {
          line: 32,
          column: 34
        },
        end: {
          line: 45,
          column: 1
        }
      },
      '1': {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 44,
          column: 4
        }
      },
      '2': {
        start: {
          line: 37,
          column: 22
        },
        end: {
          line: 37,
          column: 36
        }
      },
      '3': {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 41,
          column: 5
        }
      },
      '4': {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 25
        }
      },
      '5': {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 13
        }
      },
      '6': {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 16
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 32,
            column: 34
          },
          end: {
            line: 32,
            column: 35
          }
        },
        loc: {
          start: {
            line: 34,
            column: 5
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 34
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 35,
            column: 9
          },
          end: {
            line: 35,
            column: 10
          }
        },
        loc: {
          start: {
            line: 35,
            column: 39
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 35
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }, {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }],
        line: 38
      },
      '1': {
        loc: {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 55
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 38,
            column: 25
          }
        }, {
          start: {
            line: 38,
            column: 29
          },
          end: {
            line: 38,
            column: 55
          }
        }],
        line: 38
      },
      '2': {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 43,
            column: 15
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 43,
            column: 6
          }
        }, {
          start: {
            line: 43,
            column: 10
          },
          end: {
            line: 43,
            column: 15
          }
        }],
        line: 43
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
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
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
cov_2h58hi59dv.s[0]++;
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

/* global getSelection */

/**
 * Atom by default disables text selection by default on all the non editor
 * views. In order to enable it, in a container you need to add the props
 *   className="native-key-bindings"
 *   tabIndex={-1}
 * and add the style
 *   -webkit-user-select: initial;
 *
 * The downside of this approach is that by default, the onClick events
 * are going to be triggered when you try to select text.
 * This is where this module comes in, it will prevent the callback from
 * being triggered in a text selection event.
 *
 * To use it, just wrap your callback in a ignoreTextSelectionEvents call
 *   onClick={ignoreTextSelectionEvents(this._onClick)}
 */

const ignoreTextSelectionEvents = cb => {
  cov_2h58hi59dv.f[0]++;
  cov_2h58hi59dv.s[1]++;

  return e => {
    cov_2h58hi59dv.f[1]++;

    // Ignore text selection
    const selection = (cov_2h58hi59dv.s[2]++, getSelection());
    cov_2h58hi59dv.s[3]++;
    if ((cov_2h58hi59dv.b[1][0]++, selection != null) && (cov_2h58hi59dv.b[1][1]++, selection.type === 'Range')) {
      cov_2h58hi59dv.b[0][0]++;
      cov_2h58hi59dv.s[4]++;

      e.preventDefault();
      cov_2h58hi59dv.s[5]++;
      return;
    } else {
      cov_2h58hi59dv.b[0][1]++;
    }

    cov_2h58hi59dv.s[6]++;
    (cov_2h58hi59dv.b[2][0]++, cb) && (cov_2h58hi59dv.b[2][1]++, cb(e));
  };
};

exports.default = ignoreTextSelectionEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlnbm9yZVRleHRTZWxlY3Rpb25FdmVudHMuanMiXSwibmFtZXMiOlsiaWdub3JlVGV4dFNlbGVjdGlvbkV2ZW50cyIsImNiIiwiZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInR5cGUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU1BLDRCQUNKQyxFQURnQyxJQUU3QjtBQUFBO0FBQUE7O0FBQ0gsU0FBUUMsQ0FBRCxJQUE4QjtBQUFBOztBQUNuQztBQUNBLFVBQU1DLG9DQUFZQyxjQUFaLENBQU47QUFGbUM7QUFHbkMsUUFBSSx3Q0FBYSxJQUFiLGdDQUFxQkQsVUFBVUUsSUFBVixLQUFtQixPQUF4QyxDQUFKLEVBQXFEO0FBQUE7QUFBQTs7QUFDbkRILFFBQUVJLGNBQUY7QUFEbUQ7QUFFbkQ7QUFDRCxLQUhEO0FBQUE7QUFBQTs7QUFIbUM7QUFRbkMsaUVBQU1MLEdBQUdDLENBQUgsQ0FBTjtBQUNELEdBVEQ7QUFVRCxDQWJEOztrQkFlZUYseUIiLCJmaWxlIjoiaWdub3JlVGV4dFNlbGVjdGlvbkV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbi8qIGdsb2JhbCBnZXRTZWxlY3Rpb24gKi9cblxuLyoqXG4gKiBBdG9tIGJ5IGRlZmF1bHQgZGlzYWJsZXMgdGV4dCBzZWxlY3Rpb24gYnkgZGVmYXVsdCBvbiBhbGwgdGhlIG5vbiBlZGl0b3JcbiAqIHZpZXdzLiBJbiBvcmRlciB0byBlbmFibGUgaXQsIGluIGEgY29udGFpbmVyIHlvdSBuZWVkIHRvIGFkZCB0aGUgcHJvcHNcbiAqICAgY2xhc3NOYW1lPVwibmF0aXZlLWtleS1iaW5kaW5nc1wiXG4gKiAgIHRhYkluZGV4PXstMX1cbiAqIGFuZCBhZGQgdGhlIHN0eWxlXG4gKiAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gKlxuICogVGhlIGRvd25zaWRlIG9mIHRoaXMgYXBwcm9hY2ggaXMgdGhhdCBieSBkZWZhdWx0LCB0aGUgb25DbGljayBldmVudHNcbiAqIGFyZSBnb2luZyB0byBiZSB0cmlnZ2VyZWQgd2hlbiB5b3UgdHJ5IHRvIHNlbGVjdCB0ZXh0LlxuICogVGhpcyBpcyB3aGVyZSB0aGlzIG1vZHVsZSBjb21lcyBpbiwgaXQgd2lsbCBwcmV2ZW50IHRoZSBjYWxsYmFjayBmcm9tXG4gKiBiZWluZyB0cmlnZ2VyZWQgaW4gYSB0ZXh0IHNlbGVjdGlvbiBldmVudC5cbiAqXG4gKiBUbyB1c2UgaXQsIGp1c3Qgd3JhcCB5b3VyIGNhbGxiYWNrIGluIGEgaWdub3JlVGV4dFNlbGVjdGlvbkV2ZW50cyBjYWxsXG4gKiAgIG9uQ2xpY2s9e2lnbm9yZVRleHRTZWxlY3Rpb25FdmVudHModGhpcy5fb25DbGljayl9XG4gKi9cblxuY29uc3QgaWdub3JlVGV4dFNlbGVjdGlvbkV2ZW50cyA9IChcbiAgY2I/OiAoZTogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiBtaXhlZCxcbikgPT4ge1xuICByZXR1cm4gKGU6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PikgPT4ge1xuICAgIC8vIElnbm9yZSB0ZXh0IHNlbGVjdGlvblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdldFNlbGVjdGlvbigpO1xuICAgIGlmIChzZWxlY3Rpb24gIT0gbnVsbCAmJiBzZWxlY3Rpb24udHlwZSA9PT0gJ1JhbmdlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiICYmIGNiKGUpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaWdub3JlVGV4dFNlbGVjdGlvbkV2ZW50cztcbiJdfQ==