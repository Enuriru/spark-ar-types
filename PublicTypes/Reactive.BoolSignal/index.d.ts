/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface BoolSignal {
/**
*  
 * and(other: BoolSignal): BoolSignal
 *  
 * 
 * Performs a logical AND operation with the signal and the `BoolSignal` passed to the method and returns the result as a `BoolSignal`.
 * If both signals are `true` then `true` is returned, otherwise `false` is returned.
 * 
 * To perform an AND operation with more than two operands, use the [`Reactive.andList()`](/classes/ReactiveModule#methods) method.
 * 
 * * `other` - the other `BoolSignal` to perform the logical AND operation with.
 */
and(other: BoolSignal | boolean): BoolSignal;

/**
*  
 * delayBy(timeSpan: {milliseconds: number}): BoolSignal
 *  
 * 
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */
delayBy(timeSpan: {milliseconds: number}): BoolSignal;

/**
*  
 * eq(other: BoolSignal | boolean): BoolSignal
 *  
 * 
 * Compares whether the signal's value is equal to the `BoolSignal` passed in the argument and returns the result as a `BoolSignal`.
 * If the values are equal `true` is returned, otherwise `false` is returned.
 * 
 * The [`Reactive.eq()`](/classes/ReactiveModule#methods) method also allows two `BoolSignal`s to be compared.
 * 
 * * `other` - the `BoolSignal` to compare against.
 */
eq(other: BoolSignal | boolean): BoolSignal;

/**
*  
 * history(framesCount: number, initialValues?: Array<boolean>): SignalHistory<boolean>
 *  
 * 
 * Returns a [`SignalHistory`](/classes/ReactiveModule.SignalHistory) object containing the values of the signal from past frames.
 * Historical signal values are initialized with the signal's value at the time the method was called, or with `initialValues` if provided.
 * 
 * * `framesCount` - the number of previous frames to track.
 * * `initialValues` - optional initial values for the signal.
 */
history(framesCount: number, initialValues?: Array<boolean>): SignalHistory<boolean>;

/**
*  
 * ifThenElse<T, U>(thenValue: EventSource<T>, elseValue: EventSource<U>): EventSource<T | U>
 * ifThenElse(thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal
 * ifThenElse(thenValue: StringSignal | string, elseValue: StringSignal | string): StringSignal
 * ifThenElse(thenValue: BoolSignal | boolean, elseValue: BoolSignal | boolean): BoolSignal
 *  
 * 
 * Constructs a conditional if-then-else expression with the signal as the boolean condition.
 * If the signal is `true` the returned signal will take the value of `thenValue`. Otherwise, it will take the value of `elseValue`. In the case of [`EventSource`](/classes/ReactiveModule.EventSource) objects being passed to the method, the corresponding event will be returned.
 * 
 * The type of signal returned ([`ScalarSignal`](/classes/ReactiveModule.ScalarSignal), [`StringSignal`](/classes/ReactiveModule.StringSignal) or `BoolSignal`) depends on the values passed.
 * 
 * * `thenValue` - the value or `EventSource` to return if the signal is `true`.
 * * `elseValue` - the value or `EventSource` to return if the signal is `false`.
 */
ifThenElse(thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal;

ifThenElse(thenValue: StringSignal | string, elseValue: StringSignal | string): StringSignal;

ifThenElse(thenValue: BoolSignal | boolean, elseValue: BoolSignal | boolean): BoolSignal;

/**
*  
 * monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of the `BoolSignal` changes.
 * The event contains a JSON object which provides the old and new values of the signal in the format `{ "oldValue": boolean, "newValue": boolean }`.
 * 
 *  
 * // Load in the required modules
 * const FaceTracking = require('FaceTracking');
 * const FaceGestures = require('FaceGestures');
 * const Diagnostics = require('Diagnostics');
 * 
 * // Create a reference to a detected face
 * const face = FaceTracking.face(0);
 * 
 * // Create a reference to whether the detected face is smiling
 * const isSmiling = FaceGestures.isSmiling(face);
 * 
 * // Monitor changes to the value of the 'isSmiling' signal
 * isSmiling.monitor({fireOnInitialValue: false}).subscribe((event) => {
 * 
 *   // Log the old and new values to the console
 *   Diagnostics.log(`Old isSmiling value: ${event.oldValue}`);
 *   Diagnostics.log(`New isSmiling value: ${event.newValue}`);
 * });
 *  
 * 
 * * `config` - an optional configuration for the event source.
 * 
 * The `config` JSON object can have the following field:
 * 
 * **`fireOnInitialValue`** - specifies whether an initial event should be emitted containing the signal's initial value. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValue` will not be available for the first instance.
 */
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>;

/**
*  
 * ne(other: BoolSignal | boolean): BoolSignal
 *  
 * 
 * Compares whether the signal's value is not equal to the `BoolSignal` passed in the argument and returns the result as a `BoolSignal`.
 * If the values are not equal `true` is returned, otherwise `false` is returned.
 * 
 * The [`Reactive.ne()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `BoolSignal` to compare against.
 */
ne(other: BoolSignal | boolean): BoolSignal;

/**
*  
 * not(): BoolSignal
 *  
 * 
 * Performs a logical NOT operation with the signal and returns the result as a `BoolSignal`.
 * If the signal is `true`, `false` will be returned and vice versa.
 * 
 * The [`Reactive.not()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 */
not(): BoolSignal;

/**
*  
 * onOff(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of the signal changes to `false`.
 * The event contains a JSON object which provides the old and new values of the signal in the format `{ "oldValue": boolean, "newValue": boolean }`.
 * 
 * * `config` - an optional configuration for the event source.
 * 
 * The `config` JSON object can have the following field:
 * 
 * **`fireOnInitialValue`** - specifies whether an initial event should be emitted containing the signal's initial value. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValue` will not be available for that first instance.
 */
onOff(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>;

/**
*  
 * onOn(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of the signal changes to `true`.
 * The event contains a JSON object which provides the old and new values of the signal in the format `{ "oldValue": boolean, "newValue": boolean }`.
 * 
 * * `config` - an optional configuration for the event source.
 * 
 * The `config` JSON object can have the following field:
 * 
 * **`fireOnInitialValue`** - specifies whether an initial event should be emitted containing the signal's initial value. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValue` will not be available for that first instance.
 */
onOn(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>;

/**
*  
 * or(other: BoolSignal): BoolSignal
 *  
 * 
 * Performs a logical OR operation with the signal and the `BoolSignal` passed to the method and returns the result as a `BoolSignal`.
 * If either one, or both, of the signals are `true` then `true` is returned. If neither signal is `true` then `false` is returned.
 * 
 * To perform an OR operation with more than two operands, use the [`Reactive.orList()`](/classes/ReactiveModule#methods) method.
 * 
 * * `other` - the other `BoolSignal` to perform the logical OR operation with.
 */
or(other: BoolSignal | boolean): BoolSignal;

/**
*  
 * pin(): BoolSignal
 *  
 * 
 * Returns a new `BoolSignal` with a constant value, which is equal to the value that the original signal contained immediately after the method was called.
 */
pin(): BoolSignal;

/**
*  
 * pinLastValue(): ConstBoolSignal
 *  
 * 
 * Returns a `ConstBoolSignal` with a constant value, which is equal to the value that the original signal contained immediately before the method was called.
 * Unlike `BoolSignal` objects, `ConstBoolSignal` objects can be passed as an argument to methods that expect a primitive `bool` type.
 */
pinLastValue(): ConstBoolSignal;

/**
*  
 * xor(other: BoolSignal | boolean): BoolSignal
 *  
 * 
 * Performs a logical XOR operation with the signal and the `BoolSignal` passed to the method and returns the result as a `BoolSignal`.
 * If only one of the signals is `true` then `true` is returned. If both, or neither, of the signals are `true` then `false` is returned.
 * 
 * To perform an XOR operation with more than two operands, use the [`Reactive.xorList()`](/classes/ReactiveModule#methods) method.
 * 
 * * `other` - the other `BoolSignal` to perform the logical XOR operation with.
 */
xor(other: BoolSignal | boolean): BoolSignal;

}
