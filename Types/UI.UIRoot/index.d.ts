/// <reference path="../Reactive.PointSignal/index.d.ts" />
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
(get) stageSize: PointSignal
(set) (Not Available)
```

The size of the UIRoot stage in canvas units (pseudo-pixels)
*/
stageSize: PointSignal

/**
```
(get) themes: ReadonlyArray<Theme>
(set) themes: ReadonlyArray<Theme>
```

The themes attached to the UI Root.
The order of the themes are taken into account in the style calculation.
*/
themes: ReadonlyArray<Theme>

/**
```
(get) uiRoot: UIRoot
(set) (Not Available)
```
*/
uiRoot: UIRoot

/**
```
(get) zIndexValue: number
(set) zIndexValue: number
```

The z-index value of the UIRoot. This value is an integer ranging between interval [-1000, 1000].
Any value out of that interval will be clamped.The decimal values will automatically be rounded to the closest integer value.
The default z-index value is 0.
*/
zIndexValue: number

/**
```
forceRecalculateRenderOrders(): void
```

Forces a recalculation of the render orders for the whole UI tree syncronously.
Depending on you UI structure, this operation could cause a performance hit.
Generally the recommendation is to use requestRecalculateRenderOrders method instead.
*/
forceRecalculateRenderOrders(): void

/**
```
getStyleFromThemes(elementType: string, styleClasses: undefined): object
```

Gets the style from the list of themes for a particular element with the given styleClasses.
*/
getStyleFromThemes(elementType: string, styleClasses: undefined): object

/**
```
onInit(): void
```

*/
onInit(): void

/**
```
requestRecalculateRenderOrders(): void
```

Requests a recalculation of render orders for the whole UI tree.
The actual execution will typically deferred to next frame.
*/
requestRecalculateRenderOrders(): void

}
