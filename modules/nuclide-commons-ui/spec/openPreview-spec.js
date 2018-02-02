'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _openPreview;

function _load_openPreview() {
  return _openPreview = _interopRequireDefault(require('../openPreview'));
}

var _fsPromise;

function _load_fsPromise() {
  return _fsPromise = _interopRequireDefault(require('nuclide-commons/fsPromise'));
}

var _nullthrows;

function _load_nullthrows() {
  return _nullthrows = _interopRequireDefault(require('nullthrows'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('openPreview', () => {
  describe('previewing within the same file', () => {
    let file;
    let fileItem;
    beforeEach(() => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        file = yield (_fsPromise || _load_fsPromise()).default.tempfile();
        yield (_fsPromise || _load_fsPromise()).default.writeFile(file, 'foobarbaz\n'.repeat(1000));
        fileItem = yield atom.workspace.open(file);
      }));
    });

    afterEach(() => (_fsPromise || _load_fsPromise()).default.unlink(file));

    it('does not change the cursor position', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        expect(getActiveTextEditor().getURI()).toEqual(file);
        expect(getActiveTextEditor().getCursorBufferPosition()).toEqual({
          row: 0,
          column: 0
        });

        yield (0, (_openPreview || _load_openPreview()).default)(file, {
          line: 700,
          column: 3,
          center: true
        })._promise;

        // this case shouldn't open any new editors
        expect(getActiveTextEditor()).toBe(fileItem);

        // Neither the file path nor the cursor position technically change as
        // this preview is not yet confirmed
        expect(getActiveTextEditor().getURI()).toEqual(file);
        expect(getActiveTextEditor().getCursorBufferPosition()).toEqual({
          row: 0,
          column: 0
        });
      }));
    });
  });

  describe('opening a preview of a different file', () => {
    let startingFile;
    let previewingFile;

    beforeEach(() => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        [startingFile, previewingFile] = yield Promise.all([(_fsPromise || _load_fsPromise()).default.tempfile(), (_fsPromise || _load_fsPromise()).default.tempfile()]);
        yield atom.workspace.open(startingFile);
      }));
    });

    afterEach(() => {
      waitsForPromise(() => Promise.all([(_fsPromise || _load_fsPromise()).default.unlink(startingFile), (_fsPromise || _load_fsPromise()).default.unlink(previewingFile)]));
    });

    it('opens a preview pane editor pointed at the previewFile', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        expect(getActiveTextEditor().getURI()).toEqual(startingFile);
        expect(getActiveTextEditor().getCursorBufferPosition()).toEqual({
          row: 0,
          column: 0
        });

        yield (0, (_openPreview || _load_openPreview()).default)(previewingFile)._promise;
        expect(getActiveTextEditor().getURI()).toBe(previewingFile);
        // $FlowFixMe
        expect(getPendingItem().getURI()).toBe(previewingFile);
      }));
    });

    it('leaves focus on the starting editor', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        expect(getActiveTextEditor().getURI()).toEqual(startingFile);
        expect(getActiveTextEditor().getCursorBufferPosition()).toEqual({
          row: 0,
          column: 0
        });

        yield (0, (_openPreview || _load_openPreview()).default)(previewingFile)._promise;
        expect(getActiveTextEditor().getURI()).toEqual(previewingFile);
      }));
    });
  });

  describe('with multiple previews', () => {
    let startingFile;
    let firstPreviewingFile;
    let secondPreviewingFile;

    beforeEach(() => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        [startingFile, firstPreviewingFile, secondPreviewingFile] = yield Promise.all([(_fsPromise || _load_fsPromise()).default.tempfile(), (_fsPromise || _load_fsPromise()).default.tempfile(), (_fsPromise || _load_fsPromise()).default.tempfile()]);
        yield atom.workspace.open(startingFile);
      }));
    });

    afterEach(() => {
      waitsForPromise(() => Promise.all([(_fsPromise || _load_fsPromise()).default.unlink(startingFile), (_fsPromise || _load_fsPromise()).default.unlink(firstPreviewingFile), (_fsPromise || _load_fsPromise()).default.unlink(secondPreviewingFile)]));
    });

    it('reuses the preview pane when openPreview is called multiple times', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        yield (0, (_openPreview || _load_openPreview()).default)(firstPreviewingFile)._promise;
        const firstPendingItem = getPendingItem();
        // $FlowFixMe
        expect(getPendingItem().getURI()).toBe(firstPreviewingFile);

        yield (0, (_openPreview || _load_openPreview()).default)(secondPreviewingFile)._promise;
        const secondPendingItem = getPendingItem();
        // $FlowFixMe
        expect(getPendingItem().getURI()).toBe(secondPreviewingFile);

        // $FlowFixMe
        expect(firstPendingItem.isDestroyed()).toBe(true);
        // $FlowFixMe
        expect(secondPendingItem.isDestroyed()).toBe(false);
        expect(getPendingItem()).toBe(secondPendingItem);
        expect(secondPendingItem).toBe(getActiveTextEditor());
      }));
    });

    it('destroys all previews once an openable is confirmed', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        yield (0, (_openPreview || _load_openPreview()).default)(firstPreviewingFile)._promise;
        const firstPendingItem = getPendingItem();
        const secondOpenable = (0, (_openPreview || _load_openPreview()).default)(secondPreviewingFile);
        yield secondOpenable._promise;
        const secondPendingItem = getPendingItem();

        yield secondOpenable.confirm();

        // $FlowFixMe
        expect(firstPendingItem.isDestroyed()).toBe(true);
        // $FlowFixMe
        expect(secondPendingItem.isDestroyed()).toBe(false);
        expect(getPendingItem()).not.toExist();
        expect(secondPendingItem).toBe(getActiveTextEditor());
      }));
    });
  });

  it('never reuses a non-pending pane', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const [startingFile, file1, file2] = yield Promise.all([(_fsPromise || _load_fsPromise()).default.tempfile(), (_fsPromise || _load_fsPromise()).default.tempfile(), (_fsPromise || _load_fsPromise()).default.tempfile()]);
      yield atom.workspace.open(startingFile);

      yield (0, (_openPreview || _load_openPreview()).default)(file1)._promise;
      // Open a preview back in the originating file, which is not pending
      yield (0, (_openPreview || _load_openPreview()).default)(startingFile)._promise;
      expect(getActiveTextEditor()).not.toBe(getPendingItem());

      // ...and make sure requesting a new preview does *not* reuse the original
      // file's pane item
      yield (0, (_openPreview || _load_openPreview()).default)(file2)._promise;
      expect(getActiveTextEditor()).toBe(getPendingItem());

      yield Promise.all([(_fsPromise || _load_fsPromise()).default.unlink(startingFile), (_fsPromise || _load_fsPromise()).default.unlink(file1), (_fsPromise || _load_fsPromise()).default.unlink(file2)]);
    }));
  });

  it('throws when trying to confirm a preview that is not the latest', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const [file1, file2] = yield Promise.all([(_fsPromise || _load_fsPromise()).default.tempfile(), (_fsPromise || _load_fsPromise()).default.tempfile()]);

      const preview1 = (0, (_openPreview || _load_openPreview()).default)(file1);
      (0, (_openPreview || _load_openPreview()).default)(file2);

      expect(function () {
        return preview1.confirm();
      }).toThrow();

      yield Promise.all([(_fsPromise || _load_fsPromise()).default.unlink(file1), (_fsPromise || _load_fsPromise()).default.unlink(file2)]);
    }));
  });

  it('throws when calling confirm after cancel', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const file = yield (_fsPromise || _load_fsPromise()).default.tempfile();
      const preview = (0, (_openPreview || _load_openPreview()).default)(file);
      preview.cancel();
      expect(function () {
        return preview.confirm();
      }).toThrow();

      yield (_fsPromise || _load_fsPromise()).default.unlink(file);
    }));
  });

  it('throws when calling cancel after confirm', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const file = yield (_fsPromise || _load_fsPromise()).default.tempfile();
      const preview = (0, (_openPreview || _load_openPreview()).default)(file);
      preview.confirm();
      expect(function () {
        return preview.cancel();
      }).toThrow();

      yield (_fsPromise || _load_fsPromise()).default.unlink(file);
    }));
  });
}); /**
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

function getActiveTextEditor() {
  return (0, (_nullthrows || _load_nullthrows()).default)(atom.workspace.getActiveTextEditor());
}

function getPendingItem() {
  return (0, (_nullthrows || _load_nullthrows()).default)((0, (_nullthrows || _load_nullthrows()).default)(atom.workspace.paneForItem(getActiveTextEditor())).getPendingItem());
}