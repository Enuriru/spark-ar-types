/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />
/// <reference path="../UI.UIRoot/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UIElement<TStyle> extends PlanarObject {

/**
```
(get) calculatedStyle: DeepReadonly<Partial<TStyle>>
(set) calculatedStyle: DeepReadonly<Partial<TStyle>>
```

The resulting cascadingly calculated style for the element
*/
calculatedStyle: DeepReadonly<Partial<TStyle>>

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
(get) style: DeepReadonly<Partial<TStyle>>
(set) style: DeepReadonly<Partial<TStyle>>
```

Object containing the UIElement's style parameters.
This property can be thought as similar to the HTML element.style property
*/
style: DeepReadonly<Partial<TStyle>>

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
_initialize(): void
```

*/
_initialize(): void

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

}
