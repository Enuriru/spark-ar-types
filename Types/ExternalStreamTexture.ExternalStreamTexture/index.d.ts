/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `ExternalStreamTexture` class represents an image texture passed in via external stream provider.
*/
declare interface ExternalStreamTexture extends TextureBase {

/**
```
(get) streamId: StringSignal
(set) streamId: StringSignal
```

Specifies a `StringSignal` representing the identifier of stream (used by External Stream Texture Factory to map stream with texture model).
*/
streamId: StringSignal

/**
```
(get) streamIdentifier: string
(set) streamIdentifier: string
```

Specifies a string representing the identifier of stream (used by External Stream Texture Factory to map stream with texture model).
*/
streamIdentifier: string

}
