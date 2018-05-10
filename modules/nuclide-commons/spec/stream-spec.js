'use strict';var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));var _stream;











function _load_stream() {return _stream = require('../stream');}var _fsPromise;
function _load_fsPromise() {return _fsPromise = _interopRequireDefault(require('../fsPromise'));}
var _stream2 = _interopRequireDefault(require('stream'));
var _fs = _interopRequireDefault(require('fs'));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                               * Copyright (c) 2017-present, Facebook, Inc.
                                                                                                                                               * All rights reserved.
                                                                                                                                               *
                                                                                                                                               * This source code is licensed under the BSD-style license found in the
                                                                                                                                               * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                                               * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                                               *
                                                                                                                                               *  strict-local
                                                                                                                                               * @format
                                                                                                                                               */describe('commons-node/stream', () => {it('observeStream', () => {waitsForPromise((0, _asyncToGenerator.default)(function* () {const input = ['foo\nbar', '\n', '\nba', 'z', '\nblar'];const stream = new _stream2.default.PassThrough();const promise = (0, (_stream || _load_stream()).observeStream)(stream).toArray().toPromise();input.forEach(function (value) {
        stream.write(value, 'utf8');
      });
      stream.end();
      const output = yield promise;
      expect(output.join('')).toEqual(input.join(''));
    }));
  });

  it('observeStream - error', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const stream = new _stream2.default.PassThrough();
      const input = ['foo\nbar', '\n', '\nba', 'z', '\nblar'];
      const output = [];
      const promise = new Promise(function (resolve, reject) {
        (0, (_stream || _load_stream()).observeStream)(stream).subscribe(
        function (v) {return output.push(v);},
        function (e) {return resolve(e);},
        function () {});

      });
      const error = new Error('Had an error');

      input.forEach(function (value) {
        stream.write(value, 'utf8');
      });
      stream.emit('error', error);

      const result = yield promise;
      expect(output).toEqual(input);
      expect(result).toBe(error);
    }));
  });

  it('writeToStream', () => {
    waitsForPromise((0, _asyncToGenerator.default)(function* () {
      const tempPath = yield (_fsPromise || _load_fsPromise()).default.tempfile();
      const fixturePath = 'spec/fixtures/lyrics';
      const stream = _fs.default.createWriteStream(tempPath, { highWaterMark: 10 });
      // Read faster than we write to test buffering
      const observable = (0, (_stream || _load_stream()).observeRawStream)(
      _fs.default.createReadStream(fixturePath, { highWaterMark: 100 }));


      yield (0, (_stream || _load_stream()).writeToStream)(observable, stream).toPromise();

      const writtenFile = yield (_fsPromise || _load_fsPromise()).default.readFile(tempPath);
      const fixtureFile = yield (_fsPromise || _load_fsPromise()).default.readFile(fixturePath);
      expect(writtenFile).toEqual(fixtureFile);
    }));
  });
});