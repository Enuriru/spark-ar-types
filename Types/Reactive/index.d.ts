/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />

/**
Exposes functionality for performing mathematical and logical operations with [signals](https://sparkar.facebook.com/ar-studio/learn/scripting/signals).
As the Spark AR API uses a [reactive](https://sparkar.facebook.com/ar-studio/learn/scripting/reactive-programming) model to propagate data and values, regular JavaScript mathematical operations are not valid. Instead methods exposed by the `Reactive` module should be used, for example `Reactive.add(scalarSignalX, scalarSignalY);` adds two `ScalarSignal`s together.


The module also exposes classes that describe signal equivalents for basic data types such as booleans and strings, as well as signal types specific to Spark AR.
*/
declare interface Reactive extends Module {

/**
```
HSVA(h: ScalarSignal | number, s: ScalarSignal | number, v: ScalarSignal | number, a: ScalarSignal | number): HsvaSignal
```

Constructs an [`HsvaSignal`](/classes/ReactiveModule.HsvaSignal) object from the individual component values specified.
The [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or number passed into each component must contain a value between `0.0` and `1.0`.

* `h` - the hue component of the HSVA signal.
* `s` - the saturation component of the HSVA signal.
* `v` - the value component of the HSVA signal.
* `a` - the alpha component of the HSVA signal.
*/
HSVA(h: ScalarSignal | number, s: ScalarSignal | number, v: ScalarSignal | number, a: ScalarSignal | number): HsvaSignal

/**
```
RGBA(r: ScalarSignal | number, g: ScalarSignal | number, b: ScalarSignal | number, a: ScalarSignal | number): RgbaSignal
```

Constructs an [`RgbaSignal`](/classes/ReactiveModule.RgbaSignal) object from the individual component values specified.
The [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or number passed into each component must contain a value between `0.0` and `1.0`.

The RGB components are interpreted in sRGB color space.

* `r` - the red component of the RGBA signal.
* `g` - the blue component of the RGBA signal.
* `b` - the green component of the RGBA signal.
* `a` - the alpha component of the RGBA signal.
*/
RGBA(r: ScalarSignal | number, g: ScalarSignal | number, b: ScalarSignal | number, a: ScalarSignal | number): RgbaSignal

/**
```
andList(x: Array<BoolSignal>): BoolSignal
```

Performs a logical AND operation with the array of `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If all signals in the array are `true` then `true` is returned, otherwise `false` is returned.

* `x` - the array of booleans to perform the logical AND operation with.
*/
andList(x: Array<BoolSignal>): BoolSignal

/**
```
antiderivative(signal: ScalarSignal, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal
```

Estimates the antiderivative of the specified `ScalarSignal` with respect to time (in milliseconds) and returns the result as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
* `signal` - the value to calculate the antiderivative of.
* `config` - the configuration for the antiderivative output.

The `config` JSON object can have the following fields:

**`min`** - the minimum value of the antiderivative output, if `overflowBehaviour` is set to `CLAMP`.
**`max`** - the maximum value of the antiderivative output, if `overflowBehaviour` is set to `CLAMP`.
**`initialValue`** - the initial value of the antiderivative output.
**`overflowBehavior`** - how the antiderivative output should behave when the values exceed `min` and `max`, as an [`AntiderivativeOverflowBehavior`](/enums/reactivemodule.antiderivativeoverflowbehaviour) enum value. If set to `CLAMP`, the output is clamped to the `min` and `max` values. If set to `WRAP`, the output is wrapped around to the `min` value if `max` is exceeded and vice versa. The latter is often used when the output represents a cyclic value, such as an angle, which may have a `min` of `0` and a `max` of `2 * PI` for example.
*/
antiderivative(signal: ScalarSignal, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal

/**
```
boundingBox(x: ScalarSignal, y: ScalarSignal, width: ScalarSignal, height: ScalarSignal): Box2DSignal
```

Constructs a [`Box2DSignal`](/classes/reactivemodule.box2dsignal) with the dimensions specified by `width` and `height`, positioned at the location specified by `x` and `y`.
All arguments should be provided as normalized screen space units.

* `x` - the x position of the top left corner of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
* `y` - the y position of the top left corner of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
* `width` - the width of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
* `height` - the height of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
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
concat(lhs: StringSignal, rhs: StringSignal): StringSignal
```

Joins two `StringSignal` objects and returns the result as a new [`StringSignal`](/classes/ReactiveModule.StringSignal).
The values of the existing `StringSignal`s passed as arguments are unaffected.

`StringSignal` objects provide their own equivalent [`concat()`](/classes/ReactiveModule.StringSignal#methods) method that can be called directly from the object instead of through `Reactive.concat()`.

```
var string0 = Reactive.val("Hello ");
var string1 = Reactive.val("world!");

var string2 = Reactive.concat(string0, string1);
// Value of 'string2': Hello world!
```

* `lhs` - the first string to concatenate.
* `rhs` - the second string to concatenate.
*/
concat(lhs: StringSignal, rhs: StringSignal): StringSignal

/**
```
derivative(signal: ScalarSignal): ScalarSignal
```

Estimates the derivative of the specified `ScalarSignal` with respect to time (in milliseconds) and returns the result as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
As the rate of change is calculated with respect to time elapsed, the initial value of the derivative is always zero.

Input signals with constantly updating values, such as the `openness` signal exposed by the [`Mouth`](/classes/FaceTrackingModule.Mouth#properties) class, may produce a noisy derivative value. In these instances, it's recommended to first pass the input signal to the `Reactive.expSmooth()` method with a `dampFactor` between `100` and `500` before passing to this method.

* `signal` - the value to calculate the derivative of.
*/
derivative(signal: ScalarSignal): ScalarSignal

/**
```
eq(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
eq(lhs: StringSignal, rhs: StringSignal): BoolSignal
eq(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
```

Compares whether the left hand side signal's value is equal to the right hand side signal's value and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
[`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`StringSignal`](/classes/ReactiveModule.StringSignal) and [`BoolSignal`](/classes/ReactiveModule.BoolSignal) objects can all be compared against another signal of the same type.

If the values are equal `true` is returned, otherwise `false` is returned.

The above object types also provide their own equivalent `eq()` method that can be called directly from the object instead of through `Reactive.eq()`.

* `lhs` - the first signal to compare.
* `rhs` - the second signal to compare.
*/
eq(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
expSmooth(signal: ScalarSignal, dampFactor: number): ScalarSignal
expSmooth(signal: PointSignal, dampFactor: number): PointSignal
expSmooth(signal: VectorSignal, dampFactor: number): VectorSignal
expSmooth(signal: TransformSignal, dampFactor: number): TransformSignal
```

Smooths the specified variable signal using exponential averaging over time and returns the result as a signal of the same type.
The smoothed transformation for a signal that specifies a rigid body transformation is guaranteed to also be a rigid body transformation. The rotation component is smoothed in spherical coordinates using spherical linear interpolation (Slerp).

[`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`PointSignal`](/classes/ReactiveModule.PointSignal), [`VectorSignal`](/classes/ReactiveModule.VectorSignal) and [`TransformSignal`](/classes/ReactiveModule.TransformSignal) objects each provide their own equivalent `expSmooth()` method that can be called directly from the object instead of through `Reactive.expSmooth()`.

* `signal` - the signal to smooth.
* `dampFactor` - the dampening time constant, in milliseconds.
*/
expSmooth(signal: ScalarSignal, dampFactor: number): ScalarSignal

/**
```
ge(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is greater than or equal to the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the left hand value is greater than or equal to the right hand value `true` is returned. If the left hand value is lower `false` is returned.

`ScalarSignal` objects provide their own equivalent [`ge()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.ge()`.

* `lhs` - the first scalar value to compare.
* `rhs` - the second scalar value to compare.
*/
ge(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
gt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is greater than the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the left hand value is greater than the right hand value `true` is returned. If the left hand value is lower, or if the values are equal, `false` is returned.

`ScalarSignal` objects provide their own equivalent [`gt()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.gt()`.

* `lhs` - the first scalar value to compare.
* `rhs` - the second scalar value to compare.
*/
gt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
le(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is less than or equal to the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the left hand value is lower than or equal to the right hand value `true` is returned. If the left hand value is greater `false` is returned.

`ScalarSignal` objects provide their own equivalent [`le()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.le()`.

* `lhs` - the first scalar value to compare.
* `rhs` - the second scalar value to compare.
*/
le(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal
```

Returns a [`TransformSignal`](/classes/ReactiveModule.TransformSignal) object with its `rotation` set in the direction of the specified target.
Create a new null object in Spark AR Studio and place the object to use as the 'eye' object within it. Then, pass the null object's transform to the `lookAt` method, for example:

```
(async function () {  // Enables async/await in JS [part 1]

  // Locate the objects in the scene
  const [nullObject, plane0, plane1] = await Promise.all([

    // The object to rotate's null parent object
    Scene.root.findFirst('nullObject0'),

    // The object to rotate
    Scene.root.findFirst('plane0'),

    // The object to look at
    Scene.root.findFirst('plane1')
  ]);

  // Create a new transform with rotation set in the direction of the target
  // The null object's transform is passed as the 'eyeTransform' argument
  // instead of the plane0's transform
  const lookAtTransform = Reactive.lookAt(nullObject.transform.toSignal(),
                                           plane1.transform.position);

  // Update the plane0 object's rotation with the rotational values from the
  // 'lookAt' transform signal
  plane0.transform.rotationX = lookAtTransform.rotationX;
  plane0.transform.rotationY = lookAtTransform.rotationY;
  plane0.transform.rotationZ = lookAtTransform.rotationZ;

})(); // Enables async/await in JS [part 2]
```

* `eyeTransform` - the transform of the 'eye' object that is looking at the target object, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal). This transform needs to point the scene object along the x axis.
* `targetPosition` - the position of the target object, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
* `eyeUp` - an optional [`VectorSignal`](/classes/ReactiveModule.VectorSignal) specifying the 'up' direction of the eye origin. If no value is specified, a vector of `(0, 1, 0)` is used by default.
*/
lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal

/**
```
lt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
```

Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is less than the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If the left hand value is lower than the right hand value `true` is returned. If the left hand value is greater, or if the values are equal, `false` is returned.

`ScalarSignal` objects provide their own equivalent [`lt()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.lt()`.

* `lhs` - the first scalar value to compare.
* `rhs` - the second scalar value to compare.
*/
lt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

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
monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of any of the specified input signals changes.
The event contains a JSON object which provides the old and new values of the signals in the format `{ "oldValues": oldValues, "newValues": newValues }`.

`oldValues` is itself a JSON object, the keys of which are the names of the signals as specified in the method call and the values of which are each signals' previous values. The `newValues` JSON object uses the same keys but provides each signals' new value.

* `signals` - the array of [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal)s to track the values of.
* `config` - an optional configuration for the event source.

The `config` JSON object can have the following field:
**`fireOnInitialValue`** - Specifies whether an initial event should be emitted containing the signals' initial values. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValues` will not be available for the first instance.

```
// Load in the required modules
const Reactive = require('Reactive');
const HandTracking = require('HandTracking');

// Create a new ScalarSignal
var scalarValue = Reactive.val(1);

// Monitor changes to the values of the hand tracking count or
// 'scalarValue' signals
Reactive.monitorMany({
    "handsDetected": HandTracking.count,
    "scalarValue": scalarValue
  },

  {fireOnInitialValue: false}).subscribe((event) => {
    // Log the old and new values of the hand tracking count signal
    Diagnostics.log(`Old hand count value: ${event.oldValues.handsDetected}`);
    Diagnostics.log(`New hand count value: ${event.newValues.handsDetected}`);
});
```
*/
monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>

/**
```
mulList(x: Array<number | ScalarSignal>): ScalarSignal
```

Returns a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) containing the value that is the product of all of the values in the array specified.
```
const numArray = [2, 3, 4];
const arrayMul = Reactive.mulList(numArray); // Returns 24 (2 * 3 * 4)
```

* `x` - an array of numbers and/or [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal)s to multiply together.
*/
mulList(x: Array<number | ScalarSignal>): ScalarSignal

/**
```
ne(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
ne(lhs: StringSignal, rhs: StringSignal): BoolSignal
ne(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
```

Compares whether the left hand side signal's value is not equal to the right hand side signal's value and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
[`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`StringSignal`](/classes/ReactiveModule.StringSignal) and [`BoolSignal`](/classes/ReactiveModule.BoolSignal) objects can all be compared against another signal of the same type.

If the values are not equal `true` is returned, otherwise `false` is returned.

The above object types also provide their own equivalent `ne()` method that can be called directly from the object instead of through `Reactive.ne()`.

* `lhs` - the first signal to compare.
* `rhs` - the second signal to compare.
*/
ne(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal

/**
```
not(signal: BoolSignal): BoolSignal
```

Performs a logical NOT operation with the `BoolSignal` specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If a signal with a value of `true` is passed to the method `false` will be returned and vice versa.

`BoolSignal` objects provide their own equivalent [`not()`](/classes/ReactiveModule.BoolSignal#methods) method that can be called directly from the object instead of through `Reactive.not()`.

* `signal` - the boolean to perform the logical NOT operation with.
*/
not(signal: BoolSignal): BoolSignal

/**
```
once(): EventSource<void>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an empty event a single time, as soon as it is able to.
*/
once(): EventSource<void>

/**
```
orList(x: Array<BoolSignal>): BoolSignal
```

Performs a logical OR operation with the array of `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If any of the signals in the array are `true` then `true` is returned, otherwise `false` is returned.

* `x` - the array of booleans to perform the logical OR operation with.
*/
orList(x: Array<BoolSignal>): BoolSignal

/**
```
point(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal
```

Constructs a [`PointSignal`](/classes/ReactiveModule.PointSignal) representing a 3D coordinate from the three [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
* `x` - the x component of the 3D coordinate.
* `y` - the y component of the 3D coordinate.
* `z` - the z component of the 3D coordinate.
*/
point(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal

/**
```
point2d(x: ScalarSignal | number, y: ScalarSignal | number): Vec2Signal
```

Constructs a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal) from the two [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
* `x` - the x component of the 2D vector.
* `y` - the y component of the 2D vector.
*/
point2d(x: ScalarSignal | number, y: ScalarSignal | number): Vec2Signal

/**
```
quaternion(w: ScalarSignal, x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
```

Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) with the component values specified.
* `w` - the w component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
* `x` - the x component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
* `y` - the y component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
* `z` - the z component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
quaternion(w: ScalarSignal, x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal

/**
```
quaternionFromAngleAxis(angle: ScalarSignal, axis: VectorSignal): QuaternionSignal
```

Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) from the rotation specified by the angle and normalized axis.
* `angle` - the angle of the rotation, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Specifies the magnitude of the rotation about `axis`.
* `axis` - the direction of the axis of rotation, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal).
*/
quaternionFromAngleAxis(angle: ScalarSignal, axis: VectorSignal): QuaternionSignal

/**
```
quaternionFromEuler(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
```

Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) from the rotation specified by the euler angle.
* `x` - the x axis value of the euler angle, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Represents pitch.
* `y` - the y axis value of the euler angle, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Represents yaw.
* `z` - the z axis value of the euler angle, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Represents roll.
*/
quaternionFromEuler(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal

/**
```
quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal
```

Calculates the rotation required to rotate the `from` vector to the `to` vector and returns the result as a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal).
* `from` - the initial rotation, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal).
* `to` - the target rotation, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal).
*/
quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal

/**
```
quaternionIdentity(): QuaternionSignal
```

Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) that represents an identity quaternion.
*/
quaternionIdentity(): QuaternionSignal

/**
```
quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal
```

Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) representing rotation in the direction of a normalized target direction vector.
* `targetPosition` - the position of the target, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
* `selfUp` - an optional [`VectorSignal`](/classes/ReactiveModule.VectorSignal) specifying the 'up' direction. If no value is specified, a vector of `(0, 1, 0)` is used by default.
*/
quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal

/**
```
rotation(w: number, x: number, y: number, z: number): Rotation
```

Creates a [`Rotation`](/classes/ReactiveModule.Rotation) from the quaternion components specified.
* `w` - the w component of the quaternion.
* `x` - the x component of the quaternion.
* `y` - the y component of the quaternion.
* `z` - the z component of the quaternion.
*/
rotation(w: number, x: number, y: number, z: number): Rotation

/**
```
scale(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal
```

Constructs a [`PointSignal`](/classes/ReactiveModule.PointSignal) representing a 3D scale from the three [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
* `x` - the x component of the 3D scale.
* `y` - the y component of the 3D scale.
* `z` - the z component of the 3D scale.
*/
scale(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal

/**
```
schmittTrigger(signal: ScalarSignal, config: {high: number, initialValue?: false | true, low: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) with `true` if the `ScalarSignal` provided is higher than the upper threshold specified, or `false` if the signal is lower than the lower threshold specified.
If the signal contains a value within, or equal to, the threshold values this method returns the same boolean value it contained in the previous update, or the value specified by `initialValue` if this is the first update.

```
var scalar = Reactive.val(12);

const valAboveThreshold = Reactive.schmittTrigger(scalar, {
  "low": 5,
  "high": 10,
  "initialValue": false
});

// schmittTrigger() returns 'true' because the value of 'scalar' (12) is
// higher than the upper threshold specified (10)
```

* `signal` - the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) to monitor.
* `config` - the configuration for the threshold values.

The `config` JSON object can have the following fields:
**`low`** - the lower threshold. If `signal` is lower than this, the method returns `false`.
**`high`** - the upper threshold. If `signal` is higher than this, the method returns `true`.
**`initialValue`** - an optional initial value for the boolean returned by the method. If no value is specified, this is set to `false` by default.
*/
schmittTrigger(signal: ScalarSignal, config: {high: number, initialValue?: false | true, low: number}): BoolSignal

/**
```
signalHistory<T>(source: EventSource<T>, count: number): EventSourceHistory<T>
signalHistory<T>(signal: Signal<T>, count: number, initialValues?: Array<T>): SignalHistory<T>
```

Returns an object containing the values of the specified signal from previous frames.
If the method is called with an `EventSource` as the `source`, an [`EventSourceHistory`](/classes/ReactiveModule.EventSourceHistory) object is returned. However, if a `Signal` is specified in the method call instead, a [`SignalHistory`](/classes/ReactiveModule.SignalHistory) object is returned.

* `source` - the [`EventSource`](/classes/ReactiveModule.EventSource) containing the signal to access previous values from.
* `signal` - the signal to access previous values from.
* `count` - the number of frames to track the signal value for.
* `initialValues` - sets the initial value of the signal. If unspecified, the value of the signal when the method is called is used instead. Not valid if and `EventSource` object is passed in the method call.
*/
signalHistory

/**
```
sumList(x: Array<number | ScalarSignal>): ScalarSignal
```

Returns a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) containing the value that is the sum of all of the values in the array specified.
```
const numArray = [1, 2, 3];
const arraySum = Reactive.sumList(numArray); // Returns 6 (1 + 2 + 3)
```

* `x` - an array of numbers and/or [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal)s to add together.
*/
sumList(x: Array<number | ScalarSignal>): ScalarSignal

/**
```
switch(condition: StringSignal, map: {[key: string]: string}, defaultValue: string): StringSignal
```

Returns a [`StringSignal`](/classes/ReactiveModule.StringSignal) object, the value of which is determined by the current value of the `condition` argument.
If the value of the `condition` matches a key from `map`, the the corresponding value is assigned to the returned `StringSignal`. Otherwise, `defaultValue` is assigned.

```
var condition = Reactive.val("Option 0");

var switchString = Reactive.switch(condition, {
  "Option 0": "Apple",
  "Option 1": "Banana",
  "Option 2": "Orange"
}, "Mango");

// Value of 'switchString': Apple
```

* `condition` - the `StringSignal` to monitor the value of.
* `map` - a map containing key-value pairs to compare `condition` against. If `condition` matches a key, the corresponding value is assigned to the `StringSignal` returned by the method.
* `defaultValue` - the default value to assign to the `StringSignal` returned by the method, if `condition` does not match any of the keys from `map`.
*/
switch(condition: StringSignal, map: {[key: string]: string}, defaultValue: string): StringSignal

/**
```
val(constant: number): ScalarSignal
val(constant: string): StringSignal
val(constant: boolean): BoolSignal
```

Returns a signal containing a constant value, as specified by the argument.
The type of signal returned ([`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`StringSignal`](/classes/ReactiveModule.StringSignal) or [`BoolSignal`](/classes/ReactiveModule.BoolSignal)) depends on the value passed.

Primitive JavaScript types (`number`, `string` and `bool`) are implicitly converted to their signal equivalents when passed as a method argument or when setting a property. Converting the values to signals with `Reactive.val()` method is not required.

* `val` - the value to assign to the constructed signal.
*/
val(constant: number): ScalarSignal

/**
```
vector(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): VectorSignal
```

Constructs a [`VectorSignal`](/classes/ReactiveModule.VectorSignal) from the three [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
* `x` - the x component of the 3D vector.
* `y` - the y component of the 3D vector.
* `z` - the z component of the 3D vector.
*/
vector(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): VectorSignal

/**
```
xor(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal
```

Performs a logical XOR operation with the `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If only one of the signals specified is `true` then `true` is returned. If both, or neither, of the signals are `true` then `false` is returned.

`BoolSignal` objects provide their own equivalent [`xor()`](/classes/ReactiveModule.BoolSignal#methods) method that can be called directly from the object instead of through `Reactive.xor()`.

* `lhs` - the first boolean to perform the logical XOR operation with.
* `rhs` - the second boolean to perform the logical XOR operation with.
*/
xor(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal

/**
```
xorList(x: Array<BoolSignal>): BoolSignal
```

Performs a logical XOR operation with the array of `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If only one of the signals in the array is `true` then `true` is returned. If more than one, or none, of the signals are `true` then `false` is returned.

* `x` - the array of booleans to perform the logical XOR operation with.
*/
xorList(x: Array<BoolSignal>): BoolSignal

}



/**

//============================================================================
// Perform various mathematical and logical operations with a given set of
// signals and constant values.
//
//
// Required project capabilities:
// - FaceTracking (auto added on module import)
//
//============================================================================

// Load in the required modules
const Reactive = require('Reactive');
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');

(async function () {  // Enables async/await in JS [part 1]

  //==========================================================================
  // Use the Reactive.val() method to explicitly construct constant signals
  //==========================================================================

  //

  // Create a ScalarSignal
  const scalarSignal = Reactive.val(1);

  // Create a StringSignal
  const stringSignal = Reactive.val("Hello");

  // Create a BoolSignal
  const boolSignal = Reactive.val(true);


  //==========================================================================
  // Scene object properties are returned as signals
  //==========================================================================

  // Create a reference to a face detected in the scene
  const face = FaceTracking.face(0);

  // The Face class's isTracked property returns a BoolSignal
  const isTracked = face.isTracked;

  // The Mouth class's openness property returns a ScalarSignal
  const openness = face.mouth.openness;


  //==========================================================================
  // Perform operations with signals
  //==========================================================================

  // Add 1 to the openness value
  const opennessPlusOne = openness.add(1);

  // Double the value of the openness signal
  const doubleOpenness = openness.mul(2);

  // Create a variable with the inverse value of the isTracked signal
  const inverseTracked = isTracked.not();

  // Watch the signal values in the Console
  Diagnostics.watch("Openness: ", openness);
  Diagnostics.watch("Openness + 1: ", opennessPlusOne);
  Diagnostics.watch("Openness * 2: ", doubleOpenness);


  //==========================================================================
  // Retrieve a value from a signal
  //==========================================================================

  // Create a reference to the last value the openness signal contained
  // before the pinLastValue() was called
  const signalSnapshot = openness.pinLastValue();
  Diagnostics.log(signalSnapshot);

})(); // Enables async/await in JS [part 2]

*/