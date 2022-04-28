/// <reference path="../PlatformTextures.PlatformTextureMediaBase/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
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

*/
createTexture(media: PlatformTextureMediaBase): Promise<TextureBase>

/**
```
onMediaDataSetChange(): EventSource<Array<PlatformTextureMediaBase>>
```

Returns an EventSource that will fire when ...
*/
onMediaDataSetChange(): EventSource<Array<PlatformTextureMediaBase>>

}
