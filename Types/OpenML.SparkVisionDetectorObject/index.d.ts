/// <reference path="../OpenML.SparkVisionBoundingBox/index.d.ts" />
/// <reference path="../OpenML.SparkVisionKeyPointsContainer/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1774572365},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
SparkVisionDetectorObject represents a single detected object from a SparkVisionDetector.
This class exposes outputs including Bounding Box, KeyPoints, and Category.
*/
declare interface SparkVisionDetectorObject {

/**
```
(get) boundingBox: SparkVisionBoundingBox
(set) (Not Available)
```

Returns the bounding box represented as a SparkVisionBoundingBox
Throws an error if Bounding Box is not supported
*/
boundingBox: SparkVisionBoundingBox

/**
```
(get) category: StringSignal
(set) (Not Available)
```

Returns the Category represented as a StringSignal
Throws an error if Categories are not supported
If model doesn't give a category in a certain frame, returns the most recent category
*/
category: StringSignal

/**
```
(get) keyPoints: SparkVisionKeyPointsContainer
(set) (Not Available)
```

Returns the KeyPoints represented as a SparkVisionKeyPointsContainer
Throws an error if KeyPoints are not supported
*/
keyPoints: SparkVisionKeyPointsContainer

/**
```
(get) objectId: ScalarSignal
(set) (Not Available)
```

Returns the object's id
If the model doesn't support, the default is 0.
*/
objectId: ScalarSignal

}
