/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../SparkVision.MLModel/index.d.ts" />
/// <reference path="../SparkVision.SparkVisionDetectorObject/index.d.ts" />
/// <reference path="../SparkVision.SparkVisionTextureContainer/index.d.ts" />


/**
[{"kind":"introducedBy","version":1774572365},{"kind":"capability","capability":"genericML","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `SparkVisionDetector` class represents a detector in the SparkVision capability that runs a detector model.
*/
declare interface SparkVisionDetector {

/**
```
(get) capabilitiesSupported: Array<String>
(set) (Not Available)
```

Returns the supported output types of the model, including Bounding Box, KeyPoints, Category as an Array of Strings
*/
capabilitiesSupported: Array<String>

/**
```
(get) keyPointNames: Array<String>
(set) (Not Available)
```

Returns KeyPoint names if supported
Throws an error if KeyPoints are not supported
*/
keyPointNames: Array<String>

/**
```
(get) model: MLModel
(set) (Not Available)
```

Returns the given MLModel in this detector.
*/
model: MLModel

/**
```
(get) objectCount: ScalarSignal
(set) (Not Available)
```

The number of actively returned objects in the detector
*/
objectCount: ScalarSignal

/**
```
(get) textures: SparkVisionTextureContainer
(set) (Not Available)
```
*/
textures: SparkVisionTextureContainer

/**
```
getObject(index: number): SparkVisionDetectorObject
```

Returns the detector object indicated by index.
*/
getObject(index: number): SparkVisionDetectorObject

}
