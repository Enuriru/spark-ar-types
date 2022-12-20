/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
Interface containing common properties of a material based style
Class containing static helper functions for processing the style
*/
declare interface MaterialBaseStyle {

/**
```
(get) alphaCutoff: number
(set) alphaCutoff: number
```

The alpha cutoff value used for the material.
Between 0 and 1.
*/
alphaCutoff: number

/**
```
(get) alphaTestEnabled: boolean
(set) alphaTestEnabled: boolean
```

Specifies a boolean value that represents whether alpha testing is enabled on this material or not.
If alpha testing is enabled, when opacity is passing the threshold determined by alphaCutoff
the rendered output is going to be fully transparent.
*/
alphaTestEnabled: boolean

/**
```
(get) cullMode: MaterialsModule.CullMode
(set) cullMode: MaterialsModule.CullMode
```

Specifies the material cull mode.
*/
cullMode: MaterialsModule.CullMode

/**
```
(get) depthTestEnabled: boolean
(set) depthTestEnabled: boolean
```

Specifies a boolean value that represents whether depth testing is enabled.
When enabled, any scene object using the material will be obscured by nearer objects
that have already depthWriteEnabled set.
*/
depthTestEnabled: boolean

/**
```
(get) depthWriteEnabled: boolean
(set) depthWriteEnabled: boolean
```

Specifies a boolean value that represents whether depth writing is enabled.
When enabled, any scene object using this material will always draw over any other object.
They will obscure farther objects that are drawn after, unless these objects also have depthWriteEnabled set to true.
*/
depthWriteEnabled: boolean

/**
```
(get) opacity: number
(set) opacity: number
```

Specifies a number between 0.0 and 1.0 indicating the opacity threshold for discarding pixels.
0 is transparent and 1 is opaque.
*/
opacity: number

/**
```
(get) texture: TextureBase | string
(set) texture: TextureBase | string
```

Specifies the texture that forms the basis of this material.
*/
texture: TextureBase | string

/**
```
apply(material: MaterialBase, style: Partial<MaterialBaseStyle>): void
```

Applies the given style to the given material.
*/
apply(material: MaterialBase, style: Partial<MaterialBaseStyle>): void

/**
```
getProperties(): undefined
```

*/
getProperties(): undefined

}
