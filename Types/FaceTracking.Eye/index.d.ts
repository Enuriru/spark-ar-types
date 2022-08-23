/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
Exposes details and key points of the eye of a detected [`Face`](/classes/facetrackingmodule.face) object.
Key points are returned in the detected face's local coordinate system. Use `Face.cameraTransform.applyToPoint()` to convert the point to the camera's coordinate system.
*/
declare interface Eye {

/**
```
(get) center: PointSignal
(set) (Not Available)
```

The location of the center of the eye, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
center: PointSignal

/**
```
(get) insideCorner: PointSignal
(set) (Not Available)
```

The location of the inside corner of the eye, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
insideCorner: PointSignal

/**
```
(get) lowerEyelidCenter: PointSignal
(set) (Not Available)
```

The location of the center of the lower eyelid, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
lowerEyelidCenter: PointSignal

/**
```
(get) openness: ScalarSignal
(set) (Not Available)
```

The openness of the eye, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
The higher the value returned, the more wide open the detected eye is. The minimum value is `0`, which indicates a closed eye.
*/
openness: ScalarSignal

/**
```
(get) outsideCorner: PointSignal
(set) (Not Available)
```

The location of the outside corner of the eye, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
outsideCorner: PointSignal

/**
```
(get) upperEyelidCenter: PointSignal
(set) (Not Available)
```

The location of the center of the upper eyelid, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
upperEyelidCenter: PointSignal

}



/**

//============================================================================
// Bind the position of two planes to the positions of the user's eyes
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

  // Get the eye objects from the detected face
  const leftEye = face.leftEye;
  const rightEye = face.rightEye;

  // Bind the position of the first plane to the position of the left eye
  plane0.transform.x = face.cameraTransform.applyToPoint(leftEye.center).x;
  plane0.transform.y = face.cameraTransform.applyToPoint(leftEye.center).y;

  // Bind the position of the second plane to the position of the right eye
  plane1.transform.x = face.cameraTransform.applyToPoint(rightEye.center).x;
  plane1.transform.y = face.cameraTransform.applyToPoint(rightEye.center).y;

})(); // Enables async/await in JS [part 2]

*/