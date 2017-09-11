# Changelog

## v0.3.0

- Find References and Code Format now use the busy signal while waiting for providers.
- CSS classes have been renamed for consistency.

## v0.2.0

### Code Actions

- Added support for code actions!

### Datatips

- Colors are now consistent with the syntax theme rather than the UI theme.

### Diagnostics

- Info messages are now consistently colored (using the theme's "info" color)
- Improved datatip for diagnostic messages.
- Diagnostics are now immediately visible (without an active text editor).
- Fixed Linter V2 "reference" conversion.

### Hyperclick

- Reduced duplicated provider requests on Windows.

### Outline View

- Ensure that the spinner is centered.

## v0.1.12

- Display a better warning message when installed alongside Nuclide
- Fix rare scroll-related rendering glitches with Atom 1.19
- outline-view searching polish:
  - Escape cancels the search
  - Fix search box UI when horizontally scrolling
  - Fuzzy search now has a minimum threshold

## v0.1.11

This release should be compatible with Atom 1.19.

- diagnostics: Converted to Redux, deprecated the old "nuclide-diagnostics" APIs.
- definitions: Fixed a memory leak with definition caching.
- definitions: Multiple definitions don't require a "name" anymore.

## v0.1.10

- code-format: Bugfix for Atom 1.19.
- code-highlight: Fixed a bug causing spurious highlights.
- Fixed some spurious deprecation warnings with outline-view and find-references.
