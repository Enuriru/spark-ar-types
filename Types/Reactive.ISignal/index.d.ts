
/**
The `ISignal` interface. The base class for `ScalarSignal`, `PointSignal`, `VectorSignal`, `BoolSignal`, and `StringSignal`.
*/
declare interface ISignal {

/**
```
valueOf(): void
```

Throws an error. Signals are not supposed to be implicitly converted to scalar values.
**See also**: `ScalarSignal.add`, `ScalarSignal.sub`, `ScalarSignal.mul`, `ScalarSignal.div`
*/
valueOf(): void

}
