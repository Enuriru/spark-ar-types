/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackable/index.d.ts" />
/// <reference path="../WorldTracking.HitTestType/index.d.ts" />


/**
[{"kind":"capability","capability":"multiplane","orCapability":""}]
*/


/**
The `ARPointTrackable` class describes a point trackable, also referred to as an anchor, at a fixed location and orientation in the real world.
*/
declare interface ARPointTrackable {

/**
```
(get) plane: ARTrackable
(set) (Not Available)
```

Returns the surface plane that the point trackable is currently snapped to, if the optional `snapToPlane` argument was passed
when the `move()` method was called.
*/
plane: ARTrackable

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
move(config: {fallbackToEstimatedPlanes?: false | true, planeType?: HitTestType, screenLocation: Vec2Signal, snapToPlane?: false | true, state: StringSignal}): void
```

Moves the ARPointTrackable, optionally snapping to the nearest detected plane when panning if the optional `snapToPlane`
argument is set to `true`. Additionally, the type of surface plane that the point trackable should snap to can be set via the optional
`planeType` argument. As the transforms of the `ARPointTrackable` are continuously tracked and updated, the `move()` method can be used
alongside touch gestures to continuously update a tracked AR object's transforms.
The optional 'fallbackToEstimatedPlanes' argument, when `snapToPlane` is also set to `true`, can be used to set whether to fall back to
using plane estimation, a less accurate estimate of real world surfaces than that provided by the default plane detection algorithm which
continuously analyzes the scene to detect planes in the view.

```
TouchGestures.onPan().subscribe(function(gesture) {
  pointTrackable.move({screenLocation: gesture.location, state: gesture.state);
});
*/
move(config: {fallbackToEstimatedPlanes?: false | true, planeType?: HitTestType, screenLocation: Vec2Signal, snapToPlane?: false | true, state: StringSignal}): void

}
