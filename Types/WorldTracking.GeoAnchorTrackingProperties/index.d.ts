/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"geoanchor","orCapability":""},{"kind":"introducedBy","version":3047268080}]
*/


declare interface GeoAnchorTrackingProperties {

/**
```
(get) locationAccuracyMeters: ScalarSignal
(set) (Not Available)
```

Returns the device location accuracy in meters.
*/
locationAccuracyMeters: ScalarSignal

/**
```
(get) orientationAccuracyDegrees: ScalarSignal
(set) (Not Available)
```

Returns the device orientation accuracy in degrees.
*/
orientationAccuracyDegrees: ScalarSignal

}
