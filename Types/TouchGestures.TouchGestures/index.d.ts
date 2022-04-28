/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../TouchGestures.LongPressGesture/index.d.ts" />
/// <reference path="../TouchGestures.PanGesture/index.d.ts" />
/// <reference path="../TouchGestures.PinchGesture/index.d.ts" />
/// <reference path="../TouchGestures.RawTouchGesture/index.d.ts" />
/// <reference path="../TouchGestures.RotateGesture/index.d.ts" />
/// <reference path="../TouchGestures.TapGesture/index.d.ts" />

/**
The `TouchGesturesModule` class enables touch gesture detection.
*/
declare interface TouchGestures extends Module {

/**
```
onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
that emits a [`LongPressGesture`](/classes/touchgesturesmodule.longpressgesture) object for each long-press interaction.
When `options` is specified, only events for the specified object are emitted.
Otherwise - events for entire preview screen are emitted.
*/
onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>

/**
```
onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
that emits a [`PanGesture`](/classes/touchgesturesmodule.pangesture) object for each pan interaction.
When `options` is specified, only events for the specified object are emitted.
Otherwise - events for entire preview screen are emitted.
*/
onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>

/**
```
onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
that emits a [`PinchGesture`](/classes/touchgesturesmodule.pinchgesture) object for each pinch interaction.
When `options` is specified, only events for the specified object are emitted.
Otherwise - events for entire preview screen are emitted.
*/
onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>

/**
```
onRawTouch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RawTouchGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource),
to which you may subscribe, that emits a `RawTouch` object for each touch interaction.
When `options` is specified, only events for the specified object are emitted.
Otherwise - events for entire preview screen are emitted.
*/
onRawTouch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RawTouchGesture>

/**
```
onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
that emits a [`RotateGesture`](/classes/touchgesturesmodule.rotategesture) object for each rotate interaction.
When `options` is specified, only events for the specified object are emitted.
Otherwise - events for entire preview screen are emitted.
*/
onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>

/**
```
onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
that emits a [`TapGesture`](/classes/touchgesturesmodule.tapgesture) object for each tap interaction.
When `options` is specified, only events for the specified object are emitted.
Otherwise - events for entire preview screen are emitted.
*/
onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>

}



/**

//==============================================================================
// The following example demonstrates how to subscribe to all touch events to
// control the rotation, scale, position, material and opacity of a plane.
//
// Project setup:
// - Insert a plane
// - Increase the x and y-axis scale values of the plane to 2
// - Create two materials with different colors
// - Assign one of the materials to the plane
// - Enable all Touch Gestures under the Touch Gesture capability
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the plane in the Scene
  // and the materials in the Assets
  const [plane, material, material2] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Materials.findFirst('defaultMaterial0'),
    Materials.findFirst('defaultMaterial1')
  ]);

  //==============================================================================
  // Change the material applied to the plane when the plane is tapped
  //==============================================================================

  var isFirstMaterialSelected = true;

  // Subscribe to tap gestures on the plane
  TouchGestures.onTap(plane).subscribe((gesture) => {
    // Switch materials depending on which one is currently applied to the plane
    if (isFirstMaterialSelected) {
      plane.material = material2;
      isFirstMaterialSelected = false;
    } else {
      plane.material = material;
      isFirstMaterialSelected = true;
    }
  });

  //==============================================================================
  // Make the plane's material transparent when the plane is long pressed
  //==============================================================================

  // Subscribe to long press gestures on the plane
  TouchGestures.onLongPress(plane).subscribe((gesture) => {

    // Set the opacity to 50%
    plane.material.opacity = 0.5;

    // Subscribe to the state of the gesture
    gesture.state.monitor().subscribe((state) => {

      // Return the opacity to 100% when the gesture ends
      if (state.newValue !== 'BEGAN' && state.newValue !== 'CHANGED') {
        plane.material.opacity = 1;
      }

    });

  });

  //==============================================================================
  // Move the plane across the screen when dragging it with a finger
  //==============================================================================

  // Store a reference to the transform of the plane
  const planeTransform = plane.transform;

  // Subscribe to pan gestures on the plane
  TouchGestures.onPan(plane).subscribe((gesture) => {

    // Translate the position of the finger on the screen to the plane's
    // co-ordinate system
    const gestureTransform = Scene.unprojectToFocalPlane(gesture.location);

    // Update the position of the plane
    planeTransform.x = gestureTransform.x;
    planeTransform.y = gestureTransform.y;

  });

  //==============================================================================
  // Scale the plane when pinching it with two fingers
  //==============================================================================

  // Subscribe to pinch gestures on the plane
  TouchGestures.onPinch(plane).subscribe((gesture) => {

    // Store the last known x and y-axis scale values of the plane
    const lastScaleX = planeTransform.scale.x.pinLastValue();
    const lastScaleY = planeTransform.scale.y.pinLastValue();

    // Update the scale of the plane by multiplying the last known scale with the
    // scale returned by the gesture
    planeTransform.scaleX = gesture.scale.mul(lastScaleX);
    planeTransform.scaleY = gesture.scale.mul(lastScaleY);

  });

  //==============================================================================
  // Rotate the plane when rotating it with two fingers
  //==============================================================================

  // Subscribe to rotation gestures on the plane
  TouchGestures.onRotate(plane).subscribe((gesture) => {

    // Store the last known z-axis rotation value of the plane
    const lastRotationZ = planeTransform.rotationZ.pinLastValue();

    // Update the z-axis rotation of the plane by adding the gesture rotation and
    // multiply it by -1 to have it rotate in the correct direction
    planeTransform.rotationZ = gesture.rotation.mul(-1).add(lastRotationZ);

  });
// Enable async/await in JS [part 2]
})();

*/