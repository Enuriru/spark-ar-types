/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface Vec2Signal {
/**
* ```
(get) height: ScalarSignal
(set) (Not Available)
```

Represents the width of the size, or the second element of the vector.
*/
height: ScalarSignal;
/**
* ```
(get) width: ScalarSignal
(set) (Not Available)
```

Represents the width of the size, or the first element of the vector.
*/
width: ScalarSignal;
/**
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X coordinate of the point, or the first element of the vector.
*/
x: ScalarSignal;
/**
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y coordinate of the point, or the second element of the vector.
*/
y: ScalarSignal;
/**
*  
 * abs(): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * **See Also**: `ReactiveModule.abs`
 */
abs(): Vec2Signal;

/**
*  
 * add(other: ScalarSignal): Vec2Signal
 * add(other: Vec2Signal): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
add(other: ScalarSignal | number): Vec2Signal;

add(other: Vec2Signal): Vec2Signal;

/**
*  
 * atan2(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
 * **See Also**: `ScalarSignal.atan2`
 */
atan2(other: ScalarSignal | number): ScalarSignal;

/**
*  
 * ceil(): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.ceil`
 */
ceil(): Vec2Signal;

/**
*  
 * clamp(min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the given `x` signal constrained to lie between the values of the given `min` and `max` signals.
 * **Note**: The behavior is undefined if `min` is greater than `max`.
 */
clamp(min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * cross(other: VectorSignal): PointSignal
 *  
 * 
 * Returns a vector signal with the value that is the cross product of the given signals.
 * **See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
cross(other: VectorSignal): PointSignal;

/**
*  
 * distance(other: PointSignal): ScalarSignal
 *  
 * 
 * Returns the distance from the point to another point as a `ScalarSignal`.
 */
distance(other: PointSignal): ScalarSignal;

/**
*  
 * div(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
 * **See Also**: `ScalarSignal.div`
 */
div(other: ScalarSignal | number): ScalarSignal;

/**
*  
 * dot(other: VectorSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * **See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
dot(other: VectorSignal): ScalarSignal;

/**
*  
 * floor(): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.floor`
 */
floor(): Vec2Signal;

/**
*  
 * fromRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [min, max] range to [0.0, 1.0] range.
 */
fromRange(min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * history(framesCount: number, initialValues?: Array<Point2D>): SignalHistory<Point2D>
 *  
 * 
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * * `framesCount` - the number of frames to track.
 * * `initialValues` - an optional initial value to assign to the signal.
 */
history(framesCount: number, initialValues?: Array<Point2D>): SignalHistory<Point2D>;

/**
*  
 * magnitude(): ScalarSignal
 *  
 * 
 * Returns the magnitude of the vector as a `ScalarSignal`.
 */
magnitude(): ScalarSignal;

/**
*  
 * magnitudeSquared(): ScalarSignal
 *  
 * 
 * Returns the squared length (magnitude) of a given signal.
 * Calculating the squared magnitude instead of the magnitude is much faster.
 * Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
 */
magnitudeSquared(): ScalarSignal;

/**
*  
 * max(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the greater of the values of the given signals.
 */
max(other: ScalarSignal | number): ScalarSignal;

/**
*  
 * min(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the lesser of the values of the given signals.
 */
min(other: ScalarSignal | number): ScalarSignal;

/**
*  
 * mix(signal: ScalarSignal, factor: ScalarSignal): ScalarSignal
 * mix(signal: PointSignal, factor: ScalarSignal): PointSignal
 * mix(signal: VectorSignal, factor: ScalarSignal): VectorSignal
 * mix(signal: TransformSignal, factor: ScalarSignal): TransformSignal
 *  
 * 
 * Returns a signal with the value that is the linear interpolation between this and another signal by a given factor.
 */
mix(signal: ScalarSignal | number, factor: ScalarSignal | number): ScalarSignal;

mix(signal: PointSignal, factor: ScalarSignal | number): PointSignal;

mix(signal: VectorSignal, factor: ScalarSignal | number): VectorSignal;

mix(signal: TransformSignal, factor: ScalarSignal | number): TransformSignal;

/**
*  
 * mod(other: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
 * **See Also**: `ScalarSignal.mod`
 */
mod(other: ScalarSignal | number): ScalarSignal;

/**
*  
 * mul(other: ScalarSignal): Vec2Signal
 * mul(other: Vec2Signal): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * **See Also**: `ScalarSignal.mul`, `VectorSignal.mul`
 */
mul(other: ScalarSignal | number): Vec2Signal;

mul(other: Vec2Signal): Vec2Signal;

/**
*  
 * neg(): Vec2Signal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * **See Also**: `ScalarSignal.neg`, `VectorSignal.neg`
 */
neg(): Vec2Signal;

/**
*  
 * normalize(): VectorSignal
 *  
 * 
 * Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
 */
normalize(): VectorSignal;

/**
*  
 * pinLastValue(): Vec2Signal
 *  
 * 
 * Returns a new `Vec2Signal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 */
pinLastValue(): Vec2Signal;

/**
*  
 * pow(exponent: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the base signal raised to the power of the exponent signal.
 * The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.
 * 
 * **See Also**: `ScalarSignal.pow`
 */
pow(exponent: ScalarSignal | number): ScalarSignal;

/**
*  
 * reflect(normal: VectorSignal): VectorSignal
 *  
 * 
 * Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
 */
reflect(normal: VectorSignal): VectorSignal;

/**
*  
 * round(): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the rounded value of the given signal.
 * **Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.
 * 
 * **See Also**: `ScalarSignal.round`
 */
round(): Vec2Signal;

/**
*  
 * sign(): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
 * **Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.
 * 
 * **See Also**: `ScalarSignal.sign`
 */
sign(): Vec2Signal;

/**
*  
 * smoothStep(edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
 * If x is between edge0 and edge1, smooth Hermite interpolation is performed.
 */
smoothStep(edge0: ScalarSignal | number, edge1: ScalarSignal | number): ScalarSignal;

/**
*  
 * sqrt(): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * **See Also**: `ScalarSignal.sqrt`
 */
sqrt(): Vec2Signal;

/**
*  
 * sub(other: ScalarSignal): Vec2Signal
 * sub(other: Vec2Signal): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the difference of the values of the given signals.
 * **See Also**: `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
 */
sub(other: ScalarSignal | number): Vec2Signal;

sub(other: Vec2Signal): Vec2Signal;

/**
*  
 * sum(other: ScalarSignal): Vec2Signal
 * sum(other: Vec2Signal): Vec2Signal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
sum(other: ScalarSignal | number): Vec2Signal;

sum(other: Vec2Signal): Vec2Signal;

/**
*  
 * toRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */
toRange(min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

}
