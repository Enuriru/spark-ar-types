/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../SpatialHandTracking.Hand/index.d.ts" />


/**
[{"kind":"introducedBy","version":1959304548},{"kind":"capability","capability":"spatialHandTracking","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


declare interface SpatialHandTracking extends Module {

/**
```
(get) leftHand: Hand
(set) (Not Available)
```
*/
leftHand: Hand

/**
```
(get) rightHand: Hand
(set) (Not Available)
```
*/
rightHand: Hand

/**
```
hand(index: HandTypeInt): Hand
```

*/
hand(index: HandTypeInt): Hand

}
