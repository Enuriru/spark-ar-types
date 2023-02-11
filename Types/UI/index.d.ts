/// <reference path="../Scene.PlanarStack/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../UI.CodeBasedTheme/index.d.ts" />
/// <reference path="../UI.IconSet/index.d.ts" />
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
(get) IconSet: IconSet
(set) IconSet: IconSet
```

The icon set base class
*/
IconSet: IconSet

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
(get) defaultThemes: undefined
(set) (Not Available)
```

The default themes with the assigned order
*/
defaultThemes: undefined

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
createDeferredChildren(sceneObject: SceneObjectBase, deferredChildrenFactory: {} | {}): undefined
```

Create children UIElements in a deferred fashion using a method.
The parent will be auto-injected to the children created in the factory method
*/
createDeferredChildren(sceneObject: SceneObjectBase, deferredChildrenFactory: {} | {}): undefined

/**
```
createPrimitive(config: UIPrimitiveConfig<UIPrimitiveStyle>): UIPrimitive<any>
```

*/
createPrimitive(config: UIPrimitiveConfig<UIPrimitiveStyle>): UIPrimitive<any>

/**
```
createRoot(config: PartialExcept<Readonly<UIRootConfig>, >): UIRoot
```

Creates a new UIRoot and returns the instance
*/
createRoot(config: PartialExcept<Readonly<UIRootConfig>, >): UIRoot

/**
```
createStackSync(initialState: Partial<StackConfig>): PlanarStack
```

[Experimental] This is an experimental (and probably temporary) helper function
which can be used to add PlanarStacks while creating nested UI hierarchies.
In addition to all possible initial state configuration parameters of PlanarStack,
this method also supports "parent" and "children" parameters as in any other UI Element.
*/
createStackSync(initialState: Partial<StackConfig>): PlanarStack

/**
```
createTextPrimitive(config: UIPrimitiveConfig<UITextPrimitiveStyle>): UITextPrimitive
```

*/
createTextPrimitive(config: UIPrimitiveConfig<UITextPrimitiveStyle>): UITextPrimitive

/**
```
getElementTypeOfClass<T>(elementClass: IUIElementConstructor<T>): string
```

Resolves the elementType of a given UI element class
*/
getElementTypeOfClass

/**
```
getIconData(iconName: string): IconData
```

Searches through all of the registered icon sets and gets the icon data for the given icon name
*/
getIconData(iconName: string): IconData

/**
```
registerDefaultTheme(theme: Theme, order: number): void
```

Registers a theme that will be added to every UIRoot on creation automatically
*/
registerDefaultTheme(theme: Theme, order: number): void

/**
```
registerIconSet(iconSet: IconSet): void
```

Registers a new icon set
*/
registerIconSet(iconSet: IconSet): void

}
