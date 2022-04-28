/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `ArrayOfScalarSignals` class describes an array of scalar signals.
It extends the implementation of `Array<ScalarSignal>` type in JavaScript,
and adds a single additional method to get a sampler at a particular index - `get()`.
*/
declare interface ArrayOfScalarSignals extends Array<ScalarSignal> {

/**
```
get(index: number): ScalarSignal
```

Returns the signal indicated by the `index` parameter.
*/
get(index: number): ScalarSignal

}
