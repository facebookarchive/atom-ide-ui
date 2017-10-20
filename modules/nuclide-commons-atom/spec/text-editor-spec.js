'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _textEditor;

function _load_textEditor() {
  return _textEditor = require('../text-editor');
}

var _atom = require('atom');

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

describe('existingEditorForUri', () => {
  const file1 = '/tmp/file1.txt';
  const file2 = '/tmp/file2.txt';
  const file3 = '/tmp/file3.txt';

  let file1Editor = null;
  let file2Editor = null;
  let secondFile2Editor = null;

  beforeEach(() => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      file1Editor = yield atom.workspace.open(file1);
      file2Editor = yield atom.workspace.open(file2);
      secondFile2Editor = yield atom.workspace.open(file2);
    }));
  });

  it('should find the one editor for a file', () => {
    expect((0, (_textEditor || _load_textEditor()).existingEditorForUri)(file1)).toBe(file1Editor);
  });

  it('should find one of the editors for a file', () => {
    const editor = (0, (_textEditor || _load_textEditor()).existingEditorForUri)(file2);
    expect(editor === file2Editor || editor === secondFile2Editor).toBeTruthy();
  });

  it('should return null if no editor exists', () => {
    expect((0, (_textEditor || _load_textEditor()).existingEditorForUri)(file3)).toBeNull();
  });
});

describe('observeTextEditors', () => {
  it('should ignore broken remote paths', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const paths = [];
      (0, (_textEditor || _load_textEditor()).observeTextEditors)(function (editor) {
        return paths.push(editor.getPath());
      });

      yield atom.workspace.open('nuclide:/test');
      yield atom.workspace.open('');
      yield atom.workspace.open('/tmp/test');

      expect(paths).toEqual([undefined, '/tmp/test']);
    }));
  });
});

function ensureReadOnlyOperations(buffer, operations, expectedReadOnly) {
  const initialText = buffer.getText();
  operations.forEach(operation => {
    operation();
    expect(initialText === buffer.getText()).toBe(expectedReadOnly);
    if (!expectedReadOnly) {
      buffer.setText(initialText);
    }
  });
}

describe('enforceReadOnlyEditor', () => {
  it('should not be able to write to the text editor', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const editor = yield atom.workspace.open('');
      editor.setText('ABC\nDEF');
      const buffer = editor.getBuffer();

      const operations = [function () {
        return editor.insertText('xyz');
      }, function () {
        return editor.backspace();
      }, function () {
        return editor.duplicateLines();
      }, function () {
        return editor.insertNewline();
      }];

      ensureReadOnlyOperations(buffer, operations, false);

      (0, (_textEditor || _load_textEditor()).enforceReadOnlyEditor)(editor);
      ensureReadOnlyOperations(buffer, operations, true);
      // Underlying buffer's `setText` and `append` are an exception by default.
      ensureReadOnlyOperations(buffer, [function () {
        return buffer.setText('lol');
      }, function () {
        return buffer.append('lol');
      }], false);
    }));
  });
});

describe('enforceReadOnlyBuffer', () => {
  it('should not be able to write to the text buffer', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const editor = yield atom.workspace.open('');
      const buffer = editor.getBuffer();
      buffer.setText('ABC\nDEF');

      const operations = [function () {
        return buffer.append('xyz');
      }, function () {
        return buffer.deleteRows(0, 1);
      }, function () {
        return buffer.delete(new _atom.Range([0, 0], [1, 0]));
      }, function () {
        return buffer.insert(new _atom.Point(0, 0), 'lol');
      }, function () {
        return buffer.undo();
      }, function () {
        return buffer.setText('lol');
      }];

      ensureReadOnlyOperations(buffer, operations, false);
      (0, (_textEditor || _load_textEditor()).enforceReadOnlyEditor)(editor, []);
      ensureReadOnlyOperations(buffer, operations, true);
    }));
  });
});