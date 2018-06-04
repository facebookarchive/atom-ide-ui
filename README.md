# atom-ide-ui &middot; [![Package version](https://img.shields.io/apm/v/atom-ide-ui.svg)](https://atom.io/packages/atom-ide-ui) [![CircleCI](https://img.shields.io/circleci/project/github/facebook-atom/atom-ide-ui.svg)](https://circleci.com/gh/facebook-atom/atom-ide-ui)

Atom UIs to support language services and debuggers as part of Atom IDE.

Language integrations should be built on top of
[atom-languageclient](https://github.com/atom/atom-languageclient).

![Screenshot](https://raw.githubusercontent.com/facebook-atom/atom-ide-ui/master/docs/images/screenshot.png)

Debugger integrations should be modeled after [atom-ide-debugger-node](https://atom.io/packages/atom-ide-debugger-node).

![Screenshot](https://raw.githubusercontent.com/facebook-atom/atom-ide-ui/master/docs/images/debugger.png)

Contributions are welcome! File bugs and feature requests from the issues page,
or read the [CONTRIBUTING.md](https://github.com/facebook-atom/atom-ide-ui/blob/master/CONTRIBUTING.md)
file for details on how to submit a pull request.

## Getting Started

First, make sure you have Atom 1.19+ installed.
Install `atom-ide-ui` from "Install" in Atom's settings or run:

```
apm install atom-ide-ui
```

You'll also want to install a suitable language package and/or debugger package since `atom-ide-ui` doesn't provide any language or debugger support by default.

Language support packages based on https://github.com/atom/atom-languageclient should work out of the box with `atom-ide-ui` installed, such as:

* [ide-csharp](https://github.com/atom/ide-csharp)
* [ide-flowtype](https://github.com/flowtype/ide-flowtype)
* [ide-java](https://github.com/atom/ide-java)
* [ide-php](https://github.com/atom/ide-php)
* [ide-typescript](https://github.com/atom/ide-typescript)
* [and more...](https://github.com/atom/atom-languageclient/wiki/List-of-Atom-packages-using-Atom-LanguageClient)

These debugger packages should work out of the box:
* [Node Debugger](https://atom.io/packages/atom-ide-debugger-node)
* [Python Debugger](https://atom.io/packages/atom-ide-debugger-python)
* [React Native Debugger]( https://atom.io/packages/atom-ide-debugger-react-native)
* [C/C++ GDB Debugger]( https://atom.io/packages/atom-ide-debugger-native-gdb)
* [OCaml Debugger]( https://atom.io/packages/atom-ide-debugger-ocaml)

## Language Features

Check out the documentation pages for more information about each feature!

- [Busy Signal](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/busy-signal.md)
- [Code Actions](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/code-actions.md)
- [Code Format](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/code-format.md)
- [Code Highlight](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/code-highlight.md)
- [Console](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/console.md)
- [Datatips](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/datatips.md)
- [Definitions (plus Hyperclick)](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/definitions.md)
- [Diagnostics](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/diagnostics.md)
- [Find References](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/find-references.md)
- [Outline](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/outline-view.md)
- [Signature Help (Experimental/WIP)](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/signature-help.md)

## Debugger Features
- [Launch/Attach UI](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-launch-attach-ui.md)
- [Breakpoints + conditional](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-breakpoints.md)
- [Stepping (Pause, Continue, Step, Restart)](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-controls.md)
- [Threads (Running, Focus)](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-threads.md)
- [Stacktraces & in-memory source views](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-stacktraces.md)
- [Scopes & editable variables views](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-scopes.md)
- [Watch expressions](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-watch-expressions.md)
- [Console + Repl](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/debugger-console.md)

See [Keybindings](https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/keybindings.md) for a list of default keybindings.

## License

`atom-ide-ui` is BSD-licensed. We also provide an additional patent grant.
