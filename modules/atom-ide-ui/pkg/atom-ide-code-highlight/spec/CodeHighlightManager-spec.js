'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _os = _interopRequireDefault(require('os'));

var _nuclideUri;

function _load_nuclideUri() {
  return _nuclideUri = _interopRequireDefault(require('nuclide-commons/nuclideUri'));
}

var _atom = require('atom');

var _CodeHighlightManager;

function _load_CodeHighlightManager() {
  return _CodeHighlightManager = _interopRequireDefault(require('../lib/CodeHighlightManager'));
}

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

describe('CodeHighlightManager', () => {
  let manager;
  let provider;
  let editor;
  beforeEach(() => {
    jasmine.useMockClock();
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      editor = yield atom.workspace.open((_nuclideUri || _load_nuclideUri()).default.join(_os.default.tmpdir(), 'test.txt'));
      editor.setText('abc\ndef\nghi');

      manager = new (_CodeHighlightManager || _load_CodeHighlightManager()).default();
      provider = {
        priority: 1,
        grammarScopes: ['text.plain.null-grammar'],
        highlight: function (_editor, position) {
          return Promise.resolve([]);
        }
      };
      manager.addProvider(provider);
    }));
  });

  it('updates highlights on cursor move', () => {
    const ranges = [new _atom.Range([0, 0], [0, 3])];
    const spy = spyOn(provider, 'highlight').andReturn(ranges);

    // Just opening the editor should trigger highlights.
    runs(() => {
      advanceClock(1); // editor debounce
      expect(spy).toHaveBeenCalled();
    });

    // (once the promise resolves).
    waitsFor(() => manager._markers.length === 1);

    runs(() => {
      ranges[0] = new _atom.Range([1, 0], [1, 3]);
      editor.setCursorBufferPosition(new _atom.Point(1, 0));
      advanceClock(300); // trigger debounce
      // Old markers should be cleared immediately.
      expect(manager._markers.length).toBe(0);
      expect(spy.callCount).toBe(2);
    });

    waitsFor(() => manager._markers.length === 1);

    // If we're still inside the range, don't fire a new event.
    runs(() => {
      editor.setCursorBufferPosition(new _atom.Point(1, 1));
      expect(spy.callCount).toBe(2);
    });

    waitsForPromise(() => atom.workspace.open((_nuclideUri || _load_nuclideUri()).default.join(_os.default.tmpdir(), 'test2.txt')));

    runs(() => {
      // Opening a new editor should clear out old markers.
      advanceClock(1);
      expect(manager._markers.length).toBe(0);
    });
  });

  it('updates highlights on change', () => {
    const ranges = [new _atom.Range([0, 0], [0, 1])];
    const spy = spyOn(provider, 'highlight').andReturn(ranges);

    runs(() => {
      advanceClock(1);
      editor.insertText('a');
      advanceClock(3000); // trigger typing debounce
      expect(spy).toHaveBeenCalled();
    });

    // Wait for the promise to resolve.
    waitsFor(() => manager._markers.length === 1);

    runs(() => {
      editor.insertText('b');
      // Clear out immediately.
      expect(manager._markers.length).toBe(0);
    });
  });
});