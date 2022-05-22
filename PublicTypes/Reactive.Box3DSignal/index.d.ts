/// <reference path="../Reactive.PointSignal/index.d.ts" />
declare interface Box3DSignal {
/**
* ```
(get) max: PointSignal
(set) (Not Available)
```

Retrieves the maximum point of bounding box.
*/
max: PointSignal;
/**
* ```
(get) min: PointSignal
(set) (Not Available)
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.
*/
min: PointSignal;
}
