/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"deprecatedBy","version":3623664000},{"kind":"removedBy","version":1478062290}]
*/


/**
`CoordinateSignal` encapsulates signals describing `latitude` and `longitude` of geolocation.
*/
declare interface CoordinateSignal {

/**
```
(get) latitude: ScalarSignal
(set) (Not Available)
```

Current device latitue.
**Note*: 0 if location is invalid.
**See**: `hasValidLocation`
*/
latitude: ScalarSignal

/**
```
(get) longitude: ScalarSignal
(set) (Not Available)
```

Current device longitude.
**Note*: 0 if location is invalid.
**See**: `hasValidLocation`
*/
longitude: ScalarSignal

}
