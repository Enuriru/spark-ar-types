/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `FaceMesh` class describes a face mesh.
*/
declare interface FaceMesh extends SceneObjectBase {

}



/**

//=========================================================================
// The following example demonstrates how to modify the material of a
// face mesh.
//
// Project setup:
// - Insert a Face Mesh into the Scene
// - Insert a Material into Assets
// - Extract the Face Tracker Texture into Assets
//=========================================================================

// Load in the required modules
const Materials = require('Materials');
const Reactive = require('Reactive');
const Scene = require('Scene');
const Textures = require('Textures');

(async function() { // Enable async/await in JS [part 1]

  // Locate the face mesh, material, and extracted face texture
  const [faceMesh, material, texture] = await Promise.all([
    Scene.root.findFirst('faceMesh0'),
    Materials.findFirst('material0'),
    Textures.findFirst('faceTracker0 Texture')
  ]);

  // Assign the face tracker texture as the diffuse texture of the material
  material.diffuse = texture;

  // Set the specular color factor of the material
  material.specularColorFactor = Reactive.RGBA(0.1, 0.47, 0.95, 1.0);

  // Bind the material to the face mesh's material property
  faceMesh.material = material;

})(); // Enable async/await in JS [part 2]

*/