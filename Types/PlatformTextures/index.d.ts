/// <reference path="../PlatformTextures.PlatformTexture/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Textures.PlatformTextureMediaBase/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
`PlatformTextures` module exposes functionality to send and receive textures between effect's
script and platform.
*/
declare interface PlatformTextures extends Module {

/**
```
createTexture(media: PlatformTextureMediaBase): Promise<TextureBase>
```

Creates a new PlatformTexture with 'media' as the backing media as sent by product.
*/
createTexture(media: PlatformTextureMediaBase): Promise<TextureBase>

/**
```
destroyTexture(texture: PlatformTexture): Promise<void>
```

Destroys a given platform texture.
*/
destroyTexture(texture: PlatformTexture): Promise<void>

/**
```
onMediaDataSetChange(): EventSource<Array<PlatformTextureMediaBase>>
```

Returns an EventSource that will fire when product announces a new set
of media that includes new media that has not been seen before.
If product announces media that was previously seen, onMediaDataUpdate()
on PlatformTexture will be used for notification instead.

PlatformTextureMediaBase.mediaId() is used to decide if an announced
media is considered 'new' (and thus notified via onMediaDataSetChange())
or 'pre-existing' (and thus notified via onMediaDataUpdate()).
*/
onMediaDataSetChange(): EventSource<Array<PlatformTextureMediaBase>>

}
