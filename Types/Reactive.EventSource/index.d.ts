/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />

/**
The `EventSource` class provides methods for monitoring signals.
*/
declare interface EventSource extends ISignal {

/**
```
holdAsScalar(): ScalarSignal
```

*/
holdAsScalar(): ScalarSignal

/**
```
holdAsString(): StringSignal
```

*/
holdAsString(): StringSignal

/**
```
merge(other: EventSource<T>): EventSource<T>
```

*/
merge(other: EventSource<T>): EventSource<T>

/**
```
select<Prop>(property: Prop): EventSource<>
```

Converts event source by selecting a property in the event object. Events without specified property are ignored.
*/
select

/**
```
skip(count: number): EventSource<T>
```

Yields a filtered event source: the first `count` events from the original source are dropped, and subsequent ones signaled.
*/
skip(count: number): EventSource<T>

/**
```
subscribe(callback: {}): Subscription
```

Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
**See Also**: `Subscription.unsubscribe`.

**Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
*/
subscribe(callback: {}): Subscription

/**
```
subscribeOnNext(callback: {}): Subscription
```

Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
**See Also**: `Subscription.unsubscribe`.

**Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
*/
subscribeOnNext(callback: {}): Subscription

/**
```
subscribeWithSnapshot(snapshot: {[name: string]: BoolSignal | StringSignal | ScalarSignal}, callback: {}): Subscription
```

Sets a callback for the event source, similar to `Subscribe` function, but with additional `Snapshot` parameter.
`Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals
*/
subscribeWithSnapshot(snapshot: {[name: string]: BoolSignal | StringSignal | ScalarSignal}, callback: {}): Subscription

/**
```
take(count: number): EventSource<T>
```

Yields a filtered event source: the first `count` events from the original source are signaled, and subsequent ones ignored.
*/
take(count: number): EventSource<T>

/**
```
toggle(initialValue?: false | true): BoolSignal
```

*/
toggle(initialValue?: false | true): BoolSignal

}
