/// <reference path="../FaceTracking.Eye/index.d.ts" />
/// <reference path="../SpatialEyeTracking.Eye/index.d.ts" />


/**
[{"kind":"introducedBy","version":755072778},{"kind":"capability","capability":"spatialEyeTracking","orCapability":""}]
*/


declare interface SpatialEyeTracking extends Module {

/**
```
(get) leftEye: Eye
(set) (Not Available)
```
*/
leftEye: Eye

/**
```
(get) rightEye: Eye
(set) (Not Available)
```
*/
rightEye: Eye

/**
```
eye(index: EyeType): Eye
```

*/
eye(index: EyeType): Eye

}
