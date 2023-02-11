/// <reference path="../Materials.MaterialBase/index.d.ts" />

/**
The `BlendedMaterial` class encapsulates materials blended from multiple textures.
*/
declare interface BlendedMaterial extends MaterialBase {

}



/**

//======================================================================
// The BlendedMaterial class inherits from MaterialBase
// The following example demonstrates how to enable opacity on this
// material and also set the threshold at which point the rendered
// output will be made fully transparent.
//
// Project setup:
// - Insert a Plane into the Scene, using the inspector, set the scale
//   to 2.32 on the x-axis and 5 on the y-axis
// - Insert a Material into Assets
// - Extract the Camera texture into Assets
//======================================================================


// Load in the required modules
const Materials = require('Materials');
const Scene = require('Scene');
const Textures = require('Textures');

(async function() { // Enable async/await in JS [part 1]

 // Locate the plane and material in the project
 const [plane, material, texture] = await Promise.all([
   Scene.root.findFirst('plane0'),
   Materials.findFirst('material0'),
   Textures.findFirst('cameraTexture0')
 ]);

 // Bind the material to the plane's material property
 plane.material = material;
 // Enable alpha testing on this material
 material.alphaTestEnabled = true;

 // Specify and alpha cutoff number for this material
 material.alphaCutoff = 0.5

 // set opacity on this material
 material.opacity = 0.6;

 // Use the camera texture as a basis to diffuse this material
 material.diffuse = texture;

})(); // Enable async/await in JS [part 2]

*/