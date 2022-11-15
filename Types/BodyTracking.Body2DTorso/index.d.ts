/// <reference path="../BodyTracking.KeyPoint2D/index.d.ts" />


/**
[{"kind":"capability","capability":"bodyTracking2DKeyPoints","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
Represents a tracked torso in the body.
*/
declare interface Body2DTorso {

/**
```
(get) leftHip: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the left hip position
*/
leftHip: KeyPoint2D

/**
```
(get) rightHip: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the chin position
*/
rightHip: KeyPoint2D

}
