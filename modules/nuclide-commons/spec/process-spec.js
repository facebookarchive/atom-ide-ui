'use strict';

var _events = _interopRequireDefault(require('events'));

var _log4js;

function _load_log4js() {
  return _log4js = require('log4js');
}

var _promise;

function _load_promise() {
  return _promise = require('../promise');
}

var _child_process = _interopRequireDefault(require('child_process'));

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

var _process;

function _load_process() {
  return _process = require('../process');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('commons-node/process', () => {
  let origPlatform;

  beforeEach(() => {
    origPlatform = process.platform;
    // Use a fake platform so the platform's PATH is not used in case the test is run on a platform
    // that requires special handling (like OS X).
    Object.defineProperty(process, 'platform', { value: 'MockMock' });
  });

  afterEach(() => {
    Object.defineProperty(process, 'platform', { value: origPlatform });
  });

  describe('process.killProcess', () => {
    it('should only kill the process when `killTree` is false', () => {
      waitsForPromise(async () => {
        const proc = {
          kill: jasmine.createSpy()
        };
        spyOn(console, 'log'); // suppress log printing
        await (0, (_process || _load_process()).killProcess)(proc, false);
        expect(proc.kill).toHaveBeenCalled();
      });
    });

    it('should kill the process tree when `killTree` is true', () => {
      waitsForPromise(async () => {
        jasmine.useRealClock();
        // Create a tree that's more than level child deep.
        const proc = _child_process.default.spawn('bash', ['-c', '( (sleep 1000)& sleep 1000 )& wait']);
        spyOn(console, 'log'); // suppress log printing
        spyOn(process, 'kill').andCallThrough();
        await (0, (_promise || _load_promise()).sleep)(250); // Give some time for the processes to spawn.
        await (0, (_process || _load_process()).killUnixProcessTree)(proc);
        expect(process.kill.callCount).toBeGreaterThan(2);
      });
    });

    it('should kill the process tree on windows when `killTree` is true', () => {
      waitsForPromise(async () => {
        const proc = {
          pid: 123
        };
        spyOn(console, 'log'); // suppress log printing
        Object.defineProperty(process, 'platform', { value: 'win32' });
        spyOn(_child_process.default, 'exec');
        await (0, (_process || _load_process()).killProcess)(proc, true);
        expect(_child_process.default.exec.calls.length).toBe(1);
        expect(_child_process.default.exec.calls[0].args[0]).toBe(`taskkill /pid ${proc.pid} /T /F`);
      });
    });
  });

  describe('process.parsePsOutput', () => {
    it('parse `ps` unix output', () => {
      const unixPsOut = ' PPID   PID COMM\n' + '    0     1  /sbin/launchd\n' + '    1    42  command with spaces';
      const processList = (0, (_process || _load_process()).parsePsOutput)(unixPsOut);
      expect(processList).toEqual([{
        command: '/sbin/launchd',
        pid: 1,
        parentPid: 0,
        commandWithArgs: '/sbin/launchd'
      }, {
        command: 'command with spaces',
        pid: 42,
        parentPid: 1,
        commandWithArgs: 'command with spaces'
      }]);
    });

    it('parse `ps` unix output with command arguments', () => {
      const unixPsOut = ' PPID   PID COMM\n' + '    0     1  /sbin/launchd\n' + '    1    42  command with spaces';

      const unixPsOutWithArgs = ' PID ARGS\n' + '   1  /sbin/launchd\n' + '  42  command with spaces and some more arguments';

      const processList = (0, (_process || _load_process()).parsePsOutput)(unixPsOut, unixPsOutWithArgs);
      expect(processList).toEqual([{
        command: '/sbin/launchd',
        pid: 1,
        parentPid: 0,
        commandWithArgs: '/sbin/launchd'
      }, {
        command: 'command with spaces',
        pid: 42,
        parentPid: 1,
        commandWithArgs: 'command with spaces and some more arguments'
      }]);
    });

    it('parse `ps` windows output', () => {
      const windowsProcessOut = 'ParentProcessId   ProcessId   Name\r\n' + '           0                4     System Process\r\n' + '           4                228   smss.exe';

      const processList = (0, (_process || _load_process()).parsePsOutput)(windowsProcessOut);
      expect(processList).toEqual([{
        command: 'System Process',
        pid: 4,
        parentPid: 0,
        commandWithArgs: 'System Process'
      }, {
        command: 'smss.exe',
        pid: 228,
        parentPid: 4,
        commandWithArgs: 'smss.exe'
      }]);
    });
  });

  describe('getOutputStream', () => {
    it('captures stdout, stderr and exitCode', () => {
      waitsForPromise(async () => {
        const child = _child_process.default.spawn(process.execPath, ['-e', 'console.error("stderr"); console.log("std out"); process.exit(0);']);
        const results = await (0, (_process || _load_process()).getOutputStream)(child).toArray().toPromise();
        expect(results).toEqual([{ kind: 'stderr', data: 'stderr\n' }, { kind: 'stdout', data: 'std out\n' }, { kind: 'exit', exitCode: 0, signal: null }]);
      });
    });

    it('errors on nonzero exit codes by default', () => {
      waitsForPromise(async () => {
        const child = _child_process.default.spawn(process.execPath, ['-e', 'console.error("stderr"); console.log("std out"); process.exit(42);']);
        const results = await (0, (_process || _load_process()).getOutputStream)(child)
        // $FlowIssue: Add materialize to type defs
        .materialize().toArray().toPromise();
        expect(results.map(notification => notification.kind)).toEqual(['N', 'N', 'E']);
        const { error } = results[2];
        expect(error.name).toBe('ProcessExitError');
        expect(error.exitCode).toBe(42);
        expect(error.stderr).toBe('stderr\n');
      });
    });

    it('accumulates the first `exitErrorBufferSize` bytes of stderr for the exit error', () => {
      waitsForPromise(async () => {
        let error;
        const child = _child_process.default.spawn(process.execPath, ['-e', 'console.error("stderr"); process.exit(42);']);
        try {
          await (0, (_process || _load_process()).getOutputStream)(child, {
            exitErrorBufferSize: 2,
            isExitError: () => true
          }).toArray().toPromise();
        } catch (err) {
          error = err;
        }
        expect(error).toBeDefined();

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.stderr).toBe('st');
      });
    });
  });

  describe('spawn', () => {
    it('errors when the process does', () => {
      waitsForPromise(async () => {
        spyOn(console, 'log'); // suppress log printing
        const processStream = (0, (_process || _load_process()).spawn)('fakeCommand');
        let error;
        try {
          await processStream.toPromise();
        } catch (err) {
          error = err;
        }
        expect(error).toBeDefined();

        if (!error) {
          throw new Error('Invariant violation: "error"');
        }

        expect(error.code).toBe('ENOENT');
        expect(error.name).toBe('ProcessSystemError');
      });
    });

    // Node delays the emission of the error until after the process is returned so that you have a
    // chance to subscribe to the error event. Observables aren't bound by the same limitations as
    // event-emitter APIs, so we can do better and not emit the process if there was an error
    // spawning it.
    it('errors before emitting the process', () => {
      waitsForPromise(async () => {
        spyOn(console, 'log'); // suppress log printing
        let proc;
        await (0, (_process || _load_process()).spawn)('fakeCommand').do(p => {
          proc = p;
        }).catch(err => {
          expect(proc).toBeUndefined();
          expect(err.code).toBe('ENOENT');
          expect(err.name).toBe('ProcessSystemError');
          return _rxjsBundlesRxMinJs.Observable.empty();
        }).toPromise();
      });
    });

    it('leaves an error handler when you unsubscribe', () => {
      waitsForPromise(async () => {
        spyOn(console, 'log'); // suppress log printing
        let resolve;
        const promise = new Promise(r => {
          resolve = r;
        });
        const sub = (0, (_process || _load_process()).spawn)('cat')
        // If we subscribe synchronously, and it emits synchronously, `sub` won't have been
        // assigned yet in our `subscribe()` callback, so we use the async scheduler.
        .subscribeOn(_rxjsBundlesRxMinJs.Scheduler.async).subscribe(proc => {
          // As soon as we have a process, unsubscribe. This will happen before the error is
          // thrown.
          sub.unsubscribe();

          // Make sure that the error handler is still registered. If it isn't, and the process
          // errors, node will consider the error unhandled and we'll get a redbox.
          expect(proc.listenerCount('error')).toBe(1);

          resolve();
        });
        await promise;
      });
    });

    it('can be retried', () => {
      waitsForPromise(async () => {
        spyOn(console, 'log'); // suppress log printing
        spyOn(_child_process.default, 'spawn');
        try {
          await (0, (_process || _load_process()).spawn)('fakeCommand').retryWhen(errors => errors.scan((errorCount, err) => {
            // If this is the third time the process has errored (i.e. the have already been
            // two errors before), stop retrying. (We try 3 times because because Rx 3 and 4
            // have bugs with retrying shared observables that would give false negatives for
            // this test if we only tried twice.)
            if (errorCount === 2) {
              throw err;
            }
            return errorCount + 1;
          }, 0)).toPromise();
        } catch (err) {}
        expect(_child_process.default.spawn.callCount).toBe(3);
      });
    });

    it('can be timed out', () => {
      waitsForPromise(async () => {
        let error;
        let proc;
        try {
          await (0, (_process || _load_process()).spawn)('sleep', ['10000'], { timeout: 1 }).do(p => {
            proc = p;
            spyOn(proc, 'kill');
          }).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(proc != null)) {
          throw new Error('Invariant violation: "proc != null"');
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.name).toBe('ProcessTimeoutError');
        expect(proc.kill).toHaveBeenCalled();
      });
    });
  });

  describe('observeProcess', () => {
    it('errors when the process does', () => {
      waitsForPromise(async () => {
        spyOn(console, 'log'); // suppress log printing
        const processStream = (0, (_process || _load_process()).observeProcess)('fakeCommand', []);
        let error;
        try {
          await processStream.toPromise();
        } catch (err) {
          error = err;
        }
        expect(error).toBeDefined();

        if (!error) {
          throw new Error('Invariant violation: "error"');
        }

        expect(error.code).toBe('ENOENT');
        expect(error.name).toBe('ProcessSystemError');
      });
    });

    it('errors on nonzero exit codes by default', () => {
      waitsForPromise(async () => {
        const results = await (0, (_process || _load_process()).observeProcess)(process.execPath, ['-e', 'console.error("stderr"); console.log("std out"); process.exit(42);'])
        // $FlowIssue: Add materialize to type defs
        .materialize().toArray().toPromise();
        expect(results.map(notification => notification.kind)).toEqual(['N', 'N', 'E']);
        const { error } = results[2];
        expect(error.name).toBe('ProcessExitError');
        expect(error.exitCode).toBe(42);
        expect(error.stderr).toBe('stderr\n');
      });
    });

    it("doesn't get an exit message when there's an exit error", () => {
      waitsForPromise(async () => {
        const results = await (0, (_process || _load_process()).observeProcess)(process.execPath, ['-e', 'process.exit(42);'])
        // $FlowIssue: Add materialize to type defs
        .materialize().toArray().toPromise();
        expect(results.length).toBe(1);
        expect(results[0].kind).toBe('E');
      });
    });

    it('accumulates the first `exitErrorBufferSize` bytes of stderr for the exit error', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).observeProcess)(process.execPath, ['-e', 'console.error("stderr"); process.exit(42);'], { exitErrorBufferSize: 2, isExitError: () => true }).toArray().toPromise();
        } catch (err) {
          error = err;
        }
        expect(error).toBeDefined();

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.stderr).toBe('st');
      });
    });
  });

  describe('observeProcessRaw', () => {
    it("doesn't split on line breaks", () => {
      spyOn(console, 'log'); // suppress log printing
      waitsForPromise({ timeout: 1000 }, async () => {
        const event = await (0, (_process || _load_process()).observeProcessRaw)(process.execPath, ['-e', 'process.stdout.write("stdout1\\nstdout2\\n"); process.exit(1)']).take(1).toPromise();

        if (!(event.kind === 'stdout')) {
          throw new Error('Invariant violation: "event.kind === \'stdout\'"');
        }

        expect(event.data).toBe('stdout1\nstdout2\n');
      });
    });
  });

  describe('runCommand', () => {
    beforeEach(() => {
      // Suppress console spew.
      spyOn(console, 'log'); // suppress log printing
    });

    if (origPlatform === 'win32') {
      return;
    }

    it('sends the stdin to the process', () => {
      waitsForPromise(async () => {
        const output = await (0, (_process || _load_process()).runCommand)('cat', [], {
          input: 'hello'
        }).toPromise();
        expect(output).toBe('hello');
      });
    });

    it('sends a stream of stdin to the process', () => {
      waitsForPromise(async () => {
        const input = new _rxjsBundlesRxMinJs.Subject();
        const outputPromise = (0, (_process || _load_process()).runCommand)('cat', [], {
          input
        }).toPromise();
        input.next('hello');
        input.next(' ');
        input.next('world');
        input.complete();
        expect((await outputPromise)).toBe('hello world');
      });
    });

    it('enforces maxBuffer', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommand)('yes', [], { maxBuffer: 100 }).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.message).toContain('maxBuffer');
      });
    });

    it('returns stdout of the running process', () => {
      waitsForPromise(async () => {
        const val = await (0, (_process || _load_process()).runCommand)('echo', ['-n', 'foo'], {
          env: process.env
        }).toPromise();
        expect(val).toEqual('foo');
      });
    });

    it("throws an error if the process can't be spawned", () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommand)('fakeCommand').toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.code).toBe('ENOENT');
        expect(error.name).toBe('ProcessSystemError');
      });
    });

    it('throws an error if the exit code !== 0', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommand)(process.execPath, ['-e', 'process.exit(1)']).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.name).toBe('ProcessExitError');
        expect(error.exitCode).toBe(1);
      });
    });

    it('includes stdout and stderr in ProcessExitErrors', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommand)(process.execPath, ['-e', 'process.stderr.write("oopsy"); process.stdout.write("daisy"); process.exit(1)']).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.name).toBe('ProcessExitError');
        expect(error.stderr).toBe('oopsy');
        expect(error.stdout).toBe('daisy');
      });
    });

    it('accumulates the stderr if the process exits with a non-zero code', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommand)(process.execPath, ['-e', 'process.stderr.write("oopsy"); process.exit(1)']).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.stderr).toBe('oopsy');
      });
    });

    // Previously we had a bug where we mutated the seed and subsequent subscriptions would use the
    // mutated value.
    it("doesn't share a mutable seed (regression test)", () => {
      waitsForPromise(async () => {
        const observable = (0, (_process || _load_process()).runCommand)(process.execPath, ['-e', 'process.stdout.write("hello"); process.exit(0)']);
        await observable.toPromise();
        expect((await observable.toPromise())).toBe('hello');
      });
    });

    describe('checkOutput compatibility', () => {
      if (origPlatform !== 'win32') {
        it('returns stdout of the running process', () => {
          waitsForPromise(async () => {
            const val = await (0, (_process || _load_process()).runCommand)('echo', ['-n', 'foo'], {
              env: process.env
            }).toPromise();
            expect(val).toEqual('foo');
          });
        });
        it('throws an error if the exit code !== 0', () => {
          waitsForPromise({ shouldReject: true }, async () => {
            await (0, (_process || _load_process()).runCommand)(process.execPath, ['-e', 'process.exit(1)']).toPromise();
          });
        });
      }
    });
  });

  describe('runCommandDetailed', () => {
    beforeEach(() => {
      // Suppress console spew.
      spyOn(console, 'log'); // suppress log printing
    });

    if (origPlatform === 'win32') {
      return;
    }

    it('sends the stdin to the process', () => {
      waitsForPromise(async () => {
        const output = await (0, (_process || _load_process()).runCommandDetailed)('cat', [], {
          input: 'hello'
        }).toPromise();
        expect(output.stdout).toBe('hello');
      });
    });

    it('enforces maxBuffer', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommandDetailed)('yes', [], { maxBuffer: 100 }).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.message).toContain('maxBuffer');
      });
    });

    it('returns stdout, stderr, and the exit code of the running process', () => {
      waitsForPromise(async () => {
        const val = await (0, (_process || _load_process()).runCommandDetailed)(process.execPath, ['-e', 'process.stdout.write("out"); process.stderr.write("err"); process.exit(0)']).toPromise();
        expect(val).toEqual({ stdout: 'out', stderr: 'err', exitCode: 0 });
      });
    });

    it("throws an error if the process can't be spawned", () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommandDetailed)('fakeCommand').toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.code).toBe('ENOENT');
        expect(error.name).toBe('ProcessSystemError');
      });
    });

    it('throws an error if the exit code !== 0', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommandDetailed)(process.execPath, ['-e', 'process.exit(1)']).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.name).toBe('ProcessExitError');
        expect(error.exitCode).toBe(1);
      });
    });

    it('accumulates the stderr if the process exits with a non-zero code', () => {
      waitsForPromise(async () => {
        let error;
        try {
          await (0, (_process || _load_process()).runCommandDetailed)(process.execPath, ['-e', 'process.stderr.write("oopsy"); process.exit(1)']).toPromise();
        } catch (err) {
          error = err;
        }

        if (!(error != null)) {
          throw new Error('Invariant violation: "error != null"');
        }

        expect(error.stderr).toBe('oopsy');
      });
    });
  });

  describe('exitEventToMessage', () => {
    it('exitCode', () => {
      expect((0, (_process || _load_process()).exitEventToMessage)(makeExitMessage(1))).toBe('exit code 1');
    });

    it('signal', () => {
      expect((0, (_process || _load_process()).exitEventToMessage)({ kind: 'exit', exitCode: null, signal: 'SIGTERM' })).toBe('signal SIGTERM');
    });
  });

  describe('preventStreamsFromThrowing', () => {
    let proc;
    beforeEach(() => {
      proc = {
        stdin: new _events.default(),
        stdout: new _events.default(),
        stderr: new _events.default()
      };
      spyOn(proc.stdin, 'addListener').andCallThrough();
      spyOn(proc.stdout, 'addListener').andCallThrough();
      spyOn(proc.stderr, 'addListener').andCallThrough();
      spyOn(proc.stdin, 'removeListener').andCallThrough();
      spyOn(proc.stdout, 'removeListener').andCallThrough();
      spyOn(proc.stderr, 'removeListener').andCallThrough();
    });

    it('adds listeners', () => {
      (0, (_process || _load_process()).preventStreamsFromThrowing)(proc);
      expect(proc.stdin.addListener).toHaveBeenCalledWith('error', jasmine.any(Function));
      expect(proc.stdout.addListener).toHaveBeenCalledWith('error', jasmine.any(Function));
      expect(proc.stderr.addListener).toHaveBeenCalledWith('error', jasmine.any(Function));
    });

    it('removes listeners when disposed', () => {
      const disposable = (0, (_process || _load_process()).preventStreamsFromThrowing)(proc);
      disposable.dispose();
      expect(proc.stdin.removeListener).toHaveBeenCalledWith('error', jasmine.any(Function));
      expect(proc.stdout.removeListener).toHaveBeenCalledWith('error', jasmine.any(Function));
      expect(proc.stderr.removeListener).toHaveBeenCalledWith('error', jasmine.any(Function));
    });
  });

  describe('logStreamErrors', () => {
    const logger = (0, (_log4js || _load_log4js()).getLogger)((_process || _load_process()).LOG_CATEGORY);
    let proc;
    beforeEach(() => {
      proc = {
        stdin: new _events.default(),
        stdout: new _events.default(),
        stderr: new _events.default()
      };

      // Add a no-op listener so the error events aren't thrown.
      proc.stdin.on('error', () => {});
      proc.stdout.on('error', () => {});
      proc.stderr.on('error', () => {});
    });

    it('logs errors', () => {
      (0, (_process || _load_process()).logStreamErrors)(proc, 'test', [], {});
      spyOn(logger, 'error');
      proc.stderr.emit('error', new Error('Test error'));
      expect(logger.error).toHaveBeenCalled();
    });

    it("doesn't log when disposed", () => {
      const disposable = (0, (_process || _load_process()).logStreamErrors)(proc, 'test', [], {});
      spyOn(logger, 'error');
      disposable.dispose();
      proc.stderr.emit('error', new Error('Test error'));
      expect(logger.error).not.toHaveBeenCalled();
    });
  });

  describe('ProcessSystemError', () => {
    it('contains the correct properties', () => {
      const proc = {};
      const originalError = {
        errno: 2,
        code: 'ETEST',
        path: 'path value',
        syscall: 'syscall value'
      };
      const err = new (_process || _load_process()).ProcessSystemError(originalError, proc);
      expect(err.errno).toBe(2);
      expect(err.code).toBe('ETEST');
      expect(err.path).toBe('path value');
      expect(err.syscall).toBe('syscall value');
      expect(err.process).toBe(proc);
    });
  });

  describe('scriptifyCommand', () => {
    if (process.platform === 'linux') {
      it('escapes correctly on linux', () => {
        waitsForPromise(async () => {
          const output = await (0, (_process || _load_process()).runCommand)(...(0, (_process || _load_process()).scriptifyCommand)('echo', ['a\\b c\\\\d e\\\\\\f g\\\\\\\\h "dubs" \'singles\'', 'one   two'])).toPromise();
          expect(output.trim()).toBe('a\\b c\\\\d e\\\\\\f g\\\\\\\\h "dubs" \'singles\' one   two');
        });
      });
    }
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

function makeExitMessage(exitCode) {
  return {
    kind: 'exit',
    exitCode,
    signal: null
  };
}