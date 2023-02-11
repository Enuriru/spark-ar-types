/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.PlanarStack/index.d.ts" />
/// <reference path="../UI.UIIcon/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UIIconButton<TStyle> extends UIButton<TStyle> {

/**
```
(get) icon: StringSignal
(set) icon: StringSignal
```

The Button's icon as a signal
*/
icon: StringSignal

/**
```
(get) iconElement: UIIcon<>
(set) iconElement: UIIcon<>
```
*/
iconElement: UIIcon<>

/**
```
(get) iconValue: string
(set) iconValue: string
```

The icon of the Button
*/
iconValue: string

/**
```
(get) stack: PlanarStack
(set) stack: PlanarStack
```
*/
stack: PlanarStack

/**
```
applyStyle(style: Partial<TStyle>): void
```

*/
applyStyle(style: Partial<TStyle>): void

/**
```
isHovered(): boolean
```

*/
isHovered(): boolean

/**
```
isPressed(): boolean
```

*/
isPressed(): boolean

/**
```
onInit(): void
```

*/
onInit(): void

/**
```
onLayout(usableVolume: Box3D): void
```

*/
onLayout(usableVolume: Box3D): void

}
