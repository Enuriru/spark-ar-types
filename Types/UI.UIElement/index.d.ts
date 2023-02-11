/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
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
(get) _zIndexValue: number
(set) _zIndexValue: number
```
*/
_zIndexValue: number

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
(get) selfSubscriptions: undefined
(set) selfSubscriptions: undefined
```
*/
selfSubscriptions: undefined

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
(get) zIndexValue: number
(set) zIndexValue: number
```

The z-index value of the UIElement. This value is an integer ranging between interval [-1000, 1000].
Any value out of that interval will be clamped.The decimal values will automatically be rounded to the closest integer value.
If z-index is not explicitly set for an element, it effectively means "inherit the value from the parent".
The default z-index value of UIRoot is 0.
*/
zIndexValue: number

/**
```
applyCurrentStyle(recursive: boolean): void
```

Applies type calculated currentStyle to the UIElement
*/
applyCurrentStyle(recursive: boolean): void

/**
```
applyStyle(style: Partial<TStyle>): void
```

This method applies the given style
*/
applyStyle(style: Partial<TStyle>): void

/**
```
createChild<T>(elementClass: IUIElementConstructor<T> | string, config?: undefined): T
```

Creates a new instance of the UI element with the given config and adds it as a child to this instance
*/
createChild

/**
```
executeForAllChildUIElements(func: {}, includeSelf: boolean): void
```

Calls the given function for each deep children that's of type UIElement.
The traversal is breadth first.
*/
executeForAllChildUIElements(func: {}, includeSelf: boolean): void

/**
```
forceUpdateLayout(recursive: boolean): void
```

Forces a recalculation of the layout for this element
*/
forceUpdateLayout(recursive: boolean): void

/**
```
forceUpdateStyle(recursive: boolean): void
```

Forces a recalculation of style for this UIElement and applies the style
*/
forceUpdateStyle(recursive: boolean): void

/**
```
getContentRoot(): SceneObjectBase
```

The SceneObject that's used as the root of this element for child creation.
The content root is the UIElement itself, by default. But users are free to provide a custom contentRoot.
*/
getContentRoot(): SceneObjectBase

/**
```
onDestroy(): void
```

This callback is called before the UIElement is destroyed
*/
onDestroy(): void

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
onLayout(usableVolume: Box3D): void
```

This callback is called when the UIElement requires recalulation of its layout.
*/
onLayout(usableVolume: Box3D): void

/**
```
onParentChanged(): void
```

This callback is called when the UIElement's parent is changed.
*/
onParentChanged(): void

/**
```
recalculateStyle(recursive: boolean): void
```

Recalculates the style for the UIElement.
The style is calculated in a css-like cascading fashion.
*/
recalculateStyle(recursive: boolean): void

}
