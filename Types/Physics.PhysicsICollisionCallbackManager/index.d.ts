/// <reference path="../Physics.CollisionCallbackType/index.d.ts" />
/// <reference path="../Physics.PhysicsBody/index.d.ts" />


/**
[{"kind":"capability","capability":"physics","orCapability":""},{"kind":"introducedBy","version":2977307455}]
*/


declare interface PhysicsICollisionCallbackManager {

/**
```
clearAllCallbacks(): void
```

Clears all collision callback functions registered to bodies in this world.
*/
clearAllCallbacks(): void

/**
```
clearCallbacks(body: PhysicsBody): void
```

Clears all collision callback functions registered to a particular body.
*/
clearCallbacks(body: PhysicsBody): void

/**
```
deregisterCallback(body: PhysicsBody, callbackType: CollisionCallbackType, callback: PhysicsCollisionCallback): boolean
```

Deregisters a previously registered callback function.
*/
deregisterCallback(body: PhysicsBody, callbackType: CollisionCallbackType, callback: PhysicsCollisionCallback): boolean

/**
```
registerCallback(body: PhysicsBody, callbackType: CollisionCallbackType, callback: PhysicsCollisionCallback): void
```

Registers a callback function to be called when a specific body is in a collision event.
*/
registerCallback(body: PhysicsBody, callbackType: CollisionCallbackType, callback: PhysicsCollisionCallback): void

}
