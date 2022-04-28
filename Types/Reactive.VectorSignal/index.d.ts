/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />

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
abs(): ScalarSignal
```

Returns a signal with the value that is the absolute value of the given signal.
**See Also**: `ReactiveModule.abs`
*/
abs(): ScalarSignal

/**
```
add(other: ScalarSignal): ScalarSignal
add(other: VectorSignal): PointSignal
add(other: PointSignal): PointSignal
add(other: VectorSignal): VectorSignal
```

Returns a signal with the value that is the sum of the values of the given signals.
**Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.

**See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
*/
add(other: ScalarSignal): ScalarSignal

/**
```
atan2(other: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
**See Also**: `ScalarSignal.atan2`
*/
atan2(other: ScalarSignal): ScalarSignal

/**
```
ceil(): ScalarSignal
```

Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
**See Also**: `ScalarSignal.ceil`
*/
ceil(): ScalarSignal

/**
```
clamp(min: ScalarSignal, max: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the value of the given `x` signal constrained to lie between the values of the given `min` and `max` signals.
**Note**: The behavior is undefined if `min` is greater than `max`.
*/
clamp(min: ScalarSignal, max: ScalarSignal): ScalarSignal

/**
```
cross(other: VectorSignal): PointSignal
```

Returns a vector signal with the value that is the cross product of the given signals.
**See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
*/
cross(other: VectorSignal): PointSignal

/**
```
delayBy(timeSpan: {milliseconds: number}): ISignal
```

Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
*/
delayBy(timeSpan: {milliseconds: number}): ISignal

/**
```
distance(other: PointSignal): ScalarSignal
```

Returns the distance from the point to another point as a `ScalarSignal`.
*/
distance(other: PointSignal): ScalarSignal

/**
```
div(other: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
**See Also**: `ScalarSignal.div`
*/
div(other: ScalarSignal): ScalarSignal

/**
```
dot(other: VectorSignal): ScalarSignal
```

Returns a scalar signal with the value that is the dot product of the given signals.
**See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
*/
dot(other: VectorSignal): ScalarSignal

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
floor(): ScalarSignal
```

Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
**See Also**: `ScalarSignal.floor`
*/
floor(): ScalarSignal

/**
```
fromRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal
```

Maps x from [min, max] range to [0.0, 1.0] range.
*/
fromRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal

/**
```
history(framesCount: number): SignalHistory<Vec3>
```

Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
*/
history(framesCount: number): SignalHistory<Vec3>

/**
```
magnitude(): ScalarSignal
```

Returns the magnitude of the vector as a `ScalarSignal`.
*/
magnitude(): ScalarSignal

/**
```
magnitudeSquared(): ScalarSignal
```

Returns the squared length (magnitude) of a given signal.
Calculating the squared magnitude instead of the magnitude is much faster.
Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
*/
magnitudeSquared(): ScalarSignal

/**
```
max(other: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the greater of the values of the given signals.
*/
max(other: ScalarSignal): ScalarSignal

/**
```
min(other: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the lesser of the values of the given signals.
*/
min(other: ScalarSignal): ScalarSignal

/**
```
mix(signal: ScalarSignal, factor: ScalarSignal): ScalarSignal
mix(signal: PointSignal, factor: ScalarSignal): PointSignal
mix(signal: VectorSignal, factor: ScalarSignal): VectorSignal
mix(signal: TransformSignal, factor: ScalarSignal): TransformSignal
```

Returns a signal with the value that is the linear interpolation between this and another signal by a given factor.
*/
mix(signal: ScalarSignal, factor: ScalarSignal): ScalarSignal

/**
```
mod(other: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
**See Also**: `ScalarSignal.mod`
*/
mod(other: ScalarSignal): ScalarSignal

/**
```
mul(other: ScalarSignal): ScalarSignal
mul(other: ScalarSignal): VectorSignal
mul(other: VectorSignal): VectorSignal
mul(other: VectorSignal): VectorSignal
```

Returns a signal with the value that is the product of the values of the given signals.
**See Also**: `ScalarSignal.mul`, `VectorSignal.mul`
*/
mul(other: ScalarSignal): ScalarSignal

/**
```
neg(): ScalarSignal
```

Returns a signal with the negated value of the given signal.
**See Also**: `ScalarSignal.neg`, `VectorSignal.neg`
*/
neg(): ScalarSignal

/**
```
normalize(): VectorSignal
```

Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
*/
normalize(): VectorSignal

/**
```
pinLastValue(): VectorSignal
```

Returns a new `VectorSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
*/
pinLastValue(): VectorSignal

/**
```
pow(exponent: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the base signal raised to the power of the exponent signal.
The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.

**See Also**: `ScalarSignal.pow`
*/
pow(exponent: ScalarSignal): ScalarSignal

/**
```
reflect(normal: VectorSignal): VectorSignal
```

Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
*/
reflect(normal: VectorSignal): VectorSignal

/**
```
round(): ScalarSignal
```

Returns a signal with the value that is the rounded value of the given signal.
**Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.

**See Also**: `ScalarSignal.round`
*/
round(): ScalarSignal

/**
```
sign(): ScalarSignal
```

Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
**Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.

**See Also**: `ScalarSignal.sign`
*/
sign(): ScalarSignal

/**
```
smoothStep(edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
```

Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
If x is between edge0 and edge1, smooth Hermite interpolation is performed.
*/
smoothStep(edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal

/**
```
sqrt(): ScalarSignal
```

Returns a signal with the value that is the square root of the value of the given signal.
**See Also**: `ScalarSignal.sqrt`
*/
sqrt(): ScalarSignal

/**
```
sub(other: ScalarSignal): ScalarSignal
sub(other: VectorSignal): PointSignal
sub(other: VectorSignal): VectorSignal
sub(other: PointSignal): VectorSignal
```

Returns a signal with the value that is the difference of the values of the given signals.
**See Also**: `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
*/
sub(other: ScalarSignal): ScalarSignal

/**
```
sum(other: ScalarSignal): ScalarSignal
sum(other: VectorSignal): PointSignal
sum(other: PointSignal): PointSignal
sum(other: VectorSignal): VectorSignal
```

Returns a signal with the value that is the sum of the values of the given signals.
**Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.

**See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
*/
sum(other: ScalarSignal): ScalarSignal

/**
```
toRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal
```

Maps x from [0.0, 1.0] range to [min, max] range.
*/
toRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal

}
