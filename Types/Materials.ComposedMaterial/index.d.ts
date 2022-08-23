/// <reference path="../Materials.MaterialBase/index.d.ts" />

/**
The `ComposedMaterial` class encapsulates patch asset materials.
*/
declare interface ComposedMaterial extends MaterialBase {

}



/**

//=========================================================================
// The following example demonstrates how to set the properties of
// a patch asset material.
//
// Project setup:
// - Insert a Plane into the Scene
// - Insert a Material and a Shader Code Asset into Assets
// - Set the new shader asset as the Shader Type of the new material
//=========================================================================

// Load in the required modules
const Materials = require('Materials');
const Reactive = require('Reactive');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane and material in the project
  const [plane, material] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Materials.findFirst('material0')
  ]);

  // Bind the material to the plane's material property
  plane.material = material;

  // Assign a scalar value to a patch asset parameter
  material.setParameter('armCount', 10);

  // Create a new Vec4Signal representing a color value
  const color1 = Reactive.pack4(0.98, 0.09, 0.51, 1.0);

  // Assign the signal to a patch asset parameter
  material.setParameter('color1', color1);

})(); // Enable async/await in JS [part 2]

*/