/// <reference path="../Reactive.Box3D/index.d.ts" />

/**
The abstract base class for all PlanarObject primitives
*/
declare interface UIPlanarObjectPrimitiveBase<T, TStyle> extends UISceneObjectPrimitiveBase<T, TStyle> {

/**
```
(get) boundingBox: Box3D
(set) boundingBox: Box3D
```
*/
boundingBox: Box3D

}
