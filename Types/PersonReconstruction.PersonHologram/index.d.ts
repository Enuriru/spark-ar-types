/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"capability","capability":"personReconstruction","orCapability":""}]
*/


/**
Person Hologram represents a scene object that renders a hologram of a person
*/
declare interface PersonHologram extends SceneObjectBase {

/**
```
getHologramMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given person hologram scene object or null if no material was assigned.
*/
getHologramMaterial(): Promise<MaterialBase | null>

/**
```
setHologramMaterial(m: MaterialBase): Promise<null>
```

Returns a promise that is resolved when given material is associated with a given person hologram scene object.
*/
setHologramMaterial(m: MaterialBase): Promise<null>

}
