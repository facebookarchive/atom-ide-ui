'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UniversalDisposable;

function _load_UniversalDisposable() {
  return _UniversalDisposable = _interopRequireDefault(require('nuclide-commons/UniversalDisposable'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderRegistry {

  constructor() {
    this._providers = [];
  }

  addProvider(provider) {
    const index = this._providers.findIndex(p => provider.priority > p.priority);
    if (index === -1) {
      this._providers.push(provider);
    } else {
      this._providers.splice(index, 0, provider);
    }
    return new (_UniversalDisposable || _load_UniversalDisposable()).default(() => {
      this.removeProvider(provider);
    });
  }

  removeProvider(provider) {
    const index = this._providers.indexOf(provider);
    if (index !== -1) {
      this._providers.splice(index, 1);
    }
  }

  getProviderForEditor(editor) {
    const grammar = editor.getGrammar().scopeName;
    return this.findProvider(grammar);
  }

  getAllProvidersForEditor(editor) {
    const grammar = editor.getGrammar().scopeName;
    return this.findAllProviders(grammar);
  }

  findProvider(grammar) {
    for (const provider of this.findAllProviders(grammar)) {
      return provider;
    }
    return null;
  }

  /**
   * Iterates over all providers matching the grammar, in priority order.
   */
  *findAllProviders(grammar) {
    for (const provider of this._providers) {
      if (provider.grammarScopes == null || provider.grammarScopes.indexOf(grammar) !== -1) {
        yield provider;
      }
    }
  }
}
exports.default = ProviderRegistry; /**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3ZpZGVyUmVnaXN0cnkuanMiXSwibmFtZXMiOlsiUHJvdmlkZXJSZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiX3Byb3ZpZGVycyIsImFkZFByb3ZpZGVyIiwicHJvdmlkZXIiLCJpbmRleCIsImZpbmRJbmRleCIsInAiLCJwcmlvcml0eSIsInB1c2giLCJzcGxpY2UiLCJyZW1vdmVQcm92aWRlciIsImluZGV4T2YiLCJnZXRQcm92aWRlckZvckVkaXRvciIsImVkaXRvciIsImdyYW1tYXIiLCJnZXRHcmFtbWFyIiwic2NvcGVOYW1lIiwiZmluZFByb3ZpZGVyIiwiZ2V0QWxsUHJvdmlkZXJzRm9yRWRpdG9yIiwiZmluZEFsbFByb3ZpZGVycyIsImdyYW1tYXJTY29wZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBWUE7QUFBQTtBQUFBOzs7O0FBU2UsTUFBTUEsZ0JBQU4sQ0FBb0M7O0FBR2pEQyxnQkFBYztBQUNaLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDRDs7QUFFREMsY0FBWUMsUUFBWixFQUFzQztBQUNwQyxVQUFNQyxRQUFRLEtBQUtILFVBQUwsQ0FBZ0JJLFNBQWhCLENBQ1pDLEtBQUtILFNBQVNJLFFBQVQsR0FBb0JELEVBQUVDLFFBRGYsQ0FBZDtBQUdBLFFBQUlILFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLFdBQUtILFVBQUwsQ0FBZ0JPLElBQWhCLENBQXFCTCxRQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtGLFVBQUwsQ0FBZ0JRLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QixFQUFpQ0QsUUFBakM7QUFDRDtBQUNELFdBQU8sa0VBQXdCLE1BQU07QUFDbkMsV0FBS08sY0FBTCxDQUFvQlAsUUFBcEI7QUFDRCxLQUZNLENBQVA7QUFHRDs7QUFFRE8saUJBQWVQLFFBQWYsRUFBa0M7QUFDaEMsVUFBTUMsUUFBUSxLQUFLSCxVQUFMLENBQWdCVSxPQUFoQixDQUF3QlIsUUFBeEIsQ0FBZDtBQUNBLFFBQUlDLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLFdBQUtILFVBQUwsQ0FBZ0JRLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QjtBQUNEO0FBQ0Y7O0FBRURRLHVCQUFxQkMsTUFBckIsRUFBa0Q7QUFDaEQsVUFBTUMsVUFBVUQsT0FBT0UsVUFBUCxHQUFvQkMsU0FBcEM7QUFDQSxXQUFPLEtBQUtDLFlBQUwsQ0FBa0JILE9BQWxCLENBQVA7QUFDRDs7QUFFREksMkJBQXlCTCxNQUF6QixFQUErRDtBQUM3RCxVQUFNQyxVQUFVRCxPQUFPRSxVQUFQLEdBQW9CQyxTQUFwQztBQUNBLFdBQU8sS0FBS0csZ0JBQUwsQ0FBc0JMLE9BQXRCLENBQVA7QUFDRDs7QUFFREcsZUFBYUgsT0FBYixFQUFrQztBQUNoQyxTQUFLLE1BQU1YLFFBQVgsSUFBdUIsS0FBS2dCLGdCQUFMLENBQXNCTCxPQUF0QixDQUF2QixFQUF1RDtBQUNyRCxhQUFPWCxRQUFQO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRDs7QUFFRDs7O0FBR0EsR0FBQ2dCLGdCQUFELENBQWtCTCxPQUFsQixFQUFnRDtBQUM5QyxTQUFLLE1BQU1YLFFBQVgsSUFBdUIsS0FBS0YsVUFBNUIsRUFBd0M7QUFDdEMsVUFDRUUsU0FBU2lCLGFBQVQsSUFBMEIsSUFBMUIsSUFDQWpCLFNBQVNpQixhQUFULENBQXVCVCxPQUF2QixDQUErQkcsT0FBL0IsTUFBNEMsQ0FBQyxDQUYvQyxFQUdFO0FBQ0EsY0FBTVgsUUFBTjtBQUNEO0FBQ0Y7QUFDRjtBQXpEZ0Q7a0JBQTlCSixnQixFQXJCckIiLCJmaWxlIjoiUHJvdmlkZXJSZWdpc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCBVbml2ZXJzYWxEaXNwb3NhYmxlIGZyb20gJ251Y2xpZGUtY29tbW9ucy9Vbml2ZXJzYWxEaXNwb3NhYmxlJztcblxuZXhwb3J0IHR5cGUgUHJvdmlkZXIgPSB7XG4gIC8vIFByb3ZpZGVycyB3aXRoIGhpZ2hlciBwcmlvcml0aWVzIHdpbGwgYmUgcHJlZmVycmVkIG92ZXIgbG93ZXIgb25lcy5cbiAgcHJpb3JpdHk6IG51bWJlcixcbiAgLy8gT21pdHRpbmcgZ3JhbW1hclNjb3BlcyBpbXBsaWVzIHRoYXQgdGhlIHByb3ZpZGVyIGFwcGxpZXMgdG8gYWxsIGdyYW1tYXJzLlxuICArZ3JhbW1hclNjb3Blcz86IEFycmF5PHN0cmluZz4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlclJlZ2lzdHJ5PFQ6IFByb3ZpZGVyPiB7XG4gIF9wcm92aWRlcnM6IEFycmF5PFQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Byb3ZpZGVycyA9IFtdO1xuICB9XG5cbiAgYWRkUHJvdmlkZXIocHJvdmlkZXI6IFQpOiBJRGlzcG9zYWJsZSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9wcm92aWRlcnMuZmluZEluZGV4KFxuICAgICAgcCA9PiBwcm92aWRlci5wcmlvcml0eSA+IHAucHJpb3JpdHksXG4gICAgKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLl9wcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Byb3ZpZGVycy5zcGxpY2UoaW5kZXgsIDAsIHByb3ZpZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxEaXNwb3NhYmxlKCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHJvdmlkZXIocHJvdmlkZXI6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3Byb3ZpZGVycy5pbmRleE9mKHByb3ZpZGVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9wcm92aWRlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcm92aWRlckZvckVkaXRvcihlZGl0b3I6IGF0b20kVGV4dEVkaXRvcik6ID9UIHtcbiAgICBjb25zdCBncmFtbWFyID0gZWRpdG9yLmdldEdyYW1tYXIoKS5zY29wZU5hbWU7XG4gICAgcmV0dXJuIHRoaXMuZmluZFByb3ZpZGVyKGdyYW1tYXIpO1xuICB9XG5cbiAgZ2V0QWxsUHJvdmlkZXJzRm9yRWRpdG9yKGVkaXRvcjogYXRvbSRUZXh0RWRpdG9yKTogSXRlcmFibGU8VD4ge1xuICAgIGNvbnN0IGdyYW1tYXIgPSBlZGl0b3IuZ2V0R3JhbW1hcigpLnNjb3BlTmFtZTtcbiAgICByZXR1cm4gdGhpcy5maW5kQWxsUHJvdmlkZXJzKGdyYW1tYXIpO1xuICB9XG5cbiAgZmluZFByb3ZpZGVyKGdyYW1tYXI6IHN0cmluZyk6ID9UIHtcbiAgICBmb3IgKGNvbnN0IHByb3ZpZGVyIG9mIHRoaXMuZmluZEFsbFByb3ZpZGVycyhncmFtbWFyKSkge1xuICAgICAgcmV0dXJuIHByb3ZpZGVyO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyBvdmVyIGFsbCBwcm92aWRlcnMgbWF0Y2hpbmcgdGhlIGdyYW1tYXIsIGluIHByaW9yaXR5IG9yZGVyLlxuICAgKi9cbiAgKmZpbmRBbGxQcm92aWRlcnMoZ3JhbW1hcjogc3RyaW5nKTogSXRlcmFibGU8VD4ge1xuICAgIGZvciAoY29uc3QgcHJvdmlkZXIgb2YgdGhpcy5fcHJvdmlkZXJzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb3ZpZGVyLmdyYW1tYXJTY29wZXMgPT0gbnVsbCB8fFxuICAgICAgICBwcm92aWRlci5ncmFtbWFyU2NvcGVzLmluZGV4T2YoZ3JhbW1hcikgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgeWllbGQgcHJvdmlkZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=