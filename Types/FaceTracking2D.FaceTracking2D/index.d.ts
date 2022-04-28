/// <reference path="../FaceTracking2D.Face2D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"faceTrackingScripting2D","orCapability":""}]
*/


/**
Enables the tracking of faces in two-dimensional space.
Importing this module automatically enables the *Face Tracking* capability within the project's *Properties*.

For three-dimensional face tracking, see the [`FaceTracking`](/classes/facetrackingmodule) module.
*/
declare interface FaceTracking2D extends Module {

/**
```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of faces currently tracked in the scene, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
count: ScalarSignal

/**
```
face(index: number): Face2D
```

Returns a [`Face2D`](/classes/facetracking2dmodule.face2d) object from the array of detected faces.
* `index` - the index of the `Face2D` object to retrieve from the array.
*/
face(index: number): Face2D

}



/**

//============================================================================
// Binds the position of a rectangle to a detected face.
//
// The rectangle is also scaled to match the dimensions of the detected
// face's bounding box.
//
// Project setup:
// - Insert a rectangle to the Scene: rectangle0
//
//============================================================================


// Load in the required modules
const FaceTracking2D = require('FaceTracking2D');
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]

  // Create a reference to a detected face
   const face = FaceTracking.face(0);

  // Create a reference to the number of tracked faces in the scene
  // and add the signal to the watch view
  const faceCount = FaceTracking.count;
  Diagnostics.watch("Number of tracked faces: ", faceCount);

})(); // Enable async/await in JS [part 2]

*/