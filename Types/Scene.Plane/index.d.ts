/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `Plane` class describes a plane.
*/
declare interface Plane extends SceneObjectBase {

/**
```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the vertical size, in 3D units.
*/
height: ScalarSignal

/**
```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the horizontal size, in 3D units.
*/
width: ScalarSignal

/**
```
(get) x: ScalarSignal
(set) x: ScalarSignal
```

Specifies the horizontal offset, in 3D units.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) y: ScalarSignal
```

Specifies the vertical offset, in 3D units.
*/
y: ScalarSignal

}



/**

//==============================================================================
// The following example demonstrates how to create a 'Plane' scene object
// and modify its properties.
//
// Project setup:
// - Add the Scripting Dynamic Instantiation capability
//==============================================================================

// Load in the required modules
const Scene = require('Scene');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Focal Distance element
  const focalDistance = await Scene.root.findFirst('Focal Distance');

  // Create a Plane and attach it to the Focal Distance Element as a child
  const plane = await Scene.create("Plane", {
    "name": "MyPlane",
  })
  focalDistance.addChild(plane);

  // Alternatively you could also access an existing plane from the Scene
  // by using its name
  // const plane = await Scene.root.findFirst('plane0');

  // Modify the plane's x and y offsets in 3D units
  plane.x = 0.1;
  plane.y = 0.2;

  // Resize the plane, size in 3D units.
  plane.width = 0.3;
  plane.height = 0.4;

})(); // Enable async/await in JS [part 2]

*/