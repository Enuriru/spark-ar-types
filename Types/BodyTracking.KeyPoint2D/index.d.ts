/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />


/**
[{"kind":"capability","capability":"bodyTracking2DKeyPoints","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
Represents a single tracked 2d key point in the scene.
*/
declare interface KeyPoint2D {

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Boolean signal representing whether this body key point is being tracked right now or not.
*/
isTracked: BoolSignal

/**
```
(get) keyPoint: Vec2Signal
(set) (Not Available)
```

Point signal representing the key point
*/
keyPoint: Vec2Signal

}
