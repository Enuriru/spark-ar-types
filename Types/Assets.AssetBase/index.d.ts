

/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AssetBase` class represents shared functionality for asset classes,
like accessing an asset's name, identifier and registered type name.
*/
declare interface AssetBase {

/**
```
(get) assetType: string
(set) (Not Available)
```

Asset type of this asset as registered.
*/
assetType: string

/**
```
(get) identifier: string
(set) (Not Available)
```

Unique identifier of this asset.
*/
identifier: string

/**
```
(get) name: string
(set) (Not Available)
```

Name of this asset.
*/
name: string

}
