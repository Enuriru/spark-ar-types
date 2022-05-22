/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />
declare interface QuaternionSignal {
/**
* ```
(get) eulerAngles: PointSignal
(set) (Not Available)
```

Represents the Euler angle from the `QuaternionSignal`, representing pitch, yaw, roll respectively.
**Note**: the order of rotations for the Euler angles is the same as in `Transform` class.
*/
eulerAngles: PointSignal;
/**
* ```
(get) w: ScalarSignal
(set) (Not Available)
```

Represents the W component of the quaternion.
*/
w: ScalarSignal;
/**
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X component of the quaternion.
*/
x: ScalarSignal;
/**
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y component of the quaternion.
*/
y: ScalarSignal;
/**
* ```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the Z component of the quaternion.
*/
z: ScalarSignal;
/**
*  
 * angleAxis(): Vec4Signal
 *  
 * 
 * Returns the angle/axis representation of this quaternion. First element in the vector is angle in radians, with last 3 being X, Y, Z axis respectively.
 */
angleAxis(): Vec4Signal;

/**
*  
 * angleTo(signal: QuaternionSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angular distance between this quaternion and the provided quaternion, in radians.
 * * `signal` - the other signal to calculate the angular distance between, as a `QuaternionSignal`.
 */
angleTo(signal: QuaternionSignal): ScalarSignal;

/**
*  
 * conjugate(): QuaternionSignal
 *  
 * 
 * Returns the rotational conjugate of this quaternion. The conjugate of a quaternion represents the same rotation in the opposite direction about the rotational axis.
 */
conjugate(): QuaternionSignal;

/**
*  
 * dot(signal: QuaternionSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * * `signal` - the other to use in the dot product operation, as a `QuaternionSignal`.
 */
dot(signal: QuaternionSignal): ScalarSignal;

/**
*  
 * history(framesCount: number, initialValues?: Array<Rotation>): SignalHistory<Rotation>
 *  
 * 
 * Returns an object used to access signal values from past frames.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 * * `framesCount` - the number of frames to track.
 * * `initialValues` - an optional initial value to assign to the signal.
 */
history(framesCount: number, initialValues?: Array<Rotation>): SignalHistory<Rotation>;

/**
*  
 * invert(): QuaternionSignal
 *  
 * 
 * Returns the rotational conjugate of this quaternion. The conjugate of a quaternion represents the same rotation in the opposite direction about the rotational axis.
 */
invert(): QuaternionSignal;

/**
*  
 * mix(signal: QuaternionSignal, factor: ScalarSignal | number): QuaternionSignal
 *  
 * 
 * Returns a signal with the value that is the linear interpolation between this and another signal by a given factor.
 * * `signal` - the other signal to interpolate between, as a `QuaternionSignal`.
 * * `factor` - the factor to interpolate by, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number`.
 */
mix(signal: QuaternionSignal, factor: ScalarSignal | number): QuaternionSignal;

/**
*  
 * mul(signal: QuaternionSignal): QuaternionSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * * `signal` - the other signal to use in the multiplication operation, as a `QuaternionSignal`.
 */
mul(signal: QuaternionSignal): QuaternionSignal;

/**
*  
 * pinLastValue(): QuaternionSignal
 *  
 * 
 * Returns a new `QuaternionSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 */
pinLastValue(): QuaternionSignal;

/**
*  
 * slerp(signal: QuaternionSignal, factor: ScalarSignal | number): QuaternionSignal
 *  
 * 
 * Returns a signal with the value that is the spherical linear interpolation between this and another signal by a given factor.
 * * `signal` - the other signal to interpolate between, as a `QuaternionSignal`.
 * * `factor` - the factor to interpolate by, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number`.
 */
slerp(signal: QuaternionSignal, factor: ScalarSignal | number): QuaternionSignal;

}
