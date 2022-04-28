/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />


/**
[{"kind":"introducedBy","version":3752909909}]
*/


/**
Describes a texture which provides the current scene's estimated depth information. Depth is calculated as the relative distance to the camera.
You can follow the steps in [this article](https://sparkar.facebook.com/ar-studio/learn/articles/textures-and-materials/camera-depth-texture#creating-the-camera-depth-texture) to add a camera depth texture asset to your project.
*/
declare interface SceneDepthTexture extends TextureBase {

/**
```
(get) trackingQuality: StringSignal<TrackingQuality>
(set) (Not Available)
```

The quality of tracking, as a [`StringSignal`](/classes/ReactiveModule.StringSignal) containing a [`TrackingQuality`](/enums/TexturesModule.TrackingQuality) enum value.
*/
trackingQuality: StringSignal<TrackingQuality>

}



/**

//=============================================================================
// Gets the scene's depth texture, assigns it to a material, then applies the
// material to a plane in the scene
//
// Project setup:
// - Add a plane object to the Scene: plane0
// - Add a material to the Assets: material0
// - Add a scene depth texture asset to the Assets: plane0
//
// Required project capabilities:
// - SceneDepthCapability
//
//=============================================================================


// Load in the required modules
const Scene = require('Scene');
const Textures = require('Textures');
const Materials = require('Materials');

(async function () { // Enable async/await in JS [part 1]

  const [plane, material, depthTexture] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Materials.findFirst('material0'),
    Textures.findFirst('sceneDepthTexture0')
  ]);

  // Assign the depthTexture as the material's diffuse texture
  material.diffuse = depthTexture;

  // Assign the material to the plane
  plane.material = material;

})(); // Enable async/await in JS [part 2]

*/