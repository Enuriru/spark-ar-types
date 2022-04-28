/// <reference path="../Reactive.PointSignal/index.d.ts" />


/**
[{"kind":"removedBy","version":4200001050}]
*/


/**
The `BoundingBox` class describes the bounds of a scene element in the local coordinate system.
*/
declare interface BoundingBox {

/**
```
(get) max: PointSignal
(set) (Not Available)
```

Retrieves the maximum point of object's bounding box in object's local coordinate system.
**NOTE**: There is 1 frame delay in this value.
*/
max: PointSignal

/**
```
(get) min: PointSignal
(set) (Not Available)
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.
**NOTE**: There is 1 frame delay in this value.
*/
min: PointSignal

}
