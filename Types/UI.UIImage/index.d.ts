/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


/**
UIImage widget used to display images.
Practically this element is quite similar to UIButton but without the label.
*/
declare interface UIImage<TStyle> extends UIElement<TStyle> {

/**
```
(get) image: UIPrimitive<TStyle>
(set) image: UIPrimitive<TStyle>
```
*/
image: UIPrimitive<TStyle>

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
