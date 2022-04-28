/// <reference path="../Reactive.TransformSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"deviceMotion","orCapability":""}]
*/


/**
The `DeviceMotionModule` class enables device movement detection.
*/
declare interface DeviceMotion extends Module {

/**
```
(get) worldTransform: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` representing the device transformation relative to world coordinate system.
*/
worldTransform: TransformSignal

}



/**

//==============================================================================
// The following example demonstrates how to bind device rotation to an object.
//
// Project setup:
// - Insert a plane
// - Make sure the Device Motion capability is added in the properties
//==============================================================================

// Load in the required modules
const DeviceMotion = require('DeviceMotion');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the plane in the Scene
  const [plane] = await Promise.all([
    Scene.root.findFirst('plane0')
  ]);

  // Store a reference to the transform of the plane and the world transform of
  // the DeviceMotion module
  const planeTransform = plane.transform;
  const deviceWorldTransform = DeviceMotion.worldTransform;

  // Bind the rotation of the device to the plane
  planeTransform.rotationX = deviceWorldTransform.rotationX;
  planeTransform.rotationY = deviceWorldTransform.rotationY;
  planeTransform.rotationZ = deviceWorldTransform.rotationZ;
// Enable async/await in JS [part 2]
})();

*/