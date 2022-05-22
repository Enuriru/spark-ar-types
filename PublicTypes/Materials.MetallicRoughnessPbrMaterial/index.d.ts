/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare interface MetallicRoughnessPbrMaterial extends MaterialBase {
/**
* ```
(get) (Not Available)
(set) baseColor: TextureBase | null
```

Specifies the baseColor texture of the material.
*/
baseColor: TextureBase | null;
/**
* ```
(get) baseColorFactor: ColorSignal
(set) baseColorFactor: ColorSignal
```

Specifies a `ColorSignal` for a base color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
baseColorFactor: ColorSignal;
/**
* ```
(get) baseColorTextureTransform: TextureTransform
(set) baseColorTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the baseColorFactor texture of this material.
*/
baseColorTextureTransform: TextureTransform;
/**
* ```
(get) blendMode: StringSignal<MaterialsModule.BlendMode>
(set) blendMode: StringSignal<MaterialsModule.BlendMode>
```

Specifies the material blend mode.
*/
blendMode: StringSignal<MaterialsModule.BlendMode>;
/**
* ```
(get) (Not Available)
(set) diffuseEnvironment: TextureBase | null
```

Set a diffuse environment texture on this material.
*/
diffuseEnvironment: TextureBase | null;
/**
* ```
(get) (Not Available)
(set) emissive: TextureBase | null
```

Specifies the emissive texture of the material.
*/
emissive: TextureBase | null;
/**
* ```
(get) emissiveColorFactor: ColorSignal
(set) emissiveColorFactor: ColorSignal
```

Specifies a `ColorSignal` for the emissive color factor.
This value defines linear multipliers for the sampled texels of the emissive texture.
A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
Note that RgbaSignal is always returned.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
emissiveColorFactor: ColorSignal;
/**
* ```
(get) emissiveTextureTransform: TextureTransform
(set) emissiveTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the emissive texture of this material.
*/
emissiveTextureTransform: TextureTransform;
/**
* ```
(get) metallicFactor: ScalarSignal
(set) metallicFactor: ScalarSignal
```

Specifies the metallic factor.
*/
metallicFactor: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) metallicRoughness: TextureBase | null
```

Specifies the metallicRoughness texture of the material.
*/
metallicRoughness: TextureBase | null;
/**
* ```
(get) metallicRoughnessTextureTransform: TextureTransform
(set) metallicRoughnessTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the MetallicRoughness texture of this material.
*/
metallicRoughnessTextureTransform: TextureTransform;
/**
* ```
(get) normalTextureScale: ScalarSignal
(set) normalTextureScale: ScalarSignal
```

The scalar parameter applied to each normal vector of the texture. This value scales the normal vector in X and Y directions.
*/
normalTextureScale: ScalarSignal;
/**
* ```
(get) normalTextureTransform: TextureTransform
(set) normalTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the normal texture of this material.
*/
normalTextureTransform: TextureTransform;
/**
* ```
(get) occlusionStrength: ScalarSignal
(set) occlusionStrength: ScalarSignal
```

Specifies the occlusion strength.
*/
occlusionStrength: ScalarSignal;
/**
* ```
(get) roughnessFactor: ScalarSignal
(set) roughnessFactor: ScalarSignal
```

Specifies the roughness factor.
*/
roughnessFactor: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) specularEnvironment: TextureBase | null
```

Set a specular environment texture on this material.
*/
specularEnvironment: TextureBase | null;
/**
* ```
(get) staticEnvironmentRotation: PointSignal
(set) staticEnvironmentRotation: PointSignal
```

Specifies the rotation signal to be used for transformations of static environment textures.
*/
staticEnvironmentRotation: PointSignal;
/**
*  
 * getBaseColor(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getBaseColor(): Promise<TextureBase | null>;

/**
*  
 * getDiffuseEnvironment(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the diffuse environment texture associated with a given material or null if no texture was assigned.
 */
getDiffuseEnvironment(): Promise<TextureBase | null>;

/**
*  
 * getEmissive(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getEmissive(): Promise<TextureBase | null>;

/**
*  
 * getMetallicRoughness(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getMetallicRoughness(): Promise<TextureBase | null>;

/**
*  
 * getNormal(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getNormal(): Promise<TextureBase | null>;

/**
*  
 * getSpecularEnvironment(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the specular environment texture associated with a given material or null if no texture was assigned.
 */
getSpecularEnvironment(): Promise<TextureBase | null>;

/**
*  
 * setNormal(texture: TextureBase | null): Promise<void>
 *  
 * 
 * Assign normal texture for this material.
 * Returns a promise that is resolved when the texture is assigned.
 */
setNormal(texture: TextureBase | null): Promise<void>;

}
