/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Textures.TextureColorEncoding/index.d.ts" />
/// <reference path="../Textures.TextureFilteringMode/index.d.ts" />
/// <reference path="../Textures.TextureWrapMode/index.d.ts" />

/**
The `ExternalTexture` class encapsulates a visual asset that is downloaded over the network.
*/
declare interface ExternalTexture extends TextureBase {

/**
```
(get) colorEncoding: StringSignal<TextureColorEncoding>
(set) colorEncoding: StringSignal<TextureColorEncoding>
```

Specifies the color encoding this texture would be using.
Note: Color encoding only affects the texture in `AVAILABLE` state.
Default: `TextureColorEncoding.LINEAR`.
*/
colorEncoding: StringSignal<TextureColorEncoding>

/**
```
(get) filteringMode: StringSignal<TextureFilteringMode>
(set) filteringMode: StringSignal<TextureFilteringMode>
```

Specifices the filtering mode to use to address size mismatch between image data
and it's rendered representation.
Default: `TextureFilteringMode.BILINEAR`.
Note: Filtering mode only affects the texture in `AVAILABLE` state.
Note: `BILINEAR_MIPMAP` and `TRILINEAR` modes on non power of two textures is not supported and becomes a no-op.
*/
filteringMode: StringSignal<TextureFilteringMode>

/**
```
(get) state: StringSignal<ExternalTexture.State>
(set) (Not Available)
```

Specifies a `StringSignal<ExternalTexture.State>` representing the loading state of the external texture.
The value of the signal is guaranteed to be a member of the `TexturesModule.ExternalTexture.State` enumeration.
*/
state: StringSignal<ExternalTexture.State>

/**
```
(get) uWrapMode: StringSignal<TextureWrapMode>
(set) uWrapMode: StringSignal<TextureWrapMode>
```

Specifies how this texture is going to "tile" along it's horizontal axis.
Default: `TextureWrapMode.CLAMP`.
Note: Wrap mode only affects the texture in `AVAILABLE` state.
Note: Non-`CLAMP` mode on non power of two textures is not supported and becomes a no-op.
*/
uWrapMode: StringSignal<TextureWrapMode>

/**
```
(get) url: StringSignal
(set) url: StringSignal
```

Specifies the URL of the texture to be downloaded.
*/
url: StringSignal

/**
```
(get) vWrapMode: StringSignal<TextureWrapMode>
(set) vWrapMode: StringSignal<TextureWrapMode>
```

Specifies how this texture is going to "tile" along it's vertical axis.
Default: `TextureWrapMode.CLAMP`.
Note: Wrap mode only affects the texture in `AVAILABLE` state.
Note: Non-`CLAMP` mode on non power of two textures is not supported and becomes a no-op.
*/
vWrapMode: StringSignal<TextureWrapMode>

}
