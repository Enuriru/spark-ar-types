/// <reference path="../BodyTracking.KeyPoint2D/index.d.ts" />


/**
[{"kind":"capability","capability":"bodyTracking2DKeyPoints","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
Represents a tracked leg in the body.
*/
declare interface Body2DLeg {

/**
```
(get) ankle: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the ankle position
*/
ankle: KeyPoint2D

/**
```
(get) knee: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the knee position
*/
knee: KeyPoint2D

}
