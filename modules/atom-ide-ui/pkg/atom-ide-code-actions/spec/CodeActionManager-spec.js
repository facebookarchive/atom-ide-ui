'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _os = _interopRequireDefault(require('os'));

var _nuclideUri;

function _load_nuclideUri() {
  return _nuclideUri = _interopRequireDefault(require('nuclide-commons/nuclideUri'));
}

var _CodeActionManager;

function _load_CodeActionManager() {
  return _CodeActionManager = require('../lib/CodeActionManager');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CodeActionManager', () => {
  let manager;
  let provider;
  let delegate;
  let editor;
  beforeEach(() => {
    jasmine.useMockClock();
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      editor = yield atom.workspace.open((_nuclideUri || _load_nuclideUri()).default.join(_os.default.tmpdir(), 'test.txt'));
      editor.setText('abc\ndef\nghi');

      manager = new (_CodeActionManager || _load_CodeActionManager()).CodeActionManager();
      provider = {
        priority: 1,
        grammarScopes: ['text.plain.null-grammar'],
        getCodeActions(_e, _r, _d) {
          return (0, _asyncToGenerator.default)(function* () {
            return [];
          })();
        }
      };
      delegate = {
        clearMessages: function () {},
        setAllMessages: function (_messages) {}
      };
      manager._linterDelegate = delegate;
      manager.addProvider(provider);
    }));
  });

  it('finds code actions on highlight change and updates linter', () => {
    const actions = [{
      apply() {},
      getTitle() {
        return (0, _asyncToGenerator.default)(function* () {
          return 'Mock action';
        })();
      },
      dispose() {}
    }];
    const spyActions = spyOn(provider, 'getCodeActions').andReturn(actions);
    const spyLinter = spyOn(delegate, 'setAllMessages');

    runs(() => {
      advanceClock(1); // trigger debounce
      editor.selectAll();
      advanceClock(501);
    });

    waitsFor(() => spyLinter.wasCalled, 'should have called setAllMessages', 750);

    runs(() => {
      expect(spyActions).toHaveBeenCalled();
      expect(spyLinter).toHaveBeenCalled();
      expect(spyLinter.mostRecentCall.args[0][0].solutions.length).toEqual(1);
    });
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