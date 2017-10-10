'use strict';

var cov_1pybb3i7rb = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/showModal.example.js',
      hash = '34482aae69493f33eea2c9319e2ab7b413a4f8f5',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/showModal.example.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 64
        }
      },
      '1': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 32,
          column: 5
        }
      },
      '2': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 31,
          column: 6
        }
      },
      '3': {
        start: {
          line: 35,
          column: 29
        },
        end: {
          line: 44,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: 'ModalButton',
        decl: {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 20
          }
        },
        loc: {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      },
      '1': {
        name: 'showExampleModal',
        decl: {
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 21,
            column: 25
          }
        },
        loc: {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 21
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 13
          }
        },
        loc: {
          start: {
            line: 22,
            column: 23
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
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
exports.ModalExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Button;

function _load_Button() {
  return _Button = require('./Button');
}

var _showModal;

function _load_showModal() {
  return _showModal = _interopRequireDefault(require('./showModal'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ModalButton() {
  cov_1pybb3i7rb.f[0]++;
  cov_1pybb3i7rb.s[0]++;

  return _react.createElement(
    (_Button || _load_Button()).Button,
    { onClick: showExampleModal },
    'Show Modal'
  );
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

function showExampleModal() {
  cov_1pybb3i7rb.f[1]++;
  cov_1pybb3i7rb.s[1]++;

  (0, (_showModal || _load_showModal()).default)(dismiss => {
    cov_1pybb3i7rb.f[2]++;
    cov_1pybb3i7rb.s[2]++;

    return _react.createElement(
      'div',
      null,
      _react.createElement(
        'div',
        null,
        'I\'m a modal. You can add any content you like. I have all the standard behavior, like obeying the "core:cancel" command!'
      ),
      _react.createElement(
        (_Button || _load_Button()).Button,
        { onClick: dismiss },
        'Hide Modal'
      )
    );
  });
}

const ModalExamples = exports.ModalExamples = (cov_1pybb3i7rb.s[3]++, {
  sectionName: 'Modal',
  description: 'Overlays that cover the entire screen. ',
  examples: [{
    title: 'Click the button to toggle a modal:',
    component: ModalButton
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dNb2RhbC5leGFtcGxlLmpzIl0sIm5hbWVzIjpbIk1vZGFsQnV0dG9uIiwic2hvd0V4YW1wbGVNb2RhbCIsImRpc21pc3MiLCJNb2RhbEV4YW1wbGVzIiwic2VjdGlvbk5hbWUiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGVzIiwidGl0bGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7OztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTtBQUFBOztBQUNyQixTQUFPO0FBQUE7QUFBQSxNQUFRLFNBQVNDLGdCQUFqQjtBQUFBO0FBQUEsR0FBUDtBQUNELEMsQ0FsQkQ7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFTQSxnQkFBVCxHQUE0QjtBQUFBO0FBQUE7O0FBQzFCLGlEQUFVQyxXQUFXO0FBQUE7QUFBQTs7QUFDbkIsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFLRTtBQUFBO0FBQUEsVUFBUSxTQUFTQSxPQUFqQjtBQUFBO0FBQUE7QUFMRixLQURGO0FBU0QsR0FWRDtBQVdEOztBQUVNLE1BQU1DLGdFQUFnQjtBQUMzQkMsZUFBYSxPQURjO0FBRTNCQyxlQUFhLHlDQUZjO0FBRzNCQyxZQUFVLENBQ1I7QUFDRUMsV0FBTyxxQ0FEVDtBQUVFQyxlQUFXUjtBQUZiLEdBRFE7QUFIaUIsQ0FBaEIsQ0FBTiIsImZpbGUiOiJzaG93TW9kYWwuZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgc2hvd01vZGFsIGZyb20gJy4vc2hvd01vZGFsJztcblxuZnVuY3Rpb24gTW9kYWxCdXR0b24oKSB7XG4gIHJldHVybiA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dFeGFtcGxlTW9kYWx9PlNob3cgTW9kYWw8L0J1dHRvbj47XG59XG5cbmZ1bmN0aW9uIHNob3dFeGFtcGxlTW9kYWwoKSB7XG4gIHNob3dNb2RhbChkaXNtaXNzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBJJ20gYSBtb2RhbC4gWW91IGNhbiBhZGQgYW55IGNvbnRlbnQgeW91IGxpa2UuIEkgaGF2ZSBhbGwgdGhlIHN0YW5kYXJkXG4gICAgICAgICAgYmVoYXZpb3IsIGxpa2Ugb2JleWluZyB0aGUgXCJjb3JlOmNhbmNlbFwiIGNvbW1hbmQhXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Rpc21pc3N9PkhpZGUgTW9kYWw8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgTW9kYWxFeGFtcGxlcyA9IHtcbiAgc2VjdGlvbk5hbWU6ICdNb2RhbCcsXG4gIGRlc2NyaXB0aW9uOiAnT3ZlcmxheXMgdGhhdCBjb3ZlciB0aGUgZW50aXJlIHNjcmVlbi4gJyxcbiAgZXhhbXBsZXM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0NsaWNrIHRoZSBidXR0b24gdG8gdG9nZ2xlIGEgbW9kYWw6JyxcbiAgICAgIGNvbXBvbmVudDogTW9kYWxCdXR0b24sXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=