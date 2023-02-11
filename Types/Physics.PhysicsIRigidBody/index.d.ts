/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Physics.PhysicsITransform/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""},{"kind":"introducedBy","version":2977307455}]
*/


declare interface PhysicsIRigidBody extends PhysicsBody {

/**
```
aabb(space?: PhysicsSpace): Promise<AABB>
```

*/
aabb(space?: PhysicsSpace): Promise<AABB>

/**
```
addForce(force: Vec3, space?: PhysicsSpace): Promise<void>
```

Adds a continuous force at the center of mass. The force will continue indefinitely.
*/
addForce(force: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
addForceImpulse(impulse: Vec3, space?: PhysicsSpace): Promise<void>
```

Applies an impulsive force at the center of gravity for a discrete change in velocity.
*/
addForceImpulse(impulse: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
addForceImpulseAt(impulse: Vec3, at: Vec3, space?: PhysicsSpace): Promise<void>
```

Applies an impulsive force at specified location for an immediate change in linear and angular velocity.
*/
addForceImpulseAt(impulse: Vec3, at: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
addTorque(torque: Vec3, space?: PhysicsSpace): Promise<void>
```

Adds a continuous torque at the center of mass.  The torque will continue indefinitely.
*/
addTorque(torque: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
addTorqueImpulse(impulse: Vec3, space?: PhysicsSpace): Promise<void>
```

Applies an impulsive torque for an immediate change in angular velocity.
*/
addTorqueImpulse(impulse: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
angularVelocity(space?: PhysicsSpace): Promise<Vec3>
```

*/
angularVelocity(space?: PhysicsSpace): Promise<Vec3>

/**
```
clearForces(): Promise<void>
```

Clears all continuous forces and torques currently acting on the body
*/
clearForces(): Promise<void>

/**
```
inertialTransform(): PhysicsITransform
```

The transform representing center of mass of rigid body (intertial reference frame)
*/
inertialTransform(): PhysicsITransform

/**
```
linearVelocity(space?: PhysicsSpace): Promise<Vec3>
```

*/
linearVelocity(space?: PhysicsSpace): Promise<Vec3>

/**
```
setAngularVelocity(vel: Vec3, space?: PhysicsSpace): Promise<void>
```

Sets the angular velocity of the body.
*/
setAngularVelocity(vel: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
setLinearVelocity(vel: Vec3, space?: PhysicsSpace): Promise<void>
```

Sets the linear velocity of the body.
*/
setLinearVelocity(vel: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
totalForce(space?: PhysicsSpace): Promise<Vec3>
```

Represents the sum of all continuous forces that will be applied to this
 body on the next time-step (excluding gravity).  This also excludes any forces that may get
 applied due to constraint resolution/collision.
*/
totalForce(space?: PhysicsSpace): Promise<Vec3>

/**
```
totalTorque(space?: PhysicsSpace): Promise<Vec3>
```

Represents the sum of all continuous torques that will be applied to this
 body on the next time-step.  This also excludes any forces that may get applied due to
 constraint resolution/collision.
*/
totalTorque(space?: PhysicsSpace): Promise<Vec3>

/**
```
transform(): PhysicsITransform
```

The render transform of the rigid body
*/
transform(): PhysicsITransform

}
