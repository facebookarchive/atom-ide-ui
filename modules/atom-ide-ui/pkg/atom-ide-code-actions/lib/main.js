'use strict';

var cov_yaz0h9jfn = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-code-actions/lib/main.js',
      hash = '59ce0e545c274ad48a1d75df69608e663105af28',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-code-actions/lib/main.js',
    statementMap: {
      '0': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 54
        }
      },
      '1': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 38
        }
      },
      '2': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 57
        }
      },
      '3': {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 61
        }
      },
      '4': {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 38,
          column: 42
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 21
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 12
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 58
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
      },
      '3': {
        name: '(anonymous_3)',
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
            column: 48
          },
          end: {
            line: 35,
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
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
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

var _createPackage;

function _load_createPackage() {
  return _createPackage = _interopRequireDefault(require('nuclide-commons-atom/createPackage'));
}

var _CodeActionManager;

function _load_CodeActionManager() {
  return _CodeActionManager = require('./CodeActionManager');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

class Activation {

  constructor() {
    cov_yaz0h9jfn.f[0]++;
    cov_yaz0h9jfn.s[0]++;

    this._codeActionManager = new (_CodeActionManager || _load_CodeActionManager()).CodeActionManager();
  }

  dispose() {
    cov_yaz0h9jfn.f[1]++;
    cov_yaz0h9jfn.s[1]++;

    this._codeActionManager.dispose();
  }

  consumeCodeActionProvider(provider) {
    cov_yaz0h9jfn.f[2]++;
    cov_yaz0h9jfn.s[2]++;

    return this._codeActionManager.addProvider(provider);
  }

  provideCodeActionFetcher() {
    cov_yaz0h9jfn.f[3]++;
    cov_yaz0h9jfn.s[3]++;

    return this._codeActionManager.createCodeActionFetcher();
  }
}

cov_yaz0h9jfn.s[4]++;
(0, (_createPackage || _load_createPackage()).default)(module.exports, Activation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbnN0cnVjdG9yIiwiX2NvZGVBY3Rpb25NYW5hZ2VyIiwiZGlzcG9zZSIsImNvbnN1bWVDb2RlQWN0aW9uUHJvdmlkZXIiLCJwcm92aWRlciIsImFkZFByb3ZpZGVyIiwicHJvdmlkZUNvZGVBY3Rpb25GZXRjaGVyIiwiY3JlYXRlQ29kZUFjdGlvbkZldGNoZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQWJBOzs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTUEsVUFBTixDQUFpQjs7QUFHZkMsZ0JBQWM7QUFBQTtBQUFBOztBQUNaLFNBQUtDLGtCQUFMLEdBQTBCLHlFQUExQjtBQUNEOztBQUVEQyxZQUFVO0FBQUE7QUFBQTs7QUFDUixTQUFLRCxrQkFBTCxDQUF3QkMsT0FBeEI7QUFDRDs7QUFFREMsNEJBQTBCQyxRQUExQixFQUF3RDtBQUFBO0FBQUE7O0FBQ3RELFdBQU8sS0FBS0gsa0JBQUwsQ0FBd0JJLFdBQXhCLENBQW9DRCxRQUFwQyxDQUFQO0FBQ0Q7O0FBRURFLDZCQUE4QztBQUFBO0FBQUE7O0FBQzVDLFdBQU8sS0FBS0wsa0JBQUwsQ0FBd0JNLHVCQUF4QixFQUFQO0FBQ0Q7QUFqQmM7OztBQW9CakIsdURBQWNDLE9BQU9DLE9BQXJCLEVBQThCVixVQUE5QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IGNyZWF0ZVBhY2thZ2UgZnJvbSAnbnVjbGlkZS1jb21tb25zLWF0b20vY3JlYXRlUGFja2FnZSc7XG5pbXBvcnQge0NvZGVBY3Rpb25NYW5hZ2VyfSBmcm9tICcuL0NvZGVBY3Rpb25NYW5hZ2VyJztcblxuaW1wb3J0IHR5cGUge0NvZGVBY3Rpb25Qcm92aWRlciwgQ29kZUFjdGlvbkZldGNoZXJ9IGZyb20gJy4vdHlwZXMnO1xuXG5jbGFzcyBBY3RpdmF0aW9uIHtcbiAgX2NvZGVBY3Rpb25NYW5hZ2VyOiBDb2RlQWN0aW9uTWFuYWdlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jb2RlQWN0aW9uTWFuYWdlciA9IG5ldyBDb2RlQWN0aW9uTWFuYWdlcigpO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jb2RlQWN0aW9uTWFuYWdlci5kaXNwb3NlKCk7XG4gIH1cblxuICBjb25zdW1lQ29kZUFjdGlvblByb3ZpZGVyKHByb3ZpZGVyOiBDb2RlQWN0aW9uUHJvdmlkZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZUFjdGlvbk1hbmFnZXIuYWRkUHJvdmlkZXIocHJvdmlkZXIpO1xuICB9XG5cbiAgcHJvdmlkZUNvZGVBY3Rpb25GZXRjaGVyKCk6IENvZGVBY3Rpb25GZXRjaGVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZUFjdGlvbk1hbmFnZXIuY3JlYXRlQ29kZUFjdGlvbkZldGNoZXIoKTtcbiAgfVxufVxuXG5jcmVhdGVQYWNrYWdlKG1vZHVsZS5leHBvcnRzLCBBY3RpdmF0aW9uKTtcbiJdfQ==