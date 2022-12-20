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
(get) calculatedTheme: Theme
(set) (Not Available)
```

The calculated theme of the UI Root
*/
calculatedTheme: Theme

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
(get) stageSizeInMeters: PointSignal
(set) (Not Available)
```

The size of the UIRoot stage in meters
*/
stageSizeInMeters: PointSignal

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
_onUpdate(): void
```

*/
_onUpdate(): void

/**
```
onInit(): void
```

*/
onInit(): void

/**
```
recalculateTheme(): void
```

*/
recalculateTheme(): void

}
