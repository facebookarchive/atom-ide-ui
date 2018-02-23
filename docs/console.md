# atom-ide-console

`atom-ide-console` provides a UI for historical log data and a service for
interacting with it.

## Usage


The primary means of interacting with the console is to consume the service via
your package's `package.json`:

```json
  "consumedServices": {
    "console": {
      "versions": {
        "0.1.0": "consumeConsole"
      }
    }
  },
```

When the service becomes available, the `consumeConsole()` function of your main
module will be called. It will be passed a factory of the type `ConsoleService`,
which registers a source with the console and returns an API for interacting
with it.

```js
let console = null;
export function consumeConsole(createConsole) {
  console = createConsole({id: 'uniqueid', name: 'My Cool Thing'});
  console.log('A message!');
  console.error('Uh oh!');
  return new Disposable(() => { console = null; });
}
```

## User-Controllable Console Sources

In some cases, you may want to give users control over when a message producer
starts and stops producing messages—for example, when it's expensive to produce
the messages. By providing extra information to the console service, it will
expose UI for starting and stopping your producer, as well as for indicating
status.

```js
let console = null;
export function consumeConsole(createConsole) {
  console = createConsole({
    id: 'uniqueid',
    name: 'My Cool Thing',
    start() {
      // Change the console status. This will be used when determining what UI
      // to show the user. Possible values are `'starting'`, `'running'`, and
      // `'stopped'`.
      console.setStatus('starting');

      // Add code here to start producing messages (e.g. spawn a process). When
      // the the provider is ready, call `console.setState('running')`.
    },
    stop() {
      // Update the status.
      console.setStatus('stopped');

      // Add code here to stop producing messages (e.g. kill the process).
    },
  });
  return new Disposable(() => { console = null; });
}
```

