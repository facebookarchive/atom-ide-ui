# Changelog

## v0.11.2

### General

- Fixed indentation bug in outline view. (#176)
- Fixed console scroll behavior where the console wouldn't allow the user to scroll while new messages were coming in.
- Diagnostics popups are now scrollable, with a fixed maximum height.
- Removed NODE_PATH override that was sometimes causing issues. (see #64)
- Added a scoped setting to enable/disable signature help.

### Debugger

- Made the 'multi-line' tip in the debugger console more compact.
- The debugger console now stays focused when the debugger hits a breakpoint.
- Fixed duplicate debugger tabs when switching hostnames.
- Added shortcut for the "Debugger" menu on Windows (`alt-d`).

### Terminal

- Clicking on absolute paths in the terminal now opens the file in Atom.
- Fixed a bug where the terminal scrollbar would be unclickable.

## v0.11.1

- Fix atom-ide-debugger-native-gdb on systems with a different Node version from Atom.
- Remove extra "Nuclide" menu item.

## v0.11.0

- `atom-ide-terminal` is now available!
- Improve documentation for `atom-ide-debugger` usage and integrations.

## v0.10.1

- Fix atom-ide-debugger-* runtime path resolution.

## v0.10.0

### Debugging

- `atom-ide-debugger` is now available! Install a debugger package to get started:
  - https://atom.io/packages/atom-ide-debugger-node
  - https://atom.io/packages/atom-ide-debugger-python
  - https://atom.io/packages/atom-ide-debugger-native-gdb
  - https://atom.io/packages/atom-ide-debugger-react-native
  - https://atom.io/packages/atom-ide-debugger-ocaml
  - Start debugging by adding a breakpoint in the gutter or via the "Debugger" menu.

### Signature Help

- Added a keyboard shortcut to trigger signature help (cmd/ctrl-shift-space).
- The active parameter is now underlined (in addition to being bold)
- Fixed vertical positioning of signature help datatips when they start to go off the screen.
- Signature help should now be triggered when using autocomplete and/or copy+pasting.
- Markdown in the signature should now be escaped.

### Other

- Errors from find references are now correctly surfaced.
- Code from find references is now copyable.
- Removed extra whitespace in diagnostic trace output.
- Polished various details of the Console UI.
- The "format on save" setting can now be controlled on a per-grammar basis.

## v0.9.4

- Fix console rendering bug

## v0.9.3

Fixed two regressions in Outline:

- Restored icons for atom-languageclient providers.
- Restored the ability to filter-on-type.

## v0.9.2

- Improve performance of outline rendering
- Fix error when Diagnostics is unmounted (#169)
- Don't show the Console's sources list without a source
- Console documentation is now available at https://github.com/facebook-atom/atom-ide-ui/blob/master/docs/console.md!

## v0.9.1

This is a small release with the following highlight:

- Resolves an issue where "Nuclide" would appear in the application menu. Instead, "Clear Console" has been moved to the Edit menu.

## v0.8.1

- URL fragments/queries are now supported in diagnostic messages (#159)
- Fixed exception at startup with various third-party themes (#160)

## v0.8.0

- Added `atom-ide-console`! More information to come soon.
- Nested Outline elements can now be collapsed.
- Outline is now keyboard navigable (up/down to move, left/right to collapse/expand, '/' to filter).
- Fixed duplicate datatips when hovering over gutter diagnostics.
- Fixed bug with diagnostic selection.
- Long-running find references and code format operations now bring up a busy signal tooltip.
- Text editors retain focus after clicking on code actions (#152).
- Fixed inability to deselect diagnostic messages (#143).

## v0.7.2

- Fixed "Failed to load resource" error in console (#100).
- Update `marked` dependency to prevent security issues.
- Prevent errors when having both `atom-ide-ui` and `nuclide` installed.

## v0.7.1

- Datatips
  - In the case of multiple available datatips (e.g. hover + diagnostic), now all of them will be displayed.
  - Fixed scrolling inside pinned datatips.
- Code actions are now retrieved upon selection.
- Code highlights: increased debounce duration after keystrokes.
- Updated to React v16.2.0 and RxJS v5.5.5.

## v0.7.0

### General

- Fixed some memory leaks in our core UI components.
- React components no longer use string refs (#123).
- Removed all uses of `TextBuffer::onDidChange` (#111).

### Diagnostics

- Auto show/hide respects the 'current file only' option (#124).
- Allow escaped characters in diagnostic message URLs.
- Minor fixes for diagnostic tooltips.

### Find References

- Added a new `find-references-view` API to display external information in the Find References UI.

### Signature Help

- Signature help datatips now drag in the correct direction (#128).

## v0.6.0

### Hyperclick

- Hyperclick providers are no longer triggered past the end of lines.
- Fixed a minor race condition around loading indicators.

### Code Actions

- Fix "null is not iterable" exception with null results (#120)
- Providers may now safely return a null result (equivalent to an empty array).

## v0.5.4

### Diagnostics
- Line numbers are now visible when filtering to the current file (#101)
- Improved table resizing logic, and added several performance optimizations.

### Hyperclick
- Fixed some minor bugs around loading indicators, caching, and async races.

### Outlines
- Fixed auto-focus again (for real this time... #105)

## v0.5.3

### Datatips
- Datatips now appear at the cursor rather than the beginning of the range (#19)
- Scrollable datatips now always capture scroll events (#71)
- Datatip highlights no longer obscure Hyperclick underlines.

### Diagnostics
- Restored colors to diagnostic icons.
- The editor is now focused after double-clicking a diagnostic message.
- Fixed handling of Linter traces (#102)
- Fixed previous/next diagnostic keyboard shortcuts.
- Fixed code action context menus throwing exceptions on Windows.

### Outlines
- Auto-focus is less aggressive now.

## v0.5.2

### Diagnostics
- Gutter icons now match the table icons.
- Added an "auto-visibility" setting to automatically show/hide the diagnostics panel when diagnostics are available (#88)
- LinterV2 callback solutions are now supported.

### Datatips
- Added a max-height to prevent datatips from filling the screen.
- Fixed forced editor re-rendering on keystrokes (#94)
- Fixed flickering on Windows (#20)

### Outlines
- The search box now gets focus when the panel is toggled.
- Added a `landingPosition` property to the outline API.

### Other
- Signature Help: Signatures no longer persist for a moment after deleting a line.
- Improved performance of debounced events throughout the package (#93)

## v0.5.1

- Added config option for diagnostics status bar location (#84)
- Reduced size of diagnostic table icons
- Fixed EvalError while loading package (#86)

## v0.5.0

- New, revamped diagnostics experience! (#39)
- Added experimental support for signature help.
- Prevent improperly sized datatips from appearing. (#22)
- Many improvements to the outline view, including:
  - Outlines now respect the editor font, font size, and line height.
  - Also, the "Outline View" panel is now titled as just "Outline".
- Linter conflict notification now hides if linter is disabled externally. (#56)
- Upgraded to React 16.

## v0.4.0

- The minimum supported Atom version is now 1.19.
- Outline and diagnostic entries no longer focus the editor on click.
  - Use double-click to get the old focus behavior.
- Definition providers may now return a null query range to use the current word range.
- Added a "revealTooltip" option for busy signals to forcibly show the tooltip text.

## v0.3.3

- Ensure linter message types are converted correctly.

## v0.3.2

- Improved readability of section labels in the Atom Settings panel.
- Improved the `linter` conflict warning by using a notification instead. (#17)
- Use busy signal while waiting for Linter V1 providers. (#18)
- Removed extraneous Outline View toolbar icon. (#27)
- Fix Linter V2 compatibility with empty solutions. (#32)

## v0.3.1

- Fixed occasional empty datatips.
- Removed default datatip keybindings on Windows/Linux.
- Fixed Hyperclick underlines in 1.21-beta.
- Tolerate legacy nameless Linter V1 providers.

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
