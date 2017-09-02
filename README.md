# atom-ide-ui

[![Package version](https://img.shields.io/apm/v/atom-ide-ui.svg?style=flat-square)](https://atom.io/packages/atom-ide-ui)
[![CircleCI](https://img.shields.io/circleci/project/github/facebook-atom/atom-ide-ui.svg)](https://circleci.com/gh/facebook-atom/atom-ide-ui)

A collection of Atom UIs to support language services as part of Atom IDE,
designed for use with packages built on top of
[atom-languageclient](https://github.com/atom/atom-languageclient).

Contributions are welcome! File bugs and feature requests from the issues page,
or read the [CONTRIBUTING.md](./CONTRIBUTING.md) file for details on how to submit a pull request.

## Getting Started

Install `atom-ide-ui` from Atom's "Install" panel or run `apm install atom-ide-ui`.

## Requirements

`atom-ide-ui` requires Atom 1.17+.

Packages based on https://github.com/atom/atom-languageclient should work out of the box with `atom-ide-ui` installed, such as:

* [ide-csharp](https://github.com/atom/ide-csharp)
* [ide-flowtype](https://github.com/flowtype/ide-flowtype)
* [ide-java](https://github.com/atom/ide-java)
* [ide-php](https://github.com/atom/ide-php)
* [ide-typescript](https://github.com/atom/ide-typescript)

## Feature Overview

### hyperclick

Command-click (Control-click on Windows/Linux) on symbols to go to their definition.

### atom-ide-busy-signal

A loading indicator in the status bar to indicate a busy status.

### atom-ide-code-actions

Displays inline code actions for diagnostics where applicable.

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
