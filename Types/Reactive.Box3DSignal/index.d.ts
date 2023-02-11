/// <reference path="../Reactive.PointSignal/index.d.ts" />

/**
The `Box3DSignal` class describes the bounds in 3D space.
*/
declare interface Box3DSignal {

/**
```
(get) max: PointSignal
(set) (Not Available)
```

Retrieves the maximum point of bounding box.
*/
max: PointSignal

/**
```
(get) min: PointSignal
(set) (Not Available)
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.
*/
min: PointSignal

}



/**

//=========================================================================
// The following example demonstrates how to use the properties of a
// Box3DSignal to change the scale of an object.
//
// Project setup:
// - Insert a 3D Text object and a Plane under Focal Distance
//=========================================================================

// Load in the required modules
const Reactive = require('Reactive');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

  // Locate the 3D Text and Plane object in the scene
  const [text3D, plane] = await Promise.all([
    Scene.root.findFirst('3dText0'),
    Scene.root.findFirst('plane0')
  ]);

  // Get the 3D bounding box signal of the text object
  const bounds = text3D.getBoundingBox({includeChildren: false});

  // Get the dimensions of the text object in the scene
  const dimensions = Reactive.mul(
    Reactive.sub(bounds.max, bounds.min), text3D.transform.scale
  );

  // Get the pivot position of the text object
  const pivot = text3D.transform.position;

  // Move the plane to the center of the back of the text object
  plane.transform.x = pivot.x.add(dimensions.x.mul(0.5));
  plane.transform.y = pivot.y.sub(dimensions.y.mul(0.5));
  plane.transform.z = pivot.z.sub(dimensions.z);

  // Resize the plane so its width and height match that of the text object
  plane.transform.scaleX = dimensions.x.mul(10);
  plane.transform.scaleY = dimensions.y.mul(10);

})(); // Enable async/await in JS [part 2]

*/