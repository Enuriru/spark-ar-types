/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../UI.UIRoot/index.d.ts" />

/**
The abstract base class for all PlanarObject primitives
*/
declare interface UIPlanarObjectPrimitiveBase<T, TStyle> extends UISceneObjectPrimitiveBase<T, TStyle> {

/**
```
(get) padding: BoxOffset<UIDimension>
(set) padding: BoxOffset<UIDimension>
```
*/
padding: BoxOffset<UIDimension>

/**
```
(get) usableVolume: Box3D
(set) usableVolume: Box3D
```
*/
usableVolume: Box3D

/**
```
(get) usableVolumeSize: Vec3
(set) (Not Available)
```
*/
usableVolumeSize: Vec3

/**
```
getStageScale(uiRoot: UIRoot | null): Vec3
```

*/
getStageScale(uiRoot: UIRoot | null): Vec3

/**
```
getStageSize(uiRoot: UIRoot | null): Vec3
```

*/
getStageSize(uiRoot: UIRoot | null): Vec3

/**
```
updatePrimitiveSize(): void
```

*/
updatePrimitiveSize(): void

}
