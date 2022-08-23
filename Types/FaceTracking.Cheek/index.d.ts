/// <reference path="../Reactive.PointSignal/index.d.ts" />

/**
Exposes key points of the cheek of a detected [`Face`](/classes/facetrackingmodule.face) object.
Key points are returned in the detected face's local coordinate system. Use `Face.cameraTransform.applyToPoint()` to convert the point to the camera's coordinate system.
*/
declare interface Cheek {

/**
```
(get) center: PointSignal
(set) (Not Available)
```

The location of the center of the cheek, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
center: PointSignal

/**
```
(get) cheekbone: PointSignal
(set) (Not Available)
```

The location of the cheekbone, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
cheekbone: PointSignal

}



/**

//============================================================================
// Bind the position of two planes to the positions of the user's cheeks
//
// Project setup:
// - Two planes: plane0 and plane1
//
// Required project capabilities:
// - Face Tracking (auto added on FaceTracking module import)
//
//============================================================================

// Load in the required modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the planes in the scene and the first detected face
  const [plane0, plane1, face] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1'),
    FaceTracking.face(0)
  ]);

  // Get the cheek objects from the detected face
  const leftCheek = face.leftCheek;
  const rightCheek = face.rightCheek;

  // Bind the position of the first plane to the position of the left cheek
  plane0.transform.x = face.cameraTransform.applyToPoint(leftCheek.cheekbone).x;
  plane0.transform.y = face.cameraTransform.applyToPoint(leftCheek.cheekbone).y;

  // Bind the position of the second plane to the position of the right cheek
  plane1.transform.x = face.cameraTransform.applyToPoint(rightCheek.cheekbone).x;
  plane1.transform.y = face.cameraTransform.applyToPoint(rightCheek.cheekbone).y;

})(); // Enables async/await in JS [part 2]

*/