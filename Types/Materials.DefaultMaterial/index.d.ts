/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `DefaultMaterial` class encapsulates an image-based material.
*/
declare interface DefaultMaterial extends MaterialBase {

/**
```
(get) ambientColorFactor: RgbaSignal
(set) ambientColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a ambient color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
ambientColorFactor: RgbaSignal

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
(get) diffuseColorFactor: RgbaSignal
(set) diffuseColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a diffuse color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
diffuseColorFactor: RgbaSignal

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
(get) emissiveColorFactor: RgbaSignal
(set) emissiveColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a emmisive color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
emissiveColorFactor: RgbaSignal

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
(get) emmisiveColorFactor: RgbaSignal
(set) emmisiveColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a emmisive color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
emmisiveColorFactor: RgbaSignal

/**
```
(get) (Not Available)
(set) multiply: TextureBase | null
```

Specifies the multiplicative texture of the material.
*/
multiply: TextureBase | null

/**
```
(get) multiplyTextureTransform: TextureTransform
(set) multiplyTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the multiplicative texture of this material.
*/
multiplyTextureTransform: TextureTransform

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
(get) (Not Available)
(set) reflective: TextureBase | null
```

Specifies the reflective texture of the material.
*/
reflective: TextureBase | null

/**
```
(get) reflectiveTextureTransform: TextureTransform
(set) reflectiveTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the reflective texture of this material.
*/
reflectiveTextureTransform: TextureTransform

/**
```
(get) specularColorFactor: RgbaSignal
(set) specularColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a specular color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
specularColorFactor: RgbaSignal

/**
```
getEmissive(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getEmissive(): Promise<TextureBase | null>

/**
```
getMultiply(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getMultiply(): Promise<TextureBase | null>

/**
```
getReflective(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getReflective(): Promise<TextureBase | null>

}



/**

//=========================================================================
// The following example demonstrates how to set the properties of a
// material using the Standard shader.
//
// Project setup:
// - Insert a Plane into the Scene
// - Insert a new Material into Assets
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

  // Create RgbaSignals using values between 0 and 1
  const darkGray = Reactive.RGBA(0.11, 0.17, 0.2, 1.0);
  const blue = Reactive.RGBA(0.1, 0.47, 0.95, 1.0);

  // Set the diffuse and specular color factors of the material
  material.diffuseColorFactor = darkGray;
  material.specularColorFactor = blue;

})(); // Enable async/await in JS [part 2]

*/