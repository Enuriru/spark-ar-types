/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignalSource/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignalSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignalSource/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />

/**
The `ReactiveModule` class exposes methods for reactive programming.
*/
declare interface Reactive extends Module {

/**
```
HSVA(h: ScalarSignal | number, s: ScalarSignal | number, v: ScalarSignal | number, a: ScalarSignal | number): HsvaSignal
```

Combines four signals and returns the result as an `HsvaSignal`. Each value should be in the range between 0.0 and 1.0.
**Note**: Hue value is also specified in the range between 0.0 and 1.0.
*/
HSVA(h: ScalarSignal | number, s: ScalarSignal | number, v: ScalarSignal | number, a: ScalarSignal | number): HsvaSignal

/**
```
RGBA(r: ScalarSignal | number, g: ScalarSignal | number, b: ScalarSignal | number, a: ScalarSignal | number): RgbaSignal
```

Combines four signals and returns the result as an `RgbaSignal`. Each value should be in the range between 0.0 and 1.0.
**Note**: RGB components are interpreted in sRGB space.
*/
RGBA(r: ScalarSignal | number, g: ScalarSignal | number, b: ScalarSignal | number, a: ScalarSignal | number): RgbaSignal

/**
```
abs(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the absolute value of the given signal.
**See Also**: `ScalarSignal.abs`
*/
abs(x: ScalarSignal): ScalarSignal

/**
```
acos(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the inverse cosine of the value of the given signal (interpreted as radians).
*/
acos(x: ScalarSignal): ScalarSignal

/**
```
add(x: ScalarSignal, y: ScalarSignal): ScalarSignal
add(x: PointSignal, y: VectorSignal): PointSignal
add(x: VectorSignal, y: PointSignal): PointSignal
add(x: VectorSignal, y: VectorSignal): VectorSignal
```

Returns a signal with the value that is the sum of the values of the given signals.
**Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.

**See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
*/
add(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
and(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
```

Returns a signal with the value that is the logical conjunction of the values of the given signals. It is `true` every time both input signals are `true` and `false` at all other times.
**See Also**: `BoolSignal.and`
*/
and(lhs: BoolSignal, rhs: BoolSignal): BoolSignal

/**
```
andList(x: Array<BoolSignal>): BoolSignal
```

Returns a signal with the value that is the logical and of the values in an array
*/
andList(x: Array<BoolSignal>): BoolSignal

/**
```
antiderivative(signal: ScalarSignal, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal
```

Returns a signal that estimates the anti derivative of the given signal with respect to time (measured in milliseconds).
**Note**: Since the antiderivative is inherently unbound the min/max parameters must be provided to prevent overflow. when `overflowBehaviour` is CLAMP the output is clamped at the min/max. When `overflowBehaviour` is WRAP the output is wrapped. This is useful when the output represents something that is cyclic like an angle in this case min might be 0, max might be 2*PI.
*/
antiderivative(signal: ScalarSignal, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal

/**
```
asin(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the inverse sine of the value of the given signal (interpreted as radians).
*/
asin(x: ScalarSignal): ScalarSignal

/**
```
atan(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the inverse tangent of the value of the given signal (interpreted as radians).
*/
atan(x: ScalarSignal): ScalarSignal

/**
```
atan2(x: ScalarSignal, y: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
**See Also**: `ScalarSignal.atan2`
*/
atan2(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
boolSignalSource(sourceId: string): BoolSignalSource
```

Create a BoolSignalSource when could be used to update the signal value
*/
boolSignalSource(sourceId: string): BoolSignalSource

/**
```
boundingBox(x: ScalarSignal, y: ScalarSignal, width: ScalarSignal, height: ScalarSignal): Box2DSignal
```

Constructs a [`Box2DSignal`](/classes/reactivemodule.box2dsignal) with the dimensions specified by `width` and `height`, positioned at the location specified by `x` and `y`.
All arguments should be provided as normalized screen space units.

* `x` -  the x position of the top left corner of the bounding box.
* `y` - the y position of the top left corner of the bounding box.
* `width` - the width of the bounding box.
* `height` - the height of the bounding box.
*/
boundingBox(x: ScalarSignal, y: ScalarSignal, width: ScalarSignal, height: ScalarSignal): Box2DSignal

/**
```
box2d(x: ScalarSignal, y: ScalarSignal, width: ScalarSignal, height: ScalarSignal): Box2DSignal
```

Constructs a [`Box2DSignal`](/classes/reactivemodule.box2dsignal) with the dimensions specified by `width` and `height`, positioned at the location specified by `x` and `y`.
All arguments should be provided as normalized screen space units.

* `x` -  the x position of the top left corner of the bounding box.
* `y` - the y position of the top left corner of the bounding box.
* `width` - the width of the bounding box.
* `height` - the height of the bounding box.
*/
box2d(x: ScalarSignal, y: ScalarSignal, width: ScalarSignal, height: ScalarSignal): Box2DSignal

/**
```
box3d(min: PointSignal, max: PointSignal): Box3DSignal
```

Constructs a `Box3DSignal` with the provided `min` and `max` points.
* `min` -  the minimum point of the bounding box.
* `max` - the maximum point of the bounding box.
*/
box3d(min: PointSignal, max: PointSignal): Box3DSignal

/**
```
ceil(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
**See Also**: `ScalarSignal.ceil`
*/
ceil(x: ScalarSignal): ScalarSignal

/**
```
clamp(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the value of the given `x` signal constrained to lie between the values of the given `min` and `max` signals.
**Note**: The behavior is undefined if `min` is greater than `max`.
*/
clamp(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal

/**
```
concat(lhs: StringSignal, rhs: StringSignal): StringSignal
```

Returns a `StringSignal` containing the concatenation of the values specified by the input signals.
**See Also**: `StringSignal.concat`
*/
concat(lhs: StringSignal, rhs: StringSignal): StringSignal

/**
```
cos(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the cosine of the value of the given signal (interpreted as radians).
*/
cos(x: ScalarSignal): ScalarSignal

/**
```
cross(v1: VectorSignal, v2: VectorSignal): PointSignal
```

Returns a vector signal with the value that is the cross product of the given signals.
**See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
*/
cross(v1: VectorSignal, v2: VectorSignal): PointSignal

/**
```
derivative(signal: ScalarSignal): ScalarSignal
```

Returns a signal that estimates the derivative of the given signal with respect to time (measured in milliseconds).
**Note**: the value of the derivative at the initial point of time is always set to zero.
**Note**: the returned signal might be noisy for certain types of input signals, especially those received from the face tracking. It is recommended to pass the input signal to `expSmooth` first with a damping constant in the range between 100 and 500.
*/
derivative(signal: ScalarSignal): ScalarSignal

/**
```
distance(v1: PointSignal, v2: PointSignal): ScalarSignal
```

Returns the distance from the point to another point as a `ScalarSignal`.
*/
distance(v1: PointSignal, v2: PointSignal): ScalarSignal

/**
```
div(x: ScalarSignal, y: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
**See Also**: `ScalarSignal.div`
*/
div(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal
```

Returns a scalar signal with the value that is the dot product of the given signals.
**See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
*/
dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal

/**
```
eq(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
eq(lhs: StringSignal, rhs: StringSignal): BoolSignal
eq(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **equal** to the value of the right-hand-side one, and the value of `false` all other time.
**Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.

**See Also**: `ScalarSignal.eq`, `StringSignal.eq`, `BoolSignal.eq`
*/
eq(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
exp(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is e (the Euler's constant 2.718...) to the power of the value of the given signal.
*/
exp(x: ScalarSignal): ScalarSignal

/**
```
expSmooth(signal: ScalarSignal, dampFactor: number): ScalarSignal
expSmooth(signal: PointSignal, dampFactor: number): PointSignal
expSmooth(signal: VectorSignal, dampFactor: number): VectorSignal
expSmooth(signal: TransformSignal, dampFactor: number): TransformSignal
```

Smoothes a variable signal using exponential averaging over time. The argument specifies the dampening time constant in milliseconds.
**Note**: See also `ScalarSignal.expSmooth`, `PointSignal.expSmooth`, `VectorSignal.expSmooth`, `TransformSignal.expSmooth`.
**Note**: The smoothed transformation for a signal that specifies a rigid body transformation is guaranteed to be a rigid body transformation. The rotation component is smoothed in spherical coordinates using Slerp (spherical linear interpolation).
*/
expSmooth(signal: ScalarSignal, dampFactor: number): ScalarSignal

/**
```
floor(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
**See Also**: `ScalarSignal.floor`
*/
floor(x: ScalarSignal): ScalarSignal

/**
```
fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
```

Maps x from [min, max] range to [0.0, 1.0] range.
*/
fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal

/**
```
ge(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **greater than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ScalarSignal.ge`
*/
ge(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
gt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **greater than** the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ScalarSignal.gt`
*/
gt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
ifThenElse<T, U>(condition: BoolSignal | boolean, thenValue: EventSource<T>, elseValue: EventSource<U>): EventSource<T | U>
ifThenElse(condition: BoolSignal | boolean, thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal
ifThenElse(condition: BoolSignal | boolean, thenValue: StringSignal | string, elseValue: StringSignal | string): StringSignal
ifThenElse(condition: BoolSignal | boolean, thenValue: BoolSignal | boolean, elseValue: BoolSignal | boolean): BoolSignal
```

Returns a signal or an `EventSource` which at any point of time takes the value (passes the events in case of `EventSource`) of one or another inputs, depending on the momentary value of the given condition `BoolSignal`.
*/
ifThenElse(condition: BoolSignal | boolean, thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal

/**
```
le(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **less than or equal** to the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ScalarSignal.le`
*/
le(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
log(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the natural logarithm of the value of the given signal.
*/
log(x: ScalarSignal): ScalarSignal

/**
```
lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal
```

Creates a scene object transform with rotation in direction of target.
Default `eyeUp` is `ReactiveModule.vector(0, 1, 0)`.
**Note:** The eyeTransform needs to be pointing the scene object alongside the X axis.
*/
lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal

/**
```
lt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is strictly **less than** the value of the right-hand-side one, and the value of `false` all other time.
**See Also**: `ScalarSignal.lt`
*/
lt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
magnitude(v: VectorSignal): ScalarSignal
```

Returns the magnitude of the vector as a `ScalarSignal`.
*/
magnitude(v: VectorSignal): ScalarSignal

/**
```
magnitudeSquared(signal: ScalarSignal): ScalarSignal
magnitudeSquared(signal: Vec2Signal): ScalarSignal
magnitudeSquared(signal: VectorSignal): ScalarSignal
magnitudeSquared(signal: Vec4Signal): ScalarSignal
```

Returns the squared length (magnitude) of a given signal.
Calculating the squared magnitude instead of the magnitude is much faster.
Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
*/
magnitudeSquared(signal: ScalarSignal): ScalarSignal

/**
```
max(x: ScalarSignal, y: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the greater of the values of the given signals.
*/
max(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
merge<T>(lhs: EventSource<T>, rhs: EventSource<T>): EventSource<T>
```

merge -- takes two event streams and creates a new stream that emits all of inputs' events
note: currently if there are multiple events emitted same frame then the result stream
first emits all the events from the first source and then all the events from the second,
but this behavior might get changed
note: R.merge(x,y) is equivalent to x.merge(y)
TODO: consider introducing timestamps/sequences to events to do smarter merging on subframe level
TODO: consider generalizing to arbitrary number of inputs
Note: it is experimental because it's main area of usage is in conjunction with holdAsXXX and setTriggerForXXX
*/
merge(x,y) is equivalent to x.merge(y)

/**
```
min(x: ScalarSignal, y: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the lesser of the values of the given signals.
*/
min(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
mix(x: ScalarSignal, y: ScalarSignal, alpha: ScalarSignal): ScalarSignal
mix(x: PointSignal, y: PointSignal, alpha: ScalarSignal): PointSignal
mix(x: VectorSignal, y: VectorSignal, alpha: ScalarSignal): VectorSignal
mix(x: TransformSignal, y: TransformSignal, alpha: ScalarSignal): TransformSignal
```

Returns a signal with the value that is the interpolation of the values of the given signals.
*/
mix(x: ScalarSignal, y: ScalarSignal, alpha: ScalarSignal): ScalarSignal

/**
```
mod(x: ScalarSignal, y: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
**See Also**: `ScalarSignal.mod`
*/
mod(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>
```

Returns an `EventSource` that emits an event every time when any value of the input signals change. The event contains a JSON object with the old and new values in the format:
```
{ "oldValues": oldValues, "newValues": newValues }
```

where `oldValues` and `newValues` are the JSON objects where keys are the names of the signals and values are old or new values of that signals correspondingly.

**Note**: By default, there is no event fired for the initial value of the signal. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValues` is unset for this initial event.

**See Also**: `ReactiveModule.monitor`
*/
monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>

/**
```
mul(x: ScalarSignal, y: ScalarSignal): ScalarSignal
mul(x: VectorSignal, y: ScalarSignal): VectorSignal
mul(x: ScalarSignal, y: VectorSignal): VectorSignal
mul(x: VectorSignal, y: VectorSignal): VectorSignal
```

Returns a signal with the value that is the product of the values of the given signals.
**See Also**: `ScalarSignal.mul`, `VectorSignal.mul`
*/
mul(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
mulList(x: Array<number | ScalarSignal>): ScalarSignal
```

Returns a signal with the value that is the product of the values in an array
*/
mulList(x: Array<number | ScalarSignal>): ScalarSignal

/**
```
ne(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
ne(lhs: StringSignal, rhs: StringSignal): BoolSignal
ne(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **not equal** to the value of the right-hand-side one, and the value of `false` all other time.
**Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.

**See Also**: `ScalarSignal.ne`, `StringSignal.ne`, `BoolSignal.ne`
*/
ne(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
neg(x: ScalarSignal): ScalarSignal
neg(x: VectorSignal): VectorSignal
```

Returns a signal with the negated value of the given signal.
**See Also**: `ScalarSignal.neg`, `VectorSignal.neg`
*/
neg(x: ScalarSignal): ScalarSignal

/**
```
normalize(v: VectorSignal): VectorSignal
```

Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
*/
normalize(v: VectorSignal): VectorSignal

/**
```
not(signal: BoolSignal): BoolSignal
```

Returns a signal with the logically negated value of the given signal.
**See Also**: `BoolSignal.not`
*/
not(signal: BoolSignal): BoolSignal

/**
```
once(): EventSource<void>
```

Returns an `EventSource` that emits exactly one empty event as soon as possible.
*/
once(): EventSource<void>

/**
```
or(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
```

Returns a signal with the value that is the logical disjunction of the values of the given signals. It is `true` every time at least one of the input signals is `true` and `false` at all other times.
**See Also**: `BoolSignal.or`
*/
or(lhs: BoolSignal, rhs: BoolSignal): BoolSignal

/**
```
orList(x: Array<BoolSignal>): BoolSignal
```

Returns a signal with the value that is the logical or of the values in an array
*/
orList(x: Array<BoolSignal>): BoolSignal

/**
```
pack2(x: ScalarSignal, y: ScalarSignal): Vec2Signal
pack2(x: ScalarSignal, y: Vec2Signal): PointSignal
pack2(x: Vec2Signal, y: ScalarSignal): PointSignal
pack2(x: ScalarSignal, y: PointSignal): Vec4Signal
pack2(x: PointSignal, y: ScalarSignal): Vec4Signal
pack2(x: Vec2Signal, y: Vec2Signal): Vec4Signal
```

Packs two Scalar or Point signals into a bigger Point signal.
*/
pack2(x: ScalarSignal, y: ScalarSignal): Vec2Signal

/**
```
pack3(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal
pack3(x: ScalarSignal, y: ScalarSignal, z: Vec2Signal): Vec4Signal
pack3(x: ScalarSignal, y: Vec2Signal, z: ScalarSignal): Vec4Signal
pack3(x: Vec2Signal, y: ScalarSignal, z: ScalarSignal): Vec4Signal
```

Packs three Scalar or Point signals into a bigger Point signal.
*/
pack3(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal

/**
```
pack4(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal, w: ScalarSignal): Vec4Signal
```

Packs four `ScalarSignals` into a `Vec4Signal`.
*/
pack4(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal, w: ScalarSignal): Vec4Signal

/**
```
point(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal
```

Combines three signals and returns the result as a `PointSignal`.
*/
point(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal

/**
```
point2d(x: ScalarSignal | number, y: ScalarSignal | number): Vec2Signal
```

Combines two signals and returns the result as a `Vec2Signal`.
*/
point2d(x: ScalarSignal | number, y: ScalarSignal | number): Vec2Signal

/**
```
pow(base: ScalarSignal, exponent: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the base signal raised to the power of the exponent signal.
The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.

**See Also**: `ScalarSignal.pow`
*/
pow(base: ScalarSignal, exponent: ScalarSignal): ScalarSignal

/**
```
quaternion(w: ScalarSignal, x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
```

Construct a new quaternion signal with w, x, y, z components.
*/
quaternion(w: ScalarSignal, x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal

/**
```
quaternionFromAngleAxis(angle: ScalarSignal, axis: VectorSignal): QuaternionSignal
```

Construct a new quaternion from an angle and normalized axis.
*/
quaternionFromAngleAxis(angle: ScalarSignal, axis: VectorSignal): QuaternionSignal

/**
```
quaternionFromEuler(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
```

Construct a new quaternion signal from euler angles, representing pitch, yaw, roll respectively.
*/
quaternionFromEuler(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal

/**
```
quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal
```

Construct a new quaternion signal that represents required rotation to rotate vector `from` to vector `to`.
*/
quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal

/**
```
quaternionIdentity(): QuaternionSignal
```

Construct a new quaternion signal that represents an identity quaternion.
*/
quaternionIdentity(): QuaternionSignal

/**
```
quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal
```

Creates a new quaternion signal representing rotation in the direction of a normalized target direction vector.
Default selfUp is ReactiveModule.vector(0, 1, 0).
*/
quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal

/**
```
reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
```

Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
*/
reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal

/**
```
rotation(w: number, x: number, y: number, z: number): Rotation
```

Creates 'Rotation' from quaternion components
*/
rotation(w: number, x: number, y: number, z: number): Rotation

/**
```
round(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the rounded value of the given signal.
**Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.

**See Also**: `ScalarSignal.round`
*/
round(x: ScalarSignal): ScalarSignal

/**
```
scalarSignalSource(sourceId: string): ScalarSignalSource
```

Create a ScalarSignalSource when could be used to update the signal value
*/
scalarSignalSource(sourceId: string): ScalarSignalSource

/**
```
scale(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal
```

Combines three signals and returns the result as a `PointSignal`.
*/
scale(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal

/**
```
schmittTrigger(signal: ScalarSignal, config: {high: number, initialValue?: false | true, low: number}): BoolSignal
```

Returns a Boolean signal that is `true` when the input is strictly greater than the upper threshold, and `false` when it is strictly less than the lower threshold.
For input values between and including the thresholds, the Shmitt trigger returns the same value as at the previous update, or **initialValue** if this is the first update.
**Note**: The initialValue is assumed to be `false` if it isn't specified.
*/
schmittTrigger(signal: ScalarSignal, config: {high: number, initialValue?: false | true, low: number}): BoolSignal

/**
```
sign(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
**Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.

**See Also**: `ScalarSignal.sign`
*/
sign(x: ScalarSignal): ScalarSignal

/**
```
signalHistory<T>(source: EventSource<T>, count: number): EventSourceHistory<T>
signalHistory<T>(signal: Signal<T>, count: number, initialValues?: Array<T>): SignalHistory<T>
```

Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via framesCount parameter.
Historical signal values are going to be initialized with signal value at call time or using initialValues if provided.
*/
signalHistory

/**
```
sin(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the sine of the value of the given signal (interpreted as radians).
*/
sin(x: ScalarSignal): ScalarSignal

/**
```
smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
```

Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
If x is between edge0 and edge1, smooth Hermite interpolation is performed.
*/
smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal

/**
```
sqrt(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the square root of the value of the given signal.
**See Also**: `ScalarSignal.sqrt`
*/
sqrt(x: ScalarSignal): ScalarSignal

/**
```
step(x: ScalarSignal, edge: ScalarSignal): ScalarSignal
```

Returns 0.0 if x is less than edge, and 1.0 is returned otherwise.
*/
step(x: ScalarSignal, edge: ScalarSignal): ScalarSignal

/**
```
stringSignalSource(sourceId: string): StringSignalSource
```

Create a StringSignalSource when could be used to update the signal value
*/
stringSignalSource(sourceId: string): StringSignalSource

/**
```
sub(x: ScalarSignal, y: ScalarSignal): ScalarSignal
sub(x: PointSignal, y: VectorSignal): PointSignal
sub(x: VectorSignal, y: VectorSignal): VectorSignal
sub(x: PointSignal, y: PointSignal): VectorSignal
```

Returns a signal with the value that is the difference of the values of the given signals.
**See Also**: `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
*/
sub(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
sum(x: ScalarSignal, y: ScalarSignal): ScalarSignal
sum(x: PointSignal, y: VectorSignal): PointSignal
sum(x: VectorSignal, y: PointSignal): PointSignal
sum(x: VectorSignal, y: VectorSignal): VectorSignal
```

Returns a signal with the value that is the sum of the values of the given signals.
**Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.

**See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
*/
sum(x: ScalarSignal, y: ScalarSignal): ScalarSignal

/**
```
sumList(x: Array<number | ScalarSignal>): ScalarSignal
```

Returns a signal with the value that is the sum of the values in an array
*/
sumList(x: Array<number | ScalarSignal>): ScalarSignal

/**
```
switch(condition: StringSignal, map: {[key: string]: string}, defaultValue: string): StringSignal
```

Returns a signal which at any point of time takes the value of one of the elements in the provided map, or the provided default value, depending on the momentary value of the given condition Signal.
*/
switch(condition: StringSignal, map: {[key: string]: string}, defaultValue: string): StringSignal

/**
```
tan(x: ScalarSignal): ScalarSignal
```

Returns a signal with the value that is the tangent of the value of the given signal (interpreted as radians).
*/
tan(x: ScalarSignal): ScalarSignal

/**
```
toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
```

Maps x from [0.0, 1.0] range to [min, max] range.
*/
toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal

/**
```
val(constant: number): ScalarSignal
val(constant: string): StringSignal
val(constant: boolean): BoolSignal
```

Returns a signal that has a constant value which is specified by the argument.
**Note**: Primitive types are implicitly converted to constant signals when passed as function or property-setter arguments, therefore using `val` in such scenarios is not required.
*/
val(constant: number): ScalarSignal

/**
```
vector(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): VectorSignal
```

Combines three signals and returns the result as a `VectorSignal`.
*/
vector(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): VectorSignal

/**
```
xor(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal
```

Returns a signal with the value that is the logical exclusive disjunction of the values of the given signals. It is `true` every time exactly one of the input signals is `true` and `false` at all other times.
**Note**: It is equivalent to `ReactiveModule.ne`.

**See Also**: `BoolSignal.xor`
*/
xor(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal

/**
```
xorList(x: Array<BoolSignal>): BoolSignal
```

Returns a signal with the value that is the logical xor of the values in an array
*/
xorList(x: Array<BoolSignal>): BoolSignal

}



/**

//==========================================================================
// The following example demonstrates how to perform mathematical operations
// on signals and constant values.
//==========================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');

// Create a reference to the mouth openness scalar signal of a detected
// face
const mouthOpenness = FaceTracking.face(0).mouth.openness;

// Add 1 to the signal using the scalarSignal add() method
const mouthOpennessPlusOne = mouthOpenness.add(1);

// Multiply the signal by 2 using the reactive mul() method
const doubleMouthOpenness = Reactive.mul(mouthOpenness,2);

// Create a reference to the constant mouth openness value when this code
// is executed
const lastMouthOpenness = mouthOpenness.pinLastValue();

// Watch the signal values in the Console
Diagnostics.watch('Mouth Openness =>', mouthOpenness);
Diagnostics.watch('Mouth Openness + 1 =>', mouthOpennessPlusOne);
Diagnostics.watch('Mouth Openness * 2 =>', doubleMouthOpenness);

// Log the constant value in the Console
Diagnostics.log(lastMouthOpenness);

*/