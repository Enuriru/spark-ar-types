/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `Plane` class describes a plane.
*/
declare interface Plane extends SceneObjectBase {

/**
```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the vertical size, in 3D units.
*/
height: ScalarSignal

/**
```
(get) material: MaterialBase | null
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null

/**
```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the horizontal size, in 3D units.
*/
width: ScalarSignal

/**
```
(get) x: ScalarSignal
(set) x: ScalarSignal
```

Specifies the horizontal offset, in 3D units.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) y: ScalarSignal
```

Specifies the vertical offset, in 3D units.
*/
y: ScalarSignal

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

}
