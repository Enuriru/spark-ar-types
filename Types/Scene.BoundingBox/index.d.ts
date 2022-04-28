/// <reference path="../Reactive.PointSignal/index.d.ts" />


/**
[{"kind":"removedBy","version":4200001050}]
*/


/**
The `BoundingBox` class describes the bounds of a scene element in the local coordinate system.
*/
declare interface BoundingBox {

/**
```
(get) max: PointSignal
(set) (Not Available)
```

Retrieves the maximum point of object's bounding box in object's local coordinate system.
**NOTE**: There is 1 frame delay in this value.
*/
max: PointSignal

/**
```
(get) min: PointSignal
(set) (Not Available)
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.
**NOTE**: There is 1 frame delay in this value.
*/
min: PointSignal

}



/**

//==============================================================================
// The following example demonstrates how to use the bounding box of a scene
// element to size and position plane over the object.
//
// Project setup:
// - Import the Star 3D asset from the library as a child of the Focal Distance
// - Add the Scripting Dynamic Instantiation capability
//==============================================================================

// Load in the required modules
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the scene element that contains the 3D mesh
  const [[starMesh]] = await Promise.all([
    Scene.root.findByPath('Device/Camera/Focal Distance/Star/Star')
  ]);

  // Create a plane to be resized and positioned
  const plane = await Scene.create("Plane")
  starMesh.addChild(plane);

  // Resize the plane to match
  const starMeshSize = starMesh.boundingBox.max.sub(starMesh.boundingBox.min)
  plane.width = starMeshSize.x
  plane.height = starMeshSize.y
  plane.transform.position = starMeshSize.div(2).add(starMesh.boundingBox.min)
// Enable async/await in JS [part 2]
})();

*/