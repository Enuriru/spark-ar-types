/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"location","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `LocationModule` class provides access to geolocation of the device.
**Note**: whenever the geolocation data is available to the effect is solely
in control of the device user and cannot be guaranteed.
Use `hasValidLocation` to check for such data availability.
*/
declare interface Location extends Module {

/**
```
(get) hasValidLocation: BoolSignal
(set) (Not Available)
```

`BoolSignal` describing whenever or not the geolocation provided by
`coordinate` property is valid.
*/
hasValidLocation: BoolSignal

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

/**
```
injectLocation(latitude: Number, longitude: Number, altitude: Number): void
```

Inject Location which injects a longitude, latitude, and altitude
*/
injectLocation(latitude: Number, longitude: Number, altitude: Number): void

}
