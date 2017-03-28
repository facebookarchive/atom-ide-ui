# atom-ide-ui

A collection of Atom UIs to support language services (namely the LSP).

This repository holds the published Atom package, which is a thin wrapper over the [`atom-ide-ui` NPM module](https://www.npmjs.com/package/atom-ide-ui).

The code for `atom-ide-ui` can be found at https://github.com/facebook/nuclide/tree/master/modules/atom-ide-ui.

> NOTE: Unfortunately `apm publish` behaves quite differently from NPM, which makes it difficult to maintain both an APM-friendly repository and an NPM-friendly repository. This is our workaround!

## Requirements

`atom-ide-ui` requires Atom 1.17+.

Packages based on https://github.com/atom/atom-languageclient should work out of the box with `atom-ide-ui` installed.

## Installation

Install `atom-ide-ui` from Atom's "Install" panel or run `apm install atom-ide-ui`.

## Feature Overview

### hyperclick

Command-click (Control-click on Windows/Linux) on symbols to go to their definition.

### atom-ide-busy-signal

A loading indicator in the status bar to indicate a busy status.

### atom-ide-code-format

Provides the "Format Code" command in text editors.

### atom-ide-code-highlight

Highlights all occurrences of a symbol at the current cursor.

### atom-ide-datatip

Provides mouse-activated overlays inside text editors.

### atom-ide-diagnostics

Displays diagnostics in the status bar, inline in the editor/gutter, and in a dedicated panel.

### atom-ide-definitions

Allows other packages to provide data sources for definitions.
These are then surfaced via `hyperclick` and preview datatips.

### atom-ide-outline-view

Displays a tree listing of symbols in the current file.

## License

`atom-ide-ui` is BSD-licensed. We also provide an additional patent grant.
