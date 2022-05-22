/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface ScalarSignal {
/**
*  
 * abs(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * **See Also**: `ReactiveModule.abs`
 */
abs(): ScalarSignal;

/**
*  
 * add(other: ScalarSignal): ScalarSignal
 * add(other: VectorSignal): PointSignal
 * add(other: PointSignal): PointSignal
 * add(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
add(other: ScalarSignal | number): ScalarSignal;

add(other: VectorSignal): PointSignal;

add(other: PointSignal): PointSignal;

add(other: VectorSignal): VectorSignal;

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
 * ceil(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.ceil`
 */
ceil(): ScalarSignal;

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
 * delayBy(timeSpan: {milliseconds: number}): ScalarSignal
 *  
 * 
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */
delayBy(timeSpan: {milliseconds: number}): ScalarSignal;

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
 * eq(other: ScalarSignal | number): BoolSignal
 *  
 * 
 * Compares whether the signal's value is equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is equal to the value of `other` then `true` is returned. If the value is greater or lower than the value of `other` then `false` is returned.
 * 
 * The [`Reactive.eq()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `ScalarSignal` or number to compare against.
 */
eq(other: ScalarSignal | number): BoolSignal;

/**
*  
 * expSmooth(dampFactor: number): ScalarSignal
 *  
 * 
 * Smooths the specified variable signal using exponential averaging over time and returns the result as a signal of the same type.
 * The [`Reactive.expSmooth()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `dampFactor` - the dampening time constant, in milliseconds.
 */
expSmooth(dampFactor: number): ScalarSignal;

/**
*  
 * floor(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.floor`
 */
floor(): ScalarSignal;

/**
*  
 * format(formatString: string): StringSignal
 *  
 * 
 * Converts the value of the signal to a string and returns the result as a [`StringSignal`](/classes/ReactiveModule.StringSignal).
 *  
 * // Load in the required module
 * const FaceTracking = require('FaceTracking');
 * 
 * // Create a reference to the detected face's mouth openness value
 * const mouthOpenness = FaceTracking.face(0).mouth.openness;
 * 
 * // Format the full mouth openness value to a string
 * const opennessVal = mouthOpenness.format("Mouth openness is {} ");
 * 
 * // Format the mouth openness value to a string with two decimal places
 * const opennessTwoDecimals = mouthOpenness.format("Mouth openness is {:.2f} ");
 * 
 * // Format the mouth openness value to a string with four decimal places
 * const opennessFourDecimals = mouthOpenness.format("Mouth openness is {:.4f} ");
 * 
 * // Format the mouth openness value to a string using scientific notation
 * const opennessNotation = mouthOpenness.format("Mouth openness is {:e} ");
 *  
 * 
 * * `formatString` - the type of formatting to apply to the string. Use the Folly formatting rules described [here](https://github.com/facebook/folly/blob/master/folly/docs/Format.md#format-string-syntax) to configure the format.
 */
format(formatString: string): StringSignal;

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
 * ge(other: ScalarSignal | number): BoolSignal
 *  
 * 
 * Compares whether the signal's value is greater than or equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is greater than or equal to the value of `other` then `true` is returned. If the value is lower than the value of `other` then `false` is returned.
 * 
 * The [`Reactive.ge()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `ScalarSignal` or number to compare against.
 */
ge(other: ScalarSignal | number): BoolSignal;

/**
*  
 * gt(other: ScalarSignal | number): BoolSignal
 *  
 * 
 * Compares whether the signal's value is greater than the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is greater than the value of `other` then `true` is returned. If the value is lower than the value of `other`, or if the values are equal, `false` is returned.
 * 
 * The [`Reactive.gt()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `ScalarSignal` or number to compare against.
 */
gt(other: ScalarSignal | number): BoolSignal;

/**
*  
 * history(framesCount: number, initialValues?: Array<number>): SignalHistory<number>
 *  
 * 
 * Returns a [`SignalHistory`](/classes/ReactiveModule.SignalHistory) object containing the values of the signal from past frames.
 * Historical signal values are initialized with the signal's value at the time the method was called, or with `initialValues` if provided.
 * 
 * * `framesCount` - the number of previous frames to track.
 * * `initialValues` - optional initial values for the signal.
 */
history(framesCount: number, initialValues?: Array<number>): SignalHistory<number>;

/**
*  
 * interval(threshold: number): EventSource<number>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the signal increases to a value greater than or equal to `N * threshold`, where `N` is a value that starts at `1` and increases by `1` sequentially.
 * For every `N * threshold` instance the event is only emitted once. If the scalar signal decreases and subsequently increases again to a previous `N * threshold` value no event is emitted. As such, the method is best used with positive scalar values that increase progressively.
 * 
 * The argument passed to the callback function for the event contains the `N * threshold` value.
 * 
 *  
 * //============================================================================
 * // Load in the required modules
 * const FaceTracking = require('FaceTracking');
 * const Diagnostics = require('Diagnostics');
 * 
 * // Create a reference to the mouth openness value
 * const mouthOpen = FaceTracking.face(0).mouth.openness;
 * 
 * // Subscribe to the events emitted when the openness value increases to
 * // a multiple of 0.05. Each N * threshold occurence is only emitted once.
 * mouthOpen.interval(0.05).subscribe((val) => {
 * 
 *     // Log the 'N * threshold' value to the console
 *     Diagnostics.log(`Mouth openness value reached ${val}`);
 * });
 *  
 * 
 * * `threshold` - the value of the signal at which the event will be emitted at each `N` occurence. `threshold` must be a positive number.
 */
interval(threshold: number): EventSource<number>;

/**
*  
 * le(other: ScalarSignal | number): BoolSignal
 *  
 * 
 * Compares whether the signal's value is less than or equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is lower than or equal to the value of `other` then `true` is returned. If the value is greater than the value of `other` then `false` is returned.
 * 
 * The [`Reactive.le()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `ScalarSignal` or number to compare against.
 */
le(other: ScalarSignal | number): BoolSignal;

/**
*  
 * lt(other: ScalarSignal | number): BoolSignal
 *  
 * 
 * Compares whether the signal's value is less than the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is lower than the value of `other` then `true` is returned. If the value is greater than the value of `other`, or if the values are equal, `false` is returned.
 * 
 * The [`Reactive.lt()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `ScalarSignal` or number to compare against.
 */
lt(other: ScalarSignal | number): BoolSignal;

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
 * monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: number, oldValue: number}>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of the `ScalarSignal` changes.
 * The event contains a JSON object which provides the old and new values of the signal in the format `{ "oldValue": number, "newValue": number }`.
 * 
 *  
 * // Load in the required modules
 * const FaceTracking = require('FaceTracking');
 * const Diagnostics = require('Diagnostics');
 * 
 * // Create a reference to the number of detected faces
 * const faceCount = FaceTracking.count;
 * 
 * // Monitor changes to the value of the 'faceCount' signal
 * faceCount.monitor({fireOnInitialValue: false}).subscribe((event) => {
 * 
 *   // Log the old and new values to the console
 *   Diagnostics.log(`Old faceCount value: ${event.oldValue}`);
 *   Diagnostics.log(`New faceCount value: ${event.newValue}`);
 * });
 *  
 * 
 * * `config` - an optional configuration for the event source.
 * 
 * The `config` JSON object can have the following field:
 * 
 * **`fireOnInitialValue`** - specifies whether an initial event should be emitted containing the signal's initial value. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValue` will not be available for the first instance.
 */
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: number, oldValue: number}>;

/**
*  
 * mul(other: ScalarSignal): ScalarSignal
 * mul(other: ScalarSignal): VectorSignal
 * mul(other: VectorSignal): VectorSignal
 * mul(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * **See Also**: `ScalarSignal.mul`, `VectorSignal.mul`
 */
mul(other: ScalarSignal | number): ScalarSignal;

mul(other: ScalarSignal | number): VectorSignal;

mul(other: VectorSignal): VectorSignal;

mul(other: VectorSignal): VectorSignal;

/**
*  
 * multiTrigger(threshold: number): EventSource<number>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event every time the `ScalarSignal` increases to a value greater than or equal to `threshold`.
 * The argument passed to the callback function for the event contains the `threshold` value.
 * 
 *  
 * // Load in the required modules
 * const FaceTracking = require('FaceTracking');
 * const Diagnostics = require('Diagnostics');
 * 
 * 
 * // Create a reference to the number of detected faces
 * const faceCount = FaceTracking.count;
 * 
 * // Subscribe to the event emitted when faceCount reaches 1
 * faceCount.multiTrigger(1).subscribe((val) => {
 *   Diagnostics.log(val); // Logs '1' to the console
 * });
 *  
 * 
 * * `threshold` - the value of the signal at which the event will be emitted.
 */
multiTrigger(threshold: number): EventSource<number>;

/**
*  
 * ne(other: ScalarSignal | number): BoolSignal
 *  
 * 
 * Compares whether the signal's value is not equal to the value of the `ScalarSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is not equal to the value of `other` then `true` is returned. If the values are equal then `false` is returned.
 * 
 * The [`Reactive.ne()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `ScalarSignal` or number to compare against.
 */
ne(other: ScalarSignal | number): BoolSignal;

/**
*  
 * neg(): ScalarSignal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * **See Also**: `ScalarSignal.neg`, `VectorSignal.neg`
 */
neg(): ScalarSignal;

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
 * pin(): ScalarSignal
 *  
 * 
 * Returns a new `ScalarSignal` with a constant value, which is equal to the value that the original signal contained immediately after the method was called.
 */
pin(): ScalarSignal;

/**
*  
 * pinLastValue(): ConstScalarSignal
 *  
 * 
 * Returns a `ConstScalarSignal` with a constant value, which is equal to the value that the original signal contained immediately before the method was called.
 * Unlike `ScalarSignal` objects, `ConstScalarSignal` objects can be passed as an argument to methods that expect a primitive `number` type.
 */
pinLastValue(): ConstScalarSignal;

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
 * round(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the rounded value of the given signal.
 * **Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.
 * 
 * **See Also**: `ScalarSignal.round`
 */
round(): ScalarSignal;

/**
*  
 * schmittTrigger(config: {high: number, initialValue?: false | true, low: number}): BoolSignal
 *  
 * 
 * Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) with `true` if the signal is higher than the upper threshold specified, or `false` if the signal is lower than the lower threshold specified.
 * If the signal contains a value within, or equal to, the threshold values this method returns the same boolean value it contained in the previous update, or the value specified by `initialValue` if this is the first update.
 * 
 *  
 * // Load in the required module
 * const FaceTracking = require('FaceTracking');
 * 
 * // Create a reference to the mouth openness of the detected face
 * const mouthOpen = FaceTracking.face(0).mouth.openness;
 * 
 * const valAboveThreshold = mouthOpen.schmittTrigger({
 *   "low": 0.3,
 *   "high": 0.7,
 *   "initialValue": false
 * });
 *  
 * 
 * * `config` - the configuration for the threshold values.
 * 
 * The `config` JSON object can have the following fields:
 * 
 * **`low`** - the lower threshold. If the signal is lower than this, the method returns `false`.
 * **`high`** - the upper threshold. If the signal is higher than this, the method returns `true`.
 * **`initialValue`** - an optional initial value for the boolean returned by the method. If no value is specified, this is set to `false` by default.
 */
schmittTrigger(config: {high: number, initialValue?: false | true, low: number}): BoolSignal;

/**
*  
 * sign(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
 * **Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.
 * 
 * **See Also**: `ScalarSignal.sign`
 */
sign(): ScalarSignal;

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
 * sqrt(): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * **See Also**: `ScalarSignal.sqrt`
 */
sqrt(): ScalarSignal;

/**
*  
 * sub(other: ScalarSignal): ScalarSignal
 * sub(other: VectorSignal): PointSignal
 * sub(other: VectorSignal): VectorSignal
 * sub(other: PointSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the difference of the values of the given signals.
 * **See Also**: `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
 */
sub(other: ScalarSignal | number): ScalarSignal;

sub(other: VectorSignal): PointSignal;

sub(other: VectorSignal): VectorSignal;

sub(other: PointSignal): VectorSignal;

/**
*  
 * sum(other: ScalarSignal): ScalarSignal
 * sum(other: VectorSignal): PointSignal
 * sum(other: PointSignal): PointSignal
 * sum(other: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
sum(other: ScalarSignal | number): ScalarSignal;

sum(other: VectorSignal): PointSignal;

sum(other: PointSignal): PointSignal;

sum(other: VectorSignal): VectorSignal;

/**
*  
 * toRange(min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */
toRange(min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * toString(): StringSignal
 *  
 * 
 * Converts a `ScalarSignal` to a `StringSignal` according to the default string formatting rules.
 * **Note**: `ScalarSignal.format` allows more flexible control over the way the number is converted to string.
 */
toString(): StringSignal;

/**
*  
 * trigger(threshold: number): EventSource<number>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event the first time the `ScalarSignal` increases to a value greater than or equal to `threshold`.
 * Only a single event is ever emitted by the returned `EventSource`.
 * 
 * The argument passed to the callback function for the event contains the `threshold` value.
 * 
 * Calling this method with a positive `threshold` value is equivalent to calling `EventSource.interval(threshold).take(1)`.
 * 
 *  
 * // Load in the required modules
 * const FaceTracking = require('FaceTracking');
 * const Diagnostics = require('Diagnostics');
 * 
 * 
 * // Create a reference to the number of detected faces
 * const faceCount = FaceTracking.count;
 * 
 * // Subscribe to the event emitted when faceCount reaches 1
 * faceCount.trigger(1).subscribe((val) => {
 *   Diagnostics.log(val); // Logs '1' to the console
 * });
 *  
 * 
 * * `threshold` - the value of the signal at which the event will be emitted.
 */
trigger(threshold: number): EventSource<number>;

}
