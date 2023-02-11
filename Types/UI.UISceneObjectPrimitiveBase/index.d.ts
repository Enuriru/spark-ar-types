/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />

declare interface UISceneObjectPrimitiveBase<T, TStyle> extends UIPrimitiveBase<TStyle> {

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
(get) sceneObject: T
(set) sceneObject: T
```
*/
sceneObject: T

/**
```
(get) usableVolume: Box3D
(set) usableVolume: Box3D
```
*/
usableVolume: Box3D

/**
```
onHover(): EventSource<UIHoverEvent>
```

*/
onHover(): EventSource<UIHoverEvent>

/**
```
onPress(): EventSource<UIPressEvent>
```

*/
onPress(): EventSource<UIPressEvent>

/**
```
onScroll(deadzone: number): EventSource<UIScrollEvent>
```

*/
onScroll(deadzone: number): EventSource<UIScrollEvent>

}
