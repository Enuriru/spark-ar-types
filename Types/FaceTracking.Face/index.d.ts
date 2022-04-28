/// <reference path="../FaceTracking.Cheek/index.d.ts" />
/// <reference path="../FaceTracking.Chin/index.d.ts" />
/// <reference path="../FaceTracking.Eye/index.d.ts" />
/// <reference path="../FaceTracking.Eyebrow/index.d.ts" />
/// <reference path="../FaceTracking.Forehead/index.d.ts" />
/// <reference path="../FaceTracking.Mouth/index.d.ts" />
/// <reference path="../FaceTracking.Nose/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />

/**
Exposes details and key points of a three-dimensionally tracked face.
*/
declare interface Face {

/**
```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

The face transform relative to the camera coordinate system, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal).
Calling `cameraTransform.applyToPoint(point)`, where `point` is a point in the face's local coordinate system, will return a point in the camera's local coordinate system.
*/
cameraTransform: TransformSignal

/**
```
(get) chin: Chin
(set) (Not Available)
```

The [`Chin`](/classes/facetrackingmodule.chin) of the tracked face.
*/
chin: Chin

/**
```
(get) forehead: Forehead
(set) (Not Available)
```

The [`Forehead`](/classes/facetrackingmodule.forehead) of the tracked face.
*/
forehead: Forehead

/**
```
(get) id: StringSignal
(set) (Not Available)
```

The unique ID assigned to a tracked face, as a [`StringSignal`](/classes/ReactiveModule.StringSignal).
A unique ID is generated for every new face detected and tracked in the scene.

If a face loses tracking it will be assigned a new unique ID when it is tracked again - the effect will not recognise individual faces.
*/
id: StringSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Indicates whether the face is being tracked in the current frame, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If `false`, the value of the `Face` object's properties represent their value during the frame they were most recently tracked in.
*/
isTracked: BoolSignal

/**
```
(get) leftCheek: Cheek
(set) (Not Available)
```

The left [`Cheek`](/classes/facetrackingmodule.cheek) of the tracked face.
*/
leftCheek: Cheek

/**
```
(get) leftEye: Eye
(set) (Not Available)
```

The left [`Eye`](/classes/facetrackingmodule.eye) of the tracked face.
*/
leftEye: Eye

/**
```
(get) leftEyebrow: Eyebrow
(set) (Not Available)
```

The left [`Eyebrow`](/classes/facetrackingmodule.eyebrow) of the tracked face.
*/
leftEyebrow: Eyebrow

/**
```
(get) mouth: Mouth
(set) (Not Available)
```

The [`Mouth`](/classes/facetrackingmodule.mouth) of the tracked face.
*/
mouth: Mouth

/**
```
(get) nose: Nose
(set) (Not Available)
```

The [`Nose`](/classes/facetrackingmodule.nose) of the tracked face.
*/
nose: Nose

/**
```
(get) realWorldScaleActive: BoolSignal
(set) (Not Available)
```

Indicates whether the face is reported in [real scale](https://sparkar.facebook.com/ar-studio/learn/articles/world-effects/real-scale-for-world) for accurate scaling, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
*/
realWorldScaleActive: BoolSignal

/**
```
(get) rightCheek: Cheek
(set) (Not Available)
```

The right [`Cheek`](/classes/facetrackingmodule.cheek) of the tracked face.
*/
rightCheek: Cheek

/**
```
(get) rightEye: Eye
(set) (Not Available)
```

The right [`Eye`](/classes/facetrackingmodule.eye) of the tracked face.
*/
rightEye: Eye

/**
```
(get) rightEyebrow: Eyebrow
(set) (Not Available)
```

The right [`Eyebrow`](/classes/facetrackingmodule.eyebrow) of the tracked face.
*/
rightEyebrow: Eyebrow

/**
```
point(u: ScalarSignal | number, v: ScalarSignal | number): PointSignal
```

Returns a [`PointSignal`](/classes/ReactiveModule.PointSignal) with the point in the face's local coordinate system that corresponds to the specified UV point from the facial mesh texture map.
Use the `Face.cameraTransform()` method to convert the point to the camera coordinate system.
* `u` - the U coordinate from the facial mesh texture map.
* `v` - the V coordinate from the facial mesh texture map.
*/
point(u: ScalarSignal | number, v: ScalarSignal | number): PointSignal

}



/**

//============================================================================
// Move a plane between the left cheek and right eyebrow face points
// when tapped
//
// Project setup:
// - One plane: plane0
//
// Required project capabilities:
// - Face Tracking (auto added on FaceTracking module import)
// - Touch Gestures > Tap Gesture
//
//============================================================================

// Load in the required modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const TouchGestures = require('TouchGestures');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the plane in the scene and the first detected face
  const [plane, face] = await Promise.all([
    Scene.root.findFirst('plane0'),
    FaceTracking.face(0)
  ]);

  // Get the left cheek and right eyebrow objects from the detected face
  const leftCheek = face.leftCheek;
  const rightEyebrow = face.rightEyebrow;

  // Create a boolean to track which face point the plane is currently tracked to
  var planeOnCheek = false;

  // Change the face point the plane is tracked to when the plane is tapped
  TouchGestures.onTap(plane).subscribe(() => {

    // If the plane is on the cheek, bind its position to the eyebrow
    if (planeOnCheek){

      plane.transform.x = face.cameraTransform.applyToPoint(rightEyebrow.outsideEnd).x;
      plane.transform.y = face.cameraTransform.applyToPoint(rightEyebrow.outsideEnd).y;

      planeOnCheek = false;

    // If the plane is on the eyebrow, bind its position to the cheek
    } else {
      plane.transform.x = face.cameraTransform.applyToPoint(leftCheek.cheekbone).x;
      plane.transform.y = face.cameraTransform.applyToPoint(leftCheek.cheekbone).y;

      planeOnCheek = true;
    }

  });

})(); // Enables async/await in JS [part 2]

*/