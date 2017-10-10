'use strict';

var cov_27gx4el4oc = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Message.js',
      hash = 'ee7e20c11ff422625c02fbf4730af3078d4b7593',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/Message.js',
    statementMap: {
      '0': {
        start: {
          line: 24,
          column: 28
        },
        end: {
          line: 30,
          column: 2
        }
      },
      '1': {
        start: {
          line: 32,
          column: 30
        },
        end: {
          line: 38,
          column: 2
        }
      },
      '2': {
        start: {
          line: 40,
          column: 23
        },
        end: {
          line: 49,
          column: 1
        }
      },
      '3': {
        start: {
          line: 41,
          column: 38
        },
        end: {
          line: 41,
          column: 43
        }
      },
      '4': {
        start: {
          line: 42,
          column: 23
        },
        end: {
          line: 42,
          column: 65
        }
      },
      '5': {
        start: {
          line: 43,
          column: 23
        },
        end: {
          line: 47,
          column: 3
        }
      },
      '6': {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 56
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 40,
            column: 23
          },
          end: {
            line: 40,
            column: 24
          }
        },
        loc: {
          start: {
            line: 40,
            column: 41
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 40
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 42,
            column: 23
          },
          end: {
            line: 42,
            column: 65
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 42,
            column: 38
          },
          end: {
            line: 42,
            column: 58
          }
        }, {
          start: {
            line: 42,
            column: 61
          },
          end: {
            line: 42,
            column: 65
          }
        }],
        line: 42
      }
    },
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.MessageTypes = undefined;

var _classnames;

function _load_classnames() {
  return _classnames = _interopRequireDefault(require('classnames'));
}

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

const MessageTypes = exports.MessageTypes = (cov_27gx4el4oc.s[0]++, Object.freeze({
  default: 'default',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error'
}));

const MessageTypeClassNames = (cov_27gx4el4oc.s[1]++, Object.freeze({
  default: 'nuclide-ui-message-default',
  error: 'nuclide-ui-message-error',
  info: 'nuclide-ui-message-info',
  success: 'nuclide-ui-message-success',
  warning: 'nuclide-ui-message-warning'
}));

cov_27gx4el4oc.s[2]++;
const Message = exports.Message = props => {
  cov_27gx4el4oc.f[0]++;

  const { className, children, type } = (cov_27gx4el4oc.s[3]++, props);
  const resolvedType = (cov_27gx4el4oc.s[4]++, type == null ? (cov_27gx4el4oc.b[0][0]++, MessageTypes.default) : (cov_27gx4el4oc.b[0][1]++, type));
  const newClassName = (cov_27gx4el4oc.s[5]++, (0, (_classnames || _load_classnames()).default)(className, 'nuclide-ui-message', MessageTypeClassNames[resolvedType]));
  cov_27gx4el4oc.s[6]++;
  return _react.createElement(
    'div',
    { className: newClassName },
    children
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZVR5cGVzIiwiT2JqZWN0IiwiZnJlZXplIiwiZGVmYXVsdCIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImVycm9yIiwiTWVzc2FnZVR5cGVDbGFzc05hbWVzIiwiTWVzc2FnZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJ0eXBlIiwicmVzb2x2ZWRUeXBlIiwibmV3Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTs7QUFDQTs7Ozs7O0FBYkE7Ozs7Ozs7Ozs7OztBQXVCTyxNQUFNQSw4REFBZUMsT0FBT0MsTUFBUCxDQUFjO0FBQ3hDQyxXQUFTLFNBRCtCO0FBRXhDQyxRQUFNLE1BRmtDO0FBR3hDQyxXQUFTLFNBSCtCO0FBSXhDQyxXQUFTLFNBSitCO0FBS3hDQyxTQUFPO0FBTGlDLENBQWQsQ0FBZixDQUFOOztBQVFQLE1BQU1DLGdEQUF3QlAsT0FBT0MsTUFBUCxDQUFjO0FBQzFDQyxXQUFTLDRCQURpQztBQUUxQ0ksU0FBTywwQkFGbUM7QUFHMUNILFFBQU0seUJBSG9DO0FBSTFDQyxXQUFTLDRCQUppQztBQUsxQ0MsV0FBUztBQUxpQyxDQUFkLENBQXhCLENBQU47OztBQVFPLE1BQU1HLDRCQUFXQyxLQUFELElBQWtCO0FBQUE7O0FBQ3ZDLFFBQU0sRUFBQ0MsU0FBRCxFQUFZQyxRQUFaLEVBQXNCQyxJQUF0Qiw2QkFBOEJILEtBQTlCLENBQU47QUFDQSxRQUFNSSx1Q0FBZUQsUUFBUSxJQUFSLDhCQUFlYixhQUFhRyxPQUE1QiwrQkFBc0NVLElBQXRDLENBQWYsQ0FBTjtBQUNBLFFBQU1FLHVDQUFlLGlEQUNuQkosU0FEbUIsRUFFbkIsb0JBRm1CLEVBR25CSCxzQkFBc0JNLFlBQXRCLENBSG1CLENBQWYsQ0FBTjtBQUh1QztBQVF2QyxTQUFPO0FBQUE7QUFBQSxNQUFLLFdBQVdDLFlBQWhCO0FBQStCSDtBQUEvQixHQUFQO0FBQ0QsQ0FUTSIsImZpbGUiOiJNZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgTWVzc2FnZVR5cGUgPSAnZGVmYXVsdCcgfCAnaW5mbycgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InO1xuXG50eXBlIFByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgdHlwZT86IE1lc3NhZ2VUeXBlLFxufTtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VUeXBlcyA9IE9iamVjdC5mcmVlemUoe1xuICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gIGluZm86ICdpbmZvJyxcbiAgc3VjY2VzczogJ3N1Y2Nlc3MnLFxuICB3YXJuaW5nOiAnd2FybmluZycsXG4gIGVycm9yOiAnZXJyb3InLFxufSk7XG5cbmNvbnN0IE1lc3NhZ2VUeXBlQ2xhc3NOYW1lcyA9IE9iamVjdC5mcmVlemUoe1xuICBkZWZhdWx0OiAnbnVjbGlkZS11aS1tZXNzYWdlLWRlZmF1bHQnLFxuICBlcnJvcjogJ251Y2xpZGUtdWktbWVzc2FnZS1lcnJvcicsXG4gIGluZm86ICdudWNsaWRlLXVpLW1lc3NhZ2UtaW5mbycsXG4gIHN1Y2Nlc3M6ICdudWNsaWRlLXVpLW1lc3NhZ2Utc3VjY2VzcycsXG4gIHdhcm5pbmc6ICdudWNsaWRlLXVpLW1lc3NhZ2Utd2FybmluZycsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCB0eXBlfSA9IHByb3BzO1xuICBjb25zdCByZXNvbHZlZFR5cGUgPSB0eXBlID09IG51bGwgPyBNZXNzYWdlVHlwZXMuZGVmYXVsdCA6IHR5cGU7XG4gIGNvbnN0IG5ld0NsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgICdudWNsaWRlLXVpLW1lc3NhZ2UnLFxuICAgIE1lc3NhZ2VUeXBlQ2xhc3NOYW1lc1tyZXNvbHZlZFR5cGVdLFxuICApO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e25ld0NsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG4iXX0=