/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
`Speed` encapsulates signals describing device speed in preferred unit.
*/
declare interface Speed {

/**
```
(get) kph: ScalarSignal
(set) (Not Available)
```

Current device speed in Kilometre Per Hour.
*/
kph: ScalarSignal

/**
```
(get) mph: ScalarSignal
(set) (Not Available)
```

Current device speed in Miles Per Hour.
*/
mph: ScalarSignal

/**
```
(get) preferredUnit: SpeedUnit
(set) (Not Available)
```

Specifies the preferred unit of current device speed.
*/
preferredUnit: SpeedUnit

}
