/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />


/**
[{"kind":"introducedBy","version":3525458997}]
*/


/**
The `PeerVideoStreamTexture` class represents an image texture passed in via external stream provider.
*/
declare interface PeerVideoStreamTexture extends TextureBase {

/**
```
(get) peerId: StringSignal
(set) peerId: StringSignal
```

Specifies a `StringSignal` representing the identifier of peer (used by Peer Video Stream Texture Factory to map stream with texture model).
*/
peerId: StringSignal

}