'use strict';var _LinterAdapterFactory;











function _load_LinterAdapterFactory() {return _LinterAdapterFactory = require('../lib/services/LinterAdapterFactory');}




const grammar = 'testgrammar'; /**
                                * Copyright (c) 2017-present, Facebook, Inc.
                                * All rights reserved.
                                *
                                * This source code is licensed under the BSD-style license found in the
                                * LICENSE file in the root directory of this source tree. An additional grant
                                * of patent rights can be found in the PATENTS file in the same directory.
                                *
                                * 
                                * @format
                                */describe('createAdapter', () => {function createAdapterWithMock(linterProviders) {return (0, (_LinterAdapterFactory || _load_LinterAdapterFactory()).createAdapter)(linterProviders, jasmine.createSpy());}let fakeLinter;beforeEach(() => {const fakeEditor = {
      getPath() {
        return 'foo';
      },
      getGrammar() {
        return { scopeName: grammar };
      } };

    spyOn(atom.workspace, 'getActiveTextEditor').andReturn(fakeEditor);
    fakeLinter = {
      name: 'test',
      grammarScopes: [grammar],
      scope: 'file',
      lintOnFly: true,
      lint: () => Promise.resolve([]) };

  });

  afterEach(() => {
    jasmine.unspy(atom.workspace, 'getActiveTextEditor');
  });

  it('should return a linter adapter', () => {
    expect(createAdapterWithMock(fakeLinter)).not.toBe(null);
  });
});

describe('validateLinter', () => {
  let linter;

  beforeEach(() => {
    linter = {
      name: 'test',
      grammarScopes: [grammar],
      scope: 'file',
      lintOnFly: true,
      lint: () => Promise.resolve([]) };

  });

  it('should not return errors for a valid linter', () => {
    expect((0, (_LinterAdapterFactory || _load_LinterAdapterFactory()).validateLinter)(linter).length).toEqual(0);
  });

  it('should return errors for a linter with no lint function', () => {
    linter.lint = undefined;
    expect((0, (_LinterAdapterFactory || _load_LinterAdapterFactory()).validateLinter)(linter)).toEqual([
    'lint function must be specified',
    'lint must be a function']);

  });

  it('should return errors for a linter where lint is not a function', () => {
    linter.lint = [];
    expect((0, (_LinterAdapterFactory || _load_LinterAdapterFactory()).validateLinter)(linter)).toEqual(['lint must be a function']);
  });

  it('it should use a default name if not provided', () => {
    linter.name = null;
    expect((0, (_LinterAdapterFactory || _load_LinterAdapterFactory()).validateLinter)(linter).length).toBe(0);
    expect(linter.name).toBe('Linter');
  });
});