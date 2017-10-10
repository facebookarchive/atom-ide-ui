'use strict';

var cov_2byfjwq5k2 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/renderReactRoot.js',
      hash = '4d8df9c996a59679789f567a7fb27e116b880e50',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/renderReactRoot.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 18
        },
        end: {
          line: 21,
          column: 45
        }
      },
      '1': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 40
        }
      },
      '2': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 17
        }
      }
    },
    fnMap: {
      '0': {
        name: 'renderReactRoot',
        decl: {
          start: {
            line: 20,
            column: 16
          },
          end: {
            line: 20,
            column: 31
          }
        },
        loc: {
          start: {
            line: 20,
            column: 79
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 20
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0
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
exports.renderReactRoot = renderReactRoot;

var _react = _interopRequireWildcard(require('react'));

var _ReactMountRootElement;

function _load_ReactMountRootElement() {
  return _ReactMountRootElement = _interopRequireDefault(require('./ReactMountRootElement'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Create a DOM element and mount the React element in it. It will be unmounted when the node is
 * detached.
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

function renderReactRoot(reactElement) {
  cov_2byfjwq5k2.f[0]++;

  const element = (cov_2byfjwq5k2.s[0]++, new (_ReactMountRootElement || _load_ReactMountRootElement()).default());
  cov_2byfjwq5k2.s[1]++;
  element.setReactElement(reactElement);
  cov_2byfjwq5k2.s[2]++;
  return element;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlclJlYWN0Um9vdC5qcyJdLCJuYW1lcyI6WyJyZW5kZXJSZWFjdFJvb3QiLCJyZWFjdEVsZW1lbnQiLCJlbGVtZW50Iiwic2V0UmVhY3RFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1CZ0JBLGUsR0FBQUEsZTs7QUFQaEI7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7OztBQUVBOzs7O0FBZkE7Ozs7Ozs7Ozs7OztBQW1CTyxTQUFTQSxlQUFULENBQXlCQyxZQUF6QixFQUF3RTtBQUFBOztBQUM3RSxRQUFNQyxrQ0FBVSx1RUFBVixDQUFOO0FBRDZFO0FBRTdFQSxVQUFRQyxlQUFSLENBQXdCRixZQUF4QjtBQUY2RTtBQUc3RSxTQUFPQyxPQUFQO0FBQ0QiLCJmaWxlIjoicmVuZGVyUmVhY3RSb290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0TW91bnRSb290RWxlbWVudCBmcm9tICcuL1JlYWN0TW91bnRSb290RWxlbWVudCc7XG5cbi8qKlxuICogQ3JlYXRlIGEgRE9NIGVsZW1lbnQgYW5kIG1vdW50IHRoZSBSZWFjdCBlbGVtZW50IGluIGl0LiBJdCB3aWxsIGJlIHVubW91bnRlZCB3aGVuIHRoZSBub2RlIGlzXG4gKiBkZXRhY2hlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlYWN0Um9vdChyZWFjdEVsZW1lbnQ6IFJlYWN0LkVsZW1lbnQ8YW55Pik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWxlbWVudCA9IG5ldyBSZWFjdE1vdW50Um9vdEVsZW1lbnQoKTtcbiAgZWxlbWVudC5zZXRSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXX0=