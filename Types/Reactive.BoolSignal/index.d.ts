/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.SignalHistory/index.d.ts" />

/**
The `BoolSignal` class monitors a boolean value.
*/
declare interface BoolSignal {

/**
```
(get) lastValue: boolean
(set) (Not Available)
```

Specifies a Boolean that represents the last value of the signal.
**Note**: The signal value is updated during simulation tick. This means that the value of `lastValue` is undefined before its first update. It is also undefined for signals that aren't used for any bindings/subscriptions, because those signals aren't guaranteed to be updated at each simulation tick.
*/
lastValue: boolean

/**
```
and(other: BoolSignal): BoolSignal
```

Returns a signal with the value that is the logical conjunction of the values of the given signals. It is `true` every time both input signals are `true` and `false` at all other times.
**See Also**: `BoolSignal.and`
*/
and(other: BoolSignal): BoolSignal

/**
```
delay(): BoolSignal
```

*/
delay(): BoolSignal

/**
```
delayBy(timeSpan: {milliseconds: number}): ISignal
```

Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
*/
delayBy(timeSpan: {milliseconds: number}): ISignal

/**
```
eq(other: BoolSignal | boolean): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **equal** to the value of the right-hand-side one, and the value of `false` all other time.
**Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.

**See Also**: `ReactiveModule.eq`
*/
eq(other: BoolSignal | boolean): BoolSignal

/**
```
history(framesCount: number, initialValues?: Array<boolean>): SignalHistory<boolean>
```

Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
*/
history(framesCount: number, initialValues?: Array<boolean>): SignalHistory<boolean>

/**
```
ifThenElse<T, U>(thenValue: EventSource<T>, elseValue: EventSource<U>): EventSource<T | U>
ifThenElse(thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal
ifThenElse(thenValue: StringSignal | string, elseValue: StringSignal | string): StringSignal
ifThenElse(thenValue: BoolSignal | boolean, elseValue: BoolSignal | boolean): BoolSignal
```

Returns a signal or an `EventSource` which at any point of time takes the value (passes the events in case of `EventSource`) of one or another inputs, depending on the momentary value of the given `BoolSignal`.
*/
ifThenElse(thenValue: ScalarSignal | number, elseValue: ScalarSignal | number): ScalarSignal

/**
```
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>
```

Returns an `EventSource` that emits an event every time the value of the input signal changes. The event contains a JSON object with the old and new values in the format:
```
{ "oldValue": boolean, "newValue": boolean }
```

**Note**: By default, there is no event fired for the initial value of the signal. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
*/
monitor(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>

/**
```
ne(other: BoolSignal | boolean): BoolSignal
```

Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **not equal** to the value of the right-hand-side one, and the value of `false` all other time.
**Note**: the scalar values are tested for exact equality. For some applications it might be reasonable to perform a non-strict comparison allowing the values to be within a small distance one from another.

**See Also**: `ReactiveModule.ne`
*/
ne(other: BoolSignal | boolean): BoolSignal

/**
```
not(): BoolSignal
```

Returns a signal with the logically negated value of the given signal.
**See Also**: `ReactiveModule.not`
*/
not(): BoolSignal

/**
```
onOff(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>
```

Returns an `EventSource` that emits an event every time the value of the input signal changes to `false`. The event contains a JSON object with the old and new values in the format:
```
{ "oldValue": boolean, "newValue": boolean }
```

**Note**: By default, there is no event fired for the initial value of the signal if it's `false` straight away. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
*/
onOff(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>

/**
```
onOn(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>
```

Returns an `EventSource` that emits an event every time the value of the input signal changes to `true`. The event contains a JSON object with the old and new values in the format:
```
{ "oldValue": boolean, "newValue": boolean }
```

**Note**: By default, there is no event fired for the initial value of the signal if it's `true` straight away. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
*/
onOn(config?: {fireOnInitialValue?: false | true}): EventSource<{newValue: boolean, oldValue: boolean}>

/**
```
or(other: BoolSignal): BoolSignal
```

Returns a signal with the value that is the logical disjunction of the values of the given signals. It is `true` every time at least one of the input signals is `true` and `false` at all other times.
**See Also**: `BoolSignal.or`
*/
or(other: BoolSignal): BoolSignal

/**
```
pin(): BoolSignal
```

Returns a `BoolSignal` containing a constant value which is the value of the specified signal immediately after `pin` is called.
*/
pin(): BoolSignal

/**
```
pinLastValue(): ConstBoolSignal
```

Returns a `ConstBoolSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
ConstBoolSignal can be passed to a functions which accept numbers.
*/
pinLastValue(): ConstBoolSignal

/**
```
xor(other: BoolSignal | boolean): BoolSignal
```

Returns a signal with the value that is the logical exclusive disjunction of the values of the given signals. It is `true` every time exactly one of the input signals is `true` and `false` at all other times.
**Note**: It is equivalent to `BoolSignal.ne`.

**See Also**: `ReactiveModule.xor`
*/
xor(other: BoolSignal | boolean): BoolSignal

}
