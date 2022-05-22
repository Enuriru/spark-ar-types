/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface TargetTracker extends SceneObjectBase {
/**
* ```
(get) confidence: StringSignal
(set) (Not Available)
```

Returns the tracking confidence level, which describes how confident the tracker is
in the reported results or whether the tracker is not currently tracking.
The returned value will be one of the following:
- HIGH
- MEDIUM
- LOW
- NOT_TRACKING
*/
confidence: StringSignal;
/**
* ```
(get) isTracking: BoolSignal
(set) (Not Available)
```

Returns whether the TargetTracker is actively tracking a target in the camera view.
*/
isTracking: BoolSignal;
/**
* ```
(get) outOfViewTrackingActive: BoolSignal
(set) (Not Available)
```

Returns whether the TargetTracker is actively tracking, even if the target has exited the camera's field of view.
*/
outOfViewTrackingActive: BoolSignal;
}
