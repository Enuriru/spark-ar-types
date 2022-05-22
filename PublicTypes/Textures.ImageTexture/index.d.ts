/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Textures.TextureColorEncoding/index.d.ts" />
/// <reference path="../Textures.TextureFilteringMode/index.d.ts" />
/// <reference path="../Textures.TextureWrapMode/index.d.ts" />
declare interface ImageTexture extends TextureBase {
/**
* ```
(get) colorEncoding: StringSignal<TextureColorEncoding>
(set) (Not Available)
```

Specifies the color encoding this texture would be using.
*/
colorEncoding: StringSignal<TextureColorEncoding>;
/**
* ```
(get) filteringMode: StringSignal<TextureFilteringMode>
(set) (Not Available)
```

Specifices the filtering mode to use to address size mismatch between image data
and it's rendered representation.
*/
filteringMode: StringSignal<TextureFilteringMode>;
/**
* ```
(get) uWrapMode: StringSignal<TextureWrapMode>
(set) (Not Available)
```

Specifies how this texture is going to "tile" along it's horizontal axis.
*/
uWrapMode: StringSignal<TextureWrapMode>;
/**
* ```
(get) vWrapMode: StringSignal<TextureWrapMode>
(set) (Not Available)
```

Specifies how this texture is going to "tile" along it's horizontal axis.
*/
vWrapMode: StringSignal<TextureWrapMode>;
}
