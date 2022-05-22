/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare interface MaterialBase {
/**
* ```
(get) alphaCutoff: ScalarSignal
(set) alphaCutoff: ScalarSignal
```

Specifies a number between 0.0 and 1.0.
*/
alphaCutoff: ScalarSignal;
/**
* ```
(get) alphaTestEnabled: BoolSignal
(set) alphaTestEnabled: BoolSignal
```

Specifies a boolean value that represents whether alpha testing is enabled on this material or not.
If alpha testing is enabled - when `opacity` is passing the threshold determined by `alphaCutoff` - the rendered output is going to be fully transparent.
*/
alphaTestEnabled: BoolSignal;
/**
* ```
(get) cullMode: StringSignal<MaterialsModule.CullMode>
(set) cullMode: StringSignal<MaterialsModule.CullMode>
```

Specifies the material cull mode.
*/
cullMode: StringSignal<MaterialsModule.CullMode>;
/**
* ```
(get) depthTestEnabled: BoolSignal
(set) depthTestEnabled: BoolSignal
```

Specifies a boolean value that represents whether depth testing is enabled.
When enabled, any scene object using this material will be obscured by nearer objects
that have already `depthWriteEnabled` set.
*/
depthTestEnabled: BoolSignal;
/**
* ```
(get) depthWriteEnabled: BoolSignal
(set) depthWriteEnabled: BoolSignal
```

Specifies a boolean value that represents whether depth writing is enabled.
When enabled, any scene object using this material will always draw over any other object.
They will obscure farther objects that are drawn after, unless these objects also have `depthWriteEnabled` set to `true`.
*/
depthWriteEnabled: BoolSignal;
/**
* ```
(get) (Not Available)
(set) diffuse: TextureBase | null
```

Specifies the texture that forms the basis of this material.
*/
diffuse: TextureBase | null;
/**
* ```
(get) diffuseTextureTransform: TextureTransform
(set) diffuseTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the diffuse texture of this material.
*/
diffuseTextureTransform: TextureTransform;
/**
* ```
(get) doubleSided: BoolSignal
(set) doubleSided: BoolSignal
```

Indicates whether the material can be seen from both sides when rendering the scene.
**Note**: When `FALSE`, only the side specified by object's **Cull Mode** is rendered.
*/
doubleSided: BoolSignal;
/**
* ```
(get) identifier: string
(set) (Not Available)
```

Specifies the unique identifier for the material.
*/
identifier: string;
/**
* ```
(get) name: string
(set) (Not Available)
```

Specifies the unique identifier for the material name. This value is specified in AR Studio at design time.
**See Also**: `MaterialsModule.get`.
*/
name: string;
/**
* ```
(get) opacity: ScalarSignal
(set) opacity: ScalarSignal
```

Specifies a number between 0.0 and 1.0 indicating the opacity threshold for discarding pixels. 0 is transparent and 1 is opaque.
*/
opacity: ScalarSignal;
/**
*  
 * getDiffuse(): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */
getDiffuse(): Promise<TextureBase | null>;

/**
*  
 * setTextureSlot(textureSlotName: string, signal: ShaderSignal): void
 *  
 * 
 * Assigns a ShaderSignal to the specified texture slot.
 */
setTextureSlot(textureSlotName: string, signal: ShaderSignal): void;

}
