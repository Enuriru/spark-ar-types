/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UIPanel<TStyle> extends UIElement<TStyle> {

/**
```
(get) background: UIPrimitive<TStyle>
(set) background: UIPrimitive<TStyle>
```
*/
background: UIPrimitive<TStyle>

/**
```
(get) label: UITextPrimitive<TStyle>
(set) label: UITextPrimitive<TStyle>
```
*/
label: UITextPrimitive<TStyle>

/**
```
(get) title: StringSignal
(set) title: StringSignal
```

The Panel's title text as a signal
*/
title: StringSignal

/**
```
(get) titleValue: string
(set) titleValue: string
```

The title of the Panel
*/
titleValue: string

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

}
