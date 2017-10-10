# atom-ide-ui &middot; [![Package version](https://img.shields.io/apm/v/atom-ide-ui.svg)](https://atom.io/packages/atom-ide-ui) [![CircleCI](https://img.shields.io/circleci/project/github/facebook-atom/atom-ide-ui.svg)](https://circleci.com/gh/facebook-atom/atom-ide-ui) [![codecov](https://img.shields.io/codecov/c/github/facebook-atom/atom-ide-ui.svg)](https://codecov.io/gh/facebook-atom/atom-ide-ui)

A collection of Atom UIs to support language services as part of Atom IDE,
designed for use with packages built on top of
[atom-languageclient](https://github.com/atom/atom-languageclient).

![Screenshot](https://raw.githubusercontent.com/facebook-atom/atom-ide-ui/master/docs/images/screenshot.png)

Contributions are welcome! File bugs and feature requests from the issues page,
or read the [CONTRIBUTING.md](https://github.com/facebook-atom/atom-ide-ui/blob/master/CONTRIBUTING.md)
file for details on how to submit a pull request.

## Getting Started

First, make sure you have Atom 1.19+ installed.
Install `atom-ide-ui` from "Install" in Atom's settings or run:

```
apm install atom-ide-ui
```

You'll also want to install a suitable language package:
`atom-ide-ui` doesn't provide any language features by default.

Packages based on https://github.com/atom/atom-languageclient should work out of the box with `atom-ide-ui` installed, such as:

* [ide-csharp](https://github.com/atom/ide-csharp)
* [ide-flowtype](https://github.com/flowtype/ide-flowtype)
* [ide-java](https://github.com/atom/ide-java)
* [ide-php](https://github.com/atom/ide-php)
* [ide-typescript](https://github.com/atom/ide-typescript)
* [and more...](https://github.com/atom/atom-languageclient/wiki/List-of-Atom-packages-using-Atom-LanguageClient)

## Feature Overview

Check out the documentation pages for more information about each feature!

- [Busy Signal](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/busy-signal.md)
- [Code Actions](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/code-actions.md)
- [Code Format](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/code-format.md)
- [Code Highlight](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/code-highlight.md)
- [Datatips](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/datatips.md)
- [Definitions (plus Hyperclick)](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/definitions.md)
- [Diagnostics](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/diagnostics.md)
- [Find References](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/find-references.md)
- [Outline](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/outline-view.md)
- [Signature Help (Experimental/WIP)](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/signature-help.md)

See [Keybindings](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/keybindings.md) for a list of default keybindings.

## License

`atom-ide-ui` is BSD-licensed. We also provide an additional patent grant.
