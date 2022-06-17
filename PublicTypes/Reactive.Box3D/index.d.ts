/// <reference path="../Reactive.Point3D/index.d.ts" />
declare interface Box3D {
/**
* ```
(get) max: Point3D
(set) max: Point3D
```

Retrieves the maximum point of bounding box.
*/
max: Point3D;
/**
* ```
(get) min: Point3D
(set) min: Point3D
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.
*/
min: Point3D;
}
