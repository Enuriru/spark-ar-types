/// <reference path="../Reactive.PointSignal/index.d.ts" />

/**
Exposes key points of the chin of a detected [`Face`](/classes/facetrackingmodule.face) object.
Key points are returned in the detected face's local coordinate system. Use `Face.cameraTransform.applyToPoint()` to convert the point to the camera's coordinate system.
*/
declare interface Chin {

/**
```
(get) tip: PointSignal
(set) (Not Available)
```

The location of the tip of the chin, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
tip: PointSignal

}



/**

//============================================================================
// Bind the position of a plane to the position of the user's chin
//
// Project setup:
// - One plane: plane0
//
// Required project capabilities:
// - Face Tracking (auto added on FaceTracking module import)
//
//============================================================================

// Load in the required modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the plane in the scene and the first detected face
  const [plane, face] = await Promise.all([
    Scene.root.findFirst('plane0'),
    FaceTracking.face(0)
  ]);

  // Get the chin object from the detected face
  const chin = face.chin;

  // Bind the position of the plane to the position of the tip of the chin
  plane.transform.x = face.cameraTransform.applyToPoint(chin.tip).x;
  plane.transform.y = face.cameraTransform.applyToPoint(chin.tip).y;

})(); // Enables async/await in JS [part 2]

*/