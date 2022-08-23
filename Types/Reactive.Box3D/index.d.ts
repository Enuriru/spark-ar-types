/// <reference path="../Reactive.Vec3/index.d.ts" />

/**
The `Box3D` class describes the bounds in 3D space.
*/
declare interface Box3D {

/**
```
(get) max: Vec3
(set) max: Vec3
```

Retrieves the maximum point of bounding box.
*/
max: Vec3

/**
```
(get) min: Vec3
(set) min: Vec3
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.
*/
min: Vec3

}
