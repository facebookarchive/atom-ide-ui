'use strict';

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

var _observable;

function _load_observable() {
  return _observable = require('../observable');
}

var _eventKit;

function _load_eventKit() {
  return _eventKit = require('event-kit');
}

var _nullthrows;

function _load_nullthrows() {
  return _nullthrows = _interopRequireDefault(require('nullthrows'));
}

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

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

const setsAreEqual = (a, b) => a.size === b.size && Array.from(a).every(b.has.bind(b));
const diffsAreEqual = (a, b) => setsAreEqual(a.added, b.added) && setsAreEqual(a.removed, b.removed);
const createDisposable = () => {
  const disposable = new (_eventKit || _load_eventKit()).Disposable(() => {});
  spyOn(disposable, 'dispose');
  return disposable;
};

describe('nuclide-commons/observable', () => {
  describe('splitStream', () => {
    it('splits streams', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const input = ['foo\nbar', '\n', '\nba', 'z', '\nblar'];
        const output = yield (0, (_observable || _load_observable()).splitStream)(_rxjsBundlesRxMinJs.Observable.from(input)).toArray().toPromise();
        expect(output).toEqual(['foo\n', 'bar\n', '\n', 'baz\n', 'blar']);
      }));
    });

    it('splits streams without the newline', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const input = ['foo\nbar', '\n', '\nba', 'z', '\nblar'];
        const output = yield (0, (_observable || _load_observable()).splitStream)(_rxjsBundlesRxMinJs.Observable.from(input), false).toArray().toPromise();
        expect(output).toEqual(['foo', 'bar', '', 'baz', 'blar']);
      }));
    });
  });

  describe('takeWhileInclusive', () => {
    it('completes the stream when something matches the predicate', () => {
      const source = new _rxjsBundlesRxMinJs.Subject();
      const result = source.let((0, (_observable || _load_observable()).takeWhileInclusive)(x => x !== 2));
      const next = jasmine.createSpy();
      const complete = jasmine.createSpy();
      result.subscribe({ next, complete });
      source.next(1);
      source.next(2);
      source.next(3);
      expect(complete).toHaveBeenCalled();
      expect(next.calls.map(call => call.args[0])).toEqual([1, 2]);
    });
  });

  describe('cacheWhileSubscribed', () => {
    let input = null;
    let output = null;

    function subscribeArray(arr) {
      return output.subscribe(x => arr.push(x));
    }
    beforeEach(() => {
      input = new _rxjsBundlesRxMinJs.Subject();
      output = (0, (_observable || _load_observable()).cacheWhileSubscribed)(input);
    });

    it('should provide cached values to late subscribers', () => {
      const arr1 = [];
      const arr2 = [];

      input.next(0);
      const sub1 = subscribeArray(arr1);
      input.next(1);
      input.next(2);
      const sub2 = subscribeArray(arr2);

      sub1.unsubscribe();
      sub2.unsubscribe();
      expect(arr1).toEqual([1, 2]);
      expect(arr2).toEqual([2]);
    });

    it('should not store stale events when everyone is unsubscribed', () => {
      const arr1 = [];
      const arr2 = [];

      input.next(0);
      const sub1 = subscribeArray(arr1);
      input.next(1);
      sub1.unsubscribe();

      input.next(2);

      const sub2 = subscribeArray(arr2);
      input.next(3);
      sub2.unsubscribe();

      expect(arr1).toEqual([1]);
      expect(arr2).toEqual([3]);
    });
  });

  describe('diffSets', () => {
    it('emits a diff for the first item', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const diffsPromise = source.let((0, (_observable || _load_observable()).diffSets)()).toArray().toPromise();
        source.next(new Set([1, 2, 3]));
        source.complete();
        const diffs = yield diffsPromise;
        expect(diffs.length).toBe(1);
        expect(diffsAreEqual(diffs[0], {
          added: new Set([1, 2, 3]),
          removed: new Set()
        })).toBe(true);
      }));
    });

    it('correctly identifies removed items', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const diffsPromise = source.let((0, (_observable || _load_observable()).diffSets)()).toArray().toPromise();
        source.next(new Set([1, 2, 3]));
        source.next(new Set([1, 2]));
        source.complete();
        const diffs = yield diffsPromise;
        expect(setsAreEqual(diffs[1].removed, new Set([3]))).toBe(true);
      }));
    });

    it('correctly identifies removed items when a hash function is used', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const diffsPromise = source.let((0, (_observable || _load_observable()).diffSets)(function (x) {
          return x.key;
        })).toArray().toPromise();
        const firstItems = [{ key: 1 }, { key: 2 }, { key: 3 }];
        const secondItems = [{ key: 1 }, { key: 2 }];
        source.next(new Set(firstItems));
        source.next(new Set(secondItems));
        source.complete();
        const diffs = yield diffsPromise;
        expect(setsAreEqual(diffs[1].removed, new Set([firstItems[2]]))).toBe(true);
      }));
    });

    it('correctly identifies added items', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const diffsPromise = source.let((0, (_observable || _load_observable()).diffSets)()).toArray().toPromise();
        source.next(new Set([1, 2]));
        source.next(new Set([1, 2, 3]));
        source.complete();
        const diffs = yield diffsPromise;
        expect(setsAreEqual(diffs[1].added, new Set([3]))).toBe(true);
      }));
    });

    it('correctly identifies added items when a hash function is used', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const diffsPromise = source.let((0, (_observable || _load_observable()).diffSets)(function (x) {
          return x.key;
        })).toArray().toPromise();
        const firstItems = [{ key: 1 }, { key: 2 }];
        const secondItems = [{ key: 1 }, { key: 2 }, { key: 3 }];
        source.next(new Set(firstItems));
        source.next(new Set(secondItems));
        source.complete();
        const diffs = yield diffsPromise;
        expect(setsAreEqual(diffs[1].added, new Set([secondItems[2]]))).toBe(true);
      }));
    });

    it("doesn't emit a diff when nothing changes", () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const diffsPromise = source.let((0, (_observable || _load_observable()).diffSets)()).toArray().toPromise();
        source.next(new Set([1, 2, 3]));
        source.next(new Set([1, 2, 3]));
        source.complete();
        const diffs = yield diffsPromise;
        // Make sure we only get one diff (from the implicit initial empty set).
        expect(diffs.length).toBe(1);
      }));
    });

    it("doesn't emit a diff when nothing changes and a hash function is used", () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const diffsPromise = source.let((0, (_observable || _load_observable()).diffSets)(function (x) {
          return x.key;
        })).toArray().toPromise();
        const firstItems = [{ key: 1 }, { key: 2 }, { key: 3 }];
        const secondItems = [{ key: 1 }, { key: 2 }, { key: 3 }];
        source.next(new Set(firstItems));
        source.next(new Set(secondItems));
        source.complete();
        const diffs = yield diffsPromise;
        // Make sure we only get one diff (from the implicit initial empty set).
        expect(diffs.length).toBe(1);
      }));
    });
  });

  describe('reconcileSetDiffs', () => {
    it("calls the add action for each item that's added", () => {
      const diffs = new _rxjsBundlesRxMinJs.Subject();
      const addAction = jasmine.createSpy().andReturn(new (_eventKit || _load_eventKit()).Disposable(() => {}));
      (0, (_observable || _load_observable()).reconcileSetDiffs)(diffs, addAction);
      diffs.next({
        added: new Set(['a', 'b']),
        removed: new Set()
      });
      expect(addAction.calls.map(call => call.args[0])).toEqual(['a', 'b']);
    });

    it("disposes for each item that's removed", () => {
      const diffs = new _rxjsBundlesRxMinJs.Subject();
      const disposables = {
        a: createDisposable(),
        b: createDisposable()
      };
      const addAction = item => disposables[item];
      (0, (_observable || _load_observable()).reconcileSetDiffs)(diffs, addAction);
      diffs.next({
        added: new Set(['a', 'b']),
        removed: new Set()
      });
      diffs.next({
        added: new Set(),
        removed: new Set(['a', 'b'])
      });
      expect(disposables.a.dispose).toHaveBeenCalled();
      expect(disposables.b.dispose).toHaveBeenCalled();
    });

    it('disposes for all items when disposed', () => {
      const diffs = new _rxjsBundlesRxMinJs.Subject();
      const disposables = {
        a: createDisposable(),
        b: createDisposable()
      };
      const addAction = item => disposables[item];
      const reconciliationDisposable = (0, (_observable || _load_observable()).reconcileSetDiffs)(diffs, addAction);
      diffs.next({
        added: new Set(['a', 'b']),
        removed: new Set()
      });
      reconciliationDisposable.dispose();
      expect(disposables.a.dispose).toHaveBeenCalled();
      expect(disposables.b.dispose).toHaveBeenCalled();
    });

    it("disposes for each item that's removed when a hash function is used", () => {
      const diffs = new _rxjsBundlesRxMinJs.Subject();
      const disposables = {
        a: createDisposable(),
        b: createDisposable()
      };
      const addAction = item => disposables[item.key];
      (0, (_observable || _load_observable()).reconcileSetDiffs)(diffs, addAction, x => x.key);
      diffs.next({
        added: new Set([{ key: 'a' }, { key: 'b' }]),
        removed: new Set()
      });
      diffs.next({
        added: new Set(),
        removed: new Set([{ key: 'a' }, { key: 'b' }])
      });
      expect(disposables.a.dispose).toHaveBeenCalled();
      expect(disposables.b.dispose).toHaveBeenCalled();
    });
  });

  describe('toggle', () => {
    let toggler = null;
    let source = null;
    let output = null;
    let outputArray = null;

    beforeEach(() => {
      toggler = new _rxjsBundlesRxMinJs.Subject();
      // Deferred so individual 'it' blocks can set the source on the fly.
      output = _rxjsBundlesRxMinJs.Observable.defer(() => source).let((0, (_observable || _load_observable()).toggle)(toggler));
    });

    describe('with a standard source', () => {
      let realSource = null;

      beforeEach(() => {
        source = realSource = new _rxjsBundlesRxMinJs.Subject();
        outputArray = [];
        output.subscribe(x => outputArray.push(x));
      });

      it("should not emit anything before the toggler is set to 'true'", () => {
        realSource.next(5);
        expect(outputArray).toEqual([]);
      });

      it("should start emitting events when the toggler is set to 'true'", () => {
        toggler.next(true);
        realSource.next(5);
        expect(outputArray).toEqual([5]);
      });

      it("should stop emitting events when the toggler is set to 'false'", () => {
        toggler.next(true);
        toggler.next(false);
        realSource.next(4);
        expect(outputArray).toEqual([]);
      });
    });

    // These ones are set apart from the rest because we want a cold observable to explicitly test
    // that toggling off unsubscribes and then resubscribes.
    describe('subscription behavior', () => {
      beforeEach(() => {
        source = _rxjsBundlesRxMinJs.Observable.of(1, 2, 3);
        outputArray = [];
        output.subscribe(x => outputArray.push(x));
      });

      it('should unsubscribe and resusbscribe when toggled off and back on', () => {
        expect(outputArray).toEqual([]);

        toggler.next(true);

        expect(outputArray).toEqual([1, 2, 3]);

        toggler.next(false);
        toggler.next(true);

        expect(outputArray).toEqual([1, 2, 3, 1, 2, 3]);
      });

      it('should not re-subscribe on duplicate toggler values', () => {
        toggler.next(true);
        toggler.next(true);
        expect(outputArray).toEqual([1, 2, 3]);
      });
    });
  });

  describe('concatLatest', () => {
    it('should work with empty input', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const output = yield (0, (_observable || _load_observable()).concatLatest)().toArray().toPromise();
        expect(output).toEqual([]);
      }));
    });

    it('should work with several observables', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const output = yield (0, (_observable || _load_observable()).concatLatest)(_rxjsBundlesRxMinJs.Observable.of([], [1]), _rxjsBundlesRxMinJs.Observable.of([2]), _rxjsBundlesRxMinJs.Observable.of([3], [3, 4])).toArray().toPromise();
        expect(output).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]);
      }));
    });
  });

  describe('throttle', () => {
    it('emits the leading item immeditately by default', () => {
      const source = _rxjsBundlesRxMinJs.Observable.of(1, 2).merge(_rxjsBundlesRxMinJs.Observable.never());
      const spy = jasmine.createSpy();
      source.let((0, (_observable || _load_observable()).throttle)(_rxjsBundlesRxMinJs.Observable.never())).subscribe(spy);
      expect(spy).toHaveBeenCalledWith(1);
    });

    it("doesn't emit the leading item twice", () => {
      const source = _rxjsBundlesRxMinJs.Observable.of(1).merge(_rxjsBundlesRxMinJs.Observable.never());
      const notifier = _rxjsBundlesRxMinJs.Observable.of(null); // emits immediately on subscription.
      const spy = jasmine.createSpy();
      source.let((0, (_observable || _load_observable()).throttle)(notifier)).subscribe(spy);
      expect(spy.callCount).toBe(1);
    });

    it('throttles', () => {
      const source = new _rxjsBundlesRxMinJs.Subject();
      const notifier = new _rxjsBundlesRxMinJs.Subject();
      const spy = jasmine.createSpy();
      source.let((0, (_observable || _load_observable()).throttle)(notifier)).subscribe(spy);
      source.next(1);
      spy.reset();
      source.next(2);
      expect(spy).not.toHaveBeenCalled();
      notifier.next();
      expect(spy).toHaveBeenCalledWith(2);
      spy.reset();
      source.next(3);
      expect(spy).not.toHaveBeenCalled();
      source.next(4);
      expect(spy).not.toHaveBeenCalled();
      notifier.next();
      expect(spy).toHaveBeenCalledWith(4);
      expect(spy.callCount).toBe(1);
    });

    it('subscribes to the source once per subscription', () => {
      const spy = jasmine.createSpy();
      const source = _rxjsBundlesRxMinJs.Observable.create(spy);
      source.let((0, (_observable || _load_observable()).throttle)(_rxjsBundlesRxMinJs.Observable.of(null))).subscribe();
      expect(spy.callCount).toBe(1);
    });
  });

  describe('nextAnimationFrame', () => {
    let oldRequestAnimationFrame;
    let oldCancelAnimationFrame;
    beforeEach(() => {
      oldRequestAnimationFrame = window.requestAnimationFrame;
      oldCancelAnimationFrame = window.cancelAnimationFrame;
      window.requestAnimationFrame = jasmine.createSpy('requestAnimationFrame');
      window.cancelAnimationFrame = jasmine.createSpy('cancelAnimationFrame');
    });

    afterEach(() => {
      window.requestAnimationFrame = oldRequestAnimationFrame;
      window.cancelAnimationFrame = oldCancelAnimationFrame;
    });

    it('schedules next using requestAnimationFrame', () => {
      const sub = (_observable || _load_observable()).nextAnimationFrame.subscribe();
      expect(window.requestAnimationFrame).toHaveBeenCalled();
      sub.unsubscribe();
    });

    it('uses cancelAnimationFrame when unsubscribed', () => {
      const sub = (_observable || _load_observable()).nextAnimationFrame.subscribe();
      expect(window.cancelAnimationFrame).not.toHaveBeenCalled();
      sub.unsubscribe();
      expect(window.cancelAnimationFrame).toHaveBeenCalled();
    });
  });

  describe('bufferUntil', () => {
    it('buffers based on the predicate', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const chunks = yield _rxjsBundlesRxMinJs.Observable.of(1, 2, 3, 4).let((0, (_observable || _load_observable()).bufferUntil)(function (x) {
          return x % 2 === 0;
        })).toArray().toPromise();
        expect(chunks).toEqual([[1, 2], [3, 4]]);
      }));
    });

    it('provides the current buffer', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const chunks = yield _rxjsBundlesRxMinJs.Observable.of(1, 2, 3, 4).let((0, (_observable || _load_observable()).bufferUntil)(function (x, buffer) {
          return buffer.length === 2;
        })).toArray().toPromise();
        expect(chunks).toEqual([[1, 2], [3, 4]]);
      }));
    });
  });

  describe('completingSwitchMap', () => {
    it('propagates completions to the inner observable', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const results = yield _rxjsBundlesRxMinJs.Observable.of(1, 2).let((0, (_observable || _load_observable()).completingSwitchMap)(function (x) {
          return _rxjsBundlesRxMinJs.Observable.concat(_rxjsBundlesRxMinJs.Observable.of(x + 1), _rxjsBundlesRxMinJs.Observable.never());
        })).toArray().toPromise();
        expect(results).toEqual([2, 3]);
      }));
    });
  });

  describe('fastDebounce', () => {
    it('debounces events', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        let nextSpy;
        const originalCreate = _rxjsBundlesRxMinJs.Observable.create.bind(_rxjsBundlesRxMinJs.Observable);
        // Spy on the created observer's next to ensure that we always cancel
        // the last debounced timer on unsubscribe.
        spyOn(_rxjsBundlesRxMinJs.Observable, 'create').andCallFake(function (callback) {
          return originalCreate(function (observer) {
            nextSpy = spyOn(observer, 'next').andCallThrough();
            return callback(observer);
          });
        });

        const subject = new _rxjsBundlesRxMinJs.Subject();
        const promise = subject.let((0, (_observable || _load_observable()).fastDebounce)(10)).toArray().toPromise();

        subject.next(1);
        subject.next(2);
        advanceClock(20);

        subject.next(3);
        advanceClock(5);

        subject.next(4);
        advanceClock(15);

        subject.next(5);
        subject.complete();
        advanceClock(20);

        expect((yield promise)).toEqual([2, 4]);
        expect((0, (_nullthrows || _load_nullthrows()).default)(nextSpy).callCount).toBe(2);
      }));
    });

    it('passes errors through immediately', () => {
      let caught = false;
      _rxjsBundlesRxMinJs.Observable.throw(1).let((0, (_observable || _load_observable()).fastDebounce)(10)).subscribe({
        error() {
          caught = true;
        }
      });
      expect(caught).toBe(true);
    });
  });

  describe('microtask', () => {
    it('is cancelable', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const spy = jasmine.createSpy();
        const sub = (_observable || _load_observable()).microtask.subscribe(spy);
        let resolve;
        const promise = new Promise(function (r) {
          return resolve = r;
        });
        sub.unsubscribe();
        process.nextTick(function () {
          expect(spy).not.toHaveBeenCalled();
          resolve();
        });
        return promise;
      }));
    });
  });

  describe('macrotask', () => {
    it('is cancelable', () => {
      spyOn(global, 'clearImmediate').andCallThrough();
      const sub = (_observable || _load_observable()).macrotask.subscribe(() => {});
      sub.unsubscribe();
      expect(clearImmediate).toHaveBeenCalled();
    });
  });

  describe('toCancellablePromise', () => {
    it('completes successfully', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const cancellable = (0, (_observable || _load_observable()).toCancellablePromise)(source);
        source.next(42);
        source.complete();
        const result = yield cancellable.promise;
        expect(result).toBe(42);
      }));
    });

    it('error throws from promise', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const cancellable = (0, (_observable || _load_observable()).toCancellablePromise)(source);
        source.error(42);
        let thrown = false;
        try {
          yield cancellable.promise;
        } catch (e) {
          expect(e).toBe(42);
          thrown = true;
        }
        expect(thrown).toBe(true);
      }));
    });

    it('cancel causes promise to throw', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const cancellable = (0, (_observable || _load_observable()).toCancellablePromise)(source);
        cancellable.cancel();
        let thrown = false;
        try {
          yield cancellable.promise;
        } catch (e) {
          thrown = true;
          expect(e instanceof (_observable || _load_observable()).PromiseCancelledError).toBe(true);
        }
        expect(thrown).toBe(true);
      }));
    });

    it('cancel after complete is a noop', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const cancellable = (0, (_observable || _load_observable()).toCancellablePromise)(source);
        source.next(42);
        source.complete();
        cancellable.cancel();
        const result = yield cancellable.promise;
        expect(result).toBe(42);
      }));
    });

    it('cancel after error is a noop', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const source = new _rxjsBundlesRxMinJs.Subject();
        const cancellable = (0, (_observable || _load_observable()).toCancellablePromise)(source);
        source.error(42);
        let thrown = false;

        // This should not throw, nor should it override the result
        cancellable.cancel();

        try {
          yield cancellable.promise;
        } catch (e) {
          expect(e).toBe(42);
          thrown = true;
        }
        expect(thrown).toBe(true);
      }));
    });
  });

  describe('SingletonExecutor', () => {
    it('isExecuting()', () => {
      const executor = new (_observable || _load_observable()).SingletonExecutor();
      expect(executor.isExecuting()).toBe(false);

      const source = new _rxjsBundlesRxMinJs.Subject();
      const result = executor.execute(source);
      result.catch(() => 'silence unhandled promise rejection warning');
      expect(executor.isExecuting()).toBe(true);

      executor.cancel();
      expect(executor.isExecuting()).toBe(false);
    });

    it('completing task normally', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const executor = new (_observable || _load_observable()).SingletonExecutor();
        const source = new _rxjsBundlesRxMinJs.Subject();

        const result = executor.execute(source);
        expect(executor.isExecuting()).toBe(true);

        source.next(42);
        source.complete();
        expect((yield result)).toBe(42);
        expect(executor.isExecuting()).toBe(false);
      }));
    });

    it('completing task by error', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const executor = new (_observable || _load_observable()).SingletonExecutor();
        const source = new _rxjsBundlesRxMinJs.Subject();

        const result = executor.execute(source);
        expect(executor.isExecuting()).toBe(true);

        source.error(42);
        let thrown = false;
        try {
          yield result;
        } catch (e) {
          expect(e).toBe(42);
          thrown = true;
        }
        expect(executor.isExecuting()).toBe(false);
        expect(thrown).toBe(true);
      }));
    });

    it('scheduling second task while first is in flight', () => {
      waitsForPromise((0, _asyncToGenerator.default)(function* () {
        const executor = new (_observable || _load_observable()).SingletonExecutor();

        const source1 = new _rxjsBundlesRxMinJs.Subject();
        const result1 = executor.execute(source1);
        expect(executor.isExecuting()).toBe(true);

        const source2 = new _rxjsBundlesRxMinJs.Subject();
        const result2 = executor.execute(source2);
        expect(executor.isExecuting()).toBe(true);

        let thrown = false;
        try {
          yield result1;
        } catch (e) {
          expect(e instanceof (_observable || _load_observable()).PromiseCancelledError).toBe(true);
          thrown = true;
        }
        expect(executor.isExecuting()).toBe(true);
        expect(thrown).toBe(true);

        source2.next(42);
        source2.complete();

        expect((yield result2)).toBe(42);
        expect(executor.isExecuting()).toBe(false);
      }));
    });
  });

  describe('poll', () => {
    beforeEach(() => {
      jasmine.unspy(global, 'setTimeout');
      jasmine.unspy(Date, 'now');
    });

    it('subscribes to the observable synchronously', () => {
      const source = _rxjsBundlesRxMinJs.Observable.never();
      const spy = spyOn(source, 'subscribe').andCallThrough();
      const sub = source.let((0, (_observable || _load_observable()).poll)(10)).subscribe();
      expect(spy.callCount).toBe(1);
      sub.unsubscribe();
    });

    it('resubscribes when complete', () => {
      let sub;
      let spy;
      let mostRecentObserver;
      runs(() => {
        const source = _rxjsBundlesRxMinJs.Observable.create(observer => {
          mostRecentObserver = observer;
        });
        spy = spyOn(source, 'subscribe').andCallThrough();
        sub = source.let((0, (_observable || _load_observable()).poll)(10)).subscribe();
        expect(spy.callCount).toBe(1);
        mostRecentObserver.next();
      });

      // Even though we're waiting longer than the delay, it hasn't completed yet so we shouldn't
      // resubscribe.
      waitsForPromise(() => sleep(30));
      runs(() => {
        expect(spy.callCount).toBe(1);
        mostRecentObserver.complete();
        expect(spy.callCount).toBe(1);
      });

      // Now that the source has completed, we should subscribe again.
      waitsForPromise(() => sleep(30));
      runs(() => {
        expect(spy.callCount).toBe(2);
        sub.unsubscribe();
      });
    });

    it("doesn't resubscribe to the source when you unsubscribe", () => {
      let spy;
      runs(() => {
        const source = new _rxjsBundlesRxMinJs.Subject();
        spy = spyOn(source, 'subscribe').andCallThrough();
        source.let((0, (_observable || _load_observable()).poll)(10)).take(1) // This will unsubscribe after the first element.
        .subscribe();
        expect(spy.callCount).toBe(1);
        source.next();
      });
      waitsForPromise(() => sleep(30));
      runs(() => {
        expect(spy.callCount).toBe(1);
      });
    });
  });
});

const sleep = n => new Promise(resolve => {
  setTimeout(resolve, n);
});