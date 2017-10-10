'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeActivePaneItemDebounced = observeActivePaneItemDebounced;
exports.observeActiveEditorsDebounced = observeActiveEditorsDebounced;
exports.editorChangesDebounced = editorChangesDebounced;
exports.editorScrollTopDebounced = editorScrollTopDebounced;
exports.observeTextEditorsPositions = observeTextEditorsPositions;

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

var _event;

function _load_event() {
  return _event = require('nuclide-commons/event');
}

var _textEditor;

function _load_textEditor() {
  return _textEditor = require('./text-editor');
}

const DEFAULT_PANE_DEBOUNCE_INTERVAL_MS = 100; /**
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

/**
 * Often, we may want to respond to Atom events, but only after a buffer period
 * of no change.
 * For example, Atom provides Workspace::onDidChangeActivePaneItem, but we may
 * want to know not when the active pane item has changed, buth when it has
 * stopped changing.
 * This file provides methods to do this.
 */

const DEFAULT_EDITOR_DEBOUNCE_INTERVAL_MS = 300;
const DEFAULT_POSITION_DEBOUNCE_INTERVAL_MS = 300;

function observeActivePaneItemDebounced(debounceInterval = DEFAULT_PANE_DEBOUNCE_INTERVAL_MS) {
  return (0, (_event || _load_event()).observableFromSubscribeFunction)(callback => {
    if (atom.workspace.getCenter != null) {
      return atom.workspace.getCenter().observeActivePaneItem(callback);
    }
    return atom.workspace.observeActivePaneItem(callback);
  }).debounceTime(debounceInterval);
}

function observeActiveEditorsDebounced(debounceInterval = DEFAULT_PANE_DEBOUNCE_INTERVAL_MS) {
  return observeActivePaneItemDebounced(debounceInterval).map(paneItem => {
    if ((0, (_textEditor || _load_textEditor()).isValidTextEditor)(paneItem)) {
      // Flow cannot understand the type refinement provided by the isValidTextEditor function,
      // so we have to cast.
      return paneItem;
    }
    return null;
  });
}

function editorChangesDebounced(editor, debounceInterval = DEFAULT_EDITOR_DEBOUNCE_INTERVAL_MS) {
  return (0, (_event || _load_event()).observableFromSubscribeFunction)(callback => editor.onDidChange(callback))
  // Debounce manually rather than using editor.onDidStopChanging so that the debounce time is
  // configurable.
  .debounceTime(debounceInterval);
}

function editorScrollTopDebounced(editor, debounceInterval = DEFAULT_EDITOR_DEBOUNCE_INTERVAL_MS) {
  return (0, (_event || _load_event()).observableFromSubscribeFunction)(callback => atom.views.getView(editor).onDidChangeScrollTop(callback)).debounceTime(debounceInterval);
}

// Yields null when the current pane is not an editor,
// otherwise yields events on each move of the primary cursor within any Editor.
function observeTextEditorsPositions(editorDebounceInterval = DEFAULT_EDITOR_DEBOUNCE_INTERVAL_MS, positionDebounceInterval = DEFAULT_POSITION_DEBOUNCE_INTERVAL_MS) {
  return observeActiveEditorsDebounced(editorDebounceInterval).switchMap(editor => {
    return editor == null ? _rxjsBundlesRxMinJs.Observable.of(null) : (0, (_textEditor || _load_textEditor()).getCursorPositions)(editor).debounceTime(positionDebounceInterval).map(position => {
      if (!(editor != null)) {
        throw new Error('Invariant violation: "editor != null"');
      }

      return { editor, position };
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYm91bmNlZC5qcyJdLCJuYW1lcyI6WyJvYnNlcnZlQWN0aXZlUGFuZUl0ZW1EZWJvdW5jZWQiLCJvYnNlcnZlQWN0aXZlRWRpdG9yc0RlYm91bmNlZCIsImVkaXRvckNoYW5nZXNEZWJvdW5jZWQiLCJlZGl0b3JTY3JvbGxUb3BEZWJvdW5jZWQiLCJvYnNlcnZlVGV4dEVkaXRvcnNQb3NpdGlvbnMiLCJERUZBVUxUX1BBTkVfREVCT1VOQ0VfSU5URVJWQUxfTVMiLCJERUZBVUxUX0VESVRPUl9ERUJPVU5DRV9JTlRFUlZBTF9NUyIsIkRFRkFVTFRfUE9TSVRJT05fREVCT1VOQ0VfSU5URVJWQUxfTVMiLCJkZWJvdW5jZUludGVydmFsIiwiY2FsbGJhY2siLCJhdG9tIiwid29ya3NwYWNlIiwiZ2V0Q2VudGVyIiwib2JzZXJ2ZUFjdGl2ZVBhbmVJdGVtIiwiZGVib3VuY2VUaW1lIiwibWFwIiwicGFuZUl0ZW0iLCJlZGl0b3IiLCJvbkRpZENoYW5nZSIsInZpZXdzIiwiZ2V0VmlldyIsIm9uRGlkQ2hhbmdlU2Nyb2xsVG9wIiwiZWRpdG9yRGVib3VuY2VJbnRlcnZhbCIsInBvc2l0aW9uRGVib3VuY2VJbnRlcnZhbCIsInN3aXRjaE1hcCIsIm9mIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7O1FBK0JnQkEsOEIsR0FBQUEsOEI7UUFXQUMsNkIsR0FBQUEsNkI7UUFhQUMsc0IsR0FBQUEsc0I7UUFZQUMsd0IsR0FBQUEsd0I7UUFnQkFDLDJCLEdBQUFBLDJCOztBQTlEaEI7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7O0FBR0EsTUFBTUMsb0NBQW9DLEdBQTFDLEMsQ0EzQkE7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7QUFnQkEsTUFBTUMsc0NBQXNDLEdBQTVDO0FBQ0EsTUFBTUMsd0NBQXdDLEdBQTlDOztBQUVPLFNBQVNQLDhCQUFULENBQ0xRLG1CQUEyQkgsaUNBRHRCLEVBRWM7QUFDbkIsU0FBTywrREFBZ0NJLFlBQVk7QUFDakQsUUFBSUMsS0FBS0MsU0FBTCxDQUFlQyxTQUFmLElBQTRCLElBQWhDLEVBQXNDO0FBQ3BDLGFBQU9GLEtBQUtDLFNBQUwsQ0FBZUMsU0FBZixHQUEyQkMscUJBQTNCLENBQWlESixRQUFqRCxDQUFQO0FBQ0Q7QUFDRCxXQUFPQyxLQUFLQyxTQUFMLENBQWVFLHFCQUFmLENBQXFDSixRQUFyQyxDQUFQO0FBQ0QsR0FMTSxFQUtKSyxZQUxJLENBS1NOLGdCQUxULENBQVA7QUFNRDs7QUFFTSxTQUFTUCw2QkFBVCxDQUNMTyxtQkFBMkJILGlDQUR0QixFQUV5QjtBQUM5QixTQUFPTCwrQkFBK0JRLGdCQUEvQixFQUFpRE8sR0FBakQsQ0FBcURDLFlBQVk7QUFDdEUsUUFBSSwyREFBa0JBLFFBQWxCLENBQUosRUFBaUM7QUFDL0I7QUFDQTtBQUNBLGFBQVNBLFFBQVQ7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEdBUE0sQ0FBUDtBQVFEOztBQUVNLFNBQVNkLHNCQUFULENBQ0xlLE1BREssRUFFTFQsbUJBQTJCRixtQ0FGdEIsRUFHYTtBQUNsQixTQUNFLCtEQUFnQ0csWUFBWVEsT0FBT0MsV0FBUCxDQUFtQlQsUUFBbkIsQ0FBNUM7QUFDRTtBQUNBO0FBRkYsR0FHR0ssWUFISCxDQUdnQk4sZ0JBSGhCLENBREY7QUFNRDs7QUFFTSxTQUFTTCx3QkFBVCxDQUNMYyxNQURLLEVBRUxULG1CQUEyQkYsbUNBRnRCLEVBR2U7QUFDcEIsU0FBTywrREFBZ0NHLFlBQ3JDQyxLQUFLUyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJILE1BQW5CLEVBQTJCSSxvQkFBM0IsQ0FBZ0RaLFFBQWhELENBREssRUFFTEssWUFGSyxDQUVRTixnQkFGUixDQUFQO0FBR0Q7O0FBT0Q7QUFDQTtBQUNPLFNBQVNKLDJCQUFULENBQ0xrQix5QkFBaUNoQixtQ0FENUIsRUFFTGlCLDJCQUFtQ2hCLHFDQUY5QixFQUd3QjtBQUM3QixTQUFPTiw4QkFDTHFCLHNCQURLLEVBRUxFLFNBRkssQ0FFS1AsVUFBVTtBQUNwQixXQUFPQSxVQUFVLElBQVYsR0FDSCwrQkFBV1EsRUFBWCxDQUFjLElBQWQsQ0FERyxHQUVILDREQUFtQlIsTUFBbkIsRUFDR0gsWUFESCxDQUNnQlMsd0JBRGhCLEVBRUdSLEdBRkgsQ0FFT1csWUFBWTtBQUFBLFlBQ0xULFVBQVUsSUFETDtBQUFBO0FBQUE7O0FBRWYsYUFBTyxFQUFDQSxNQUFELEVBQVNTLFFBQVQsRUFBUDtBQUNELEtBTEgsQ0FGSjtBQVFELEdBWE0sQ0FBUDtBQVlEIiwiZmlsZSI6ImRlYm91bmNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbi8qKlxuICogT2Z0ZW4sIHdlIG1heSB3YW50IHRvIHJlc3BvbmQgdG8gQXRvbSBldmVudHMsIGJ1dCBvbmx5IGFmdGVyIGEgYnVmZmVyIHBlcmlvZFxuICogb2Ygbm8gY2hhbmdlLlxuICogRm9yIGV4YW1wbGUsIEF0b20gcHJvdmlkZXMgV29ya3NwYWNlOjpvbkRpZENoYW5nZUFjdGl2ZVBhbmVJdGVtLCBidXQgd2UgbWF5XG4gKiB3YW50IHRvIGtub3cgbm90IHdoZW4gdGhlIGFjdGl2ZSBwYW5lIGl0ZW0gaGFzIGNoYW5nZWQsIGJ1dGggd2hlbiBpdCBoYXNcbiAqIHN0b3BwZWQgY2hhbmdpbmcuXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgbWV0aG9kcyB0byBkbyB0aGlzLlxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7b2JzZXJ2YWJsZUZyb21TdWJzY3JpYmVGdW5jdGlvbn0gZnJvbSAnbnVjbGlkZS1jb21tb25zL2V2ZW50JztcbmltcG9ydCB7Z2V0Q3Vyc29yUG9zaXRpb25zLCBpc1ZhbGlkVGV4dEVkaXRvcn0gZnJvbSAnLi90ZXh0LWVkaXRvcic7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2Fzc2VydCc7XG5cbmNvbnN0IERFRkFVTFRfUEFORV9ERUJPVU5DRV9JTlRFUlZBTF9NUyA9IDEwMDtcbmNvbnN0IERFRkFVTFRfRURJVE9SX0RFQk9VTkNFX0lOVEVSVkFMX01TID0gMzAwO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTl9ERUJPVU5DRV9JTlRFUlZBTF9NUyA9IDMwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVBY3RpdmVQYW5lSXRlbURlYm91bmNlZChcbiAgZGVib3VuY2VJbnRlcnZhbDogbnVtYmVyID0gREVGQVVMVF9QQU5FX0RFQk9VTkNFX0lOVEVSVkFMX01TLFxuKTogT2JzZXJ2YWJsZTxtaXhlZD4ge1xuICByZXR1cm4gb2JzZXJ2YWJsZUZyb21TdWJzY3JpYmVGdW5jdGlvbihjYWxsYmFjayA9PiB7XG4gICAgaWYgKGF0b20ud29ya3NwYWNlLmdldENlbnRlciAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXRvbS53b3Jrc3BhY2UuZ2V0Q2VudGVyKCkub2JzZXJ2ZUFjdGl2ZVBhbmVJdGVtKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0b20ud29ya3NwYWNlLm9ic2VydmVBY3RpdmVQYW5lSXRlbShjYWxsYmFjayk7XG4gIH0pLmRlYm91bmNlVGltZShkZWJvdW5jZUludGVydmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVBY3RpdmVFZGl0b3JzRGVib3VuY2VkKFxuICBkZWJvdW5jZUludGVydmFsOiBudW1iZXIgPSBERUZBVUxUX1BBTkVfREVCT1VOQ0VfSU5URVJWQUxfTVMsXG4pOiBPYnNlcnZhYmxlPD9hdG9tJFRleHRFZGl0b3I+IHtcbiAgcmV0dXJuIG9ic2VydmVBY3RpdmVQYW5lSXRlbURlYm91bmNlZChkZWJvdW5jZUludGVydmFsKS5tYXAocGFuZUl0ZW0gPT4ge1xuICAgIGlmIChpc1ZhbGlkVGV4dEVkaXRvcihwYW5lSXRlbSkpIHtcbiAgICAgIC8vIEZsb3cgY2Fubm90IHVuZGVyc3RhbmQgdGhlIHR5cGUgcmVmaW5lbWVudCBwcm92aWRlZCBieSB0aGUgaXNWYWxpZFRleHRFZGl0b3IgZnVuY3Rpb24sXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGNhc3QuXG4gICAgICByZXR1cm4gKChwYW5lSXRlbTogYW55KTogYXRvbSRUZXh0RWRpdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdG9yQ2hhbmdlc0RlYm91bmNlZChcbiAgZWRpdG9yOiBhdG9tJFRleHRFZGl0b3IsXG4gIGRlYm91bmNlSW50ZXJ2YWw6IG51bWJlciA9IERFRkFVTFRfRURJVE9SX0RFQk9VTkNFX0lOVEVSVkFMX01TLFxuKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gIHJldHVybiAoXG4gICAgb2JzZXJ2YWJsZUZyb21TdWJzY3JpYmVGdW5jdGlvbihjYWxsYmFjayA9PiBlZGl0b3Iub25EaWRDaGFuZ2UoY2FsbGJhY2spKVxuICAgICAgLy8gRGVib3VuY2UgbWFudWFsbHkgcmF0aGVyIHRoYW4gdXNpbmcgZWRpdG9yLm9uRGlkU3RvcENoYW5naW5nIHNvIHRoYXQgdGhlIGRlYm91bmNlIHRpbWUgaXNcbiAgICAgIC8vIGNvbmZpZ3VyYWJsZS5cbiAgICAgIC5kZWJvdW5jZVRpbWUoZGVib3VuY2VJbnRlcnZhbClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRvclNjcm9sbFRvcERlYm91bmNlZChcbiAgZWRpdG9yOiBhdG9tJFRleHRFZGl0b3IsXG4gIGRlYm91bmNlSW50ZXJ2YWw6IG51bWJlciA9IERFRkFVTFRfRURJVE9SX0RFQk9VTkNFX0lOVEVSVkFMX01TLFxuKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgcmV0dXJuIG9ic2VydmFibGVGcm9tU3Vic2NyaWJlRnVuY3Rpb24oY2FsbGJhY2sgPT5cbiAgICBhdG9tLnZpZXdzLmdldFZpZXcoZWRpdG9yKS5vbkRpZENoYW5nZVNjcm9sbFRvcChjYWxsYmFjayksXG4gICkuZGVib3VuY2VUaW1lKGRlYm91bmNlSW50ZXJ2YWwpO1xufVxuXG5leHBvcnQgdHlwZSBFZGl0b3JQb3NpdGlvbiA9IHtcbiAgZWRpdG9yOiBhdG9tJFRleHRFZGl0b3IsXG4gIHBvc2l0aW9uOiBhdG9tJFBvaW50LFxufTtcblxuLy8gWWllbGRzIG51bGwgd2hlbiB0aGUgY3VycmVudCBwYW5lIGlzIG5vdCBhbiBlZGl0b3IsXG4vLyBvdGhlcndpc2UgeWllbGRzIGV2ZW50cyBvbiBlYWNoIG1vdmUgb2YgdGhlIHByaW1hcnkgY3Vyc29yIHdpdGhpbiBhbnkgRWRpdG9yLlxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVUZXh0RWRpdG9yc1Bvc2l0aW9ucyhcbiAgZWRpdG9yRGVib3VuY2VJbnRlcnZhbDogbnVtYmVyID0gREVGQVVMVF9FRElUT1JfREVCT1VOQ0VfSU5URVJWQUxfTVMsXG4gIHBvc2l0aW9uRGVib3VuY2VJbnRlcnZhbDogbnVtYmVyID0gREVGQVVMVF9QT1NJVElPTl9ERUJPVU5DRV9JTlRFUlZBTF9NUyxcbik6IE9ic2VydmFibGU8P0VkaXRvclBvc2l0aW9uPiB7XG4gIHJldHVybiBvYnNlcnZlQWN0aXZlRWRpdG9yc0RlYm91bmNlZChcbiAgICBlZGl0b3JEZWJvdW5jZUludGVydmFsLFxuICApLnN3aXRjaE1hcChlZGl0b3IgPT4ge1xuICAgIHJldHVybiBlZGl0b3IgPT0gbnVsbFxuICAgICAgPyBPYnNlcnZhYmxlLm9mKG51bGwpXG4gICAgICA6IGdldEN1cnNvclBvc2l0aW9ucyhlZGl0b3IpXG4gICAgICAgICAgLmRlYm91bmNlVGltZShwb3NpdGlvbkRlYm91bmNlSW50ZXJ2YWwpXG4gICAgICAgICAgLm1hcChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoZWRpdG9yICE9IG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuIHtlZGl0b3IsIHBvc2l0aW9ufTtcbiAgICAgICAgICB9KTtcbiAgfSk7XG59XG4iXX0=