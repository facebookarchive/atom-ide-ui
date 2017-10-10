'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jasmineAttachWorkspace = jasmineAttachWorkspace;


// Attach the Atom workspace to the DOM, and give it a reasonable size.
// This is important for tests that touch the text editor in 1.19+, as they'll have a height of 0
// unless properly attached with a valid viewport.
function jasmineAttachWorkspace() {
  jasmine.attachToDOM(atom.views.getView(atom.workspace));

  // Set the testing window dimensions (smallish, yet realistic).
  const styleCSS = `
    height: 600px;
    width: 1000px;
  `;
  const content = document.querySelector('#jasmine-content');

  if (!(content != null)) {
    throw new Error('Invariant violation: "content != null"');
  }

  content.setAttribute('style', styleCSS);

  // Unset the 'top' attribute of the spec reporter to make the full window visible.
  // This is purely for developer convenience when running specs in a visible window.
  const specReporter = document.querySelector('.spec-reporter-container');
  if (specReporter != null) {
    specReporter.setAttribute('style', 'top: inherit');
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtaGVscGVycy5qcyJdLCJuYW1lcyI6WyJqYXNtaW5lQXR0YWNoV29ya3NwYWNlIiwiamFzbWluZSIsImF0dGFjaFRvRE9NIiwiYXRvbSIsInZpZXdzIiwiZ2V0VmlldyIsIndvcmtzcGFjZSIsInN0eWxlQ1NTIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNwZWNSZXBvcnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFpQmdCQSxzQixHQUFBQSxzQjs7O0FBSGhCO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLHNCQUFULEdBQXdDO0FBQzdDQyxVQUFRQyxXQUFSLENBQW9CQyxLQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLEtBQUtHLFNBQXhCLENBQXBCOztBQUVBO0FBQ0EsUUFBTUMsV0FBWTs7O0dBQWxCO0FBSUEsUUFBTUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBaEI7O0FBUjZDLFFBU25DRixXQUFXLElBVHdCO0FBQUE7QUFBQTs7QUFVN0NBLFVBQVFHLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEJKLFFBQTlCOztBQUVBO0FBQ0E7QUFDQSxRQUFNSyxlQUFlSCxTQUFTQyxhQUFULENBQXVCLDBCQUF2QixDQUFyQjtBQUNBLE1BQUlFLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsaUJBQWFELFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsY0FBbkM7QUFDRDtBQUNGLEMsQ0FuQ0QiLCJmaWxlIjoidGVzdC1oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBmbG93XG4gKiBAZm9ybWF0XG4gKi9cblxuaW1wb3J0IGludmFyaWFudCBmcm9tICdhc3NlcnQnO1xuXG4vLyBBdHRhY2ggdGhlIEF0b20gd29ya3NwYWNlIHRvIHRoZSBET00sIGFuZCBnaXZlIGl0IGEgcmVhc29uYWJsZSBzaXplLlxuLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIHRlc3RzIHRoYXQgdG91Y2ggdGhlIHRleHQgZWRpdG9yIGluIDEuMTkrLCBhcyB0aGV5J2xsIGhhdmUgYSBoZWlnaHQgb2YgMFxuLy8gdW5sZXNzIHByb3Blcmx5IGF0dGFjaGVkIHdpdGggYSB2YWxpZCB2aWV3cG9ydC5cbmV4cG9ydCBmdW5jdGlvbiBqYXNtaW5lQXR0YWNoV29ya3NwYWNlKCk6IHZvaWQge1xuICBqYXNtaW5lLmF0dGFjaFRvRE9NKGF0b20udmlld3MuZ2V0VmlldyhhdG9tLndvcmtzcGFjZSkpO1xuXG4gIC8vIFNldCB0aGUgdGVzdGluZyB3aW5kb3cgZGltZW5zaW9ucyAoc21hbGxpc2gsIHlldCByZWFsaXN0aWMpLlxuICBjb25zdCBzdHlsZUNTUyA9IGBcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gIGA7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamFzbWluZS1jb250ZW50Jyk7XG4gIGludmFyaWFudChjb250ZW50ICE9IG51bGwpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZUNTUyk7XG5cbiAgLy8gVW5zZXQgdGhlICd0b3AnIGF0dHJpYnV0ZSBvZiB0aGUgc3BlYyByZXBvcnRlciB0byBtYWtlIHRoZSBmdWxsIHdpbmRvdyB2aXNpYmxlLlxuICAvLyBUaGlzIGlzIHB1cmVseSBmb3IgZGV2ZWxvcGVyIGNvbnZlbmllbmNlIHdoZW4gcnVubmluZyBzcGVjcyBpbiBhIHZpc2libGUgd2luZG93LlxuICBjb25zdCBzcGVjUmVwb3J0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlYy1yZXBvcnRlci1jb250YWluZXInKTtcbiAgaWYgKHNwZWNSZXBvcnRlciAhPSBudWxsKSB7XG4gICAgc3BlY1JlcG9ydGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndG9wOiBpbmhlcml0Jyk7XG4gIH1cbn1cbiJdfQ==