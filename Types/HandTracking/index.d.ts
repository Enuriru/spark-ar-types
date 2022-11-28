/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../SpatialHandTracking.Hand/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
Enables the tracking of hands. Up to two hands can be tracked in the camera view.
References to detected `Hand` objects are not persistent. The same `index` argument passed to `HandTrackingModule.hand()` may refer to different `Hand` objects if a hand that was previously tracked has lost tracking.

Importing this module automatically enables the *Hand Tracking* capability within the project's *Properties*.
*/
declare interface HandTracking extends Module {

/**
```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of hands currently tracked in the scene, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
count: ScalarSignal

/**
```
hand(index: number): Hand
```

Returns a [`Hand`](/classes/handtrackingmodule.hand) object from the array of detected hands.
* `index` - the index of the `Hand` object to retrieve from the array.
*/
hand(index: number): Hand

}



/**

//============================================================================
// Hides a plane in the scene until a hand is detected.
//
// Project setup:
// - One plane: plane0
//
// Required project capabilities:
// - Hand Tracking (auto added on HandTracking module import)
//
//============================================================================

// Load in the required modules
const HandTracking = require('HandTracking');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane in the scene
  const plane = await Scene.root.findFirst('plane0');

  // Create a reference to the detected hand
  const hand = HandTracking.hand(0);

  // Create a reference to the number of tracked hands in the scene
  const handCount = HandTracking.count;

  // Bind the plane's visibility to the calue of handCount
  // If no hands are detected (count is equal to 0), hide the plane
  plane.hidden = handCount.eq(0);

*/