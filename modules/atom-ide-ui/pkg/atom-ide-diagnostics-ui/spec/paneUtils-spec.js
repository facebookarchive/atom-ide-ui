'use strict';

var _atom = require('atom');

var _paneUtils;

function _load_paneUtils() {
  return _paneUtils = require('../lib/paneUtils');
}

describe('compareMessagesByFile', () => {
  let fileAMsgA;
  let fileAMsgB;
  let fileAError;
  let fileAInfo;
  let fileBMsgA;

  beforeEach(() => {
    fileAMsgA = {
      filePath: '/foo/bar/baz.html',
      providerName: 'foo',
      range: new _atom.Range([0, 0], [1, 0]),
      scope: 'file',
      type: 'Warning'
    };
    fileAMsgB = {
      filePath: '/foo/bar/baz.html',
      providerName: 'foo',
      range: new _atom.Range([5, 0], [6, 0]),
      scope: 'file',
      type: 'Warning'
    };
    fileAError = {
      filePath: '/foo/bar/baz.html',
      providerName: 'foo',
      range: new _atom.Range([10, 0], [11, 0]),
      scope: 'file',
      type: 'Error'
    };
    fileAInfo = {
      filePath: '/foo/bar/baz.html',
      providerName: 'foo',
      range: new _atom.Range([0, 0], [0, 0]),
      scope: 'file',
      type: 'Info'
    };
    fileBMsgA = {
      filePath: '/foo/bar/xyz.html',
      providerName: 'foo',
      range: new _atom.Range([3, 0], [4, 0]),
      scope: 'file',
      type: 'Warning'
    };
  });

  it('sorts messages based on file path', () => {
    const msgs = [fileBMsgA, fileAMsgA];
    expect(msgs.sort((_paneUtils || _load_paneUtils()).compareMessagesByFile)).toEqual([fileAMsgA, fileBMsgA]);
  });

  it('sorts messages within a file based on line number', () => {
    const msgs = [fileAMsgB, fileAMsgA];
    expect(msgs.sort((_paneUtils || _load_paneUtils()).compareMessagesByFile)).toEqual([fileAMsgA, fileAMsgB]);
  });

  it('sorts messages based on file path && by line number', () => {
    const msgs = [fileAMsgB, fileBMsgA, fileAMsgA];
    expect(msgs.sort((_paneUtils || _load_paneUtils()).compareMessagesByFile)).toEqual([fileAMsgA, fileAMsgB, fileBMsgA]);
  });

  it('sorts messages based on level', () => {
    const msgs = [fileAMsgA, fileAMsgB, fileAError, fileAInfo];
    expect(msgs.sort((_paneUtils || _load_paneUtils()).compareMessagesByFile)).toEqual([fileAError, fileAMsgA, fileAMsgB, fileAInfo]);
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