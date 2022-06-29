/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackableState/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackableType/index.d.ts" />

/**
The `ARTrackable` class describes surface planes and feature points,
known collectively as 'trackables', that are detected in the view.
*/
declare interface ARTrackable {

/**
```
(get) center: PointSignal
(set) (Not Available)
```

Returns the position of the center of the surface plane in 3D space. This property is only valid for planes.
*/
center: PointSignal

/**
```
(get) extent: PointSignal
(set) (Not Available)
```

Returns the extent of the surface plane along the x and z axes using the length and width of the plane centered
around the center point, respectively. This property is only valid for planes.
*/
extent: PointSignal

/**
```
(get) id: StringSignal
(set) (Not Available)
```

Returns a `StringSignal` containing the unique ID assigned to the trackable that was detected.
*/
id: StringSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Returns whether the trackable is currently being tracked.
*/
isTracked: BoolSignal

/**
```
(get) normal: PointSignal
(set) (Not Available)
```

Returns the normal of the surface plane.
*/
normal: PointSignal

/**
```
(get) state: StringSignal<ARTrackableState>
(set) (Not Available)
```

Returns the current state of the trackable.
*/
state: StringSignal<ARTrackableState>

/**
```
(get) transform: TransformSignal
(set) (Not Available)
```

Returns the position, rotation, and scale of the entity in world coordinate space.
*/
transform: TransformSignal

/**
```
(get) type: StringSignal<ARTrackableType>
(set) (Not Available)
```

Returns the type of the trackable that was detected.
*/
type: StringSignal<ARTrackableType>

}
