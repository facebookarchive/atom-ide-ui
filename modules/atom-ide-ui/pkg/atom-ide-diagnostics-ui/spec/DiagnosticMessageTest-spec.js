'use strict';

var cov_2d77btbl1i = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/spec/DiagnosticMessageTest-spec.js',
      hash = 'e4bf6a14aa1ebef8b9c0860aa99f949be1229b77',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-diagnostics-ui/spec/DiagnosticMessageTest-spec.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 65,
          column: 3
        }
      },
      '1': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 5
        }
      },
      '2': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 75
        }
      },
      '3': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 26,
          column: 5
        }
      },
      '4': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 25,
          column: 7
        }
      },
      '5': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 40,
          column: 5
        }
      },
      '6': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 39,
          column: 7
        }
      },
      '7': {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 48,
          column: 5
        }
      },
      '8': {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 47,
          column: 7
        }
      },
      '9': {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 56,
          column: 5
        }
      },
      '10': {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 55,
          column: 7
        }
      },
      '11': {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 64,
          column: 5
        }
      },
      '12': {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 63,
          column: 7
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 15,
            column: 35
          },
          end: {
            line: 15,
            column: 36
          }
        },
        loc: {
          start: {
            line: 15,
            column: 41
          },
          end: {
            line: 65,
            column: 1
          }
        },
        line: 15
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 16,
            column: 36
          },
          end: {
            line: 16,
            column: 37
          }
        },
        loc: {
          start: {
            line: 16,
            column: 42
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 34
          }
        },
        loc: {
          start: {
            line: 20,
            column: 39
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 20
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 28,
            column: 29
          },
          end: {
            line: 28,
            column: 30
          }
        },
        loc: {
          start: {
            line: 28,
            column: 35
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 28
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 42,
            column: 44
          },
          end: {
            line: 42,
            column: 45
          }
        },
        loc: {
          start: {
            line: 42,
            column: 50
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 42
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 50,
            column: 38
          },
          end: {
            line: 50,
            column: 39
          }
        },
        loc: {
          start: {
            line: 50,
            column: 44
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 50
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 58,
            column: 52
          },
          end: {
            line: 58,
            column: 53
          }
        },
        loc: {
          start: {
            line: 58,
            column: 58
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 58
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
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
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

var _DiagnosticsMessageText;

function _load_DiagnosticsMessageText() {
  return _DiagnosticsMessageText = require('../lib/ui/DiagnosticsMessageText');
}

cov_2d77btbl1i.s[0]++; /**
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

describe('DiagnosticsMessageText', () => {
  cov_2d77btbl1i.f[0]++;
  cov_2d77btbl1i.s[1]++;

  it('should leave text unchanged', () => {
    cov_2d77btbl1i.f[1]++;
    cov_2d77btbl1i.s[2]++;

    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('hello')).toEqual([{ isUrl: false, text: 'hello' }]);
  });

  cov_2d77btbl1i.s[3]++;
  it('should handle a lone URL', () => {
    cov_2d77btbl1i.f[2]++;
    cov_2d77btbl1i.s[4]++;

    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('http://example.com')).toEqual([{ isUrl: false, text: '' }, { isUrl: true, url: 'http://example.com' }, { isUrl: false, text: '' }]);
  });

  cov_2d77btbl1i.s[5]++;
  it('should separate URLs', () => {
    cov_2d77btbl1i.f[3]++;
    cov_2d77btbl1i.s[6]++;

    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('foo https://example.com/short-link bar https://example.com/abc_def0 baz')).toEqual([{ isUrl: false, text: 'foo ' }, { isUrl: true, url: 'https://example.com/short-link' }, { isUrl: false, text: ' bar ' }, { isUrl: true, url: 'https://example.com/abc_def0' }, { isUrl: false, text: ' baz' }]);
  });

  cov_2d77btbl1i.s[7]++;
  it('should handle URLs at the beginning', () => {
    cov_2d77btbl1i.f[4]++;
    cov_2d77btbl1i.s[8]++;

    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('https://example.com/123 end')).toEqual([{ isUrl: false, text: '' }, { isUrl: true, url: 'https://example.com/123' }, { isUrl: false, text: ' end' }]);
  });

  cov_2d77btbl1i.s[9]++;
  it('should handle URLs at the end', () => {
    cov_2d77btbl1i.f[5]++;
    cov_2d77btbl1i.s[10]++;

    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('beginning https://example.com/foo.html')).toEqual([{ isUrl: false, text: 'beginning ' }, { isUrl: true, url: 'https://example.com/foo.html' }, { isUrl: false, text: '' }]);
  });

  cov_2d77btbl1i.s[11]++;
  it('should not include trailing periods in URLs', () => {
    cov_2d77btbl1i.f[6]++;
    cov_2d77btbl1i.s[12]++;

    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('hello https://example.com/short-link.')).toEqual([{ isUrl: false, text: 'hello ' }, { isUrl: true, url: 'https://example.com/short-link' }, { isUrl: false, text: '.' }]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpYWdub3N0aWNNZXNzYWdlVGVzdC1zcGVjLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJleHBlY3QiLCJ0b0VxdWFsIiwiaXNVcmwiLCJ0ZXh0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUFBO0FBQUE7O3VCQVpBOzs7Ozs7Ozs7Ozs7QUFjQUEsU0FBUyx3QkFBVCxFQUFtQyxNQUFNO0FBQUE7QUFBQTs7QUFDdkNDLEtBQUcsNkJBQUgsRUFBa0MsTUFBTTtBQUFBO0FBQUE7O0FBQ3RDQyxXQUFPLDhFQUFhLE9BQWIsQ0FBUCxFQUE4QkMsT0FBOUIsQ0FBc0MsQ0FBQyxFQUFDQyxPQUFPLEtBQVIsRUFBZUMsTUFBTSxPQUFyQixFQUFELENBQXRDO0FBQ0QsR0FGRDs7QUFEdUM7QUFLdkNKLEtBQUcsMEJBQUgsRUFBK0IsTUFBTTtBQUFBO0FBQUE7O0FBQ25DQyxXQUFPLDhFQUFhLG9CQUFiLENBQVAsRUFBMkNDLE9BQTNDLENBQW1ELENBQ2pELEVBQUNDLE9BQU8sS0FBUixFQUFlQyxNQUFNLEVBQXJCLEVBRGlELEVBRWpELEVBQUNELE9BQU8sSUFBUixFQUFjRSxLQUFLLG9CQUFuQixFQUZpRCxFQUdqRCxFQUFDRixPQUFPLEtBQVIsRUFBZUMsTUFBTSxFQUFyQixFQUhpRCxDQUFuRDtBQUtELEdBTkQ7O0FBTHVDO0FBYXZDSixLQUFHLHNCQUFILEVBQTJCLE1BQU07QUFBQTtBQUFBOztBQUMvQkMsV0FDRSw4RUFDRSx5RUFERixDQURGLEVBSUVDLE9BSkYsQ0FJVSxDQUNSLEVBQUNDLE9BQU8sS0FBUixFQUFlQyxNQUFNLE1BQXJCLEVBRFEsRUFFUixFQUFDRCxPQUFPLElBQVIsRUFBY0UsS0FBSyxnQ0FBbkIsRUFGUSxFQUdSLEVBQUNGLE9BQU8sS0FBUixFQUFlQyxNQUFNLE9BQXJCLEVBSFEsRUFJUixFQUFDRCxPQUFPLElBQVIsRUFBY0UsS0FBSyw4QkFBbkIsRUFKUSxFQUtSLEVBQUNGLE9BQU8sS0FBUixFQUFlQyxNQUFNLE1BQXJCLEVBTFEsQ0FKVjtBQVdELEdBWkQ7O0FBYnVDO0FBMkJ2Q0osS0FBRyxxQ0FBSCxFQUEwQyxNQUFNO0FBQUE7QUFBQTs7QUFDOUNDLFdBQU8sOEVBQWEsNkJBQWIsQ0FBUCxFQUFvREMsT0FBcEQsQ0FBNEQsQ0FDMUQsRUFBQ0MsT0FBTyxLQUFSLEVBQWVDLE1BQU0sRUFBckIsRUFEMEQsRUFFMUQsRUFBQ0QsT0FBTyxJQUFSLEVBQWNFLEtBQUsseUJBQW5CLEVBRjBELEVBRzFELEVBQUNGLE9BQU8sS0FBUixFQUFlQyxNQUFNLE1BQXJCLEVBSDBELENBQTVEO0FBS0QsR0FORDs7QUEzQnVDO0FBbUN2Q0osS0FBRywrQkFBSCxFQUFvQyxNQUFNO0FBQUE7QUFBQTs7QUFDeENDLFdBQU8sOEVBQWEsd0NBQWIsQ0FBUCxFQUErREMsT0FBL0QsQ0FBdUUsQ0FDckUsRUFBQ0MsT0FBTyxLQUFSLEVBQWVDLE1BQU0sWUFBckIsRUFEcUUsRUFFckUsRUFBQ0QsT0FBTyxJQUFSLEVBQWNFLEtBQUssOEJBQW5CLEVBRnFFLEVBR3JFLEVBQUNGLE9BQU8sS0FBUixFQUFlQyxNQUFNLEVBQXJCLEVBSHFFLENBQXZFO0FBS0QsR0FORDs7QUFuQ3VDO0FBMkN2Q0osS0FBRyw2Q0FBSCxFQUFrRCxNQUFNO0FBQUE7QUFBQTs7QUFDdERDLFdBQU8sOEVBQWEsdUNBQWIsQ0FBUCxFQUE4REMsT0FBOUQsQ0FBc0UsQ0FDcEUsRUFBQ0MsT0FBTyxLQUFSLEVBQWVDLE1BQU0sUUFBckIsRUFEb0UsRUFFcEUsRUFBQ0QsT0FBTyxJQUFSLEVBQWNFLEtBQUssZ0NBQW5CLEVBRm9FLEVBR3BFLEVBQUNGLE9BQU8sS0FBUixFQUFlQyxNQUFNLEdBQXJCLEVBSG9FLENBQXRFO0FBS0QsR0FORDtBQU9ELENBbEREIiwiZmlsZSI6IkRpYWdub3N0aWNNZXNzYWdlVGVzdC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IHtzZXBhcmF0ZVVybHN9IGZyb20gJy4uL2xpYi91aS9EaWFnbm9zdGljc01lc3NhZ2VUZXh0JztcblxuZGVzY3JpYmUoJ0RpYWdub3N0aWNzTWVzc2FnZVRleHQnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgbGVhdmUgdGV4dCB1bmNoYW5nZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHNlcGFyYXRlVXJscygnaGVsbG8nKSkudG9FcXVhbChbe2lzVXJsOiBmYWxzZSwgdGV4dDogJ2hlbGxvJ31dKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBoYW5kbGUgYSBsb25lIFVSTCcsICgpID0+IHtcbiAgICBleHBlY3Qoc2VwYXJhdGVVcmxzKCdodHRwOi8vZXhhbXBsZS5jb20nKSkudG9FcXVhbChbXG4gICAgICB7aXNVcmw6IGZhbHNlLCB0ZXh0OiAnJ30sXG4gICAgICB7aXNVcmw6IHRydWUsIHVybDogJ2h0dHA6Ly9leGFtcGxlLmNvbSd9LFxuICAgICAge2lzVXJsOiBmYWxzZSwgdGV4dDogJyd9LFxuICAgIF0pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHNlcGFyYXRlIFVSTHMnLCAoKSA9PiB7XG4gICAgZXhwZWN0KFxuICAgICAgc2VwYXJhdGVVcmxzKFxuICAgICAgICAnZm9vIGh0dHBzOi8vZXhhbXBsZS5jb20vc2hvcnQtbGluayBiYXIgaHR0cHM6Ly9leGFtcGxlLmNvbS9hYmNfZGVmMCBiYXonLFxuICAgICAgKSxcbiAgICApLnRvRXF1YWwoW1xuICAgICAge2lzVXJsOiBmYWxzZSwgdGV4dDogJ2ZvbyAnfSxcbiAgICAgIHtpc1VybDogdHJ1ZSwgdXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9zaG9ydC1saW5rJ30sXG4gICAgICB7aXNVcmw6IGZhbHNlLCB0ZXh0OiAnIGJhciAnfSxcbiAgICAgIHtpc1VybDogdHJ1ZSwgdXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9hYmNfZGVmMCd9LFxuICAgICAge2lzVXJsOiBmYWxzZSwgdGV4dDogJyBiYXonfSxcbiAgICBdKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBoYW5kbGUgVVJMcyBhdCB0aGUgYmVnaW5uaW5nJywgKCkgPT4ge1xuICAgIGV4cGVjdChzZXBhcmF0ZVVybHMoJ2h0dHBzOi8vZXhhbXBsZS5jb20vMTIzIGVuZCcpKS50b0VxdWFsKFtcbiAgICAgIHtpc1VybDogZmFsc2UsIHRleHQ6ICcnfSxcbiAgICAgIHtpc1VybDogdHJ1ZSwgdXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS8xMjMnfSxcbiAgICAgIHtpc1VybDogZmFsc2UsIHRleHQ6ICcgZW5kJ30sXG4gICAgXSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgaGFuZGxlIFVSTHMgYXQgdGhlIGVuZCcsICgpID0+IHtcbiAgICBleHBlY3Qoc2VwYXJhdGVVcmxzKCdiZWdpbm5pbmcgaHR0cHM6Ly9leGFtcGxlLmNvbS9mb28uaHRtbCcpKS50b0VxdWFsKFtcbiAgICAgIHtpc1VybDogZmFsc2UsIHRleHQ6ICdiZWdpbm5pbmcgJ30sXG4gICAgICB7aXNVcmw6IHRydWUsIHVybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vZm9vLmh0bWwnfSxcbiAgICAgIHtpc1VybDogZmFsc2UsIHRleHQ6ICcnfSxcbiAgICBdKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgaW5jbHVkZSB0cmFpbGluZyBwZXJpb2RzIGluIFVSTHMnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHNlcGFyYXRlVXJscygnaGVsbG8gaHR0cHM6Ly9leGFtcGxlLmNvbS9zaG9ydC1saW5rLicpKS50b0VxdWFsKFtcbiAgICAgIHtpc1VybDogZmFsc2UsIHRleHQ6ICdoZWxsbyAnfSxcbiAgICAgIHtpc1VybDogdHJ1ZSwgdXJsOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9zaG9ydC1saW5rJ30sXG4gICAgICB7aXNVcmw6IGZhbHNlLCB0ZXh0OiAnLid9LFxuICAgIF0pO1xuICB9KTtcbn0pO1xuIl19