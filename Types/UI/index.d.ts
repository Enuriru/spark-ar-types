/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../UI.CodeBasedTheme/index.d.ts" />
/// <reference path="../UI.UIColorUtils/index.d.ts" />
/// <reference path="../UI.UIDimensionUtils/index.d.ts" />
/// <reference path="../UI.UIElement/index.d.ts" />
/// <reference path="../UI.UIGestures/index.d.ts" />
/// <reference path="../UI.UIRoot/index.d.ts" />
/// <reference path="../UI.UIUtils/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UI extends Module {

/**
```
(get) CodeBasedTheme: CodeBasedTheme
(set) CodeBasedTheme: CodeBasedTheme
```

The base class for creating code based themes
*/
CodeBasedTheme: CodeBasedTheme

/**
```
(get) ColorUtils: UIColorUtils
(set) ColorUtils: UIColorUtils
```

The static utility class to help with conversion of color values in different formats
*/
ColorUtils: UIColorUtils

/**
```
(get) DimensionUtils: UIDimensionUtils
(set) DimensionUtils: UIDimensionUtils
```

The static utility class to help with the calculation of dimensions
*/
DimensionUtils: UIDimensionUtils

/**
```
(get) Element: UIElement
(set) Element: UIElement
```

The base UI Element class
*/
Element: UIElement

/**
```
(get) Gestures: UIGestures
(set) Gestures: UIGestures
```

The gesture recognizer used for widget interaction
*/
Gestures: UIGestures

/**
```
(get) Utils: UIUtils
(set) Utils: UIUtils
```

The static utility class to help with UI related operations.
*/
Utils: UIUtils

/**
```
(get) elementType: uiElement
(set) elementType: uiElement
```

Decorator used to register UIElements to the dynamic UI type system
*/
elementType: uiElement

/**
```
create<T>(elementClass: IUIElementConstructor<T> | string, config?: undefined): T
```

Creates a new instance of the UI element with the given config
*/
create

/**
```
createPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UIPrimitiveStyle>>): UIPrimitive<any>
```

*/
createPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UIPrimitiveStyle>>): UIPrimitive<any>

/**
```
createRoot(config: PartialExcept<Readonly<UIRootConfig>, >): UIRoot
```

Creates a new UIRoot and returns the instance
*/
createRoot(config: PartialExcept<Readonly<UIRootConfig>, >): UIRoot

/**
```
createTextPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UITextPrimitiveStyle>>): UITextPrimitive
```

*/
createTextPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UITextPrimitiveStyle>>): UITextPrimitive

/**
```
getElementTypeOfClass<T>(elementClass: IUIElementConstructor<T>): string
```

Resolves the elementType of a given UI element class
*/
getElementTypeOfClass

}
