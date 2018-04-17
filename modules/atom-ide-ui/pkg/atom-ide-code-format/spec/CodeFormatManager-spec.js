'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _atom = require('atom');

var _temp;

function _load_temp() {
  return _temp = _interopRequireDefault(require('temp'));
}

var _config;

function _load_config() {
  return _config = _interopRequireWildcard(require('../lib/config'));
}

var _CodeFormatManager;

function _load_CodeFormatManager() {
  return _CodeFormatManager = _interopRequireDefault(require('../lib/CodeFormatManager'));
}

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

describe('CodeFormatManager', () => {
  let textEditor;
  beforeEach(() => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      (_temp || _load_temp()).default.track();
      const file = (_temp || _load_temp()).default.openSync();
      textEditor = yield atom.workspace.open(file.path);
    }));
  });

  it('formats an editor on request', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const manager = new (_CodeFormatManager || _load_CodeFormatManager()).default();
      manager.addRangeProvider({
        grammarScopes: ['text.plain.null-grammar'],
        priority: 1,
        formatCode: function () {
          return Promise.resolve([{
            oldRange: new _atom.Range([0, 0], [0, 3]),
            oldText: 'abc',
            newText: 'def'
          }]);
        }
      });

      textEditor.setText('abc');
      atom.commands.dispatch(atom.views.getView(textEditor), 'code-format:format-code');
      waitsFor(function () {
        return textEditor.getText() === 'def';
      });
    }));
  });

  it('format an editor using formatEntireFile', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const manager = new (_CodeFormatManager || _load_CodeFormatManager()).default();
      manager.addFileProvider({
        grammarScopes: ['text.plain.null-grammar'],
        priority: 1,
        formatEntireFile: function () {
          return Promise.resolve({ formatted: 'ghi' });
        }
      });

      textEditor.setText('abc');
      atom.commands.dispatch(atom.views.getView(textEditor), 'code-format:format-code');
      waitsFor(function () {
        return textEditor.getText() === 'ghi';
      });
    }));
  });

  it('formats an editor on type', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      spyOn(_config || _load_config(), 'getFormatOnType').andReturn(true);
      const manager = new (_CodeFormatManager || _load_CodeFormatManager()).default();
      const provider = {
        grammarScopes: ['text.plain.null-grammar'],
        priority: 1,
        formatAtPosition: function () {
          return Promise.resolve([{
            oldRange: new _atom.Range([0, 0], [0, 3]),
            oldText: 'abc',
            newText: 'def'
          }]);
        }
      };
      const spy = spyOn(provider, 'formatAtPosition').andCallThrough();
      manager.addOnTypeProvider(provider);

      textEditor.setText('a');
      textEditor.setCursorBufferPosition([0, 1]);
      textEditor.insertText('b');
      textEditor.insertText('c');

      waitsFor(function () {
        return textEditor.getText() === 'def';
      });
      runs(function () {
        // Debouncing should ensure only one format call.
        expect(spy.callCount).toBe(1);
      });
    }));
  });

  it('formats an editor on save', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      spyOn(_config || _load_config(), 'getFormatOnSave').andReturn(true);
      const manager = new (_CodeFormatManager || _load_CodeFormatManager()).default();
      manager.addOnSaveProvider({
        grammarScopes: ['text.plain.null-grammar'],
        priority: 1,
        formatOnSave: function () {
          return Promise.resolve([{
            oldRange: new _atom.Range([0, 0], [0, 3]),
            oldText: 'abc',
            newText: 'def'
          }]);
        }
      });

      textEditor.setText('abc');
      yield textEditor.save();
      expect(textEditor.getText()).toBe('def');
    }));
  });

  it('should still save on timeout', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      jasmine.Clock.useMock();
      spyOn(_config || _load_config(), 'getFormatOnSave').andReturn(true);
      const manager = new (_CodeFormatManager || _load_CodeFormatManager()).default();
      manager.addRangeProvider({
        grammarScopes: ['text.plain.null-grammar'],
        priority: 1,
        formatCode: function () {
          return new Promise(function () {});
        }
      });

      const spy = spyOn(textEditor.getBuffer(), 'save').andCallThrough();
      textEditor.save();
      const savePromise = Promise.resolve(textEditor.save());

      // The first save should be pushed through after the 2nd.
      waitsFor(function () {
        return spy.callCount === 1;
      });

      runs(function () {
        jasmine.Clock.tick(3000);
      });

      // Hitting the timeout will force the 2nd save through.
      waitsFor(function () {
        return spy.callCount === 2;
      });

      // The real save should still go through.
      waitsForPromise(function () {
        return savePromise;
      });

      // Sanity check.
      runs(function () {
        return expect(spy.callCount).toBe(2);
      });
    }));
  });
});