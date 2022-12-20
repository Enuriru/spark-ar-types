/// <reference path="../Reactive.Mat4/index.d.ts" />
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
(set) (Not Available)
```

Specifies the object position along the X, Y and Z axis of the world coordinate system.
*/
position: Vec3

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
