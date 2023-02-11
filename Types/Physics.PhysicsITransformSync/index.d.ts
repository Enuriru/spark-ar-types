/// <reference path="../Reactive.Mat4/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />

/**
Synchronous transform interface returned for Interface.TRANSFORM_SYNC. Note that physics transforms do not support scaling.
This is a handle to a physics transform which can be used to set and/or get the transform at any time.
*/
declare interface PhysicsITransformSync {

/**
```
(get) matrix: Mat4
(set) matrix: Mat4
```
*/
matrix: Mat4

/**
```
(get) position: Vec3
(set) position: Vec3
```

Specifies the translation along the X, Y and Z axis.
*/
position: Vec3

/**
```
(get) rotation: Rotation
(set) rotation: Rotation
```

Specifies the rotation as a unit quaternion.
*/
rotation: Rotation

}
