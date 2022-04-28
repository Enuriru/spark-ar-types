/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":1489134519},{"kind":"capability","capability":"scriptingWriteableSignalSource","orCapability":""}]
*/


/**
`StringSignalSource` class which could get and set value of a signal
*/
declare interface StringSignalSource {

/**
```
(get) signal: StringSignal
(set) (Not Available)
```

Get a signal to monitor the value
*/
signal: StringSignal

/**
```
dispose(): void
```

Dispose the signal resources associated with current StringSignalSource
*/
dispose(): void

/**
```
set(value: StringSignal | string): void
```

Set the value of the source so all related signals would be updated with new value
*/
set(value: StringSignal | string): void

}
