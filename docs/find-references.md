# Find References

Use the `find-references:activate` command to find references at the current
editor location.

![Find all usages of a symbol with Find References](./images/find-references.gif)

A scrollable list of all references, with context, will be displayed in a new
pane alongside the active editor.

You can configure the default location of the Find References pane via the
"atom-ide-find-references" section in the `atom-ide-ui` package settings.

## Service API

You can provide the Find References [Atom service](http://flight-manual.atom.io/behind-atom/sections/interacting-with-other-packages-via-services/) by adding the following to your `package.json`:

```
"providedServices": {
  "find-references": {
    "versions": {
      "0.1.0": "provideReferences"
    }
  }
}
```

Then, in your package entry point, add:

```
export function provideReferences(definitionProvider) {}
```

`referencesProvider` must be a `FindReferencesProvider` object
as defined in
[`atom-ide-find-references/lib/types.js`](../modules/atom-ide-ui/pkg/atom-ide-find-references/lib/types.js).
