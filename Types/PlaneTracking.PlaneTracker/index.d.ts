/// <reference path="../PlaneTracking.TrackingMode/index.d.ts" />
/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `PlaneTracker` class provides functionality for locating a 3D plane based on 2D screen coordinates.
When accessing the `realScaleActive` and `realScaleSupported` properties, ensure that Real World Scale is enabled in the PlaneTracker object's Inspector panel. See the [Real Scale for World](https://sparkar.facebook.com/ar-studio/learn/articles/world-effects/real-scale-for-world) article for more information.
*/
declare interface PlaneTracker extends SceneObjectBase {

/**
```
(get) confidence: StringSignal
(set) (Not Available)
```

Returns tracking confidence level info.
This value indicates if PlaneTracker is currently tracking and how confident it is in reported results.
Possible values:
- HIGH
- MEDIUM
- LOW
- NOT_TRACKING
*/
confidence: StringSignal

/**
```
(get) mode: StringSignal<TrackingMode>
(set) mode: StringSignal<TrackingMode>
```

Specifies if this tracker object should track horizontal plane or moving object.
**Note:** on invalid value provided in setter, the mode will default to `TrackingMode.PLANE`.

**See Also**: `PlaneTracker.setMode`.
*/
mode: StringSignal<TrackingMode>

/**
```
performHitTest(screenXLocation: number, screenYLocation: number): Promise<Point3D>
performHitTest(screenLocation: Point2D): Promise<Point3D>
```

Returns a promise that is resolved with a point on tracked plane in local coordinates of PlaneTracker (in 3D units)
or null if plane is not found at given screen location.
*/
performHitTest(screenXLocation: number, screenYLocation: number): Promise<Point3D>

/**
```
setMode(mode: StringSignal<TrackingMode>, config?: {fallback: TrackingMode}): void
```

Specifies if this tracker object should track horizontal plane or moving object.
**Note:** on invalid value provided in setter, the mode will default to `fallback` (or `TrackingMode.PLANE` if fallback is not specified).

**See Also**: `PlaneTracker.mode`.
*/
setMode(mode: StringSignal<TrackingMode>, config?: {fallback: TrackingMode}): void

/**
```
trackPoint(screenLocation: Point2D): void
trackPoint(screenX: number, screenY: number): void
trackPoint(screenLocation: Vec2Signal, gestureState: StringSignal): void
```

PlaneTracker origin is bound to a point in 3d space, located on detected plane.
This method updates PlaneTracker to track 3d point currently under given screen coordiantes.
This also triggers new plane detection, in result this object's transform will be modified.
Version with signal parameters can be used in touch gestures for continuous updating:
```
TouchGestures.onPan().subscribe(function(gesture) {
  planeTracker.trackPoint(gesture.location, gesture.state);
});
```
*/
trackPoint(screenLocation: Point2D): void

}
