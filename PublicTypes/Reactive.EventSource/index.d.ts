/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />
declare interface EventSource<T> extends ISignal {
/**
*  
 * skip(count: number): EventSource<T>
 *  
 * 
 * Yields a filtered event source: the first `count` events from the original source are dropped, and subsequent ones signaled.
 * * `count` - the number of event instances to skip.
 */
skip(count: number): EventSource<T>;

/**
*  
 * subscribe(callback: {}): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 * 
 * * `callback` - The callback function to call when the event is fired.
 */
subscribe(callback: {}): Subscription;

/**
*  
 * subscribeOnNext(callback: {}): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 * 
 * * `callback` - The callback function to call when the event is fired.
 */
subscribeOnNext(callback: {}): Subscription;

/**
*  
 * subscribeWithSnapshot(snapshot: {[name: string]: BoolSignal | StringSignal | ScalarSignal | Box2DSignal | Box3DSignal | TransformSignal | QuaternionSignal | VectorSignal | PointSignal | Vec2Signal | Vec4Signal}, callback: {}): Subscription
 *  
 * 
 * Sets a callback for the event source, similar to `Subscribe` function, but with additional `Snapshot` parameter.
 * `Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals
 * 
 * * `snapshot` - A dictionary containing [`BoolSignal`](/classes/ReactiveModule.BoolSignal), [`StringSignal`](/classes/ReactiveModule.ScalarSignal) and [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal) signals, which are passed as JSON to the callback function with the last value each signal contained at call time.
 * * `callback` - The callback function to call when the event is fired.
 */
subscribeWithSnapshot(snapshot: {[name: string]: BoolSignal | StringSignal | ScalarSignal | Box2DSignal | Box3DSignal | TransformSignal | QuaternionSignal | VectorSignal | PointSignal | Vec2Signal | Vec4Signal}, callback: {}): Subscription;

/**
*  
 * take(count: number): EventSource<T>
 *  
 * 
 * Yields a filtered event source: the first `count` events from the original source are signaled, and subsequent ones ignored.
 * * `count` - the number of event instances to signal.
 */
take(count: number): EventSource<T>;

}
