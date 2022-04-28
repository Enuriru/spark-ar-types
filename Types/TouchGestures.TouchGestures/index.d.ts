/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../TouchGestures.LongPressGesture/index.d.ts" />
/// <reference path="../TouchGestures.PanGesture/index.d.ts" />
/// <reference path="../TouchGestures.PinchGesture/index.d.ts" />
/// <reference path="../TouchGestures.RawTouchGesture/index.d.ts" />
/// <reference path="../TouchGestures.RotateGesture/index.d.ts" />
/// <reference path="../TouchGestures.TapGesture/index.d.ts" />
/// <reference path="../TouchGestures.TouchEvent/index.d.ts" />

/**
Enables detection of touch gestures and exposes classes that describe various types of touch interaction.
By default touch gestures will be registered on the entire screen unless an object is specified in the gesture method call, for example: `TouchGestures.onTap(plane)`.

Importing this module automatically enables the *Touch Gestures* capability within the project's *Properties*. Gesture types must be individually enabled within the capability to enable detection.
*/
declare interface TouchGestures extends Module {

/**
```
onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`LongPressGesture`](/classes/touchgesturesmodule.longpressgesture) object for each long press interaction.
* `options` - an optional configuration for the long press gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
When passing a JSON formatted object as an argument, the following fields are valid:
* `object` - the object to register long press gestures for. When specified, this event will ignore long press gestures that occur on objects other than `object`.
* `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
*/
onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>

/**
```
onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`PanGesture`](/classes/touchgesturesmodule.pangesture) object for each pan interaction.
* `options` - an optional configuration for the pan gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
When passing a JSON formatted object as an argument, the following fields are valid:
* `object` - the object to register pan gestures for. When specified, this event will ignore pan gestures that occur on objects other than `object`.
* `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
*/
onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>

/**
```
onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`PinchGesture`](/classes/touchgesturesmodule.pinchgesture) object for each pinch interaction.
* `options` - an optional configuration for the pinch gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
When passing a JSON formatted object as an argument, the following fields are valid:
* `object` - the object to register pinch gestures for. When specified, this event will ignore pinch gestures that occur on objects other than `object`.
* `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
*/
onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>

/**
```
onRawEvents(): EventSource<Array<TouchEvent>>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits an array of `TouchEvent` object each frame, if there're any.
*/
onRawEvents(): EventSource<Array<TouchEvent>>

/**
```
onRawTouch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RawTouchGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new `RawTouchGesture` object for each touch interaction.
* `options` - an optional configuration for the touch gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
When passing a JSON formatted object as an argument, the following fields are valid:
* `object` - the object to register touch gestures for. When specified, this event will ignore touch gestures that occur on objects other than `object`.
* `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
*/
onRawTouch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RawTouchGesture>

/**
```
onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`RotateGesture`](/classes/touchgesturesmodule.rotategesture) object for each rotation interaction.
* `options` - an optional configuration for the rotation gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
When passing a JSON formatted object as an argument, the following fields are valid:
* `object` - the object to register rotation gestures for. When specified, this event will ignore rotation gestures that occur on objects other than `object`.
* `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
*/
onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>

/**
```
onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`TapGesture`](/classes/touchgesturesmodule.tapgesture) object for each tap interaction.
* `options` - an optional configuration for the tap gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
When passing a JSON formatted object as an argument, the following fields are valid:
* `object` - the object to register tap gestures for. When specified, this event will ignore tap gestures that occur on objects other than `object`.
* `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
*/
onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>

}



/**

//============================================================================
// The following example demonstrates how to subscribe to all touch events to
// control the rotation, scale, position, material and opacity of a plane.
//
// Project setup:
// - One plane: plane0
//
// Required project capabilities:
// - Touch Gestures >  Pinch Gesture
// - Touch Gestures >  Rotate Gesture
// - Touch Gestures >  Tap Gesture
// - Touch Gestures >  Long Press Gesture
//
//============================================================================

// Load in the required modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]


  //==========================================================================
  // Detect pinch gestures that occur on the screen
  //==========================================================================

  // Subscribe to pinch gestures
  TouchGestures.onPinch().subscribe(() => {

    // Code here will run when the pinch gesture is detected anywhere on
    // the screen
  });


  //==========================================================================
  // Detect rotation gestures that occur on a specific object
  //==========================================================================

  // Locate the plane in the scene
  const plane = await Scene.root.findFirst('plane0');

  // Subscribe to rotation gestures that occur on the plane
  TouchGestures.onRotate(plane).subscribe(() => {

    // Code here will run when a rotation gesture is detected on the plane
  });


  //==========================================================================
  // Access properties of a detected gesture
  //==========================================================================

  // Subscribe to tap gestures
  TouchGestures.onTap().subscribe((gesture) => {

    // Access the location property of the TapGesture object via 'gesture'
    const location = gesture.location;

    // Coordinates of the gesture are returned in screen space,
    // for example: [1250, 400]
    Diagnostics.log(location);
  });


  //==========================================================================
  // Configure the options for a detected gesture
  //==========================================================================

  // Subscribe to tap gestures that occur on the plane object, and normalize
  // the coordinates of the gesture location
  TouchGestures.onTap({object: plane, normalizeCoordinates: true})
    .subscribe((gesture) => {

      // Coordinates of the gesture are returned in normalized screen space,
      // for example: [0.95, 0.30]
      Diagnostics.log(gesture.location);
  });


  //==========================================================================
  // Detect when a gesture has ended
  //==========================================================================

  // Subscribe to long press gestures
  TouchGestures.onLongPress().subscribe((gesture) => {

    // Log a message to the console when the gesture begins
    Diagnostics.log("Long press gesture has begun");

    // Subscribe to changes in the value of the gesture state
    gesture.state.monitor().subscribe((state) => {

      // Log a message to the console when the gesture ends
      if (state.newValue == 'ENDED') {
        Diagnostics.log("Long press gesture has ended");

        // Code here will run when the gesture ends
      }
    });
  });

})(); // Enable async/await in JS [part 2]

*/