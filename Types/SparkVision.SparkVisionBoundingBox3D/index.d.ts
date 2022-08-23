/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":770306634},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
The SparkVisionBoundingBox class represents a bounding box that is exposed by a SparkVisionDetectorObject. It represents
the bounding box output of a Detector model, and exposes data like box2D, confidence, and isOccluded.
*/
declare interface SparkVisionBoundingBox3D {

/**
```
(get) box3D: Box3DSignal
(set) (Not Available)
```

Returns axis aligned bounding box Box3DSignal
Returns the most recent box3D value if model doesn't generate it, or {0.0, 0.0, 0.0, 0.0} if not supported
*/
box3D: Box3DSignal

/**
```
(get) confidence: ScalarSignal
(set) (Not Available)
```

Returns the bounding box confidence
Value is 0.0 if confidence is not supported or data not found
*/
confidence: ScalarSignal

}
