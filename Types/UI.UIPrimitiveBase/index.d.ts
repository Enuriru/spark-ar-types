/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../UI.UIElement/index.d.ts" />

/**
The base class for UIPrimitives
*/
declare interface UIPrimitiveBase<TStyle> {

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
(get) usableVolume: Box3D
(set) usableVolume: Box3D
```
*/
usableVolume: Box3D

/**
```
applyStyle(style: TStyle): void
```

*/
applyStyle(style: TStyle): void

/**
```
init(config: UIPrimitiveConfig<TStyle>): void
```

*/
init(config: UIPrimitiveConfig<TStyle>): void

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
onScroll(deadzone?: number): EventSource<UIScrollEvent>
```

*/
onScroll(deadzone?: number): EventSource<UIScrollEvent>

}
