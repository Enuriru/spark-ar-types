/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface PlanarStack extends PlanarObject {
/**
* ```
(get) childAlign: StringSignal<SceneModule.StackAlign>
(set) childAlign: StringSignal<SceneModule.StackAlign>
```

Specifies the alignment of the stack children
*/
childAlign: StringSignal<SceneModule.StackAlign>;
/**
* ```
(get) childDistribute: StringSignal<SceneModule.StackDistribute>
(set) childDistribute: StringSignal<SceneModule.StackDistribute>
```

Specifies the distribution of the stack children
*/
childDistribute: StringSignal<SceneModule.StackDistribute>;
/**
* ```
(get) direction: StringSignal<SceneModule.Direction>
(set) direction: StringSignal<SceneModule.Direction>
```

Specifies the direction of the stack layout.
*/
direction: StringSignal<SceneModule.Direction>;
/**
* ```
(get) gap: ScalarSignal
(set) gap: ScalarSignal
```

Specifies the gap between the stack children
*/
gap: ScalarSignal;
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
