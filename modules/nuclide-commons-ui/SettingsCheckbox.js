'use strict';

var cov_1rakem9kag = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/SettingsCheckbox.js',
      hash = '96565e37fd78ed9b7d18d2fe561a38fff624fc0a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons-ui/SettingsCheckbox.js',
    statementMap: {
      '0': {
        start: {
          line: 24,
          column: 22
        },
        end: {
          line: 24,
          column: 69
        }
      },
      '1': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 35
        }
      },
      '2': {
        start: {
          line: 29,
          column: 20
        },
        end: {
          line: 29,
          column: 38
        }
      },
      '3': {
        start: {
          line: 30,
          column: 15
        },
        end: {
          line: 30,
          column: 43
        }
      },
      '4': {
        start: {
          line: 31,
          column: 18
        },
        end: {
          line: 31,
          column: 34
        }
      },
      '5': {
        start: {
          line: 32,
          column: 24
        },
        end: {
          line: 32,
          column: 46
        }
      },
      '6': {
        start: {
          line: 33,
          column: 18
        },
        end: {
          line: 33,
          column: 34
        }
      },
      '7': {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 48,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 23,
            column: 18
          },
          end: {
            line: 23,
            column: 19
          }
        },
        loc: {
          start: {
            line: 23,
            column: 47
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 23
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        loc: {
          start: {
            line: 28,
            column: 23
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 28
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
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0
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

var _SettingsUtils;

function _load_SettingsUtils() {
  return _SettingsUtils = require('./SettingsUtils');
}

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class SettingsCheckbox extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._handleChange = event => {
      cov_1rakem9kag.f[0]++;

      const isChecked = (cov_1rakem9kag.s[0]++, event.target.checked);
      cov_1rakem9kag.s[1]++;
      this.props.onChange(isChecked);
    }, _temp;
  }

  render() {
    cov_1rakem9kag.f[1]++;

    const keyPath = (cov_1rakem9kag.s[2]++, this.props.keyPath);
    const id = (cov_1rakem9kag.s[3]++, (0, (_SettingsUtils || _load_SettingsUtils()).normalizeIdentifier)(keyPath));
    const title = (cov_1rakem9kag.s[4]++, this.props.title);
    const description = (cov_1rakem9kag.s[5]++, this.props.description);
    const value = (cov_1rakem9kag.s[6]++, this.props.value);

    cov_1rakem9kag.s[7]++;
    return _react.createElement(
      'div',
      { className: 'checkbox' },
      _react.createElement(
        'label',
        { htmlFor: id },
        _react.createElement('input', {
          checked: value,
          id: id,
          onChange: this._handleChange,
          type: 'checkbox'
        }),
        _react.createElement(
          'div',
          { className: 'setting-title' },
          title
        )
      ),
      _react.createElement(
        'div',
        { className: 'setting-description' },
        description
      )
    );
  }
}
exports.default = SettingsCheckbox; /**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNldHRpbmdzQ2hlY2tib3guanMiXSwibmFtZXMiOlsiU2V0dGluZ3NDaGVja2JveCIsIkNvbXBvbmVudCIsIl9oYW5kbGVDaGFuZ2UiLCJldmVudCIsImlzQ2hlY2tlZCIsInRhcmdldCIsImNoZWNrZWQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwicmVuZGVyIiwia2V5UGF0aCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUFBOztBQUNBOzs7O0FBTWUsTUFBTUEsZ0JBQU4sU0FBK0IsT0FBTUMsU0FBckMsQ0FBc0Q7QUFBQTtBQUFBOztBQUFBLHdDQUNuRUMsYUFEbUUsR0FDbERDLEtBQUQsSUFBNkI7QUFBQTs7QUFDM0MsWUFBTUMsb0NBQWNELE1BQU1FLE1BQVIsQ0FBd0NDLE9BQXBELENBQU47QUFEMkM7QUFFM0MsV0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CSixTQUFwQjtBQUNELEtBSmtFO0FBQUE7O0FBTW5FSyxXQUFxQjtBQUFBOztBQUNuQixVQUFNQyxrQ0FBVSxLQUFLSCxLQUFMLENBQVdHLE9BQXJCLENBQU47QUFDQSxVQUFNQyw2QkFBSyxtRUFBb0JELE9BQXBCLENBQUwsQ0FBTjtBQUNBLFVBQU1FLGdDQUFRLEtBQUtMLEtBQUwsQ0FBV0ssS0FBbkIsQ0FBTjtBQUNBLFVBQU1DLHNDQUFjLEtBQUtOLEtBQUwsQ0FBV00sV0FBekIsQ0FBTjtBQUNBLFVBQU1DLGdDQUFRLEtBQUtQLEtBQUwsQ0FBV08sS0FBbkIsQ0FBTjs7QUFMbUI7QUFPbkIsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTyxTQUFTSCxFQUFoQjtBQUNFO0FBQ0UsbUJBQVNHLEtBRFg7QUFFRSxjQUFJSCxFQUZOO0FBR0Usb0JBQVUsS0FBS1QsYUFIakI7QUFJRSxnQkFBSztBQUpQLFVBREY7QUFPRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGVBQWY7QUFBZ0NVO0FBQWhDO0FBUEYsT0FERjtBQVVFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFBc0NDO0FBQXRDO0FBVkYsS0FERjtBQWNEO0FBM0JrRTtrQkFBaERiLGdCLEVBckJyQiIsImZpbGUiOiJTZXR0aW5nc0NoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IHR5cGUge1NldHRpbmdzUHJvcHNEZWZhdWx0fSBmcm9tICcuL1NldHRpbmdzVXRpbHMnO1xuXG5pbXBvcnQge25vcm1hbGl6ZUlkZW50aWZpZXJ9IGZyb20gJy4vU2V0dGluZ3NVdGlscyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSBTZXR0aW5nc1Byb3BzRGVmYXVsdCAmIHtcbiAgdmFsdWU6IGJvb2xlYW4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc0NoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIF9oYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PD4pID0+IHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSAoKGV2ZW50LnRhcmdldDogYW55KTogSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGlzQ2hlY2tlZCk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0Lk5vZGUge1xuICAgIGNvbnN0IGtleVBhdGggPSB0aGlzLnByb3BzLmtleVBhdGg7XG4gICAgY29uc3QgaWQgPSBub3JtYWxpemVJZGVudGlmaWVyKGtleVBhdGgpO1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMucHJvcHMuZGVzY3JpcHRpb247XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlfVxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==