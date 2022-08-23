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
(get) participant: StringSignal
(set) participant: StringSignal
```

Sets a participant id (from Participant API) for the given Participant Texture.
Returns a participant id (from Participant API) for the given Participant Texture.
It expects a `StringSignal`.

It returns a `StringSignal`.
*/
participant: StringSignal

/**
```
(get) peerId: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` representing the identifier of the participant video stream texture.
*/
peerId: StringSignal

}
