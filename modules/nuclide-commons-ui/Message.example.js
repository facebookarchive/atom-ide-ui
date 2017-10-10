'use strict';

var cov_oj6jgfq3u = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Message.example.js',
      hash = '680042c42a96a4ec649ea0f6535b632cd74f84c9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Message.example.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 23
        },
        end: {
          line: 46,
          column: 1
        }
      },
      '1': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 45,
          column: 8
        }
      },
      '2': {
        start: {
          line: 48,
          column: 31
        },
        end: {
          line: 58,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 17,
            column: 24
          }
        },
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 45,
            column: 8
          }
        },
        line: 18
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
exports.MessageExamples = undefined;

var _react = _interopRequireWildcard(require('react'));

var _Block;

function _load_Block() {
  return _Block = require('./Block');
}

var _Message;

function _load_Message() {
  return _Message = require('./Message');
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

cov_oj6jgfq3u.s[0]++; /**
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

const MessageExample = () => {
  cov_oj6jgfq3u.f[0]++;
  cov_oj6jgfq3u.s[1]++;
  return _react.createElement(
    'div',
    null,
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Message || _load_Message()).Message,
        null,
        _react.createElement(
          'h2',
          null,
          'Message'
        ),
        'Hello, I\'m a simple message.'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Message || _load_Message()).Message,
        { type: (_Message || _load_Message()).MessageTypes.info },
        'Hello I\'m an ',
        _react.createElement(
          'strong',
          null,
          'info'
        ),
        ' message.'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Message || _load_Message()).Message,
        { type: (_Message || _load_Message()).MessageTypes.success },
        'Hello I\'m a ',
        _react.createElement(
          'strong',
          null,
          'success'
        ),
        ' message.'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Message || _load_Message()).Message,
        { type: (_Message || _load_Message()).MessageTypes.warning },
        'Hello I\'m a ',
        _react.createElement(
          'strong',
          null,
          'warning'
        ),
        ' message.'
      )
    ),
    _react.createElement(
      (_Block || _load_Block()).Block,
      null,
      _react.createElement(
        (_Message || _load_Message()).Message,
        { type: (_Message || _load_Message()).MessageTypes.error },
        'Hello I\'m an ',
        _react.createElement(
          'strong',
          null,
          'error'
        ),
        ' message.'
      )
    )
  );
};

const MessageExamples = exports.MessageExamples = (cov_oj6jgfq3u.s[2]++, {
  sectionName: 'Messages',
  description: 'Message boxes are used to surface issues, such as warnings, inline within Nuclide.',
  examples: [{
    title: 'Basic Messages',
    component: MessageExample
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1lc3NhZ2UuZXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlRXhhbXBsZSIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImVycm9yIiwiTWVzc2FnZUV4YW1wbGVzIiwic2VjdGlvbk5hbWUiLCJkZXNjcmlwdGlvbiIsImV4YW1wbGVzIiwidGl0bGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7OztBQUNBO0FBQUE7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTs7OztzQkFkQTs7Ozs7Ozs7Ozs7O0FBZ0JBLE1BQU1BLGlCQUFpQixNQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUFBO0FBREYsS0FERjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFTLE1BQU0sMkNBQWFDLElBQTVCO0FBQUE7QUFDZTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRGY7QUFBQTtBQUFBO0FBREYsS0FQRjtBQVlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFTLE1BQU0sMkNBQWFDLE9BQTVCO0FBQUE7QUFDYztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRGQ7QUFBQTtBQUFBO0FBREYsS0FaRjtBQWlCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBUyxNQUFNLDJDQUFhQyxPQUE1QjtBQUFBO0FBQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURkO0FBQUE7QUFBQTtBQURGLEtBakJGO0FBc0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFTLE1BQU0sMkNBQWFDLEtBQTVCO0FBQUE7QUFDZTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRGY7QUFBQTtBQUFBO0FBREY7QUF0QkY7QUEyQk0sQ0E1QlI7O0FBK0JPLE1BQU1DLG1FQUFrQjtBQUM3QkMsZUFBYSxVQURnQjtBQUU3QkMsZUFDRSxvRkFIMkI7QUFJN0JDLFlBQVUsQ0FDUjtBQUNFQyxXQUFPLGdCQURUO0FBRUVDLGVBQVdWO0FBRmIsR0FEUTtBQUptQixDQUFsQixDQUFOIiwiZmlsZSI6Ik1lc3NhZ2UuZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4vQmxvY2snO1xuaW1wb3J0IHtNZXNzYWdlLCBNZXNzYWdlVHlwZXN9IGZyb20gJy4vTWVzc2FnZSc7XG5cbmNvbnN0IE1lc3NhZ2VFeGFtcGxlID0gKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiA9PiAoXG4gIDxkaXY+XG4gICAgPEJsb2NrPlxuICAgICAgPE1lc3NhZ2U+XG4gICAgICAgIDxoMj5NZXNzYWdlPC9oMj5cbiAgICAgICAgSGVsbG8sIEknbSBhIHNpbXBsZSBtZXNzYWdlLlxuICAgICAgPC9NZXNzYWdlPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPE1lc3NhZ2UgdHlwZT17TWVzc2FnZVR5cGVzLmluZm99PlxuICAgICAgICBIZWxsbyBJJ20gYW4gPHN0cm9uZz5pbmZvPC9zdHJvbmc+IG1lc3NhZ2UuXG4gICAgICA8L01lc3NhZ2U+XG4gICAgPC9CbG9jaz5cbiAgICA8QmxvY2s+XG4gICAgICA8TWVzc2FnZSB0eXBlPXtNZXNzYWdlVHlwZXMuc3VjY2Vzc30+XG4gICAgICAgIEhlbGxvIEknbSBhIDxzdHJvbmc+c3VjY2Vzczwvc3Ryb25nPiBtZXNzYWdlLlxuICAgICAgPC9NZXNzYWdlPlxuICAgIDwvQmxvY2s+XG4gICAgPEJsb2NrPlxuICAgICAgPE1lc3NhZ2UgdHlwZT17TWVzc2FnZVR5cGVzLndhcm5pbmd9PlxuICAgICAgICBIZWxsbyBJJ20gYSA8c3Ryb25nPndhcm5pbmc8L3N0cm9uZz4gbWVzc2FnZS5cbiAgICAgIDwvTWVzc2FnZT5cbiAgICA8L0Jsb2NrPlxuICAgIDxCbG9jaz5cbiAgICAgIDxNZXNzYWdlIHR5cGU9e01lc3NhZ2VUeXBlcy5lcnJvcn0+XG4gICAgICAgIEhlbGxvIEknbSBhbiA8c3Ryb25nPmVycm9yPC9zdHJvbmc+IG1lc3NhZ2UuXG4gICAgICA8L01lc3NhZ2U+XG4gICAgPC9CbG9jaz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZUV4YW1wbGVzID0ge1xuICBzZWN0aW9uTmFtZTogJ01lc3NhZ2VzJyxcbiAgZGVzY3JpcHRpb246XG4gICAgJ01lc3NhZ2UgYm94ZXMgYXJlIHVzZWQgdG8gc3VyZmFjZSBpc3N1ZXMsIHN1Y2ggYXMgd2FybmluZ3MsIGlubGluZSB3aXRoaW4gTnVjbGlkZS4nLFxuICBleGFtcGxlczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQmFzaWMgTWVzc2FnZXMnLFxuICAgICAgY29tcG9uZW50OiBNZXNzYWdlRXhhbXBsZSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==