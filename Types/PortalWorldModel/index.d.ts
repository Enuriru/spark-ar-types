/// <reference path="../PortalWorldModel.Person/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"portalPose","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect"]}]
*/


/**
The `PortalPoseModule` class provides data from the Portal world model.
*/
declare interface PortalWorldModel extends Module {

/**
```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of people tracked by the model.
*/
count: ScalarSignal

/**
```
(get) crop: Box2DSignal
(set) (Not Available)
```

The scene crop (relative to full FOV) currently applied.
*/
crop: Box2DSignal

/**
```
person(index: number): Person
```

Gets the `Person` corresponding to the given index.
*/
person(index: number): Person

}
