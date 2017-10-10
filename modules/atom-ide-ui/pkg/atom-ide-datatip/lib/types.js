'use strict';

var cov_21bej7bl19 = function () {
  var path = '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/types.js',
      hash = '538e9a43fe9ecfea48f3f389af645c449e6b61e8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/hansonw/atom-ide-ui/modules/atom-ide-ui/pkg/atom-ide-datatip/lib/types.js',
    statementMap: {
      '0': {
        start: {
          line: 86,
          column: 28
        },
        end: {
          line: 91,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
    },
    f: {},
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

/**
 * Consumers of the "datatip" service get an instance of this service.
 * You can register providers (which will be triggered on mouseover) or manually
 * create pinned datatips on-demand.
 */
const ModifierKeys = exports.ModifierKeys = (cov_21bej7bl19.s[0]++, Object.freeze({
  META: 'metaKey',
  SHIFT: 'shiftKey',
  ALT: 'altKey',
  CTRL: 'ctrlKey'
}));

// Borrowed from the LSP API.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzLmpzIl0sIm5hbWVzIjpbIk1vZGlmaWVyS2V5cyIsIk9iamVjdCIsImZyZWV6ZSIsIk1FVEEiLCJTSElGVCIsIkFMVCIsIkNUUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7O0FBeUVPLE1BQU1BLDhEQUFlQyxPQUFPQyxNQUFQLENBQWM7QUFDeENDLFFBQU0sU0FEa0M7QUFFeENDLFNBQU8sVUFGaUM7QUFHeENDLE9BQUssUUFIbUM7QUFJeENDLFFBQU07QUFKa0MsQ0FBZCxDQUFmLENBQU47O0FBWlAiLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQGZsb3dcbiAqIEBmb3JtYXRcbiAqL1xuXG4vKipcbiAqIENvbnN1bWVycyBvZiB0aGUgXCJkYXRhdGlwXCIgc2VydmljZSBnZXQgYW4gaW5zdGFuY2Ugb2YgdGhpcyBzZXJ2aWNlLlxuICogWW91IGNhbiByZWdpc3RlciBwcm92aWRlcnMgKHdoaWNoIHdpbGwgYmUgdHJpZ2dlcmVkIG9uIG1vdXNlb3Zlcikgb3IgbWFudWFsbHlcbiAqIGNyZWF0ZSBwaW5uZWQgZGF0YXRpcHMgb24tZGVtYW5kLlxuICovXG5leHBvcnQgdHlwZSBEYXRhdGlwU2VydmljZSA9IHtcbiAgYWRkUHJvdmlkZXIocHJvdmlkZXI6IERhdGF0aXBQcm92aWRlcik6IElEaXNwb3NhYmxlLFxuICBhZGRNb2RpZmllclByb3ZpZGVyKHByb3ZpZGVyOiBNb2RpZmllckRhdGF0aXBQcm92aWRlcik6IElEaXNwb3NhYmxlLFxuICBjcmVhdGVQaW5uZWREYXRhVGlwKFxuICAgIGRhdGF0aXA6IERhdGF0aXAsXG4gICAgZWRpdG9yOiBUZXh0RWRpdG9yLFxuICAgIG9wdGlvbnM/OiBQaW5uZWREYXRhdGlwT3B0aW9ucyxcbiAgKTogSURpc3Bvc2FibGUsXG59O1xuXG5leHBvcnQgdHlwZSBQaW5uZWREYXRhdGlwT3B0aW9ucyA9IHt8XG4gIC8vIERlZmF1bHRzIHRvICdlbmQtb2YtbGluZScuXG4gIHBvc2l0aW9uPzogUGlubmVkRGF0YXRpcFBvc2l0aW9uLFxuICAvLyBEZWZhdWx0cyB0byB0cnVlLlxuICBzaG93UmFuZ2VIaWdobGlnaHQ/OiBib29sZWFuLFxufH07XG5cbmV4cG9ydCB0eXBlIFBpbm5lZERhdGF0aXBQb3NpdGlvbiA9ICdlbmQtb2YtbGluZScgfCAnYWJvdmUtcmFuZ2UnO1xuXG5leHBvcnQgdHlwZSBEYXRhdGlwUHJvdmlkZXIgPSB7XG4gIHByaW9yaXR5OiBudW1iZXIsXG4gIGdyYW1tYXJTY29wZXM/OiBBcnJheTxzdHJpbmc+LFxuICAvLyBBIHVuaXF1ZSBuYW1lIGZvciB0aGUgcHJvdmlkZXIgdG8gYmUgdXNlZCBmb3IgYW5hbHl0aWNzLlxuICAvLyBJdCBpcyByZWNvbW1lbmRlZCB0aGF0IGl0IGJlIHRoZSBuYW1lIG9mIHRoZSBwcm92aWRlcidzIHBhY2thZ2UuXG4gIHByb3ZpZGVyTmFtZTogc3RyaW5nLFxuICBkYXRhdGlwKFxuICAgIGVkaXRvcjogYXRvbSRUZXh0RWRpdG9yLFxuICAgIGJ1ZmZlclBvc2l0aW9uOiBhdG9tJFBvaW50LFxuICApOiBQcm9taXNlPD9EYXRhdGlwPixcbn07XG5cbmV4cG9ydCB0eXBlIE1vZGlmaWVyRGF0YXRpcFByb3ZpZGVyID0ge1xuICBwcmlvcml0eTogbnVtYmVyLFxuICBncmFtbWFyU2NvcGVzPzogQXJyYXk8c3RyaW5nPixcbiAgcHJvdmlkZXJOYW1lOiBzdHJpbmcsXG4gIG1vZGlmaWVyRGF0YXRpcChcbiAgICBlZGl0b3I6IGF0b20kVGV4dEVkaXRvcixcbiAgICBidWZmZXJQb3NpdGlvbjogYXRvbSRQb2ludCxcbiAgICBoZWxkS2V5czogU2V0PE1vZGlmaWVyS2V5PixcbiAgKTogUHJvbWlzZTw/RGF0YXRpcD4sXG59O1xuXG5leHBvcnQgdHlwZSBBbnlEYXRhdGlwUHJvdmlkZXIgPSBEYXRhdGlwUHJvdmlkZXIgfCBNb2RpZmllckRhdGF0aXBQcm92aWRlcjtcblxuZXhwb3J0IHR5cGUgRGF0YXRpcCA9XG4gIHwge3xcbiAgICAgIGNvbXBvbmVudDogUmVhY3QkQ29tcG9uZW50VHlwZTxhbnk+LFxuICAgICAgcmFuZ2U6IGF0b20kUmFuZ2UsXG4gICAgICBwaW5uYWJsZT86IGJvb2xlYW4sXG4gICAgfH1cbiAgfCB7fFxuICAgICAgbWFya2VkU3RyaW5nczogQXJyYXk8TWFya2VkU3RyaW5nPixcbiAgICAgIHJhbmdlOiBhdG9tJFJhbmdlLFxuICAgICAgcGlubmFibGU/OiBib29sZWFuLFxuICAgIHx9O1xuXG4vLyBCb3Jyb3dlZCBmcm9tIHRoZSBMU1AgQVBJLlxuZXhwb3J0IHR5cGUgTWFya2VkU3RyaW5nID1cbiAgfCB7XG4gICAgICB0eXBlOiAnbWFya2Rvd24nLFxuICAgICAgdmFsdWU6IHN0cmluZyxcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ3NuaXBwZXQnLFxuICAgICAgZ3JhbW1hcjogYXRvbSRHcmFtbWFyLFxuICAgICAgdmFsdWU6IHN0cmluZyxcbiAgICB9O1xuXG5leHBvcnQgY29uc3QgTW9kaWZpZXJLZXlzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE1FVEE6ICdtZXRhS2V5JyxcbiAgU0hJRlQ6ICdzaGlmdEtleScsXG4gIEFMVDogJ2FsdEtleScsXG4gIENUUkw6ICdjdHJsS2V5Jyxcbn0pO1xuXG5leHBvcnQgdHlwZSBNb2RpZmllcktleSA9ICdtZXRhS2V5JyB8ICdzaGlmdEtleScgfCAnYWx0S2V5JyB8ICdjdHJsS2V5JztcbiJdfQ==