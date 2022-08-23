/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1774572365},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
The SparkVisionKeyPoint class represents a KeyPoint exposed by a SparkVisionDetector. You can use this class
to access the KeyPoint's position, confidence, and isOccluded.
*/
declare interface SparkVisionKeyPoint {

/**
```
(get) confidence: ScalarSignal
(set) (Not Available)
```

Returns the keyPoint confidence of given name.
Value is 0.0 if confidence does not exist
*/
confidence: ScalarSignal

/**
```
(get) isOccluded: ScalarSignal
(set) (Not Available)
```

Returns the keyPoint occlusion of given name.
Returns the most recent value if data not generated, or 0.0 if not supported
*/
isOccluded: ScalarSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Returns the keyPoint isTracked of given name.
Value is either true if keypoint is tracked or false if it's not
*/
isTracked: BoolSignal

/**
```
(get) position: Vec2Signal
(set) (Not Available)
```

Returns the keyPoint position of given name.
Returns the most recent position if data not generated, or {0.0, 0.0} if not supported
*/
position: Vec2Signal

}
