"use strict";

var cov_15lowkgwu9 = function () {
  var path = "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/destroyItemWhere.js",
      hash = "c58a0afdf4ca85adb12632889871522f885e0382",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hansonw/atom-ide-ui/modules/nuclide-commons-atom/destroyItemWhere.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "1": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 21,
          column: 7
        }
      },
      "2": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 20,
          column: 7
        }
      },
      "3": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "destroyItemWhere",
        decl: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 32
          }
        },
        loc: {
          start: {
            line: 15,
            column: 8
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 16,
            column: 37
          }
        },
        loc: {
          start: {
            line: 16,
            column: 44
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 29
          }
        },
        loc: {
          start: {
            line: 17,
            column: 36
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }, {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }],
        line: 18
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
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
exports.destroyItemWhere = destroyItemWhere;
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

function destroyItemWhere(predicate) {
  cov_15lowkgwu9.f[0]++;
  cov_15lowkgwu9.s[0]++;

  atom.workspace.getPanes().forEach(pane => {
    cov_15lowkgwu9.f[1]++;
    cov_15lowkgwu9.s[1]++;

    pane.getItems().forEach(item => {
      cov_15lowkgwu9.f[2]++;
      cov_15lowkgwu9.s[2]++;

      if (predicate(item)) {
        cov_15lowkgwu9.b[0][0]++;
        cov_15lowkgwu9.s[3]++;

        pane.destroyItem(item, true);
      } else {
        cov_15lowkgwu9.b[0][1]++;
      }
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc3Ryb3lJdGVtV2hlcmUuanMiXSwibmFtZXMiOlsiZGVzdHJveUl0ZW1XaGVyZSIsInByZWRpY2F0ZSIsImF0b20iLCJ3b3Jrc3BhY2UiLCJnZXRQYW5lcyIsImZvckVhY2giLCJwYW5lIiwiZ2V0SXRlbXMiLCJpdGVtIiwiZGVzdHJveUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVlnQkEsZ0IsR0FBQUEsZ0I7QUFaaEI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLGdCQUFULENBQ0xDLFNBREssRUFFQztBQUFBO0FBQUE7O0FBQ05DLE9BQUtDLFNBQUwsQ0FBZUMsUUFBZixHQUEwQkMsT0FBMUIsQ0FBa0NDLFFBQVE7QUFBQTtBQUFBOztBQUN4Q0EsU0FBS0MsUUFBTCxHQUFnQkYsT0FBaEIsQ0FBd0JHLFFBQVE7QUFBQTtBQUFBOztBQUM5QixVQUFJUCxVQUFVTyxJQUFWLENBQUosRUFBcUI7QUFBQTtBQUFBOztBQUNuQkYsYUFBS0csV0FBTCxDQUFpQkQsSUFBakIsRUFBdUIsSUFBdkI7QUFDRCxPQUZEO0FBQUE7QUFBQTtBQUdELEtBSkQ7QUFLRCxHQU5EO0FBT0QiLCJmaWxlIjoiZGVzdHJveUl0ZW1XaGVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SXRlbVdoZXJlKFxuICBwcmVkaWNhdGU6IChpdGVtOiBhdG9tJFBhbmVJdGVtKSA9PiBib29sZWFuLFxuKTogdm9pZCB7XG4gIGF0b20ud29ya3NwYWNlLmdldFBhbmVzKCkuZm9yRWFjaChwYW5lID0+IHtcbiAgICBwYW5lLmdldEl0ZW1zKCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgICAgcGFuZS5kZXN0cm95SXRlbShpdGVtLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=