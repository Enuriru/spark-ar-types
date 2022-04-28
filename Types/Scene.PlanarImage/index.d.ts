/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />

/**
The `PlanarImage` class describes an image rendered on a plane.
*/
declare interface PlanarImage extends PlanarObject {

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
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

}
