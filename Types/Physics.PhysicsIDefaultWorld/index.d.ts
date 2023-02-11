/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Physics.PhysicsConstraint/index.d.ts" />
/// <reference path="../Physics.PhysicsVolume/index.d.ts" />
/// <reference path="../Physics.PhysicsWorld/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""},{"kind":"introducedBy","version":2977307455}]
*/


declare interface PhysicsIDefaultWorld extends PhysicsWorld {

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

Creates a PhysicsBody, PhysicsVolume, or PhysicsConstraint.  The physics object returned is only
valid in the context of the PhysicsWorld that created it.
*/
create(properties: NamedObject): Promise<PhysicsBody | PhysicsConstraint | PhysicsVolume>

/**
```
destroy(obj: PhysicsBody | PhysicsConstraint | PhysicsVolume): Promise<void>
```

Destroys a PhysicsBody or PhysicsConstraint or PhysicsVolume. The physics object must have
been created by this same PhysicsWorld via create().  Note, constraints are
destroyed automatically if a body associated with it is destroyed.  Destroying
an object that has already been destroyed will result in an error.
Destroying a PhysicsVolume will not actually destroy the volume until the last PhysicsBody referencing it is also destroyed.
*/
destroy(obj: PhysicsBody | PhysicsConstraint | PhysicsVolume): Promise<void>

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
