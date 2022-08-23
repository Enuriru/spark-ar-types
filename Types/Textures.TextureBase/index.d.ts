/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />

/**
The `TextureBase` class describes a texture.
*/
declare interface TextureBase {

/**
```
(get) height: ScalarSignal
(set) (Not Available)
```

Gets the height of the texture in pixels.
*/
height: ScalarSignal

/**
```
(get) identifier: string
(set) (Not Available)
```

Specifies the unique texture identifier. This value is specified internally in AR Studio.
*/
identifier: string

/**
```
(get) name: string
(set) (Not Available)
```

Specifies the unique texture name. The texture name is specified in AR Studio at design time.
**See Also**: `TexturesModule.get`.
*/
name: string

/**
```
(get) signal: ShaderSignal
(set) (Not Available)
```

Gets the RGBA ShaderSignal of the given texture. This signal can then be used in shader computations.
*/
signal: ShaderSignal

/**
```
(get) width: ScalarSignal
(set) (Not Available)
```

Gets the width of the texture in pixels.
*/
width: ScalarSignal

}



/**

//=========================================================================
// The following example demonstrates how to assign a texture to a texture
// slot on a material.
//
// Project setup:
// - Insert a Plane into the Scene
// - Insert a Material into Assets
// - Extract the Camera texture into Assets
//=========================================================================

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

  // Assign the camera texture to the diffuse texture slot of the material
  material.diffuse = texture;

})(); // Enable async/await in JS [part 2]

*/