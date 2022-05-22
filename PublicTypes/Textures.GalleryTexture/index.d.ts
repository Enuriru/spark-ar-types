/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Textures.GalleryTextureMediaBase/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
declare interface GalleryTexture extends TextureBase {
/**
* ```
(get) onMediaChange: EventSource<GalleryTextureMediaBase>
(set) (Not Available)
```

Returns an EventSource that will fire when the user selected a new Gallery Texture media.
The event will contain either a GalleryTextureMediaImage or GalleryTextureMediaVideo object
that will hold additional API for controlling playback.
*/
onMediaChange: EventSource<GalleryTextureMediaBase>;
/**
* ```
(get) state: StringSignal<State>
(set) (Not Available)
```

Specifies a `Signal` representing the state of the gallery texture. The value of the signal is
guaranteed to be a member of the `TexturesModule.GalleryTexture.State` enumeration.
*/
state: StringSignal<State>;
}
