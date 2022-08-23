/// <reference path="../Scene.BlendShape/index.d.ts" />
/// <reference path="../Scene.MeshSurface/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `Mesh` class describes a scene mesh.
*/
declare interface Mesh extends SceneObjectBase {

/**
```
getBlendShapes(): Promise<Array<BlendShape>>
```

Returns a `JS Promise` which will be fulfilled with `array of blend Shapes` or an error.
*/
getBlendShapes(): Promise<Array<BlendShape>>

/**
```
getSurfaces(): Promise<Array<MeshSurface>>
```

Returns a `JS Promise` which will be fulfilled with `array of MeshSurfaces` or an error.
*/
getSurfaces(): Promise<Array<MeshSurface>>

}
