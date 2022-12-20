/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />
/// <reference path="../UI.UIRoot/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


/**
The base UIElement class
*/
declare interface UIElement<TStyle> extends PlanarObject {

/**
```
(get) calculatedStyle: Partial<TStyle>
(set) (Not Available)
```
*/
calculatedStyle: Partial<TStyle>

/**
```
(get) currentStyle: Partial<TStyle>
(set) (Not Available)
```

The current style based on the state of the UI element
*/
currentStyle: Partial<TStyle>

/**
```
(get) disabled: BoolSignal
(set) disabled: BoolSignal
```

Determines whether the element is disabled.
Disabled elements are visible but not interactable.
*/
disabled: BoolSignal

/**
```
(get) disabledValue: boolean
(set) disabledValue: boolean
```

Determines whether the element is disabled.
Disabled elements are visible but not interactable.
*/
disabledValue: boolean

/**
```
(get) parentElement: UIElement | null
(set) (Not Available)
```

The parent UIElement of this UIElement.
This property guarantees to return the parent UIElement even if the direct parent of a UIElement is not a UIElement.
This property will recursively look for the parent of parents to find a UIElement.
*/
parentElement: UIElement | null

/**
```
(get) state: StringSignal
(set) (Not Available)
```

The UIElement's state signal
*/
state: StringSignal

/**
```
(get) stateValue: string
(set) stateValue: string
```

The current value of the UIElement's state
*/
stateValue: string

/**
```
(get) style: DeepReadonly<Partial<TStyle>>
(set) style: DeepReadonly<Partial<TStyle>>
```

Object containing the UIElement's style parameters.
This property can be thought as similar to the HTML element.style property
*/
style: DeepReadonly<Partial<TStyle>>

/**
```
(get) styleClasses: ReadonlyArray<string>
(set) styleClasses: ReadonlyArray<string>
```

The style classes for the UIElement.
*/
styleClasses: ReadonlyArray<string>

/**
```
(get) uiRoot: UIRoot | null
(set) (Not Available)
```

The root of the UI hierarchy, this UIElement belongs to
*/
uiRoot: UIRoot | null

/**
```
(get) usableVolumeForChildren: Box3D
(set) (Not Available)
```

The bounding box in local space usable by the child elements.
*/
usableVolumeForChildren: Box3D

/**
```
(get) x: ScalarSignal
(set) x: ScalarSignal
```

Positional offset of UIElement in X axis
*/
x: ScalarSignal

/**
```
(get) xValue: number
(set) xValue: number
```

Positional offset of UIElement in X axis
*/
xValue: number

/**
```
(get) y: ScalarSignal
(set) y: ScalarSignal
```

Positional offset of UIElement in Y axis
*/
y: ScalarSignal

/**
```
(get) yValue: number
(set) yValue: number
```

Positional offset of UIElement in Y axis
*/
yValue: number

/**
```
_initialize(): void
```

*/
_initialize(): void

/**
```
_onAddedToScene(): void
```

*/
_onAddedToScene(): void

/**
```
createChild<T>(elementClass: IUIElementConstructor<T> | string, config?: undefined): T
```

Creates a new instance of the UI element with the given config and adds it as a child to this instance
*/
createChild

/**
```
onInit(): void
```

This callback is called only once through its lifecycle when the UIElement is initialized.
It's not guaranteed that the UIElement will have a parent at this point.
Any initialization logic required by the element should be implemented by overriding this method.
*/
onInit(): void

/**
```
onLoad(): void
```

This callback is called when the UIElement is added into the scene as a child of a UIElement.
*/
onLoad(): void

/**
```
recalculateStyle(): void
```

Recalculates the style for the UIElement.
The style is calculated in a css-like cascading fashion.
*/
recalculateStyle(): void

/**
```
updateLayout(): void
```

This callback is called when the UIElement requires recalulation of its layout.
*/
updateLayout(): void

/**
```
updateStyle(): void
```

This callback is called when UIElement requires update of its style parameters.
*/
updateStyle(): void

}
