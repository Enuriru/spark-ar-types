/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `HandTrackingModule` class enables hand tracking.
*/
declare interface HandTracking extends Module {

/**
```
(get) count: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of detected hands.
*/
count: ScalarSignal

/**
```
hand(index: number): Hand
```

Returns the `Hand` indicated by index.
*/
hand(index: number): Hand

}



/**

//==============================================================================
// The following example demonstrates how to bind the position of a plane to a
// hand.
//
// Project setup:
// - Insert a plane
//==============================================================================

// Load in the required modules
const HandTracking = require('HandTracking');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  const [plane, focalDistance] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('Focal Distance')
  ]);

  // Store a reference to a detected hand
  const hand = HandTracking.hand(0);

  // Store the z-axis position signal of the focal distance
  const focalDistanceZPosition = focalDistance.transform.z;

  // Bind the cameraTransform of the hand to the plane's transform
  plane.transform = hand.cameraTransform;

  // Additionally overwrite the z-axis values with distance taken into account
  plane.transform.z = hand.cameraTransform.z.sub(focalDistanceZPosition);

  // Bind the hidden property of the plane to a boolean signal that returns true
  // when no hands have been detected
  plane.hidden = HandTracking.count.eq(0);
// Enable async/await in JS [part 2]
})();

*/