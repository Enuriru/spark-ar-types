/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1489134519},{"kind":"capability","capability":"scriptingWriteableSignalSource","orCapability":""}]
*/


/**
`ScalarSignalSource` class which could get and set value of a signal
*/
declare interface ScalarSignalSource {

/**
```
(get) signal: ScalarSignal
(set) (Not Available)
```

Get a signal to monitor the value
*/
signal: ScalarSignal

/**
```
dispose(): void
```

Dispose the signal resources associated with current ScalarSignalSource
*/
dispose(): void

/**
```
set(value: ScalarSignal | number): void
```

Set the value of the source so all related signals would be updated with new value
*/
set(value: ScalarSignal | number): void

}
