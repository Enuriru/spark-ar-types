/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />

/**
The `TransformSignal` class monitors a scene transform.
*/
declare interface TransformSignal {

/**
```
(get) forward: VectorSignal
(set) (Not Available)
```
*/
forward: VectorSignal

/**
```
(get) position: PointSignal
(set) (Not Available)
```

Represents the offset in the local coordinate system.
*/
position: PointSignal

/**
```
(get) right: VectorSignal
(set) (Not Available)
```
*/
right: VectorSignal

/**
```
(get) rotation: QuaternionSignal
(set) (Not Available)
```

Represents rotation along the X, Y and Z axis of the local coordinate system.
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/
rotation: QuaternionSignal

/**
```
(get) rotationX: ScalarSignal
(set) (Not Available)
```

Represents rotation about the X-axis of the local coordinate system, in radians. The signal value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object, therefore it is always performed in the object's local coordinate system.
*/
rotationX: ScalarSignal

/**
```
(get) rotationY: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Y-axis of the rotated local coordinate system, in radians. The signal value is in the range [-PI/2, PI/2].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationY: ScalarSignal

/**
```
(get) rotationZ: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Z-axis of the rotated local coordinate system, in radians. The signal value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationZ: ScalarSignal

/**
```
(get) scale: PointSignal
(set) (Not Available)
```

Represents scale in the local coordinate system.
*/
scale: PointSignal

/**
```
(get) scaleX: ScalarSignal
(set) (Not Available)
```

Represents scale along the X-axis of the local coordinate system.
*/
scaleX: ScalarSignal

/**
```
(get) scaleY: ScalarSignal
(set) (Not Available)
```

Represents scale along the Y-axis of the local coordinate system.
*/
scaleY: ScalarSignal

/**
```
(get) scaleZ: ScalarSignal
(set) (Not Available)
```

Represents scale along the z-axis of the local coordinate system.
*/
scaleZ: ScalarSignal

/**
```
(get) up: VectorSignal
(set) (Not Available)
```
*/
up: VectorSignal

/**
```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the offset along the X-axis of the local coordinate system.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Y-axis of the local coordinate system.
*/
y: ScalarSignal

/**
```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Z-axis of the local coordinate system.
*/
z: ScalarSignal

/**
```
applyTo(transform: TransformSignal): TransformSignal
```

Returns a signal with the value that is equal to the value of the provided transformation with the transformation of the current `TransformSignal` applied to it.
* `transform` - the transform to apply the current transform to, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal).
*/
applyTo(transform: TransformSignal): TransformSignal

/**
```
applyToPoint(signal: PointSignal): PointSignal
```

Returns a signal with the value that is equal to the value of the provided point with the transformation applied to it.
This performs a matrix multiplication of the provided point (with an implicit `1` in the 4th dimension) and the receiver transform, and divides by perspective.

* `signal` - the point to apply the transform to, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
applyToPoint(signal: PointSignal): PointSignal

/**
```
applyToVector(signal: VectorSignal): VectorSignal
```

Returns a signal with the value that is equal to the value of the provided vector with the transformation applied to it.
This performs a matrix multiplication of the provided vector (with an implicit `0` in the 4th dimension) and the receiver transform, without change of position.

* `signal` - the vector to apply the transform to, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal).
*/
applyToVector(signal: VectorSignal): VectorSignal

/**
```
expSmooth(dampFactor: number): TransformSignal
```

Smoothes a variable signal using exponential averaging over time.
**Note**: The smoothed transformation for a signal that specifies a rigid body transformation is guaranteed to be a rigid body transformation. The rotation component is smoothed in spherical coordinates using Slerp (spherical linear interpolation).

**Note**: See also `ReactiveModule.expSmooth`.

* `dampFactor` - the dampening time constant, in milliseconds.
*/
expSmooth(dampFactor: number): TransformSignal

/**
```
history(framesCount: number): SignalHistory<Transform>
```

Returns an object used to access signal values from past frames.
Historical signal values are going to be initialized with signal value at call time.

* `framesCount` - the number of frames to track.
*/
history(framesCount: number): SignalHistory<Transform>

/**
```
inverse(): TransformSignal
```

Returns a signal with the value that is equal to the inverted transformation value of the given signal at any point of time.
*/
inverse(): TransformSignal

/**
```
lookAt(targetPosition: PointSignal, selfUp?: VectorSignal): TransformSignal
```

Creates a scene object transform with rotation in direction of target.
**Note:** self needs to be pointing the scene object alongside the X axis.

* `targetPosition` - The position of the target, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
* `selfUp` - The up direction vector, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal). If no value is specified, a vector of `[0, 1, 0]` is used by default.
*/
lookAt(targetPosition: PointSignal, selfUp?: VectorSignal): TransformSignal

/**
```
pinLastValue(): TransformSignal
```

Returns a new `TransformSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): TransformSignal

/**
```
transpose(): TransformSignal
```

Returns a signal with the value that is equal to the transpose value of the given transformation signal at any point of time.
*/
transpose(): TransformSignal

}
