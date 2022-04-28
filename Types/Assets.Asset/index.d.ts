/// <reference path="../Assets.AssetType/index.d.ts" />

declare interface Asset {

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

/**
```
loadAsString(): Promise<string>
```

Returns a promise with contents of this asset interpreted as UTF-8 string.
*/
loadAsString(): Promise<string>

}
