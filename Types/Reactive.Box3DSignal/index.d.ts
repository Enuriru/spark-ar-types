/// <reference path="../Reactive.PointSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":4200001050},{"kind":"capability","capability":"boundingBoxScripting","orCapability":""}]
*/


/**
The `Box3DSignal` class describes the bounds in 3D space.
*/
declare interface Box3DSignal {

/**
```
(get) max: PointSignal
(set) (Not Available)
```

Retrieves the maximum point of bounding box.
*/
max: PointSignal

/**
```
(get) min: PointSignal
(set) (Not Available)
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.
*/
min: PointSignal

}
