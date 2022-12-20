/// <reference path="../Scene.PlanarText/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The PlanarText based text primitive
*/
declare interface UIPlanarTextPrimitive extends UIPlanarObjectPrimitiveBase<PlanarText, UIPlanarTextPrimitiveStyle> {

/**
```
(get) planarText: PlanarText
(set) (Not Available)
```
*/
planarText: PlanarText

/**
```
(get) text: string
(set) text: string
```
*/
text: string

/**
```
applyStyle(style: Partial<Readonly<UIPlanarTextPrimitiveStyle>>): void
```

*/
applyStyle(style: Partial<Readonly<UIPlanarTextPrimitiveStyle>>): void

/**
```
init(parentSceneObject: SceneObjectBase, style: UIPlanarTextPrimitiveStyle): void
```

*/
init(parentSceneObject: SceneObjectBase, style: UIPlanarTextPrimitiveStyle): void

}
