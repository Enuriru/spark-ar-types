/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />

/**
The `ScalarSignal` class monitors a numerical value.
*/
declare interface ScalarSignal {

/**
```
(get) lastValue: number
(set) (Not Available)
```

Specifies a number that represents the last value of the signal.
**Note**: The signal value is updated during simulation tick. This means that the value of `lastValue` is undefined before its first update. It is also undefined for signals that aren't used for any bindings/subscriptions, because those signals aren't guaranteed to be updated at each simulation tick.
*/
lastValue: number

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
delay(): ScalarSignal
```

*/
delay(): ScalarSignal

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
eq(other: ScalarSignal | number): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **equal** to the value of the right-hand-side one, and the value of `false` all other time.
**Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.

**See Also**: `ReactiveModule.eq`
*/
eq(other: ScalarSignal | number): BoolSignal

/**
```
expSmooth(dampFactor: number): ScalarSignal
```

Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
**Note**: See also `ReactiveModule.expSmooth`.
*/
expSmooth(dampFactor: number): ScalarSignal

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
format(formatString: string): StringSignal
```

Converts a `ScalarSignal` to a `StringSignal` according to the supplied formatting string.
**Note**: `formatString` shall conform to the Folly formatting rules as specified here: https://github.com/facebook/folly/blob/master/folly/docs/Format.md#format-string-syntax .

**See Also**: `ScalarSignal.toString`.
*/
format(formatString: string): StringSignal

/**
```
fromRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal
```

Maps x from [min, max] range to [0.0, 1.0] range.
*/
fromRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal

/**
```
ge(other: ScalarSignal | number): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **greated than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ReactiveModule.ge`
*/
ge(other: ScalarSignal | number): BoolSignal

/**
```
gt(other: ScalarSignal | number): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **greated than** the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ReactiveModule.gt`
*/
gt(other: ScalarSignal | number): BoolSignal

/**
```
history(framesCount: number, initialValues?: Array<number>): SignalHistory<number>
```

Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
*/
history(framesCount: number, initialValues?: Array<number>): SignalHistory<number>

/**
```
interval(threshold: number): EventSource<number>
```

Returns an `EventSource` that emits an event whenever the supplied `ScalarSignal` first passes (becomes greater than or equal) a value of `N*threshold`, N = 1, 2, 3, ... Events are signaled in increasing order of N, starting from 1, with no omissions. For each value of N, the respective event is fired only once.
The emitted event (the argument passed to the callback function) has the value of corresponding `N*threshold`.

**Note**: The threshold must be a positive number.

**Note**: `interval` is mostly useful for non-negative non-decreasing scalar signals.

**See Also**: `ReactiveModule.trigger`, `ReactiveModule.multiTrigger`.
*/
interval(threshold: number): EventSource<number>

/**
```
le(other: ScalarSignal | number): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **less than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ReactiveModule.le`
*/
le(other: ScalarSignal | number): BoolSignal

/**
```
lt(other: ScalarSignal | number): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **less than** the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ReactiveModule.lt`
*/
lt(other: ScalarSignal | number): BoolSignal

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
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: number, oldValue: number}>
```

Returns an `EventSource` that emits an event every time the value of the input signal changes. The event contains a JSON object with the old and new values in the format:
```
{ "oldValue": number, "newValue": number }
```

**Note**: By default, there is no event fired for the initial value of the signal. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
*/
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: number, oldValue: number}>

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
multiTrigger(threshold: number): EventSource<number>
```

Returns an `EventSource` that fires **every time** the signal raises to (becomes greater than or equal after being less than) the value of `threshold`.
The emitted event (the argument passed to the callback function) has the value of `threshold`.

**Note**: The initial value of the signal is assumed to be 0.0.

**See Also**: `ReactiveModule.trigger`, `ReactiveModule.interval`.
*/
multiTrigger(threshold: number): EventSource<number>

/**
```
ne(other: ScalarSignal | number): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **not equal** to the value of the right-hand-side one, and the value of `false` all other time.
**Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.

**See Also**: `ReactiveModule.ne`
*/
ne(other: ScalarSignal | number): BoolSignal

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
pin(): ScalarSignal
```

Returns a `ScalarSignal` containing a constant value which is the value of the specified signal immediately after `pin` is called.
*/
pin(): ScalarSignal

/**
```
pinLastValue(): ConstScalarSignal
```

Returns a `ConstScalarSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
ConstScalarSignal can be passed to a functions which accept numbers.
*/
pinLastValue(): ConstScalarSignal

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
schmittTrigger(config: {high: number, initialValue?: false | true, low: number}): BoolSignal
```

Returns a Boolean signal that is `true` when the input is strictly greater than the upper threshold, and `false` when it is strictly less than the lower threshold.
For input values between and including the thresholds, the Shmitt trigger returns the same value as at the previous update, or **initialValue** if this is the first update.
**Note**: The initialValue is assumed to be `false` if it isn't specified.
*/
schmittTrigger(config: {high: number, initialValue?: false | true, low: number}): BoolSignal

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

/**
```
toString(): StringSignal
```

Converts a `ScalarSignal` to a `StringSignal` according to the default string formatting rules.
**Note**: `ScalarSignal.format` allows more flexible control over the way the number is converted to string.
*/
toString(): StringSignal

/**
```
trigger(threshold: number): EventSource<number>
```

Returns an `EventSource` that fires **the first time** the value of the signal raises (becomes greater than or equal) to the level of `threshold`. No more than one event is ever emitted by this `EventSource`.
The emitted event (the argument passed to the callback function) has the value of `threshold`.

**Note**: for positive thresholds, `trigger` is equivalent to `interval(threshold).take(1)`.

**See Also**: `ReactiveModule.multiTrigger`, `ReactiveModule.interval`.
*/
trigger(threshold: number): EventSource<number>

}



/**

// Load in the required modules
const Animation = require('Animation');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

// Enable async/await in JS [part 1]
(async function() {
  // Access a plane inserted in the scene
  const [plane] = await Promise.all([
    Scene.root.findFirst('plane0')
  ]);

  // Use pinLastValue as a way of getting the intial Y position of the plane
  const planeInitialYPosition = plane.transform.y.pinLastValue();
  // Define an end value using the negative Y value of the plane
  const planeEndYPosition = plane.transform.y.mul(-1).pinLastValue();

  // Create a timeDriver to set the duration of our animation
  const timeDriver = Animation.timeDriver({durationMilliseconds: 5000});
  // Create a linear sampler using the positions defined above as the start and end points
  let linearSampler = Animation.samplers.linear(planeInitialYPosition, planeEndYPosition);

  // Bind the Y position of the plane to an animation using the driver and sampler and
  // start the timeDriver
  plane.transform.y = Animation.animate(timeDriver, linearSampler);
  timeDriver.start();

  // Register a tap event on the plane
  TouchGestures.onTap(plane).subscribe(() => {
    // Redefine the linear sampler using the last Y value of the plane and the intial y value stored earlier
    linearSampler = Animation.samplers.linear(plane.transform.y.pinLastValue(), planeInitialYPosition);
    // Bind the Y position of the plane to an animation using the updated sampler and reset the time driver
    plane.transform.y = Animation.animate(timeDriver, linearSampler);
    timeDriver.reset();
  });
// Enable async/await in JS [part 2]
})();

*/