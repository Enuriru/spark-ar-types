/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"geoanchor","orCapability":""},{"kind":"introducedBy","version":3047268080}]
*/


declare interface GeoAnchorTrackingProperties {

/**
```
(get) deviceLatitude: ScalarSignal
(set) (Not Available)
```

Returns the device latitude.
*/
deviceLatitude: ScalarSignal

/**
```
(get) deviceLongitude: ScalarSignal
(set) (Not Available)
```

Returns the device longitude.
*/
deviceLongitude: ScalarSignal

/**
```
(get) headingAccuracyDegrees: ScalarSignal
(set) (Not Available)
```

Returns the device heading accuracy in degrees.
*/
headingAccuracyDegrees: ScalarSignal

/**
```
(get) locationAccuracyMeters: ScalarSignal
(set) (Not Available)
```

Returns the device location accuracy in meters.
*/
locationAccuracyMeters: ScalarSignal

}
