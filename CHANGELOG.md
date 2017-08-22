# Changelog

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
