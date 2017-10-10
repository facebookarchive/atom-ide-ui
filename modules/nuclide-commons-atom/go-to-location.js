'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToLocation = undefined;

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

/**
 * Opens the given file.
 *
 * Optionally include a line and column to navigate to. If a line is given, by default it will
 * center it in the opened text editor.
 *
 * This should be preferred over `atom.workspace.open()` in typical cases. The motivations are:
 * - We call `atom.workspace.open()` with the `searchAllPanes` option. This looks in other panes for
 *   the current file, rather just opening a new copy in the current pane. People often forget this
 *   option which typically leads to a subpar experience for people who use multiple panes.
 * - When moving around in the current file, `goToLocation` explicitly publishes events that the nav
 *   stack uses.
 *
 * Currently, `atom.workspace.open()` should be used only in these cases:
 * - When the URI to open is not a file URI. For example, if we want to open some tool like find
 *   references in a pane.
 * - When we want to open an untitled file (providing no file argument). Currently, goToLocation
 *   requires a file to open.
 * - When we want to open a file as a pending pane item. Currently goToLocation cannot do this.
 *
 * In these cases, you may disable the lint rule against `atom.workspace.open` by adding the
 * following comment above its use:
 * // eslint-disable-next-line rulesdir/atom-apis
 */
let goToLocation = exports.goToLocation = (() => {
  var _ref7 = (0, _asyncToGenerator.default)(function* (file, options) {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

    const center_ = (_ref = options) != null ? _ref.center : _ref;
    const center = center_ == null ? true : center_;
    const activatePane_ = (_ref2 = options) != null ? _ref2.activatePane : _ref2;
    const activatePane = activatePane_ == null ? true : activatePane_;
    const activateItem = (_ref3 = options) != null ? _ref3.activateItem : _ref3;
    const line = (_ref4 = options) != null ? _ref4.line : _ref4;
    const column = (_ref5 = options) != null ? _ref5.column : _ref5;
    const pending = (_ref6 = options) != null ? _ref6.pending : _ref6;

    // Prefer going to the current editor rather than the leftmost editor.
    const currentEditor = atom.workspace.getActiveTextEditor();
    if (currentEditor != null && currentEditor.getPath() === file) {
      const paneContainer = atom.workspace.paneContainerForItem(currentEditor);

      if (!(paneContainer != null)) {
        throw new Error('Invariant violation: "paneContainer != null"');
      }

      if (activatePane) {
        paneContainer.activate();
      }
      if (line != null) {
        goToLocationInEditor(currentEditor, {
          line,
          column: column == null ? 0 : column,
          center
        });
      } else {
        if (!(column == null)) {
          throw new Error('goToLocation: Cannot specify just column');
        }
      }
      return currentEditor;
    } else {
      // Obviously, calling goToLocation isn't a viable alternative here :P
      // eslint-disable-next-line rulesdir/atom-apis
      const editor = yield atom.workspace.open(file, {
        initialLine: line,
        initialColumn: column,
        searchAllPanes: true,
        activatePane,
        activateItem,
        pending
      });

      if (center && line != null) {
        editor.scrollToBufferPosition([line, column], { center: true });
      }
      return editor;
    }
  });

  return function goToLocation(_x, _x2) {
    return _ref7.apply(this, arguments);
  };
})(); /**
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

exports.goToLocationInEditor = goToLocationInEditor;
exports.observeNavigatingEditors = observeNavigatingEditors;

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

var _idx;

function _load_idx() {
  return _idx = _interopRequireDefault(require('idx'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const goToLocationSubject = new _rxjsBundlesRxMinJs.Subject();

// Scrolls to the given line/column at the given editor
// broadcasts the editor instance on an observable (subject) available
// through the getGoToLocation
function goToLocationInEditor(editor, options) {
  const center = options.center == null ? true : options.center;
  const { line, column } = options;

  editor.setCursorBufferPosition([line, column]);
  if (center) {
    editor.scrollToBufferPosition([line, column], { center: true });
  }

  goToLocationSubject.next(editor);
}

function observeNavigatingEditors() {
  return goToLocationSubject;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvLXRvLWxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbImZpbGUiLCJvcHRpb25zIiwiY2VudGVyXyIsImNlbnRlciIsImFjdGl2YXRlUGFuZV8iLCJhY3RpdmF0ZVBhbmUiLCJhY3RpdmF0ZUl0ZW0iLCJsaW5lIiwiY29sdW1uIiwicGVuZGluZyIsImN1cnJlbnRFZGl0b3IiLCJhdG9tIiwid29ya3NwYWNlIiwiZ2V0QWN0aXZlVGV4dEVkaXRvciIsImdldFBhdGgiLCJwYW5lQ29udGFpbmVyIiwicGFuZUNvbnRhaW5lckZvckl0ZW0iLCJhY3RpdmF0ZSIsImdvVG9Mb2NhdGlvbkluRWRpdG9yIiwiZWRpdG9yIiwib3BlbiIsImluaXRpYWxMaW5lIiwiaW5pdGlhbENvbHVtbiIsInNlYXJjaEFsbFBhbmVzIiwic2Nyb2xsVG9CdWZmZXJQb3NpdGlvbiIsImdvVG9Mb2NhdGlvbiIsIm9ic2VydmVOYXZpZ2F0aW5nRWRpdG9ycyIsImdvVG9Mb2NhdGlvblN1YmplY3QiLCJzZXRDdXJzb3JCdWZmZXJQb3NpdGlvbiIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0F3Qk8sV0FDTEEsSUFESyxFQUVMQyxPQUZLLEVBR3FCO0FBQUE7O0FBQzFCLFVBQU1DLGtCQUFjRCxPQUFkLGlCQUE4QkUsTUFBOUIsT0FBTjtBQUNBLFVBQU1BLFNBQVNELFdBQVcsSUFBWCxHQUFrQixJQUFsQixHQUF5QkEsT0FBeEM7QUFDQSxVQUFNRSx5QkFBb0JILE9BQXBCLGtCQUFvQ0ksWUFBcEMsUUFBTjtBQUNBLFVBQU1BLGVBQWVELGlCQUFpQixJQUFqQixHQUF3QixJQUF4QixHQUErQkEsYUFBcEQ7QUFDQSxVQUFNRSx3QkFBbUJMLE9BQW5CLGtCQUFtQ0ssWUFBbkMsUUFBTjtBQUNBLFVBQU1DLGdCQUFXTixPQUFYLGtCQUEyQk0sSUFBM0IsUUFBTjtBQUNBLFVBQU1DLGtCQUFhUCxPQUFiLGtCQUE2Qk8sTUFBN0IsUUFBTjtBQUNBLFVBQU1DLG1CQUFjUixPQUFkLGtCQUE4QlEsT0FBOUIsUUFBTjs7QUFFQTtBQUNBLFVBQU1DLGdCQUFnQkMsS0FBS0MsU0FBTCxDQUFlQyxtQkFBZixFQUF0QjtBQUNBLFFBQUlILGlCQUFpQixJQUFqQixJQUF5QkEsY0FBY0ksT0FBZCxPQUE0QmQsSUFBekQsRUFBK0Q7QUFDN0QsWUFBTWUsZ0JBQWdCSixLQUFLQyxTQUFMLENBQWVJLG9CQUFmLENBQW9DTixhQUFwQyxDQUF0Qjs7QUFENkQsWUFFbkRLLGlCQUFpQixJQUZrQztBQUFBO0FBQUE7O0FBRzdELFVBQUlWLFlBQUosRUFBa0I7QUFDaEJVLHNCQUFjRSxRQUFkO0FBQ0Q7QUFDRCxVQUFJVixRQUFRLElBQVosRUFBa0I7QUFDaEJXLDZCQUFxQlIsYUFBckIsRUFBb0M7QUFDbENILGNBRGtDO0FBRWxDQyxrQkFBUUEsVUFBVSxJQUFWLEdBQWlCLENBQWpCLEdBQXFCQSxNQUZLO0FBR2xDTDtBQUhrQyxTQUFwQztBQUtELE9BTkQsTUFNTztBQUFBLGNBQ0tLLFVBQVUsSUFEZjtBQUFBLDBCQUNxQiwwQ0FEckI7QUFBQTtBQUVOO0FBQ0QsYUFBT0UsYUFBUDtBQUNELEtBaEJELE1BZ0JPO0FBQ0w7QUFDQTtBQUNBLFlBQU1TLFNBQVMsTUFBTVIsS0FBS0MsU0FBTCxDQUFlUSxJQUFmLENBQW9CcEIsSUFBcEIsRUFBMEI7QUFDN0NxQixxQkFBYWQsSUFEZ0M7QUFFN0NlLHVCQUFlZCxNQUY4QjtBQUc3Q2Usd0JBQWdCLElBSDZCO0FBSTdDbEIsb0JBSjZDO0FBSzdDQyxvQkFMNkM7QUFNN0NHO0FBTjZDLE9BQTFCLENBQXJCOztBQVNBLFVBQUlOLFVBQVVJLFFBQVEsSUFBdEIsRUFBNEI7QUFDMUJZLGVBQU9LLHNCQUFQLENBQThCLENBQUNqQixJQUFELEVBQU9DLE1BQVAsQ0FBOUIsRUFBOEMsRUFBQ0wsUUFBUSxJQUFULEVBQTlDO0FBQ0Q7QUFDRCxhQUFPZ0IsTUFBUDtBQUNEO0FBQ0YsRzs7a0JBaERxQk0sWTs7O01BbkR0Qjs7Ozs7Ozs7Ozs7O1FBZ0hnQlAsb0IsR0FBQUEsb0I7UUFlQVEsd0IsR0FBQUEsd0I7O0FBakhoQjs7OztBQUVBO0FBQUE7QUFBQTs7OztBQXFGQSxNQUFNQyxzQkFBc0IsaUNBQTVCOztBQVFBO0FBQ0E7QUFDQTtBQUNPLFNBQVNULG9CQUFULENBQ0xDLE1BREssRUFFTGxCLE9BRkssRUFHQztBQUNOLFFBQU1FLFNBQVNGLFFBQVFFLE1BQVIsSUFBa0IsSUFBbEIsR0FBeUIsSUFBekIsR0FBZ0NGLFFBQVFFLE1BQXZEO0FBQ0EsUUFBTSxFQUFDSSxJQUFELEVBQU9DLE1BQVAsS0FBaUJQLE9BQXZCOztBQUVBa0IsU0FBT1MsdUJBQVAsQ0FBK0IsQ0FBQ3JCLElBQUQsRUFBT0MsTUFBUCxDQUEvQjtBQUNBLE1BQUlMLE1BQUosRUFBWTtBQUNWZ0IsV0FBT0ssc0JBQVAsQ0FBOEIsQ0FBQ2pCLElBQUQsRUFBT0MsTUFBUCxDQUE5QixFQUE4QyxFQUFDTCxRQUFRLElBQVQsRUFBOUM7QUFDRDs7QUFFRHdCLHNCQUFvQkUsSUFBcEIsQ0FBeUJWLE1BQXpCO0FBQ0Q7O0FBRU0sU0FBU08sd0JBQVQsR0FBaUU7QUFDdEUsU0FBT0MsbUJBQVA7QUFDRCIsImZpbGUiOiJnby10by1sb2NhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBpZHggZnJvbSAnaWR4JztcblxudHlwZSBPcHRpb25zID0ge3xcbiAgbGluZT86IG51bWJlcixcbiAgY29sdW1uPzogbnVtYmVyLFxuICBjZW50ZXI/OiBib29sZWFuLFxuICBhY3RpdmF0ZUl0ZW0/OiBib29sZWFuLFxuICBhY3RpdmF0ZVBhbmU/OiBib29sZWFuLFxuICBwZW5kaW5nPzogYm9vbGVhbixcbnx9O1xuXG4vKipcbiAqIE9wZW5zIHRoZSBnaXZlbiBmaWxlLlxuICpcbiAqIE9wdGlvbmFsbHkgaW5jbHVkZSBhIGxpbmUgYW5kIGNvbHVtbiB0byBuYXZpZ2F0ZSB0by4gSWYgYSBsaW5lIGlzIGdpdmVuLCBieSBkZWZhdWx0IGl0IHdpbGxcbiAqIGNlbnRlciBpdCBpbiB0aGUgb3BlbmVkIHRleHQgZWRpdG9yLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHByZWZlcnJlZCBvdmVyIGBhdG9tLndvcmtzcGFjZS5vcGVuKClgIGluIHR5cGljYWwgY2FzZXMuIFRoZSBtb3RpdmF0aW9ucyBhcmU6XG4gKiAtIFdlIGNhbGwgYGF0b20ud29ya3NwYWNlLm9wZW4oKWAgd2l0aCB0aGUgYHNlYXJjaEFsbFBhbmVzYCBvcHRpb24uIFRoaXMgbG9va3MgaW4gb3RoZXIgcGFuZXMgZm9yXG4gKiAgIHRoZSBjdXJyZW50IGZpbGUsIHJhdGhlciBqdXN0IG9wZW5pbmcgYSBuZXcgY29weSBpbiB0aGUgY3VycmVudCBwYW5lLiBQZW9wbGUgb2Z0ZW4gZm9yZ2V0IHRoaXNcbiAqICAgb3B0aW9uIHdoaWNoIHR5cGljYWxseSBsZWFkcyB0byBhIHN1YnBhciBleHBlcmllbmNlIGZvciBwZW9wbGUgd2hvIHVzZSBtdWx0aXBsZSBwYW5lcy5cbiAqIC0gV2hlbiBtb3ZpbmcgYXJvdW5kIGluIHRoZSBjdXJyZW50IGZpbGUsIGBnb1RvTG9jYXRpb25gIGV4cGxpY2l0bHkgcHVibGlzaGVzIGV2ZW50cyB0aGF0IHRoZSBuYXZcbiAqICAgc3RhY2sgdXNlcy5cbiAqXG4gKiBDdXJyZW50bHksIGBhdG9tLndvcmtzcGFjZS5vcGVuKClgIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gdGhlc2UgY2FzZXM6XG4gKiAtIFdoZW4gdGhlIFVSSSB0byBvcGVuIGlzIG5vdCBhIGZpbGUgVVJJLiBGb3IgZXhhbXBsZSwgaWYgd2Ugd2FudCB0byBvcGVuIHNvbWUgdG9vbCBsaWtlIGZpbmRcbiAqICAgcmVmZXJlbmNlcyBpbiBhIHBhbmUuXG4gKiAtIFdoZW4gd2Ugd2FudCB0byBvcGVuIGFuIHVudGl0bGVkIGZpbGUgKHByb3ZpZGluZyBubyBmaWxlIGFyZ3VtZW50KS4gQ3VycmVudGx5LCBnb1RvTG9jYXRpb25cbiAqICAgcmVxdWlyZXMgYSBmaWxlIHRvIG9wZW4uXG4gKiAtIFdoZW4gd2Ugd2FudCB0byBvcGVuIGEgZmlsZSBhcyBhIHBlbmRpbmcgcGFuZSBpdGVtLiBDdXJyZW50bHkgZ29Ub0xvY2F0aW9uIGNhbm5vdCBkbyB0aGlzLlxuICpcbiAqIEluIHRoZXNlIGNhc2VzLCB5b3UgbWF5IGRpc2FibGUgdGhlIGxpbnQgcnVsZSBhZ2FpbnN0IGBhdG9tLndvcmtzcGFjZS5vcGVuYCBieSBhZGRpbmcgdGhlXG4gKiBmb2xsb3dpbmcgY29tbWVudCBhYm92ZSBpdHMgdXNlOlxuICogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJ1bGVzZGlyL2F0b20tYXBpc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ29Ub0xvY2F0aW9uKFxuICBmaWxlOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiA/T3B0aW9ucyxcbik6IFByb21pc2U8YXRvbSRUZXh0RWRpdG9yPiB7XG4gIGNvbnN0IGNlbnRlcl8gPSBpZHgob3B0aW9ucywgXyA9PiBfLmNlbnRlcik7XG4gIGNvbnN0IGNlbnRlciA9IGNlbnRlcl8gPT0gbnVsbCA/IHRydWUgOiBjZW50ZXJfO1xuICBjb25zdCBhY3RpdmF0ZVBhbmVfID0gaWR4KG9wdGlvbnMsIF8gPT4gXy5hY3RpdmF0ZVBhbmUpO1xuICBjb25zdCBhY3RpdmF0ZVBhbmUgPSBhY3RpdmF0ZVBhbmVfID09IG51bGwgPyB0cnVlIDogYWN0aXZhdGVQYW5lXztcbiAgY29uc3QgYWN0aXZhdGVJdGVtID0gaWR4KG9wdGlvbnMsIF8gPT4gXy5hY3RpdmF0ZUl0ZW0pO1xuICBjb25zdCBsaW5lID0gaWR4KG9wdGlvbnMsIF8gPT4gXy5saW5lKTtcbiAgY29uc3QgY29sdW1uID0gaWR4KG9wdGlvbnMsIF8gPT4gXy5jb2x1bW4pO1xuICBjb25zdCBwZW5kaW5nID0gaWR4KG9wdGlvbnMsIF8gPT4gXy5wZW5kaW5nKTtcblxuICAvLyBQcmVmZXIgZ29pbmcgdG8gdGhlIGN1cnJlbnQgZWRpdG9yIHJhdGhlciB0aGFuIHRoZSBsZWZ0bW9zdCBlZGl0b3IuXG4gIGNvbnN0IGN1cnJlbnRFZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKCk7XG4gIGlmIChjdXJyZW50RWRpdG9yICE9IG51bGwgJiYgY3VycmVudEVkaXRvci5nZXRQYXRoKCkgPT09IGZpbGUpIHtcbiAgICBjb25zdCBwYW5lQ29udGFpbmVyID0gYXRvbS53b3Jrc3BhY2UucGFuZUNvbnRhaW5lckZvckl0ZW0oY3VycmVudEVkaXRvcik7XG4gICAgaW52YXJpYW50KHBhbmVDb250YWluZXIgIT0gbnVsbCk7XG4gICAgaWYgKGFjdGl2YXRlUGFuZSkge1xuICAgICAgcGFuZUNvbnRhaW5lci5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBpZiAobGluZSAhPSBudWxsKSB7XG4gICAgICBnb1RvTG9jYXRpb25JbkVkaXRvcihjdXJyZW50RWRpdG9yLCB7XG4gICAgICAgIGxpbmUsXG4gICAgICAgIGNvbHVtbjogY29sdW1uID09IG51bGwgPyAwIDogY29sdW1uLFxuICAgICAgICBjZW50ZXIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW52YXJpYW50KGNvbHVtbiA9PSBudWxsLCAnZ29Ub0xvY2F0aW9uOiBDYW5ub3Qgc3BlY2lmeSBqdXN0IGNvbHVtbicpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudEVkaXRvcjtcbiAgfSBlbHNlIHtcbiAgICAvLyBPYnZpb3VzbHksIGNhbGxpbmcgZ29Ub0xvY2F0aW9uIGlzbid0IGEgdmlhYmxlIGFsdGVybmF0aXZlIGhlcmUgOlBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcnVsZXNkaXIvYXRvbS1hcGlzXG4gICAgY29uc3QgZWRpdG9yID0gYXdhaXQgYXRvbS53b3Jrc3BhY2Uub3BlbihmaWxlLCB7XG4gICAgICBpbml0aWFsTGluZTogbGluZSxcbiAgICAgIGluaXRpYWxDb2x1bW46IGNvbHVtbixcbiAgICAgIHNlYXJjaEFsbFBhbmVzOiB0cnVlLFxuICAgICAgYWN0aXZhdGVQYW5lLFxuICAgICAgYWN0aXZhdGVJdGVtLFxuICAgICAgcGVuZGluZyxcbiAgICB9KTtcblxuICAgIGlmIChjZW50ZXIgJiYgbGluZSAhPSBudWxsKSB7XG4gICAgICBlZGl0b3Iuc2Nyb2xsVG9CdWZmZXJQb3NpdGlvbihbbGluZSwgY29sdW1uXSwge2NlbnRlcjogdHJ1ZX0pO1xuICAgIH1cbiAgICByZXR1cm4gZWRpdG9yO1xuICB9XG59XG5cbmNvbnN0IGdvVG9Mb2NhdGlvblN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuXG50eXBlIEdvdG9Mb2NhdGlvbkluRWRpdG9yT3B0aW9ucyA9IHt8XG4gIGxpbmU6IG51bWJlcixcbiAgY29sdW1uOiBudW1iZXIsXG4gIGNlbnRlcj86IGJvb2xlYW4sXG58fTtcblxuLy8gU2Nyb2xscyB0byB0aGUgZ2l2ZW4gbGluZS9jb2x1bW4gYXQgdGhlIGdpdmVuIGVkaXRvclxuLy8gYnJvYWRjYXN0cyB0aGUgZWRpdG9yIGluc3RhbmNlIG9uIGFuIG9ic2VydmFibGUgKHN1YmplY3QpIGF2YWlsYWJsZVxuLy8gdGhyb3VnaCB0aGUgZ2V0R29Ub0xvY2F0aW9uXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0xvY2F0aW9uSW5FZGl0b3IoXG4gIGVkaXRvcjogYXRvbSRUZXh0RWRpdG9yLFxuICBvcHRpb25zOiBHb3RvTG9jYXRpb25JbkVkaXRvck9wdGlvbnMsXG4pOiB2b2lkIHtcbiAgY29uc3QgY2VudGVyID0gb3B0aW9ucy5jZW50ZXIgPT0gbnVsbCA/IHRydWUgOiBvcHRpb25zLmNlbnRlcjtcbiAgY29uc3Qge2xpbmUsIGNvbHVtbn0gPSBvcHRpb25zO1xuXG4gIGVkaXRvci5zZXRDdXJzb3JCdWZmZXJQb3NpdGlvbihbbGluZSwgY29sdW1uXSk7XG4gIGlmIChjZW50ZXIpIHtcbiAgICBlZGl0b3Iuc2Nyb2xsVG9CdWZmZXJQb3NpdGlvbihbbGluZSwgY29sdW1uXSwge2NlbnRlcjogdHJ1ZX0pO1xuICB9XG5cbiAgZ29Ub0xvY2F0aW9uU3ViamVjdC5uZXh0KGVkaXRvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlTmF2aWdhdGluZ0VkaXRvcnMoKTogT2JzZXJ2YWJsZTxhdG9tJFRleHRFZGl0b3I+IHtcbiAgcmV0dXJuIGdvVG9Mb2NhdGlvblN1YmplY3Q7XG59XG4iXX0=