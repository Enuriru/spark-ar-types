/// <reference path="../Assets.AssetBase/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `TextAsset` class represents a text file asset.
*/
declare interface TextFileAsset extends AssetBase {

/**
```
loadAsString(): Promise<string>
```

Returns a promise with contents of this asset interpreted as UTF-8 string.
*/
loadAsString(): Promise<string>

}
