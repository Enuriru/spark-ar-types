/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
Monitors a numerical value and exposes functionality for performing mathematical operations with the given signal.
*/
declare interface ScalarSignal {

/**
```
delay(): ScalarSignal
```

*/
delay(): ScalarSignal

/**
```
eq(other: ScalarSignal | number): BoolSignal
```

Compares whether the signal's value is equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the value is equal to the value of `other` then `true` is returned. If the value is greater or lower than the value of `other` then `false` is returned.

The [`Reactive.eq()`](/classes/ReactiveModule#methods) method provides equivalent functionality.

* `other` - the `ScalarSignal` or number to compare against.
*/
eq(other: ScalarSignal | number): BoolSignal

/**
```
expSmooth(dampFactor: number): ScalarSignal
```

Smooths the specified variable signal using exponential averaging over time and returns the result as a signal of the same type.
The [`Reactive.expSmooth()`](/classes/ReactiveModule#methods) method provides equivalent functionality.

* `dampFactor` - the dampening time constant, in milliseconds.
*/
expSmooth(dampFactor: number): ScalarSignal

/**
```
format(formatString: string): StringSignal
```

Converts the value of the signal to a string and returns the result as a [`StringSignal`](/classes/ReactiveModule.StringSignal).
```
// Load in the required module
const FaceTracking = require('FaceTracking');

// Create a reference to the detected face's mouth openness value
const mouthOpenness = FaceTracking.face(0).mouth.openness;

// Format the full mouth openness value to a string
const opennessVal = mouthOpenness.format("Mouth openness is {} ");

// Format the mouth openness value to a string with two decimal places
const opennessTwoDecimals = mouthOpenness.format("Mouth openness is {:.2f} ");

// Format the mouth openness value to a string with four decimal places
const opennessFourDecimals = mouthOpenness.format("Mouth openness is {:.4f} ");

// Format the mouth openness value to a string using scientific notation
const opennessNotation = mouthOpenness.format("Mouth openness is {:e} ");
```

* `formatString` - the type of formatting to apply to the string. Use the Folly formatting rules described [here](https://github.com/facebook/folly/blob/master/folly/docs/Format.md#format-string-syntax) to configure the format.
*/
format(formatString: string): StringSignal

/**
```
ge(other: ScalarSignal | number): BoolSignal
```

Compares whether the signal's value is greater than or equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the value is greater than or equal to the value of `other` then `true` is returned. If the value is lower than the value of `other` then `false` is returned.

The [`Reactive.ge()`](/classes/ReactiveModule#methods) method provides equivalent functionality.

* `other` - the `ScalarSignal` or number to compare against.
*/
ge(other: ScalarSignal | number): BoolSignal

/**
```
gt(other: ScalarSignal | number): BoolSignal
```

Compares whether the signal's value is greater than the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the value is greater than the value of `other` then `true` is returned. If the value is lower than the value of `other`, or if the values are equal, `false` is returned.

The [`Reactive.gt()`](/classes/ReactiveModule#methods) method provides equivalent functionality.

* `other` - the `ScalarSignal` or number to compare against.
*/
gt(other: ScalarSignal | number): BoolSignal

/**
```
history(framesCount: number, initialValues?: Array<number>): SignalHistory<number>
```

Returns a [`SignalHistory`](/classes/ReactiveModule.SignalHistory) object containing the values of the signal from past frames.
Historical signal values are initialized with the signal's value at the time the method was called, or with `initialValues` if provided.

* `framesCount` - the number of previous frames to track.
* `initialValues` - optional initial values for the signal.
*/
history(framesCount: number, initialValues?: Array<number>): SignalHistory<number>

/**
```
interval(threshold: number): EventSource<number>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the signal increases to a value greater than or equal to `N * threshold`, where `N` is a value that starts at `1` and increases by `1` sequentially.
For every `N * threshold` instance the event is only emitted once. If the scalar signal decreases and subsequently increases again to a previous `N * threshold` value no event is emitted. As such, the method is best used with positive scalar values that increase progressively.

The argument passed to the callback function for the event contains the `N * threshold` value.

```
//============================================================================
// Load in the required modules
const FaceTracking = require('FaceTracking');
const Diagnostics = require('Diagnostics');

// Create a reference to the mouth openness value
const mouthOpen = FaceTracking.face(0).mouth.openness;

// Subscribe to the events emitted when the openness value increases to
// a multiple of 0.05. Each N * threshold occurence is only emitted once.
mouthOpen.interval(0.05).subscribe((val) => {

    // Log the 'N * threshold' value to the console
    Diagnostics.log(`Mouth openness value reached ${val}`);
});
```

* `threshold` - the value of the signal at which the event will be emitted at each `N` occurence. `threshold` must be a positive number.
*/
interval(threshold: number): EventSource<number>

/**
```
le(other: ScalarSignal | number): BoolSignal
```

Compares whether the signal's value is less than or equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the value is lower than or equal to the value of `other` then `true` is returned. If the value is greater than the value of `other` then `false` is returned.

The [`Reactive.le()`](/classes/ReactiveModule#methods) method provides equivalent functionality.

* `other` - the `ScalarSignal` or number to compare against.
*/
le(other: ScalarSignal | number): BoolSignal

/**
```
lt(other: ScalarSignal | number): BoolSignal
```

Compares whether the signal's value is less than the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the value is lower than the value of `other` then `true` is returned. If the value is greater than the value of `other`, or if the values are equal, `false` is returned.

The [`Reactive.lt()`](/classes/ReactiveModule#methods) method provides equivalent functionality.

* `other` - the `ScalarSignal` or number to compare against.
*/
lt(other: ScalarSignal | number): BoolSignal

/**
```
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: number, oldValue: number}>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of the `ScalarSignal` changes.
The event contains a JSON object which provides the old and new values of the signal in the format `{ "oldValue": number, "newValue": number }`.

```
// Load in the required modules
const FaceTracking = require('FaceTracking');
const Diagnostics = require('Diagnostics');

// Create a reference to the number of detected faces
const faceCount = FaceTracking.count;

// Monitor changes to the value of the 'faceCount' signal
faceCount.monitor({fireOnInitialValue: false}).subscribe((event) => {

  // Log the old and new values to the console
  Diagnostics.log(`Old faceCount value: ${event.oldValue}`);
  Diagnostics.log(`New faceCount value: ${event.newValue}`);
});
```

* `config` - an optional configuration for the event source.

The `config` JSON object can have the following field:

**`fireOnInitialValue`** - specifies whether an initial event should be emitted containing the signal's initial value. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValue` will not be available for the first instance.
*/
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: number, oldValue: number}>

/**
```
multiTrigger(threshold: number): EventSource<number>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event every time the `ScalarSignal` increases to a value greater than or equal to `threshold`.
The argument passed to the callback function for the event contains the `threshold` value.

```
// Load in the required modules
const FaceTracking = require('FaceTracking');
const Diagnostics = require('Diagnostics');


// Create a reference to the number of detected faces
const faceCount = FaceTracking.count;

// Subscribe to the event emitted when faceCount reaches 1
faceCount.multiTrigger(1).subscribe((val) => {
  Diagnostics.log(val); // Logs '1' to the console
});
```

* `threshold` - the value of the signal at which the event will be emitted.
*/
multiTrigger(threshold: number): EventSource<number>

/**
```
ne(other: ScalarSignal | number): BoolSignal
```

Compares whether the signal's value is not equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the value is not equal to the value of `other` then `true` is returned. If the values are equal then `false` is returned.

The [`Reactive.ne()`](/classes/ReactiveModule#methods) method provides equivalent functionality.

* `other` - the `ScalarSignal` or number to compare against.
*/
ne(other: ScalarSignal | number): BoolSignal

/**
```
pin(): ScalarSignal
```

Returns a new `ScalarSignal` with a constant value, which is equal to the value that the original signal contained immediately after the method was called.
*/
pin(): ScalarSignal

/**
```
pinLastValue(): ConstScalarSignal
```

Returns a `ConstScalarSignal` with a constant value, which is equal to the value that the original signal contained immediately before the method was called.
Unlike `ScalarSignal` objects, `ConstScalarSignal` objects can be passed as an argument to methods that expect a primitive `number` type.
*/
pinLastValue(): ConstScalarSignal

/**
```
schmittTrigger(config: {high: number, initialValue?: false | true, low: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) with `true` if the signal is higher than the upper threshold specified, or `false` if the signal is lower than the lower threshold specified.
If the signal contains a value within, or equal to, the threshold values this method returns the same boolean value it contained in the previous update, or the value specified by `initialValue` if this is the first update.

```
// Load in the required module
const FaceTracking = require('FaceTracking');

// Create a reference to the mouth openness of the detected face
const mouthOpen = FaceTracking.face(0).mouth.openness;

const valAboveThreshold = mouthOpen.schmittTrigger({
  "low": 0.3,
  "high": 0.7,
  "initialValue": false
});
```

* `config` - the configuration for the threshold values.

The `config` JSON object can have the following fields:

**`low`** - the lower threshold. If the signal is lower than this, the method returns `false`.
**`high`** - the upper threshold. If the signal is higher than this, the method returns `true`.
**`initialValue`** - an optional initial value for the boolean returned by the method. If no value is specified, this is set to `false` by default.
*/
schmittTrigger(config: {high: number, initialValue?: false | true, low: number}): BoolSignal

/**
```
toString(): StringSignal
```

Converts a `ScalarSignal` to a `StringSignal` according to the default string formatting rules.
**Note**: `ScalarSignal.format` allows more flexible control over the way the number is converted to string.
*/
toString(): StringSignal

/**
```
trigger(threshold: number): EventSource<number>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event the first time the `ScalarSignal` increases to a value greater than or equal to `threshold`.
Only a single event is ever emitted by the returned `EventSource`.

The argument passed to the callback function for the event contains the `threshold` value.

Calling this method with a positive `threshold` value is equivalent to calling `EventSource.interval(threshold).take(1)`.

```
// Load in the required modules
const FaceTracking = require('FaceTracking');
const Diagnostics = require('Diagnostics');


// Create a reference to the number of detected faces
const faceCount = FaceTracking.count;

// Subscribe to the event emitted when faceCount reaches 1
faceCount.trigger(1).subscribe((val) => {
  Diagnostics.log(val); // Logs '1' to the console
});
```

* `threshold` - the value of the signal at which the event will be emitted.
*/
trigger(threshold: number): EventSource<number>

}



/**

//============================================================================
// Perform various mathematical and logical operations with a given set of
// signals and constant values.
//
//
// Required project capabilities:
// - FaceTracking (auto added on module import)
//
//============================================================================

// Load in the required modules
const FaceTracking = require('FaceTracking');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');


(async function() { // Enable async/await in JS [part 1]


})(); // Enable async/await in JS [part 2]

*/