# Contributing to `atom-ide-ui`

Run the following commands to run `atom-ide-ui` from source:

```
# Clone the source
$ git clone https://github.com/facebook-atom/atom-ide-ui
# Install dependencies (`npm install` also works, but we recommend Yarn)
$ yarn
# Link the package to Atom's package directory
$ apm link

# Make sure tests pass!
$ npm test

# Run only Flow
$ npm run flow
# Run only lint
$ npm run lint-all
# Run only unit tests
$ ./scripts/test.js
```

## Repository Structure

Code in `modules/` is periodically synced with the Nuclide repository: https://github.com/facebook/nuclide/tree/master/modules

The main [index.js file](./modules/atom-ide-ui/index.js) is a [unified package](
https://nuclide.io/blog/2016/01/13/Nuclide-v0.111.0-The-Unified-Package/) that
loads all of the feature packages (e.g. `atom-ide-diagnostics`, `hyperclick`, etc).
This allows us to share dependencies between all of Atom IDE UI's subpackages.

- All feature packages are under [`modules/atom-ide-ui/pkg`](./modules/atom-ide-ui/pkg)
  - Each package contains code in `lib/` and tests in `spec/`.
- The other `modules/` directories are helper libraries used in both Atom IDE UI and Nuclide.
  - Node-only helpers are found in [`modules/nuclide-commons`](./modules/nuclide-commons)
  - Atom-only helpers are found in [`modules/nuclide-commons-atom`](./modules/nuclide-commons-atom)
  - Common React components are found in [`modules/nuclide-commons-ui`](./modules/nuclide-commons-ui)
  - [`modules/nuclide-node-transpiler`](./modules/nuclide-node-transpiler) adds a require hook for runtime transpilation.
  - [`modules/nuclide-jasmine`](./modules/nuclide-jasmine) is our custom Node test runner.
  - [`modules/eslint-plugin-nuclide-internal`](./modules/eslint-plugin-nuclide-internal) contains various lint rules that we've developed for Atom/Nuclide packages.

## Development Tips

- Install [`ide-flowtype`](https://atom.io/packages/ide-flowtype) for Flow integration.
- Install [`linter-eslint`](https://atom.io/packages/linter-eslint) for ESLint integration.
  - Skip the `linter` dependency to use atom-ide-ui's Diagnostics.
- Coding style is enforced by `eslint-plugin-prettier`.

## Pull Requests

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests in the `spec` folders.
3. If you've changed APIs, update the documentation.
4. Ensure that tests pass and Flow/ESLint are clean (see above).
7. If you haven't already, complete the Contributor License Agreement ("CLA").

## Contributor License Agreement ("CLA")
In order to accept your pull request, we need you to submit a CLA. You only need
to do this once to work on any of Facebook's open source projects.

Complete your CLA here: <https://code.facebook.com/cla>

## Issues

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue.

## License

By contributing to atom-ide-ui, you agree that your contributions will be licensed
under the LICENSE file in the root directory of this source tree.
