/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UIElement extends PlanarObject {

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

}
