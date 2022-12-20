/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
PlanarImage based UI primitive
*/
declare interface UIPlanarImagePrimitive<TStyle> extends UIPlanarObjectPrimitiveBase<PlanarImage, TStyle> {

/**
```
applyStyle(style: Partial<TStyle>): void
```

*/
applyStyle(style: Partial<TStyle>): void

/**
```
init(parent: SceneObjectBase, style: Partial<TStyle>): void
```

*/
init(parent: SceneObjectBase, style: Partial<TStyle>): void

}
