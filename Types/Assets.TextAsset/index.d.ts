/// <reference path="../Assets.AssetBase/index.d.ts" />
/// <reference path="../Assets.AssetType/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `TextAsset` class represents a text file asset.
*/
declare interface TextAsset extends AssetBase {

/**
```
(get) assetType: AssetType
(set) (Not Available)
```

Asset type of this asset.
*/
assetType: AssetType

/**
```
loadAsString(): Promise<string>
```

Returns a promise with contents of this asset interpreted as UTF-8 string.
*/
loadAsString(): Promise<string>

}
