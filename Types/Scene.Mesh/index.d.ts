/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Prefabs.Prefab/index.d.ts" />
/// <reference path="../Scene.BlendShape/index.d.ts" />
/// <reference path="../Scene.MeshSurface/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `Mesh` class describes a scene mesh.
*/
declare interface Mesh extends SceneObjectBase {

/**
```
(get) (Not Available)
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null

/**
```
getBlendShapes(): Promise<Array<BlendShape>>
```

Returns a `JS Promise` which will be fulfilled with `array of blend Shapes` or an error.
*/
getBlendShapes(): Promise<Array<BlendShape>>

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

/**
```
getPrefab(): Promise<Prefab | null>
```

Returns a promise that is resolved with the prefab associated with a given {} or null if no prefab was assigned.
*/
getPrefab(): Promise<Prefab | null>

/**
```
getSurfaces(): Promise<Array<MeshSurface>>
```

Returns a `JS Promise` which will be fulfilled with `array of MeshSurfaces` or an error.
*/
getSurfaces(): Promise<Array<MeshSurface>>

}
