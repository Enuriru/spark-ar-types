/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"rotateGestures","orCapability":""}]
*/


/**
Exposes details of a detected rotation gesture.
Ensure Rotate Gesture is enabled under the project's Touch Gestures capability.
*/
declare interface RotateGesture extends Gesture {

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the center point between the two touch touches of the rotation gesture, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the rotatation gesture method call, for example: `TouchGestures.onRotate(plane)`.
*/
location: Vec2Signal

/**
```
(get) rotation: ScalarSignal
(set) (Not Available)
```

The rotation of the gesture in radians, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
rotation: ScalarSignal

}



/**

//============================================================================
// Rotates two planes individually, depending on where a rotation gesture
// is detected
//
// Project setup:
// - Two planes: plane0 and plane1
//
// Required project capabilities:
// - Touch Gestures > Rotate Gesture
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
  // Rotate the first plane if the gesture is detected on the plane itself
  //==========================================================================

  // Subscribe to rotation gestures on the first plane
  TouchGestures.onRotate(firstPlane).subscribe((gesture) => {

    // Store the last known z axis rotation value of the first plane
    const firstPlaneLastRotationZ = firstPlaneTransform.rotationZ.pinLastValue();

    // Add the gesture rotation to the z axis rotation of the first plane and
    // multiply the value by -1 to ensure rotation in the correct direction
    firstPlaneTransform.rotationZ = gesture.rotation.mul(-1).add(firstPlaneLastRotationZ);

    // Log the center point of the two touches of the rotation gesture
    Diagnostics.log(gesture.location);
  });


  //==========================================================================
  // Rotate the second plane if the gesture is detected anywhere on the screen
  //==========================================================================

  // Subscribe to rotation gestures
  TouchGestures.onRotate().subscribe((gesture) => {

    // Store the last known z axis rotation value of the second plane
    const secondPlaneLastRotationZ = secondPlaneTransform.rotationZ.pinLastValue();

    // Add the gesture rotation to the z axis rotation of the second plane and
    // multiply the value by -1 to ensure rotation in the correct direction
    secondPlaneTransform.rotationZ = gesture.rotation.mul(-1).add(secondPlaneLastRotationZ);

    // Log the center point of the two touches of the rotation gesture
    Diagnostics.log(gesture.location);
  });

})(); // Enable async/await in JS [part 2]

*/