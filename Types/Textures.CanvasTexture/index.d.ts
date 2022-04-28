/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `CanvasTexture` class enables painting with a brush to a texture.
*/
declare interface CanvasTexture extends TextureBase {

/**
```
addPath(startProgress: ScalarSignal, endProgress: ScalarSignal, xSampler: ScalarSampler, ySampler: ScalarSampler, widthSampler: ScalarSampler, colorSampler: ColorSampler): void
```

Adds a path based on the specified samplers.
*/
addPath(startProgress: ScalarSignal, endProgress: ScalarSignal, xSampler: ScalarSampler, ySampler: ScalarSampler, widthSampler: ScalarSampler, colorSampler: ColorSampler): void

/**
```
clearPaths(): void
```

Deletes all paths.
*/
clearPaths(): void

}
