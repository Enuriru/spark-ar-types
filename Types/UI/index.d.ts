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

/**
```
registerElement(elementType: string, constructor: IUIElementConstructor): IUIElementConstructor
```

Registers a UI element class to Spark UI
*/
registerElement(elementType: string, constructor: IUIElementConstructor): IUIElementConstructor

}
