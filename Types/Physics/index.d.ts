/// <reference path="../Physics.PhysicsIDefaultWorld/index.d.ts" />
/// <reference path="../Physics.PhysicsIDefaultWorldSync/index.d.ts" />
/// <reference path="../Physics.PhysicsObject/index.d.ts" />
/// <reference path="../Physics.PhysicsWorld/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface Physics extends Module {

/**
```
acquireSharedWorld(properties: object, iface?: PhysicsInterface): Promise<PhysicsWorld | PhysicsIDefaultWorld | PhysicsIDefaultWorldSync>
```

*/
acquireSharedWorld(properties: object, iface?: PhysicsInterface): Promise<PhysicsWorld | PhysicsIDefaultWorld | PhysicsIDefaultWorldSync>

/**
```
createWorld(properties: object, iface?: PhysicsInterface): PhysicsWorld | PhysicsIDefaultWorld | PhysicsIDefaultWorldSync
```

Creates a new physics world.  A world is used for simulating bodies with forces and
constraints.  A world also supports ray casting and detecting collisions between bodies.
*/
createWorld(properties: object, iface?: PhysicsInterface): PhysicsWorld | PhysicsIDefaultWorld | PhysicsIDefaultWorldSync

/**
```
destroyWorld(world: PhysicsWorld): void
```

Destroy a physics world.  All bodies, constraints, and volumes inside the world will be destroyed.
*/
destroyWorld(world: PhysicsWorld): void

/**
```
interface(object: PhysicsObject, iface: PhysicsInterface): PhysicsAllInterfaces
```

Retrieves the specified interface on the given object.
*/
interface(object: PhysicsObject, iface: PhysicsInterface): PhysicsAllInterfaces

/**
```
releaseSharedWorld(world: PhysicsWorld): Promise<void>
```

*/
releaseSharedWorld(world: PhysicsWorld): Promise<void>

}
