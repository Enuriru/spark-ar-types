/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
PlanarImage based UI primitive
*/
declare interface UIPlanarImagePrimitive<TStyle> extends UIPlanarObjectPrimitiveBase<PlanarImage, TStyle> {

/**
```
applyStyle(style: Partial<UIPlanarImagePrimitiveStyle>): void
```

*/
applyStyle(style: Partial<UIPlanarImagePrimitiveStyle>): void

/**
```
init(parent: SceneObjectBase, style: Partial<UIPlanarImagePrimitiveStyle>): void
```

*/
init(parent: SceneObjectBase, style: Partial<UIPlanarImagePrimitiveStyle>): void

}
