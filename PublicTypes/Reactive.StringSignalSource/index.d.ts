/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface StringSignalSource {
/**
* ```
(get) signal: StringSignal
(set) (Not Available)
```

The signal being monitored by the `StringSignalSource` object.
Accessing the signal's value before one has been assigned via `set()` will return an empty string.
*/
signal: StringSignal;
/**
*  
 * dispose(): void
 *  
 * 
 * Disposes of the native resources associated with the `StringSignalSource` object.
 * The `StringSignalSource` object will still exist as a JavaScript object but will not receive updates through future calls to `set()`. Do not call `dispose()` until you're certain that the signal is no longer required.
 * 
 * When calling [`ReactiveModule.stringSignalSource`](/classes/ReactiveModule#methods), avoid reusing the `sourceId` of an object that you've called `dispose()` on.
 */
dispose(): void;

/**
*  
 * set(value: StringSignal | string): void
 *  
 * 
 * Sets the value of the signal monitored by the `StringSignalSource` object to `value`.
 * The updated signal value will be propagated throughout all signals related to the `StringSignalSource`.
 * 
 * If `set()` is called before `signal`, `signal` will return the value assigned by `set()` when called, rather than the default empty string.
 * 
 * * `value` - the value to assign to the signal, as a string or [`StringSignal`](/classes/ReactiveModule.StringSignal).
 */
set(value: StringSignal | string): void;

}
