/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UIButton<TStyle> extends UIElement<TStyle> {

/**
```
(get) image: UIPrimitive<TStyle>
(set) image: UIPrimitive<TStyle>
```
*/
image: UIPrimitive<TStyle>

/**
```
(get) label: UITextPrimitive<TStyle>
(set) label: UITextPrimitive<TStyle>
```
*/
label: UITextPrimitive<TStyle>

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
applyStyle(style: Partial<TStyle>): void
```

*/
applyStyle(style: Partial<TStyle>): void

/**
```
bindFlagProperty(eventSource: EventSource, flagPropertyName: string): void
```

*/
bindFlagProperty(eventSource: EventSource, flagPropertyName: string): void

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
onClick(callback: {}): Subscription
```

Registers a callback function to the onClick event of the button
*/
onClick(callback: {}): Subscription

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
updateState(): void
```

*/
updateState(): void

}
