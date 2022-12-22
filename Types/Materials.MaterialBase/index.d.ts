/// <reference path="../Materials.TextureTransform/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Shaders.BlendedMaterialTextures/index.d.ts" />
/// <reference path="../Shaders.DefaultMaterialTextures/index.d.ts" />
/// <reference path="../Shaders.FacePaintMaterialTextures/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `MaterialBase` class exposes properties common to all material types.
*/
declare interface MaterialBase {

/**
```
(get) alphaCutoff: ScalarSignal
(set) alphaCutoff: ScalarSignal
```

Specifies a number between 0.0 and 1.0.
*/
alphaCutoff: ScalarSignal

/**
```
(get) alphaCutoffValue: number
(set) alphaCutoffValue: number
```

Specifies a number between 0.0 and 1.0.
*/
alphaCutoffValue: number

/**
```
(get) alphaTestEnabled: BoolSignal
(set) alphaTestEnabled: BoolSignal
```

Specifies a boolean value that represents whether alpha testing is enabled on this material or not.
If alpha testing is enabled - when `opacity` is passing the threshold determined by `alphaCutoff` - the rendered output is going to be fully transparent.
*/
alphaTestEnabled: BoolSignal

/**
```
(get) alphaTestEnabledValue: boolean
(set) alphaTestEnabledValue: boolean
```

Specifies a boolean value that represents whether alpha testing is enabled on this material or not.
If alpha testing is enabled - when `opacity` is passing the threshold determined by `alphaCutoff` - the rendered output is going to be fully transparent.
*/
alphaTestEnabledValue: boolean

/**
```
(get) cullMode: StringSignal<MaterialsModule.CullMode>
(set) cullMode: StringSignal<MaterialsModule.CullMode>
```

Specifies the material cull mode.
*/
cullMode: StringSignal<MaterialsModule.CullMode>

/**
```
(get) cullModeValue: MaterialsModule.CullMode
(set) cullModeValue: MaterialsModule.CullMode
```

Specifies the material cull mode.
*/
cullModeValue: MaterialsModule.CullMode

/**
```
(get) depthTestEnabled: BoolSignal
(set) depthTestEnabled: BoolSignal
```

Specifies a boolean value that represents whether depth testing is enabled.
When enabled, any scene object using this material will be obscured by nearer objects
that have already `depthWriteEnabled` set.
*/
depthTestEnabled: BoolSignal

/**
```
(get) depthTestEnabledValue: boolean
(set) depthTestEnabledValue: boolean
```

Specifies a boolean value that represents whether depth testing is enabled.
When enabled, any scene object using this material will be obscured by nearer objects
that have already `depthWriteEnabled` set.
*/
depthTestEnabledValue: boolean

/**
```
(get) depthWriteEnabled: BoolSignal
(set) depthWriteEnabled: BoolSignal
```

Specifies a boolean value that represents whether depth writing is enabled.
When enabled, any scene object using this material will always draw over any other object.
They will obscure farther objects that are drawn after, unless these objects also have `depthWriteEnabled` set to `true`.
*/
depthWriteEnabled: BoolSignal

/**
```
(get) depthWriteEnabledValue: boolean
(set) depthWriteEnabledValue: boolean
```

Specifies a boolean value that represents whether depth writing is enabled.
When enabled, any scene object using this material will always draw over any other object.
They will obscure farther objects that are drawn after, unless these objects also have `depthWriteEnabled` set to `true`.
*/
depthWriteEnabledValue: boolean

/**
```
(get) (Not Available)
(set) diffuse: TextureBase | null
```

Specifies the texture that forms the basis of this material.
*/
diffuse: TextureBase | null

/**
```
(get) diffuseTextureTransform: TextureTransform
(set) diffuseTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the diffuse texture of this material.
*/
diffuseTextureTransform: TextureTransform

/**
```
(get) doubleSided: BoolSignal
(set) doubleSided: BoolSignal
```

Indicates whether the material can be seen from both sides when rendering the scene.
**Note**: When `FALSE`, only the side specified by object's **Cull Mode** is rendered.
*/
doubleSided: BoolSignal

/**
```
(get) doubleSidedValue: boolean
(set) doubleSidedValue: boolean
```

Indicates whether the material can be seen from both sides when rendering the scene.
**Note**: When `FALSE`, only the side specified by object's **Cull Mode** is rendered.
*/
doubleSidedValue: boolean

/**
```
(get) identifier: string
(set) (Not Available)
```

Specifies the unique identifier for the material.
*/
identifier: string

/**
```
(get) name: string
(set) (Not Available)
```

Specifies the unique identifier for the material name. This value is specified in AR Studio at design time.
**See Also**: `MaterialsModule.get`.
*/
name: string

/**
```
(get) opacity: ScalarSignal
(set) opacity: ScalarSignal
```

Specifies a number between 0.0 and 1.0 indicating the opacity threshold for discarding pixels. 0 is transparent and 1 is opaque.
*/
opacity: ScalarSignal

/**
```
(get) opacityValue: number
(set) opacityValue: number
```

Specifies a number between 0.0 and 1.0 indicating the opacity threshold for discarding pixels. 0 is transparent and 1 is opaque.
*/
opacityValue: number

/**
```
getDiffuse(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
*/
getDiffuse(): Promise<TextureBase | null>

/**
```
setTexture(signal: ShaderSignal, config: {textureSlotName: DefaultMaterialTextures | BlendedMaterialTextures | FacePaintMaterialTextures | PhysicallyBasedMaterialTextures}): void
```

Assigns a ShaderSignal to the specified texture slot.
*/
setTexture(signal: ShaderSignal, config: {textureSlotName: DefaultMaterialTextures | BlendedMaterialTextures | FacePaintMaterialTextures | PhysicallyBasedMaterialTextures}): void

/**
```
setTextureSlot(textureSlotName: string, signal: ShaderSignal): void
```

Assigns a ShaderSignal to the specified texture slot.
*/
setTextureSlot(textureSlotName: string, signal: ShaderSignal): void

}



/**

//=========================================================================
// The following example demonstrates how to set properties on a material.
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

  // Set the opacity of the material
  material.opacity = 0.5;

  // Assign the camera texture to the diffuse texture slot of the material
  material.diffuse = texture;

})(); // Enable async/await in JS [part 2]

*/