'use strict';

var cov_2in6xzvhff = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-jasmine/lib/unspy.js',
      hash = 'b53ce4cc95ae503e52de1b218d213bcb436e62f9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-jasmine/lib/unspy.js',
    statementMap: {
      '0': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 24
        }
      },
      '1': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 25,
          column: 2
        }
      },
      '2': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      '3': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 47
        }
      },
      '4': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 56
        }
      }
    },
    fnMap: {
      '0': {
        name: 'unspy',
        decl: {
          start: {
            line: 20,
            column: 25
          },
          end: {
            line: 20,
            column: 30
          }
        },
        loc: {
          start: {
            line: 20,
            column: 67
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }, {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }],
        line: 21
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0]
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

cov_2in6xzvhff.s[0]++;
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

// eslint-disable-next-line rulesdir/no-commonjs
require('jasmine-node');

/**
 * unspy is a ported utility from Atom's `spec-helper.coffee` that restores the
 * jasmine spied function on an object to its original value.
 */
cov_2in6xzvhff.s[1]++;
jasmine.unspy = function unspy(object, methodName) {
  cov_2in6xzvhff.f[0]++;
  cov_2in6xzvhff.s[2]++;

  if (!object[methodName].hasOwnProperty('originalValue')) {
    cov_2in6xzvhff.b[0][0]++;
    cov_2in6xzvhff.s[3]++;

    throw new Error('Not a spy ' + methodName);
  } else {
    cov_2in6xzvhff.b[0][1]++;
  }
  cov_2in6xzvhff.s[4]++;
  object[methodName] = object[methodName].originalValue;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuc3B5LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJqYXNtaW5lIiwidW5zcHkiLCJvYmplY3QiLCJtZXRob2ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsIm9yaWdpbmFsVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQUEsUUFBUSxjQUFSOztBQUVBOzs7OztBQUlBQyxRQUFRQyxLQUFSLEdBQWdCLFNBQVNBLEtBQVQsQ0FBZUMsTUFBZixFQUErQkMsVUFBL0IsRUFBbUQ7QUFBQTtBQUFBOztBQUNqRSxNQUFJLENBQUNELE9BQU9DLFVBQVAsRUFBbUJDLGNBQW5CLENBQWtDLGVBQWxDLENBQUwsRUFBeUQ7QUFBQTtBQUFBOztBQUN2RCxVQUFNLElBQUlDLEtBQUosQ0FBVSxlQUFlRixVQUF6QixDQUFOO0FBQ0QsR0FGRDtBQUFBO0FBQUE7QUFEaUU7QUFJakVELFNBQU9DLFVBQVAsSUFBcUJELE9BQU9DLFVBQVAsRUFBbUJHLGFBQXhDO0FBQ0QsQ0FMRCIsImZpbGUiOiJ1bnNweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBydWxlc2Rpci9uby1jb21tb25qc1xucmVxdWlyZSgnamFzbWluZS1ub2RlJyk7XG5cbi8qKlxuICogdW5zcHkgaXMgYSBwb3J0ZWQgdXRpbGl0eSBmcm9tIEF0b20ncyBgc3BlYy1oZWxwZXIuY29mZmVlYCB0aGF0IHJlc3RvcmVzIHRoZVxuICogamFzbWluZSBzcGllZCBmdW5jdGlvbiBvbiBhbiBvYmplY3QgdG8gaXRzIG9yaWdpbmFsIHZhbHVlLlxuICovXG5qYXNtaW5lLnVuc3B5ID0gZnVuY3Rpb24gdW5zcHkob2JqZWN0OiBPYmplY3QsIG1ldGhvZE5hbWU6IHN0cmluZykge1xuICBpZiAoIW9iamVjdFttZXRob2ROYW1lXS5oYXNPd25Qcm9wZXJ0eSgnb3JpZ2luYWxWYWx1ZScpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzcHkgJyArIG1ldGhvZE5hbWUpO1xuICB9XG4gIG9iamVjdFttZXRob2ROYW1lXSA9IG9iamVjdFttZXRob2ROYW1lXS5vcmlnaW5hbFZhbHVlO1xufTtcbiJdfQ==