/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `MetallicRoughnessPbrMaterial` class encapsulates physically based materials.
*/
declare interface MetallicRoughnessPbrMaterial extends MaterialBase {

/**
```
(get) (Not Available)
(set) baseColor: TextureBase | null
```

Specifies the baseColor texture of the material.
*/
baseColor: TextureBase | null

/**
```
(get) baseColorFactor: ColorSignal
(set) baseColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a base color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
baseColorFactor: ColorSignal

/**
```
(get) baseColorTextureTransform: TextureTransform
(set) baseColorTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the baseColorFactor texture of this material.
*/
baseColorTextureTransform: TextureTransform

/**
```
(get) blendMode: StringSignal<MaterialsModule.BlendMode>
(set) blendMode: StringSignal<MaterialsModule.BlendMode>
```

Specifies the material blend mode.
*/
blendMode: StringSignal<MaterialsModule.BlendMode>

/**
```
(get) (Not Available)
(set) diffuseEnvironment: TextureBase | null
```

Set a diffuse environment texture on this material.
*/
diffuseEnvironment: TextureBase | null

/**
```
(get) (Not Available)
(set) emissive: TextureBase | null
```

Specifies the emissive texture of the material.
*/
emissive: TextureBase | null

/**
```
(get) emissiveColorFactor: ColorSignal
(set) emissiveColorFactor: ColorSignal
```

Specifies a `ColorSignal` for the emissive color factor.
This value defines linear multipliers for the sampled texels of the emissive texture.
A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
emissiveColorFactor: ColorSignal

/**
```
(get) emissiveTextureTransform: TextureTransform
(set) emissiveTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the emissive texture of this material.
*/
emissiveTextureTransform: TextureTransform

/**
```
(get) metallicFactor: ScalarSignal
(set) metallicFactor: ScalarSignal
```

Specifies the metallic factor.
*/
metallicFactor: ScalarSignal

/**
```
(get) (Not Available)
(set) metallicRoughness: TextureBase | null
```

Specifies the metallicRoughness texture of the material.
*/
metallicRoughness: TextureBase | null

/**
```
(get) metallicRoughnessTextureTransform: TextureTransform
(set) metallicRoughnessTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the MetallicRoughness texture of this material.
*/
metallicRoughnessTextureTransform: TextureTransform

/**
```
(get) normalTextureScale: ScalarSignal
(set) normalTextureScale: ScalarSignal
```

The scalar parameter applied to each normal vector of the texture. This value scales the normal vector in X and Y directions.
*/
normalTextureScale: ScalarSignal

/**
```
(get) normalTextureTransform: TextureTransform
(set) normalTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the normal texture of this material.
*/
normalTextureTransform: TextureTransform

/**
```
(get) (Not Available)
(set) occlusion: TextureBase | null
```

Specifies the occlusion texture of the material.
*/
occlusion: TextureBase | null

/**
```
(get) occlusionStrength: ScalarSignal
(set) occlusionStrength: ScalarSignal
```

Specifies the occlusion strength.
*/
occlusionStrength: ScalarSignal

/**
```
(get) occlusionTextureTransform: TextureTransform
(set) occlusionTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the Occlusion texture of this material.
*/
occlusionTextureTransform: TextureTransform

/**
```
(get) roughnessFactor: ScalarSignal
(set) roughnessFactor: ScalarSignal
```

Specifies the roughness factor.
*/
roughnessFactor: ScalarSignal

/**
```
(get) (Not Available)
(set) roughnessMetallic: TextureBase | null
```

Specifies the RoughnessMetallic texture of the material.
*/
roughnessMetallic: TextureBase | null

/**
```
(get) roughnessMetallicTextureTransform: TextureTransform
(set) roughnessMetallicTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the RoughnessMetallic texture of this material.
*/
roughnessMetallicTextureTransform: TextureTransform

/**
```
(get) (Not Available)
(set) specularEnvironment: TextureBase | null
```

Set a specular environment texture on this material.
*/
specularEnvironment: TextureBase | null

/**
```
(get) staticEnvironmentRotation: PointSignal
(set) staticEnvironmentRotation: PointSignal
```

Specifies the rotation signal to be used for transformations of static environment textures.
*/
staticEnvironmentRotation: PointSignal

/**
```
getBaseColor(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getBaseColor(): Promise<TextureBase | null>

/**
```
getDiffuseEnvironment(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the diffuse environment texture associated with a given material or null if no texture was assigned.
*/
getDiffuseEnvironment(): Promise<TextureBase | null>

/**
```
getEmissive(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getEmissive(): Promise<TextureBase | null>

/**
```
getMetallicRoughness(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getMetallicRoughness(): Promise<TextureBase | null>

/**
```
getNormal(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getNormal(): Promise<TextureBase | null>

/**
```
getOcclusion(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getOcclusion(): Promise<TextureBase | null>

/**
```
getRoughnessMetallic(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getRoughnessMetallic(): Promise<TextureBase | null>

/**
```
getSpecularEnvironment(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the specular environment texture associated with a given material or null if no texture was assigned.
*/
getSpecularEnvironment(): Promise<TextureBase | null>

/**
```
setNormal(texture: TextureBase | null): Promise<void>
```

Assign normal texture for this material.
Returns a promise that is resolved when the texture is assigned.
*/
setNormal(texture: TextureBase | null): Promise<void>

}



/**

//=========================================================================
// The following example demonstrates how to set the properties of a
// physically-based material.
//
// Project setup:
// - Insert a Plane under Focal Distance
// - Insert a Material into Assets
// - Set the Shader Type of the new material to Physically-Based
// - Extract the Camera texture into Assets
//=========================================================================

// Load in the required modules
const Materials = require('Materials');
const Reactive = require('Reactive');
const Scene = require('Scene');
const Textures = require('Textures');
const Time = require('Time');

(async function() { // Enable async/await in JS [part 1]

  // Locate the planes and materials in the project
  const [plane, material, texture] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Materials.findFirst('material0'),
    Textures.findFirst('cameraTexture0')
  ]);

  // Bind the material to the plane's material property
  plane.material = material;

  // Get the current runtime in seconds
  const timeSeconds = Time.ms.mul(0.001);

  // Create a signal that changes over time
  const progress = timeSeconds.mul(0.1).mod(1.0);

  // Use the signal to drive an animated scalar value representing rotation
  const rotation = progress.mul(2.0 * Math.PI);

  // Bind the transform of the plane to the animated rotation value signal
  plane.transform.rotationX = rotation;
  plane.transform.rotationZ = rotation;

  // Make the material double-sided
  material.doubleSided = true;

  // Set the metallic factor of the material
  material.metallicFactor = 0.75;

  // Create a color signal with hue that animates over time
  const color = Reactive.HSVA(progress, 1.0, 1.0, 1.0);

  // Set the base color factor of the material
  material.baseColorFactor = color;

  // Assign the texture to the base color slot of the material
  material.baseColor = texture;

})(); // Enable async/await in JS [part 2]

*/