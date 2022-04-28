/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

declare interface PlatformTexture extends TextureBase {

/**
```
onMediaDataUpdate(): EventSource<number>
```

Returns an EventSource that will fire when the Platform Texture
media has been updated holding the current revision.
*/
onMediaDataUpdate(): EventSource<number>

}
