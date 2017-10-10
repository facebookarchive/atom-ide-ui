'use strict';

var cov_10rnirfhk8 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/shell-quote-spec.js',
      hash = 'adcd074a6da8473f7bafc7e26bf4bdea8cc3e2b1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/shell-quote-spec.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 42,
          column: 3
        }
      },
      '1': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 37,
          column: 5
        }
      },
      '2': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 36,
          column: 7
        }
      },
      '3': {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 56
        }
      },
      '4': {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 71
        }
      },
      '5': {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 72
        }
      },
      '6': {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 76
        }
      },
      '7': {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 80
        }
      },
      '8': {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 55
        }
      },
      '9': {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 71
        }
      },
      '10': {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 35,
          column: 9
        }
      },
      '11': {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 41,
          column: 5
        }
      },
      '12': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 75
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 20,
            column: 25
          }
        },
        loc: {
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 20
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 21,
            column: 20
          },
          end: {
            line: 21,
            column: 21
          }
        },
        loc: {
          start: {
            line: 21,
            column: 26
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 21
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 22,
            column: 36
          },
          end: {
            line: 22,
            column: 37
          }
        },
        loc: {
          start: {
            line: 22,
            column: 42
          },
          end: {
            line: 36,
            column: 5
          }
        },
        line: 22
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 39,
            column: 20
          },
          end: {
            line: 39,
            column: 21
          }
        },
        loc: {
          start: {
            line: 39,
            column: 26
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
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
      '3': 0
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

var _shellQuote;

function _load_shellQuote() {
  return _shellQuote = require('../_shell-quote');
}

/**
 * The rest of shell-quote has been verified to work correctly.
 * We just need to test the comment parsing.
 */

cov_10rnirfhk8.s[0]++; /**
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

describe('shell-quote', () => {
  cov_10rnirfhk8.f[0]++;
  cov_10rnirfhk8.s[1]++;

  describe('parse', () => {
    cov_10rnirfhk8.f[1]++;
    cov_10rnirfhk8.s[2]++;

    it('parses comments correctly', () => {
      cov_10rnirfhk8.f[2]++;
      cov_10rnirfhk8.s[3]++;

      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep#boop')).toEqual(['beep#boop']);
      cov_10rnirfhk8.s[4]++;
      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep #boop')).toEqual(['beep', { comment: 'boop' }]);
      cov_10rnirfhk8.s[5]++;
      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep # boop')).toEqual(['beep', { comment: 'boop' }]);
      cov_10rnirfhk8.s[6]++;
      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep # > boop')).toEqual(['beep', { comment: '> boop' }]);
      cov_10rnirfhk8.s[7]++;
      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep # "> boop"')).toEqual(['beep', { comment: '"> boop"' }]);
      cov_10rnirfhk8.s[8]++;
      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep "#"')).toEqual(['beep', '#']);
      cov_10rnirfhk8.s[9]++;
      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep #"#"#')).toEqual(['beep', { comment: '"#"#' }]);
      cov_10rnirfhk8.s[10]++;
      expect((0, (_shellQuote || _load_shellQuote()).parse)('beep > boop # > foo')).toEqual(['beep', { op: '>' }, 'boop', { comment: '> foo' }]);
    });
  });

  cov_10rnirfhk8.s[11]++;
  describe('quote', () => {
    cov_10rnirfhk8.f[3]++;
    cov_10rnirfhk8.s[12]++;

    expect((0, (_shellQuote || _load_shellQuote()).quote)(['X#(){}*|][!'])).toBe('X\\#\\(\\)\\{\\}\\*\\|\\]\\[\\!');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZWxsLXF1b3RlLXNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImV4cGVjdCIsInRvRXF1YWwiLCJjb21tZW50Iiwib3AiLCJ0b0JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUFBO0FBQUE7O0FBRUE7Ozs7O3VCQWRBOzs7Ozs7Ozs7Ozs7QUFtQkFBLFNBQVMsYUFBVCxFQUF3QixNQUFNO0FBQUE7QUFBQTs7QUFDNUJBLFdBQVMsT0FBVCxFQUFrQixNQUFNO0FBQUE7QUFBQTs7QUFDdEJDLE9BQUcsMkJBQUgsRUFBZ0MsTUFBTTtBQUFBO0FBQUE7O0FBQ3BDQyxhQUFPLCtDQUFNLFdBQU4sQ0FBUCxFQUEyQkMsT0FBM0IsQ0FBbUMsQ0FBQyxXQUFELENBQW5DO0FBRG9DO0FBRXBDRCxhQUFPLCtDQUFNLFlBQU4sQ0FBUCxFQUE0QkMsT0FBNUIsQ0FBb0MsQ0FBQyxNQUFELEVBQVMsRUFBQ0MsU0FBUyxNQUFWLEVBQVQsQ0FBcEM7QUFGb0M7QUFHcENGLGFBQU8sK0NBQU0sYUFBTixDQUFQLEVBQTZCQyxPQUE3QixDQUFxQyxDQUFDLE1BQUQsRUFBUyxFQUFDQyxTQUFTLE1BQVYsRUFBVCxDQUFyQztBQUhvQztBQUlwQ0YsYUFBTywrQ0FBTSxlQUFOLENBQVAsRUFBK0JDLE9BQS9CLENBQXVDLENBQUMsTUFBRCxFQUFTLEVBQUNDLFNBQVMsUUFBVixFQUFULENBQXZDO0FBSm9DO0FBS3BDRixhQUFPLCtDQUFNLGlCQUFOLENBQVAsRUFBaUNDLE9BQWpDLENBQXlDLENBQUMsTUFBRCxFQUFTLEVBQUNDLFNBQVMsVUFBVixFQUFULENBQXpDO0FBTG9DO0FBTXBDRixhQUFPLCtDQUFNLFVBQU4sQ0FBUCxFQUEwQkMsT0FBMUIsQ0FBa0MsQ0FBQyxNQUFELEVBQVMsR0FBVCxDQUFsQztBQU5vQztBQU9wQ0QsYUFBTywrQ0FBTSxZQUFOLENBQVAsRUFBNEJDLE9BQTVCLENBQW9DLENBQUMsTUFBRCxFQUFTLEVBQUNDLFNBQVMsTUFBVixFQUFULENBQXBDO0FBUG9DO0FBUXBDRixhQUFPLCtDQUFNLHFCQUFOLENBQVAsRUFBcUNDLE9BQXJDLENBQTZDLENBQzNDLE1BRDJDLEVBRTNDLEVBQUNFLElBQUksR0FBTCxFQUYyQyxFQUczQyxNQUgyQyxFQUkzQyxFQUFDRCxTQUFTLE9BQVYsRUFKMkMsQ0FBN0M7QUFNRCxLQWREO0FBZUQsR0FoQkQ7O0FBRDRCO0FBbUI1QkosV0FBUyxPQUFULEVBQWtCLE1BQU07QUFBQTtBQUFBOztBQUN0QkUsV0FBTywrQ0FBTSxDQUFDLGFBQUQsQ0FBTixDQUFQLEVBQStCSSxJQUEvQixDQUFvQyxpQ0FBcEM7QUFDRCxHQUZEO0FBR0QsQ0F0QkQiLCJmaWxlIjoic2hlbGwtcXVvdGUtc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCB7cGFyc2UsIHF1b3RlfSBmcm9tICcuLi9fc2hlbGwtcXVvdGUnO1xuXG4vKipcbiAqIFRoZSByZXN0IG9mIHNoZWxsLXF1b3RlIGhhcyBiZWVuIHZlcmlmaWVkIHRvIHdvcmsgY29ycmVjdGx5LlxuICogV2UganVzdCBuZWVkIHRvIHRlc3QgdGhlIGNvbW1lbnQgcGFyc2luZy5cbiAqL1xuXG5kZXNjcmliZSgnc2hlbGwtcXVvdGUnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdwYXJzZScsICgpID0+IHtcbiAgICBpdCgncGFyc2VzIGNvbW1lbnRzIGNvcnJlY3RseScsICgpID0+IHtcbiAgICAgIGV4cGVjdChwYXJzZSgnYmVlcCNib29wJykpLnRvRXF1YWwoWydiZWVwI2Jvb3AnXSk7XG4gICAgICBleHBlY3QocGFyc2UoJ2JlZXAgI2Jvb3AnKSkudG9FcXVhbChbJ2JlZXAnLCB7Y29tbWVudDogJ2Jvb3AnfV0pO1xuICAgICAgZXhwZWN0KHBhcnNlKCdiZWVwICMgYm9vcCcpKS50b0VxdWFsKFsnYmVlcCcsIHtjb21tZW50OiAnYm9vcCd9XSk7XG4gICAgICBleHBlY3QocGFyc2UoJ2JlZXAgIyA+IGJvb3AnKSkudG9FcXVhbChbJ2JlZXAnLCB7Y29tbWVudDogJz4gYm9vcCd9XSk7XG4gICAgICBleHBlY3QocGFyc2UoJ2JlZXAgIyBcIj4gYm9vcFwiJykpLnRvRXF1YWwoWydiZWVwJywge2NvbW1lbnQ6ICdcIj4gYm9vcFwiJ31dKTtcbiAgICAgIGV4cGVjdChwYXJzZSgnYmVlcCBcIiNcIicpKS50b0VxdWFsKFsnYmVlcCcsICcjJ10pO1xuICAgICAgZXhwZWN0KHBhcnNlKCdiZWVwICNcIiNcIiMnKSkudG9FcXVhbChbJ2JlZXAnLCB7Y29tbWVudDogJ1wiI1wiIyd9XSk7XG4gICAgICBleHBlY3QocGFyc2UoJ2JlZXAgPiBib29wICMgPiBmb28nKSkudG9FcXVhbChbXG4gICAgICAgICdiZWVwJyxcbiAgICAgICAge29wOiAnPid9LFxuICAgICAgICAnYm9vcCcsXG4gICAgICAgIHtjb21tZW50OiAnPiBmb28nfSxcbiAgICAgIF0pO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgncXVvdGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHF1b3RlKFsnWCMoKXt9KnxdWyEnXSkpLnRvQmUoJ1hcXFxcI1xcXFwoXFxcXClcXFxce1xcXFx9XFxcXCpcXFxcfFxcXFxdXFxcXFtcXFxcIScpO1xuICB9KTtcbn0pO1xuIl19