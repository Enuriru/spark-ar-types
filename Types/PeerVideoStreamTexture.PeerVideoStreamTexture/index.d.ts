/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `PeerVideoStreamTexture` class represents an image texture passed in via external stream provider.
*/
declare interface PeerVideoStreamTexture extends TextureBase {

/**
```
(get) peerId: StringSignal
(set) peerId: StringSignal
```

Specifies a `StringSignal` representing the identifier of peer (used by External Stream Texture Factory to map stream with texture model).
*/
peerId: StringSignal

}
