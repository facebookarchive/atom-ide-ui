'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPackage;


/**
 * Create an Atom package from an Activation constructor.
 *
 * Atom packages are obstensibly singletons, however they contain `activate()` and `deactivate()`
 * lifecycle methods which can be called multiple times. There's no use-case (so far as we know) for
 * invoking any other package methods while a package is not activated. Therefore, it makes more
 * sense to build packages as instances, constructed when a package is activated and destroyed when
 * the package is deactivated.
 *
 * Atom uses a plain `require` to load the module, and not babel's `require` interop. So if
 * `createPackage` were used as `export default createPackage(..)`, then Atom wouldn't be
 * able to find any package methods because the ES Module transform would output
 * `module.exports.default = {..};`. To workaround this, the module's `module.exports` is passed
 * to `createPackage` so we can attach whatever properties to it.
 *
 * It was a conscious decision to use `createPackage(module.exports, Activation)` instead of
 * `module.exports = createPackage(Activation)`, to avoid code style misunderstandings wrt
 * CommonJS vs ES Modules.
 */
function createPackage(moduleExports, Activation) {
  let activation = null;

  // Proxy method calls on the package to the activation object.
  for (const property of getPropertyList(Activation.prototype)) {
    if (typeof Activation.prototype[property] !== 'function') {
      continue;
    }
    if (property === 'constructor') {
      continue;
    }
    if (property === 'initialize') {
      throw new Error('Your activation class contains an "initialize" method, but that work should be done in the' + ' constructor.');
    }
    if (property === 'deactivate') {
      throw new Error('Your activation class contains an "deactivate" method. Please use "dispose" instead.');
    }

    moduleExports[property] = function (...args) {
      if (!(activation != null)) {
        throw new Error('Package not initialized');
      }

      return activation[property](...args);
    };
  }

  /**
   * Calling `initialize()` creates a new instance.
   */
  moduleExports.initialize = initialState => {
    if (!(activation == null)) {
      throw new Error('Package already initialized');
    }

    activation = new Activation(initialState);
  };

  /**
   * The `deactivate()` method is special-cased to null our activation instance reference.
   */
  moduleExports.deactivate = () => {
    if (!(activation != null)) {
      throw new Error('Package not initialized');
    }

    if (typeof activation.dispose === 'function') {
      activation.dispose();
    }
    activation = null;
  };
} /**
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

function getPrototypeChain(prototype) {
  let currentPrototype = prototype;
  const prototypes = [];
  while (currentPrototype != null) {
    prototypes.push(currentPrototype);
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }
  return prototypes;
}

/**
 * List the properties (including inherited ones) of the provided prototype, excluding the ones
 * inherited from `Object`.
 */
function getPropertyList(prototype) {
  const properties = [];
  for (const proto of getPrototypeChain(prototype)) {
    if (proto === Object.prototype) {
      break;
    }
    for (const property of Object.getOwnPropertyNames(proto)) {
      properties.push(property);
    }
  }
  return properties;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZVBhY2thZ2UuanMiXSwibmFtZXMiOlsiY3JlYXRlUGFja2FnZSIsIm1vZHVsZUV4cG9ydHMiLCJBY3RpdmF0aW9uIiwiYWN0aXZhdGlvbiIsInByb3BlcnR5IiwiZ2V0UHJvcGVydHlMaXN0IiwicHJvdG90eXBlIiwiRXJyb3IiLCJhcmdzIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxTdGF0ZSIsImRlYWN0aXZhdGUiLCJkaXNwb3NlIiwiZ2V0UHJvdG90eXBlQ2hhaW4iLCJjdXJyZW50UHJvdG90eXBlIiwicHJvdG90eXBlcyIsInB1c2giLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInByb3BlcnRpZXMiLCJwcm90byIsImdldE93blByb3BlcnR5TmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWlDd0JBLGE7OztBQW5CeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmUsU0FBU0EsYUFBVCxDQUNiQyxhQURhLEVBRWJDLFVBRmEsRUFHUDtBQUNOLE1BQUlDLGFBQWEsSUFBakI7O0FBRUE7QUFDQSxPQUFLLE1BQU1DLFFBQVgsSUFBdUJDLGdCQUFnQkgsV0FBV0ksU0FBM0IsQ0FBdkIsRUFBOEQ7QUFDNUQsUUFBSSxPQUFPSixXQUFXSSxTQUFYLENBQXFCRixRQUFyQixDQUFQLEtBQTBDLFVBQTlDLEVBQTBEO0FBQ3hEO0FBQ0Q7QUFDRCxRQUFJQSxhQUFhLGFBQWpCLEVBQWdDO0FBQzlCO0FBQ0Q7QUFDRCxRQUFJQSxhQUFhLFlBQWpCLEVBQStCO0FBQzdCLFlBQU0sSUFBSUcsS0FBSixDQUNKLCtGQUNFLGVBRkUsQ0FBTjtBQUlEO0FBQ0QsUUFBSUgsYUFBYSxZQUFqQixFQUErQjtBQUM3QixZQUFNLElBQUlHLEtBQUosQ0FDSixzRkFESSxDQUFOO0FBR0Q7O0FBRUROLGtCQUFjRyxRQUFkLElBQTBCLFVBQVMsR0FBR0ksSUFBWixFQUFrQjtBQUFBLFlBQ2hDTCxjQUFjLElBRGtCO0FBQUEsd0JBQ1oseUJBRFk7QUFBQTs7QUFFMUMsYUFBT0EsV0FBV0MsUUFBWCxFQUFxQixHQUFHSSxJQUF4QixDQUFQO0FBQ0QsS0FIRDtBQUlEOztBQUVEOzs7QUFHQVAsZ0JBQWNRLFVBQWQsR0FBNEJDLFlBQUQsSUFBaUM7QUFBQSxVQUNoRFAsY0FBYyxJQURrQztBQUFBLHNCQUM1Qiw2QkFENEI7QUFBQTs7QUFFMURBLGlCQUFhLElBQUlELFVBQUosQ0FBZVEsWUFBZixDQUFiO0FBQ0QsR0FIRDs7QUFLQTs7O0FBR0FULGdCQUFjVSxVQUFkLEdBQTJCLE1BQVk7QUFBQSxVQUMzQlIsY0FBYyxJQURhO0FBQUEsc0JBQ1AseUJBRE87QUFBQTs7QUFFckMsUUFBSSxPQUFPQSxXQUFXUyxPQUFsQixLQUE4QixVQUFsQyxFQUE4QztBQUM1Q1QsaUJBQVdTLE9BQVg7QUFDRDtBQUNEVCxpQkFBYSxJQUFiO0FBQ0QsR0FORDtBQU9ELEMsQ0FuRkQ7Ozs7Ozs7Ozs7OztBQXFGQSxTQUFTVSxpQkFBVCxDQUEyQlAsU0FBM0IsRUFBcUU7QUFDbkUsTUFBSVEsbUJBQW1CUixTQUF2QjtBQUNBLFFBQU1TLGFBQWEsRUFBbkI7QUFDQSxTQUFPRCxvQkFBb0IsSUFBM0IsRUFBaUM7QUFDL0JDLGVBQVdDLElBQVgsQ0FBZ0JGLGdCQUFoQjtBQUNBQSx1QkFBbUJHLE9BQU9DLGNBQVAsQ0FBc0JKLGdCQUF0QixDQUFuQjtBQUNEO0FBQ0QsU0FBT0MsVUFBUDtBQUNEOztBQUVEOzs7O0FBSUEsU0FBU1YsZUFBVCxDQUF5QkMsU0FBekIsRUFBK0Q7QUFDN0QsUUFBTWEsYUFBYSxFQUFuQjtBQUNBLE9BQUssTUFBTUMsS0FBWCxJQUFvQlAsa0JBQWtCUCxTQUFsQixDQUFwQixFQUFrRDtBQUNoRCxRQUFJYyxVQUFXSCxNQUFELENBQWNYLFNBQTVCLEVBQXVDO0FBQ3JDO0FBQ0Q7QUFDRCxTQUFLLE1BQU1GLFFBQVgsSUFBdUJhLE9BQU9JLG1CQUFQLENBQTJCRCxLQUEzQixDQUF2QixFQUEwRDtBQUN4REQsaUJBQVdILElBQVgsQ0FBZ0JaLFFBQWhCO0FBQ0Q7QUFDRjtBQUNELFNBQU9lLFVBQVA7QUFDRCIsImZpbGUiOiJjcmVhdGVQYWNrYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IGludmFyaWFudCBmcm9tICdhc3NlcnQnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBBdG9tIHBhY2thZ2UgZnJvbSBhbiBBY3RpdmF0aW9uIGNvbnN0cnVjdG9yLlxuICpcbiAqIEF0b20gcGFja2FnZXMgYXJlIG9ic3RlbnNpYmx5IHNpbmdsZXRvbnMsIGhvd2V2ZXIgdGhleSBjb250YWluIGBhY3RpdmF0ZSgpYCBhbmQgYGRlYWN0aXZhdGUoKWBcbiAqIGxpZmVjeWNsZSBtZXRob2RzIHdoaWNoIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuIFRoZXJlJ3Mgbm8gdXNlLWNhc2UgKHNvIGZhciBhcyB3ZSBrbm93KSBmb3JcbiAqIGludm9raW5nIGFueSBvdGhlciBwYWNrYWdlIG1ldGhvZHMgd2hpbGUgYSBwYWNrYWdlIGlzIG5vdCBhY3RpdmF0ZWQuIFRoZXJlZm9yZSwgaXQgbWFrZXMgbW9yZVxuICogc2Vuc2UgdG8gYnVpbGQgcGFja2FnZXMgYXMgaW5zdGFuY2VzLCBjb25zdHJ1Y3RlZCB3aGVuIGEgcGFja2FnZSBpcyBhY3RpdmF0ZWQgYW5kIGRlc3Ryb3llZCB3aGVuXG4gKiB0aGUgcGFja2FnZSBpcyBkZWFjdGl2YXRlZC5cbiAqXG4gKiBBdG9tIHVzZXMgYSBwbGFpbiBgcmVxdWlyZWAgdG8gbG9hZCB0aGUgbW9kdWxlLCBhbmQgbm90IGJhYmVsJ3MgYHJlcXVpcmVgIGludGVyb3AuIFNvIGlmXG4gKiBgY3JlYXRlUGFja2FnZWAgd2VyZSB1c2VkIGFzIGBleHBvcnQgZGVmYXVsdCBjcmVhdGVQYWNrYWdlKC4uKWAsIHRoZW4gQXRvbSB3b3VsZG4ndCBiZVxuICogYWJsZSB0byBmaW5kIGFueSBwYWNrYWdlIG1ldGhvZHMgYmVjYXVzZSB0aGUgRVMgTW9kdWxlIHRyYW5zZm9ybSB3b3VsZCBvdXRwdXRcbiAqIGBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gey4ufTtgLiBUbyB3b3JrYXJvdW5kIHRoaXMsIHRoZSBtb2R1bGUncyBgbW9kdWxlLmV4cG9ydHNgIGlzIHBhc3NlZFxuICogdG8gYGNyZWF0ZVBhY2thZ2VgIHNvIHdlIGNhbiBhdHRhY2ggd2hhdGV2ZXIgcHJvcGVydGllcyB0byBpdC5cbiAqXG4gKiBJdCB3YXMgYSBjb25zY2lvdXMgZGVjaXNpb24gdG8gdXNlIGBjcmVhdGVQYWNrYWdlKG1vZHVsZS5leHBvcnRzLCBBY3RpdmF0aW9uKWAgaW5zdGVhZCBvZlxuICogYG1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGFja2FnZShBY3RpdmF0aW9uKWAsIHRvIGF2b2lkIGNvZGUgc3R5bGUgbWlzdW5kZXJzdGFuZGluZ3Mgd3J0XG4gKiBDb21tb25KUyB2cyBFUyBNb2R1bGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWNrYWdlKFxuICBtb2R1bGVFeHBvcnRzOiBPYmplY3QsXG4gIEFjdGl2YXRpb246IENsYXNzPGFueT4sXG4pOiB2b2lkIHtcbiAgbGV0IGFjdGl2YXRpb24gPSBudWxsO1xuXG4gIC8vIFByb3h5IG1ldGhvZCBjYWxscyBvbiB0aGUgcGFja2FnZSB0byB0aGUgYWN0aXZhdGlvbiBvYmplY3QuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgZ2V0UHJvcGVydHlMaXN0KEFjdGl2YXRpb24ucHJvdG90eXBlKSkge1xuICAgIGlmICh0eXBlb2YgQWN0aXZhdGlvbi5wcm90b3R5cGVbcHJvcGVydHldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHByb3BlcnR5ID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHByb3BlcnR5ID09PSAnaW5pdGlhbGl6ZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdXIgYWN0aXZhdGlvbiBjbGFzcyBjb250YWlucyBhbiBcImluaXRpYWxpemVcIiBtZXRob2QsIGJ1dCB0aGF0IHdvcmsgc2hvdWxkIGJlIGRvbmUgaW4gdGhlJyArXG4gICAgICAgICAgJyBjb25zdHJ1Y3Rvci4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHByb3BlcnR5ID09PSAnZGVhY3RpdmF0ZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdXIgYWN0aXZhdGlvbiBjbGFzcyBjb250YWlucyBhbiBcImRlYWN0aXZhdGVcIiBtZXRob2QuIFBsZWFzZSB1c2UgXCJkaXNwb3NlXCIgaW5zdGVhZC4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBtb2R1bGVFeHBvcnRzW3Byb3BlcnR5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIGludmFyaWFudChhY3RpdmF0aW9uICE9IG51bGwsICdQYWNrYWdlIG5vdCBpbml0aWFsaXplZCcpO1xuICAgICAgcmV0dXJuIGFjdGl2YXRpb25bcHJvcGVydHldKC4uLmFyZ3MpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGluZyBgaW5pdGlhbGl6ZSgpYCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlLlxuICAgKi9cbiAgbW9kdWxlRXhwb3J0cy5pbml0aWFsaXplID0gKGluaXRpYWxTdGF0ZTogP09iamVjdCk6IHZvaWQgPT4ge1xuICAgIGludmFyaWFudChhY3RpdmF0aW9uID09IG51bGwsICdQYWNrYWdlIGFscmVhZHkgaW5pdGlhbGl6ZWQnKTtcbiAgICBhY3RpdmF0aW9uID0gbmV3IEFjdGl2YXRpb24oaW5pdGlhbFN0YXRlKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhlIGBkZWFjdGl2YXRlKClgIG1ldGhvZCBpcyBzcGVjaWFsLWNhc2VkIHRvIG51bGwgb3VyIGFjdGl2YXRpb24gaW5zdGFuY2UgcmVmZXJlbmNlLlxuICAgKi9cbiAgbW9kdWxlRXhwb3J0cy5kZWFjdGl2YXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIGludmFyaWFudChhY3RpdmF0aW9uICE9IG51bGwsICdQYWNrYWdlIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIGlmICh0eXBlb2YgYWN0aXZhdGlvbi5kaXNwb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhY3RpdmF0aW9uLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgYWN0aXZhdGlvbiA9IG51bGw7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZUNoYWluKHByb3RvdHlwZTogQ2xhc3M8YW55Pik6IEFycmF5PENsYXNzPGFueT4+IHtcbiAgbGV0IGN1cnJlbnRQcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gIGNvbnN0IHByb3RvdHlwZXMgPSBbXTtcbiAgd2hpbGUgKGN1cnJlbnRQcm90b3R5cGUgIT0gbnVsbCkge1xuICAgIHByb3RvdHlwZXMucHVzaChjdXJyZW50UHJvdG90eXBlKTtcbiAgICBjdXJyZW50UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN1cnJlbnRQcm90b3R5cGUpO1xuICB9XG4gIHJldHVybiBwcm90b3R5cGVzO1xufVxuXG4vKipcbiAqIExpc3QgdGhlIHByb3BlcnRpZXMgKGluY2x1ZGluZyBpbmhlcml0ZWQgb25lcykgb2YgdGhlIHByb3ZpZGVkIHByb3RvdHlwZSwgZXhjbHVkaW5nIHRoZSBvbmVzXG4gKiBpbmhlcml0ZWQgZnJvbSBgT2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydHlMaXN0KHByb3RvdHlwZTogQ2xhc3M8YW55Pik6IEFycmF5PHN0cmluZz4ge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG4gIGZvciAoY29uc3QgcHJvdG8gb2YgZ2V0UHJvdG90eXBlQ2hhaW4ocHJvdG90eXBlKSkge1xuICAgIGlmIChwcm90byA9PT0gKE9iamVjdDogYW55KS5wcm90b3R5cGUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKSkge1xuICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG4iXX0=