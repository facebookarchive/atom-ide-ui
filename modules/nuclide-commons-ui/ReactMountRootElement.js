'use strict';

var cov_1iwh444fqr = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ReactMountRootElement.js',
      hash = '1b934693c5e35c8ca057c7c19ce61da30a546233',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ReactMountRootElement.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 38
        }
      },
      '1': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      '2': {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 13
        }
      },
      '3': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 46
        }
      },
      '4': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 39,
          column: 5
        }
      },
      '5': {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 13
        }
      },
      '6': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 42
        }
      },
      '7': {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 54,
          column: 1
        }
      },
      '8': {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 48,
          column: 5
        }
      },
      '9': {
        start: {
          line: 51,
          column: 18
        },
        end: {
          line: 51,
          column: 68
        }
      },
      '10': {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 52,
          column: 69
        }
      },
      '11': {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 53,
          column: 53
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
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
            column: 58
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 25
      },
      '1': {
        name: '(anonymous_1)',
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
            column: 28
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 29
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
            column: 28
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 36
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        }, {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        }],
        line: 30
      },
      '1': {
        loc: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 39,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 39,
            column: 5
          }
        }, {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 39,
            column: 5
          }
        }],
        line: 37
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
      '1': 0,
      '2': 0
    },
    b: {
      '0': [0, 0],
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

var _react = _interopRequireWildcard(require('react'));

var _reactDom = _interopRequireDefault(require('react-dom'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * A custom HTMLElement we render React elements into.
 */
class ReactMountRootElement extends HTMLElement {

  setReactElement(reactElement) {
    cov_1iwh444fqr.f[0]++;
    cov_1iwh444fqr.s[0]++;

    this._reactElement = reactElement;
  }

  attachedCallback() {
    cov_1iwh444fqr.f[1]++;
    cov_1iwh444fqr.s[1]++;

    if (this._reactElement == null) {
      cov_1iwh444fqr.b[0][0]++;
      cov_1iwh444fqr.s[2]++;

      return;
    } else {
      cov_1iwh444fqr.b[0][1]++;
    }
    cov_1iwh444fqr.s[3]++;
    _reactDom.default.render(this._reactElement, this);
  }

  detachedCallback() {
    cov_1iwh444fqr.f[2]++;
    cov_1iwh444fqr.s[4]++;

    if (this._reactElement == null) {
      cov_1iwh444fqr.b[1][0]++;
      cov_1iwh444fqr.s[5]++;

      return;
    } else {
      cov_1iwh444fqr.b[1][1]++;
    }
    cov_1iwh444fqr.s[6]++;
    _reactDom.default.unmountComponentAtNode(this);
  }
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

/* global HTMLElement */

let reactMountRootElement;
cov_1iwh444fqr.s[7]++;
try {
  cov_1iwh444fqr.s[8]++;

  reactMountRootElement = document.registerElement('nuclide-react-mount-root', {
    prototype: ReactMountRootElement.prototype
  });
} catch (e) {
  // Element was already registered. Retrieve its constructor:
  const oldElem = (cov_1iwh444fqr.s[9]++, document.createElement('nuclide-react-mount-root'));
  cov_1iwh444fqr.s[10]++;

  if (!(oldElem.constructor.name === 'nuclide-react-mount-root')) {
    throw new Error('Invariant violation: "oldElem.constructor.name === \'nuclide-react-mount-root\'"');
  }

  cov_1iwh444fqr.s[11]++;

  reactMountRootElement = oldElem.constructor;
}

exports.default = reactMountRootElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWN0TW91bnRSb290RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdE1vdW50Um9vdEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsInNldFJlYWN0RWxlbWVudCIsInJlYWN0RWxlbWVudCIsIl9yZWFjdEVsZW1lbnQiLCJhdHRhY2hlZENhbGxiYWNrIiwicmVuZGVyIiwiZGV0YWNoZWRDYWxsYmFjayIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJyZWFjdE1vdW50Um9vdEVsZW1lbnQiLCJkb2N1bWVudCIsInJlZ2lzdGVyRWxlbWVudCIsInByb3RvdHlwZSIsImUiLCJvbGRFbGVtIiwiY3JlYXRlRWxlbWVudCIsImNvbnN0cnVjdG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxNQUFNQSxxQkFBTixTQUFvQ0MsV0FBcEMsQ0FBZ0Q7O0FBRzlDQyxrQkFBZ0JDLFlBQWhCLEVBQXdEO0FBQUE7QUFBQTs7QUFDdEQsU0FBS0MsYUFBTCxHQUFxQkQsWUFBckI7QUFDRDs7QUFFREUscUJBQTBCO0FBQUE7QUFBQTs7QUFDeEIsUUFBSSxLQUFLRCxhQUFMLElBQXNCLElBQTFCLEVBQWdDO0FBQUE7QUFBQTs7QUFDOUI7QUFDRCxLQUZEO0FBQUE7QUFBQTtBQUR3QjtBQUl4QixzQkFBU0UsTUFBVCxDQUFnQixLQUFLRixhQUFyQixFQUFvQyxJQUFwQztBQUNEOztBQUVERyxxQkFBMEI7QUFBQTtBQUFBOztBQUN4QixRQUFJLEtBQUtILGFBQUwsSUFBc0IsSUFBMUIsRUFBZ0M7QUFBQTtBQUFBOztBQUM5QjtBQUNELEtBRkQ7QUFBQTtBQUFBO0FBRHdCO0FBSXhCLHNCQUFTSSxzQkFBVCxDQUFnQyxJQUFoQztBQUNEO0FBbkI2QyxDLENBckJoRDs7Ozs7Ozs7Ozs7O0FBWUE7O0FBK0JBLElBQUlDLHFCQUFKOztBQUNBLElBQUk7QUFBQTs7QUFDRkEsMEJBQXdCQyxTQUFTQyxlQUFULENBQXlCLDBCQUF6QixFQUFxRDtBQUMzRUMsZUFBV1osc0JBQXNCWTtBQUQwQyxHQUFyRCxDQUF4QjtBQUdELENBSkQsQ0FJRSxPQUFPQyxDQUFQLEVBQVU7QUFDVjtBQUNBLFFBQU1DLGtDQUFVSixTQUFTSyxhQUFULENBQXVCLDBCQUF2QixDQUFWLENBQU47QUFGVTs7QUFBQSxRQUdBRCxRQUFRRSxXQUFSLENBQW9CQyxJQUFwQixLQUE2QiwwQkFIN0I7QUFBQTtBQUFBOztBQUFBOztBQUlWUiwwQkFBeUJLLFFBQVFFLFdBQWpDO0FBQ0Q7O2tCQUVlUCxxQiIsImZpbGUiOiJSZWFjdE1vdW50Um9vdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG4vKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cblxuaW1wb3J0IGludmFyaWFudCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8qKlxuICogQSBjdXN0b20gSFRNTEVsZW1lbnQgd2UgcmVuZGVyIFJlYWN0IGVsZW1lbnRzIGludG8uXG4gKi9cbmNsYXNzIFJlYWN0TW91bnRSb290RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX3JlYWN0RWxlbWVudDogP1JlYWN0LkVsZW1lbnQ8YW55PjtcblxuICBzZXRSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50OiBSZWFjdC5FbGVtZW50PGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZWFjdEVsZW1lbnQgPSByZWFjdEVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hlZENhbGxiYWNrKCk6IG1peGVkIHtcbiAgICBpZiAodGhpcy5fcmVhY3RFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUmVhY3RET00ucmVuZGVyKHRoaXMuX3JlYWN0RWxlbWVudCwgdGhpcyk7XG4gIH1cblxuICBkZXRhY2hlZENhbGxiYWNrKCk6IG1peGVkIHtcbiAgICBpZiAodGhpcy5fcmVhY3RFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzKTtcbiAgfVxufVxuXG5sZXQgcmVhY3RNb3VudFJvb3RFbGVtZW50O1xudHJ5IHtcbiAgcmVhY3RNb3VudFJvb3RFbGVtZW50ID0gZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdudWNsaWRlLXJlYWN0LW1vdW50LXJvb3QnLCB7XG4gICAgcHJvdG90eXBlOiBSZWFjdE1vdW50Um9vdEVsZW1lbnQucHJvdG90eXBlLFxuICB9KTtcbn0gY2F0Y2ggKGUpIHtcbiAgLy8gRWxlbWVudCB3YXMgYWxyZWFkeSByZWdpc3RlcmVkLiBSZXRyaWV2ZSBpdHMgY29uc3RydWN0b3I6XG4gIGNvbnN0IG9sZEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdudWNsaWRlLXJlYWN0LW1vdW50LXJvb3QnKTtcbiAgaW52YXJpYW50KG9sZEVsZW0uY29uc3RydWN0b3IubmFtZSA9PT0gJ251Y2xpZGUtcmVhY3QtbW91bnQtcm9vdCcpO1xuICByZWFjdE1vdW50Um9vdEVsZW1lbnQgPSAob2xkRWxlbS5jb25zdHJ1Y3RvcjogYW55KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJlYWN0TW91bnRSb290RWxlbWVudDogQ2xhc3M8UmVhY3RNb3VudFJvb3RFbGVtZW50Pik7XG4iXX0=