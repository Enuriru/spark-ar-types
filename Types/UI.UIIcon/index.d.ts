/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


/**
The UIElement that can be used for displaying font based icons
*/
declare interface UIIcon<TStyle> extends UIElement<TStyle> {

/**
```
(get) icon: StringSignal
(set) icon: StringSignal
```

The icon name as a signal
*/
icon: StringSignal

/**
```
(get) iconValue: string
(set) iconValue: string
```

The icon name
*/
iconValue: string

/**
```
(get) textPrimitive: UITextPrimitive<TStyle>
(set) textPrimitive: UITextPrimitive<TStyle>
```
*/
textPrimitive: UITextPrimitive<TStyle>

/**
```
applyStyle(style: Partial<TStyle>): void
```

*/
applyStyle(style: Partial<TStyle>): void

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

/**
```
updateView(): void
```

*/
updateView(): void

}
