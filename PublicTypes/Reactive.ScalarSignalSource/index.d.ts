/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface ScalarSignalSource {
/**
* ```
(get) signal: ScalarSignal
(set) (Not Available)
```

The signal being monitored by the `ScalarSignalSource` object.
Accessing the signal's value before one has been assigned via `set()` will return `0`.
*/
signal: ScalarSignal;
/**
*  
 * dispose(): void
 *  
 * 
 * Disposes of the native resources associated with the `ScalarSignalSource` object.
 * The `ScalarSignalSource` object will still exist as a JavaScript object but will not receive updates through future calls to `set()`. Do not call `dispose()` until you're certain that the signal is no longer required.
 * 
 * When calling [`ReactiveModule.scalarSignalSource`](/classes/ReactiveModule#methods), avoid reusing the `sourceId` of an object that you've called `dispose()` on.
 */
dispose(): void;

/**
*  
 * set(value: ScalarSignal | number): void
 *  
 * 
 * Sets the value of the signal monitored by the `ScalarSignalSource` object to `value`.
 * The updated signal value will be propagated throughout all signals related to the `ScalarSignalSource`.
 * 
 * If `set()` is called before `signal`, `signal` will return the value assigned by `set()` when called, rather than the default value of `0`.
 * 
 * * `value` - the value to assign to the signal, as a number or [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
 */
set(value: ScalarSignal | number): void;

}
