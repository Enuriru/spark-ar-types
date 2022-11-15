/// <reference path="../Reactive.Vec3/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsIWorldRaycasting {

/**
```
castRay(start: Vec3, end: Vec3, parameters: object, raycastCallback?: PhysicsWorldRaycastCallback): Promise<>
```

Casts a ray through the physics world.
*/
castRay(start: Vec3, end: Vec3, parameters: object, raycastCallback?: PhysicsWorldRaycastCallback): Promise<>

}
