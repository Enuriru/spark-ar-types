/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


/**
UILabel element used to display text
*/
declare interface UILabel<TStyle> extends UIElement<TStyle> {

/**
```
(get) text: StringSignal
(set) text: StringSignal
```

The Label's text as a signal
*/
text: StringSignal

/**
```
(get) textPrimitive: UITextPrimitive<TStyle>
(set) textPrimitive: UITextPrimitive<TStyle>
```
*/
textPrimitive: UITextPrimitive<TStyle>

/**
```
(get) textValue: string
(set) textValue: string
```

The text of the Label
*/
textValue: string

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
