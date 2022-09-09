/// <reference path="../Physics.PhysicsBody/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
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

Applies an impulsive force at the center of gravity for an immediate change in acceleration.
*/
addForceImpulse(impulse: Vec3, space?: PhysicsSpace): Promise<void>

/**
```
addForceImpulseAt(impulse: Vec3, at: Vec3, space?: PhysicsSpace): Promise<void>
```

Applies an impulsive force at the location specified for an immediate change in velocity.
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

Clears all forces and torques (continuous and impulsive) currently acting on the body
*/
clearForces(): Promise<void>

/**
```
inertialTransform(): Promise<TransformSignal>
```

*/
inertialTransform(): Promise<TransformSignal>

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

Represents the summation of all continous and impulsive forces that will be applied to this
 body on the next time-step (excluding gravity).  This also excludes any forces that may get
 applied due to constraint resolution/collision.
*/
totalForce(space?: PhysicsSpace): Promise<Vec3>

/**
```
totalTorque(space?: PhysicsSpace): Promise<Vec3>
```

Represents the summation of all continous and impulsive torques that will be applied to this
 body on the next time-step.  This also excludes any forces that may get applied due to
 constraint resolution/collision.
*/
totalTorque(space?: PhysicsSpace): Promise<Vec3>

/**
```
worldTransform(): Promise<TransformSignal>
```

*/
worldTransform(): Promise<TransformSignal>

}
