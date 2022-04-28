/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"geoanchor","orCapability":""},{"kind":"introducedBy","version":3005326071}]
*/


declare interface GeoTrackingStatus {

/**
```
(get) highQualityThreshold: number
(set) (Not Available)
```
*/
highQualityThreshold: number

/**
```
(get) lowQualityThreshold: number
(set) (Not Available)
```
*/
lowQualityThreshold: number

/**
```
(get) quality: ScalarSignal
(set) (Not Available)
```
*/
quality: ScalarSignal

/**
```
(get) state: StringSignal<GeoTrackingState>
(set) (Not Available)
```

Returns the current state of the world tracker.
*/
state: StringSignal<GeoTrackingState>

/**
```
(get) stateReason: StringSignal<GeoTrackingStateReason>
(set) (Not Available)
```

Returns the reason the world tracker is experiencing limited tracking quality,
if the value returned by `WorldTrackingModule.state` is `LIMITED`.
*/
stateReason: StringSignal<GeoTrackingStateReason>

}
