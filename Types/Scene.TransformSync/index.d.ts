/// <reference path="../Reactive.Mat4/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />


/**
[{"kind":"capability","capability":"syncDomApis","orCapability":""},{"kind":"introducedBy","version":1280623657},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `TransformSync` class describes an object transform for a scene.
All the operations with this class are synchronous.
*/
declare interface TransformSync {

/**
```
(get) forward: Vec3
(set) (Not Available)
```
*/
forward: Vec3

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

Specifies the object position along the X, Y and Z axis of the object's local coordinate system.
*/
position: Vec3

/**
```
(get) right: Vec3
(set) (Not Available)
```
*/
right: Vec3

/**
```
(get) rotation: Rotation
(set) rotation: Rotation
```

Specifies the object rotation along the X, Y and Z axis of the object's local coordinate system.
*/
rotation: Rotation

/**
```
(get) rotationX: number
(set) rotationX: number
```

Specifies the object rotation about the X-axis of the object's local coordinate system, in radians.
**Note**: the rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object, therefore it is always performed in the object's local coordinate system.
*/
rotationX: number

/**
```
(get) rotationY: number
(set) rotationY: number
```

Specifies the object rotation about the Y-axis of the object's local coordinate system, in radians.
**Note**: the rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationY: number

/**
```
(get) rotationZ: number
(set) rotationZ: number
```

Specifies the object rotation about the Z-axis of the object's local coordinate system, in radians.
**Note**: the rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationZ: number

/**
```
(get) scale: Vec3
(set) scale: Vec3
```

Specifies the object scale along the X, Y and Z axis.
*/
scale: Vec3

/**
```
(get) scaleX: number
(set) scaleX: number
```

Specifies the object scale along the X-axis of the object's local coordinate system.
*/
scaleX: number

/**
```
(get) scaleY: number
(set) scaleY: number
```

Specifies the object scale along the Y-axis of the object's local coordinate system.
*/
scaleY: number

/**
```
(get) scaleZ: number
(set) scaleZ: number
```

Specifies the object scale along the Z-axis of the object's local coordinate system.
*/
scaleZ: number

/**
```
(get) up: Vec3
(set) (Not Available)
```
*/
up: Vec3

/**
```
(get) x: number
(set) x: number
```

Specifies the object offset along the X-axis of the object's local coordinate system.
*/
x: number

/**
```
(get) y: number
(set) y: number
```

Specifies the object offset along the Y-axis of the object's local coordinate system.
*/
y: number

/**
```
(get) z: number
(set) z: number
```

Specifies the object offset along the Z-axis of the object's local coordinate system.
*/
z: number

/**
```
lookAt(targetPosition: Vec3, selfUp?: Vec3): Mat4
```

Returns new transform matrix looking in direction of target.
Default `selfUp` is `ReactiveModule.vector(0, 1, 0)`.
*/
lookAt(targetPosition: Vec3, selfUp?: Vec3): Mat4

}
