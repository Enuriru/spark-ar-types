/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Physics.PhysicsObject/index.d.ts" />
/// <reference path="../SpatialHandTracking.Hand/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackable/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsWorld extends PhysicsObject {

/**
```
createPhysicsBodiesForTrackedHand(hand: Hand, extraBodyCreationParams: Object, extraVolumeCreationParams: Object): Promise<Array<PhysicsBodyAndVolume>>
```

*/
createPhysicsBodiesForTrackedHand(hand: Hand, extraBodyCreationParams: Object, extraVolumeCreationParams: Object): Promise<Array<PhysicsBodyAndVolume>>

/**
```
disablePhysicsPlaneCreationForAllTrackedPlanes(onError?: {}): void
```

*/
disablePhysicsPlaneCreationForAllTrackedPlanes(onError?: {}): void

/**
```
disablePhysicsPlaneCreationForTrackable(trackable: ARTrackable, onError?: {}): void
```

*/
disablePhysicsPlaneCreationForTrackable(trackable: ARTrackable, onError?: {}): void

/**
```
enablePhysicsPlaneCreationForAllTrackedPlanes(config: AutoPlaneCreationConfig): void
```

Start synchronizing physics planes for each new world-tracked plane (ARTrackable) that is detected via subscription to WorldTrackingModule.onTrackableAdded(), using enablePhysicsPlaneCreationForTrackable().
This process will continue until disablePhysicsPlaneCreationForAllTrackedPlanes() is called.
If planes should only be created for a subset of trackables, or if different properties should be used for creating each body and volume, use enablePhysicsPlaneCreationForAllTrackedPlanes instead.
*/
enablePhysicsPlaneCreationForAllTrackedPlanes(config: AutoPlaneCreationConfig): void

/**
```
enablePhysicsPlaneCreationForTrackable(trackable: ARTrackable, config: AutoPlaneCreationConfig): void
```

Start synchronizing a physics plane to an ARTrackable. (Only HORIZONTAL_PLANES and VERTICAL_PLANES are supported). When the trackable changes size,
a new body and volume will be created for the trackable based on the new size. In order to stop synchronizing a plane for this trackable, call
disablePhysicsPlaneCreationForTrackable()
config.onError() is called whenever an error occurs during this process. It may be called multiple times.
config.onPlaneCreate() is called whenever a new plane body is added for this trackable.
config.extraVolumeCreationParams and config.extraBodyCreationParams are used when creating the PhysicsVolume and PhysicsBody for each world-tracked plane.
A new plane is created for a given trackable whenever the X or Z size of the plane changes more than config.sizeChangeThreshold (0.02 is the default and minimum).

When the trackable changes size, a new body is created for the current size and the previous body is destroyed.
*/
enablePhysicsPlaneCreationForTrackable(trackable: ARTrackable, config: AutoPlaneCreationConfig): void

/**
```
getCollisionBodies(event: CollisionEvent): undefined
```

Returns the colliding bodies associated with a CollisionEvent.
*/
getCollisionBodies(event: CollisionEvent): undefined

/**
```
getProperties(): Promise<object>
```

*/
getProperties(): Promise<object>

/**
```
getRayCollisionBody(event: PhysicsRayEvent): PhysicsBody
```

Returns the colliding bodies associated with a PhysicsRayEvent.
*/
getRayCollisionBody(event: PhysicsRayEvent): PhysicsBody

/**
```
setProperties(props: object): Promise<void>
```

*/
setProperties(props: object): Promise<void>

}
