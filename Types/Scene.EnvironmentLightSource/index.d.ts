/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `EnvironmentLightSource` class describes an environment lighting source.
*/
declare interface EnvironmentLightSource extends SceneObjectBase {

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
getDiffuseEnvironment(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the diffuse environment texture associated with a given material or null if no texture was assigned.
*/
getDiffuseEnvironment(): Promise<TextureBase | null>

/**
```
getSpecularEnvironment(): Promise<TextureBase | null>
```

Returns a promise that is resolved with the specular environment texture associated with a given material or null if no texture was assigned.
*/
getSpecularEnvironment(): Promise<TextureBase | null>

}
