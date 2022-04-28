/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1489134519},{"kind":"capability","capability":"scriptingWriteableSignalSource","orCapability":""}]
*/


/**
Represents a source used to get and set the value of a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
Typically, changing the value that a signal contains requires a total reassignment:

```
TouchGestures.onTap().subscribe((gesture) => {
  someSignal = Reactive.val(1);
});
```

In the example above, `someSignal` is bound to a completely new signal which itself contains the desired value.

The `ScalarSignalSource` API provides the ability to change the value of the original signal without reassignment, with behavior similar to that of non-reactive programming models.
*/
declare interface ScalarSignalSource {

/**
```
(get) signal: ScalarSignal
(set) (Not Available)
```

The signal being monitored by the `ScalarSignalSource` object.
Accessing the signal's value before one has been assigned via `set()` will return `0`.
*/
signal: ScalarSignal

/**
```
dispose(): void
```

Disposes of the native resources associated with the `ScalarSignalSource` object.
The `ScalarSignalSource` object will still exist as a JavaScript object but will not receive updates through future calls to `set()`. Do not call `dispose()` until you're certain that the signal is no longer required.

When calling [`ReactiveModule.scalarSignalSource`](/classes/ReactiveModule#methods), avoid reusing the `sourceId` of an object that you've called `dispose()` on.
*/
dispose(): void

/**
```
set(value: ScalarSignal | number): void
```

Sets the value of the signal monitored by the `ScalarSignalSource` object to `value`.
The updated signal value will be propagated throughout all signals related to the `ScalarSignalSource`.

If `set()` is called before `signal`, `signal` will return the value assigned by `set()` when called, rather than the default value of `0`.

* `value` - the value to assign to the signal, as a number or [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
set(value: ScalarSignal | number): void

}



/**

//============================================================================
// Creates a new ScalarSignalSource object and change's the signal value
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

  // Create a scalar signal source
  var scalarSource = Reactive.scalarSignalSource("ScalarSource");

  // Get the scalar signal from the source
  const scalarSignal = scalarSource.signal;

  // Set an initial value for the scalar signal
  scalarSource.set(1);

  // Add the signal to the Watch view
  Diagnostics.watch("Scalar value: ", scalarSignal);

  // Create a variable to keep track of the tap count
  var count = 0;

  // Update the scalar value each time a tap event is fired
  TouchGestures.onTap().subscribe(() => {

    // Increment 'count' value
    count += 1;

    // Set the value of the scalar signal to the value of 'count'
    scalarSource.set(count);
  });

})(); // Enables async/await in JS [part 2]

*/