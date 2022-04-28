/// <reference path="../Prefabs.Prefab/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `BlendShape` class describes a shape attached to a mesh or face mesh which can be used to change the shape of that mesh.
*/
declare interface BlendShape {

/**
```
(get) name: string
(set) (Not Available)
```

Retrieves the name of the BlendShape.
*/
name: string

/**
```
(get) prefabName: string
(set) (Not Available)
```

Specifies the name of prefab for Mesh. This is the unique identifier of the prefab.
*/
prefabName: string

/**
```
(get) weight: ScalarSignal
(set) weight: ScalarSignal
```

Specifies the weight of the blend shape.
*/
weight: ScalarSignal

/**
```
getPrefab(): Promise<Prefab | null>
```

Returns a promise that is resolved with the prefab associated with a given {} or null if no prefab was assigned.
*/
getPrefab(): Promise<Prefab | null>

}
