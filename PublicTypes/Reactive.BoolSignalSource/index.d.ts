/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface BoolSignalSource {
/**
* ```
(get) signal: BoolSignal
(set) (Not Available)
```

The signal being monitored by the `BoolSignalSource` object.
Accessing the signal's value before one has been assigned via `set()` will return `false`.
*/
signal: BoolSignal;
/**
*  
 * dispose(): void
 *  
 * 
 * Disposes of the native resources associated with the `BoolSignalSource` object.
 * The `BoolSignalSource` object will still exist as a JavaScript object but will not receive updates through future calls to `set()`. Do not call `dispose()` until you're certain that the signal is no longer required.
 * 
 * When calling [`ReactiveModule.boolSignalSource`](/classes/ReactiveModule#methods), avoid reusing the `sourceId` of an object that you've called `dispose()` on.
 */
dispose(): void;

/**
*  
 * set(value: BoolSignal | boolean): void
 *  
 * 
 * Sets the value of the signal monitored by the `BoolSignalSource` object to `value`.
 * The updated signal value will be propagated throughout all signals related to the `BoolSignalSource`.
 * 
 * If `set()` is called before `signal`, `signal` will return the value assigned by `set()` when called, rather than the default value of `false`.
 * 
 * * `value` - the value to assign to the signal, as a boolean or [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
 */
set(value: BoolSignal | boolean): void;

}
