/// <reference path="../Reactive.PointSignal/index.d.ts" />

/**
Exposes key points of the eyebrow of a detected [`Face`](/classes/facetrackingmodule.face) object.
Key points are returned in the detected face's local coordinate system. Use `Face.cameraTransform.applyToPoint()` to convert the point to the camera's coordinate system.
*/
declare interface Eyebrow {

/**
```
(get) insideEnd: PointSignal
(set) (Not Available)
```

The location of the inner end of the eyebrow, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
insideEnd: PointSignal

/**
```
(get) outsideEnd: PointSignal
(set) (Not Available)
```

The location of the outer end of the eyebrow, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
outsideEnd: PointSignal

/**
```
(get) top: PointSignal
(set) (Not Available)
```

The location of the top of the eyebrow, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
top: PointSignal

}



/**

//============================================================================
// Bind the position of two planes to the positions of the user's eyebrows
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

  // Get the eyebrow objects from the detected face
  const leftEyebrow = face.leftEyebrow;
  const rightEyebrow = face.rightEyebrow;

  // Bind the position of the first plane to the position of the left eyebrow
  plane0.transform.x = face.cameraTransform.applyToPoint(leftEyebrow.outsideEnd).x;
  plane0.transform.y = face.cameraTransform.applyToPoint(leftEyebrow.outsideEnd).y;

  // Bind the position of the second plane to the position of the right eyebrow
  plane1.transform.x = face.cameraTransform.applyToPoint(rightEyebrow.outsideEnd).x;
  plane1.transform.y = face.cameraTransform.applyToPoint(rightEyebrow.outsideEnd).y;

})(); // Enables async/await in JS [part 2]

*/