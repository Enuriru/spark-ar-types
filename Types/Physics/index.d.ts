/// <reference path="../Physics.PhysicsWorld/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface Physics extends Module {

/**
```
createWorld(properties: object): Promise<PhysicsWorld>
```

Creates a new physics world.  A world is used for simulating bodies with forces and
constraints.  A world also supports ray casting and detecting collisions between bodies.
*/
createWorld(properties: object): Promise<PhysicsWorld>

/**
```
destroyWorld(world: PhysicsWorld): Promise<void>
```

Destroy a physics world.  All bodies, constraints, and volumes inside the world will be destroyed.
*/
destroyWorld(world: PhysicsWorld): Promise<void>

/**
```
interface(object: PhysicsObject, iface: PhysicsInterface): PhysicsAllInterfaces
```

Retrieves the specified interface on the given object.
*/
interface(object: PhysicsObject, iface: PhysicsInterface): PhysicsAllInterfaces

}
