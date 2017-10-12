'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _atom = require('atom');

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

var _LinterAdapter;

function _load_LinterAdapter() {
  return _LinterAdapter = require('../lib/services/LinterAdapter');
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

const grammar = 'testgrammar';

function makePromise(ret, timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ret);
    }, timeout);
  });
}

describe('LinterAdapter', () => {
  let fakeLinter;
  let linterAdapter;
  let linterReturn;
  let fakeEditor;
  let bufferDestroyCallback;
  let textEventSubject;
  let textEventSpy;
  let busySpy;
  let busyDisposeSpy;

  function newLinterAdapter(linter) {
    return new (_LinterAdapter || _load_LinterAdapter()).LinterAdapter(linter, busySpy);
  }

  beforeEach(() => {
    textEventSubject = new _rxjsBundlesRxMinJs.Subject();
    textEventSpy = spyOn(require('nuclide-commons-atom/text-event'), 'observeTextEditorEvents').andReturn(textEventSubject.asObservable());

    const fakeBuffer = {
      onDidDestroy(callback) {
        bufferDestroyCallback = callback;
        return new _atom.Disposable(() => {});
      },
      isDestroyed: () => false
    };
    fakeEditor = {
      getPath() {
        return 'foo';
      },
      getGrammar() {
        return { scopeName: grammar };
      },
      getBuffer() {
        return fakeBuffer;
      }
    };
    linterReturn = Promise.resolve([]);
    fakeLinter = {
      name: 'fakeLinter',
      grammarScopes: [grammar],
      scope: 'file',
      lintsOnChange: true,
      lint: () => linterReturn
    };
    spyOn(fakeLinter, 'lint').andCallThrough();
    busyDisposeSpy = jasmine.createSpy('busyDispose');
    busySpy = jasmine.createSpy('reportBusy').andReturn({
      dispose: busyDisposeSpy
    });
    linterAdapter = newLinterAdapter(fakeLinter);
  });

  afterEach(() => {
    bufferDestroyCallback = null;
  });

  it('should dispatch the linter on an event', () => {
    textEventSubject.next(fakeEditor);
    expect(fakeLinter.lint).toHaveBeenCalled();
    expect(busySpy).toHaveBeenCalledWith('fakeLinter: running on "foo"');
    // `lint` is a promise, so the busy signal should stay active.
    expect(busyDisposeSpy).not.toHaveBeenCalled();
    waitsFor(() => busyDisposeSpy.wasCalled, 'busy signal to be disposed');
  });

  it("should subscribe to 'all' when * is in grammarScopes", () => {
    newLinterAdapter({
      name: 'linter',
      grammarScopes: ['*'],
      scope: 'file',
      lintsOnChange: true,
      lint: () => linterReturn
    });
    expect(textEventSpy).toHaveBeenCalledWith('all', 'changes');
  });

  it('should work when the linter is synchronous', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      linterReturn = [{ type: 'Error', filePath: 'foo' }];
      textEventSubject.next(fakeEditor);
      const message = yield linterAdapter.getUpdates().take(1).toPromise();
      expect(message.filePathToMessages.has('foo')).toBe(true);
      expect(busySpy).toHaveBeenCalledWith('fakeLinter: running on "foo"');
      expect(busyDisposeSpy).toHaveBeenCalled();
    }));
  });

  function shouldNotInvalidate(value) {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const spy = jasmine.createSpy();
      linterAdapter.getInvalidations().subscribe(function () {
        return spy();
      });

      const promise = linterAdapter.getUpdates().take(1).toPromise();

      // Populate the result.
      linterReturn = [{ type: 'Error', filePath: 'foo' }];
      textEventSubject.next(fakeEditor);
      yield promise;

      linterReturn = value;
      textEventSubject.next(fakeEditor);

      // This is tricky - the result resolves on the next tick.
      yield new Promise(function (resolve) {
        return process.nextTick(resolve);
      });
      expect(spy).not.toHaveBeenCalled();
    }));
  }

  it('should not invalidate previous result when linter resolves to null', () => {
    shouldNotInvalidate(Promise.resolve(null));
  });

  it('should not invalidate previous result when linter resolves to undefined', () => {
    shouldNotInvalidate(Promise.resolve(undefined));
  });

  it('should not invalidate previous result when linter returns null', () => {
    shouldNotInvalidate(null);
  });

  it('should not invalidate previous result when linter returns undefined', () => {
    shouldNotInvalidate(undefined);
  });

  it('should not reorder results', () => {
    let numMessages = 0;
    let lastMessage = null;
    linterAdapter.getUpdates().subscribe(message => {
      numMessages++;
      lastMessage = message;
    });
    // Dispatch two linter requests.
    linterReturn = makePromise([{ type: 'Error', filePath: 'bar' }], 50);
    textEventSubject.next(fakeEditor);
    linterReturn = makePromise([{ type: 'Error', filePath: 'baz' }], 10);
    textEventSubject.next(fakeEditor);
    // If we call it once with a larger value, the first promise will resolve
    // first, even though the timeout is larger
    advanceClock(30);
    advanceClock(30);
    waitsFor(() => {
      return numMessages === 1 && lastMessage && lastMessage.filePathToMessages.has('baz');
    }, 'There should be only the latest message', 100);
  });

  it('invalidates files on close', () => {
    linterReturn = Promise.resolve([{ type: 'Error', filePath: 'foo' }, { type: 'Error', filePath: 'bar' }]);
    textEventSubject.next(fakeEditor);
    waitsFor(() => bufferDestroyCallback != null);
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      // Wait for the first lint to finish.
      yield linterAdapter.getUpdates().take(1).toPromise();
      // Start a pending lint.
      linterReturn = makePromise([], 10);
      textEventSubject.next(fakeEditor);
      const promise = linterAdapter.getInvalidations().take(1).toPromise();
      bufferDestroyCallback();
      const invalidation = yield promise;
      expect(invalidation).toEqual({
        scope: 'file',
        filePaths: ['foo', 'bar']
      });
    }));
  });
});

describe('message transformation functions', () => {
  const fileMessage = {
    type: 'Error',
    text: 'Uh oh',
    filePath: '/fu/bar'
  };

  const fileMessageWithName = {
    type: 'Error',
    text: 'Uh oh',
    filePath: '/fu/bar',
    name: 'Custom Linter Name'
  };

  const projectMessage = {
    type: 'Warning',
    text: 'Oh no!'
  };

  let providerName;
  let currentPath = null;

  beforeEach(() => {
    providerName = 'provider';
    currentPath = 'foo/bar';
  });

  describe('linterMessageToDiagnosticMessage', () => {
    function checkMessage(linterMessage, expected) {
      if (!providerName) {
        throw new Error('Invariant violation: "providerName"');
      }

      const actual = (0, (_LinterAdapter || _load_LinterAdapter()).linterMessageToDiagnosticMessage)(linterMessage, providerName);
      // This filters out any undefined values.
      expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
    }

    it('should turn a message with a filePath into a file scope diagnostic', () => {
      checkMessage(fileMessage, {
        scope: 'file',
        providerName,
        type: fileMessage.type,
        filePath: fileMessage.filePath,
        text: fileMessage.text
      });

      // Invalid types are automatically turned into "Error".
      checkMessage(Object.assign({}, fileMessage, { type: 'blah' }), {
        scope: 'file',
        providerName,
        type: 'Error',
        filePath: fileMessage.filePath,
        text: fileMessage.text
      });
    });

    it('should turn a message without a filePath into a project scope diagnostic', () => {
      checkMessage(projectMessage, {
        scope: 'project',
        providerName,
        type: projectMessage.type,
        text: projectMessage.text
      });
    });
  });

  describe('linterMessageV2ToDiagnosticMessage', () => {
    it('should correctly convert messages', () => {
      expect((0, (_LinterAdapter || _load_LinterAdapter()).linterMessageV2ToDiagnosticMessage)({
        location: {
          file: 'file.txt',
          position: [[0, 0], [0, 1]]
        },
        reference: {
          file: 'ref.txt',
          position: [1, 1]
        },
        excerpt: 'Error',
        severity: 'error',
        solutions: [{
          title: 'Solution',
          position: [[0, 0], [0, 1]],
          currentText: '',
          replaceWith: 'a'
        }],
        description: 'Description',
        linterName: 'test2'
      }, 'test')).toEqual({
        scope: 'file',
        providerName: 'test2',
        type: 'Error',
        filePath: 'file.txt',
        range: new _atom.Range([0, 0], [0, 1]),
        text: 'Error\nDescription',
        trace: [{
          type: 'Trace',
          text: 'Reference',
          filePath: 'ref.txt',
          range: new _atom.Range([1, 1], [1, 1])
        }],
        fix: {
          title: 'Solution',
          oldRange: new _atom.Range([0, 0], [0, 1]),
          oldText: '',
          newText: 'a'
        }
      });
    });
  });

  describe('linterMessagesToDiagnosticUpdate', () => {
    function runWith(linterMessages) {
      return (0, (_LinterAdapter || _load_LinterAdapter()).linterMessagesToDiagnosticUpdate)(currentPath, linterMessages, providerName);
    }

    it('should invalidate diagnostics in the current file', () => {
      const result = runWith([]);

      if (!result.filePathToMessages) {
        throw new Error('Invariant violation: "result.filePathToMessages"');
      }

      expect(result.filePathToMessages.get(currentPath)).toEqual([]);
    });

    it('should use the LinterProvider name when one is not specified in message', () => {
      const result = runWith([fileMessage]);

      if (!result.filePathToMessages) {
        throw new Error('Invariant violation: "result.filePathToMessages"');
      }

      const messages = result.filePathToMessages.get(fileMessage.filePath);

      if (!(messages != null)) {
        throw new Error('Invariant violation: "messages != null"');
      }

      const resultMessage = messages[0];
      expect(resultMessage.providerName).toEqual('provider');
    });

    it('should use the provider name specified in message when available', () => {
      const result = runWith([fileMessageWithName]);

      if (!result.filePathToMessages) {
        throw new Error('Invariant violation: "result.filePathToMessages"');
      }

      const messages = result.filePathToMessages.get(fileMessageWithName.filePath);

      if (!(messages != null)) {
        throw new Error('Invariant violation: "messages != null"');
      }

      const resultMessage = messages[0];
      expect(resultMessage.providerName).toEqual('Custom Linter Name');
    });

    it('should provide both project messages and file messages', () => {
      const result = runWith([fileMessage, projectMessage]);

      if (!result.filePathToMessages) {
        throw new Error('Invariant violation: "result.filePathToMessages"');
      }
      // The actual message transformations are tested in the tests from
      // linterMessageToDiagnosticMessage -- no need to duplicate them here.


      const messages = result.filePathToMessages.get(fileMessage.filePath);

      if (!(messages != null)) {
        throw new Error('Invariant violation: "messages != null"');
      }

      expect(messages.length).toEqual(1);

      if (!result.projectMessages) {
        throw new Error('Invariant violation: "result.projectMessages"');
      }

      expect(result.projectMessages.length).toEqual(1);
    });
  });
});