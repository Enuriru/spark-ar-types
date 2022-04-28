/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1774572365},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
The SparkVisionBoundingBox class represents a bounding box that is exposed by a SparkVisionDetectorObject. It represents
the bounding box output of a Detector model, and exposes data like box2D, confidence, and isOccluded.
*/
declare interface SparkVisionBoundingBox {

/**
```
(get) box2D: Box2DSignal
(set) (Not Available)
```

Returns the bounding box Box2DSignal
Returns the most recent box2D value if model doesn't generate it, or {0.0, 0.0, 0.0, 0.0} if not supported
*/
box2D: Box2DSignal

/**
```
(get) confidence: ScalarSignal
(set) (Not Available)
```

Returns the bounding box confidence
Value is 0.0 if confidence is not supported or data not found
*/
confidence: ScalarSignal

/**
```
(get) isOccluded: ScalarSignal
(set) (Not Available)
```

Returns the bounding box isOccluded
Returns the most recent value if model doesn't generate it, or 0.0 if not supported
*/
isOccluded: ScalarSignal

}
