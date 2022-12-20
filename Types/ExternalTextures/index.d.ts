/// <reference path="../Textures.ExternalTexture/index.d.ts" />
/// <reference path="../Textures.ExternalTextureMediaBase/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
`ExternalTextures` module exposes functionality to create objects to control playback of media
*/
declare interface ExternalTextures extends Module {

/**
```
getMedia(externalTexture: ExternalTexture): Promise<ExternalTextureMediaBase>
```

Returns ExternalTextureMediaBase to control the ExternalTexture object
Video type ExternalTextureMediaBase APIs in ExternalTextureMediaVideo
to control video playback
*/
getMedia(externalTexture: ExternalTexture): Promise<ExternalTextureMediaBase>

}
