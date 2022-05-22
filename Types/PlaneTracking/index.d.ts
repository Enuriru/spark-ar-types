/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../WorldTracking.TrackingState/index.d.ts" />


/**
[{"kind":"capability","capability":"realWorldScaleForWorldTracker","orCapability":""}]
*/


declare interface PlaneTracking extends Module {

/**
```
(get) failureReason: StringSignal<TrackingFailureReason>
(set) (Not Available)
```

Returns the reason the plane tracker failed to enter TRACKING state,
if the value returned by state() is `LIMITED`.
Possible values:
- NONE
- INITIALIZING
- EXCESSIVE_MOTION
- INSUFFICIENT_LIGHT
- INSUFFICIENT_FEATURES
*/
failureReason: StringSignal<TrackingFailureReason>

/**
```
(get) realScaleActive: BoolSignal
(set) (Not Available)
```

Returns a boolean signal indicating whether the plane tracker has entered a state in which the AR effect is able to display objects at real world scale.
If the target device doesn't support real scale, this will always return `false`. Use `realScaleSupported` to check if real scale is supported.
*/
realScaleActive: BoolSignal

/**
```
(get) realScaleSupported: ConstBoolSignal
(set) (Not Available)
```

Returns a boolean signal indicating whether the real world scale feature is supported on the target device.
If the capability hasn't been enabled for the plane tracker in the Inspector panel, this will return `false`.

If `true`, you can use `realScaleActive` to determine whether the effect is ready to display objects at real world scale.
*/
realScaleSupported: ConstBoolSignal

/**
```
(get) state: StringSignal<TrackingState>
(set) (Not Available)
```

Returns the current state of the plane tracker.
Possible values:
- NOT_AVAILABLE
- LIMITED
- TRACKING
*/
state: StringSignal<TrackingState>

}
