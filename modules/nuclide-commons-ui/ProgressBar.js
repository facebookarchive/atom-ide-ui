'use strict';

var cov_my9ocogwz = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ProgressBar.js',
      hash = '11a7e0c1a0bcb1a80815e0035b389ff919a54d71',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/ProgressBar.js',
    statementMap: {
      '0': {
        start: {
          line: 27,
          column: 27
        },
        end: {
          line: 29,
          column: 1
        }
      },
      '1': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 61
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 27,
            column: 27
          },
          end: {
            line: 27,
            column: 28
          }
        },
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 61
          }
        },
        line: 28
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
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
exports.ProgressBar = undefined;

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** A Progressbar for showing deterministic progress. */
cov_my9ocogwz.s[0]++; /**
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

const ProgressBar = exports.ProgressBar = props => {
  cov_my9ocogwz.f[0]++;
  cov_my9ocogwz.s[1]++;
  return _react.createElement('progress', Object.assign({ value: props.value, max: props.max }, props));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzQmFyLmpzIl0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvcHMiLCJ2YWx1ZSIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQWFBO3NCQXpCQTs7Ozs7Ozs7Ozs7O0FBMEJPLE1BQU1BLG9DQUFlQyxLQUFELElBQ3pCO0FBQUE7QUFBQTtBQUFBLDBEQUFVLE9BQU9BLE1BQU1DLEtBQXZCLEVBQThCLEtBQUtELE1BQU1FLEdBQXpDLElBQWtERixLQUFsRDtBQUEyRCxDQUR0RCIsImZpbGUiOiJQcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBwcm9ncmVzcyB2YWx1ZS4gSWYgbm9uZSBpcyBwcm92aWRlZCwgdGhlIFByb2dyZXNzYmFyIHdpbGwgcmVuZGVyIGluIGBpbmRlZmluaXRlYCBtb2RlLlxuICAgKiBVc2UgYGluZGVmaW5pdGUgbW9kZWAgdG8gaW5kaWNhdGUgYW4gaW5pdGlhbGl6aW5nIHBlcmlvZCxcbiAgICogUHJlZmVyIHVzaW5nIHRoZSBgTG9hZGluZ1NwaW5uZXJgIGNvbXBvbmVudCBmb3Igc3VyZmFjaW5nIG5vbi1kZXRlcm1pbmlzdGljIHByb2dyZXNzLlxuICAgKi9cbiAgdmFsdWU/OiBudW1iZXIsXG4gIC8qKiBEZXRlcm1pbmVzIHRoZSBzY2FsaW5nIG9mIGB2YWx1ZWAuIGBtaW5gIGlzIGltcGxpY2l0bHkgc2V0IHRvIGAwYC4gKi9cbiAgbWF4PzogbnVtYmVyLFxufTtcblxuLyoqIEEgUHJvZ3Jlc3NiYXIgZm9yIHNob3dpbmcgZGV0ZXJtaW5pc3RpYyBwcm9ncmVzcy4gKi9cbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IChwcm9wczogUHJvcHMpID0+IChcbiAgPHByb2dyZXNzIHZhbHVlPXtwcm9wcy52YWx1ZX0gbWF4PXtwcm9wcy5tYXh9IHsuLi5wcm9wc30gLz5cbik7XG4iXX0=