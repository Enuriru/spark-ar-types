/// <reference path="../Reactive.Vec3/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""},{"kind":"capability","capability":"physics_synch","orCapability":""}]
*/


declare interface PhysicsIWorldRaycastingSynch {

/**
```
castRay(start: Vec3, end: Vec3, parameters: object, raycastCallback?: PhysicsWorldRaycastCallback): undefined
```

Casts a ray through the physics world.
*/
castRay(start: Vec3, end: Vec3, parameters: object, raycastCallback?: PhysicsWorldRaycastCallback): undefined

}
