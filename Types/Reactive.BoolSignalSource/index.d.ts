/// <reference path="../Reactive.BoolSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1489134519},{"kind":"capability","capability":"scriptingWriteableSignalSource","orCapability":""}]
*/


/**
`BoolSignalSource` class which could get and set value of a signal
*/
declare interface BoolSignalSource {

/**
```
(get) signal: BoolSignal
(set) (Not Available)
```

Get a signal to monitor the value
*/
signal: BoolSignal

/**
```
dispose(): void
```

Dispose the signal resources associated with current BoolSignalSource
*/
dispose(): void

/**
```
set(value: BoolSignal | boolean): void
```

Set the value of the source so all related signals would be updated with new value
*/
set(value: BoolSignal | boolean): void

}
