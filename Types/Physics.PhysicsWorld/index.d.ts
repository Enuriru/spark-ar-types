/// <reference path="../HandTracking.Hand/index.d.ts" />
/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Physics.PhysicsConstraint/index.d.ts" />
/// <reference path="../Physics.PhysicsObject/index.d.ts" />
/// <reference path="../Physics.PhysicsVolume/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../SpatialHandTracking.Hand/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackable/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsWorld extends PhysicsObject {

/**
```
(get) allUpdateEvents: EventSource<PhysicsWorldUpdateEvent>
(set) (Not Available)
```

Emits PhysicsWorldUpdateEvent's whenever the physics simulation is updated. Events are only emitted while the world
is being simulated.  It is okay to subscribe at any time, before or after simulation start.  It is
also okay to subscribe more than one event handler; all will be notified.
Example:
 world.allUpdateEvents.subscribe(event => {
   // Do something with event
 });
 world.startSimulation();
*/
allUpdateEvents: EventSource<PhysicsWorldUpdateEvent>

/**
```
create(properties: NamedObject): Promise<PhysicsBody | PhysicsConstraint | PhysicsVolume>
```

Creates a PhysicsBody or PhysicsConstraint.  The physics object returned is only
valid in the context of the PhysicsWorld that created it.
*/
create(properties: NamedObject): Promise<PhysicsBody | PhysicsConstraint | PhysicsVolume>

/**
```
createPhysicsBodiesForTrackedHand(hand: Hand, extraBodyCreationParams: Object, extraVolumeCreationParams: Object): Promise<Array<PhysicsBodyAndVolume>>
```

*/
createPhysicsBodiesForTrackedHand(hand: Hand, extraBodyCreationParams: Object, extraVolumeCreationParams: Object): Promise<Array<PhysicsBodyAndVolume>>

/**
```
deregisterDestroyCallback(callback: PhysicsObjectDestroyCallback): void
```

*/
deregisterDestroyCallback(callback: PhysicsObjectDestroyCallback): void

/**
```
destroy(obj: PhysicsBody | PhysicsConstraint | PhysicsVolume): Promise<void>
```

Destroys a PhysicsBody or PhysicsConstraint or PhysicsVolume. The physics object must have
been created by this same PhysicsWorld via create().  Note, constraints are
destroyed automatically if a body associated with it is destroyed.  Destroying
an object that has already been destroyed will result in an failed promise.
Destroying a PhysicsVolume will not actually destroy the volume until the last PhysicsBody referencing it is also destroyed.
*/
destroy(obj: PhysicsBody | PhysicsConstraint | PhysicsVolume): Promise<void>

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
findById(objectId: number, objectBaseType: PhysicsObjectBaseType): Promise<PhysicsBody | PhysicsConstraint | PhysicsVolume>
```

A lookup for a physics object given its base type and ID.  For example the body ID's in
a CollisionEvent refer to PhysicsBody's (base type BODY) with the specified ID, and
this provides a way to lookup those PhysicsBody's up by ID.
*/
findById(objectId: number, objectBaseType: PhysicsObjectBaseType): Promise<PhysicsBody | PhysicsConstraint | PhysicsVolume>

/**
```
findFirst(name: string): Promise<PhysicsBody | PhysicsConstraint | PhysicsVolume>
```

*/
findFirst(name: string): Promise<PhysicsBody | PhysicsConstraint | PhysicsVolume>

/**
```
findUsingPattern(namePattern: string): Promise<Array<PhysicsBody | PhysicsConstraint | PhysicsVolume>>
```

*/
findUsingPattern(namePattern: string): Promise<Array<PhysicsBody | PhysicsConstraint | PhysicsVolume>>

/**
```
getAll(): Promise<Array<PhysicsBody | PhysicsConstraint | PhysicsVolume>>
```

*/
getAll(): Promise<Array<PhysicsBody | PhysicsConstraint | PhysicsVolume>>

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
registerDestroyCallback(callback: PhysicsObjectDestroyCallback): void
```

*/
registerDestroyCallback(callback: PhysicsObjectDestroyCallback): void

/**
```
setProperties(props: object): Promise<void>
```

*/
setProperties(props: object): Promise<void>

/**
```
startSimulation(worldUpdateCallback?: PhysicsWorldUpdateCallback): Promise<void>
```

Starts simulating the physics world. Fails if the world is already being simulated.
*/
startSimulation(worldUpdateCallback?: PhysicsWorldUpdateCallback): Promise<void>

/**
```
stopSimulation(): Promise<void>
```

Stop simulating the physics world. Fails if the world is not already being simulated.
*/
stopSimulation(): Promise<void>

}
