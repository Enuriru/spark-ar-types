/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../FaceTracking.Cheek/index.d.ts" />
/// <reference path="../FaceTracking.Chin/index.d.ts" />
/// <reference path="../FaceTracking.Eye/index.d.ts" />
/// <reference path="../FaceTracking.Eyebrow/index.d.ts" />
/// <reference path="../FaceTracking.Forehead/index.d.ts" />
/// <reference path="../FaceTracking.Mouth/index.d.ts" />
/// <reference path="../FaceTracking.Nose/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
declare interface Face {
/**
* ```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

The face transform relative to the camera coordinate system, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal).
Calling `cameraTransform.applyToPoint(point)`, where `point` is a point in the face's local coordinate system, will return a point in the camera's local coordinate system.
*/
cameraTransform: TransformSignal;
/**
* ```
(get) chin: Chin
(set) (Not Available)
```

The [`Chin`](/classes/facetrackingmodule.chin) of the tracked face.
*/
chin: Chin;
/**
* ```
(get) forehead: Forehead
(set) (Not Available)
```

The [`Forehead`](/classes/facetrackingmodule.forehead) of the tracked face.
*/
forehead: Forehead;
/**
* ```
(get) id: StringSignal
(set) (Not Available)
```

The unique ID assigned to a tracked face, as a [`StringSignal`](/classes/ReactiveModule.StringSignal).
A unique ID is generated for every new face detected and tracked in the scene.

If a face loses tracking it will be assigned a new unique ID when it is tracked again - the effect will not recognise individual faces.
*/
id: StringSignal;
/**
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Indicates whether the face is being tracked in the current frame, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If `false`, the value of the `Face` object's properties represent their value during the frame they were most recently tracked in.
*/
isTracked: BoolSignal;
/**
* ```
(get) leftCheek: Cheek
(set) (Not Available)
```

The left [`Cheek`](/classes/facetrackingmodule.cheek) of the tracked face.
*/
leftCheek: Cheek;
/**
* ```
(get) leftEye: Eye
(set) (Not Available)
```

The left [`Eye`](/classes/facetrackingmodule.eye) of the tracked face.
*/
leftEye: Eye;
/**
* ```
(get) leftEyebrow: Eyebrow
(set) (Not Available)
```

The left [`Eyebrow`](/classes/facetrackingmodule.eyebrow) of the tracked face.
*/
leftEyebrow: Eyebrow;
/**
* ```
(get) mouth: Mouth
(set) (Not Available)
```

The [`Mouth`](/classes/facetrackingmodule.mouth) of the tracked face.
*/
mouth: Mouth;
/**
* ```
(get) nose: Nose
(set) (Not Available)
```

The [`Nose`](/classes/facetrackingmodule.nose) of the tracked face.
*/
nose: Nose;
/**
* ```
(get) rightCheek: Cheek
(set) (Not Available)
```

The right [`Cheek`](/classes/facetrackingmodule.cheek) of the tracked face.
*/
rightCheek: Cheek;
/**
* ```
(get) rightEye: Eye
(set) (Not Available)
```

The right [`Eye`](/classes/facetrackingmodule.eye) of the tracked face.
*/
rightEye: Eye;
/**
* ```
(get) rightEyebrow: Eyebrow
(set) (Not Available)
```

The right [`Eyebrow`](/classes/facetrackingmodule.eyebrow) of the tracked face.
*/
rightEyebrow: Eyebrow;
/**
*  
 * point(u: ScalarSignal | number, v: ScalarSignal | number): PointSignal
 *  
 * 
 * Returns a [`PointSignal`](/classes/ReactiveModule.PointSignal) with the point in the face's local coordinate system that corresponds to the specified UV point from the facial mesh texture map.
 * Use the `Face.cameraTransform()` method to convert the point to the camera coordinate system.
 * * `u` - the U coordinate from the facial mesh texture map.
 * * `v` - the V coordinate from the facial mesh texture map.
 */
point(u: ScalarSignal | number, v: ScalarSignal | number): PointSignal;

}
