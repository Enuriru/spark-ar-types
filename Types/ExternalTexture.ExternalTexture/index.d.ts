/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `ExternalTexture` class encapsulates a visual asset that is downloaded over the network.
*/
declare interface ExternalTexture extends TextureBase {

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
(get) url: StringSignal
(set) url: StringSignal
```

Specifies the URL of the texture to be downloaded.
*/
url: StringSignal

}
