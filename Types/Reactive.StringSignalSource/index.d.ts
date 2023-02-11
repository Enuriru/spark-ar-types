/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"scriptingWriteableSignalSource","orCapability":""}]
*/


/**
Represents a source used to get and set the value of a [`StringSignal`](/classes/ReactiveModule.StringSignal).
Typically, changing the value that a signal contains requires a total reassignment:

```
TouchGestures.onTap().subscribe((gesture) => {
  someSignal = Reactive.val("Hello");
});
```

In the example above, `someSignal` is bound to a completely new signal which itself contains the desired value.

The `StringSignalSource` API provides the ability to change the value of the original signal without reassignment, with behavior similar to that of non-reactive programming models.
*/
declare interface StringSignalSource {

/**
```
(get) signal: StringSignal
(set) (Not Available)
```

The signal being monitored by the `StringSignalSource` object.
Accessing the signal's value before one has been assigned via `set()` will return an empty string.
*/
signal: StringSignal

/**
```
dispose(): void
```

Disposes of the native resources associated with the `StringSignalSource` object.
The `StringSignalSource` object will still exist as a JavaScript object but will not receive updates through future calls to `set()`. Do not call `dispose()` until you're certain that the signal is no longer required.

When calling [`ReactiveModule.stringSignalSource`](/classes/ReactiveModule#methods), avoid reusing the `sourceId` of an object that you've called `dispose()` on.
*/
dispose(): void

/**
```
set(value: StringSignal | string): void
```

Sets the value of the signal monitored by the `StringSignalSource` object to `value`.
The updated signal value will be propagated throughout all signals related to the `StringSignalSource`.

If `set()` is called before `signal`, `signal` will return the value assigned by `set()` when called, rather than the default empty string.

* `value` - the value to assign to the signal, as a string or [`StringSignal`](/classes/ReactiveModule.StringSignal).
*/
set(value: StringSignal | string): void

}



/**

//============================================================================
// Creates a new StringSignalSource object and change's the signal value
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

  // Create a string signal source
  var stringSource = Reactive.stringSignalSource("StringSource");

  // Get the string signal from the source
  const stringSignal = stringSource.signal;

  // Set an initial value for the string signal
  stringSource.set("Hello");

  // Add the signal to the Watch view
  Diagnostics.watch("String value: ", stringSignal);

  // Create a variable to keep track of the tap count
  var count = 0;

  // Update the string's value each time a tap event is fired
  TouchGestures.onTap().subscribe(() => {

    // Increment 'count' value
    count += 1;

    // Set the value of the string signal to the value of 'count'
    stringSource.set(count.toString());
  });

})(); // Enables async/await in JS [part 2]

*/