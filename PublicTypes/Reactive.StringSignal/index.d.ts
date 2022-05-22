/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />
declare interface StringSignal {
/**
*  
 * concat(other: StringSignal | string): StringSignal
 *  
 * 
 * Returns a `StringSignal` containing the concatenation of the values specified by the input signals.
 * **See Also**: `ReactiveModule.concat`
 * 
 * * `other` - the `StringSignal` or string to concatenate with.
 */
concat(other: StringSignal | string): StringSignal;

/**
*  
 * contains(searchFor: StringSignal | string): BoolSignal
 *  
 * 
 * If the value contains the value of `searchFor` then `true` is returned. If not, then `false` is returned.
 */
contains(searchFor: StringSignal | string): BoolSignal;

/**
*  
 * delayBy(timeSpan: {milliseconds: number}): StringSignal
 *  
 * 
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */
delayBy(timeSpan: {milliseconds: number}): StringSignal;

/**
*  
 * eq(other: StringSignal | string): BoolSignal
 *  
 * 
 * Compares whether the signal's value is equal to the value of the `StringSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is equal to the value of `other` then `true` is returned. If not, then `false` is returned.
 * 
 * The [`Reactive.eq()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `StringSignal` or string to compare against.
 */
eq(other: StringSignal | string): BoolSignal;

/**
*  
 * history(framesCount: number, initialValues?: Array<string>): SignalHistory<string>
 *  
 * 
 * Returns a [`SignalHistory`](/classes/ReactiveModule.SignalHistory) object containing the values of the signal from past frames.
 * Historical signal values are initialized with the signal's value at the time the method was called, or with `initialValues` if provided.
 * 
 * * `framesCount` - the number of previous frames to track.
 * * `initialValues` - optional initial values for the signal.
 */
history(framesCount: number, initialValues?: Array<string>): SignalHistory<string>;

/**
*  
 * monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: string, oldValue: string}>
 *  
 * 
 * Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that emits an event whenever the value of the `StringSignal` changes.
 * The event contains a JSON object which provides the old and new values of the signal in the format `{ "oldValue": number, "newValue": number }`.
 * 
 *  
 * // Load in the required modules
 * const Locale = require('Locale');
 * const Diagnostics = require('Diagnostics');
 * 
 * // Get the device's language
 * const language = Locale.language;
 * 
 * // Monitor changes to the value of the 'language' signal
 * language.monitor({fireOnInitialValue: false}).subscribe((event) => {
 * 
 *   // Log the device language to the console
 *   Diagnostics.log(`My language is: ${event.newValue}`);
 * 
 *   // Old values of a given StringSignal can also be accessed
 *   // Diagnostics.log(`Previous value: ${event.oldValue}`);
 * });
 *  
 * 
 * * `config` - an optional configuration for the event source.
 * 
 * The `config` JSON object can have the following field:
 * 
 * **`fireOnInitialValue`** - specifies whether an initial event should be emitted containing the signal's initial value. If no value is specified, `false` is used by default. If set to `true`, an initial event will be emitted but `oldValue` will not be available for the first instance.
 */
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: string, oldValue: string}>;

/**
*  
 * ne(other: StringSignal | string): BoolSignal
 *  
 * 
 * Compares whether the signal's value is not equal to the value of the `StringSignal` passed in the argument and returns the result as a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 * If the value is not equal to the value of `other` then `true` is returned. If the values are equal then `false` is returned.
 * 
 * The [`Reactive.ne()`](/classes/ReactiveModule#methods) method provides equivalent functionality.
 * 
 * * `other` - the `StringSignal` or string to compare against.
 */
ne(other: StringSignal | string): BoolSignal;

/**
*  
 * pin(): StringSignal
 *  
 * 
 * Returns a new `StringSignal` with a constant value, which is equal to the value that the original signal contained immediately after the method was called.
 */
pin(): StringSignal;

/**
*  
 * pinLastValue(): ConstStringSignal
 *  
 * 
 * Returns a `ConstStringSignal` with a constant value, which is equal to the value that the original signal contained immediately before the method was called.
 * Unlike `StringSignal` objects, `ConstStringSignal` objects can be passed as an argument to methods that expect a primitive `string` type.
 */
pinLastValue(): ConstStringSignal;

}
