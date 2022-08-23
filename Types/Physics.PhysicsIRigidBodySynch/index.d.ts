/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""},{"kind":"capability","capability":"physics_synch","orCapability":""},{"kind":"introducedBy","version":2977307455}]
*/


declare interface PhysicsIRigidBodySynch extends PhysicsBody {

/**
```
aabb(space?: PhysicsSpace): AABB
```

*/
aabb(space?: PhysicsSpace): AABB

/**
```
addForce(force: Vec3, space?: PhysicsSpace): void
```

Adds a continuous force at the center of mass. The force will continue indefinitely.
*/
addForce(force: Vec3, space?: PhysicsSpace): void

/**
```
addForceImpulse(impulse: Vec3, space?: PhysicsSpace): void
```

Applies an impulsive force at the center of gravity for an immediate change in acceleration.
*/
addForceImpulse(impulse: Vec3, space?: PhysicsSpace): void

/**
```
addForceImpulseAt(impulse: Vec3, at: Vec3, space?: PhysicsSpace): void
```

Applies an impulsive force at the location specified for an immediate change in acceleration.
*/
addForceImpulseAt(impulse: Vec3, at: Vec3, space?: PhysicsSpace): void

/**
```
addTorque(torque: Vec3, space?: PhysicsSpace): void
```

Adds a continuous torque at the center of mass.  The torque will continue indefinitely.
*/
addTorque(torque: Vec3, space?: PhysicsSpace): void

/**
```
addTorqueImpulse(impulse: Vec3, space?: PhysicsSpace): void
```

Applies an impulsive torque for an immediate change in angular acceleration.
*/
addTorqueImpulse(impulse: Vec3, space?: PhysicsSpace): void

/**
```
angularVelocity(space?: PhysicsSpace): Vec3
```

*/
angularVelocity(space?: PhysicsSpace): Vec3

/**
```
clearForces(): void
```

Clears all forces and torques (continuous and impulsive) currently acting on the body
*/
clearForces(): void

/**
```
inertialTransform(): TransformSignal
```

*/
inertialTransform(): TransformSignal

/**
```
linearVelocity(space?: PhysicsSpace): Vec3
```

*/
linearVelocity(space?: PhysicsSpace): Vec3

/**
```
setAngularVelocity(vel: Vec3, space?: PhysicsSpace): void
```

Sets the angular velocity of the body.
*/
setAngularVelocity(vel: Vec3, space?: PhysicsSpace): void

/**
```
setLinearVelocity(vel: Vec3, space?: PhysicsSpace): void
```

Sets the linear velocity of the body.
*/
setLinearVelocity(vel: Vec3, space?: PhysicsSpace): void

/**
```
totalForce(space?: PhysicsSpace): Vec3
```

Represents the summation of all continous and impulsive forces that will be applied to this
 body on the next time-step (excluding gravity).  This also excludes any forces that may get
 applied due to constraint resolution/collision.
*/
totalForce(space?: PhysicsSpace): Vec3

/**
```
totalTorque(space?: PhysicsSpace): Vec3
```

Represents the summation of all continous and impulsive torques that will be applied to this
 body on the next time-step.  This also excludes any forces that may get applied due to
 constraint resolution/collision.
*/
totalTorque(space?: PhysicsSpace): Vec3

/**
```
worldTransform(): TransformSignal
```

*/
worldTransform(): TransformSignal

}
