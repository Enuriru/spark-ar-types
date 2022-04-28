/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />

/**
The `Hand` class describes a hand detected in a scene.
*/
declare interface Hand {

/**
```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

Specifies the 2D position and size of a bounding box around a detected hand
*/
boundingBox: BoundingBoxSignal

/**
```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

Specifies the hand transformation relative to camera coordinate system.
*/
cameraTransform: TransformSignal

/**
```
(get) gesture: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` containing the name of the hand gesture.
*/
gesture: StringSignal

/**
```
(get) gestureType: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` containing the name of the hand gesture.
*/
gestureType: StringSignal

/**
```
(get) indexFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the index finger.
*/
indexFingerBase: PointSignal

/**
```
(get) indexFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the index finger.
*/
indexFingerDistal: PointSignal

/**
```
(get) indexFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the index finger.
*/
indexFingerProximal: PointSignal

/**
```
(get) indexFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the index finger.
*/
indexFingerTip: PointSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Specifies whether a hand is currently tracked i.e. valid
*/
isTracked: BoolSignal

/**
```
(get) littleFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the little finger.
*/
littleFingerBase: PointSignal

/**
```
(get) littleFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the little finger.
*/
littleFingerDistal: PointSignal

/**
```
(get) littleFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the little finger.
*/
littleFingerProximal: PointSignal

/**
```
(get) littleFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the little finger.
*/
littleFingerTip: PointSignal

/**
```
(get) middleFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the middle finger.
*/
middleFingerBase: PointSignal

/**
```
(get) middleFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the middle finger.
*/
middleFingerDistal: PointSignal

/**
```
(get) middleFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the middle finger.
*/
middleFingerProximal: PointSignal

/**
```
(get) middleFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the middle finger.
*/
middleFingerTip: PointSignal

/**
```
(get) ringFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the ring finger.
*/
ringFingerBase: PointSignal

/**
```
(get) ringFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the ring finger.
*/
ringFingerDistal: PointSignal

/**
```
(get) ringFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the ring finger.
*/
ringFingerProximal: PointSignal

/**
```
(get) ringFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the ring finger.
*/
ringFingerTip: PointSignal

/**
```
(get) thumbBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the thumb finger.
*/
thumbBase: PointSignal

/**
```
(get) thumbDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the thumb finger.
*/
thumbDistal: PointSignal

/**
```
(get) thumbProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the thumb finger.
*/
thumbProximal: PointSignal

/**
```
(get) thumbTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the thumb finger.
*/
thumbTip: PointSignal

/**
```
(get) wrist: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the wrist center point of the hand.
*/
wrist: PointSignal

}
