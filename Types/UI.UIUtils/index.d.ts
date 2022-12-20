/// <reference path="../Fonts.FontId/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

declare interface UIUtils {

/**
```
getUniqueSignalId(): string
```

Generates a unique signal ID
*/
getUniqueSignalId(): string

/**
```
isObject(obj: any): boolean
```

Checks whether the type of input is object
*/
isObject(obj: any): boolean

/**
```
merge(objs: undefined): any
```

Merges input objects in the given order
*/
merge(objs: undefined): any

/**
```
pick(obj: any, keys: undefined): {}
```

For a given object, returns new object only containing the input keys
*/
pick(obj: any, keys: undefined): {}

/**
```
resolveFont(font: string | FontId): FontId | null
```

For string inputs, tries to find the font with the given name.
Otherwise simply returns the input font.
*/
resolveFont(font: string | FontId): FontId | null

/**
```
resolveMaterial(material: string | MaterialBase): MaterialBase | null
```

For string inputs, tries to find the material with the given name.
Otherwise simply returns the input material.
*/
resolveMaterial(material: string | MaterialBase): MaterialBase | null

/**
```
resolveTexture(texture: string | TextureBase): TextureBase | null
```

For string inputs, tries to find the texture with the given name.
Otherwise simply returns the input texture.
*/
resolveTexture(texture: string | TextureBase): TextureBase | null

/**
```
toVec3(input?: number | Vec3): Vec3
```

Takes a number or Vec3 as input and converts into a Vec3
*/
toVec3(input?: number | Vec3): Vec3

}
