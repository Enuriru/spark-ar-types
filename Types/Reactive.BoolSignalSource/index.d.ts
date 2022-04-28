/// <reference path="../Reactive.BoolSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1489134519},{"kind":"capability","capability":"scriptingWriteableSignalSource","orCapability":""}]
*/


/**
Represents a source used to get and set the value of a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
Typically, changing the value that a signal contains requires a total reassignment:

```
TouchGestures.onTap().subscribe((gesture) => {
  someSignal = Reactive.val(true);
});
```

In the example above, `someSignal` is bound to a completely new signal which itself contains the desired value.

The `BoolSignalSource` API provides the ability to change the value of the original signal without reassignment, with behavior similar to that of non-reactive programming models.
*/
declare interface BoolSignalSource {

/**
```
(get) signal: BoolSignal
(set) (Not Available)
```

The signal being monitored by the `BoolSignalSource` object.
Accessing the signal's value before one has been assigned via `set()` will return `false`.
*/
signal: BoolSignal

/**
```
dispose(): void
```

Disposes of the native resources associated with the `BoolSignalSource` object.
The `BoolSignalSource` object will still exist as a JavaScript object but will not receive updates through future calls to `set()`. Do not call `dispose()` until you're certain that the signal is no longer required.

When calling [`ReactiveModule.boolSignalSource`](/classes/ReactiveModule#methods), avoid reusing the `sourceId` of an object that you've called `dispose()` on.
*/
dispose(): void

/**
```
set(value: BoolSignal | boolean): void
```

Sets the value of the signal monitored by the `BoolSignalSource` object to `value`.
The updated signal value will be propagated throughout all signals related to the `BoolSignalSource`.

If `set()` is called before `signal`, `signal` will return the value assigned by `set()` when called, rather than the default value of `false`.

* `value` - the value to assign to the signal, as a boolean or [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
*/
set(value: BoolSignal | boolean): void

}



/**

//============================================================================
// Creates a new BoolSignalSource object and change's the signal value
// on a screen tap event.
//
// Required project capabilities:
// - TouchGestures (auto added on module import)
//
//============================================================================

// Load in the required modules
const Reactive = require('Reactive');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');


(async function () {  // Enables async/await in JS [part 1]

  // Create a bool signal source
  var boolSource = Reactive.boolSignalSource("BoolSource");

  // Get the bool signal from the source
  const boolSignal = boolSource.signal;

  // Set an initial value for the bool signal
  boolSource.set(false);

  // Add the signal to the Watch view
  Diagnostics.watch("Bool value: ", boolSignal);

  // Update the bool value when a tap event is fired
  TouchGestures.onTap().subscribe(() => {
    boolSource.set(true);
  });

})(); // Enables async/await in JS [part 2]

*/