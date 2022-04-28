/// <reference path="../Reactive.PointSignal/index.d.ts" />

/**
Exposes key points of the forehead of a detected [`Face`](/classes/facetrackingmodule.face) object.
Key points are returned in the detected face's local coordinate system. Use `Face.cameraTransform.applyToPoint()` to convert the point to the camera's coordinate system.
*/
declare interface Forehead {

/**
```
(get) center: PointSignal
(set) (Not Available)
```

The location of the center of the forehead, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
center: PointSignal

/**
```
(get) top: PointSignal
(set) (Not Available)
```

The location of the top of the forehead, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
top: PointSignal

}



/**

//============================================================================
// Bind the position of a plane to the position of the user's forehead
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

  // Get the forehead object from the detected face
  const forehead = face.forehead;

  // Bind the position of the plane to the position of the center of the forehead
  plane.transform.x = face.cameraTransform.applyToPoint(forehead.center).x;
  plane.transform.y = face.cameraTransform.applyToPoint(forehead.center).y;

})(); // Enables async/await in JS [part 2]

*/