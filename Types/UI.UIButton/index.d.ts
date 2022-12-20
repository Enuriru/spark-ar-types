/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../UI.UIElement/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UIButton<TImageStyle, TTextStyle, TStyle> extends UIElement {

/**
```
(get) image: UIPrimitive<TImageStyle>
(set) image: UIPrimitive<TImageStyle>
```
*/
image: UIPrimitive<TImageStyle>

/**
```
(get) isHovered: boolean
(set) (Not Available)
```
*/
isHovered: boolean

/**
```
(get) isPressed: boolean
(set) (Not Available)
```
*/
isPressed: boolean

/**
```
(get) label: UITextPrimitive<TTextStyle>
(set) label: UITextPrimitive<TTextStyle>
```
*/
label: UITextPrimitive<TTextStyle>

/**
```
(get) text: StringSignal
(set) text: StringSignal
```

The Button's text as a signal
*/
text: StringSignal

/**
```
(get) textValue: string
(set) textValue: string
```

The text of the Button
*/
textValue: string

/**
```
onLoad(): void
```

*/
onLoad(): void

/**
```
updateLayout(): void
```

*/
updateLayout(): void

/**
```
updateState(): void
```

*/
updateState(): void

/**
```
updateStyle(): void
```

*/
updateStyle(): void

}
