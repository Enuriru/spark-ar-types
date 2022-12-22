/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />

/**
The `PlanarImage` class describes an image rendered on a plane.
*/
declare interface PlanarImage extends PlanarObject {

/**
```
(get) (Not Available)
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

}



/**

//==============================================================================
// The following example demonstrates how to render an Image on the plane
// using a Planar Image.
//
// Project setup:
// - Add the Scripting Dynamic Instantiation capability
// - Import an image as a texture by the name texture0 in the Assets panel
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Materials = require('Materials');
const Textures = require('Textures');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the focal distance object in the Scene and the image texture in the Assets panel
  const [focalDistance, imageTexture] = await Promise.all([
    Scene.root.findFirst('Focal Distance'),
    Textures.findFirst('texture0'),
  ]);

  // Create a Default Material with the imageTexture
  const defaultMaterial = await Materials.create("DefaultMaterial", {
    "name": "Default Material",
    "blendMode": "ALPHA",
    "opacity": 1.0,
    "diffuse": imageTexture,
  });

  // Create a Planar Image scene object
  const dynamicRectangle = await Scene.create("PlanarImage", {
    "name": "Rectangle",
    "width": 500,
    "height": 500,
    "hidden": false,
  });

  // Set the default material created above
  dynamicRectangle.material = defaultMaterial;

  // Add the PlanarImage as a child object of the Focal Distance object in the Scene panel so that it is rendered in the effect
  focalDistance.addChild(dynamicRectangle);

})(); // Enable async/await in JS [part 2]

*/