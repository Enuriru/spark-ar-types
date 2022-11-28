/// <reference path="../Reactive.AntiderivativeOverflowBehaviour/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignalSource/index.d.ts" />
/// <reference path="../Reactive.Box2D/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.EventSourceHistory/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.PrimitiveOrShaderSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignalSource/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignalSource/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../Reactive.Vec4/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare class ReactiveModule {
/**
* ```
(get) Box2D: Box2D
(set) Box2D: Box2D
```
*/
static readonly Box2D: Box2D;
/**
* ```
(get) Box3D: Box3D
(set) Box3D: Box3D
```
*/
static readonly Box3D: Box3D;
/**
* ```
(get) Mat4: Mat4
(set) Mat4: Mat4
```
*/
static readonly Mat4: Mat4;
/**
* ```
(get) Rotation: Rotation
(set) Rotation: Rotation
```
*/
static readonly Rotation: Rotation;
/**
* ```
(get) Vec2: Vec2
(set) Vec2: Vec2
```
*/
static readonly Vec2: Vec2;
/**
* ```
(get) Vec3: Vec3
(set) Vec3: Vec3
```
*/
static readonly Vec3: Vec3;
/**
* ```
(get) Vec4: Vec4
(set) Vec4: Vec4
```
*/
static readonly Vec4: Vec4;
/**
*  
 * HSVA(h: ScalarSignal | number, s: ScalarSignal | number, v: ScalarSignal | number, a: ScalarSignal | number): HsvaSignal
 *  
 * 
 * Constructs an [`HsvaSignal`](/classes/ReactiveModule.HsvaSignal) object from the individual component values specified.
 * The [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or number passed into each component must contain a value between `0.0` and `1.0`.
 * 
 * * `h` - the hue component of the HSVA signal.
 * * `s` - the saturation component of the HSVA signal.
 * * `v` - the value component of the HSVA signal.
 * * `a` - the alpha component of the HSVA signal.
 */
static HSVA(h: ScalarSignal | number, s: ScalarSignal | number, v: ScalarSignal | number, a: ScalarSignal | number): HsvaSignal;

/**
*  
 * RGBA(r: ScalarSignal | number, g: ScalarSignal | number, b: ScalarSignal | number, a: ScalarSignal | number): RgbaSignal
 *  
 * 
 * Constructs an [`RgbaSignal`](/classes/ReactiveModule.RgbaSignal) object from the individual component values specified.
 * The [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or number passed into each component must contain a value between `0.0` and `1.0`.
 * 
 * The RGB components are interpreted in sRGB color space.
 * 
 * * `r` - the red component of the RGBA signal.
 * * `g` - the blue component of the RGBA signal.
 * * `b` - the green component of the RGBA signal.
 * * `a` - the alpha component of the RGBA signal.
 */
static RGBA(r: ScalarSignal | number, g: ScalarSignal | number, b: ScalarSignal | number, a: ScalarSignal | number): RgbaSignal;

/**
*  
 * abs(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * **See Also**: `ScalarSignal.abs`
 */
static abs(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * acos(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the inverse cosine of the value of the given signal (interpreted as radians).
 */
static acos(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * add(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * add(x: PointSignal, y: VectorSignal): PointSignal
 * add(x: VectorSignal, y: PointSignal): PointSignal
 * add(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
static add(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

static add(x: PointSignal, y: VectorSignal): PointSignal;

static add(x: VectorSignal, y: PointSignal): PointSignal;

static add(x: VectorSignal, y: VectorSignal): VectorSignal;

/**
*  
 * and(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical conjunction of the values of the given signals. It is `true` every time both input signals are `true` and `false` at all other times.
 * **See Also**: `BoolSignal.and`
 */
static and(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * andList(x: Array<BoolSignal>): BoolSignal
 *  
 * 
 * Performs a logical AND operation with the array of `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If all signals in the array are `true` then `true` is returned, otherwise `false` is returned.
 * 
 * * `x` - the array of booleans to perform the logical AND operation with.
 */
static andList(x: Array<BoolSignal>): BoolSignal;

/**
*  
 * antiderivative(signal: ScalarSignal, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal
 *  
 * 
 * Estimates the antiderivative of the specified `ScalarSignal` with respect to time (in milliseconds) and returns the result as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * * `signal` - the value to calculate the antiderivative of.
 * * `config` - the configuration for the antiderivative output.
 * 
 * The `config` JSON object can have the following fields:
 * 
 * **`min`** - the minimum value of the antiderivative output, if `overflowBehaviour` is set to `CLAMP`.
 * **`max`** - the maximum value of the antiderivative output, if `overflowBehaviour` is set to `CLAMP`.
 * **`initialValue`** - the initial value of the antiderivative output.
 * **`overflowBehavior`** - how the antiderivative output should behave when the values exceed `min` and `max`, as an [`AntiderivativeOverflowBehavior`](/enums/reactivemodule.antiderivativeoverflowbehaviour) enum value. If set to `CLAMP`, the output is clamped to the `min` and `max` values. If set to `WRAP`, the output is wrapped around to the `min` value if `max` is exceeded and vice versa. The latter is often used when the output represents a cyclic value, such as an angle, which may have a `min` of `0` and a `max` of `2 * PI` for example.
 */
static antiderivative(signal: ScalarSignal | number, config: {initialValue: number, max: number, min: number, overflowBehaviour: ReactiveModule.AntiderivativeOverflowBehaviour}): ScalarSignal;

/**
*  
 * asin(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the inverse sine of the value of the given signal (interpreted as radians).
 */
static asin(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * atan(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the inverse tangent of the value of the given signal (interpreted as radians).
 */
static atan(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * atan2(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
 * **See Also**: `ScalarSignal.atan2`
 */
static atan2(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * boolSignalSource(sourceId: string): BoolSignalSource
 *  
 * 
 * Creates a new [`BoolSignalSource`](/classes/ReactiveModule.BoolSignalSource) object, which allows for the value of a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) object to be updated without rebinding the signal.
 * The signal provided by the source contains a value of `false` until a value is assigned via [`BoolSignalSource.set()`](/classes/ReactiveModule.BoolSignalSource#methods).
 * 
 * When calling the method, avoid reusing the `sourceId` of an object that you've called [`dispose()`](/classes/ReactiveModule.ScalarSignalSource#methods) on.
 * 
 * * `sourceId` - the unique ID of the signal to create or retrieve.
 */
static boolSignalSource(sourceId: string): BoolSignalSource;

/**
*  
 * boundingBox(x: ScalarSignal, y: ScalarSignal, width: ScalarSignal, height: ScalarSignal): Box2DSignal
 *  
 * 
 * Constructs a [`Box2DSignal`](/classes/reactivemodule.box2dsignal) with the dimensions specified by `width` and `height`, positioned at the location specified by `x` and `y`.
 * All arguments should be provided as normalized screen space units.
 * 
 * * `x` - the x position of the top left corner of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * * `y` - the y position of the top left corner of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * * `width` - the width of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * * `height` - the height of the bounding box, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 */
static boundingBox(x: ScalarSignal | number, y: ScalarSignal | number, width: ScalarSignal | number, height: ScalarSignal | number): Box2DSignal;

/**
*  
 * box2d(x: ScalarSignal, y: ScalarSignal, width: ScalarSignal, height: ScalarSignal): Box2DSignal
 *  
 * 
 * Constructs a [`Box2DSignal`](/classes/reactivemodule.box2dsignal) with the dimensions specified by `width` and `height`, positioned at the location specified by `x` and `y`.
 * All arguments should be provided as normalized screen space units.
 * 
 * * `x` -  the x position of the top left corner of the bounding box.
 * * `y` - the y position of the top left corner of the bounding box.
 * * `width` - the width of the bounding box.
 * * `height` - the height of the bounding box.
 */
static box2d(x: ScalarSignal | number, y: ScalarSignal | number, width: ScalarSignal | number, height: ScalarSignal | number): Box2DSignal;

/**
*  
 * box3d(min: PointSignal, max: PointSignal): Box3DSignal
 *  
 * 
 * Constructs a `Box3DSignal` with the provided `min` and `max` points.
 * * `min` -  the minimum point of the bounding box.
 * * `max` - the maximum point of the bounding box.
 */
static box3d(min: PointSignal, max: PointSignal): Box3DSignal;

/**
*  
 * ceil(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.ceil`
 */
static ceil(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * clamp(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the given `x` signal constrained to lie between the values of the given `min` and `max` signals.
 * **Note**: The behavior is undefined if `min` is greater than `max`.
 */
static clamp(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * concat(lhs: StringSignal, rhs: StringSignal): StringSignal
 *  
 * 
 * Joins two `StringSignal` objects and returns the result as a new [`StringSignal`](/classes/ReactiveModule.StringSignal).
 * The values of the existing `StringSignal`s passed as arguments are unaffected.
 * 
 * `StringSignal` objects provide their own equivalent [`concat()`](/classes/ReactiveModule.StringSignal#methods) method that can be called directly from the object instead of through `Reactive.concat()`.
 * 
 *  
 * var string0 = Reactive.val("Hello ");
 * var string1 = Reactive.val("world!");
 * 
 * var string2 = Reactive.concat(string0, string1);
 * // Value of 'string2': Hello world!
 *  
 * 
 * * `lhs` - the first string to concatenate.
 * * `rhs` - the second string to concatenate.
 */
static concat(lhs: StringSignal | string, rhs: StringSignal | string): StringSignal;

/**
*  
 * cos(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the cosine of the value of the given signal (interpreted as radians).
 */
static cos(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * cross(v1: VectorSignal, v2: VectorSignal): PointSignal
 *  
 * 
 * Returns a vector signal with the value that is the cross product of the given signals.
 * **See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
static cross(v1: VectorSignal, v2: VectorSignal): PointSignal;

/**
*  
 * derivative(signal: ScalarSignal): ScalarSignal
 *  
 * 
 * Estimates the derivative of the specified `ScalarSignal` with respect to time (in milliseconds) and returns the result as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * As the rate of change is calculated with respect to time elapsed, the initial value of the derivative is always zero.
 * 
 * Input signals with constantly updating values, such as the `openness` signal exposed by the [`Mouth`](/classes/FaceTrackingModule.Mouth#properties) class, may produce a noisy derivative value. In these instances, it's recommended to first pass the input signal to the `Reactive.expSmooth()` method with a `dampFactor` between `100` and `500` before passing to this method.
 * 
 * * `signal` - the value to calculate the derivative of.
 */
static derivative(signal: ScalarSignal | number): ScalarSignal;

/**
*  
 * distance(v1: PointSignal, v2: PointSignal): ScalarSignal
 *  
 * 
 * Returns the distance from the point to another point as a `ScalarSignal`.
 */
static distance(v1: PointSignal, v2: PointSignal): ScalarSignal;

/**
*  
 * div(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
 * **See Also**: `ScalarSignal.div`
 */
static div(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * **See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
 */
static dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal;

/**
*  
 * eq(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 * eq(lhs: StringSignal, rhs: StringSignal): BoolSignal
 * eq(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Compares whether the left hand side signal's value is equal to the right hand side signal's value and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`StringSignal`](/classes/ReactiveModule.StringSignal) and [`BoolSignal`](/classes/ReactiveModule.BoolSignal) objects can all be compared against another signal of the same type.
 * 
 * If the values are equal `true` is returned, otherwise `false` is returned.
 * 
 * The above object types also provide their own equivalent `eq()` method that can be called directly from the object instead of through `Reactive.eq()`.
 * 
 * * `lhs` - the first signal to compare.
 * * `rhs` - the second signal to compare.
 */
static eq(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

static eq(lhs: StringSignal | string, rhs: StringSignal | string): BoolSignal;

static eq(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * exp(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is e (the Euler's constant 2.718...) to the power of the value of the given signal.
 */
static exp(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * expSmooth(signal: ScalarSignal, dampFactor: number): ScalarSignal
 * expSmooth(signal: PointSignal, dampFactor: number): PointSignal
 * expSmooth(signal: VectorSignal, dampFactor: number): VectorSignal
 * expSmooth(signal: TransformSignal, dampFactor: number): TransformSignal
 *  
 * 
 * Smooths the specified variable signal using exponential averaging over time and returns the result as a signal of the same type.
 * The smoothed transformation for a signal that specifies a rigid body transformation is guaranteed to also be a rigid body transformation. The rotation component is smoothed in spherical coordinates using spherical linear interpolation (Slerp).
 * 
 * [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`PointSignal`](/classes/ReactiveModule.PointSignal), [`VectorSignal`](/classes/ReactiveModule.VectorSignal) and [`TransformSignal`](/classes/ReactiveModule.TransformSignal) objects each provide their own equivalent `expSmooth()` method that can be called directly from the object instead of through `Reactive.expSmooth()`.
 * 
 * * `signal` - the signal to smooth.
 * * `dampFactor` - the dampening time constant, in milliseconds.
 */
static expSmooth(signal: ScalarSignal | number, dampFactor: number): ScalarSignal;

static expSmooth(signal: PointSignal, dampFactor: number): PointSignal;

static expSmooth(signal: VectorSignal, dampFactor: number): VectorSignal;

static expSmooth(signal: TransformSignal, dampFactor: number): TransformSignal;

/**
*  
 * floor(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * **See Also**: `ScalarSignal.floor`
 */
static floor(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [min, max] range to [0.0, 1.0] range.
 */
static fromRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * ge(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is greater than or equal to the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the left hand value is greater than or equal to the right hand value `true` is returned. If the left hand value is lower `false` is returned.
 * 
 * `ScalarSignal` objects provide their own equivalent [`ge()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.ge()`.
 * 
 * * `lhs` - the first scalar value to compare.
 * * `rhs` - the second scalar value to compare.
 */
static ge(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * gt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is greater than the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the left hand value is greater than the right hand value `true` is returned. If the left hand value is lower, or if the values are equal, `false` is returned.
 * 
 * `ScalarSignal` objects provide their own equivalent [`gt()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.gt()`.
 * 
 * * `lhs` - the first scalar value to compare.
 * * `rhs` - the second scalar value to compare.
 */
static gt(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * ifThenElse<T, U>(condition: BoolSignal | boolean, thenValue: EventSource<T>, elseValue: EventSource<U>): EventSource<T | U>
 * ifThenElse(condition: BoolSignal | boolean, thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal
 * ifThenElse(condition: BoolSignal | boolean, thenValue: StringSignal | string, elseValue: StringSignal | string): StringSignal
 * ifThenElse(condition: BoolSignal | boolean, thenValue: BoolSignal | boolean, elseValue: BoolSignal | boolean): BoolSignal
 *  
 * 
 * Returns a signal or an `EventSource` which at any point of time takes the value (passes the events in case of `EventSource`) of one or another inputs, depending on the momentary value of the given condition `BoolSignal`.
 */
static ifThenElse(condition: BoolSignal | boolean, thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal;

static ifThenElse(condition: BoolSignal | boolean, thenValue: StringSignal | string, elseValue: StringSignal | string): StringSignal;

static ifThenElse(condition: BoolSignal | boolean, thenValue: BoolSignal | boolean, elseValue: BoolSignal | boolean): BoolSignal;

/**
*  
 * le(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is less than or equal to the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the left hand value is lower than or equal to the right hand value `true` is returned. If the left hand value is greater `false` is returned.
 * 
 * `ScalarSignal` objects provide their own equivalent [`le()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.le()`.
 * 
 * * `lhs` - the first scalar value to compare.
 * * `rhs` - the second scalar value to compare.
 */
static le(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * log(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the natural logarithm of the value of the given signal.
 */
static log(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal
 *  
 * 
 * Returns a [`TransformSignal`](/classes/ReactiveModule.TransformSignal) object with its `rotation` set in the direction of the specified target.
 * Create a new null object in Spark AR Studio and place the object to use as the 'eye' object within it. Then, pass the null object's transform to the `lookAt` method, for example:
 * 
 *  
 * (async function () {  // Enables async/await in JS [part 1]
 * 
 *   // Locate the objects in the scene
 *   const [nullObject, plane0, plane1] = await Promise.all([
 * 
 *     // The object to rotate's null parent object
 *     Scene.root.findFirst('nullObject0'),
 * 
 *     // The object to rotate
 *     Scene.root.findFirst('plane0'),
 * 
 *     // The object to look at
 *     Scene.root.findFirst('plane1')
 *   ]);
 * 
 *   // Create a new transform with rotation set in the direction of the target
 *   // The null object's transform is passed as the 'eyeTransform' argument
 *   // instead of the plane0's transform
 *   const lookAtTransform = Reactive.lookAt(nullObject.transform.toSignal(),
 *                                            plane1.transform.position);
 * 
 *   // Update the plane0 object's rotation with the rotational values from the
 *   // 'lookAt' transform signal
 *   plane0.transform.rotationX = lookAtTransform.rotationX;
 *   plane0.transform.rotationY = lookAtTransform.rotationY;
 *   plane0.transform.rotationZ = lookAtTransform.rotationZ;
 * 
 * })(); // Enables async/await in JS [part 2]
 *  
 * 
 * * `eyeTransform` - the transform of the 'eye' object that is looking at the target object, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal). This transform needs to point the scene object along the x axis.
 * * `targetPosition` - the position of the target object, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
 * * `eyeUp` - an optional [`VectorSignal`](/classes/ReactiveModule.VectorSignal) specifying the 'up' direction of the eye origin. If no value is specified, a vector of `(0, 1, 0)` is used by default.
 */
static lookAt(eyeTransform: TransformSignal, targetPosition: PointSignal, eyeUp?: VectorSignal): TransformSignal;

/**
*  
 * lt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 *  
 * 
 * Compares whether the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) value on the left hand side of the evaluation is less than the `ScalarSignal` on the right hand side and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the left hand value is lower than the right hand value `true` is returned. If the left hand value is greater, or if the values are equal, `false` is returned.
 * 
 * `ScalarSignal` objects provide their own equivalent [`lt()`](/classes/ReactiveModule.ScalarSignal#methods) method that can be called directly from the object instead of through `Reactive.lt()`.
 * 
 * * `lhs` - the first scalar value to compare.
 * * `rhs` - the second scalar value to compare.
 */
static lt(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

/**
*  
 * magnitude(v: VectorSignal): ScalarSignal
 *  
 * 
 * Returns the magnitude of the vector as a `ScalarSignal`.
 */
static magnitude(v: VectorSignal): ScalarSignal;

/**
*  
 * magnitudeSquared(signal: ScalarSignal): ScalarSignal
 * magnitudeSquared(signal: Vec2Signal): ScalarSignal
 * magnitudeSquared(signal: VectorSignal): ScalarSignal
 * magnitudeSquared(signal: Vec4Signal): ScalarSignal
 *  
 * 
 * Returns the squared length (magnitude) of a given signal.
 * Calculating the squared magnitude instead of the magnitude is much faster.
 * Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
 */
static magnitudeSquared(signal: ScalarSignal | number): ScalarSignal;

static magnitudeSquared(signal: Vec2Signal): ScalarSignal;

static magnitudeSquared(signal: VectorSignal): ScalarSignal;

static magnitudeSquared(signal: Vec4Signal): ScalarSignal;

/**
*  
 * max(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the greater of the values of the given signals.
 */
static max(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * min(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the lesser of the values of the given signals.
 */
static min(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * mix(x: ScalarSignal, y: ScalarSignal, alpha: ScalarSignal): ScalarSignal
 * mix(x: PointSignal, y: PointSignal, alpha: ScalarSignal): PointSignal
 * mix(x: VectorSignal, y: VectorSignal, alpha: ScalarSignal): VectorSignal
 * mix(x: TransformSignal, y: TransformSignal, alpha: ScalarSignal): TransformSignal
 *  
 * 
 * Returns a signal with the value that is the interpolation of the values of the given signals.
 */
static mix(x: ScalarSignal | number, y: ScalarSignal | number, alpha: ScalarSignal | number): ScalarSignal;

static mix(x: PointSignal, y: PointSignal, alpha: ScalarSignal | number): PointSignal;

static mix(x: VectorSignal, y: VectorSignal, alpha: ScalarSignal | number): VectorSignal;

static mix(x: TransformSignal, y: TransformSignal, alpha: ScalarSignal | number): TransformSignal;

/**
*  
 * mod(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
 * **See Also**: `ScalarSignal.mod`
 */
static mod(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

/**
*  
 * monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of any of the specified input signals changes.
 * The event contains a JSON object which provides the old and new values of the signals in the format `{ "oldValues": oldValues, "newValues": newValues }`.
 * 
 * `oldValues` is itself a JSON object, the keys of which are the names of the signals as specified in the method call and the values of which are each signals' previous values. The `newValues` JSON object uses the same keys but provides each signals' new value.
 * 
 * * `signals` - the array of [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal)s to track the values of.
 * * `config` - an optional configuration for the event source.
 * 
 * The `config` JSON object can have the following field:
 * **`fireOnInitialValue`** - Specifies whether an initial event should be emitted containing the signals' initial values. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValues` will not be available for the first instance.
 * 
 *  
 * // Load in the required modules
 * const Reactive = require('Reactive');
 * const HandTracking = require('HandTracking');
 * 
 * // Create a new ScalarSignal
 * var scalarValue = Reactive.val(1);
 * 
 * // Monitor changes to the values of the hand tracking count or
 * // 'scalarValue' signals
 * Reactive.monitorMany({
 *     "handsDetected": HandTracking.count,
 *     "scalarValue": scalarValue
 *   },
 * 
 *   {fireOnInitialValue: false}).subscribe((event) => {
 *     // Log the old and new values of the hand tracking count signal
 *     Diagnostics.log(`Old hand count value: ${event.oldValues.handsDetected}`);
 *     Diagnostics.log(`New hand count value: ${event.newValues.handsDetected}`);
 * });
 *  
 */
static monitorMany(signals: {[name: string]: ScalarSignal}, config?: {fireOnInitialValue?: false | true}): EventSource<{newValues: {[key: string]: number}, oldValues: {[key: string]: number}}>;

/**
*  
 * mul(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * mul(x: VectorSignal, y: ScalarSignal): VectorSignal
 * mul(x: ScalarSignal, y: VectorSignal): VectorSignal
 * mul(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * **See Also**: `ScalarSignal.mul`, `VectorSignal.mul`
 */
static mul(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

static mul(x: VectorSignal, y: ScalarSignal | number): VectorSignal;

static mul(x: ScalarSignal | number, y: VectorSignal): VectorSignal;

static mul(x: VectorSignal, y: VectorSignal): VectorSignal;

/**
*  
 * mulList(x: Array<number | ScalarSignal>): ScalarSignal
 *  
 * 
 * Returns a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) containing the value that is the product of all of the values in the array specified.
 *  
 * const numArray = [2, 3, 4];
 * const arrayMul = Reactive.mulList(numArray); // Returns 24 (2 * 3 * 4)
 *  
 * 
 * * `x` - an array of numbers and/or [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal)s to multiply together.
 */
static mulList(x: Array<number | ScalarSignal>): ScalarSignal;

/**
*  
 * ne(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
 * ne(lhs: StringSignal, rhs: StringSignal): BoolSignal
 * ne(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Compares whether the left hand side signal's value is not equal to the right hand side signal's value and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`StringSignal`](/classes/ReactiveModule.StringSignal) and [`BoolSignal`](/classes/ReactiveModule.BoolSignal) objects can all be compared against another signal of the same type.
 * 
 * If the values are not equal `true` is returned, otherwise `false` is returned.
 * 
 * The above object types also provide their own equivalent `ne()` method that can be called directly from the object instead of through `Reactive.ne()`.
 * 
 * * `lhs` - the first signal to compare.
 * * `rhs` - the second signal to compare.
 */
static ne(lhs: ScalarSignal | number, rhs: ScalarSignal | number): BoolSignal;

static ne(lhs: StringSignal | string, rhs: StringSignal | string): BoolSignal;

static ne(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * neg(x: ScalarSignal): ScalarSignal
 * neg(x: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * **See Also**: `ScalarSignal.neg`, `VectorSignal.neg`
 */
static neg(x: ScalarSignal | number): ScalarSignal;

static neg(x: VectorSignal): VectorSignal;

/**
*  
 * normalize(v: VectorSignal): VectorSignal
 *  
 * 
 * Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
 */
static normalize(v: VectorSignal): VectorSignal;

/**
*  
 * not(signal: BoolSignal): BoolSignal
 *  
 * 
 * Performs a logical NOT operation with the `BoolSignal` specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If a signal with a value of `true` is passed to the method `false` will be returned and vice versa.
 * 
 * `BoolSignal` objects provide their own equivalent [`not()`](/classes/ReactiveModule.BoolSignal#methods) method that can be called directly from the object instead of through `Reactive.not()`.
 * 
 * * `signal` - the boolean to perform the logical NOT operation with.
 */
static not(signal: BoolSignal | boolean): BoolSignal;

/**
*  
 * once(): EventSource<void>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an empty event a single time, as soon as it is able to.
 */
static once(): EventSource<void>;

/**
*  
 * or(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical disjunction of the values of the given signals. It is `true` every time at least one of the input signals is `true` and `false` at all other times.
 * **See Also**: `BoolSignal.or`
 */
static or(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * orList(x: Array<BoolSignal>): BoolSignal
 *  
 * 
 * Performs a logical OR operation with the array of `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If any of the signals in the array are `true` then `true` is returned, otherwise `false` is returned.
 * 
 * * `x` - the array of booleans to perform the logical OR operation with.
 */
static orList(x: Array<BoolSignal>): BoolSignal;

/**
*  
 * pack2(x: ScalarSignal, y: ScalarSignal): Vec2Signal
 * pack2(x: ScalarSignal, y: Vec2Signal): PointSignal
 * pack2(x: Vec2Signal, y: ScalarSignal): PointSignal
 * pack2(x: ScalarSignal, y: PointSignal): Vec4Signal
 * pack2(x: PointSignal, y: ScalarSignal): Vec4Signal
 * pack2(x: Vec2Signal, y: Vec2Signal): Vec4Signal
 *  
 * 
 * Packs two Scalar or Point signals into a bigger Point signal.
 */
static pack2(x: ScalarSignal | number, y: ScalarSignal | number): Vec2Signal;

static pack2(x: ScalarSignal | number, y: Vec2Signal): PointSignal;

static pack2(x: Vec2Signal, y: ScalarSignal | number): PointSignal;

static pack2(x: ScalarSignal | number, y: PointSignal): Vec4Signal;

static pack2(x: PointSignal, y: ScalarSignal | number): Vec4Signal;

static pack2(x: Vec2Signal, y: Vec2Signal): Vec4Signal;

/**
*  
 * pack3(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal
 * pack3(x: ScalarSignal, y: ScalarSignal, z: Vec2Signal): Vec4Signal
 * pack3(x: ScalarSignal, y: Vec2Signal, z: ScalarSignal): Vec4Signal
 * pack3(x: Vec2Signal, y: ScalarSignal, z: ScalarSignal): Vec4Signal
 *  
 * 
 * Packs three Scalar or Point signals into a bigger Point signal.
 */
static pack3(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal;

static pack3(x: ScalarSignal | number, y: ScalarSignal | number, z: Vec2Signal): Vec4Signal;

static pack3(x: ScalarSignal | number, y: Vec2Signal, z: ScalarSignal | number): Vec4Signal;

static pack3(x: Vec2Signal, y: ScalarSignal | number, z: ScalarSignal | number): Vec4Signal;

/**
*  
 * pack4(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal, w: ScalarSignal): Vec4Signal
 *  
 * 
 * Packs four `ScalarSignals` into a `Vec4Signal`.
 */
static pack4(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number, w: ScalarSignal | number): Vec4Signal;

/**
*  
 * point(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal
 *  
 * 
 * Constructs a [`PointSignal`](/classes/ReactiveModule.PointSignal) representing a 3D coordinate from the three [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
 * * `x` - the x component of the 3D coordinate.
 * * `y` - the y component of the 3D coordinate.
 * * `z` - the z component of the 3D coordinate.
 */
static point(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal;

/**
*  
 * point2d(x: ScalarSignal | number, y: ScalarSignal | number): Vec2Signal
 *  
 * 
 * Constructs a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal) from the two [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
 * * `x` - the x component of the 2D vector.
 * * `y` - the y component of the 2D vector.
 */
static point2d(x: ScalarSignal | number, y: ScalarSignal | number): Vec2Signal;

/**
*  
 * pow(base: ScalarSignal, exponent: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the base signal raised to the power of the exponent signal.
 * The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.
 * 
 * **See Also**: `ScalarSignal.pow`
 */
static pow(base: ScalarSignal | number, exponent: ScalarSignal | number): ScalarSignal;

/**
*  
 * quaternion(w: ScalarSignal, x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
 *  
 * 
 * Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) with the component values specified.
 * * `w` - the w component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * * `x` - the x component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * * `y` - the y component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 * * `z` - the z component of the quaternion, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 */
static quaternion(w: ScalarSignal | number, x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): QuaternionSignal;

/**
*  
 * quaternionFromAngleAxis(angle: ScalarSignal, axis: VectorSignal): QuaternionSignal
 *  
 * 
 * Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) from the rotation specified by the angle and normalized axis.
 * * `angle` - the angle of the rotation, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Specifies the magnitude of the rotation about `axis`.
 * * `axis` - the direction of the axis of rotation, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal).
 */
static quaternionFromAngleAxis(angle: ScalarSignal | number, axis: VectorSignal): QuaternionSignal;

/**
*  
 * quaternionFromEuler(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): QuaternionSignal
 *  
 * 
 * Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) from the rotation specified by the euler angle.
 * * `x` - the x axis value of the euler angle, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Represents pitch.
 * * `y` - the y axis value of the euler angle, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Represents yaw.
 * * `z` - the z axis value of the euler angle, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal). Represents roll.
 */
static quaternionFromEuler(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): QuaternionSignal;

/**
*  
 * quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal
 *  
 * 
 * Calculates the rotation required to rotate the `from` vector to the `to` vector and returns the result as a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal).
 * * `from` - the initial rotation, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal).
 * * `to` - the target rotation, as a [`VectorSignal`](/classes/ReactiveModule.VectorSignal).
 */
static quaternionFromTo(from: VectorSignal, to: VectorSignal): QuaternionSignal;

/**
*  
 * quaternionIdentity(): QuaternionSignal
 *  
 * 
 * Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) that represents an identity quaternion.
 */
static quaternionIdentity(): QuaternionSignal;

/**
*  
 * quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal
 *  
 * 
 * Constructs a [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal) representing rotation in the direction of a normalized target direction vector.
 * * `targetPosition` - the position of the target, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
 * * `selfUp` - an optional [`VectorSignal`](/classes/ReactiveModule.VectorSignal) specifying the 'up' direction. If no value is specified, a vector of `(0, 1, 0)` is used by default.
 */
static quaternionLookAt(targetPosition: PointSignal, selfUp?: VectorSignal): QuaternionSignal;

/**
*  
 * reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
 *  
 * 
 * Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
 */
static reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal;

/**
*  
 * rotation(w: number, x: number, y: number, z: number): Rotation
 *  
 * 
 * Creates a [`Rotation`](/classes/ReactiveModule.Rotation) from the quaternion components specified.
 * * `w` - the w component of the quaternion.
 * * `x` - the x component of the quaternion.
 * * `y` - the y component of the quaternion.
 * * `z` - the z component of the quaternion.
 */
static rotation(w: number, x: number, y: number, z: number): Rotation;

/**
*  
 * round(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the rounded value of the given signal.
 * **Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.
 * 
 * **See Also**: `ScalarSignal.round`
 */
static round(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * scalarSignalSource(sourceId: string): ScalarSignalSource
 *  
 * 
 * Creates a new [`ScalarSignalSource`](/classes/ReactiveModule.ScalarSignalSource#methods) object, which allows for the value of a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) object to be updated without rebinding the signal.
 * The signal provided by the source contains a value of `0` until a value is assigned via [`ScalarSignalSource.set()`](/classes/ReactiveModule.ScalarSignalSource#methods).
 * 
 * When calling the method, avoid reusing the `sourceId` of an object that you've called [`dispose()`](/classes/ReactiveModule.ScalarSignalSource#methods) on.
 * 
 * * `sourceId` - the unique ID of the signal to create or retrieve.
 */
static scalarSignalSource(sourceId: string): ScalarSignalSource;

/**
*  
 * scale(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal
 *  
 * 
 * Constructs a [`PointSignal`](/classes/ReactiveModule.PointSignal) representing a 3D scale from the three [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
 * * `x` - the x component of the 3D scale.
 * * `y` - the y component of the 3D scale.
 * * `z` - the z component of the 3D scale.
 */
static scale(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): PointSignal;

/**
*  
 * schmittTrigger(signal: ScalarSignal, config: {high: number, initialValue?: false | true, low: number}): BoolSignal
 *  
 * 
 * Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) with `true` if the `ScalarSignal` provided is higher than the upper threshold specified, or `false` if the signal is lower than the lower threshold specified.
 * If the signal contains a value within, or equal to, the threshold values this method returns the same boolean value it contained in the previous update, or the value specified by `initialValue` if this is the first update.
 * 
 *  
 * var scalar = Reactive.val(12);
 * 
 * const valAboveThreshold = Reactive.schmittTrigger(scalar, {
 *   "low": 5,
 *   "high": 10,
 *   "initialValue": false
 * });
 * 
 * // schmittTrigger() returns 'true' because the value of 'scalar' (12) is
 * // higher than the upper threshold specified (10)
 *  
 * 
 * * `signal` - the [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) to monitor.
 * * `config` - the configuration for the threshold values.
 * 
 * The `config` JSON object can have the following fields:
 * **`low`** - the lower threshold. If `signal` is lower than this, the method returns `false`.
 * **`high`** - the upper threshold. If `signal` is higher than this, the method returns `true`.
 * **`initialValue`** - an optional initial value for the boolean returned by the method. If no value is specified, this is set to `false` by default.
 */
static schmittTrigger(signal: ScalarSignal | number, config: {high: number, initialValue?: false | true, low: number}): BoolSignal;

/**
*  
 * sign(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
 * **Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.
 * 
 * **See Also**: `ScalarSignal.sign`
 */
static sign(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * sin(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sine of the value of the given signal (interpreted as radians).
 */
static sin(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
 * If x is between edge0 and edge1, smooth Hermite interpolation is performed.
 */
static smoothStep(x: ScalarSignal | number, edge0: ScalarSignal | number, edge1: ScalarSignal | number): ScalarSignal;

/**
*  
 * sqrt(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * **See Also**: `ScalarSignal.sqrt`
 */
static sqrt(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * step(x: ScalarSignal, edge: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge, and 1.0 is returned otherwise.
 */
static step(x: ScalarSignal | number, edge: ScalarSignal | number): ScalarSignal;

/**
*  
 * stringSignalSource(sourceId: string): StringSignalSource
 *  
 * 
 * Creates a new [`StringSignalSource`](/classes/ReactiveModule.StringSignalSource) object, which allows for the value of a [`StringSignal`](/classes/ReactiveModule.StringSignal) object to be updated without rebinding the signal.
 * The signal provided by the source contains an empty string until a value is assigned via [`StringSignalSource.set()`](/classes/ReactiveModule.StringSignalSource#methods).
 * 
 * When calling the method, avoid reusing the `sourceId` of an object that you've called [`dispose()`](/classes/ReactiveModule.ScalarSignalSource#methods) on.
 * 
 * * `sourceId` - the unique ID of the signal to create or retrieve.
 */
static stringSignalSource(sourceId: string): StringSignalSource;

/**
*  
 * sub(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * sub(x: PointSignal, y: VectorSignal): PointSignal
 * sub(x: VectorSignal, y: VectorSignal): VectorSignal
 * sub(x: PointSignal, y: PointSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the difference of the values of the given signals.
 * **See Also**: `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
 */
static sub(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

static sub(x: PointSignal, y: VectorSignal): PointSignal;

static sub(x: VectorSignal, y: VectorSignal): VectorSignal;

static sub(x: PointSignal, y: PointSignal): VectorSignal;

/**
*  
 * sum(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * sum(x: PointSignal, y: VectorSignal): PointSignal
 * sum(x: VectorSignal, y: PointSignal): PointSignal
 * sum(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */
static sum(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal;

static sum(x: PointSignal, y: VectorSignal): PointSignal;

static sum(x: VectorSignal, y: PointSignal): PointSignal;

static sum(x: VectorSignal, y: VectorSignal): VectorSignal;

/**
*  
 * sumList(x: Array<number | ScalarSignal>): ScalarSignal
 *  
 * 
 * Returns a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) containing the value that is the sum of all of the values in the array specified.
 *  
 * const numArray = [1, 2, 3];
 * const arraySum = Reactive.sumList(numArray); // Returns 6 (1 + 2 + 3)
 *  
 * 
 * * `x` - an array of numbers and/or [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal)s to add together.
 */
static sumList(x: Array<number | ScalarSignal>): ScalarSignal;

/**
*  
 * switch(condition: StringSignal, map: {[key: string]: string}, defaultValue: string): StringSignal
 *  
 * 
 * Returns a [`StringSignal`](/classes/ReactiveModule.StringSignal) object, the value of which is determined by the current value of the `condition` argument.
 * If the value of the `condition` matches a key from `map`, the the corresponding value is assigned to the returned `StringSignal`. Otherwise, `defaultValue` is assigned.
 * 
 *  
 * var condition = Reactive.val("Option 0");
 * 
 * var switchString = Reactive.switch(condition, {
 *   "Option 0": "Apple",
 *   "Option 1": "Banana",
 *   "Option 2": "Orange"
 * }, "Mango");
 * 
 * // Value of 'switchString': Apple
 *  
 * 
 * * `condition` - the `StringSignal` to monitor the value of.
 * * `map` - a map containing key-value pairs to compare `condition` against. If `condition` matches a key, the corresponding value is assigned to the `StringSignal` returned by the method.
 * * `defaultValue` - the default value to assign to the `StringSignal` returned by the method, if `condition` does not match any of the keys from `map`.
 */
static switch(condition: StringSignal | string, map: {[key: string]: string}, defaultValue: string): StringSignal;

/**
*  
 * tan(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the tangent of the value of the given signal (interpreted as radians).
 */
static tan(x: ScalarSignal | number): ScalarSignal;

/**
*  
 * toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */
static toRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal;

/**
*  
 * transform(translation: PointSignal, scale: PointSignal, rotation: QuaternionSignal): TransformSignal
 *  
 * 
 * Creates a scene object transform from translation, scale and rotation rotation
 */
static transform(translation: PointSignal, scale: PointSignal, rotation: QuaternionSignal): TransformSignal;

/**
*  
 * val(constant: number): ScalarSignal
 * val(constant: string): StringSignal
 * val(constant: boolean): BoolSignal
 * val(constant: Box2D): Box2DSignal
 * val(constant: Point3D | Vec3): PointSignal
 * val(constant: Point2D | Vec2): Vec2Signal
 * val(constant: Vec4): Vec4Signal
 * val(constant: Box3D): Box3DSignal
 * val(constant: Rotation): QuaternionSignal
 * val(constant: Mat4): TransformSignal
 *  
 * 
 * Returns a signal containing a constant value, as specified by the argument.
 * The type of signal returned ([`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`StringSignal`](/classes/ReactiveModule.StringSignal), [`BoolSignal`](/classes/ReactiveModule.BoolSignal), [`Box2DSignal`](/classes/ReactiveModule.Box2DSignal), [`Box3DSignal`](/classes/ReactiveModule.Box3DSignal), [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal), [`PointSignal`](/classes/ReactiveModule.PointSignal), [`Vec4Signal`](/classes/ReactiveModule.Vec4Signal), [`QuaternionSignal`](/classes/ReactiveModule.QuaternionSignal), or [`TransformSignal`](/classes/ReactiveModule.TransformSignal)) depends on the value passed.
 * 
 * Raw JavaScript types (`number`, `string`, `bool`, `Box2D`, `Point3D`, `Vec3`, `Point2D`, `Vec2`, `Vec4`, `Box3D`, `Rotation`, `Mat4`) are implicitly converted to their signal equivalents when passed as a method argument or when setting a property. Converting the values to signals with `Reactive.val()` method is not required.
 * 
 * * `val` - the value to assign to the constructed signal.
 */
static val(constant: number): ScalarSignal;

static val(constant: string): StringSignal;

static val(constant: boolean): BoolSignal;

static val(constant: Box2D): Box2DSignal;

static val(constant: Point3D | Vec3): PointSignal;

static val(constant: Point2D | Vec2): Vec2Signal;

static val(constant: Vec4): Vec4Signal;

static val(constant: Box3D): Box3DSignal;

static val(constant: Rotation): QuaternionSignal;

static val(constant: Mat4): TransformSignal;

/**
*  
 * vector(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): VectorSignal
 *  
 * 
 * Constructs a [`VectorSignal`](/classes/ReactiveModule.VectorSignal) from the three [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) or `number` values provided.
 * * `x` - the x component of the 3D vector.
 * * `y` - the y component of the 3D vector.
 * * `z` - the z component of the 3D vector.
 */
static vector(x: ScalarSignal | number, y: ScalarSignal | number, z: ScalarSignal | number): VectorSignal;

/**
*  
 * xor(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal
 *  
 * 
 * Performs a logical XOR operation with the `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If only one of the signals specified is `true` then `true` is returned. If both, or neither, of the signals are `true` then `false` is returned.
 * 
 * `BoolSignal` objects provide their own equivalent [`xor()`](/classes/ReactiveModule.BoolSignal#methods) method that can be called directly from the object instead of through `Reactive.xor()`.
 * 
 * * `lhs` - the first boolean to perform the logical XOR operation with.
 * * `rhs` - the second boolean to perform the logical XOR operation with.
 */
static xor(lhs: BoolSignal | boolean, rhs: BoolSignal | boolean): BoolSignal;

/**
*  
 * xorList(x: Array<BoolSignal>): BoolSignal
 *  
 * 
 * Performs a logical XOR operation with the array of `BoolSignal`s specified and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If only one of the signals in the array is `true` then `true` is returned. If more than one, or none, of the signals are `true` then `false` is returned.
 * 
 * * `x` - the array of booleans to perform the logical XOR operation with.
 */
static xorList(x: Array<BoolSignal>): BoolSignal;

/**
 * The `AntiderivativeOverflowBehaviour` enum describes the recovery technique used when an
antiderivative overflows.
 * @property CLAMP Clamp to either min and max
 * @property WRAP Start from the other end of the interval (min,max)
 */
static readonly AntiderivativeOverflowBehaviour: {
  CLAMP: "CLAMP",
  WRAP: "WRAP",
}
}
export = ReactiveModule;
