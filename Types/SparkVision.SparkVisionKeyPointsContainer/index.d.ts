/// <reference path="../SparkVision.SparkVisionKeyPoint/index.d.ts" />


/**
[{"kind":"introducedBy","version":1774572365},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
The SparkVisionKeyPointContainer class is a container for all the keypoints for a given detector object.
You can use this class to access the keypoints given a KeyPoint's name.
*/
declare interface SparkVisionKeyPointsContainer {

/**
```
(get) keyPointNames: Array<String>
(set) (Not Available)
```

Returns KeyPoint names if supported
*/
keyPointNames: Array<String>

/**
```
getKeyPointByName(keyPointName: string): SparkVisionKeyPoint
```

Returns a SparkVisionKeyPoint representing the keypoint with the given keypoint name
Throws an error if a keypoint with the given name does not exist.
*/
getKeyPointByName(keyPointName: string): SparkVisionKeyPoint

}
