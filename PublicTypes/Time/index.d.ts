/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />
declare class TimeModule {
/**
* ```
(get) deltaTimeMS: ScalarSignal
(set) (Not Available)
```

Retrieves delta time information in milliseconds from the effect.
*/
static readonly deltaTimeMS: ScalarSignal;
/**
* ```
(get) ms: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` indicating the number of milliseconds elapsed since the first frame.
*/
static readonly ms: ScalarSignal;
/**
*  
 * clearInterval(subscription: Subscription): void
 *  
 * 
 * Cancels a callback set by `setInterval`. This function is provided as a to match the traditional JS `clearInterval` API.
 * **Note**: This is equivalent to `Subscription.unsubscribe`.
 */
static clearInterval(subscription: Subscription): void;

/**
*  
 * clearTimeout(subscription: Subscription): void
 *  
 * 
 * Cancels a callback set by `setTimeout`. This has no effect if the timeout has already been triggered. This function is provided as a to match the traditional JS `clearTimeout` API.
 * **Note**: This is equivalent to `Subscription.unsubscribe`.
 */
static clearTimeout(subscription: Subscription): void;

/**
*  
 * setInterval(callback: {}, delay: number): Subscription
 *  
 * 
 * Returns a `Subscription` object. The function specified by `callback` is called at intervals specified by `delay` in milliseconds. The `setInterval` will continue calling the `callback` until `TimeModule.clearInterval` is called. The `callback` is a function that has one argument, the elapsed time since the timer started. An exception is thrown when the `delay` is zero or less.
 * **Note**: An interval can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearInterval`.
 */
static setInterval(callback: {}, delay: number): Subscription;

/**
*  
 * setIntervalWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription
 *  
 * 
 * Returns a `Subscription` object.
 * The function specified by `callback` is called at intervals specified by `delay` in milliseconds using `Snapshot` of signals.
 * `Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals.
 * The `setIntervalWithSnapshot` will continue calling the `callback` until `TimeModule.clearInterval` is called.
 * The `callback` is a function that has two arguments, the elapsed time since the timer started, and the snapshot JSON
 * An exception is thrown when the `delay` is zero or less.
 * 
 * **Note**: An interval can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearInterval`.
 */
static setIntervalWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription;

/**
*  
 * setTimeout(callback: {}, delay: number): Subscription
 *  
 * 
 * Returns a `Subscription` object. The function specified by `callback` is called after the specified `delay` in milliseconds. The `callback` is a function that has one argument, the elapsed time since the timer started.
 * **Note**: A timeout can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearTimeout`.
 * 
 * **Note**: This is equivalent to `Time.ms.sub(Time.ms.pin()).trigger(delay).subscribe(callback)`.
 */
static setTimeout(callback: {}, delay: number): Subscription;

/**
*  
 * setTimeoutWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription
 *  
 * 
 * Returns a `Subscription` object. The function specified by `callback` is called after the specified `delay` in milliseconds using `Snapshot` of signals.
 * `Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals.
 * The `callback` is a function that has two arguments, the elapsed time since the timer started and the snapshot JSON.
 * 
 * **Note**: A timeout can be canceled either via `Subscription.unsubscribe` or `TimeModule.clearTimeout`.
 * 
 * **Note**: This is equivalent to `Time.ms.sub(Time.ms.pin()).trigger(delay).subscribeWithSnapshot(snapshot, callback)`.
 */
static setTimeoutWithSnapshot(snapshot: {[name: string]: BoolSignal | ScalarSignal | StringSignal}, callback: {}, delay: number): Subscription;

}
export = TimeModule;
