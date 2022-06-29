/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"pinchGestures","orCapability":""}]
*/


/**
Exposes details of a detected pinch gesture.
Ensure Pinch Gesture is enabled under the project's Touch Gestures capability.
*/
declare interface PinchGesture extends Gesture {

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the center point between the two touch touches of the pinch gesture, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the pinch gesture method call, for example: `TouchGestures.onPinch(plane)`.
*/
location: Vec2Signal

/**
```
(get) scale: ScalarSignal
(set) (Not Available)
```

The scale factor indicated by the pinch gesture, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
scale: ScalarSignal

}



/**

//============================================================================
// Scales two planes individually, depending on where a pinch gesture
// is detected
//
// Project setup:
// - Two planes: plane0 and plane1
//
// Required project capabilities:
// - Touch Gestures > Pinch Gesture
//
//============================================================================

// Load in the required modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane objects in the scene
  const [firstPlane, secondPlane] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1')
  ]);

  // Create a reference to both planes' transforms
  const firstPlaneTransform = firstPlane.transform;
  const secondPlaneTransform = secondPlane.transform;


  //==========================================================================
  // Scale the first plane if the gesture is detected on the plane itself
  //==========================================================================

  // Subscribe to pinch gestures on the first plane
  TouchGestures.onPinch(firstPlane).subscribe((gesture) => {

    // Store the last known x and y scale values of the first plane
    const firstPlaneLastScaleX = firstPlaneTransform.scale.x.pinLastValue();
    const firstPlaneLastScaleY = firstPlaneTransform.scale.y.pinLastValue();

    // Multiply the plane's current scale by the scale factor indicated by the
    // gesture
    firstPlaneTransform.scaleX = gesture.scale.mul(firstPlaneLastScaleX);
    firstPlaneTransform.scaleY = gesture.scale.mul(firstPlaneLastScaleY);

    // Log the center point of the two touches of the pinch gesture
    Diagnostics.log(gesture.location);
  });


  //==========================================================================
  // Scale the second plane if the gesture is detected elsewhere on the screen
  //==========================================================================

  // Subscribe to pinch gestures
  TouchGestures.onPinch().subscribe((gesture) => {

    // Store the last known x and y scale values of the second plane
    const secondPlaneLastScaleX = secondPlaneTransform.scale.x.pinLastValue();
    const secondPlaneLastScaleY = secondPlaneTransform.scale.y.pinLastValue();

    // Multiply the plane's current scale by the scale factor indicated by the
    // gesture
    secondPlaneTransform.scaleX = gesture.scale.mul(secondPlaneLastScaleX);
    secondPlaneTransform.scaleY = gesture.scale.mul(secondPlaneLastScaleY);

    // Log the center point of the two touches of the pinch gesture
    Diagnostics.log(gesture.location);
  });

})(); // Enable async/await in JS [part 2]

*/