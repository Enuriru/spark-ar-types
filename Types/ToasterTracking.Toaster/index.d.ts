/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"toasterTracking","orCapability":""},{"kind":"introducedBy","version":1179878185}]
*/


/**
The `Toaster` class exposes the details of a detected toaster.
*/
declare interface Toaster {

/**
```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` object describing the toaster transformation relative to camera coordinate system.
**Note**: `cameraTransform.applyTo(point)`, where `point` is a point in toaster local coordinate system, returns a point in camera local coordinate system.
*/
cameraTransform: TransformSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

A `boolSignal` indicating whether the toaster was tracked this frame.
If the toaster was not tracked, other properties represent the most recent tracked frame.
*/
isTracked: BoolSignal

/**
```
(get) toastSlot: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the toast slot, in the toaster local coordinate system.
*/
toastSlot: PointSignal

/**
```
extensionMethod(s: string): string
```

*/
extensionMethod(s: string): string

}
