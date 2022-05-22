/// <reference path="../Materials.MaterialBase/index.d.ts" />
declare interface MeshSurface {
/**
* ```
(get) name: string
(set) name: string
```

Returns the surface name.
*/
name: string;
/**
*  
 * getMaterial(): Promise<MaterialBase | null>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
 */
getMaterial(): Promise<MaterialBase | null>;

/**
*  
 * setMaterial(m: MaterialBase): Promise<null>
 *  
 * 
 * Returns a promise that is resolved when given material is associated with a given scene object.
 */
setMaterial(m: MaterialBase): Promise<null>;

}
