/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"geoanchor","orCapability":""},{"kind":"introducedBy","version":3047268080}]
*/


declare interface GeoAnchorTrackingProperties {

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
