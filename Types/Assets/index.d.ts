/// <reference path="../Assets.AssetBase/index.d.ts" />


/**
[{"kind":"capability","capability":"textAssets","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AssetsModule` class allows you to discover and use the assets packaged together with
an effect.
*/
declare interface Assets extends Module {

/**
```
(get) AssetType: {[key: string]: string}
(set) (Not Available)
```

Accessor that will return the names of all registered asset types.  The name of an asset type
is as it is returned via assetType() API on AssetBase:
- Assets.AssetType.Image
- Assets.AssetType.Text

The properties returned by this API depend on the set of plugins loaded as they can declare
additional asset types.
*/
AssetType: {[key: string]: string}

/**
```
findFirst(name: string, assetType: string): Promise<AssetBase | null>
```

Finds the first asset of any type that matches a given name pattern.  The optional
assetType parameter can be used to scope the search to a specific asset type as returned
by the assetType property.
*/
findFirst(name: string, assetType: string): Promise<AssetBase | null>

/**
```
findFirstSync(name: string, assetType: string): AssetBase | null
```

Finds the first asset of any type that matches a given name pattern.  The optional
assetType parameter can be used to scope the search to a specific asset type as returned
by the assetType property.
*/
findFirstSync(name: string, assetType: string): AssetBase | null

/**
```
findUsingPattern(namePattern: string, config?: {assetType: string, limit: number}): Promise<Array<AssetBase>>
```

Find assets of any type with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {assetType: string, limit: number}): Promise<Array<AssetBase>>

/**
```
findUsingPatternSync(namePattern: string, config?: {assetType: string, limit: number}): Array<AssetBase>
```

Find assets of any type with names that match a given pattern.
*/
findUsingPatternSync(namePattern: string, config?: {assetType: string, limit: number}): Array<AssetBase>

/**
```
getAll(): Promise<Array<AssetBase>>
```

Get all assets of any type that are bundled in this effect.
*/
getAll(): Promise<Array<AssetBase>>

/**
```
getAllSync(): Array<AssetBase>
```

Get all assets of any type that are bundled in this effect.
*/
getAllSync(): Array<AssetBase>

}
