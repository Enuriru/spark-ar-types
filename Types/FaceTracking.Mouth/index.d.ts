/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
Exposes details and key points of the mouth of a detected [`Face`](/classes/facetrackingmodule.face) object.
Key points are returned in the detected face's local coordinate system. Use `Face.cameraTransform.applyToPoint()` to convert the point to the camera's coordinate system.
*/
declare interface Mouth {

/**
```
(get) center: PointSignal
(set) (Not Available)
```

The location of the center of the mouth, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
center: PointSignal

/**
```
(get) leftCorner: PointSignal
(set) (Not Available)
```

The location of the left corner of the mouth, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
leftCorner: PointSignal

/**
```
(get) lowerLipCenter: PointSignal
(set) (Not Available)
```

The location of the center of the lower lip, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
lowerLipCenter: PointSignal

/**
```
(get) lowerLipCurvature: ScalarSignal
(set) (Not Available)
```

The curvature of the lower lip relative to the lip center, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
A value of `0` represents no curvature on the lower lip. A mouth angled higher than the lip center results in a positive curvature value, while a mouth angled lower than the lip center results in a negative curvature value.
*/
lowerLipCurvature: ScalarSignal

/**
```
(get) openness: ScalarSignal
(set) (Not Available)
```

The openness of the mouth, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
The higher the value returned, the more wide open the detected mouth is. The minimum value is `0`, which indicates a closed mouth.
*/
openness: ScalarSignal

/**
```
(get) rightCorner: PointSignal
(set) (Not Available)
```

The location of the right corner of the mouth, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
rightCorner: PointSignal

/**
```
(get) upperLipCenter: PointSignal
(set) (Not Available)
```

The location of the center of the upper lip, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
upperLipCenter: PointSignal

/**
```
(get) upperLipCurvature: ScalarSignal
(set) (Not Available)
```

The curvature of the upper lip relative to the lip center, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
A value of `0` represents no curvature on the upper lip. A mouth angled higher than the lip center results in a positive curvature value, while a mouth angled lower than the lip center results in a negative curvature value.
*/
upperLipCurvature: ScalarSignal

}



/**

//============================================================================
// Bind the position of a plane to the position of the user's mouth
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

  // Get the mouth object from the detected face
  const mouth = face.mouth;

  // Bind the position of the plane to the position of the center of the mouth
  plane.transform.x = face.cameraTransform.applyToPoint(mouth.center).x;
  plane.transform.y = face.cameraTransform.applyToPoint(mouth.center).y;

})(); // Enables async/await in JS [part 2]

*/