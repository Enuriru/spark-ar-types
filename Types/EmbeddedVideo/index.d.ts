/// <reference path="../EmbeddedVideo.EmbeddedVideoTexture/index.d.ts" />
/// <reference path="../EmbeddedVideo.VideoAsset/index.d.ts" />
/// <reference path="../EmbeddedVideo.VideoAssets/index.d.ts" />
/// <reference path="../EmbeddedVideo.VideoMedia/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":3345490190}]
*/


/**
`EmbeddedVideo` module exposes functionality to create controller to control playback of video
*/
declare interface EmbeddedVideo extends Module {

/**
```
(get) videoAssets: VideoAssets
(set) (Not Available)
```

Get an object that allows access to video assets.
*/
videoAssets: VideoAssets

/**
```
createTexture(videoMedia: VideoMedia): Promise<TextureBase>
```

Creates a new texture that plays back the video
*/
createTexture(videoMedia: VideoMedia): Promise<TextureBase>

/**
```
createVideoMedia(videoAsset: VideoAsset): Promise<VideoMedia>
```

Creates a VideoMedia from VideoAsset.
*/
createVideoMedia(videoAsset: VideoAsset): Promise<VideoMedia>

/**
```
destroyTexture(texture: EmbeddedVideoTexture): Promise<void>
```

Destroys a given EmbeddedVideoTexture.
*/
destroyTexture(texture: EmbeddedVideoTexture): Promise<void>

}
