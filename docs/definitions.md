# Definitions

## Hyperclick

Cmd-click (Ctrl-click on Windows/Linux) on an editor position to go to its
definition, or trigger the `hyperclick:confirm-cursor` command.

[GIF]

## Definition Preview

Cmd-hover (Ctrl-hover on Windows/Linux) on an editor position to preview the
source code following the definition.

[Screenshot]

## Service API

Atom IDE UI consumes an abstract "definitions" API to fetch definitions at
arbitrary editor positions. Hyperclick and Definition Preview are automatically
provided behind the scenes.

Although it may make sense to use the Hyperclick API directly, for many
use cases it's best to provide definitions and let Atom IDE UI handle the rest.

TODO

## Hyperclick Service API

TODO
