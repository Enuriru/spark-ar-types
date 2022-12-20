/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
declare interface SubTexture extends TextureBase {
/**
* ```
(get) minU: ScalarSignal
(set) minU: ScalarSignal
```

Specifies the position of the left boundary in UV texture coordinates.
*/
minU: ScalarSignal;
/**
* ```
(get) minV: ScalarSignal
(set) minV: ScalarSignal
```

Specifies the position of the bottom boundary in UV texture coordinates.
*/
minV: ScalarSignal;
/**
* ```
(get) sizeU: ScalarSignal
(set) sizeU: ScalarSignal
```

Specifies the horizontal span in UV texture coordinates.
*/
sizeU: ScalarSignal;
/**
* ```
(get) sizeV: ScalarSignal
(set) sizeV: ScalarSignal
```

Specifies the vertical span in UV texture coordinates.
*/
sizeV: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) source: TextureBase
```

Sets the source texture to use for this sub texture.
*/
source: TextureBase;
}
