/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UISlider<TStyle> extends UIElement<TStyle> {

/**
```
(get) fill: UIPrimitive<>
(set) fill: UIPrimitive<>
```
*/
fill: UIPrimitive<>

/**
```
(get) handle: UIPrimitive<>
(set) handle: UIPrimitive<>
```
*/
handle: UIPrimitive<>

/**
```
(get) inputCaptor: UIPrimitive<UIPrimitiveStyle>
(set) inputCaptor: UIPrimitive<UIPrimitiveStyle>
```
*/
inputCaptor: UIPrimitive<UIPrimitiveStyle>

/**
```
(get) level: ScalarSignal
(set) level: ScalarSignal
```

The signal for the Slider's level (aka. value)
*/
level: ScalarSignal

/**
```
(get) levelValue: number
(set) levelValue: number
```

The Slider's level (aka. value)
*/
levelValue: number

/**
```
(get) max: number
(set) max: number
```

The maximum allowed value for the Slider
*/
max: number

/**
```
(get) min: number
(set) min: number
```

The minimum allowed value for the Slider
*/
min: number

/**
```
(get) track: UIPrimitive<>
(set) track: UIPrimitive<>
```
*/
track: UIPrimitive<>

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
onLevelChange(callback: {}): Subscription
```

Registers a callback function to the onLevelChange event of the slider
*/
onLevelChange(callback: {}): Subscription

}
