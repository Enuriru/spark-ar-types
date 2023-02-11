/// <reference path="../Reactive.Mat4/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />


/**
[{"kind":"capability","capability":"syncDomApis","orCapability":""},{"kind":"introducedBy","version":1280623657},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `WorldTransformSync` class describes an object transform for a sceneObject in world space. Properties of this class reflect raw values rather than signals.
*/
declare interface WorldTransformSync {

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

Specifies the object position along the X, Y and Z axis of the world coordinate system.
*/
position: Vec3

/**
```
(get) rotation: Rotation
(set) rotation: Rotation
```

Specifies the object rotation along the X, Y and Z axis of the object's in world coordinate system.
*/
rotation: Rotation

/**
```
(get) rotationX: number
(set) (Not Available)
```

Represents rotation about the X-axis of the world coordinate system, in radians. The value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object.
*/
rotationX: number

/**
```
(get) rotationY: number
(set) (Not Available)
```

Represents rotation about the Y-axis of the world coordinate system, in radians. The value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationY: number

/**
```
(get) rotationZ: number
(set) (Not Available)
```

Represents rotation about the Z-axis of the world coordinate system, in radians. The value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationZ: number

/**
```
(get) scale: Vec3
(set) scale: Vec3
```

Represents scale in the world coordinate system.
*/
scale: Vec3

/**
```
(get) scaleX: number
(set) (Not Available)
```

Represents scale along the X-axis of the world coordinate system.
*/
scaleX: number

/**
```
(get) scaleY: number
(set) (Not Available)
```

Represents scale along the Y-axis of the world coordinate system.
*/
scaleY: number

/**
```
(get) scaleZ: number
(set) (Not Available)
```

Represents scale along the Z-axis of the world coordinate system.
*/
scaleZ: number

/**
```
(get) x: number
(set) (Not Available)
```

Represents the offset along the X-axis of the world coordinate system.
*/
x: number

/**
```
(get) y: number
(set) (Not Available)
```

Represents the offset along the Y-axis of the world coordinate system.
*/
y: number

/**
```
(get) z: number
(set) (Not Available)
```

Represents the offset along the Z-axis of the world coordinate system.
*/
z: number

/**
```
lookAt(targetPosition: Vec3, selfUp?: Vec3): Mat4
```

Returns new transform matrix looking in direction of target.
Default `selfUp` is `ReactiveModule.Vector3`.
*/
lookAt(targetPosition: Vec3, selfUp?: Vec3): Mat4

}
