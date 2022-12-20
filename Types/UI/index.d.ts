/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../UI.CodeBasedTheme/index.d.ts" />
/// <reference path="../UI.UIColorUtils/index.d.ts" />
/// <reference path="../UI.UIDimensionUtils/index.d.ts" />
/// <reference path="../UI.UIUtils/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
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
(get) Utils: UIUtils
(set) Utils: UIUtils
```

The static utility class to help with UI related operations.
*/
Utils: UIUtils

/**
```
(get) uiElement: uiElement
(set) uiElement: uiElement
```

Decorator used to register UIElements to the dynamic UI type system
*/
uiElement: uiElement

/**
```
createPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UIPrimitiveStyle>>): UIPrimitive<any>
```

*/
createPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UIPrimitiveStyle>>): UIPrimitive<any>

/**
```
createTextPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UITextPrimitiveStyle>>): UITextPrimitive
```

*/
createTextPrimitive(parentSceneObject: SceneObjectBase, style: DeepReadonly<Partial<UITextPrimitiveStyle>>): UITextPrimitive

}
