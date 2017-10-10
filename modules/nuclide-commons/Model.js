'use strict';

var cov_1v8f4eo47l = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/Model.js',
      hash = '10c25f1f23d3487ee8534efb4c16cbdcbbc6fe7d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/Model.js',
    statementMap: {
      '0': {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 53
        }
      },
      '1': {
        start: {
          line: 63,
          column: 22
        },
        end: {
          line: 63,
          column: 50
        }
      },
      '2': {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 33
        }
      },
      '3': {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 35
        }
      },
      '4': {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 78
        }
      },
      '5': {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 47
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 35
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 62,
            column: 3
          }
        },
        loc: {
          start: {
            line: 62,
            column: 42
          },
          end: {
            line: 65,
            column: 3
          }
        },
        line: 62
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        loc: {
          start: {
            line: 67,
            column: 21
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 67
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        loc: {
          start: {
            line: 71,
            column: 54
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 71
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 75,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        loc: {
          start: {
            line: 75,
            column: 36
          },
          end: {
            line: 77,
            column: 3
          }
        },
        line: 75
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
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

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

var _UniversalDisposable;

function _load_UniversalDisposable() {
  return _UniversalDisposable = _interopRequireDefault(require('./UniversalDisposable'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exposes a simple API for a stateful model. This is similar to React's `state`/`setState()` API
 * except achieved via composition and easily convertible to observables so you can do awesome
 * stuff. It's really a super-thin wrapper around `BehaviorSubject`; wrapping `BehaviorSubject`
 * instead of extending it was done to minimize the API surface area. Ideally, this would implement
 * `Symbol.observable` instead of having a `toObservable()` method, but since Flow doesn't
 * understand that, it causes more trouble than it's worth.
 *
 * While you can extend this class, composition is recommended.
 *
 * Example:
 *
 *     class MyThing {
 *       _model = new Model({count: 0});
 *       increment(): void {
 *         const {count} = this._model.state;
 *         this._model.update({count: count + 1});
 *       }
 *     }
 *
 * BEST PRACTICES
 *
 * Don't pass your model instance around! Instead, create a new object with the properties you want
 * and explicit setters:
 *
 *     const props = {
 *       count: model.state.count,
 *       increment: () => {
 *         const {count} = model.state;
 *         model.update({count: count + 1})
 *       },
 *     };
 *
 * You'll notice that this is very similar to Flux/Redux, with the setters corresponding to bound
 * action creators. That's awesome! It means that, should the state grow and require new
 * capabilities, we can always switch to full-blown Redux without having to refactor a ton of stuff.
 */
class Model {

  constructor(initialState) {
    cov_1v8f4eo47l.f[0]++;
    cov_1v8f4eo47l.s[0]++;

    this._states = new _rxjsBundlesRxMinJs.BehaviorSubject(initialState);
  }

  setState(newState) {
    cov_1v8f4eo47l.f[1]++;

    const nextState = (cov_1v8f4eo47l.s[1]++, Object.assign({}, this.state, newState));
    cov_1v8f4eo47l.s[2]++;
    this._states.next(nextState);
  }

  get state() {
    cov_1v8f4eo47l.f[2]++;
    cov_1v8f4eo47l.s[3]++;

    return this._states.getValue();
  }

  subscribe(cb) {
    cov_1v8f4eo47l.f[3]++;
    cov_1v8f4eo47l.s[4]++;

    return new (_UniversalDisposable || _load_UniversalDisposable()).default(this.toObservable().subscribe({ next: cb }));
  }

  toObservable() {
    cov_1v8f4eo47l.f[4]++;
    cov_1v8f4eo47l.s[5]++;

    return this._states.distinctUntilChanged();
  }
}
exports.default = Model; /**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwiY29uc3RydWN0b3IiLCJpbml0aWFsU3RhdGUiLCJfc3RhdGVzIiwic2V0U3RhdGUiLCJuZXdTdGF0ZSIsIm5leHRTdGF0ZSIsInN0YXRlIiwibmV4dCIsImdldFZhbHVlIiwic3Vic2NyaWJlIiwiY2IiLCJ0b09ic2VydmFibGUiLCJkaXN0aW5jdFVudGlsQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ2UsTUFBTUEsS0FBTixDQUF1Qjs7QUFHcENDLGNBQVlDLFlBQVosRUFBaUM7QUFBQTtBQUFBOztBQUMvQixTQUFLQyxPQUFMLEdBQWUsd0NBQW9CRCxZQUFwQixDQUFmO0FBQ0Q7O0FBRURFLFdBQVNDLFFBQVQsRUFBd0M7QUFBQTs7QUFDdEMsVUFBTUMsc0RBQWdCLEtBQUtDLEtBQXJCLEVBQStCRixRQUEvQixFQUFOO0FBRHNDO0FBRXRDLFNBQUtGLE9BQUwsQ0FBYUssSUFBYixDQUFrQkYsU0FBbEI7QUFDRDs7QUFFRCxNQUFJQyxLQUFKLEdBQW1CO0FBQUE7QUFBQTs7QUFDakIsV0FBTyxLQUFLSixPQUFMLENBQWFNLFFBQWIsRUFBUDtBQUNEOztBQUVEQyxZQUFVQyxFQUFWLEVBQW9EO0FBQUE7QUFBQTs7QUFDbEQsV0FBTyxrRUFBd0IsS0FBS0MsWUFBTCxHQUFvQkYsU0FBcEIsQ0FBOEIsRUFBQ0YsTUFBTUcsRUFBUCxFQUE5QixDQUF4QixDQUFQO0FBQ0Q7O0FBRURDLGlCQUFrQztBQUFBO0FBQUE7O0FBQ2hDLFdBQU8sS0FBS1QsT0FBTCxDQUFhVSxvQkFBYixFQUFQO0FBQ0Q7QUF0Qm1DO2tCQUFqQmIsSyxFQXREckIiLCJmaWxlIjoiTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCBVbml2ZXJzYWxEaXNwb3NhYmxlIGZyb20gJy4vVW5pdmVyc2FsRGlzcG9zYWJsZSc7XG5cbi8qKlxuICogRXhwb3NlcyBhIHNpbXBsZSBBUEkgZm9yIGEgc3RhdGVmdWwgbW9kZWwuIFRoaXMgaXMgc2ltaWxhciB0byBSZWFjdCdzIGBzdGF0ZWAvYHNldFN0YXRlKClgIEFQSVxuICogZXhjZXB0IGFjaGlldmVkIHZpYSBjb21wb3NpdGlvbiBhbmQgZWFzaWx5IGNvbnZlcnRpYmxlIHRvIG9ic2VydmFibGVzIHNvIHlvdSBjYW4gZG8gYXdlc29tZVxuICogc3R1ZmYuIEl0J3MgcmVhbGx5IGEgc3VwZXItdGhpbiB3cmFwcGVyIGFyb3VuZCBgQmVoYXZpb3JTdWJqZWN0YDsgd3JhcHBpbmcgYEJlaGF2aW9yU3ViamVjdGBcbiAqIGluc3RlYWQgb2YgZXh0ZW5kaW5nIGl0IHdhcyBkb25lIHRvIG1pbmltaXplIHRoZSBBUEkgc3VyZmFjZSBhcmVhLiBJZGVhbGx5LCB0aGlzIHdvdWxkIGltcGxlbWVudFxuICogYFN5bWJvbC5vYnNlcnZhYmxlYCBpbnN0ZWFkIG9mIGhhdmluZyBhIGB0b09ic2VydmFibGUoKWAgbWV0aG9kLCBidXQgc2luY2UgRmxvdyBkb2Vzbid0XG4gKiB1bmRlcnN0YW5kIHRoYXQsIGl0IGNhdXNlcyBtb3JlIHRyb3VibGUgdGhhbiBpdCdzIHdvcnRoLlxuICpcbiAqIFdoaWxlIHlvdSBjYW4gZXh0ZW5kIHRoaXMgY2xhc3MsIGNvbXBvc2l0aW9uIGlzIHJlY29tbWVuZGVkLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNsYXNzIE15VGhpbmcge1xuICogICAgICAgX21vZGVsID0gbmV3IE1vZGVsKHtjb3VudDogMH0pO1xuICogICAgICAgaW5jcmVtZW50KCk6IHZvaWQge1xuICogICAgICAgICBjb25zdCB7Y291bnR9ID0gdGhpcy5fbW9kZWwuc3RhdGU7XG4gKiAgICAgICAgIHRoaXMuX21vZGVsLnVwZGF0ZSh7Y291bnQ6IGNvdW50ICsgMX0pO1xuICogICAgICAgfVxuICogICAgIH1cbiAqXG4gKiBCRVNUIFBSQUNUSUNFU1xuICpcbiAqIERvbid0IHBhc3MgeW91ciBtb2RlbCBpbnN0YW5jZSBhcm91bmQhIEluc3RlYWQsIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyB5b3Ugd2FudFxuICogYW5kIGV4cGxpY2l0IHNldHRlcnM6XG4gKlxuICogICAgIGNvbnN0IHByb3BzID0ge1xuICogICAgICAgY291bnQ6IG1vZGVsLnN0YXRlLmNvdW50LFxuICogICAgICAgaW5jcmVtZW50OiAoKSA9PiB7XG4gKiAgICAgICAgIGNvbnN0IHtjb3VudH0gPSBtb2RlbC5zdGF0ZTtcbiAqICAgICAgICAgbW9kZWwudXBkYXRlKHtjb3VudDogY291bnQgKyAxfSlcbiAqICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiBZb3UnbGwgbm90aWNlIHRoYXQgdGhpcyBpcyB2ZXJ5IHNpbWlsYXIgdG8gRmx1eC9SZWR1eCwgd2l0aCB0aGUgc2V0dGVycyBjb3JyZXNwb25kaW5nIHRvIGJvdW5kXG4gKiBhY3Rpb24gY3JlYXRvcnMuIFRoYXQncyBhd2Vzb21lISBJdCBtZWFucyB0aGF0LCBzaG91bGQgdGhlIHN0YXRlIGdyb3cgYW5kIHJlcXVpcmUgbmV3XG4gKiBjYXBhYmlsaXRpZXMsIHdlIGNhbiBhbHdheXMgc3dpdGNoIHRvIGZ1bGwtYmxvd24gUmVkdXggd2l0aG91dCBoYXZpbmcgdG8gcmVmYWN0b3IgYSB0b24gb2Ygc3R1ZmYuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsPFN0YXRlOiB7fT4ge1xuICBfc3RhdGVzOiBCZWhhdmlvclN1YmplY3Q8U3RhdGU+O1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZTogU3RhdGUpIHtcbiAgICB0aGlzLl9zdGF0ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICBzZXRTdGF0ZShuZXdTdGF0ZTogJFNoYXBlPFN0YXRlPik6IHZvaWQge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHsuLi50aGlzLnN0YXRlLCAuLi5uZXdTdGF0ZX07XG4gICAgdGhpcy5fc3RhdGVzLm5leHQobmV4dFN0YXRlKTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpOiBTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgc3Vic2NyaWJlKGNiOiAoc3RhdGU6IFN0YXRlKSA9PiBtaXhlZCk6IElEaXNwb3NhYmxlIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbERpc3Bvc2FibGUodGhpcy50b09ic2VydmFibGUoKS5zdWJzY3JpYmUoe25leHQ6IGNifSkpO1xuICB9XG5cbiAgdG9PYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8U3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVzLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCk7XG4gIH1cbn1cbiJdfQ==