'use strict';

var cov_2q4h964y4a = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-busy-signal/lib/main.js',
      hash = '8696248da331676cbef3e4c6ac1f9b983fbda9be',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-busy-signal/lib/main.js',
    statementMap: {
      '0': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 44
        }
      },
      '1': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 64
        }
      },
      '2': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 68
        }
      },
      '3': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 32
        }
      },
      '4': {
        start: {
          line: 38,
          column: 23
        },
        end: {
          line: 40,
          column: 5
        }
      },
      '5': {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 38
        }
      },
      '6': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 22
        }
      },
      '7': {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 25
        }
      },
      '8': {
        start: {
          line: 50,
          column: 0
        },
        end: {
          line: 50,
          column: 42
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 16
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 26
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 32,
            column: 12
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 32
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 59
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 36
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 41
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 45
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

var _UniversalDisposable;

function _load_UniversalDisposable() {
  return _UniversalDisposable = _interopRequireDefault(require('nuclide-commons/UniversalDisposable'));
}

var _BusySignalSingleton;

function _load_BusySignalSingleton() {
  return _BusySignalSingleton = _interopRequireDefault(require('./BusySignalSingleton'));
}

var _MessageStore;

function _load_MessageStore() {
  return _MessageStore = require('./MessageStore');
}

var _StatusBarTile;

function _load_StatusBarTile() {
  return _StatusBarTile = _interopRequireDefault(require('./StatusBarTile'));
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
    cov_2q4h964y4a.f[0]++;
    cov_2q4h964y4a.s[0]++;

    this._messageStore = new (_MessageStore || _load_MessageStore()).MessageStore();
    cov_2q4h964y4a.s[1]++;
    this._service = new (_BusySignalSingleton || _load_BusySignalSingleton()).default(this._messageStore);
    cov_2q4h964y4a.s[2]++;
    this._disposables = new (_UniversalDisposable || _load_UniversalDisposable()).default(this._messageStore);
  }

  dispose() {
    cov_2q4h964y4a.f[1]++;
    cov_2q4h964y4a.s[3]++;

    this._disposables.dispose();
  }

  consumeStatusBar(statusBar) {
    cov_2q4h964y4a.f[2]++;

    // Avoid retaining StatusBarTile by wrapping it.
    const disposable = (cov_2q4h964y4a.s[4]++, new (_UniversalDisposable || _load_UniversalDisposable()).default(new (_StatusBarTile || _load_StatusBarTile()).default(statusBar, this._messageStore.getMessageStream())));
    cov_2q4h964y4a.s[5]++;
    this._disposables.add(disposable);
    cov_2q4h964y4a.s[6]++;
    return disposable;
  }

  provideBusySignal() {
    cov_2q4h964y4a.f[3]++;
    cov_2q4h964y4a.s[7]++;

    return this._service;
  }
}

cov_2q4h964y4a.s[8]++;
(0, (_createPackage || _load_createPackage()).default)(module.exports, Activation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbnN0cnVjdG9yIiwiX21lc3NhZ2VTdG9yZSIsIl9zZXJ2aWNlIiwiX2Rpc3Bvc2FibGVzIiwiZGlzcG9zZSIsImNvbnN1bWVTdGF0dXNCYXIiLCJzdGF0dXNCYXIiLCJkaXNwb3NhYmxlIiwiZ2V0TWVzc2FnZVN0cmVhbSIsImFkZCIsInByb3ZpZGVCdXN5U2lnbmFsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQWxCQTs7Ozs7Ozs7Ozs7O0FBb0JBLE1BQU1BLFVBQU4sQ0FBaUI7O0FBS2ZDLGdCQUFjO0FBQUE7QUFBQTs7QUFDWixTQUFLQyxhQUFMLEdBQXFCLDBEQUFyQjtBQURZO0FBRVosU0FBS0MsUUFBTCxHQUFnQixrRUFBd0IsS0FBS0QsYUFBN0IsQ0FBaEI7QUFGWTtBQUdaLFNBQUtFLFlBQUwsR0FBb0Isa0VBQXdCLEtBQUtGLGFBQTdCLENBQXBCO0FBQ0Q7O0FBRURHLFlBQVU7QUFBQTtBQUFBOztBQUNSLFNBQUtELFlBQUwsQ0FBa0JDLE9BQWxCO0FBQ0Q7O0FBRURDLG1CQUFpQkMsU0FBakIsRUFBeUQ7QUFBQTs7QUFDdkQ7QUFDQSxVQUFNQyxxQ0FBYSxrRUFDakIsc0RBQWtCRCxTQUFsQixFQUE2QixLQUFLTCxhQUFMLENBQW1CTyxnQkFBbkIsRUFBN0IsQ0FEaUIsQ0FBYixDQUFOO0FBRnVEO0FBS3ZELFNBQUtMLFlBQUwsQ0FBa0JNLEdBQWxCLENBQXNCRixVQUF0QjtBQUx1RDtBQU12RCxXQUFPQSxVQUFQO0FBQ0Q7O0FBRURHLHNCQUF1QztBQUFBO0FBQUE7O0FBQ3JDLFdBQU8sS0FBS1IsUUFBWjtBQUNEO0FBMUJjOzs7QUE2QmpCLHVEQUFjUyxPQUFPQyxPQUFyQixFQUE4QmIsVUFBOUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCB0eXBlIHtCdXN5U2lnbmFsU2VydmljZX0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCBjcmVhdGVQYWNrYWdlIGZyb20gJ251Y2xpZGUtY29tbW9ucy1hdG9tL2NyZWF0ZVBhY2thZ2UnO1xuaW1wb3J0IFVuaXZlcnNhbERpc3Bvc2FibGUgZnJvbSAnbnVjbGlkZS1jb21tb25zL1VuaXZlcnNhbERpc3Bvc2FibGUnO1xuaW1wb3J0IEJ1c3lTaWduYWxTaW5nbGV0b24gZnJvbSAnLi9CdXN5U2lnbmFsU2luZ2xldG9uJztcbmltcG9ydCB7TWVzc2FnZVN0b3JlfSBmcm9tICcuL01lc3NhZ2VTdG9yZSc7XG5pbXBvcnQgU3RhdHVzQmFyVGlsZSBmcm9tICcuL1N0YXR1c0JhclRpbGUnO1xuXG5jbGFzcyBBY3RpdmF0aW9uIHtcbiAgX2Rpc3Bvc2FibGVzOiBVbml2ZXJzYWxEaXNwb3NhYmxlO1xuICBfc2VydmljZTogQnVzeVNpZ25hbFNlcnZpY2U7XG4gIF9tZXNzYWdlU3RvcmU6IE1lc3NhZ2VTdG9yZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9tZXNzYWdlU3RvcmUgPSBuZXcgTWVzc2FnZVN0b3JlKCk7XG4gICAgdGhpcy5fc2VydmljZSA9IG5ldyBCdXN5U2lnbmFsU2luZ2xldG9uKHRoaXMuX21lc3NhZ2VTdG9yZSk7XG4gICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBuZXcgVW5pdmVyc2FsRGlzcG9zYWJsZSh0aGlzLl9tZXNzYWdlU3RvcmUpO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9kaXNwb3NhYmxlcy5kaXNwb3NlKCk7XG4gIH1cblxuICBjb25zdW1lU3RhdHVzQmFyKHN0YXR1c0JhcjogYXRvbSRTdGF0dXNCYXIpOiBJRGlzcG9zYWJsZSB7XG4gICAgLy8gQXZvaWQgcmV0YWluaW5nIFN0YXR1c0JhclRpbGUgYnkgd3JhcHBpbmcgaXQuXG4gICAgY29uc3QgZGlzcG9zYWJsZSA9IG5ldyBVbml2ZXJzYWxEaXNwb3NhYmxlKFxuICAgICAgbmV3IFN0YXR1c0JhclRpbGUoc3RhdHVzQmFyLCB0aGlzLl9tZXNzYWdlU3RvcmUuZ2V0TWVzc2FnZVN0cmVhbSgpKSxcbiAgICApO1xuICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmFkZChkaXNwb3NhYmxlKTtcbiAgICByZXR1cm4gZGlzcG9zYWJsZTtcbiAgfVxuXG4gIHByb3ZpZGVCdXN5U2lnbmFsKCk6IEJ1c3lTaWduYWxTZXJ2aWNlIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgfVxufVxuXG5jcmVhdGVQYWNrYWdlKG1vZHVsZS5leHBvcnRzLCBBY3RpdmF0aW9uKTtcbiJdfQ==