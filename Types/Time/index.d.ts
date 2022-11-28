/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect","DocumentType.Experience"]}]
*/


/**
The `TimeModule` class enables time-based events.
*/
declare interface Time extends Module {

/**
```
(get) ms: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of milliseconds elapsed since the first frame.
*/
ms: ScalarSignal

/**
```
clearInterval(subscription: Subscription): void
```

Cancels a callback set by `setInterval`. This function is provided as a to match the traditional JS `clearInterval` API.
**Note**: This is equivalent to `Subscription.unsubscribe`.
*/
clearInterval(subscription: Subscription): void

/**
```
clearTimeout(subscription: Subscription): void
```

Cancels a callback set by `setTimeout`. This has no effect if the timeout has already been triggered. This function is provided as a to match the traditional JS `clearTimeout` API.
**Note**: This is equivalent to `Subscription.unsubscribe`.
*/
clearTimeout(subscription: Subscription): void

/**
```
setInterval(callback: {}, delay: number): Subscription
```

Returns a `Subscription` object. The function specified by `callback` is called at intervals specified by `delay` in milliseconds. The `setInterval` will continue calling the `callback` until `TimeModule.clearInterval` is called. The `callback` is a function that has one argument, the elapsed time since the timer started. An exception is thrown when the `delay` is zero or less.
**Note**: An interval can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearInterval`.
*/
setInterval(callback: {}, delay: number): Subscription

/**
```
setIntervalWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription
```

Returns a `Subscription` object.
The function specified by `callback` is called at intervals specified by `delay` in milliseconds using `Snapshot` of signals.
`Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals.
The `setIntervalWithSnapshot` will continue calling the `callback` until `TimeModule.clearInterval` is called.
The `callback` is a function that has two arguments, the elapsed time since the timer started, and the snapshot JSON
An exception is thrown when the `delay` is zero or less.

**Note**: An interval can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearInterval`.
*/
setIntervalWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription

/**
```
setTimeout(callback: {}, delay: number): Subscription
```

Returns a `Subscription` object. The function specified by `callback` is called after the specified `delay` in milliseconds. The `callback` is a function that has one argument, the elapsed time since the timer started.
**Note**: A timeout can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearTimeout`.

**Note**: This is equivalent to `Time.ms.sub(Time.ms.pin()).trigger(delay).subscribe(callback)`.
*/
setTimeout(callback: {}, delay: number): Subscription

/**
```
setTimeoutWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription
```

Returns a `Subscription` object. The function specified by `callback` is called after the specified `delay` in milliseconds using `Snapshot` of signals.
`Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals.
The `callback` is a function that has two arguments, the elapsed time since the timer started and the snapshot JSON.

**Note**: A timeout can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearTimeout`.

**Note**: This is equivalent to `Time.ms.sub(Time.ms.pin()).trigger(delay).subscribeWithSnapshot(snapshot, callback)`.
*/
setTimeoutWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription

}



/**

//==============================================================================
// The following example demonstrates how to call a function repeatedly every
// 0.5 seconds as well as call a function once after 5 seconds has passed.
//
// Project setup:
// - Insert a plane
//==============================================================================

// Load the required modules
const Scene = require('Scene');
const Time = require('Time');
const Reactive = require('Reactive');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the plane in the Scene
  const [plane] = await Promise.all([
    Scene.root.findFirst('plane0')
  ]);

  // Create a variable used in the timers
  const timeInMilliseconds = 500;

  //==============================================================================
  // Increase and decrease the scale of the plane every 0.5 seconds
  //==============================================================================

  // Create a boolean to determine if the plane's width is doubled or not
  var isPlaneDoubleWidth = false;

  // Store a reference to the plane's transform signal
  const planeTransform = plane.transform;

  // Store a reference to the plane's initial x-axis scale value
  const planeWidth = planeTransform.scaleX.pinLastValue();

  // Create a function that changes the width of the plane
  function changePlaneWidth() {
    // If the plane's width is not doubled...
    if (!isPlaneDoubleWidth) {
      // Multiply the x-axis scale value of the plane by 2, doubling it
      planeTransform.scaleX = Reactive.mul(planeWidth, 2);

    // Otherwise...
    } else {
      // Set the x-axis scale back to it's original value, halving it
      planeTransform.scaleX = planeWidth;
    }
    // Update the boolean
    isPlaneDoubleWidth = !isPlaneDoubleWidth;
  }

  // Create an interval timer that calls the changePlaneWidth function every 0.5
  // seconds
  const intervalTimer = Time.setInterval(changePlaneWidth, timeInMilliseconds);

  //==============================================================================
  // Stop the interval timer after 5 seconds using a timeout timer
  //==============================================================================

  // Create a function that stops the interval timer
  function stopIntervalTimer() {
    Time.clearInterval(intervalTimer);
  }

  // Create a timeout timer that calls the stopIntervalTimer function after 5
  // seconds have passed
  const timeoutTimer = Time.setTimeout(stopIntervalTimer, timeInMilliseconds * 10);
// Enable async/await in JS [part 2]
})();

*/