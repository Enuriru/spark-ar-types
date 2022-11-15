/// <reference path="../Assets.AssetBase/index.d.ts" />
/// <reference path="../Assets.AssetType/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"},{"kind":"capability","capability":"imageAssets","orCapability":""},{"kind":"introducedBy","version":3601282246}]
*/


/**
The `ImageAsset` class represents an image asset to be used by textures.
*/
declare interface ImageAsset extends AssetBase {

/**
```
(get) assetType: AssetType
(set) (Not Available)
```

Asset type of this asset.
*/
assetType: AssetType

}
