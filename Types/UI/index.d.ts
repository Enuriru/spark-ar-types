/// <reference path="../UI.UIDimensionUtils/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UI extends Module {

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
(get) uiElement: uiElement
(set) uiElement: uiElement
```

Decorator used to register UIElements to the dynamic UI type system
*/
uiElement: uiElement

/**
```
createPrimitive(style: UIPrimitiveStyle): UIPrimitive<any>
```

*/
createPrimitive(style: UIPrimitiveStyle): UIPrimitive<any>

/**
```
createTextPrimitive(style: UITextPrimitiveStyle): UITextPrimitive
```

*/
createTextPrimitive(style: UITextPrimitiveStyle): UITextPrimitive

}
