/// <reference path="../Assets.AssetBase/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"capability","capability":"imageAssets","orCapability":""},{"kind":"introducedBy","version":3601282246},{"kind":"capability","capability":"scriptingDynamicInstantiation","orCapability":""}]
*/


/**
The `ImageAsset` class represents an image asset to be used by textures.
*/
declare interface ImageAsset extends AssetBase {

/**
```
createImageTexture(): Promise<TextureBase>
```

Creates an ImageTexture for the ImageAsset.  If the ImageAsset has been
preloaded() this call will complete faster.
*/
createImageTexture(): Promise<TextureBase>

/**
```
preload(): Promise<void>
```

A promise that will resolve once the given ImageAsset is preloaded, ie.
a subsequent call to createImageTexture() will find a cached texture
storage available for this image asset and thus completes fast.
*/
preload(): Promise<void>

}
