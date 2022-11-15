

/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UI extends Module {

/**
```
registerElement(elementType: string, constructor: IUIElementConstructor): IUIElementConstructor
```

Registers a UI element class to Spark UI
*/
registerElement(elementType: string, constructor: IUIElementConstructor): IUIElementConstructor

}
