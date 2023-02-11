/// <reference path="../Reactive.Vec3/index.d.ts" />

/**
The `Mat4` class contains a 4D Matrix.
*/
declare interface Mat4 {

/**
```
(get) elements: undefined
(set) elements: undefined
```
*/
elements: undefined

/**
```
applyToPoint(point: Vec3): Vec3
```

Returns a Vec3 with the value that is equal to the value of the provided vec3 as point with the transformation applied to it.
This performs a matrix multiplication of the provided point (with an implicit `1` in the 4th dimension) and the receiver transform, and divides by perspective.

* `point` - the point to apply the transform to, as a [`Vec3`](/classes/ReactiveModule.Vec3).
*/
applyToPoint(point: Vec3): Vec3

/**
```
applyToVector(vector: Vec3): Vec3
```

Returns a Vec3 with the value that is equal to the value of the provided vector with the transformation matrix applied to it.
This performs a matrix multiplication of the provided vector (with an implicit `0` in the 4th dimension) and the receiver transform, without change of position.

* `vector` - the vector to apply the transform to, as a [`Vec3`](/classes/ReactiveModule.Vec3).
*/
applyToVector(vector: Vec3): Vec3

/**
```
inverse(): Mat4
```

Returns a signal with the value that is equal to the inverted transformation value of the given signal at any point of time.
*/
inverse(): Mat4

/**
```
mul(value: Mat4): Mat4
mul(value: Vec4): Vec4
```

*/
mul(value: Mat4): Mat4

}
