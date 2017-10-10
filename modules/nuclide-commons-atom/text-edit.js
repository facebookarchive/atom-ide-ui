'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyTextEditsForMultipleFiles = undefined;

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

/**
 * Attempts to apply the given patches for multiple files. Accepts a Map as input
 * with file paths as keys and a corresponding array of TextEdits as values.
 *
 * It is an error to send overlapping text-edits. All text-edits describe changes
 * made to the initial document version. The order of the edits does not matter
 * as they will be sorted before they are applied.
 *
 * All changes will be applied to the buffers but not saved. If a file is not
 * currently open, it will be opened.
 *
 * If a change is undone (Cmd+Z), only the changes of the current
 * file will be undone. All of the changes for that file will be undone at once.
 *
 * Returns true if the application was successful, otherwise false. If any of
 * the changes fail, for ANY file, then none of the changes are applied.
 */
let applyTextEditsForMultipleFiles = exports.applyTextEditsForMultipleFiles = (() => {
  var _ref = (0, _asyncToGenerator.default)(function* (changes) {
    const paths = Array.from(changes.keys());

    // NOTE: There is a race here. If the file contents change while the
    // editors are being opened, then the ranges of the TextEdits will be off.
    // However, currently this is only used to applyEdits to open files.
    const editors = yield Promise.all(paths.map((() => {
      var _ref2 = (0, _asyncToGenerator.default)(function* (path) {
        return (0, (_goToLocation || _load_goToLocation()).goToLocation)(path);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    })()));
    const checkpoints = editors.map(function (editor) {
      if (!(editor != null)) {
        throw new Error('Invariant violation: "editor != null"');
      }

      const buffer = editor.getBuffer();
      return [buffer, buffer.createCheckpoint()];
    });
    const allOkay = paths.reduce(function (successSoFar, path) {
      const edits = changes.get(path);
      return successSoFar && edits != null && applyTextEdits(path, ...edits);
    }, true);
    if (!allOkay) {
      checkpoints.forEach(function ([buffer, checkPoint]) {
        buffer.revertToCheckpoint(checkPoint);
        return false;
      });
    }
    return allOkay;
  });

  return function applyTextEditsForMultipleFiles(_x) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * Attempts to apply the given patches to the given file.
 *
 * It is an error to send overlapping edits. The order of the edits does not
 * matter (they will be sorted before they are applied).
 *
 * The file must be currently open in Atom, and the changes will be applied to the buffer but not
 * saved.
 *
 * Returns true if the application was successful, otherwise false (e.g. if the oldText did not
 * match).
 */
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

exports.applyTextEdits = applyTextEdits;
exports.applyTextEditsToBuffer = applyTextEditsToBuffer;

var _log4js;

function _load_log4js() {
  return _log4js = require('log4js');
}

var _textEditor;

function _load_textEditor() {
  return _textEditor = require('./text-editor');
}

var _goToLocation;

function _load_goToLocation() {
  return _goToLocation = require('./go-to-location');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applyTextEdits(path, ...edits) {
  // Sort the edits to be in order (For every edit, the start of its range will
  // be after the end of the previous edit's range.)
  edits.sort((e1, e2) => e1.oldRange.compare(e2.oldRange));
  if (editsOverlap(edits)) {
    (0, (_log4js || _load_log4js()).getLogger)('text-edit').warn('applyTextEdits was called with overlapping edits.');
    return false;
  }
  const editor = (0, (_textEditor || _load_textEditor()).existingEditorForUri)(path);

  if (!(editor != null)) {
    throw new Error('Invariant violation: "editor != null"');
  }

  return applyTextEditsToBuffer(editor.getBuffer(), edits);
}

function applyTextEditsToBuffer(buffer, edits) {
  // Special-case whole-buffer changes to minimize disruption.
  if (edits.length === 1 && edits[0].oldRange.isEqual(buffer.getRange())) {
    if (edits[0].oldText != null && edits[0].oldText !== buffer.getText()) {
      return false;
    }
    buffer.setTextViaDiff(edits[0].newText);
    return true;
  }

  const checkpoint = buffer.createCheckpoint();

  // Iterate through in reverse order. Edits earlier in the file can move around text later in the
  // file, so to avoid conflicts edits should be applied last first.
  for (let i = edits.length - 1; i >= 0; i--) {
    const edit = edits[i];
    const success = applyToBuffer(buffer, edit);
    if (!success) {
      buffer.revertToCheckpoint(checkpoint);
      return false;
    }
  }

  buffer.groupChangesSinceCheckpoint(checkpoint);
  return true;
}

function applyToBuffer(buffer, edit) {
  if (edit.oldRange.start.row === edit.oldRange.end.row) {
    // A little extra validation when the old range spans only one line. In particular, this helps
    // when the old range is empty so there is no old text for us to compare against. We can at
    // least abort if the line isn't long enough.
    const lineLength = buffer.lineLengthForRow(edit.oldRange.start.row);
    if (edit.oldRange.end.column > lineLength) {
      return false;
    }
  }
  if (edit.oldText != null) {
    const currentText = buffer.getTextInRange(edit.oldRange);
    if (currentText !== edit.oldText) {
      return false;
    }
  }
  buffer.setTextInRange(edit.oldRange, edit.newText);
  return true;
}

// Returns whether an array of sorted TextEdits contain an overlapping range.
function editsOverlap(sortedEdits) {
  for (let i = 0; i < sortedEdits.length - 1; i++) {
    if (sortedEdits[i].oldRange.intersectsWith(sortedEdits[i + 1].oldRange)) {
      return true;
    }
  }
  return false;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtZWRpdC5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VzIiwicGF0aHMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiZWRpdG9ycyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJwYXRoIiwiY2hlY2twb2ludHMiLCJlZGl0b3IiLCJidWZmZXIiLCJnZXRCdWZmZXIiLCJjcmVhdGVDaGVja3BvaW50IiwiYWxsT2theSIsInJlZHVjZSIsInN1Y2Nlc3NTb0ZhciIsImVkaXRzIiwiZ2V0IiwiYXBwbHlUZXh0RWRpdHMiLCJmb3JFYWNoIiwiY2hlY2tQb2ludCIsInJldmVydFRvQ2hlY2twb2ludCIsImFwcGx5VGV4dEVkaXRzRm9yTXVsdGlwbGVGaWxlcyIsImFwcGx5VGV4dEVkaXRzVG9CdWZmZXIiLCJzb3J0IiwiZTEiLCJlMiIsIm9sZFJhbmdlIiwiY29tcGFyZSIsImVkaXRzT3ZlcmxhcCIsIndhcm4iLCJsZW5ndGgiLCJpc0VxdWFsIiwiZ2V0UmFuZ2UiLCJvbGRUZXh0IiwiZ2V0VGV4dCIsInNldFRleHRWaWFEaWZmIiwibmV3VGV4dCIsImNoZWNrcG9pbnQiLCJpIiwiZWRpdCIsInN1Y2Nlc3MiLCJhcHBseVRvQnVmZmVyIiwiZ3JvdXBDaGFuZ2VzU2luY2VDaGVja3BvaW50Iiwic3RhcnQiLCJyb3ciLCJlbmQiLCJsaW5lTGVuZ3RoIiwibGluZUxlbmd0aEZvclJvdyIsImNvbHVtbiIsImN1cnJlbnRUZXh0IiwiZ2V0VGV4dEluUmFuZ2UiLCJzZXRUZXh0SW5SYW5nZSIsInNvcnRlZEVkaXRzIiwiaW50ZXJzZWN0c1dpdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQWlCTyxXQUNMQSxPQURLLEVBRWE7QUFDbEIsVUFBTUMsUUFBUUMsTUFBTUMsSUFBTixDQUFXSCxRQUFRSSxJQUFSLEVBQVgsQ0FBZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFNQyxVQUFVLE1BQU1DLFFBQVFDLEdBQVIsQ0FDcEJOLE1BQU1P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QUFQO0FBQ0Q7QUFDRjtBQUNELFNBQU8sS0FBUDtBQUNEIiwiZmlsZSI6InRleHQtZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAZmxvd1xuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCB0eXBlIHtOdWNsaWRlVXJpfSBmcm9tICdudWNsaWRlLWNvbW1vbnMvbnVjbGlkZVVyaSc7XG5cbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCB7Z2V0TG9nZ2VyfSBmcm9tICdsb2c0anMnO1xuXG5pbXBvcnQge2V4aXN0aW5nRWRpdG9yRm9yVXJpfSBmcm9tICcuL3RleHQtZWRpdG9yJztcbmltcG9ydCB7Z29Ub0xvY2F0aW9ufSBmcm9tICcuL2dvLXRvLWxvY2F0aW9uJztcblxuZXhwb3J0IHR5cGUgVGV4dEVkaXQgPSB7XG4gIG9sZFJhbmdlOiBhdG9tJFJhbmdlLFxuICBuZXdUZXh0OiBzdHJpbmcsXG4gIC8vIElmIGluY2x1ZGVkLCB0aGlzIHdpbGwgYmUgdXNlZCB0byB2ZXJpZnkgdGhhdCB0aGUgZWRpdCBzdGlsbCBhcHBsaWVzIGNsZWFubHkuXG4gIG9sZFRleHQ/OiBzdHJpbmcsXG59O1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGFwcGx5IHRoZSBnaXZlbiBwYXRjaGVzIGZvciBtdWx0aXBsZSBmaWxlcy4gQWNjZXB0cyBhIE1hcCBhcyBpbnB1dFxuICogd2l0aCBmaWxlIHBhdGhzIGFzIGtleXMgYW5kIGEgY29ycmVzcG9uZGluZyBhcnJheSBvZiBUZXh0RWRpdHMgYXMgdmFsdWVzLlxuICpcbiAqIEl0IGlzIGFuIGVycm9yIHRvIHNlbmQgb3ZlcmxhcHBpbmcgdGV4dC1lZGl0cy4gQWxsIHRleHQtZWRpdHMgZGVzY3JpYmUgY2hhbmdlc1xuICogbWFkZSB0byB0aGUgaW5pdGlhbCBkb2N1bWVudCB2ZXJzaW9uLiBUaGUgb3JkZXIgb2YgdGhlIGVkaXRzIGRvZXMgbm90IG1hdHRlclxuICogYXMgdGhleSB3aWxsIGJlIHNvcnRlZCBiZWZvcmUgdGhleSBhcmUgYXBwbGllZC5cbiAqXG4gKiBBbGwgY2hhbmdlcyB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGJ1ZmZlcnMgYnV0IG5vdCBzYXZlZC4gSWYgYSBmaWxlIGlzIG5vdFxuICogY3VycmVudGx5IG9wZW4sIGl0IHdpbGwgYmUgb3BlbmVkLlxuICpcbiAqIElmIGEgY2hhbmdlIGlzIHVuZG9uZSAoQ21kK1opLCBvbmx5IHRoZSBjaGFuZ2VzIG9mIHRoZSBjdXJyZW50XG4gKiBmaWxlIHdpbGwgYmUgdW5kb25lLiBBbGwgb2YgdGhlIGNoYW5nZXMgZm9yIHRoYXQgZmlsZSB3aWxsIGJlIHVuZG9uZSBhdCBvbmNlLlxuICpcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gd2FzIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSBmYWxzZS4gSWYgYW55IG9mXG4gKiB0aGUgY2hhbmdlcyBmYWlsLCBmb3IgQU5ZIGZpbGUsIHRoZW4gbm9uZSBvZiB0aGUgY2hhbmdlcyBhcmUgYXBwbGllZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGx5VGV4dEVkaXRzRm9yTXVsdGlwbGVGaWxlcyhcbiAgY2hhbmdlczogTWFwPE51Y2xpZGVVcmksIEFycmF5PFRleHRFZGl0Pj4sXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3QgcGF0aHMgPSBBcnJheS5mcm9tKGNoYW5nZXMua2V5cygpKTtcblxuICAvLyBOT1RFOiBUaGVyZSBpcyBhIHJhY2UgaGVyZS4gSWYgdGhlIGZpbGUgY29udGVudHMgY2hhbmdlIHdoaWxlIHRoZVxuICAvLyBlZGl0b3JzIGFyZSBiZWluZyBvcGVuZWQsIHRoZW4gdGhlIHJhbmdlcyBvZiB0aGUgVGV4dEVkaXRzIHdpbGwgYmUgb2ZmLlxuICAvLyBIb3dldmVyLCBjdXJyZW50bHkgdGhpcyBpcyBvbmx5IHVzZWQgdG8gYXBwbHlFZGl0cyB0byBvcGVuIGZpbGVzLlxuICBjb25zdCBlZGl0b3JzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgcGF0aHMubWFwKGFzeW5jIHBhdGggPT4gZ29Ub0xvY2F0aW9uKHBhdGgpKSxcbiAgKTtcbiAgY29uc3QgY2hlY2twb2ludHMgPSBlZGl0b3JzLm1hcChlZGl0b3IgPT4ge1xuICAgIGludmFyaWFudChlZGl0b3IgIT0gbnVsbCk7XG4gICAgY29uc3QgYnVmZmVyID0gZWRpdG9yLmdldEJ1ZmZlcigpO1xuICAgIHJldHVybiBbYnVmZmVyLCBidWZmZXIuY3JlYXRlQ2hlY2twb2ludCgpXTtcbiAgfSk7XG4gIGNvbnN0IGFsbE9rYXkgPSBwYXRocy5yZWR1Y2UoKHN1Y2Nlc3NTb0ZhciwgcGF0aCkgPT4ge1xuICAgIGNvbnN0IGVkaXRzID0gY2hhbmdlcy5nZXQocGF0aCk7XG4gICAgcmV0dXJuIHN1Y2Nlc3NTb0ZhciAmJiBlZGl0cyAhPSBudWxsICYmIGFwcGx5VGV4dEVkaXRzKHBhdGgsIC4uLmVkaXRzKTtcbiAgfSwgdHJ1ZSk7XG4gIGlmICghYWxsT2theSkge1xuICAgIGNoZWNrcG9pbnRzLmZvckVhY2goKFtidWZmZXIsIGNoZWNrUG9pbnRdKSA9PiB7XG4gICAgICBidWZmZXIucmV2ZXJ0VG9DaGVja3BvaW50KGNoZWNrUG9pbnQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBhbGxPa2F5O1xufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGFwcGx5IHRoZSBnaXZlbiBwYXRjaGVzIHRvIHRoZSBnaXZlbiBmaWxlLlxuICpcbiAqIEl0IGlzIGFuIGVycm9yIHRvIHNlbmQgb3ZlcmxhcHBpbmcgZWRpdHMuIFRoZSBvcmRlciBvZiB0aGUgZWRpdHMgZG9lcyBub3RcbiAqIG1hdHRlciAodGhleSB3aWxsIGJlIHNvcnRlZCBiZWZvcmUgdGhleSBhcmUgYXBwbGllZCkuXG4gKlxuICogVGhlIGZpbGUgbXVzdCBiZSBjdXJyZW50bHkgb3BlbiBpbiBBdG9tLCBhbmQgdGhlIGNoYW5nZXMgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBidWZmZXIgYnV0IG5vdFxuICogc2F2ZWQuXG4gKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBhcHBsaWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIGZhbHNlIChlLmcuIGlmIHRoZSBvbGRUZXh0IGRpZCBub3RcbiAqIG1hdGNoKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VGV4dEVkaXRzKFxuICBwYXRoOiBOdWNsaWRlVXJpLFxuICAuLi5lZGl0czogQXJyYXk8VGV4dEVkaXQ+XG4pOiBib29sZWFuIHtcbiAgLy8gU29ydCB0aGUgZWRpdHMgdG8gYmUgaW4gb3JkZXIgKEZvciBldmVyeSBlZGl0LCB0aGUgc3RhcnQgb2YgaXRzIHJhbmdlIHdpbGxcbiAgLy8gYmUgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgcHJldmlvdXMgZWRpdCdzIHJhbmdlLilcbiAgZWRpdHMuc29ydCgoZTEsIGUyKSA9PiBlMS5vbGRSYW5nZS5jb21wYXJlKGUyLm9sZFJhbmdlKSk7XG4gIGlmIChlZGl0c092ZXJsYXAoZWRpdHMpKSB7XG4gICAgZ2V0TG9nZ2VyKCd0ZXh0LWVkaXQnKS53YXJuKFxuICAgICAgJ2FwcGx5VGV4dEVkaXRzIHdhcyBjYWxsZWQgd2l0aCBvdmVybGFwcGluZyBlZGl0cy4nLFxuICAgICk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGVkaXRvciA9IGV4aXN0aW5nRWRpdG9yRm9yVXJpKHBhdGgpO1xuICBpbnZhcmlhbnQoZWRpdG9yICE9IG51bGwpO1xuICByZXR1cm4gYXBwbHlUZXh0RWRpdHNUb0J1ZmZlcihlZGl0b3IuZ2V0QnVmZmVyKCksIGVkaXRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VGV4dEVkaXRzVG9CdWZmZXIoXG4gIGJ1ZmZlcjogYXRvbSRUZXh0QnVmZmVyLFxuICBlZGl0czogQXJyYXk8VGV4dEVkaXQ+LFxuKTogYm9vbGVhbiB7XG4gIC8vIFNwZWNpYWwtY2FzZSB3aG9sZS1idWZmZXIgY2hhbmdlcyB0byBtaW5pbWl6ZSBkaXNydXB0aW9uLlxuICBpZiAoZWRpdHMubGVuZ3RoID09PSAxICYmIGVkaXRzWzBdLm9sZFJhbmdlLmlzRXF1YWwoYnVmZmVyLmdldFJhbmdlKCkpKSB7XG4gICAgaWYgKGVkaXRzWzBdLm9sZFRleHQgIT0gbnVsbCAmJiBlZGl0c1swXS5vbGRUZXh0ICE9PSBidWZmZXIuZ2V0VGV4dCgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGJ1ZmZlci5zZXRUZXh0VmlhRGlmZihlZGl0c1swXS5uZXdUZXh0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrcG9pbnQgPSBidWZmZXIuY3JlYXRlQ2hlY2twb2ludCgpO1xuXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCBpbiByZXZlcnNlIG9yZGVyLiBFZGl0cyBlYXJsaWVyIGluIHRoZSBmaWxlIGNhbiBtb3ZlIGFyb3VuZCB0ZXh0IGxhdGVyIGluIHRoZVxuICAvLyBmaWxlLCBzbyB0byBhdm9pZCBjb25mbGljdHMgZWRpdHMgc2hvdWxkIGJlIGFwcGxpZWQgbGFzdCBmaXJzdC5cbiAgZm9yIChsZXQgaSA9IGVkaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgZWRpdCA9IGVkaXRzW2ldO1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhcHBseVRvQnVmZmVyKGJ1ZmZlciwgZWRpdCk7XG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBidWZmZXIucmV2ZXJ0VG9DaGVja3BvaW50KGNoZWNrcG9pbnQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGJ1ZmZlci5ncm91cENoYW5nZXNTaW5jZUNoZWNrcG9pbnQoY2hlY2twb2ludCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBhcHBseVRvQnVmZmVyKGJ1ZmZlcjogYXRvbSRUZXh0QnVmZmVyLCBlZGl0OiBUZXh0RWRpdCk6IGJvb2xlYW4ge1xuICBpZiAoZWRpdC5vbGRSYW5nZS5zdGFydC5yb3cgPT09IGVkaXQub2xkUmFuZ2UuZW5kLnJvdykge1xuICAgIC8vIEEgbGl0dGxlIGV4dHJhIHZhbGlkYXRpb24gd2hlbiB0aGUgb2xkIHJhbmdlIHNwYW5zIG9ubHkgb25lIGxpbmUuIEluIHBhcnRpY3VsYXIsIHRoaXMgaGVscHNcbiAgICAvLyB3aGVuIHRoZSBvbGQgcmFuZ2UgaXMgZW1wdHkgc28gdGhlcmUgaXMgbm8gb2xkIHRleHQgZm9yIHVzIHRvIGNvbXBhcmUgYWdhaW5zdC4gV2UgY2FuIGF0XG4gICAgLy8gbGVhc3QgYWJvcnQgaWYgdGhlIGxpbmUgaXNuJ3QgbG9uZyBlbm91Z2guXG4gICAgY29uc3QgbGluZUxlbmd0aCA9IGJ1ZmZlci5saW5lTGVuZ3RoRm9yUm93KGVkaXQub2xkUmFuZ2Uuc3RhcnQucm93KTtcbiAgICBpZiAoZWRpdC5vbGRSYW5nZS5lbmQuY29sdW1uID4gbGluZUxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZWRpdC5vbGRUZXh0ICE9IG51bGwpIHtcbiAgICBjb25zdCBjdXJyZW50VGV4dCA9IGJ1ZmZlci5nZXRUZXh0SW5SYW5nZShlZGl0Lm9sZFJhbmdlKTtcbiAgICBpZiAoY3VycmVudFRleHQgIT09IGVkaXQub2xkVGV4dCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBidWZmZXIuc2V0VGV4dEluUmFuZ2UoZWRpdC5vbGRSYW5nZSwgZWRpdC5uZXdUZXh0KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFJldHVybnMgd2hldGhlciBhbiBhcnJheSBvZiBzb3J0ZWQgVGV4dEVkaXRzIGNvbnRhaW4gYW4gb3ZlcmxhcHBpbmcgcmFuZ2UuXG5mdW5jdGlvbiBlZGl0c092ZXJsYXAoc29ydGVkRWRpdHM6IEFycmF5PFRleHRFZGl0Pik6IGJvb2xlYW4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEVkaXRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGlmIChzb3J0ZWRFZGl0c1tpXS5vbGRSYW5nZS5pbnRlcnNlY3RzV2l0aChzb3J0ZWRFZGl0c1tpICsgMV0ub2xkUmFuZ2UpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19