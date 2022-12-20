/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""},{"kind":"introducedBy","version":2977307455}]
*/


declare interface PhysicsIRigidBodyReactive extends PhysicsBody {

/**
```
inertialTransformSignal(): TransformSignal
```

*/
inertialTransformSignal(): TransformSignal

/**
```
setTransformSignal(sig: TransformSignal): void
```

Sets incoming render transform signal on the physics body.  The body's
control type must be EXTERNAL_CONTROL or the signal is ingored.
*/
setTransformSignal(sig: TransformSignal): void

/**
```
transformSignal(): TransformSignal
```

*/
transformSignal(): TransformSignal

}
