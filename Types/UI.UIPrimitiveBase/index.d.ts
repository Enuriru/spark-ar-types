/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../UI.UIElement/index.d.ts" />

/**
The base class for UIPrimitives
*/
declare interface UIPrimitiveBase<TStyle> {

/**
```
(get) boundingBox: Box3D
(set) boundingBox: Box3D
```
*/
boundingBox: Box3D

/**
```
(get) parentElement: UIElement
(set) (Not Available)
```
*/
parentElement: UIElement

/**
```
(get) rotation: Rotation
(set) rotation: Rotation
```
*/
rotation: Rotation

/**
```
(get) scale: Vec3
(set) scale: Vec3
```
*/
scale: Vec3

/**
```
applyStyle(style: TStyle): void
```

*/
applyStyle(style: TStyle): void

/**
```
init(parentSceneObject: SceneObjectBase, style: TStyle): void
```

*/
init(parentSceneObject: SceneObjectBase, style: TStyle): void

}
