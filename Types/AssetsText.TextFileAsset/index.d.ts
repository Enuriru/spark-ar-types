/// <reference path="../Assets.AssetBase/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `TextFileAsset` class represents a text file asset.
Text file assets can be added in Studio via the Assets panel and represent a
plain text file.  Those can be disovered during runtime via the APIs available
in the Assets module and then loaded via the loadAsString API here.
*/
declare interface TextFileAsset extends AssetBase {

/**
```
loadAsString(): Promise<string>
```

Returns a promise holding the contents of this text file asset interpreted as
a string.
*/
loadAsString(): Promise<string>

}
