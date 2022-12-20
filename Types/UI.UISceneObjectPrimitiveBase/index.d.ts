/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />

declare interface UISceneObjectPrimitiveBase<T, TStyle> extends UIPrimitiveBase<TStyle> {

/**
```
(get) boundingBox: Box3D
(set) boundingBox: Box3D
```
*/
boundingBox: Box3D

/**
```
(get) padding: BoxOffset<UIDimension>
(set) padding: BoxOffset<UIDimension>
```
*/
padding: BoxOffset<UIDimension>

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
(get) zIndex: number
(set) zIndex: number
```
*/
zIndex: number

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
