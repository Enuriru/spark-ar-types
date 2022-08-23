/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />

/**
The `VectorSignal` class monitors a vector.
*/
declare interface VectorSignal {

/**
```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X component of the vector.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y component of the vector.
*/
y: ScalarSignal

/**
```
(get) z: ScalarSignal
(set) (Not Available)
```

Represents the Z component of the vector.
*/
z: ScalarSignal

/**
```
expSmooth(dampFactor: number): VectorSignal
```

Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
**Note**: See also `ReactiveModule.expSmooth`.
*/
expSmooth(dampFactor: number): VectorSignal

/**
```
history(framesCount: number): SignalHistory<Vec3>
```

Returns an object used to access signal values from past frames.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.

* `framesCount` - the number of frames to track.
*/
history(framesCount: number): SignalHistory<Vec3>

/**
```
pinLastValue(): VectorSignal
```

Returns a new `VectorSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): VectorSignal

/**
```
rotate(rotation: QuaternionSignal): VectorSignal
```

Rotates the vector using the specified [`quaternion`](/classes/ReactiveModule.QuaternionSignal) value and returns the new vector as a `VectorSignal`.
See the main example at the top of this page or for the Patch Editor equivalent, see the [Rotate Vector Patch](https://sparkar.facebook.com/ar-studio/learn/patch-editor/utility-patches/rotate-vector-patch) article.
*/
rotate(rotation: QuaternionSignal): VectorSignal

}



/**

//============================================================================
// Rotates a vector of (1, 1, 1) by 45 degrees along the X-axis.
//
//============================================================================

// Load the required modules
const Reactive = require('Reactive');

(async function() { // Enable async/await in JS [part 1]

  // Create a new vector and rotation
  const vector = Reactive.vector(1, 1, 1);
  const eulerRotation = Reactive.vector(45, 0, 0);

  // Calculate the quaternion rotation
  let eulerAngles = eulerRotation.mul(Math.PI / 180);
  let quatRot = Reactive.quaternionFromEuler(eulerAngles.x, eulerAngles.y, eulerAngles.z);

  // Rotate the original vector by the specified quaternion rotation
  const rotatedVector = vector.rotate(quatRot);

})(); // Enable async/await in JS [part 2]

*/