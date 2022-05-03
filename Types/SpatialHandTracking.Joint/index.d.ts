/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../SpatialGesture.Pose/index.d.ts" />
/// <reference path="../SpatialHandTracking.Pose/index.d.ts" />
/// <reference path="../SpatialHandTracking.Velocity/index.d.ts" />

declare interface Joint {

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```
*/
isTracked: BoolSignal

/**
```
(get) location: Pose
(set) (Not Available)
```
*/
location: Pose

/**
```
(get) velocity: Velocity
(set) (Not Available)
```
*/
velocity: Velocity

}
