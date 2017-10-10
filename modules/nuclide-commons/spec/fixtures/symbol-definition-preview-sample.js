"use strict";

var cov_1790zbkih9 = function () {
  var path = "/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/fixtures/symbol-definition-preview-sample.js",
      hash = "4b487d35ae3e627288070c97255fcd74a88a70a7",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hansonw/atom-ide-ui/modules/nuclide-commons/spec/fixtures/symbol-definition-preview-sample.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 12,
          column: 21
        }
      },
      "1": {
        start: {
          line: 13,
          column: 28
        },
        end: {
          line: 13,
          column: 30
        }
      },
      "2": {
        start: {
          line: 16,
          column: 26
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "3": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 42
        }
      },
      "4": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 12
        }
      },
      "5": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 12
        }
      },
      "6": {
        start: {
          line: 50,
          column: 31
        },
        end: {
          line: 50,
          column: 35
        }
      },
      "7": {
        start: {
          line: 51,
          column: 0
        },
        end: {
          line: 51,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "aSingleLineFunctionSignature",
        decl: {
          start: {
            line: 27,
            column: 16
          },
          end: {
            line: 27,
            column: 44
          }
        },
        loc: {
          start: {
            line: 27,
            column: 47
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 27
      },
      "1": {
        name: "aMultiLineFunctionSignature",
        decl: {
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 31,
            column: 43
          }
        },
        loc: {
          start: {
            line: 33,
            column: 10
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 33
      },
      "2": {
        name: "aPoorlyIndentedFunction",
        decl: {
          start: {
            line: 37,
            column: 18
          },
          end: {
            line: 37,
            column: 41
          }
        },
        loc: {
          start: {
            line: 39,
            column: 10
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 39
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
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
exports.aSingleLineFunctionSignature = aSingleLineFunctionSignature;
exports.aMultiLineFunctionSignature = aMultiLineFunctionSignature;
exports.aPoorlyIndentedFunction = aPoorlyIndentedFunction;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 */
// license header above without @format
// eslint-disable-next-line
const A_CONSTANT = (cov_1790zbkih9.s[0]++, 42);
const SOME_OTHER_CONSTANT = (cov_1790zbkih9.s[1]++, 24);

// eslint-disable-next-line
const A_MULTILINE_CONST = (cov_1790zbkih9.s[2]++, `
  hey look I span
    multiple
      lines
`);

function aSingleLineFunctionSignature() {
  cov_1790zbkih9.f[0]++;
  cov_1790zbkih9.s[3]++;

  return A_CONSTANT + SOME_OTHER_CONSTANT;
}

function aMultiLineFunctionSignature(aReallyReallyLongArgumentNameThatWouldRequireThisToBreakAcrossMultipleLines) {
  cov_1790zbkih9.f[1]++;
  cov_1790zbkih9.s[4]++;

  return 97;
}

function aPoorlyIndentedFunction(aReallyReallyLongArgumentNameThatWouldRequireThisToBreakAcrossMultipleLines) {
  cov_1790zbkih9.f[2]++;
  cov_1790zbkih9.s[5]++;

  return 97;
}

const foo = (cov_1790zbkih9.s[6]++, null);
cov_1790zbkih9.s[7]++;
foo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bWJvbC1kZWZpbml0aW9uLXByZXZpZXctc2FtcGxlLmpzIl0sIm5hbWVzIjpbImFTaW5nbGVMaW5lRnVuY3Rpb25TaWduYXR1cmUiLCJhTXVsdGlMaW5lRnVuY3Rpb25TaWduYXR1cmUiLCJhUG9vcmx5SW5kZW50ZWRGdW5jdGlvbiIsIkFfQ09OU1RBTlQiLCJTT01FX09USEVSX0NPTlNUQU5UIiwiQV9NVUxUSUxJTkVfQ09OU1QiLCJhUmVhbGx5UmVhbGx5TG9uZ0FyZ3VtZW50TmFtZVRoYXRXb3VsZFJlcXVpcmVUaGlzVG9CcmVha0Fjcm9zc011bHRpcGxlTGluZXMiLCJmb28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMEJnQkEsNEIsR0FBQUEsNEI7UUFJQUMsMkIsR0FBQUEsMkI7UUFNRUMsdUIsR0FBQUEsdUI7QUFwQ2xCOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0EsTUFBTUMscUNBQWEsRUFBYixDQUFOO0FBQ0EsTUFBTUMsOENBQXNCLEVBQXRCLENBQU47O0FBRUE7QUFDQSxNQUFNQyw0Q0FBcUI7Ozs7Q0FBckIsQ0FBTjs7QUFXTyxTQUFTTCw0QkFBVCxHQUF3QztBQUFBO0FBQUE7O0FBQzdDLFNBQU9HLGFBQWFDLG1CQUFwQjtBQUNEOztBQUVNLFNBQVNILDJCQUFULENBQ0xLLDJFQURLLEVBRUc7QUFBQTtBQUFBOztBQUNSLFNBQU8sRUFBUDtBQUNEOztBQUVRLFNBQVNKLHVCQUFULENBQ1RJLDJFQURTLEVBRUM7QUFBQTtBQUFBOztBQUNSLFNBQU8sRUFBUDtBQUNEOztBQVNELE1BQU1DLDhCQUF5QixJQUF6QixDQUFOOztBQUNBQSIsImZpbGUiOiJzeW1ib2wtZGVmaW5pdGlvbi1wcmV2aWV3LXNhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpblxuICogdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuLy8gbGljZW5zZSBoZWFkZXIgYWJvdmUgd2l0aG91dCBAZm9ybWF0XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IEFfQ09OU1RBTlQgPSA0MjtcbmNvbnN0IFNPTUVfT1RIRVJfQ09OU1RBTlQgPSAyNDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBBX01VTFRJTElORV9DT05TVCA9IGBcbiAgaGV5IGxvb2sgSSBzcGFuXG4gICAgbXVsdGlwbGVcbiAgICAgIGxpbmVzXG5gO1xuXG50eXBlIFNvbWV0aGluZyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBhZ2U/OiBudW1iZXIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYVNpbmdsZUxpbmVGdW5jdGlvblNpZ25hdHVyZSgpIHtcbiAgcmV0dXJuIEFfQ09OU1RBTlQgKyBTT01FX09USEVSX0NPTlNUQU5UO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYU11bHRpTGluZUZ1bmN0aW9uU2lnbmF0dXJlKFxuICBhUmVhbGx5UmVhbGx5TG9uZ0FyZ3VtZW50TmFtZVRoYXRXb3VsZFJlcXVpcmVUaGlzVG9CcmVha0Fjcm9zc011bHRpcGxlTGluZXM6IFNvbWV0aGluZyxcbik6IG51bWJlciB7XG4gIHJldHVybiA5Nztcbn1cblxuICBleHBvcnQgZnVuY3Rpb24gYVBvb3JseUluZGVudGVkRnVuY3Rpb24oXG5hUmVhbGx5UmVhbGx5TG9uZ0FyZ3VtZW50TmFtZVRoYXRXb3VsZFJlcXVpcmVUaGlzVG9CcmVha0Fjcm9zc011bHRpcGxlTGluZXM6IFNvbWV0aGluZyxcbik6IG51bWJlciB7XG4gIHJldHVybiA5Nztcbn1cblxudHlwZSBTb21ldGhpbmdDb21wbGV4ID0ge1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGFnZT86IG51bWJlcixcbiAgfSxcbn07XG5cbmNvbnN0IGZvbzogP1NvbWV0aGluZ0NvbXBsZXggPSBudWxsO1xuZm9vO1xuIl19