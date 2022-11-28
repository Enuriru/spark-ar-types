/// <reference path="../Scene.Canvas/index.d.ts" />
/// <reference path="../UI.UIElement/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


/**
The root UI element
*/
declare interface UIRoot<TStyle> extends UIElement {

/**
```
(get) canvas: Canvas
(set) (Not Available)
```

The canvas that the root is attached to.
*/
canvas: Canvas

/**
```
(get) parentElement: UIElement | null
(set) (Not Available)
```
*/
parentElement: UIElement | null

/**
```
(get) uiRoot: UIRoot
(set) (Not Available)
```
*/
uiRoot: UIRoot

}
