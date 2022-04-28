/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `ColorTexture` class encapsulates a texture that has a color (including alpha channel).
*/
declare interface ColorTexture extends TextureBase {

/**
```
(get) (Not Available)
(set) color: ColorSignal
```

Specifies a `ColorSignal` for a solid color texture. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/
color: ColorSignal

}
