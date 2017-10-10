'use strict';

var cov_19a5v9zsle = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/event.js',
      hash = 'de9b76fe7662546c0d5242821a526eb6e9fc17ca',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/event.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 43
        }
      },
      '1': {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 29,
          column: 5
        }
      },
      '2': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 48
        }
      },
      '3': {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 43,
          column: 5
        }
      },
      '4': {
        start: {
          line: 39,
          column: 23
        },
        end: {
          line: 39,
          column: 55
        }
      },
      '5': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 42,
          column: 6
        }
      },
      '6': {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 27
        }
      }
    },
    fnMap: {
      '0': {
        name: 'attachEvent',
        decl: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 27
          }
        },
        loc: {
          start: {
            line: 25,
            column: 14
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 25
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 25
          }
        },
        loc: {
          start: {
            line: 27,
            column: 30
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 27
      },
      '2': {
        name: 'observableFromSubscribeFunction',
        decl: {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 35,
            column: 47
          }
        },
        loc: {
          start: {
            line: 37,
            column: 17
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 37
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 38,
            column: 27
          },
          end: {
            line: 38,
            column: 28
          }
        },
        loc: {
          start: {
            line: 38,
            column: 39
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 38
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 40,
            column: 11
          },
          end: {
            line: 40,
            column: 12
          }
        },
        loc: {
          start: {
            line: 40,
            column: 17
          },
          end: {
            line: 42,
            column: 5
          }
        },
        line: 40
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
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachEvent = attachEvent;
exports.observableFromSubscribeFunction = observableFromSubscribeFunction;

var _eventKit;

function _load_eventKit() {
  return _eventKit = require('event-kit');
}

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

/**
 * Add an event listener an return a disposable for removing it. Note that this function assumes
 * node EventEmitter semantics: namely, that adding the same combination of eventName and callback
 * adds a second listener.
 */
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

function attachEvent(emitter, eventName, callback) {
  cov_19a5v9zsle.f[0]++;
  cov_19a5v9zsle.s[0]++;

  emitter.addListener(eventName, callback);
  cov_19a5v9zsle.s[1]++;
  return new (_eventKit || _load_eventKit()).Disposable(() => {
    cov_19a5v9zsle.f[1]++;
    cov_19a5v9zsle.s[2]++;

    emitter.removeListener(eventName, callback);
  });
}

function observableFromSubscribeFunction(fn) {
  cov_19a5v9zsle.f[2]++;
  cov_19a5v9zsle.s[3]++;

  return _rxjsBundlesRxMinJs.Observable.create(observer => {
    cov_19a5v9zsle.f[3]++;

    const disposable = (cov_19a5v9zsle.s[4]++, fn(observer.next.bind(observer)));
    cov_19a5v9zsle.s[5]++;
    return () => {
      cov_19a5v9zsle.f[4]++;
      cov_19a5v9zsle.s[6]++;

      disposable.dispose();
    };
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmpzIl0sIm5hbWVzIjpbImF0dGFjaEV2ZW50Iiwib2JzZXJ2YWJsZUZyb21TdWJzY3JpYmVGdW5jdGlvbiIsImVtaXR0ZXIiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJmbiIsImNyZWF0ZSIsIm9ic2VydmVyIiwiZGlzcG9zYWJsZSIsIm5leHQiLCJiaW5kIiwiZGlzcG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFvQmdCQSxXLEdBQUFBLFc7UUFjQUMsK0IsR0FBQUEsK0I7Ozs7QUF0QmhCO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7QUFmQTs7Ozs7Ozs7Ozs7O0FBb0JPLFNBQVNELFdBQVQsQ0FDTEUsT0FESyxFQUVMQyxTQUZLLEVBR0xDLFFBSEssRUFJTztBQUFBO0FBQUE7O0FBQ1pGLFVBQVFHLFdBQVIsQ0FBb0JGLFNBQXBCLEVBQStCQyxRQUEvQjtBQURZO0FBRVosU0FBTywrQ0FBZSxNQUFNO0FBQUE7QUFBQTs7QUFDMUJGLFlBQVFJLGNBQVIsQ0FBdUJILFNBQXZCLEVBQWtDQyxRQUFsQztBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUtNLFNBQVNILCtCQUFULENBQ0xNLEVBREssRUFFVTtBQUFBO0FBQUE7O0FBQ2YsU0FBTywrQkFBV0MsTUFBWCxDQUFrQkMsWUFBWTtBQUFBOztBQUNuQyxVQUFNQyxxQ0FBYUgsR0FBR0UsU0FBU0UsSUFBVCxDQUFjQyxJQUFkLENBQW1CSCxRQUFuQixDQUFILENBQWIsQ0FBTjtBQURtQztBQUVuQyxXQUFPLE1BQU07QUFBQTtBQUFBOztBQUNYQyxpQkFBV0csT0FBWDtBQUNELEtBRkQ7QUFHRCxHQUxNLENBQVA7QUFNRCIsImZpbGUiOiJldmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCB7RGlzcG9zYWJsZX0gZnJvbSAnZXZlbnQta2l0JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGFuIHJldHVybiBhIGRpc3Bvc2FibGUgZm9yIHJlbW92aW5nIGl0LiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBhc3N1bWVzXG4gKiBub2RlIEV2ZW50RW1pdHRlciBzZW1hbnRpY3M6IG5hbWVseSwgdGhhdCBhZGRpbmcgdGhlIHNhbWUgY29tYmluYXRpb24gb2YgZXZlbnROYW1lIGFuZCBjYWxsYmFja1xuICogYWRkcyBhIHNlY29uZCBsaXN0ZW5lci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaEV2ZW50KFxuICBlbWl0dGVyOiBldmVudHMkRXZlbnRFbWl0dGVyLFxuICBldmVudE5hbWU6IHN0cmluZyxcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuKTogRGlzcG9zYWJsZSB7XG4gIGVtaXR0ZXIuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gIHJldHVybiBuZXcgRGlzcG9zYWJsZSgoKSA9PiB7XG4gICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgfSk7XG59XG5cbnR5cGUgU3Vic2NyaWJlQ2FsbGJhY2s8VD4gPSAoaXRlbTogVCkgPT4gYW55O1xudHlwZSBTdWJzY3JpYmVGdW5jdGlvbjxUPiA9IChjYWxsYmFjazogU3Vic2NyaWJlQ2FsbGJhY2s8VD4pID0+IElEaXNwb3NhYmxlO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZUZyb21TdWJzY3JpYmVGdW5jdGlvbjxUPihcbiAgZm46IFN1YnNjcmliZUZ1bmN0aW9uPFQ+LFxuKTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgY29uc3QgZGlzcG9zYWJsZSA9IGZuKG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcikpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICB9O1xuICB9KTtcbn1cbiJdfQ==