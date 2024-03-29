/// <reference path="../Scene.PlanarObject/index.d.ts" />
/// <reference path="../Svgs.Svg/index.d.ts" />


/**
[{"kind":"introducedBy","version":3949288336}]
*/


/**
The `SvgImage` class describes an SVG asset for a scene.
*/
declare interface SvgImage extends PlanarObject {

/**
```
(get) (Not Available)
(set) svg: Svg
```

Sets the given svg from the svg registry to the svg image scene object.
*/
svg: Svg

/**
```
getSvg(): Promise<Svg | null>
```

Retrieves a previously set Svg to a given svg image scene object.
*/
getSvg(): Promise<Svg | null>

}
