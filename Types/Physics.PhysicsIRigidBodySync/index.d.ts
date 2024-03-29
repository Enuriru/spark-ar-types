/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Physics.PhysicsITransformSync/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""},{"kind":"capability","capability":"physics_sync","orCapability":""},{"kind":"introducedBy","version":2977307455}]
*/


declare interface PhysicsIRigidBodySync extends PhysicsBody {

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

Applies an impulsive force at the center of gravity for an immediate change in velocity.
*/
addForceImpulse(impulse: Vec3, space?: PhysicsSpace): void

/**
```
addForceImpulseAt(impulse: Vec3, at: Vec3, space?: PhysicsSpace): void
```

Applies an impulsive force at specified location for an immediate change in linear and angular velocity.
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

Applies an impulsive torque for an immediate change in angular velocity.
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

Clears all continuous forces and torques currently acting on the body
*/
clearForces(): void

/**
```
inertialTransform(): PhysicsITransformSync
```

The transform representing center of mass of rigid body (intertial reference frame)
*/
inertialTransform(): PhysicsITransformSync

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

Represents the sum of all continuous forces that will be applied to this
 body on the next time-step (excluding gravity).  This also excludes any forces that may get
 applied due to constraint resolution/collision.
*/
totalForce(space?: PhysicsSpace): Vec3

/**
```
totalTorque(space?: PhysicsSpace): Vec3
```

Represents the sum of all continuous torques that will be applied to this
 body on the next time-step.  This also excludes any forces that may get applied due to
 constraint resolution/collision.
*/
totalTorque(space?: PhysicsSpace): Vec3

/**
```
transform(): PhysicsITransformSync
```

The render transform of the rigid body
*/
transform(): PhysicsITransformSync

}
