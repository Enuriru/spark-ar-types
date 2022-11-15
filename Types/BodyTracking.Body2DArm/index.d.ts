/// <reference path="../BodyTracking.KeyPoint2D/index.d.ts" />


/**
[{"kind":"capability","capability":"bodyTracking2DKeyPoints","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
Represents a tracked arm in the body.
*/
declare interface Body2DArm {

/**
```
(get) elbow: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the elbow position
*/
elbow: KeyPoint2D

/**
```
(get) shoulder: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the shoulder position
*/
shoulder: KeyPoint2D

/**
```
(get) wrist: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the wrist position
*/
wrist: KeyPoint2D

}
