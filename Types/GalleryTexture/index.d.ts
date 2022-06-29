/// <reference path="../ExternalTexture.State/index.d.ts" />
/// <reference path="../Fonts.State/index.d.ts" />
/// <reference path="../GalleryTexture.GalleryTextureMediaBase/index.d.ts" />
/// <reference path="../GalleryTexture.State/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
/// <reference path="../PlaneTracking.State/index.d.ts" />
/// <reference path="../PointTracker.State/index.d.ts" />
/// <reference path="../Prefabs.State/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../TouchGestures.State/index.d.ts" />
/// <reference path="../WorldTracking.State/index.d.ts" />

/**
The `GalleryTexture` class encapsulates a texture that was picked from the gallery.
*/
declare interface GalleryTexture extends TextureBase {

/**
```
(get) onMediaChange: EventSource<GalleryTextureMediaBase>
(set) (Not Available)
```

Returns an EventSource that will fire when the user selected a new Gallery Texture media.
The event will contain either a GalleryTextureMediaImage or GalleryTextureMediaVideo object
that will hold additional API for controlling playback.
*/
onMediaChange: EventSource<GalleryTextureMediaBase>

/**
```
(get) state: StringSignal<State>
(set) (Not Available)
```

Specifies a `Signal` representing the state of the gallery texture. The value of the signal is
guaranteed to be a member of the `TexturesModule.GalleryTexture.State` enumeration.
*/
state: StringSignal<State>

}
