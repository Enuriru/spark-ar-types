/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface WorldTransform {
/**
* ```
(get) position: PointSignal
(set) position: PointSignal
```

Specifies the object position along the X, Y and Z axis of the world coordinate system.
*/
position: PointSignal;
/**
* ```
(get) rotation: QuaternionSignal
(set) rotation: QuaternionSignal
```

Specifies the object rotation along the X, Y and Z axis of the object's in world coordinate system.
*/
rotation: QuaternionSignal;
/**
* ```
(get) rotationX: ScalarSignal
(set) (Not Available)
```

Represents rotation about the X-axis of the world coordinate system, in radians. The signal value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object.
*/
rotationX: ScalarSignal;
/**
* ```
(get) rotationY: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Y-axis of the world coordinate system, in radians. The signal value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationY: ScalarSignal;
/**
* ```
(get) rotationZ: ScalarSignal
(set) (Not Available)
```

Represents rotation about the Z-axis of the world coordinate system, in radians. The signal value is in the range [-PI, PI].
**Note**: The order of operations (rotations in particular) is the same as in `Transform`. The rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationZ: ScalarSignal;
/**
* ```
(get) scale: PointSignal
(set) scale: PointSignal
```

Represents scale in the world coordinate system.
*/
scale: PointSignal;
/**
* ```
(get) scaleX: ScalarSignal
(set) (Not Available)
```

Represents scale along the X-axis of the world coordinate system.
*/
scaleX: ScalarSignal;
/**
* ```
(get) scaleY: ScalarSignal
(set) (Not Available)
```

Represents scale along the Y-axis of the world coordinate system.
*/
scaleY: ScalarSignal;
/**
* ```
(get) scaleZ: ScalarSignal
(set) (Not Available)
```

Represents scale along the Z-axis of the world coordinate system.
*/
scaleZ: ScalarSignal;
/**
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the offset along the X-axis of the world coordinate system.
*/
x: ScalarSignal;
/**
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Y-axis of the world coordinate system.
*/
y: ScalarSignal;
/**
* ```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the offset along the Z-axis of the world coordinate system.
*/
z: ScalarSignal;
/**
*  
 * applyTo(transform: TransformSignal): TransformSignal
 *  
 * 
 * Returns a signal with the value that is equal to the value of the provided transformation with the transformation of the current `TransformSignal` applied to it.
 */
applyTo(transform: TransformSignal): TransformSignal;

/**
*  
 * applyToPoint(signal: PointSignal): PointSignal
 *  
 * 
 * Returns a signal with the value that is equal to the value of the provided point with the transformation applied to it.
 * This performs a matrix multiplication of the provided point (with an implicit `1` in the 4th dimension) and the receiver transform, and divides by perspective.
 */
applyToPoint(signal: PointSignal): PointSignal;

/**
*  
 * applyToVector(signal: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is equal to the value of the provided vector with the transformation applied to it.
 * This performs a matrix multiplication of the provided vector (with an implicit `0` in the 4th dimension) and the receiver transform, without change of position.
 */
applyToVector(signal: VectorSignal): VectorSignal;

/**
*  
 * inverse(): TransformSignal
 *  
 * 
 * Returns a signal with the value that is equal to the inverted transformation value of the given signal at any point of time.
 */
inverse(): TransformSignal;

/**
*  
 * lookAt(targetPosition: PointSignal, selfUp?: VectorSignal): TransformSignal
 *  
 * 
 * Creates a scene object transform with rotation in direction of target.
 * **Note:** The self needs to be pointing the scene object alongside the X axis.
 * Default `selfUp` is `ReactiveModule.vector(0, 1, 0)`.
 */
lookAt(targetPosition: PointSignal, selfUp?: VectorSignal): TransformSignal;

/**
*  
 * toSignal(): TransformSignal
 *  
 * 
 * Returns a signal for a given transformation.
 */
toSignal(): TransformSignal;

}
