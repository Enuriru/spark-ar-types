/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />
/// <reference path="../TouchGestures.GestureType/index.d.ts" />
/// <reference path="../TouchGestures.LongPressGesture/index.d.ts" />
/// <reference path="../TouchGestures.PanGesture/index.d.ts" />
/// <reference path="../TouchGestures.PinchGesture/index.d.ts" />
/// <reference path="../TouchGestures.RotateGesture/index.d.ts" />
/// <reference path="../TouchGestures.TapGesture/index.d.ts" />
declare class TouchGesturesModule {
/**
*  
 * onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`LongPressGesture`](/classes/touchgesturesmodule.longpressgesture) object for each long press interaction.
 * * `options` - an optional configuration for the long press gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
 * When passing a JSON formatted object as an argument, the following fields are valid:
 * * `object` - the object to register long press gestures for. When specified, this event will ignore long press gestures that occur on objects other than `object`.
 * * `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
 */
static onLongPress(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<LongPressGesture>;

/**
*  
 * onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`PanGesture`](/classes/touchgesturesmodule.pangesture) object for each pan interaction.
 * * `options` - an optional configuration for the pan gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
 * When passing a JSON formatted object as an argument, the following fields are valid:
 * * `object` - the object to register pan gestures for. When specified, this event will ignore pan gestures that occur on objects other than `object`.
 * * `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
 */
static onPan(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PanGesture>;

/**
*  
 * onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`PinchGesture`](/classes/touchgesturesmodule.pinchgesture) object for each pinch interaction.
 * * `options` - an optional configuration for the pinch gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
 * When passing a JSON formatted object as an argument, the following fields are valid:
 * * `object` - the object to register pinch gestures for. When specified, this event will ignore pinch gestures that occur on objects other than `object`.
 * * `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
 */
static onPinch(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<PinchGesture>;

/**
*  
 * onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`RotateGesture`](/classes/touchgesturesmodule.rotategesture) object for each rotation interaction.
 * * `options` - an optional configuration for the rotation gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
 * When passing a JSON formatted object as an argument, the following fields are valid:
 * * `object` - the object to register rotation gestures for. When specified, this event will ignore rotation gestures that occur on objects other than `object`.
 * * `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
 */
static onRotate(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<RotateGesture>;

/**
*  
 * onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new [`TapGesture`](/classes/touchgesturesmodule.tapgesture) object for each tap interaction.
 * * `options` - an optional configuration for the tap gesture event. You can either pass in a scene object, or a JSON formatted configuration with additional parameters.
 * When passing a JSON formatted object as an argument, the following fields are valid:
 * * `object` - the object to register tap gestures for. When specified, this event will ignore tap gestures that occur on objects other than `object`.
 * * `normalizeCoordinates` - whether to normalize the coordinates of the registered touch gesture's location. Normalized coordinates return a value between `0` and `1` in each axis.
 */
static onTap(options?: SceneObjectBase | {normalizeCoordinates?: false | true, object?: SceneObjectBase}): EventSource<TapGesture>;

/**
 * The `GestureType` enum describes the type of a given `Gesture`.
 * @property LONG_PRESS Indicates the long-press gesture.
 * @property PAN Indicates the pan gesture.
 * @property PINCH Indicates the pinch gesture.
 * @property RAW_TOUCH Indicates the raw touch gesture.
 * @property ROTATE Indicates the rotate gesture.
 * @property TAP Indicates the tap gesture.
 */
static readonly GestureType: {
  LONG_PRESS: "LONG_PRESS",
  PAN: "PAN",
  PINCH: "PINCH",
  RAW_TOUCH: "RAW_TOUCH",
  ROTATE: "ROTATE",
  TAP: "TAP",
}
}
export = TouchGesturesModule;
