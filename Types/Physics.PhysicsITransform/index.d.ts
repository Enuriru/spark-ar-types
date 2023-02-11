/// <reference path="../Reactive.Mat4/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />

/**
Asynchronous physics transform interface returned for Interface.TRANSFORM. Note that physics transforms do not support scaling.
This is a handle to a physics transform which can be used to set and/or get the transform at any time.
*/
declare interface PhysicsITransform {

/**
```
matrix(): Promise<Mat4>
```

*/
matrix(): Promise<Mat4>

/**
```
position(): Promise<Vec3>
```

Specifies the translation along the X, Y and Z axis.
*/
position(): Promise<Vec3>

/**
```
rotation(): Promise<Rotation>
```

Specifies the rotation as a unit quaternion.
*/
rotation(): Promise<Rotation>

/**
```
setMatrix(m: Mat4): Promise<void>
```

*/
setMatrix(m: Mat4): Promise<void>

/**
```
setPosition(v: Vec3): Promise<void>
```

*/
setPosition(v: Vec3): Promise<void>

/**
```
setRotation(v: Rotation): Promise<void>
```

*/
setRotation(v: Rotation): Promise<void>

}
